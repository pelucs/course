"use client"

import { Logo } from "@/components/Logo";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { MoveLeft } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import { LoginForm } from "./LoginForm";

export default () => {

  const [active, setActive] = useState<boolean>(false);

  useEffect(() => setActive(true), []);

  return(
    <div className={clsx("w-full h-screen flex items-center justify-center gap-20 relative duration-500 transition-all", {
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

        <Link href="/signup" className="flex items-center gap-2 text-violet-500">
          <MoveLeft className="w-4 h-5"/>

          Criar conta
        </Link>
      </div>
    </div>
  );
}