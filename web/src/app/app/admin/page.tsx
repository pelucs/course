import { UserCog } from "lucide-react";
import { HeaderApp } from "../HeaderApp";
import { Sidebar } from "../Sidebar";
import { Separator } from "@/components/ui/separator";
import { getUser } from "@/lib/auth";
import { cookies } from "next/headers";
import { RedirectClient } from "@/components/RedirectClient";

export default () => {

  const isAuthenticated = cookies().has('token');
  
  if(!isAuthenticated){
    return <RedirectClient to="/login"/>
  }
  
  const { sub } = getUser();

  if(sub !== '65cd059f8535d1f7b1d77cf5'){
    return <RedirectClient to="/app"/>
  }

  const length = [1, 2, 3, 4, 5]; 

  return(
    <div className="flex relative">
      <Sidebar/>

      <div className="flex-1">
        <HeaderApp/>

        <div className="p-7">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <UserCog className="w-8 h-8"/>
              
              Área Adm
            </h1>
          </div>

          <Separator className="my-5"/>

          <div className="mt-5">
            <h1 className="text-xl font-semibold">Professores</h1>

            <div className="mt-2 grid grid-cols-5 gap-4">
              {length.map(() => (
                <div className="h-[280px] p-5 bg-secondary rounded flex flex-col justify-end items-start">
                  <h1 className="text-lg font-semibold">Pedro Lucas</h1>
                  <span className="text-xs text-muted-foreground">Design Sênior</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}