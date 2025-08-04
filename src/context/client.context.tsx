import { IClient } from "@/shared/interfaces/clients/client.response";
import * as clientServices from "@/shared/services/dev-hub/client.service";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

type ClientContextType = {
  clients: IClient[];
  fetchClients: () => Promise<void>;
};

export const ClientContext = createContext<ClientContextType>(
  {} as ClientContextType
);

export function ClienteContextProvider({ children }: PropsWithChildren) {
  const [clients, setClients] = useState<IClient[]>([]);

  const fetchClients = useCallback(async () => {
    const clientResponse = await clientServices.getAllClients({
      pagina: 0,
      itens_por_pagina: 10,
    });

    setClients(clientResponse.clientes);
  }, []);

  return (
    <ClientContext.Provider value={{ clients, fetchClients }}>
      {children}
    </ClientContext.Provider>
  );
}

export function useClientContext() {
  return useContext(ClientContext);
}
