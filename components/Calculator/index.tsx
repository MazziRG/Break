"use client";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

type ResultsStateTypes = {
  lb: number;
  kg: number;
};

function Calculator() {
  const [results, useResults] = useState<ResultsStateTypes | null>(null);
  const [converter, useConverter] = useState<ResultsStateTypes | null>(null);

  const handelWeightConverter = () => {
    // const kg = converter?.lb / 2.205;
    // const lb = converter?.kg * 2.205;
  };

  return (
    <Card>
      <CardHeader className=" text-center">
        <CardTitle className="bg-secondary p-3 rounded-md">
          Gym Calculator
        </CardTitle>
        <CardDescription>
          Calculate your 1 rep max or covert between weight
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <Input placeholder="Write down Weight Amount in lb or kg" />
          <select />
        </div>
        <div className="flex gap-6 items-center">
          <Input placeholder="How many reps" /> <Button>Calculate</Button>
        </div>
        <p className=" flex justify-center items-center text-xl ">
          Your 1 rep max
          <span className="w-20 mx-2 p-2.5 inline-block border-b-2">
            {results?.lb}
          </span>
          lb or
          <span className=" w-20 mx-2 p-2.5 inline-block border-b-2 ">
            {results?.kg}
          </span>
          kg
        </p>
      </CardContent>
      <hr className="my-5" />
      <CardFooter>
        <Input
          value={converter?.lb}
          type="number"
          placeholder="000 lb"
          max={999}
          min={0.0}
          step={5}
        />
        <Button>Convert</Button>
        <Input
          value={converter?.kg}
          type="number"
          placeholder="000 kg"
          max={999}
          min={0.0}
          step={5}
        />
      </CardFooter>
    </Card>
  );
}

export default Calculator;
