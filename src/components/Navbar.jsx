import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-4">
      <h1>Blockblaze Hub</h1>

      <ul className="flex space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>Games</li>
        <li>MarketPlace</li>
        <li></li>
      </ul>

      <form action="">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-white "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            name=""
            className="block w-[200px] h-[20px] p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-[#04251C]"
          />
        </div>
      </form>

      <button className="bg-purple-800 text-white border p-4 rounded-lg px-5 py-2.3 font-medium text-sm">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
