import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  ReactNode,
  useEffect,
} from "react";

import { fetchAttentance } from "@/shared/services/dev-hub/services.service";
import {
  GetAttentanceResponse,
  GetAttentanceParams,
} from "@/shared/interfaces/attentances/attentance.response";

interface AttentanceContextData {
  attentances: GetAttentanceResponse[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  busca: string;
  termoBusca: string;
  setBusca: (busca: string) => void;
  setTermoBusca: (termo: string) => void;
  loadMore: () => void;
  resetList: () => void;
}

const AttentanceContext = createContext<AttentanceContextData>(
  {} as AttentanceContextData
);

export function AttentanceContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [attentances, setAttentances] = useState<GetAttentanceResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const [busca, setBusca] = useState("");
  const [termoBusca, setTermoBusca] = useState("");

  const limit = 20;

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    if (!busca || !termoBusca) return;

    setLoading(true);
    setError(null);

    try {
      const params: GetAttentanceParams & { page: number; limit: number } = {
        busca,
        termo_busca: termoBusca,
        page,
        limit,
      };

      const response = await fetchAttentance(params);
      const data = response;

      if (data.length < limit) setHasMore(false);

      setAttentances((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    } catch (err: any) {
      setError(err.message || "Erro ao carregar atendimentos");
    } finally {
      setLoading(false);
    }
  }, [busca, termoBusca, page, loading, hasMore]);

  useEffect(() => {
    setAttentances([]);
    setPage(1);
    setHasMore(true);

    if (busca && termoBusca) {
      loadMore();
    }
  }, [busca, termoBusca]);

  const resetList = useCallback(() => {
    setAttentances([]);
    setPage(1);
    setHasMore(true);
  }, []);

  return (
    <AttentanceContext.Provider
      value={{
        attentances,
        loading,
        error,
        hasMore,
        busca,
        termoBusca,
        setBusca,
        setTermoBusca,
        loadMore,
        resetList,
      }}
    >
      {children}
    </AttentanceContext.Provider>
  );
}

export function useAttentanceContext() {
  return useContext(AttentanceContext);
}
