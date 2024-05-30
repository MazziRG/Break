import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";

const logs = {
  weightType: "lb",
  previous: "50",
};

const TableLog = () => {
  return (
    <Table>
      <TableCaption className="pl-2">
        <div className="flex justify-between items-center">
          <h4>Workout Title</h4>
          <div>
            <Button variant="outlineError" className="text-xs mr-2 " size="xs">
              Remove
            </Button>
            <Button className=" text-xs" size="xs" variant="outlineDark">
              + Add Set
            </Button>
          </div>
        </div>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableCell></TableCell>
          <TableHead>Set</TableHead>
          <TableHead>Previous</TableHead>
          <TableHead>lbs</TableHead>
          <TableHead>Reps</TableHead>
          <TableCell></TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Button variant="destructive" size="check">
              X
            </Button>
          </TableCell>
          <TableCell>
            <Input className="p-1 w-10 m-auto text-center" value={1} />
          </TableCell>
          <TableCell>
            <Input className="p-1 w-24 m-auto text-center" value={1} />
          </TableCell>
          <TableCell>
            <Input className="p-1 w-10 m-auto text-center" value={1} />
          </TableCell>
          <TableCell>
            <Input className="p-1 w-24 m-auto text-center" value={1} />
          </TableCell>
          <TableCell>
            <Button size="check" className=" bg-lime-400">
              c
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableLog;
