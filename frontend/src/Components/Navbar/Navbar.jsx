import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <>
      <div className="navbar-div flex w-[90%] justify-between  mt-1.5 p-2 ml-[5%] text-xl">
        <div className="mt-1.5">
          <div>
            <RxHamburgerMenu size={25} />
          </div>
        </div>
        <div className="w-[20%]   h-8 flex justify-between align-middle">
          <div className="nav-home ">Home</div>
          <div className="search w-10 flex">
            <input type="text" placeholder=""></input>
            <div className=" mt-1.5">
              <FaSearch />
            </div>
          </div>
        </div>
        <div className="mt-1.5">
          <FaCircleUser size={30} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
