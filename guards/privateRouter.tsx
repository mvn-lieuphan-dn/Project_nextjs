import { memo } from "react";

// import { useAuthContext } from "@app/utils/AuthContext";
// import { getDataById } from "@app/fb/connectFb";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { ROUTER } from "@app/constants/router";
// import { Users } from "@app/model/Users.model";
// import useAuth from "@app/hooks/useAuth";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function PrivateRouter({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

export default memo(PrivateRouter);
