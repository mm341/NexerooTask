import React from "react";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { TbReplace } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
const MiddleNav = () => {
  return (
    <div className="globalRowFlex">
      {/*  left section */}
      <h1 className="  text-textColor font-extrabold  text-[42px]">electro</h1>
      {/*  middle section */}
      <div className=" flex flex-row gap-5 items-center">
        <IoIosMenu className=" text-[35px]" />

        {/*  search box */}
        <div className=" bg-white  lg:w-[900px] w-[200px]   rounded-full flex flex-row  justify-between h-[43px] pl-[30px]">
          <input
            type="search"
            placeholder="Search for products"
            className="focus:outline-none"
          />

          <select className="focus:outline-none" name="cars" id="cars">
            <option className="text-textColor" value="volvo">
              All Categories
            </option>
            <option className="text-textColor" value="saab">
              Saab
            </option>
            <option className="text-textColor" value="mercedes">
              Mercedes
            </option>
          </select>

          <div className=" bg-textColor rounded-r-full p-[17px] globalRowFlex  text-white">
            <CiSearch className=" text-[27px]" />
          </div>
        </div>
      </div>

      {/*  right section */}
      <div className=" flex flex-row gap-[60px]">
        <TbReplace className="text-[25px]" />
        <CiHeart className="text-[25px]" />
        <VscAccount className="text-[25px]" />
        <FiShoppingCart className="text-[25px]" />
      </div>
    </div>
  );
};

export default MiddleNav;
