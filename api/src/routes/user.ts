import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import z from 'zod';

export async function userRoutes(app: FastifyInstance){

  //Criação de usuário
  app.post("/register", async (req, reply) => {

    const bodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      numberPhone: z.string(),
    });

    const { name, email, numberPhone } = bodySchema.parse(req.body);

    let user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if(user){
      return reply.status(400).send("Email já cadastrado")
    }

    user = await prisma.user.create({
      data: {
        name,
        email,
        numberPhone,
      }
    });

    return user;
  });

  //Resgatando todos usuários
  app.get("/users", async () => {

    const user = await prisma.user.findMany()

    return user;
  });

  //Resgatando usuário único
  app.get("/users/:id", async (req) => {

    const paramsSchema = z.object({
      id: z.string()
    });

    const { id } = paramsSchema.parse(req.params);

    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })

    return user;
  });
}