const express = require("express");
const router = express.Router();
const taskController = require('../controllers/taskController')


/* GET home page. */
router.get("/", async function  (req, res, next) {
  const tasks = await taskController.showTasks()
  console.log(tasks)
  res.json({tasks});
});


module.exports = router;
