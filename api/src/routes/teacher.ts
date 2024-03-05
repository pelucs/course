import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

import z from 'zod';

export async function teacherRoutes(app: FastifyInstance){
  
  // Registrando professor
  app.post("/teacher", async (req, reply) => {

    const bodySchema = z.object({
      bio: z.string(),
      name: z.string(),
      profession: z.string(),
      email: z.string().email(),
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

  });

  // Resgatando todos os professores
  app.get("/teacher", async () => {
    const teachers = await prisma.teacher.findMany();

    return teachers;
  })

  // Atualizando dados do professor
  app.put("//:id", async (req, reply) => {

    const paramsSchema = z.object({
      id: z.string()
    });

    const { id } = paramsSchema.parse(req.params);

    const bodySchema = z.object({
      name: z.string(),
      email: z.string(),
      bio: z.string(),
      profileUrl: z.string(),
      profession: z.string(),
    });

    const data = bodySchema.parse(req.body);

    let teacher = await prisma.teacher.findUnique({
      where: {
        id,
      }
    });

    if(!teacher){
      return reply.status(404).send("Professor não cadastrado")
    }

    teacher = await prisma.teacher.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        email: data.email,
        bio: data.bio,
        profileUrl: data.profileUrl,
        profession: data.profession,
      }
    });

    return teacher;    
  })
}