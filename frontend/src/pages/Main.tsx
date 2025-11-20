import { useEffect, useState } from "react";
import Input from "../components/ui/Input";
import { Check, Moon, Plus, Search, X } from "lucide-react";
import Container from "../components/layout/Container";
import TaskCard from "../components/layout/main/TaskCard";
import Tasks from "../components/layout/main/Tasks";
import Button from "../components/ui/Button";
import TableDrawer from "../components/drawers/TableDrawer";
import toast from "react-hot-toast";
import type { Task } from "../types/task";
import { api } from "../utils/constants.ts";
import axiosClient from "../lib/axiosClient.ts";
import { AxiosError } from "axios";
import SearchBox from "../components/layout/main/SearchBox.tsx";
import WeekCalender from "../components/layout/main/WeekCalender.tsx";

export default function Main() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (tasks.length) return;
    getTasks();
  }, []);

  useEffect(() => {
    const selected = new Date(selectedDate);

    const filtered = tasks.filter((task) => {
      const taskDate = new Date(task.startDateTime);
      return (
        taskDate.getFullYear() === selected.getFullYear() &&
        taskDate.getMonth() === selected.getMonth() &&
        taskDate.getDate() === selected.getDate()
      );
    });

    setFilteredTasks(filtered);
  }, [tasks, selectedDate]);

  const getTasks = async () => {
    try {
      const res = await axiosClient(api.getTasks);
      setTasks(res.data.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message || "Unable to fetch tasks");
      } else if (err instanceof Error) {
        toast.error(err.message || "Unable to fetch tasks");
      } else {
        toast.error("Unable to fetch tasks");
      }
    }
  };

  const completedTasksCount = filteredTasks.filter(
    (task) => task.isCompleted
  ).length;
  const pendingTasksCount = filteredTasks.filter(
    (task) => !task.isCompleted
  ).length;

  return (
    <Container className="space-y-8">
      {/* Search Box */}
      <SearchBox tasks={tasks} setTasks={setTasks} />

      {/* Week Calender */}
      <WeekCalender
        selectedDate={selectedDate}
        onDateSelect={(date) => setSelectedDate(date)}
      />

      {/* Task cards */}
      <div className="grid grid-cols-2 gap-3 md:gap-6">
        <TaskCard
          variant="success"
          title="Task Completed"
          icon={<Check className="size-4" />}
          noOfTask={completedTasksCount}
        />
        <TaskCard
          variant="error"
          title="Task Pending"
          icon={<X className="size-4" />}
          noOfTask={pendingTasksCount}
        />
      </div>

      {/* Weekly Progress */}
      <div className="grid gap-4">
        <h3 className="text-lg">Weekly Progress</h3>

        <div className="relative bg-primary/15 h-4 sm:h-8">
          <div
            style={{
              width: `${Math.ceil(
                (completedTasksCount /
                  (completedTasksCount + pendingTasksCount || 1)) *
                  100
              )}%`,
            }}
            className={`absolute bg-secondary h-full transition-all duration-300`}
          ></div>
        </div>
      </div>

      {/* Tasks */}
      <Tasks tasks={filteredTasks} setTasks={setTasks} />

      {/* Add Button */}
      <Button
        className="p-5! rounded-full fixed bottom-10 left-1/2 -translate-x-1/2"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Plus className="size-6" />
      </Button>

      {isDrawerOpen && (
        <TableDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          setTasks={setTasks}
        />
      )}
    </Container>
  );
}
