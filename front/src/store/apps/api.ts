import { AxiosResponse } from "axios";

import { request } from "../axios";
import { ApplicationRaw } from "./types";

export const getApplications = (): Promise<AxiosResponse<ApplicationRaw[]>> => {
  return request.get(`/api/${2000}/apps.json`);
};
