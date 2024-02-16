import { SearchComponent } from "@/components/Search";
import { ButtonTheme } from "@/components/Theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/auth";
import { UserCog, UserPlus } from "lucide-react";
import Link from "next/link";

export async function HeaderApp(){

  const { name, profileUrl, sub } = getUser();

  return(
    <div className="w-full h-16 px-7 flex sticky top-0 z-10 items-center justify-between border-b bg-background">
      <div>
        <h1>Sexta-feira, 28 de out</h1>
      </div>

      <div className="flex items-center gap-2">
        <SearchComponent/>

        <ButtonTheme/>

        {sub === "65cd059f8535d1f7b1d77cf5" && (
          <Button asChild variant="secondary" className="w-10 h-10 p-0">
            <Link href="/app/admin">
              <UserCog className="w-4 h-4"/>
            </Link>
          </Button>
        )}

        <Link href="/app/profile">
          <Avatar>
            <AvatarImage src={profileUrl}/>
            <AvatarFallback>{name.split('')[0]}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
}