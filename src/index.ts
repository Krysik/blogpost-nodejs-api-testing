import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { createApp } from './app';
import { Post } from './database/entities/Post';

main();

async function main() {
  const dbDataSource = await new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST as string,
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DATABASE as string,
    port: Number(process.env.DB_PORT) || 5432,
    entities: [Post],
    synchronize: true,
  }).initialize();
  const db = dbDataSource.manager;

  const app = createApp({ db });

  await app.listen({
    host: process.env.HOST || '0.0.0.0',
    port: Number(process.env.PORT) || 8080,
  });
}
