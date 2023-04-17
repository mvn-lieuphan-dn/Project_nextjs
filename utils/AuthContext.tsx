import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@app/fb/clientApp";

export type UserContext = {
  user?: User | null;
};

export const AuthContext = React.createContext<UserContext>({ user: null });
export const useAuthContext = () => React.useContext(AuthContext);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
