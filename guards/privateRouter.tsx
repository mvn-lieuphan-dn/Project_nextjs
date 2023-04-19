import { memo } from "react";
import type { AppProps } from "next/app";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function PrivateRouter({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </>
  );
}

export default memo(PrivateRouter);
