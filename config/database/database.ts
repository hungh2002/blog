import "reflect-metadata";
import { DataSource } from "typeorm";
import { Post } from "./models/Post";

export const Database = new DataSource({
  type: process.env.DBMS as "mysql" | "mariadb",
  host: process.env.DB_HOST,
  port: Number.parseInt(process.env.DB_PORT!),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  entities: [Post],
  synchronize: true,
  logging: false,
});

try {
  await Database.initialize();
} catch (error) {
  console.error(error);
}

export const postRepository = Database.getRepository(Post);
