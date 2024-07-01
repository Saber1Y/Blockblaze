import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-4 bg-transparent sticky top-0 z-50 border-[#698970]  border-b shadow-md">
      <h1 className="text-gradient-green cursor-pointer">Blockblaze Hub</h1>

      <ul className="flex space-x-4 font-raleway cursor-pointer">
        <li>Home</li>
        <li>About</li>
        <li>Games</li>
        <li>MarketPlace</li>
        <li>Dashboard</li>
      </ul>

      <form action="">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-white "
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
            className="block w-[200px] h-[20px] p-4 ps-10 text-sm text-white border-none rounded-lg bg-[#021611B5]"
          />
        </div>
      </form>

      <button className="bg-purple-800 text-white border-none p-4 rounded-lg px-8 py-2 font-medium text-sm gradient-purple">
        Log in
      </button>
    </nav>
  );
};

export default Navbar;
