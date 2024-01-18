import mysql from "mysql2/promise";

const connection = () => {
  return mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 8889,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "node_auth_api",
    dialect: "mysql",
    dialectOptions: {
      socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    },
  });
};

export default connection();
