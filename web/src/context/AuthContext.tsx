import { api } from "@/api/api";
import { UserTypes } from "@/utils/userTypes";
import { ReactNode, createContext, useEffect, useState } from "react";

interface AuthContextProviderChildren{
  children: ReactNode;
}

interface AuthContextProps{
  user: UserTypes;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderChildren){

  const [user, setUser] = useState<UserTypes | null>(null);

  useEffect(() => {

    const fetch = async () => {
      
    }

  }, []);

  return(
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}