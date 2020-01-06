require('dotenv/config');

module.exports = {
  dialect: process.env.MYSQL_DIALECT,
  username: process.env.MYSQL_USERNAME,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
