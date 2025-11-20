import Drawer from "../ui/Drawer";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import Container from "../layout/Container";
import Select from "../ui/Select";
import { useForm } from "react-hook-form";
import type { Task } from "../../types/task";
import axiosClient from "../../lib/axiosClient";
import { api } from "../../utils/constants";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

const priorities = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

export default function TableDrawer({
  isOpen,
  onClose,
  setTasks,
  mode = "create",
  task,
}: {
  isOpen: boolean;
  onClose: () => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  mode?: "create" | "edit" | "view";
  task?: Task;
}) {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<Task>({
    defaultValues: {
      _id: task?._id,
      title: task?.title || "",
      description: task?.description || "",
      priority: task?.priority,
      startsAt: task?.startsAt || "",
      endsAt: task?.endsAt || "",
      date: task?.date || "",
    },
  });

  function onFormSubmit(data: Task) {
    if (mode === "create") {
      createTasks(data);
    } else if (mode === "edit") {
      editTask(data);
    }
    onClose();
  }

  const createTasks = async (data: Task) => {
    try {
      const { title, description, endsAt, startsAt, date, priority } = data;

      const res = await axiosClient.post(api.createTask, {
        title,
        description,
        endsAt,
        startsAt,
        date,
        priority: priority || undefined,
      });

      setTasks((prev) => [res.data.data, ...prev]);
      toast.success("Task created successfully");
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

  const editTask = async (data: Task) => {
    try {
      const { _id, title, description, endsAt, startsAt, date, priority } =
        data;

      const res = await axiosClient.patch(api.editTask + `/${_id}`, {
        title,
        description,
        endsAt,
        startsAt,
        date,
        priority: priority || undefined,
      });

      setTasks((prev) =>
        prev.map((task) =>
          task._id === res.data.data._id ? res.data.data : task
        )
      );
      toast.success("Task created successfully");
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message || "Unable to edit task");
      } else if (err instanceof Error) {
        toast.error(err.message || "Unable to edit task");
      } else {
        toast.error("Unable to edit task");
      }
    }
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <Container className="py-0! px-0!">
        <form className="grid gap-6" onSubmit={handleSubmit(onFormSubmit)}>
          <h4 className="mb-2 font-semibold!">Add New Task</h4>
          <Input
            label="Task Title"
            placeholder="Enter task title"
            required
            {...register("title", { required: "Task title is required" })}
            error={errors.title?.message}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              type="time"
              label="Set Time"
              placeholder="Starts"
              required
              {...register("startsAt", {
                required: "Start time is required",
              })}
              error={errors.startsAt?.message}
            />
            <div className="mt-auto">
              <Input
                type="time"
                placeholder="Ends"
                required
                {...register("endsAt", {
                  required: "End time is required",
                })}
                error={errors.endsAt?.message}
              />
            </div>
          </div>

          <Input
            type="date"
            label="Set Date"
            placeholder="Set a date"
            required
            {...register("date", { required: "Date is required" })}
            error={errors.date?.message}
          />

          <Select
            label="Priority"
            options={priorities}
            {...register("priority")}
            error={errors.priority?.message}
          />

          <TextArea
            label="Description"
            placeholder="Add description"
            rows={4}
            {...register("description")}
            error={errors.description?.message}
          />

          {mode == "create" && (
            <Button>{isSubmitting ? " Creating..." : "Create Task"}</Button>
          )}
          {mode == "edit" && (
            <Button>{isSubmitting ? " Saving..." : "Save"}</Button>
          )}
        </form>
      </Container>
    </Drawer>
  );
}
