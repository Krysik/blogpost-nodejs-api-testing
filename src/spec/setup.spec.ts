import "reflect-metadata";
import { testDbDataSource } from "./testDb";
import { DataSource } from "typeorm";

console.log(process.env);

before(async () => {
  const emptyDataSource = await new DataSource({
    type: "postgres",
    host: process.env.DB_HOST as string,
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    database: "",
  }).initialize();

  const ifNotExist = true;
  const database = process.env.DB_DATABASE as string;
  await emptyDataSource
    .createQueryRunner()
    .createDatabase(database, ifNotExist);

  await testDbDataSource.initialize();
});

afterEach("clears test database", async () => {
  await testDbDataSource.transaction(async (manager) => {
    await manager.query("SET session_replication_role = replica");

    for (const entityMeta of testDbDataSource.entityMetadatas) {
      await manager.delete(entityMeta.target, {});
    }

    await manager.query("SET session_replication_role = DEFAULT");
  });
});

after(async () => {
  await testDbDataSource.destroy();
});
