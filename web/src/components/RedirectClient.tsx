'use client'

import { useRouter } from "next/navigation";

interface RedirectClientProps {
  to: string;
}

export function RedirectClient({ to }: RedirectClientProps) {
  const router = useRouter();

  // Redirecionar para a rota especificada no momento da renderização
  if (typeof window !== 'undefined') {
    router.push(to);
  }

  // Retorne null, já que este componente não precisa renderizar nada
  return null;
}