import { userRoutes } from './routes/user';
import { teacherRoutes } from './routes/teacher';
import { fastifyCors } from '@fastify/cors';

import jwt from "@fastify/jwt";
import fastify from 'fastify';

const app = fastify();

app.register(fastifyCors, {
  origin: '*'
});

app.register(jwt, {
  secret: "design-pro"
})

app.register(userRoutes);
app.register(teacherRoutes);

app.listen({
  port: 3333
})
.then(() => (
  console.log("HTTP Server Running!✌")
))