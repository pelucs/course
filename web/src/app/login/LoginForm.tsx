import { Button } from "@/components/ui/button";

export function LoginForm(){
  return(
    <form className="space-y-4">
      <div className="flex flex-col gap-1">
        <label 
          htmlFor=""
          className="text-xs uppercase text-muted-foreground font-semibold"
        >
          Email
        </label>
        
        <input
          placeholder="Nome completo"
          className="w-full py-2 px-3 border bg-transparent text-sm rounded hover:border-violet-500 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label 
          htmlFor=""
          className="text-xs uppercase text-muted-foreground font-semibold"
        >
          Senha
        </label>
        
        <input
          type="password"
          placeholder="Informe uma senha"
          className="w-full py-2 px-3 border bg-transparent text-sm rounded hover:border-violet-500 transition-colors"
        />
      </div>

      <span className="mt-5 block text-sm text-violet-500">
        Esqueceu a senha?
      </span>

      <Button className="w-full py-5 text-white bg-violet-500 hover:bg-violet-600">
        Entrar
      </Button>
    </form>
  );
}