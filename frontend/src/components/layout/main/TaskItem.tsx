import { Check } from "lucide-react";
import type { Task } from "../../../types/task";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

export default function TaskItem({
  task,
  onEdit,
  onDelete,
  onCheck,
}: {
  task: Task;
  onEdit?: () => void;
  onDelete?: () => void;
  onCheck?: () => void;
}) {
  return (
    <div className="flex gap-4">
      <div
        className="mt-0.5 w-6 h-6 border border-primary flex items-center justify-center cursor-pointer"
        onClick={onCheck}
      >
        {task.isCompleted && <Check className="text-primary size-4" />}
      </div>

      <div
        className="flex-1 flex items-center gap-4 pb-6 border-b border-foreground/10 cursor-pointer"
        onClick={onEdit}
      >
        <div className="grid gap-1">
          <p
            className={`text-base sm:text-xl ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </p>

          {!task.isCompleted && (
            <p className="text-sm text-gray-400 line-clamp-1">
              {task.description}
            </p>
          )}
        </div>

        <div className="flex items-center gap-4 sm:gap-6 ml-auto">
          <RiDeleteBinLine
            className="size-5 sm:size-7 text-gray-400 hover:text-destructive cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.();
              console.log("delete");
            }}
          />
          <FaRegEdit
            className="size-5 sm:size-7 text-gray-400 hover:text-primary cursor-pointer"
            onClick={onEdit}
          />
        </div>
      </div>
    </div>
  );
}
