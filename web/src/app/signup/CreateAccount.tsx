import { api } from "@/api/api";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from 'zod';

const userSchema = z.object({
  name: z.string().nonempty("*Campo obrigatório"),
  email: z.string().email().nonempty("*Campo obrigatório"),
  password: z.string().nonempty("*Campo obrigatório"),
  confirmPassword: z.string().nonempty("*Campo obrigatório")
})
.refine(data => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["password", "confirmPassword"]
});

type CreateUserFormData = z.infer<typeof userSchema>;

export function CreateAccount(){

  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>({
    resolver: zodResolver(userSchema)
  });

  const createUser = async (data: CreateUserFormData) => {
    await api.post("/register", {
      name: data.name,
      email: data.email,
      password: data.password,
    })
    .then(() => {
      alert("Conta criada com sucesso!");
      window.location.pathname = "/login";
    })
  }

  return(
    <form onSubmit={handleSubmit(createUser)} className="space-y-4">
      <div className="flex flex-col gap-1">
        <label 
          htmlFor="name"
          className="text-xs uppercase text-muted-foreground font-semibold"
        >
          Nome
        </label>
        
        <input
          id="name"
          {...register("name")}
          placeholder="Nome completo"
          className="w-full py-2 px-3 border bg-transparent text-sm rounded hover:border-violet-500 transition-colors"
        />

        {errors.name && (
          <span className="mt-1 text-xs text-red-500">{errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label 
          htmlFor="email"
          className="text-xs uppercase text-muted-foreground font-semibold"
        >
          Email
        </label>
        
        <input
          id="email"
          {...register("email")}
          placeholder="Informe seu email"
          className="w-full py-2 px-3 border bg-transparent text-sm rounded hover:border-violet-500 transition-colors"
        />

        {errors.email && (
          <span className="mt-1 text-xs text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label 
          htmlFor="password"
          className="text-xs uppercase text-muted-foreground font-semibold"
        >
          Senha
        </label>
        
        <input
          id="password"
          type="password"
          {...register("password")}
          placeholder="Informe uma senha"
          className="w-full py-2 px-3 border bg-transparent text-sm rounded hover:border-violet-500 transition-colors"
        />

        {errors.password && (
          <span className="mt-1 text-xs text-red-500">{errors.password.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label 
          htmlFor="confirmPassword"
          className="text-xs uppercase text-muted-foreground font-semibold"
        >
          Confirme a senha
        </label>
        
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
          placeholder="Confirme a senha"
          className="w-full py-2 px-3 border bg-transparent text-sm rounded hover:border-violet-500 transition-colors"
        />

        {errors.confirmPassword && (
          <span className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</span>
        )}
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Ao criar sua conta você aceita automaticamente nossos <span className="text-violet-500">termos de uso</span> e <span className="text-violet-500">políticas de privacidade</span>
      </p>

      <Button type="submit" className="w-full py-5 text-white bg-violet-500 hover:bg-violet-600">
        Criar conta
      </Button>
    </form>
  );
}