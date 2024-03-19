import React from "react";

const CategoriesSection = ({setPopoverSection}) => {
  const array = [...Array(4)];
  return (
    <div onMouseLeave={() => setPopoverSection(false)} className=" p-5 bg-white w-full grid grid-cols-4 gap-4 z-[10000] absolute bottom-[-205px]  border-t-primary border-[2px]">
      {array?.map((el, i) => (
        <div key={i} className=" flex flex-col gap-[10px]">
          <p className="  text-textColor font-bold  text-[18px]">Home data</p>
          {array?.map((e, i) => (
            <p className="text-textColor" key={i}>data</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CategoriesSection;
