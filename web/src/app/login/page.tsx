"use client"

import { Logo } from "@/components/Logo";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Home, MoveRight } from "lucide-react";
import { LoginForm } from "./LoginForm";
import { Header } from "@/components/Header";
import Link from "next/link";
import clsx from "clsx";

export default () => {

  const [active, setActive] = useState<boolean>(false);

  useEffect(() => setActive(true), []);

  return(
    <div>
      <Header/>

      <div className={clsx("w-full min-h-[calc(100vh-120px)] py-10 px-5 flex flex-col-reverse md:flex-row items-start md:items-center justify-center gap-20 relative duration-500 transition-all", {
        "translate-x-0 opacity-100": active,
        "-translate-x-10 opacity-0": !active
      })}>
        <div className="w-full max-w-md p-6 bg-secondary/50 rounded-md"> 
          <div>
            <h1 className="text-2xl font-semibold">
              Efetue seu login
            </h1>

            <span className="text-sm text-muted-foreground">
              Preencha todos os campos corretamente
            </span>
          </div>

          <Separator className="my-5"/>

          <LoginForm/>
        </div>
      
        <div className="space-y-10">
          <Logo/>

          <h1 className="text-4xl font-bold">
            Sempre bom te <br/>
            ver novamente
          </h1>

          <p className="w-full max-w-sm text-muted-foreground">
            Junte-se a comunidade e desenvolva seus conhecimentos em design.
          </p>

          <div className="flex items-center gap-10">
            <Link href="/signup" className="flex items-center gap-2">
              <Home className="w-4 h-4"/>

              Voltar ao início
            </Link>

            <Link href="/signup" className="py-2 px-3 border border-violet-700 rounded flex items-center gap-2
            hover:bg-violet-500 transition-colors hover:text-white">
              Criar conta

              <MoveRight className="w-4 h-5"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}