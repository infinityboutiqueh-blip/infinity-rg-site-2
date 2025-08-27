import mysql from "mysql2/promise";

export async function connectDB() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD", // change this
    database: "infinityrg",
  });
  return connection;
}
