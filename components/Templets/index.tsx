import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "../ui/carousel";
const array = [1, 1, 1, 1, 1, 1, 1, 1];
const QuickTempletes = () => {
  return (
    <section>
      <Card>
        <Carousel>
          <CardHeader className="flex-row justify-between items-center bg-secondary p-1  relative">
            <CarouselPrevious className="h-10 w-10 bg-white hover:bg-primary hover:text-accent " />
            <CardTitle> Quick Templetes</CardTitle>
            <CarouselNext className="  h-10 w-10 bg-white hover:bg-primary hover:text-accent" />
          </CardHeader>
          <CarouselContent className="my-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="grid grid-cols-2 grid-rows-2 gap-2 "
              >
                <div className="aspect-video z-0  p-2  border hover:bg-secondary shadow-sm rounded-md cursor-pointer">
                  <h4 className="">Templet title</h4>
                  <ul className="grid grid-cols-2 place-items-start ">
                    <li className="text-lg">Tricept </li>
                  </ul>
                </div>
                <div className="aspect-video z-0  p-2 bg-card border rounded-md hover:bg-secondary  cursor-pointer">
                  <h4 className="">Templet title</h4>
                  <ul className="grid grid-cols-2 place-items-start ">
                    <li className="text-xs ">Tricept </li>
                    <li className="text-xs ">Legs</li>
                    <li className="text-xs ">Shoulders</li>
                    <li className="text-xs ">Shoulders</li>
                  </ul>
                </div>
                <div className="aspect-video z-0  p-2 bg-card border rounded-md hover:bg-secondary  cursor-pointer">
                  <h4 className="">Templet title</h4>
                  <ul className="grid grid-cols-2 place-items-start ">
                    <li className="text-xs ">Tricept </li>
                    <li className="text-xs ">Legs</li>
                    <li className="text-xs ">Shoulders</li>
                    <li className="text-xs ">Shoulders</li>
                  </ul>
                </div>
                <div className="aspect-video z-0  p-2 bg-card border rounded-md hover:bg-secondary  cursor-pointer">
                  <h4 className="">Templet title</h4>
                  <ul className="grid grid-cols-2 place-items-start ">
                    <li className="text-xs ">Tricept </li>
                    <li className="text-xs ">Legs</li>
                    <li className="text-xs ">Shoulders</li>
                    <li className="text-xs ">Shoulders</li>
                  </ul>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Card>
    </section>
  );
};

export default QuickTempletes;
