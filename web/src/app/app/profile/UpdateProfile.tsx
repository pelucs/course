"use client"

import * as Dialog from "@radix-ui/react-dialog"

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { api } from "@/api/api";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";

interface UpdateProfileProps{
  user: any
}

export function UpdateProfile({ user }: UpdateProfileProps){

  const [name, setName] = useState<string>(user.name);
  const [numberPhone, setNumberPhone] = useState<string>(user.numberPhone);
  const [bio, setBio] = useState<string>("");

  const updateProfile = async () => {
    if(name.length !== 0 && numberPhone.length !== 0){
      await api.put(`/users/${user.id}`, {
        name,
        bio,
        numberPhone,
      })
      .then(() => {
        alert("Atualizado com sucesso!")
      })
    }
  }

  return(
    <Dialog.Root>
      <Dialog.Trigger className="mt-5 w-full">
        <Button className="w-full">
          <Pencil className="w-4 h-4 mr-2"/>

          Editar perfil
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="w-full h-screen fixed inset-0 bg-background/50 backdrop-blur-sm"/>

        <Dialog.Content className="w-full max-w-lg py-6 px-7 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        border rounded-md bg-background">
          <div>
            <h1 className="font-semibold text-2xl">
              Meu perfil
            </h1>

            <span className="text-sm text-muted-foreground">
              Preencha todos os campos corretamente
            </span>
          </div>

          <Separator className="my-5"/>
          
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1">
                <label 
                  htmlFor=""
                  className="text-xs uppercase text-muted-foreground font-semibold"
                >
                  Nome
                </label>
                
                <input
                  value={name}
                  defaultValue={user.name}
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
                  Telefone
                </label>
                
                <input
                  value={numberPhone}
                  placeholder="Informe seu telefone"
                  defaultValue={user.numberPhone}
                  onChange={e => setNumberPhone(e.target.value)}
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
                defaultValue={user.bio}
                placeholder="Escreva uma biografia"
                onChange={e => setBio(e.target.value)}
                className="resize-none w-full h-40 py-2 px-3 border bg-transparent text-sm rounded hover:border-violet-500 transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button onClick={updateProfile} className="w-full py-4">
                Atualizar dados
              </Button>

              <Button variant="secondary" asChild className="py-4">
                <Dialog.Close>
                  Cancelar
                </Dialog.Close>
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}