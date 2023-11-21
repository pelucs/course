import Link from "next/link";
import { Logo } from "./Logo";
import { User } from "lucide-react";

export function Header(){
  return(
    <div className="px-7 h-20 border-b flex items-center justify-between text-sm">
      <Logo/>

      <nav className="h-full flex items-center gap-8">
        <Link 
          href="/" 
          className="h-full flex items-center border-b-2 border-transparent hover:border-violet-500 transition-colors"
        >
          Home
        </Link>
        
        <Link 
          href="/" 
          className="h-full flex items-center border-b-2 border-transparent hover:border-violet-500 transition-colors"
        >
          Sobre nós
        </Link>
        
        <Link 
          href="/" 
          className="h-full flex items-center border-b-2 border-transparent hover:border-violet-500 transition-colors"
        >
          Preços
        </Link>
        
        <Link 
          href="/" 
          className="h-full flex items-center border-b-2 border-transparent hover:border-violet-500 transition-colors"
        >
          Suporte
        </Link>
      </nav>

      <div className="flex items-center gap-5">
        <Link href="/login" className="flex items-center gap-2 hover:text-violet-500 transition-colors">
          <User className="w-4 h-4"/>

          Entrar
        </Link>

        <Link href="/signup" className="py-2 px-3 bg-gradient-to-l to-violet-700 from-violet-400 text-white rounded">
          Criar conta
        </Link>
      </div>
    </div>
  );
}