import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ(){
  return(
    <div className="w-full py-32 px-7 flex flex-col items-center">
      <h1 className="text-5xl font-bold">
        Perguntas frequentes
      </h1>

      <Accordion collapsible type="single" className="mt-20 w-full max-w-4xl border-t">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl">Eu tenho acesso a todas as aulas da plataforma?</AccordionTrigger>

          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, officia adipisci. Nostrum, tenetur! 
            Enim accusantium animi recusandae blanditiis neque vitae id, incidunt eos ex fugit fugiat, earum 
            praesentium modi maxime.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl">Se comprar agora tem acesso a atualizações?</AccordionTrigger>

          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, officia adipisci. Nostrum, tenetur! 
            Enim accusantium animi recusandae blanditiis neque vitae id, incidunt eos ex fugit fugiat, earum 
            praesentium modi maxime.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl">Se comprar agora tenho acesso vitalício?</AccordionTrigger>

          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, officia adipisci. Nostrum, tenetur! 
            Enim accusantium animi recusandae blanditiis neque vitae id, incidunt eos ex fugit fugiat, earum 
            praesentium modi maxime.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}