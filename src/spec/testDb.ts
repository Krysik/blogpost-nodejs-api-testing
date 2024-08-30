import { DataSource } from 'typeorm';
import { Post } from '../database/entities/Post';

export const testDbDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST as string,
  username: process.env.DB_USERNAME as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_DATABASE as string,
  port: Number(process.env.DB_PORT) || 5432,
  entities: [Post],
  synchronize: true,
});

export const testDb = testDbDataSource.manager;
