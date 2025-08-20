import { IClient } from "@/shared/interfaces/clients/client.response";
import { QueryPagination } from "@/shared/interfaces/https/get-client";
import * as clientServices from "@/shared/services/dev-hub/client.service";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

interface FetchClientParams {
  pagina: number;
}

type ClientContextType = {
  clients: IClient[];
  loading: boolean;
  fetchClients: (params: FetchClientParams) => Promise<void>;
  refresh: () => Promise<void>;
  loadMoreClients: () => Promise<void>;
};

export const ClientContext = createContext<ClientContextType>(
  {} as ClientContextType
);

export function ClienteContextProvider({ children }: PropsWithChildren) {
  const [clients, setClients] = useState<IClient[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<QueryPagination>({
    pagina: 0,
    itens_por_pagina: 15,
    total_registros: 0,
  });

  async function refresh() {
    const { pagina, itens_por_pagina } = pagination;
    setLoading(true);
    const clientResponse = await clientServices.getAllClients({
      pagina: 0,
      itens_por_pagina: pagina * itens_por_pagina,
    });

    setClients(clientResponse.clientes);
    setPagination({
      ...pagination,
      pagina,
    });
    setLoading(false);
  }

  const fetchClients = useCallback(
    async ({ pagina = 0 }: FetchClientParams) => {
      setLoading(true);
      const clientResponse = await clientServices.getAllClients({
        pagina,
        itens_por_pagina: pagination.itens_por_pagina,
      });

      if (pagina === 0) {
        setClients(clientResponse.clientes);
      } else {
        setClients((prevState) => [...prevState, ...clientResponse.clientes]);
      }
      setPagination({
        ...pagination,
        pagina,
        total_registros: clientResponse.paginacao.total_registros,
      });
      setLoading(false);
    },
    [pagination]
  );

  const loadMoreClients = useCallback(async () => {
    if (loading) return;

    await fetchClients({ pagina: pagination.pagina + 1 });
  }, [loading, pagination]);
  return (
    <ClientContext.Provider
      value={{ clients, loading, fetchClients, refresh, loadMoreClients }}
    >
      {children}
    </ClientContext.Provider>
  );
}

export function useClientContext() {
  return useContext(ClientContext);
}
