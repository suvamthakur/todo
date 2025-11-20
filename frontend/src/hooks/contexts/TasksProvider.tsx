import { createContext, useState } from "react";
import type { Task } from "../../types/task";

const TasksContext = createContext<{
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}>({
  tasks: [],
  setTasks: () => {},
});

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
