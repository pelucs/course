import { api } from "@/api/api";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from 'zod';

const loginSchema = z.object({
  email: z.string().email().nonempty("*Campo obrigatório"),
  password: z.string().nonempty("*Campo obrigatório")
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm(){

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const signin = async (data: LoginFormData) => {
    await api.post("/login", {
      email: data.email,
      password: data.password,
    })
    .then((res) => {
      const expireTokenInSeconds = 60 * 60 * 24 * 30;

      document.cookie = `token=${res.data.token}; Path=/app; max-age=${expireTokenInSeconds};`   
      window.location.pathname = "/app";
    })
    .catch(error => console.log(error))
  }

  return(
    <form onSubmit={handleSubmit(signin)} className="space-y-4">
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

      <span className="mt-5 block text-sm text-violet-500">
        Esqueceu a senha?
      </span>

      <Button type="submit" className="w-full py-5 text-white bg-violet-500 hover:bg-violet-600">
        Entrar
      </Button>
    </form>
  );
}