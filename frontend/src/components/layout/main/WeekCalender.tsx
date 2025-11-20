import {
  add,
  format,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  isToday,
  isEqual,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function WeekCalender({
  selectedDate,
  onDateSelect,
}: {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const firstDayOfWeek = startOfWeek(currentDate);
  const lastDayOfWeek = endOfWeek(currentDate);

  const days = eachDayOfInterval({
    start: firstDayOfWeek,
    end: lastDayOfWeek,
  });

  const nextWeek = () => {
    setCurrentDate(add(currentDate, { weeks: 1 }));
  };

  const prevWeek = () => {
    setCurrentDate(add(currentDate, { weeks: -1 }));
  };

  const handleDateClick = (day: Date) => {
    onDateSelect(day);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg">
          {format(currentDate, "MMMM yyyy")}
        </p>
        <div className="flex items-center gap-2">
          <ChevronLeft
            className="cursor-pointer text-muted-foreground hover:text-foreground"
            onClick={prevWeek}
          />
          <ChevronRight
            className="cursor-pointer text-muted-foreground hover:text-foreground"
            onClick={nextWeek}
          />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <div
            key={day.toString()}
            onClick={() => handleDateClick(day)}
            className={`grid place-items-center gap-2 p-2 rounded-md cursor-pointer transition-colors 
              ${
                isEqual(day, selectedDate) && !isToday(day)
                  ? "bg-primary/10 text-primary"
                  : ""
              }
              ${
                isToday(day)
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10"
              }`}
          >
            <p className="text-sm">{format(day, "E")}</p>
            <p className="font-medium">{format(day, "d")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
