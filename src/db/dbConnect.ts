import mysql from "mysql2/promise";

let pool: any;

export async function dbConnection() {
  if (!pool) {
    try {
      pool = await mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });
      console.log("Database pool created successfully.");
    } catch (error: any) {
      console.log("Error while creating the database pool:", error.message);
      throw error;
    }
  }
  return pool;
}
