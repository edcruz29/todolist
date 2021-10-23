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
    username: "root",
    password: null,
    database: "todolist",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "todolist",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};