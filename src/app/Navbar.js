'use client'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="w-full flex items-center justify-between p-4 bg-transparent sticky top-0 z-50 border-[#698970] border-b shadow-md">
      <h1 className="text-gradient-green cursor-pointer">Blockblaze Hub</h1>

      <div className="md:hidden">
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm bg-white rounded-lg"
          aria-expanded={openMenu}
          onClick={toggleMenu}
        >
          {openMenu ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6       text-black" />
          )}
        </button>

        {/* Sidebar */}
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 ${openMenu ? "visible" : "hidden"}`}>
          <div className="flex flex-col h-full max-w-xs w-full bg-white shadow-lg">
            <div className="flex justify-end p-4">
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm bg-black rounded-lg"
                onClick={toggleMenu}
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            {/* Menu items */}
            <ul className="flex flex-col p-4 text-black">
              <li className="cursor-pointer text-dark dark:text-primaryLight hover:border-b border-primaryLight">
                Home
              </li>
              <li className="cursor-pointer text-dark dark:text-primaryLight hover:border-b border-primaryLight">
                About
              </li>
              <li className="cursor-pointer text-dark dark:text-primaryLight hover:border-b border-primaryLight">
                Games
              </li>
              <li className="cursor-pointer text-dark dark:text-primaryLight hover:border-b border-primaryLight">
                MarketPlace
              </li>
              <li className="cursor-pointer text-dark dark:text-primaryLight hover:border-b border-primaryLight">
                Dashboard
              </li>
            </ul>

            <button className="bg-purple-800 text-white border-none p-2 ml-2 rounded-lg px-4 w-1/2  font-medium text-sm gradient-purple md:hidden">
              Log in
            </button>

            <form action="" className="relative md:hidden mt-5 p-2">
              <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                name=""
                className="block w-[200px] h-[20px] p-4 ps-10 text-sm  border-none rounded-lg bg-[#021611B5]"
              />
            </form>


            <button
              type="button"
              className="absolute top-4 right-4 p-2 rounded-lg bg-black"
              onClick={toggleMenu}
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* md screens */}
      <div className="hidden md:flex md:items-center md:space-x-8">

        <ul className="flex md:flex-row md:space-x-8 items-center">
          <li className="cursor-pointer text-dark dark:text-primaryLight hover:border-b border-primaryLight">
            Home
          </li>
          <li className="cursor-pointer text-dark dark:text-primaryLight hover:border-b border-primaryLight">
            About
          </li>
          <li className="cursor-pointer text-dark dark:text-primaryLight hover:border-b border-primaryLight">
            Games
          </li>
          <li className="cursor-pointer text-dark dark:text-primaryLight hover:border-b border-primaryLight">
            MarketPlace
          </li>
          <li className="cursor-pointer text-dark dark:text-primaryLight hover:border-b border-primaryLight">
            Dashboard
          </li>
        </ul>
      </div>


      <form action="" className="relative hidden md:block">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          name=""
          className="block w-[200px] h-[20px] p-4 ps-10 text-sm  border-none rounded-lg bg-[#021611B5]"
        />
      </form>


      <button className="bg-purple-800 text-white border-none p-4 rounded-lg px-8 py-2 font-medium text-sm gradient-purple hidden md:block">
        Log in
      </button>
    </nav>
  );
};

export default Navbar;