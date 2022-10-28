import { DataSource } from "typeorm";
import { Task } from "./models/Task";
import { User } from "./models/User";

export const dataSource : DataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT ? Number.parseInt(process.env.DB_PORT) : 5432,
    database: process.env.DB_NAME || "tasks",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "password",
    synchronize: true,
    logging: true,
    entities: [User, Task]
});