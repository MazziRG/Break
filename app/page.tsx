import React from "react";
import Calculator from "@/components/Calculator";
import Profile from "@/components/Profile";
import GymLog from "@/components/GymLog";
import Calander from "@/components/RoutineCalander";
import QuickTempletes from "@/components/Templets";

const Page = () => {
  return (
    <>
      {/* <Calander />
      <Profile />
      <GymLog />
      <Calculator /> */}
      <main className="container main">
        <Calander />
        <Profile />
        <GymLog />
        <aside className="sidebar ">
          <QuickTempletes />
          <Calculator />
        </aside>
      </main>
    </>
  );
};

export default Page;
