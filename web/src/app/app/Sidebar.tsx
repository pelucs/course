"use client"

import clsx from "clsx";
import Link from "next/link";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Home, User, Library, BadgeCheck, Settings, Headphones, LogOut, Send, ChevronsRight } from "lucide-react";

export function Sidebar(){

  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {

    let path = window.location.pathname;

    if(path.includes("/lesson")){
      setOpen(false);
    }

  }, []);

  return(
    <div className={clsx("h-screen p-5 sticky top-0 border-r transition-all overflow-x-hidden", {
      "w-[270px]": open,
      "w-[80px]": !open
    })}>
      <div className="h-full flex flex-col justify-between">
        <div className={clsx("w-full flex flex-col", {
          "items-start": open,
          "items-center": !open
        })}>
          <Button 
            onClick={() => setOpen(!open)} 
            variant="outline" 
            className={clsx("w-9 h-9 p-0 text-muted-foreground rounded transition-all", {
              "scale-0 absolute": open,
              "scale-100 mb-5": !open
            })}
          >
            <ChevronsRight className={clsx("w-4 h-4", {
              "rotate-180": open,
              "rotate-0": !open
            })}/>
          </Button> 

          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 flex items-center justify-center rounded-md bg-violet-500">
                D
              </span>

              {open && (
                <h1 className="font-bold text-xl">
                  DesignerPro
                </h1>
              )}
            </div>

            <Button 
              onClick={() => setOpen(!open)} 
              variant="outline" 
              className={clsx("w-9 h-9 p-0 text-muted-foreground rounded transition-all", {
                "scale-100": open,
                "scale-0": !open
              })}
            >
              <ChevronsRight className={clsx("w-4 h-4", {
                "rotate-180": open,
                "rotate-0": !open
              })}/>
            </Button>
          </div>

          <Separator className="my-5"/>

          <div>
            <h1 className="text-muted-foreground font-bold uppercase text-xs">Menu</h1>

            <nav className="mt-4">
              <Button 
                asChild 
                variant="ghost" 
                className={clsx("w-full py-5 transition-all", {
                  "justify-start gap-2 hover:px-3 px-0": open,
                  "px-0": !open
                })}
              >
                <Link href="/app">
                  <Home className="w-4 h-4"/>

                  {open && "Home"}
                </Link>
              </Button>

              <Button 
                asChild 
                variant="ghost" 
                className={clsx("w-full py-5 transition-all", {
                  "justify-start gap-2 hover:px-3 px-0": open,
                  "px-0": !open
                })}
              >
                <Link href="/app/profile">
                  <User className="w-4 h-4"/>

                  {open && "Perfil"}
                </Link>
              </Button>

              <Button 
                asChild 
                variant="ghost" 
                className={clsx("w-full py-5 transition-all", {
                  "justify-start gap-2 hover:px-3 px-0": open,
                  "px-0": !open
                })}
              >
                <Link href="/app/modules">
                  <Library className="w-4 h-4"/>

                  {open && "Módulos"}
                </Link>
              </Button>

              <Button 
                asChild 
                variant="ghost" 
                className={clsx("w-full py-5 transition-all", {
                  "justify-start gap-2 hover:px-3 px-0": open,
                  "px-0": !open
                })}
              >
                <Link href="/app/certificates">
                  <BadgeCheck className="w-4 h-4"/>

                  {open && "Certificados"}
                </Link>
              </Button>

              <Button 
                asChild 
                variant="ghost" 
                className={clsx("w-full py-5 transition-all", {
                  "justify-start gap-2 hover:px-3 px-0": open,
                  "px-0": !open
                })}
              >
                <Link href="">
                  <Send className="w-4 h-4"/>

                  {open && "Comunidade"}
                </Link>
              </Button>
            </nav>
          </div>

          <Separator className="my-5"/>

          <div>
            <h1 className="text-muted-foreground font-bold uppercase text-xs">Mais</h1>

            <nav className="mt-4">
              <Button 
                asChild 
                variant="ghost" 
                className={clsx("w-full py-5 transition-all", {
                  "justify-start gap-2 hover:px-3 px-0": open,
                  "px-0": !open
                })}
              >
                <Link href="/app">
                  <Settings className="w-4 h-4"/>

                  {open && "Configurações"}
                </Link>
              </Button>

              <Button 
                asChild 
                variant="ghost" 
                className={clsx("w-full py-5 transition-all", {
                  "justify-start gap-2 hover:px-3 px-0": open,
                  "px-0": !open
                })}
              >
                <Link href="/app/profile">
                  <Headphones className="w-4 h-4"/>

                  {open && "Suporte"}
                </Link>
              </Button>
            </nav>
          </div>
        </div>

        <Button 
          asChild 
          variant="destructive" 
          className={clsx("w-full transition-all", {
            "justify-start gap-2 p-5": open,
            "p-0": !open
          })}
        >
          <Link href="">
            <LogOut className="w-4 h-4"/>

            {open && "Encerrar sessão"}
          </Link>
        </Button>
      </div>
    </div>
  );
}