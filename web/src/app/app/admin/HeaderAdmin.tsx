import { UserCog } from "lucide-react";
import { WorkArea } from "./WorkArea";

export function HeaderAdmin(){
  return(
    <div className="flex items-center justify-between gap-5">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <UserCog className="w-8 h-8"/>
        
        Área Adm
      </h1>

      <WorkArea/>
    </div>
  );
}