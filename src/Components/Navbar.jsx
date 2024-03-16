import React from "react";
import FIrstNav from "./FIrstNav";
import MiddleNav from "./MiddleNav";
import BottomSection from "./BottomSection";

const Navbar = () => {
  return (
    <div className=" w-screen bg-primary pt-[5px]">
      <div className=" flex  flex-col gap-[35px]">
        <div className=" container mx-auto">
          <FIrstNav />
        </div>
        <div className=" container mx-auto">
          <MiddleNav />
        </div>
        <BottomSection/>
      </div>
    </div>
  );
};

export default Navbar;
