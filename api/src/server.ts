import { userRoutes } from './routes/user';
import { fastifyCors } from '@fastify/cors';
import fastify from 'fastify';

const app = fastify();

app.register(fastifyCors, {
  origin: '*'
});

app.register(userRoutes);

app.listen({
  port: 3333
})
.then(() => (
  console.log("HTTP Server Running!✌")
))