import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardText,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import TableLog from "./logs";

const GymLog = () => {
  return (
    <section>
      <Card className="h-full flex flex-col">
        <CardHeader className="flex-row items-center bg-secondary justify-between rounded-md">
          <CardTitle> Templete Title</CardTitle>
          <CardDescription> DD, MMMM YYYY </CardDescription>
        </CardHeader>
        <CardContent className="grow">
          <div className="flex items-center">
            <CardText className="grow"> Notes </CardText>
            <Button size="sm" variant="secondary">
              Notes
            </Button>
          </div>
          <div className="grid gap-4">
            {/* Make this section  grow to scrool thru */}
            <TableLog />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Delete</Button>

          <Button className="w-full">Update</Button>
          <Button className="w-full">New Workout</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default GymLog;
