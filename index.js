const fastify = require("fastify")({ logger: true });
const path = require("path");

fastify.register(require("fastify-static"), {
  root: path.join(__dirname, ""),
  prefix: "/",
});

const run = async () => {
  try {
    await fastify.listen(8080, "0.0.0.0");
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
  }
};

run();
