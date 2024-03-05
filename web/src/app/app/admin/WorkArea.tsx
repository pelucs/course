'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";

export function WorkArea(){

  const [workArea, setWorkArea] = useState<string>(() => {
    return localStorage.getItem('workArea') || 'aulas'
  });

  useEffect(() => {
    localStorage.setItem('workArea', workArea);
  }, [workArea]);

  const handleWorkAreaChange = (newValue: string) => {
    setWorkArea(newValue);
    window.location.pathname = `/app/admin/${newValue}`
  }

  //CONSERTAR

  return(
    <Select onValueChange={handleWorkAreaChange} defaultValue={workArea}>
      <SelectTrigger className="max-w-[200px]">
        <SelectValue placeholder="Área"/>
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="professores">Professores</SelectItem>
        <SelectItem value="aulas">Aulas</SelectItem>
        <SelectItem value="alunos">Alunos</SelectItem>
      </SelectContent>
    </Select>
  );
}