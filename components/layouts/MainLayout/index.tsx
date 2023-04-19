import { memo, ReactNode, useState } from "react";
import Header from "./../MainLayout/header";
import Footer from "./../MainLayout/footer";
import useAuth from "@app/hooks/useAuth";
import { useRouter } from "next/router";

import { ROUTER } from "@app/constants/router";
import { useEffect } from "react";
type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  const [isloading, setIsLoading] = useState(true);
  const { currentUser } = useAuth();
  const router = useRouter();

  const currentRouter = ROUTER.find((r) => r.path === router?.pathname);

  useEffect(() => {
    if (!currentRouter?.permissions.includes(currentUser?.position)) {
      setIsLoading(false);
      // router.push("/");
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isloading) return <div>Loading1...</div>;

  return (
    <div>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
}
export default memo(MainLayout);
