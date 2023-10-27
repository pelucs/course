import { ButtonTheme } from "@/components/Theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search, UserPlus } from "lucide-react";
import Link from "next/link";

export function Header(){
  return(
    <div className="w-full h-16 px-7 flex sticky top-0 z-10 items-center justify-between border-b bg-background">
      <div>
        <h1>Sexta-feira, 28 de out</h1>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="secondary" className="w-10 h-10 p-0">
          <Search className="w-4 h-4"/>
        </Button>

        <ButtonTheme/>

        <Button variant="secondary" className="w-10 h-10 p-0">
          <UserPlus className="w-4 h-4"/>
        </Button>

        <Link href="/app/profile">
          <Avatar>
            <AvatarImage src="https://github.com/pelucs.png"/>
            <AvatarFallback>PL</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
}