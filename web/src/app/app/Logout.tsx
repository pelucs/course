'use client'

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

import clsx from "clsx";

interface LogoutProps{
  open: boolean;
}

export function LogoutButton({ open }: LogoutProps){
  return(
    <Button 
      variant="destructive" 
      className={clsx("w-full transition-all", {
        "justify-start gap-2 p-5": open,
        "p-0": !open
      })}
    >
      <LogOut className="w-4 h-4"/>

      {open && "Encerrar sessão"}
    </Button>
  );
}