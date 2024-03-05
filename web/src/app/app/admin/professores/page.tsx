import { Separator } from "@/components/ui/separator";
import { HeaderApp } from "../../HeaderApp";
import { Sidebar } from "../../Sidebar";
import { HeaderAdmin } from "../HeaderAdmin";
import { CreateTeacher } from "./CreateTeacher";
import { ListOfTeachers } from "./ListOfTeachers";

export default () => {

  return(
    <div className="flex relative">
      <Sidebar/>

      <div className="flex-1">
        <HeaderApp/>

        <div className="p-7">
          <HeaderAdmin/>

          <Separator className="my-5"/>

          <div className="mt-5">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">Professores</h1>

              <CreateTeacher/>
            </div>

            <ListOfTeachers/>
          </div>
        </div>
      </div>
    </div>
  );
}