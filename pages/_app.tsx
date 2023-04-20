import "@app/styles/globals.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthContextProvider } from "@app/utils/AuthContext";
import React from "react";
// import PrivateRouter from "@app/guards/privateRouter";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        {/* <PrivateRouter Component={Component} pageProps={pageProps} /> */}
        <Component {...pageProps} />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}
