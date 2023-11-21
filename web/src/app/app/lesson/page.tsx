import { Book, Headphones, Library, Send } from "lucide-react";
import { Header } from "../HeaderApp";
import { Sidebar } from "../Sidebar";
import { LessonPanel } from "./LessonPanel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default () => {
  return(
    <div className="flex min-h-screen">
      <Sidebar/>

      <div className="h-full flex-1 flex flex-col">
        <Header/>

        <div className="flex h-full">
          <div className="flex-1">
            <div className="bg-secondary flex justify-center">
              <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                <video controls controlsList="nodownload" className="w-full">
                  <source src="/test.mp4" type="video/mp4"/>
                </video>
              </div>
            </div>

            <div className="p-7">
              <div className="space-y-2">
                <span className="text-muted-foreground uppercase font-semibold text-xs flex items-center gap-1">
                  <Library className="w-4 h-4"/>
                  
                  Texturas
                </span>

                <h1 className="mt-2 text-2xl font-semibold">
                  Manipulando texturas grunge
                </h1>

                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi porro libero minus cum aut, 
                  natus voluptatibus exercitationem alias sapiente, hic accusantium fugit iusto impedit dolores 
                  aperiam nesciunt! Ex, alias.
                </p>
              </div>

              <div className="mt-5  flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://github.com/pelucs.png"/>
                  <AvatarFallback>PL</AvatarFallback>
                </Avatar>

                <div>
                  <h1 className="text-lg font-semibold leading-none">
                    Pedro Lucas
                  </h1>

                  <span className="text-xs text-muted-foreground">
                    Designer Sênior
                  </span>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-5">
                <a href="/" className="py-4 px-5 flex items-center gap-2 font-semibold 
                border hover:bg-secondary transition-colors rounded">
                  <Book className="w-6 h-6"/>

                  Material complementar
                </a>

                <a href="/" className="py-4 px-5 flex items-center gap-2 font-semibold 
                border hover:bg-secondary transition-colors rounded">
                  <Send className="w-6 h-6"/>

                  Comunidade no telegram
                </a>

                <a href="/" className="py-4 px-5 flex items-center gap-2 font-semibold
                border hover:bg-secondary transition-colors rounded">
                  <Headphones className="w-6 h-6"/>

                  Suporte
                </a>
              </div>

            </div>
          </div>

          <LessonPanel/>
        </div>
      </div>
    </div>
  );
}