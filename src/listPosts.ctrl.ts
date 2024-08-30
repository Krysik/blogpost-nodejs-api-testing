import type { FastifyInstance } from 'fastify';
import type { EntityManager } from 'typeorm';
import { Post } from './database/entities/Post';

export function registerListPosts({
  app,
  db,
}: {
  app: FastifyInstance;
  db: EntityManager;
}) {
  app.get('/posts', async (_req, reply) => {
    const posts = await db.find(Post, {
      order: {
        createdAt: 'DESC'
      }
    });

    return reply.status(200).send({
      data: posts,
    });
  });
}