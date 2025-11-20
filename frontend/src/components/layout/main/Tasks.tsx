import { Check } from "lucide-react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import type { Task } from "../../../types/task";
import { useState } from "react";
import TableDrawer from "../../drawers/TableDrawer";
import axiosClient from "../../../lib/axiosClient";
import { api } from "../../../utils/constants";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import TaskItem from "./TaskItem";

export default function Tasks({
  tasks,
  setTasks,
}: {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
  const [openedTask, setOpenedTask] = useState<Task | null>(null);

  const handleTaskDelete = async (taskId: Task["_id"]) => {
    console.log("call");
    try {
      await axiosClient.post(api.deleteTask + `/${taskId}`);
      setTasks((prev) => prev.filter((task) => task._id !== taskId));

      toast.success("Task deleted successfully");
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message || "Unable to create task");
      } else if (err instanceof Error) {
        toast.error(err.message || "Unable to create task");
      } else {
        toast.error("Unable to create task");
      }
    }
  };

  const toggleTaskCompletion = async (task: Task) => {
    try {
      const res = await axiosClient.patch(
        api.toggleCompletion + `/${task._id}`,
        {
          isCompleted: !task.isCompleted,
        }
      );

      setTasks((prev) =>
        prev.map((task) =>
          task._id === res.data.data._id ? res.data.data : task
        )
      );
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message || "Something went wrong");
      } else if (err instanceof Error) {
        toast.error(err.message || "Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h3>Tasks Today</h3>
        {/* <p className="text-primary text-lg cursor-pointer">View All</p> */}
      </div>

      {/* Task list */}
      <div className="grid gap-6">
        {tasks.length == 0 && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-muted-foreground">No tasks today</p>
            <p className="text-sm text-muted-foreground">
              Create a new task to get started
            </p>
          </div>
        )}

        {tasks.length !== 0 &&
          tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onEdit={() => setOpenedTask(task)}
              onDelete={() => handleTaskDelete(task._id)}
              onCheck={() => toggleTaskCompletion(task)}
            />
          ))}
      </div>

      {openedTask && (
        <TableDrawer
          isOpen={Boolean(openedTask)}
          onClose={() => setOpenedTask(null)}
          mode="edit"
          task={openedTask}
          setTasks={setTasks}
        />
      )}
    </div>
  );
}
