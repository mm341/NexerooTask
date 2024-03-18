import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { FaCarSide } from "react-icons/fa";

const FIrstNav = () => {
  return (
    <div className="globalRowFlex  opacity-70 text-[12px]">
      {/*left section  */}
      <p >Welcome to Worldwide Electronics Store</p>

      {/* right setion */}
      <div className=" w-[65%] flex flex-row justify-end gap-5  items-center">
        <div className="navFirstLeftSection">
          <CiLocationOn />
          <p>Store Locator</p>
        </div>
        <div className=" opacity-30">|</div>
        <div className="navFirstLeftSection">
          <FaCarSide />
          <p >Track Your Order</p>
        </div>
        <div className=" opacity-30">|</div>
        <div className="navFirstLeftSection">
          <FiShoppingCart />
          <p >Shop</p>
        </div>
        <div className=" opacity-30">|</div>
        <div className="navFirstLeftSection">
          <VscAccount />

          <p className="opacity-70 text-[12px]">My Account</p>
        </div>
      </div>
    </div>
  );
};

export default FIrstNav;
