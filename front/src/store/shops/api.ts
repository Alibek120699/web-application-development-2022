import { AxiosResponse } from "axios";

import { request } from "../axios";
import { Shop } from "./types";

export const getShops = (): Promise<AxiosResponse<Shop[]>> => {
  return request.get(`/api/shops.json`);
};
