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

  const loadAttentances = useCallback(
    async (currentPage: number, resetData = false) => {
      if (loading || !busca || !termoBusca) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetchAttentance({
          busca,
          termo_busca: termoBusca,
          page: currentPage,
          limit,
        });

        if (response.length < limit) setHasMore(false);

        setAttentances((prev) =>
          resetData ? response : [...prev, ...response]
        );
        setPage(currentPage + 1);
      } catch (err: any) {
        setError(err?.message || "Erro ao carregar atendimentos");
      } finally {
        setLoading(false);
      }
    },
    [busca, termoBusca, loading]
  );

  const loadMore = useCallback(() => {
    if (hasMore && !loading) {
      loadAttentances(page);
    }
  }, [page, hasMore, loading, loadAttentances]);

  useEffect(() => {
    setAttentances([]);
    setPage(1);
    setHasMore(true);
    setError(null);

    if (busca && termoBusca) {
      loadAttentances(1, true);
    }
  }, [busca, termoBusca]); // Removido loadAttentances das dependências

  const resetList = useCallback(() => {
    setAttentances([]);
    setPage(1);
    setHasMore(true);
    setError(null);
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
  const context = useContext(AttentanceContext);
  if (!context) {
    throw new Error(
      "useAttentanceContext must be used within AttentanceContextProvider"
    );
  }
  return context;
}
