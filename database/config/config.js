module.exports = {
  development: {
    username: "root",
    password: null,
    database: "todolist",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      underscored: true,
    },
  },
  test: {
    url:process.env.JAWSDB_URL,
    username: "ftyjognc8l5qfmdv",
    password: "y3pbv9ou1kz6ep1d",
    database: "	zun9dx5nzj3xss2l",
    port:"3306",
    host: "en1ehf30yom7txe7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
  },
  production: {
    url:process.env.JAWSDB_URL,
    username: "ftyjognc8l5qfmdv",
    password: "y3pbv9ou1kz6ep1d",
    database: "	zun9dx5nzj3xss2l",
    port:"3306",
    host: "en1ehf30yom7txe7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
  },
};
