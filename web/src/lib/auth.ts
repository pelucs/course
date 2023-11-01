import { cookies } from 'next/headers';
const jwt = require('jsonwebtoken');

interface User{
  name: string;
  profileUrl: string;
  sub: string;
}

export function getUser(): User{

  const token = cookies().get("token")?.value;

  if(!token){
    throw new Error("Unauthenticated")
  }

  function decodificarToken(tokenUser: string, chaveSecreta: string) {
    try {
      const decoded = jwt.verify(tokenUser, chaveSecreta);
      return decoded;
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return null;
    }
  }

  // Chamando a função para decodificar o token
  const payloadDecodificado = decodificarToken(token, 'design-pro');

  if(!payloadDecodificado){
    console.log("Error", payloadDecodificado)
  }

  return payloadDecodificado;
}