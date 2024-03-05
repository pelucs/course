import { api } from "@/api/api";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TeacherTypes } from "@/utils/teacherTypes";
import { 
  Dialog, 
  DialogContent, 
  DialogOverlay, 
  DialogPortal, 
  DialogTrigger 
} from "@/components/ui/dialog";

export async function ListOfTeachers(){

  const teachers: TeacherTypes[] = (await api.get("/teacher")).data;

  return(
    <Dialog>
      <div className="mt-4 grid grid-cols-5 gap-4">
        {teachers.map((teacher) => (
          <Button 
            asChild 
            variant={'secondary'} 
            className="h-[280px] p-4 bg-secondary/50 rounded flex flex-col gap-4 justify-end items-start"
          >
            <DialogTrigger>
              <div className="w-full h-full border border-secondary flex items-center justify-center rounded-md">
                <User className="w-10 h-10 text-muted-foreground"/>
              </div>
              
              <div className="flex flex-col items-start gap-2">
                <h1 className="text-lg font-semibold leading-none">{teacher.name}</h1>
                <span className="text-xs text-muted-foreground">{teacher.profession}</span>
              </div>
            </DialogTrigger>
          </Button>
        ))}
      </div>

      <DialogPortal>
        <DialogOverlay/>

        <DialogContent>

        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}