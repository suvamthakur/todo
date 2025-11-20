const router = require("express").Router();
const taskController = require("../controller/taskController");

router.get("/single/:taskId", taskController.getTask);
router.get("/all", taskController.getTasks);
router.post("/create", taskController.createTask);
router.patch("/edit/:taskId", taskController.editTask);
router.patch("/toggle/complete/:taskId", taskController.toggleCompleteTask);
router.post("/delete/:taskId", taskController.deleteTask);

module.exports = router;
