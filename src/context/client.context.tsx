import { IClient } from "@/shared/interfaces/clients/client.response";
import { EditClienteParams } from "@/shared/interfaces/https/edit-client";
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
  editingClient: IClient | null;
  loading: boolean;
  fetchClients: (params: FetchClientParams) => Promise<void>;
  refresh: () => Promise<void>;
  loadMoreClients: () => Promise<void>;
  editClient: (id: number, clientData: EditClienteParams) => Promise<void>;
  setEditingClient: (client: IClient | null) => void;
};

export const ClientContext = createContext<ClientContextType>(
  {} as ClientContextType
);

export function ClienteContextProvider({ children }: PropsWithChildren) {
  const [clients, setClients] = useState<IClient[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingClient, setEditingClient] = useState<IClient | null>(null);
  const [pagination, setPagination] = useState<QueryPagination>({
    pagina: 0,
    itens_por_pagina: 200,
    total_registros: 0,
  });

  async function refresh() {
    setLoading(true);
    try {
      const clientResponse = await clientServices.getAllClients({
        pagina: 0,
        itens_por_pagina: 200,
      });

      if (clientResponse && clientResponse.clientes) {
        setClients(clientResponse.clientes);
        setPagination({
          pagina: 0,
          itens_por_pagina: 200,
          total_registros: clientResponse.paginacao?.total_registros || 0,
        });
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  const fetchClients = useCallback(
    async ({ pagina = 0 }: FetchClientParams) => {
      setLoading(true);
      try {
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
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [pagination]
  );

  const editClient = async (id: number, clientData: EditClienteParams) => {
    setLoading(true);
    try {
      const response = await clientServices.editClientById(id, clientData);

      if (response && response.cliente) {
        setEditingClient(response.cliente);

        await fetchClients({ pagina: 0 });
      } else {
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const loadMoreClients = useCallback(async () => {
    if (loading) {
      return;
    }

    await fetchClients({ pagina: pagination.pagina + 1 });
  }, [loading, pagination]);

  return (
    <ClientContext.Provider
      value={{
        clients,
        loading,
        editingClient,
        fetchClients,
        refresh,
        loadMoreClients,
        editClient,
        setEditingClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}

export function useClientContext() {
  const context = useContext(ClientContext);
  if (!context) {
    console.error(
      "❌ useClientContext deve ser usado dentro de ClienteContextProvider"
    );
    throw new Error(
      "useClientContext deve ser usado dentro de ClienteContextProvider"
    );
  }
  return context;
}
