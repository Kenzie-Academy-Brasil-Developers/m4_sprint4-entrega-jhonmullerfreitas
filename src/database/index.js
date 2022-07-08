import { Client } from "pg";

// const database = new Client(
//   process.env.NODE_ENV === "test"
//     ? {
//         user: "jhon",
//         host: "localhost",
//         database: "jhon",
//         password: "352897",
//         port: 5432,
//       }
//     : {
//         user: process.env.DB_USER,
//         host: process.env.DB_HOST,
//         database: process.env.DB,
//         password: process.env.DB_PASSWORD,
//         port: process.env.DB_PORT,
//       }
// );

const database = new Client ({
  user: "jhon",
  host: "localhost",
  database: "jhon",
  password: "352897",
  port: 5432
})

export const startDatabase = async () => {
  await database.connect();
};

export default database;
