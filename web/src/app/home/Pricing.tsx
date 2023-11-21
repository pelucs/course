import { Check, MoveRight } from "lucide-react";
import Link from "next/link";

export function Pricing(){
  return(
    <div className="py-32">
      <div className="flex flex-col items-center gap-5 text-center">
        <span className="text-sm py-1 px-4 rounded-full bg-secondary/50 border border-violet-500">
          Preços
        </span>

        <h1 className="text-5xl font-bold">
          Valores e condições que cabem <br/>
          no seu bolso
        </h1>

        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum <br/>
          perspiciatis illo doloribus fugit.
        </p>
      </div>

      <div className="mt-10 flex gap-10 justify-between">
        <div className="w-full max-w-md p-8 bg-secondary/50 border rounded-md">
          <div className="space-y-2">
            <span>Mensal</span>

            <div className="flex items-end gap-1">
              <strong className="text-4xl font-bold">
                R$67
              </strong>

              <span className="text-muted-foreground">
                /mês
              </span>
            </div>

            <p className="text-muted-foreground">
              Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.
            </p>
          </div>

          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-1">
              <Check className="w-4 h-4 text-violet-500"/>

              Acesso completo liberado
            </li>

            <li className="flex items-center gap-1">
              <Check className="w-4 h-4 text-violet-500"/>

              Acesso completo
            </li>

            <li className="flex items-center gap-1">
              <Check className="w-4 h-4 text-violet-500"/>

              Acesso completo
            </li>

            <li className="flex items-center gap-1">
              <Check className="w-4 h-4 text-violet-500"/>

              Acesso completo
            </li>
          </ul>

          <Link href="/" className="w-full mt-10 py-3 px-4 flex items-center justify-center gap-2 rounded 
          bg-violet-500 uppercase font-semibold">
            Quero assinar agora 

            <MoveRight className="w-4 h-4"/>
          </Link>
        </div>

        <div className="w-full max-w-md p-8 bg-secondary/50 border rounded-md">
          <div className="space-y-2">
            <span>Anual</span>

            <div className="flex items-end gap-1">
              <strong className="text-4xl font-bold">
                R$800
              </strong>

              <span className="text-muted-foreground">
                /ano
              </span>
            </div>

            <p className="text-muted-foreground">
              Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.
            </p>
          </div>

          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-1">
              <Check className="w-4 h-4 text-violet-500"/>

              Acesso completo liberado
            </li>

            <li className="flex items-center gap-1">
              <Check className="w-4 h-4 text-violet-500"/>

              Acesso completo
            </li>

            <li className="flex items-center gap-1">
              <Check className="w-4 h-4 text-violet-500"/>

              Acesso completo
            </li>

            <li className="flex items-center gap-1">
              <Check className="w-4 h-4 text-violet-500"/>

              Acesso completo
            </li>
          </ul>

          <Link href="/" className="w-full mt-10 py-3 px-4 flex items-center justify-center gap-2 rounded 
          bg-violet-500 uppercase font-semibold">
            Quero assinar agora 

            <MoveRight className="w-4 h-4"/>
          </Link>
        </div>
      </div>
    </div>
  );
}