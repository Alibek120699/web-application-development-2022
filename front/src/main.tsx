import React from "react";
import ReactDOM from "react-dom/client";
import { YMaps } from "react-yandex-maps";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <YMaps>
          <App />
        </YMaps>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
