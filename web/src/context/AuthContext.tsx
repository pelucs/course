"use client"

import { api } from "@/api/api";
import { UserTypes } from "@/utils/userTypes";
import { cookies } from "next/headers";
import { ReactNode, createContext, useEffect, useState } from "react";

const decode = require("jwt-decode")

interface AuthContextProviderChildren{
  children: ReactNode;
}

interface AuthContextProps{
  user: UserTypes;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderChildren){

  const [user, setUser] = useState<any>(null);

  useEffect(() => {

    const token = cookies().get("token")?.value;

    if(!token){
      throw new Error("Unauthenticated")
    }

    const decodeToken = decode(token);

    console.log(decodeToken)

    // const fetch = async () => {
    //   const getUser = await api.get(`/user/:${}`)
    // }

    // fetch();

  }, []);

  return(
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}