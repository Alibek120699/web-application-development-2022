import { useQuery } from "@tanstack/react-query";

import { parseApplication } from "./parsers";
import { getApplications } from "./api";
import { Application } from "./types";

export const useApplications = () => {
  const {
    data: applications = [],
    error = "No internet connection",
    isLoading,
    isError,
    isSuccess,
  } = useQuery<Application[], string>(["applications"], () =>
    getApplications().then((res) => (res.data || []).map(parseApplication))
  );

  return { applications, error, isLoading, isError, isSuccess };
};
