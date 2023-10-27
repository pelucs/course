import * as jwtDecode from 'jwt-decode';
import { cookies } from 'next/headers';

interface User {
  sub: string;
  id: string;
}

export function getUser(): User {
  const token = cookies().get('token')?.value;

  if (!token) {
    throw new Error('Unauthenticated');
  }

  const decodedToken: User = jwtDecode(token);

  return decodedToken;
}
