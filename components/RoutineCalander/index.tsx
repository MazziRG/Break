import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Calendar, DateCell, DateGrid, CalanderControls } from "../ui/calendar";
import { Button } from "../ui/button";
import {
  ChevronLeft as LeftIcon,
  ChevronRight as RightIcon,
} from "lucide-react";
const array = [9, 6, 3, 4, 5, 6, 7, 1, 1, 1, 1, 1, 1, 1];
function RoutineCalander() {
  return (
    <section>
      <Card>
        <CardHeader className="flex-row justify-between items-center py-0 bg-slate-100">
          <CardTitle> Routine Calendar</CardTitle>
          <CalanderControls>
            <Button variant="ghost" className="px-1">
              <LeftIcon />
            </Button>
            <Button className=" rounded-sm text-lg" variant="ghost">
              May
            </Button>

            <Button className=" rounded-sm text-lg" variant="ghost">
              2024
            </Button>
            <Button variant="ghost" className="px-1">
              <RightIcon />
            </Button>
          </CalanderControls>
        </CardHeader>

        <Calendar>
          <Button>
            <LeftIcon />
          </Button>
          <DateGrid>
            {array.map((id: number, idx) => {
              return <DateCell key={id}>{idx + 1}</DateCell>;
            })}
          </DateGrid>
          <Button>
            <RightIcon />
          </Button>
        </Calendar>
      </Card>
    </section>
  );
}

export default RoutineCalander;
