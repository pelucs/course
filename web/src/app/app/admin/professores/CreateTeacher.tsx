'use client'

import clsx from "clsx";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Dialog, 
  DialogClose, 
  DialogContent, 
  DialogOverlay, 
  DialogPortal, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { api } from "@/api/api";

export function CreateTeacher(){

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [profession, setProfession] = useState<string>("");
  const [numberPhone, setNumberPhone] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  const createTeacher = async () => {
    if(name.length > 0 && email.length > 0 && profession.length > 0 && numberPhone.length > 0 ){
      await api.post('/teacher', {
        name,
        email,
        bio,
        profession,
      })
      .then(() => alert('Professor cadastrado com sucesso!'))
    }
  }

  return(
    <Dialog>
      <DialogTrigger>
        <Button>
          <Plus className="w-4 h-4"/>

          Registrar professor
        </Button>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay/>

        <DialogContent className="w-full max-w-2xl flex flex-col gap-4">
          <div>
            <h1 className="font-semibold text-2xl">
              Registrar professor
            </h1>

            <span className="text-sm text-muted-foreground">
              Preencha todos os campos corretamente
            </span>
          </div>

          <Separator/>

          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 border-2 border-violet-500">
              <AvatarImage src="https://github.com/pelucs.png"/>
              <AvatarFallback className="text-2xl font-bold">
                P
              </AvatarFallback>
            </Avatar>

            <div>
              <h1 className="font-bold">
                Foto de perfil
              </h1>

              <Button asChild className="h-8 mt-2 cursor-pointer">
                <label htmlFor="updateProfile">
                  Escolher imagem
                </label>
              </Button>
            </div>

            <input 
              type="file" 
              id="updateProfile" 
              className="hidden"
            />
          </div>

          <div className="mt-5 space-y-5">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1">
                <label 
                  htmlFor=""
                  className="text-xs uppercase text-muted-foreground font-semibold"
                >
                  Nome
                </label>
                
                <input
                  placeholder="Nome completo"
                  onChange={e => setName(e.target.value)}
                  className="w-full py-2 px-3 border bg-transparent text-sm rounded hover:border-violet-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label 
                  htmlFor=""
                  className="text-xs uppercase text-muted-foreground font-semibold"
                >
                  Email
                </label>
                
                <input
                  placeholder="Informe o email"
                  onChange={e => setEmail(e.target.value)}
                  className="w-full py-2 px-3 border bg-transparent text-sm rounded hover:border-violet-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1">
                <label 
                  htmlFor=""
                  className="text-xs uppercase text-muted-foreground font-semibold"
                >
                  Telefone
                </label>
                
                <input
                  placeholder="Informe o telefone"
                  onChange={e => setNumberPhone(e.target.value)}
                  className="w-full py-2 px-3 border bg-transparent text-sm rounded hover:border-violet-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label 
                  htmlFor=""
                  className="text-xs uppercase text-muted-foreground font-semibold"
                  >
                  Profissão
                </label>
                
                <input
                  placeholder="Informe a profissão"
                  onChange={e => setProfession(e.target.value)}
                  className="w-full py-2 px-3 border bg-transparent text-sm rounded hover:border-violet-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <label 
                  htmlFor=""
                  className="text-xs uppercase text-muted-foreground font-semibold"
                >
                  Biografia
                </label>

                <span className={clsx("text-xs font-semibold text-muted-foreground transition-colors", {
                  "text-yellow-500": bio.length >= 480 && bio.length < 490,
                  "text-red-500": bio.length >= 490
                })}>
                  {bio.length}/500
                </span>
              </div>
              
              <textarea
                maxLength={500}
                placeholder="Escreva uma biografia"
                onChange={e => setBio(e.target.value)}
                className="resize-none w-full h-40 py-2 px-3 border bg-transparent text-sm rounded hover:border-violet-500 transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button onClick={createTeacher} className="w-full py-4">
                Cadastrar professor
              </Button>

              <Button variant="secondary" asChild className="py-4">
                <DialogClose>
                  Cancelar
                </DialogClose>
              </Button>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}