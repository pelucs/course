import { BadgeCheck, Eye } from "lucide-react";
import { HeaderApp } from "../HeaderApp";
import { Sidebar } from "../Sidebar";
import { cookies } from "next/headers";
import { RedirectClient } from "@/components/RedirectClient";
import Link from "next/link";

const modules = [
  { name: "Texturas", lessons: "10" },
  { name: "Efeitos", lessons: "10" },
]

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

        <div className="p-7">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <BadgeCheck className="w-8 h-8"/>
              
              Certificados
            </h1>

            <span className="block mt-2 text-muted-foreground">
              Você tem 2 certificados
            </span>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-5">
            {modules.map(module => (
              <Link 
                href="" 
                key={module.name} 
                className="py-3 px-4 h-[40vh] flex flex-col gap-4 bg-secondary/50 rounded-md border border-transparent 
                hover:border-violet-500 transition-colors"
              >
                <div className="flex-1 h-28 border border-zinc-700 rounded"/>

                <div className="space-y-1">
                  <h1 className="text-xl font-semibold">
                    {module.name}
                  </h1>

                  <h1 className="text-muted-foreground uppercase font-semibold text-xs flex items-center gap-2">                      
                    <span className="flex items-center justify-center rounded-full p-1 bg-violet-500/50">
                      <Eye className="w-4 h-4"/>
                    </span>

                    Visualizar certificado
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}