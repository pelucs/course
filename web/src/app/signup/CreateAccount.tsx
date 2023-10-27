import { Button } from "@/components/ui/button";

export function CreateAccount(){
  return(
    <form className="space-y-4">
      <div className="flex flex-col gap-1">
        <label 
          htmlFor=""
          className="text-xs uppercase text-muted-foreground font-semibold"
        >
          Nome
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
          Email
        </label>
        
        <input
          placeholder="Informe seu email"
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

      <div className="flex flex-col gap-1">
        <label 
          htmlFor=""
          className="text-xs uppercase text-muted-foreground font-semibold"
        >
          Confirme a senha
        </label>
        
        <input
          type="password"
          placeholder="Confirme a senha"
          className="w-full py-2 px-3 border bg-transparent text-sm rounded hover:border-violet-500 transition-colors"
        />
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Ao criar sua conta você aceita automaticamente nossos <span className="text-violet-500">termos de uso</span> e <span className="text-violet-500">políticas de privacidade</span>
      </p>

      <Button className="w-full py-5 text-white bg-violet-500 hover:bg-violet-600">
        Criar conta
      </Button>
    </form>
  );
}