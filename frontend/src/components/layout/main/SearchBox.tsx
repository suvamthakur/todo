import React, { useContext, useState } from "react";
import Input from "../../ui/Input";
import { Moon, Search, Sun } from "lucide-react";
import ThemeContext from "../../../hooks/contexts/ThemeProvider";
import type { Task } from "../../../types/task";
import TaskItem from "./TaskItem";
import TableDrawer from "../../drawers/TableDrawer";
import axiosClient from "../../../lib/axiosClient";
import { api } from "../../../utils/constants";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

export default function SearchBox({
  tasks,
  setTasks,
}: {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
  const [searchText, setSearchText] = useState("");
  const [openedTask, setOpenedTask] = useState<Task | null>(null);
  const { theme, setTheme } = useContext(ThemeContext);

  const filteredTasks = tasks.filter((task) => {
    if (!searchText) return false;

    const text = searchText.toLowerCase().trim();
    const title = task.title.toLowerCase();
    const desc = task.description?.toLowerCase() ?? "";

    return title.includes(text) || desc.includes(text);
  });

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
    <div className="flex items-center gap-4 relative">
      <Input
        placeholder="Search for a task"
        rightElement={<Search className="ml-auto text-gray-500" />}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? <Moon /> : <Sun />}
      </div>

      {filteredTasks.length > 0 && (
        <>
          <div
            className={`fixed inset-0 z-10 transition-all duration-300`}
            onClick={() => setSearchText("")}
          ></div>
          <div className="grid gap-6 bg-background absolute w-full top-full mt-8 z-50">
            {filteredTasks.length !== 0 &&
              filteredTasks.map((task) => (
                <TaskItem
                  key={task._id}
                  task={task}
                  onEdit={() => setOpenedTask(task)}
                  onDelete={() => handleTaskDelete(task._id)}
                  onCheck={() => toggleTaskCompletion(task)}
                />
              ))}
          </div>
        </>
      )}

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
