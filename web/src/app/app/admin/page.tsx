import { Sidebar } from "../Sidebar";
import { getUser } from "@/lib/auth";
import { cookies } from "next/headers";
import { HeaderApp } from "../HeaderApp";
import { Separator } from "@/components/ui/separator";
import { RedirectClient } from "@/components/RedirectClient";
import { HeaderAdmin } from "./HeaderAdmin";
import { Button } from "@/components/ui/button";
import { Contact, PlaySquare, User, Users } from "lucide-react";
import Link from "next/link";

export default () => {

  //Verificar se existe usuário autenticado
  const isAuthenticated = cookies().has('token');

  const idAdmin = process.env.NEXT_PUBLIC_ADMIN_ID;
  
  if(!isAuthenticated){
    return <RedirectClient to="/login"/>
  }
  
  const { sub } = getUser();

  //Verificar se a conta autenticada é administrativa
  if(sub !== idAdmin){
    return <RedirectClient to="/app"/>
  }

  return(
    <div className="flex relative">
      <Sidebar/>

      <div className="flex-1">
        <HeaderApp/>

        <div className="p-7">
          <HeaderAdmin/>

          <Separator className="my-5"/>

          <div>
            <h1 className="text-xl">Áreas de trabalho</h1>

            <div className="mt-3 flex items-center gap-5">
              <Button 
                asChild 
                variant={'secondary'}
                className="p-0 w-40 h-40 flex flex-col items-center"
              >
                <Link href="/app/admin/aulas">
                  <PlaySquare absoluteStrokeWidth size={80}/>

                  Aulas
                </Link>
              </Button>

              <Button 
                asChild 
                variant={'secondary'}
                className="p-0 w-40 h-40 flex flex-col items-center"
              >
                <Link href="/app/admin/professores">
                  <Users absoluteStrokeWidth size={80}/>

                  Professores
                </Link>
              </Button>

              <Button 
                asChild 
                variant={'secondary'}
                className="p-0 w-40 h-40 flex flex-col items-center"
              >
                <Link href="/app/admin/professores">
                  <Contact absoluteStrokeWidth size={80}/>

                  Alunos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}