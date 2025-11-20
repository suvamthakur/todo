export interface Task {
  _id: string;
  title: string;
  description?: string;
  date: string;
  startsAt?: string;
  endsAt?: string;
  startDateTime: Date;
  endDateTime: Date;
  priority?: "low" | "medium" | "high";
  isCompleted: boolean;
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
