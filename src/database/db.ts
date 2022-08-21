import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const db = new Sequelize(
  process.env.DB_NAME as string || 'teste',
  process.env.DB_USER as string || 'root',
  process.env.DB_PASS as string || 'root',
  {
    dialect: 'mysql',
    logging: false,
    host: process.env.DB_HOST as string,
    port: +(process.env.DB_PORT || 3306),
  }
);