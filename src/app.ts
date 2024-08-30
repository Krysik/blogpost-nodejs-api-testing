import fastify from "fastify";
import type { EntityManager } from "typeorm";

export type AppDeps = {
  db: EntityManager;
};

export function createApp({ db }: AppDeps) {
  const app = fastify({
    logger: true,
  });

  return app;
};
