import { Clock, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTrigger } from "./ui/dialog";
import Link from "next/link";

export function SearchComponent(){
  return(
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="w-10 h-10 p-0">
          <Search className="w-4 h-4"/>
        </Button>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay/>

        <DialogContent className="w-full h-[420px] max-w-2xl p-0 overflow-hidden block">
          <div className="flex-1 h-14 px-5 flex items-center gap-2 border-b">
            <Search className="w-4 h-4 text-muted-foreground"/>

            <input 
              className="flex-1 pr-6 bg-transparent outline-none"
              placeholder="Pesquise aqui"
            />
          </div>

          <div className="mt-5">
            <h1 className="ml-5 text-xs text-muted-foreground uppercase font-semibold">Recente</h1>

            <div className="mt-2 divide-y-[1px] divide-secondary">
              <Link href="" className="flex-1 p-5 hover:bg-secondary flex items-center justify-between">
                Aula de background

                <Clock className="w-4 h-4"/>
              </Link>

              <Link href="" className="flex-1 p-5 hover:bg-secondary flex items-center justify-between">
                Aula de background

                <Clock className="w-4 h-4"/>
              </Link>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}