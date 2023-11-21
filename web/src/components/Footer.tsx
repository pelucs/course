import Link from "next/link";
import { Logo } from "./Logo";
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

export function Footer(){
  return(
    <div className="w-full bg-secondary/30 border-t">
      <div className="px-7 py-10 grid grid-cols-5 gap-10 place-items-start border-b">
        <Logo/>

        <div>
          <h1 className="text-xs font-semibold uppercase text-muted-foreground">Institucional</h1>

          <nav className="mt-4 text-sm flex flex-col gap-2">
            <Link href="/" className="hover:text-violet-500 transition-colors">Home</Link>
            <Link href="/" className="hover:text-violet-500 transition-colors">Sobre nós</Link>
            <Link href="/" className="hover:text-violet-500 transition-colors">Preços</Link>
            <Link href="/" className="hover:text-violet-500 transition-colors">Comunidade</Link>
          </nav>
        </div>

        <div>
          <h1 className="text-xs font-semibold uppercase text-muted-foreground">Plataforma</h1>

          <nav className="mt-4 text-sm flex flex-col gap-2">
            <Link href="/" className="hover:text-violet-500 transition-colors">Entrar na conta</Link>
            <Link href="/" className="hover:text-violet-500 transition-colors">Criar conta</Link>
          </nav>
        </div>

        <div>
          <h1 className="text-xs font-semibold uppercase text-muted-foreground">Links úteis</h1>

          <nav className="mt-4 text-sm flex flex-col gap-2">
            <Link href="/" className="hover:text-violet-500 transition-colors">Políticas de privacidade</Link>
            <Link href="/" className="hover:text-violet-500 transition-colors">Termos de uso</Link>
            <Link href="/" className="hover:text-violet-500 transition-colors">Suporte</Link>
          </nav>
        </div>

        <div>
          <h1 className="text-xs font-semibold uppercase text-muted-foreground">Contatos</h1>

          <nav className="mt-4 text-sm flex gap-2">
            <Link 
              href="/" 
              className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center
              hover:bg-violet-500 transition-colors"
            >
              <Youtube className="w-6 h-6"/>
            </Link>

            <Link 
              href="/" 
              className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center
              hover:bg-violet-500 transition-colors"
            >
              <Instagram className="w-6 h-6"/>
            </Link>

            <Link 
              href="/" 
              className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center
              hover:bg-violet-500 transition-colors"
            >
              <Linkedin className="w-6 h-6"/>
            </Link>

            <Link 
              href="/" 
              className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center
              hover:bg-violet-500 transition-colors"
            >
              <DiscordLogoIcon className="w-6 h-6"/>
            </Link>

            <Link 
              href="/" 
              className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center
              hover:bg-violet-500 transition-colors"
            >
              <Mail className="w-6 h-6"/>
            </Link>
          </nav>
        </div>
      </div>

      <div className="py-5 px-7 flex justify-between items-center text-xs text-muted-foreground">
        <h1>
          &copy;2023, DesignerPro - Todos os direitos reservados
        </h1>

        <h1>
          Desenvolvido por pelucs
        </h1>
      </div>
    </div>
  );
}