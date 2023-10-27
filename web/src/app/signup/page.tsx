'use client'

import { useState, useEffect } from 'react';
import { CreateAccount } from "./CreateAccount";
import { Logo } from "@/components/Logo";
import { Separator } from "@/components/ui/separator";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import clsx from 'clsx';

export default () => {

  const [active, setActive] = useState<boolean>(false);

  useEffect(() => setActive(true), []);

  return(
    <div className={clsx("w-full h-screen flex items-center justify-center gap-20 relative duration-500 transition-all", {
      "translate-x-0 opacity-100": active,
      "-translate-x-10 opacity-0": !active
    })}>
      <div className="space-y-10">
        <Logo/>

        <h1 className="text-4xl font-bold">
          Mais de 4 mil <br/>
          alunos conectados
        </h1>

        <p className="w-full max-w-sm text-muted-foreground">
          Junte-se a comunidade e desenvolva seus conhecimentos em design.
        </p>

        <Link href="/login" className="flex items-center gap-2 text-violet-500">
          Fazer login

          <MoveRight className="w-4 h-5"/>
        </Link>
      </div>

      <div className="w-full max-w-md p-6 bg-secondary/50 rounded-md"> 
        <div>
          <h1 className="text-2xl font-semibold">
            Crie sua conta
          </h1>

          <span className="text-sm text-muted-foreground">
            Preencha todos os campos corretamente
          </span>
        </div>

        <Separator className="my-5"/>

        <CreateAccount/>
      </div>
    </div>
  );
}