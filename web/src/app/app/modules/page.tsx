import Link from "next/link";
import { HeaderApp } from "../HeaderApp";
import { Sidebar } from "../Sidebar";
import { Library, MoveRight, PlayCircle } from "lucide-react";
import { cookies } from "next/headers";
import { RedirectClient } from "@/components/RedirectClient";

const modules = [
  { name: "Texturas", lessons: "10" },
  { name: "Efeitos", lessons: "10" },
  { name: "Formas", lessons: "10" },
  { name: "Gradientes", lessons: "10" },
  { name: "Fontes", lessons: "10" },
  { name: "Manipulação de imagens", lessons: "10" },
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

        <div className="w-full p-7">
          <Link href="" className="w-full px-4 py-3 flex items-center justify-between rounded-md bg-gradient-to-l 
          to-secondary from-violet-500 border border-transparent hover:border-violet-300 transition-colors">
            Novidade! Módulo sobre manipulação de texturas adicionado a biblioteca.

            <span className="flex items-center gap-2">
              Ver mais

              <MoveRight className="w-4 h-4"/>
            </span>
          </Link>

          <div className="mt-10">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <Library className="w-10 h-10"/>
                
                Módulos
              </h1>

              <span className="text-muted-foreground">
                Total de 10 módulos
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
                        <PlayCircle className="w-4 h-4"/>
                      </span>

                      {module.lessons} aulas
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}