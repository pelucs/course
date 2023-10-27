import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import z from 'zod';

export async function userRoutes(app: FastifyInstance){

  //Criação de usuário
  app.post("/register", async (req, reply) => {

    const bodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
    });

    const { name, email, password } = bodySchema.parse(req.body);

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
        password,
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

  //Atualizando dados do usuário
  app.put("/users/:id", async (req) => {

    const paramsSchema = z.object({
      id: z.string()
    });

    const { id } = paramsSchema.parse(req.params);
    
    const bodySchema = z.object({
      name: z.string(),
      numberPhone: z.string(),
      bio: z.string()
    });

    const { name, bio, numberPhone } = bodySchema.parse(req.body);

    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        bio,
        numberPhone,
      }
    });

    return user;
  });

  //Efetuando login
  app.post("/signin", async (req, reply) => {

    const bodySchema = z.object({
      email: z.string(),
      password: z.string(),
    });

    const { email, password } = bodySchema.parse(req.body);

    const user = await prisma.user.findUnique({
      where: {
        email,
        password,
      }
    });

    if(!user){
      return reply.status(404).send("Email e/ou senha incorreto(s)");
    }

    const token = app.jwt.sign(
      { id: user.id }, 
      { sub: user.id, expiresIn: '30 days' }
    );

    return token;
  })
}