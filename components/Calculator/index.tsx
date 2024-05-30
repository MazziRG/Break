"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";

import { Button } from "../ui/button";
import { Input, Select } from "../ui/input";
import { useState } from "react";
import { RulerIcon } from "lucide-react";

interface Key {
  [key: string]: string | number;
}

type ResultsStateTypes = {
  lb?: string;
  kg?: string;
};

type EventTarget = React.ChangeEvent<HTMLInputElement>;

const convertedWeight: Key = {
  kg: "lb",
  lb: "kg",
};

function Calculator() {
  const [results, useResults] = useState<ResultsStateTypes | null>(null);
  const [converter, useConverter] = useState<ResultsStateTypes | null>(null);

  const kg = converter?.kg;
  const lb = converter?.lb;

  const HandelWeightConverter = (e: EventTarget) => {
    const InputTarget = e.currentTarget;
    const inputValue = e.currentTarget.value;
    const targetWeight = InputTarget.name;

    const other = convertedWeight[targetWeight];

    const convert: Key = {
      kg: Number(inputValue) / 2.205 || "",
      lb: Number(inputValue) * 2.205 || "",
    };

    useConverter({
      [targetWeight]: inputValue,
      [other]: convert[targetWeight],
    });
  };

  return (
    <section>
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
          <div className="flex items-center ">
            <Input
              placeholder="Weight Amount in Lb or KG"
              className="rounded-r-none focus:rounded focus:mr-1"
            />
            <Select className=" rounded-l-none w-20">
              <option>kg</option>
              <option>kg</option>
            </Select>
          </div>
          <div className="flex gap-6 items-center">
            <Input placeholder="How many reps" /> <Button>Calculate</Button>
          </div>
          <p className=" flex justify-center items-center text-sm gap-2">
            Your 1 rep max
            <span className="w-14  p-1 inline-block text-md border-b-2 text-center">
              {results?.lb}
            </span>
            lb or
            <span className=" w-14  p-1 inline-block text-md border-b-2">
              {results?.kg}
            </span>
            kg
          </p>
        </CardContent>
        <hr className="my-2 -m-2" />
        <CardTitle className=" text-center underline ">Converter</CardTitle>

        <CardDescription className="p-3 text-center">
          Converts between KG{"(kilograms)"} and LB {"(Pounds)"}
        </CardDescription>
        <CardFooter>
          <Input
            value={lb}
            type="number"
            placeholder="000 lb"
            name="lb"
            max={999}
            min={0.0}
            step={5}
            onChange={(e: EventTarget) => HandelWeightConverter(e)}
          />
          {/* <Button disabled={bttnConvert}>Convert</Button> */}
          <div>
            <RulerIcon />
            <hr className="absolute w-24 z-10" />
          </div>
          <Input
            value={kg}
            type="number"
            placeholder="000 kg"
            name="kg"
            max={999}
            min={0.0}
            step={5}
            onChange={(e: EventTarget) => HandelWeightConverter(e)}
          />
        </CardFooter>
      </Card>
    </section>
  );
}

export default Calculator;
