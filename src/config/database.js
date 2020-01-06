require('dotenv/config');

module.exports = {
<<<<<<< HEAD
  dialect: process.env.MYSQL_DIALECT,
  username: process.env.MYSQL_USERNAME,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
=======
  dialect: process.env.POSTGRES_DIALECT,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE,
>>>>>>> feature/troca-mysql-para-postgres
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
