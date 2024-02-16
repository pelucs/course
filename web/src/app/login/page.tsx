import { Header } from "@/components/Header";

import { cookies } from "next/headers";
import { RedirectClient } from "@/components/RedirectClient";
import { BoxLogin } from "./BoxLogin";

export default () => {
  
  const isAuthenticated = cookies().has('token');

  if(isAuthenticated){
    return <RedirectClient to="/app"/>
  }

  return(
    <div>
      <Header/>
      <BoxLogin/>
    </div>
  );
}