import { useQuery } from "@tanstack/react-query";

import { getShops } from "./api";
import { Shop } from "./types";

export const useShopList = () => {
  const {
    data: shops = [],
    error = "No internet connection",
    isLoading,
    isError,
    isSuccess,
  } = useQuery<Shop[], string>(["shops"], () =>
    getShops().then((res) => res.data || [])
  );

  return { shops, error, isLoading, isError, isSuccess };
};
