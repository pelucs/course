import { userRoutes } from './routes/user';
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

app.listen({
  port: 3333
})
.then(() => (
  console.log("HTTP Server Running!✌")
))