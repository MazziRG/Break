import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const GymLog = () => {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter>
          <Button>Delete</Button>
          <Button>Set Log</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default GymLog;
