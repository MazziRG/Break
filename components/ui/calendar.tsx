import { cn } from "@/lib/utils";
import React from "react";

const Calendar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg p-2 w-full my-2 flex  items-center", className)}
    {...props}
  />
));
Calendar.displayName = "Calendar";

const DateGrid = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "rounded-lg p-2 grid grid-cols-7 grid-rows-2 gap-4 place-items-center",
      className
    )}
    {...props}
  />
));
DateGrid.displayName = "DateGrid";

const DateCell = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(
      "rounded-md border shadow-sm p-2 text-center w-12 h-12 cursor-pointer flex justify-center items-center hover:bg-slate-100",
      className
    )}
    {...props}
  />
));
DateCell.displayName = "DateCell";

const CalanderControls = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-md p-2 flex gap-0.5", className)}
    {...props}
  />
));
CalanderControls.displayName = "CalanderControls";

const index = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-md border shadow-sm p-1", className)}
    {...props}
  />
));
index.displayName = "index";

export { Calendar, DateGrid, DateCell, CalanderControls };
