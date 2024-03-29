import { getDataById } from "@app/fb/connectFb";
import { useRouter } from "next/router";
import { useMemo, useState, useEffect } from "react";
import { Users } from "./../model/Users.model";
import { auth } from "fb/clientApp";
import { signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
export default function useAuth() {
  const router = useRouter();
  const [isWindow, setIsWindow] = useState(false);
  const isLogged = useMemo(
    () => (isWindow ? !!localStorage.getItem("user") : false),
    [isWindow]
  );
  const currentUser: Users | null = useMemo(
    () => JSON.parse(localStorage.getItem("user")) || null,
    [isWindow]
  );

  useEffect(() => setIsWindow(true), []);

  const login = (values: Users) => {
    signInWithEmailAndPassword(auth, values.username, values.password)
      .then(async (user) => {
        const account = (await getDataById(user.user.uid, "Account")) as Users;
        console.log(account);
        localStorage.setItem("user", JSON.stringify(account));
        router.push("/admin");
      })
      .catch();
  };

  const logout = () => {
    signOut(auth).then().catch();
    localStorage.removeItem("user");
    router.push("/login");
  };

  return { login, logout, isLogged, currentUser };
}
