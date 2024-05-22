import React from "react";
import Calculator from "@/components/Calculator";
import Profile from "@/components/Profile";

const page = () => {
  return (
    <div>
      <Calculator />
      {/* {<Profile />} */}
    </div>
  );
  // return (
  //   <main className="container main">
  //     <div>Calander</div>
  //     <div>Profile</div>
  //     <div> Gym Log</div>
  //     <aside className="sidebar">
  //       <div>Templets</div>
  //       <div>1 Rep</div>
  //     </aside>
  //   </main>
  // );
};

export default page;
