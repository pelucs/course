import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import bcrypt from 'bcrypt';
import z from 'zod';

export async function userRoutes(app: FastifyInstance){

  //Criação de usuário
  app.post("/register", async (req, reply) => {

    const bodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
    });

    try{
      const { name, email, password } = bodySchema.parse(req.body);

      let user = await prisma.user.findUnique({
        where: {
          email
        }
      });

      if(user){
        return reply.status(400).send("Email já cadastrado")
      }

      const hash = await bcrypt.hash(password, 10);

      user = await prisma.user.create({
        data: {
          name,
          email,
          password: hash,
        }
      });

      return user;

    } catch(error) {
      console.log("Error", error);

      return reply.status(500).send("Erro ao criar o usuário.")
    }
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
  app.post("/login", async (req, reply) => {

    const bodySchema = z.object({
      email: z.string(),
      password: z.string(),
    });

    try {
      const { email, password } = bodySchema.parse(req.body);
  
      // Verificando se existe um usuário com este email
      const user = await prisma.user.findUnique({
        where: {
          email,
        }
      });
  
      if (!user) {
        return reply.status(404).send("Usuário não encontrado!");
      }
  
      // Comparar a senha enviada do usuário com o hash do banco de dados
      const comparePassword = await bcrypt.compare(password, user.password);
  
      if (comparePassword) {

        const token = app.jwt.sign(
          { id: user.id }, 
          { sub: user.id, expiresIn: '30 days' }
        );
  
        console.log("Senha correta. Usuário logado!");
  
        // Retorna o token para o cliente
        reply.status(200).send({ token });
        
      } else {

        console.log("Senha incorreta!");
        // Retorna uma resposta de erro para o cliente
        reply.status(401).send("Senha incorreta!");

      }
    } catch (error) {

      console.error("Erro:", error);
      // Retorna uma resposta de erro para o cliente
      reply.status(500).send("Erro durante o login!");

    }
  })
}