import { ReactNode } from "react";
import HeaderAuth from "./headerAuth";
import { useRouter } from "next/navigation";
// import { useAuthContext } from "@app/utils/AuthContext";
import useAuth from "@app/hooks/useAuth";

type BlankLayoutProps = {
  children: ReactNode;
};

export default function BlankLayout({ children }: BlankLayoutProps) {
  // const { user } = useAuthContext();
  const router = useRouter();
  const { isLogged } = useAuth();
  if (isLogged) router.push("/");
  return (
    <div className="auth-page">
      <HeaderAuth />
      <main className="container main-auth-page">{children}</main>
    </div>
  );
}
