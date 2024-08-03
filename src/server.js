import Fastify from "fastify";

const fastify = Fastify();

fastify.get("/", (request, reply) => {
  reply.send("Hello World!");
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  console.log(`Server is listening on ${address}`);
});
