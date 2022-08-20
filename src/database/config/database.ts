import { Options } from 'sequelize'

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME as string || 'REST_API',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;