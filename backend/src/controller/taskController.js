const taskService = require("../services/taskService");
const AppError = require("../utils/AppError");
const { ALLOWED_PRIORITIES } = require("../utils/constants");

module.exports = {
  getTask: async (req, res, next) => {
    try {
      const { taskId } = req.params;
      if (!taskId) throw new AppError("Task not found", 400);

      const task = await taskService.getTask({ taskId });
      return res.status(200).json({
        success: true,
        data: task,
        message: "Task fetched successfully",
      });
    } catch (err) {
      next(err);
    }
  },
  getTasks: async (req, res, next) => {
    try {
      const tasks = await taskService.getTasks();
      return res.status(200).json({
        success: true,
        data: tasks,
        message: "Tasks fetched successfully",
      });
    } catch (err) {
      next(err);
    }
  },
  createTask: async (req, res, next) => {
    try {
      const { title, date, description, startsAt, endsAt, priority } = req.body;

      if (!title || !date || !startsAt || !endsAt) {
        throw new AppError("Missing required fields", 400);
      }

      if (priority) {
        if (!ALLOWED_PRIORITIES.includes(priority)) {
          throw new AppError("Invalid priority", 400);
        }
      }

      const task = await taskService.createTask({
        title,
        date,
        description,
        startsAt,
        endsAt,
        priority,
      });
      return res.status(200).json({
        success: true,
        data: task,
        message: "Task created successfully",
      });
    } catch (err) {
      next(err);
    }
  },
  editTask: async (req, res, next) => {
    try {
      const {
        title,
        date,
        description,
        startsAt,
        endsAt,
        priority,
        isCompleted,
      } = req.body;

      const { taskId } = req.params;
      if (!taskId) throw new AppError("Task not found", 400);

      if (!title || !date || !startsAt || !endsAt) {
        throw new AppError("Missing required fields", 400);
      }

      if (priority) {
        if (!ALLOWED_PRIORITIES.includes(priority)) {
          throw new AppError("Invalid priority", 400);
        }
      }

      const task = await taskService.editTask({
        taskId,
        title,
        date,
        description,
        startsAt,
        endsAt,
        priority,
        isCompleted,
      });
      return res.status(200).json({
        success: true,
        data: task,
        message: "Task edited successfully",
      });
    } catch (err) {
      next(err);
    }
  },
  toggleCompleteTask: async (req, res, next) => {
    try {
      const { taskId } = req.params;
      if (!taskId) throw new AppError("Task not found", 400);

      const task = await taskService.toggleCompleteTask({ taskId });
      return res.status(200).json({
        success: true,
        data: task,
        message: "Task completion toggled successfully",
      });
    } catch (err) {
      next(err);
    }
  },
  deleteTask: async (req, res, next) => {
    try {
      const { taskId } = req.params;
      console.log(taskId);
      if (!taskId) throw new AppError("Task not found", 400);

      await taskService.deleteTask({ taskId });
      return res.status(200).json({
        success: true,
        message: "Task deleted successfully",
      });
    } catch (err) {
      next(err);
    }
  },
};
