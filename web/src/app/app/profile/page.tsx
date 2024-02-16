import { RedirectClient } from "@/components/RedirectClient";
import { HeaderApp } from "../HeaderApp";
import { Sidebar } from "../Sidebar";
import { InfoProfile } from "./InfoProfile";
import { cookies } from "next/headers";

export default () => {

  const isAuthenticated = cookies().has('token');

  if(!isAuthenticated){
    return <RedirectClient to="/login"/>
  }

  return(
    <div className="flex relative">
      <Sidebar/>

      <div className="flex-1">
        <HeaderApp/>
        <InfoProfile/>
      </div>
    </div>
  );
}