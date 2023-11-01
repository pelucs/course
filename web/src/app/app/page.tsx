import { Button } from "@/components/ui/button";
import { Header } from "./HeaderApp";
import { Sidebar } from "./Sidebar";
import { ChevronRight, Library } from "lucide-react";
import Link from "next/link";
import { getUser } from "@/lib/auth";

export default async () => {

  const { name } = getUser();

  return(
    <div className="flex relative">
      <Sidebar/>

      <div className="flex-1">
        <Header/>

        <div className="flex-1 h-full p-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h1 className="text-4xl font-bold">
                Olá, {name.split(' ')[0]}
              </h1>

              <p className="text-muted-foreground">
                É bom ter você de volta! <br/>
                Continue aprendendo, retorne para aula que parou.
              </p>
            </div>

            <Button asChild>
              <Link href="/app/modules">
                <Library className="w-5 h-5 mr-2"/>

                Acessar módulos
              </Link>
            </Button>
          </div>

          <Link href="" className="mt-10 p-8 flex items-center justify-between rounded bg-gradient-to-l 
          border-2 border-transparent hover:border-violet-500 to-secondary from-violet-500 transition-colors">
            <div>
              <h1 className="text-3xl font-bold leading-relaxed">
                Manipulando a textura grunge
              </h1>

              <span className="text-muted-foreground">
                Módulo / Texturas
              </span>
            </div>

            <span className="uppercase font-bold flex items-center gap-2">
              Continuar assistindo

              <Button className="w-8 h-8 p-0 rounded-full">
                <ChevronRight className="w-6 h-6"/>
              </Button>
            </span>
          </Link>

          <div className="mt-5 grid grid-cols-2 gap-5">
            <div className="h-[30vh] bg-secondary rounded">

            </div>

            <div className="h-[30vh] bg-secondary rounded">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}