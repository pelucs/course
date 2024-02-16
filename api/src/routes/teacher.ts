import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

import z from 'zod';

export async function teacherRoutes(app: FastifyInstance){
  
  //Registrando professor
  app.post("/teacher", async (req, reply) => {

    const bodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      bio: z.string(),
      profession: z.string(),
    });

    try{
      const { name, email, bio, profession } = bodySchema.parse(req.body);
  
      let teacher = await prisma.teacher.findUnique({
        where: {
          email,
        }
      });
  
      if(teacher){
        return reply.status(400).send("Email já cadastrado");
      }

      teacher = await prisma.teacher.create({
        data: {
          name, 
          bio,
          email,
          profession,
        }
      });

      return teacher;

    } catch(error){
      console.log("Error", error);

      return reply.status(500).send("Erro ao cadastrar o professor.")
    }

  })
}