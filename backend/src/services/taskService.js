const Task = require("../models/Task");

module.exports = {
  getTask: async (taskId) => {
    try {
      const task = await Task.findById(taskId);
      if (!task) {
        throw new Error("Task not found");
      }

      return task;
    } catch (err) {
      throw err;
    }
  },
  getTasks: async () => {
    try {
      const tasks = await Task.find({
        isDeleted: false,
      }).sort({ createdAt: 1 });
      return tasks;
    } catch (err) {
      throw err;
    }
  },
  createTask: async ({
    title,
    description,
    date,
    startsAt,
    endsAt,
    priority,
  }) => {
    try {
      const startDateTime = new Date(`${date}T${startsAt}:00`);
      const endDateTime = new Date(`${date}T${endsAt}:00`);

      if (startDateTime > endDateTime)
        throw new Error("Start time cannot be greater than end time");

      const task = await Task.create({
        title,
        description,
        date,
        startsAt,
        endsAt,
        startDateTime,
        endDateTime,
        priority,
      });

      return task;
    } catch (err) {
      throw err;
    }
  },
  editTask: async ({
    taskId,
    title,
    description,
    date,
    startsAt,
    endsAt,
    priority,
    isCompleted,
  }) => {
    try {
      const startDateTime = new Date(`${date}T${startsAt}:00`);
      const endDateTime = new Date(`${date}T${endsAt}:00`);

      if (startDateTime > endDateTime)
        throw new Error("Start time cannot be greater than end time");

      const task = await Task.findByIdAndUpdate(
        taskId,
        {
          title,
          description,
          date,
          startsAt,
          endsAt,
          startDateTime,
          endDateTime,
          isCompleted,
          priority,
        },
        { new: true }
      );

      if (!task) {
        throw new Error("Task not found");
      }

      return task;
    } catch (err) {
      throw err;
    }
  },
  toggleCompleteTask: async ({ taskId }) => {
    try {
      const task = await Task.findById(taskId);
      if (!task) {
        throw new Error("Task not found");
      }
      task.isCompleted = !task.isCompleted;
      await task.save();

      return task;
    } catch (err) {
      throw err;
    }
  },
  deleteTask: async ({ taskId }) => {
    try {
      const task = await Task.findByIdAndUpdate(
        taskId,
        {
          isDeleted: true,
        },
        { new: true }
      );
      console.log(task); // Add this line to print the task object t

      if (!task) {
        throw new Error("Task not found");
      }

      return task;
    } catch (err) {
      throw err;
    }
  },
};
