import ptBR from 'date-fns/locale/pt-BR';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { UpdateProfile } from "./UpdateProfile";
import { getUser } from "@/lib/auth";
import { UserTypes } from "@/utils/userTypes";
import { api } from "@/api/api";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export async function InfoProfile(){

  const { sub } = getUser();

  const currentUser: UserTypes = (await api.get(`/users/${sub}`)).data;

  return(
    <div className="h-full w-full p-7">
      <div className="h-full flex items-start gap-5">
        <div className="w-full max-w-xs">
          <div className="flex items-center flex-col rounded bg-secondary/50">
            <Avatar className="w-32 h-32 mt-8 border-4 border-violet-500">
              <AvatarImage src={currentUser.profileUrl}/>
              <AvatarFallback className="text-4xl font-bold">{currentUser.name.split('')[0]}</AvatarFallback>
            </Avatar>

            <h1 className="mt-5 text-2xl font-semibold">
              {currentUser.name}
            </h1>

            <span className="text-sm text-muted-foreground">
              {currentUser.email}
            </span>

            <span className="w-full mt-14 py-5 flex items-center justify-center border-t text-sm uppercase font-semibold text-muted-foreground">
              Membro desde: {format(new Date(currentUser.createAt), "MMMM, Y", { locale: ptBR })}
            </span>
          </div>
          
          <UpdateProfile user={currentUser}/>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <div className="w-full p-7 bg-secondary/50 rounded space-y-5">
            <h1 className="text-2xl font-semibold">
              Sobre mim
            </h1>

            {currentUser.bio ? (
              <p>{currentUser.bio}</p>
            ) : (
              <span className="text-sm text-muted-foreground">Adicione uma biografia para seu perfil.</span>
            )}

          </div>

          <div className="w-full p-7 bg-secondary/50 rounded space-y-5">
            <h1 className="text-2xl font-semibold">
              Redes sociais
            </h1>

            {currentUser.socials.length > 0 ? (
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded bg-secondary"/>
                <div className="w-14 h-14 rounded bg-secondary"/>
                <div className="w-14 h-14 rounded bg-secondary"/>
                <div className="w-14 h-14 rounded bg-secondary"/>
                <div className="w-14 h-14 rounded bg-secondary"/>
              </div>
            ) : (
              <Button variant="ghost" className="w-14 h-14 p-0 border border-dashed">
                <Plus className="w-6 h-6"/>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}