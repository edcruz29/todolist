const db = require("../database/models");
const Op = db.Sequelize.Op;

exports.createTask = async () => {};

exports.showTasks = () => {
  const tasks = db.Tasks
    .findAll
    /*include:{
            model:db.User,
            as:"user",
            required:true
        },
        where:{
            id_user:id_user
        }*/
    ();
  return tasks;
};

exports.updateTask = () => {};
exports.deleteTask = () => {};
