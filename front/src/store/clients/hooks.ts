import { useQuery } from "@tanstack/react-query";

import { parseClient } from "./parsers";
import { getClients } from "./api";
import { Client } from "./types";

export const useClients = () => {
  const {
    data: clients = [],
    error = "No internet connection",
    isLoading,
    isError,
    isSuccess,
  } = useQuery<Client[], string>(["clients"], () =>
    getClients().then((res) => (res.data || []).map(parseClient))
  );

  return { clients, error, isLoading, isError, isSuccess };
};
