import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CategoriesSection from "./CategoriesSection";

const BottomSection = () => {
  const array = [...Array(8)];
  const [popoverSection, setPopoverSection] = useState(false);
  return (
    <div  onMouseLeave={() => setPopoverSection(false)} className="  border-t-2 border-[#00000029] border-opacity-60">
      <div className=" container mx-auto ">
        <div className=" globalRowFlexGap relative">
          {array?.map((el, i) => (
            <div
              className="hover:bg-[#00000029]"
              onMouseOver={() => setPopoverSection(true)}
              
              key={i}
            >
              <div className="globalRowFlexGap justify-center gap-5 h-[50px] cursor-pointer ">
                <div className="globalRowFlexGap  gap-[3px] justify-center ml-[15px]">
                  <p className="  text-textColor font-bold  text-[18px]">
                    Home
                  </p>

                  <IoIosArrowDown className="text-textColor" />
                </div>
                {i !== array?.length - 1 && (
                  <div className="  h-full w-[1px] bg-[#00000029]"></div>
                )}
              </div>
            </div>
          ))}
           {popoverSection && <CategoriesSection setPopoverSection={setPopoverSection} />}
        </div>
       
      </div>
    </div>
  );
};

export default BottomSection;
