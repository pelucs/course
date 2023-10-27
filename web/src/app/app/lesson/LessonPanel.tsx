"use client"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck, CheckCircle, Library, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const lessons = [
  { name: "Introdução: Manipulando backgroundsjashdjakshdkjasjdhas"},
  { name: "Aula 2"},
  { name: "Aula 3"},
  { name: "Aula 4"},
  { name: "Aula 5"},
  { name: "Aula 6"},
]

export function LessonPanel(){

  return(
    <div className="w-[370px] h-[calc(100vh-64px)] p-5 sticky top-16 border-l bg-secondary/50 overflow-y-auto">
      <div>
        <span className="text-muted-foreground uppercase font-semibold text-xs flex items-center gap-2">
          <Library className="w-4 h-4"/>
          
          Módulo
        </span>

        <h1 className="mt-2 text-2xl font-semibold">
          Texturas
        </h1>
      </div>

      <Separator className="my-4"/>

      <div>
        <div className="flex items-center justify-between text-muted-foreground uppercase text-[10px] font-semibold">
          <h1>
            Concluídos
          </h1>

          <span>
            90%
          </span>
        </div>

        <div className="w-full h-1 mt-2 bg-secondary rounded overflow-hidden">
          <span className="w-[90%] h-full block bg-violet-500"/>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        {lessons.map(lesson => (
          <Link 
            href="" 
            key={lesson.name} 
            className="p-4 flex flex-col gap-4 rounded border hover:bg-secondary hover:border-violet-500 transition-colors"
          >
            <span className="w-fit px-2 py-1 flex items-center gap-1 rounded bg-green-500/30 text-green-500 text-xs uppercase">
              <CheckCircle className="w-4 h-4"/>

              Concluída
            </span>

            <div className="flex items-center justify-between gap-2">
              <h1 title={lesson.name} className="whitespace-nowrap text-ellipsis overflow-x-hidden">
                {lesson.name}
              </h1>

              <span className="flex items-center gap-1 uppercase font-semibold text-[10px] text-muted-foreground">
                <PlayCircle className="w-4 h-4"/>

                Assistir
              </span>
            </div>
          </Link>
        ))}
      </div>

      <Button className="w-full mt-5 gap-1">
        <BadgeCheck className="w-4 h-4"/>

        Resgatar certificado
      </Button>
    </div>
  );
}