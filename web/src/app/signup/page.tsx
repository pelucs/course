import { Header } from '@/components/Header';

import { RedirectClient } from '@/components/RedirectClient';
import { cookies } from 'next/headers';
import { BoxSignUp } from './BoxSignUp';

export default () => {
  
  const isAuthenticated = cookies().has('token');

  if(isAuthenticated){
    return <RedirectClient to="/app"/>
  }

  return(
    <div>
      <Header/>
      <BoxSignUp/>
    </div>
  );
}