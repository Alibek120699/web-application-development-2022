import { AxiosResponse } from "axios";

import { request } from "../axios";
import { Client } from "./types";

export const getClients = (): Promise<AxiosResponse<Client[]>> => {
  return request.get(`/api/${2000}/clients.json`);
};
