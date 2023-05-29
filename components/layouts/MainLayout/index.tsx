import { memo, ReactNode, useState } from "react";
import Header from "./../MainLayout/header";
import Footer from "./../MainLayout/footer";

import { useEffect } from "react";
import Loading from "@app/components/features/loading";
type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isloading) return <Loading />;
  return (
    <div>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
}
export default memo(MainLayout);
