import fastify from "fastify";
import type { EntityManager } from "typeorm";
import { registerListPosts } from "./listPosts.ctrl";

export type AppDeps = {
  db: EntityManager;
};

export function createApp({ db }: AppDeps) {
  const app = fastify({
    logger: true,
  });

  registerListPosts({
    app,
    db,
  });

  return app;
};
