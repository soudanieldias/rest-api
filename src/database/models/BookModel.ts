import { DataTypes } from "sequelize";
import { db } from "../db";

export const BookModel = db.define('book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  published: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  publishDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  bookCover: {
    type: DataTypes.STRING,
    defaultValue: `http://${process.env.HOST}:${process.env.PORT}/images/default_cover.jpg`,
  }
},
{
  tableName: 'books',
  timestamps: false,
  underscored: true,
});