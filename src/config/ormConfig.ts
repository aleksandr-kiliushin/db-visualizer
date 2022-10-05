// import { DataSource, DataSourceOptions } from "typeorm"

// export const ormConfig: DataSourceOptions = {
//   database: process.env.DATABASE_NAME ?? "personal_app_db",
//   entities: ["dist/**/*.entity.js"],
//   host: process.env.DATABASE_HOST ?? "localhost", // Name of database service in compose.dev.yml.
//   migrations: ["dist/migrations/*.js"],
//   migrationsTableName: "migrations",
//   password: process.env.POSTGRES_PASSWORD ?? "123",
//   port: 5432,
//   ssl: false,
//   synchronize: false, // process.env.MODE === "dev", // Once you get into production you'll need to synchronize model changes into the database. It is unsafe to use `synchronize: true` for schema synchronization on production once you get data in your database. Here is where migrations come to help.
//   type: "postgres",
//   username: process.env.DATABASE_USERNAME ?? "postgres",
// }

// export const dataSource = new DataSource(ormConfig)
