import React, { useState } from "react";
import {
  FaHeart,
  FaSearch,
  FaShoppingBag,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { PiGlobeLight } from "react-icons/pi";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="min-h-screen">
      <nav className="w-screen h-[80px] bg-nav-bg flex justify-between items-center px-6 py-4 text-cream-white font-semibold">
        {/* Logo */}
        <div className="text-4xl flex items-center space-x-2 font-bold">
          <span>Gl</span>
          <PiGlobeLight size={32} />
          <span>bex</span>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center max-w-[40vw]  flex-1 ml-10">
          <div className="absolute left-4 text-gray-500">
            <FaSearch size={20} />
          </div>

          <input
            type="search"
            name="search"
            placeholder="Search..."
            className="w-full pl-11 h-10 px-4 rounded-lg bg-cream-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 "
          />
        </div>

        {/* Navbar Links */}
        <ul className="flex items-center space-x-8 text-lg font-medium">
          <li>
            <a href="/shop" className="hover:text-btn-bg transition-all">
              Shop
            </a>
          </li>
          <li>
            <a
              href="/cart"
              title="Cart"
              className="hover:text-btn-bg transition-all"
            >
              <FaShoppingCart size={24} />
            </a>
          </li>

          {/* Dropdown */}
          <li className="relative hover:cursor-pointer">
            <HiDotsVertical
              size={24}
              onClick={() => setDropdownVisible((prev) => !prev)}
            />
            {/* Dropdown Menu */}
            {dropdownVisible && (
              <div className="absolute top-full right-0 mt-3 w-70 bg-white text-black border border-gray-300 rounded-lg shadow-lg py-2">
                <ul>
                  <li className="flex items-center px-4 py-4 hover:bg-gray-100 space-x-2">
                    <IoPersonSharp size={23} />
                    <a href="/profile" title="Profile">
                      Profile
                    </a>
                  </li>
                  <li className="flex items-center px-4 py-4 hover:bg-gray-100 space-x-2">
                    <FaShoppingBag size={20} />
                    <a href="/orders" title="Orders">
                      Orders
                    </a>
                  </li>
                  <li className="flex items-center px-4 py-4 hover:bg-gray-100 space-x-2">
                    <FaHeart size={20} />
                    <a href="/wishlist" title="Wishlist">
                      Wishlist
                    </a>
                  </li>
                  <li className="flex items-center px-4 py-4 hover:bg-gray-100 space-x-2">
                    <FaSignOutAlt size={20} />
                    <a href="/logout" title="Logout">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
