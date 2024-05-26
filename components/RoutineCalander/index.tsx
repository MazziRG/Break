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
        <CardHeader className="flex-row justify-between items-center  bg-secondary  ">
          <CardTitle> Routine Calendar</CardTitle>
          <CalanderControls>
            <Button
              variant="ghost"
              className="px-1 bg-white  hover:bg-primary hover:text-accent"
            >
              <LeftIcon />
            </Button>
            <Button className=" rounded-sm text-lg" variant="ghost">
              May
            </Button>
            <Button className=" rounded-sm text-lg" variant="ghost">
              2024
            </Button>
            <Button
              variant="ghost"
              className="px-1 bg-white hover:bg-primary hover:text-accent"
            >
              <RightIcon />
            </Button>
          </CalanderControls>
        </CardHeader>

        <Calendar>
          <Button size="none" variant="ghost">
            <LeftIcon />
          </Button>
          <DateGrid className="grow ">
            {array.map((id: number, idx) => {
              return (
                <DateCell key={id} className="w-12 h-12">
                  {idx + 1}
                </DateCell>
              );
            })}
          </DateGrid>
          <Button size="none" variant="ghost">
            <RightIcon />
          </Button>
        </Calendar>
      </Card>
    </section>
  );
}

export default RoutineCalander;
