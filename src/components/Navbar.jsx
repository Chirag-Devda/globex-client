import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { LogoutRequest } from "../api/query/auth/authApi";
import { logout } from "../features/auth/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout Function
  const handleLogout = async () => {
    try {
      const response = await LogoutRequest();
      if (response.success) {
        dispatch(logout());
        toast.success(response.message);
      } else {
        toast.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout Failed:", error);
      toast.error("Something went wrong!");
    }
  };

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
          <li className="relative hover:cursor-pointer dropdown-container">
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
                    <a className="w-full" href="/profile" title="Profile">
                      Profile
                    </a>
                  </li>
                  <li className="flex items-center px-4 py-4 hover:bg-gray-100 space-x-2">
                    <FaShoppingBag size={20} />
                    <a className="w-full" href="/orders" title="Orders">
                      Orders
                    </a>
                  </li>
                  <li className="flex items-center px-4 py-4 hover:bg-gray-100 space-x-2">
                    <FaHeart size={20} />
                    <a className="w-full" href="/wishlist" title="Wishlist">
                      Wishlist
                    </a>
                  </li>
                  <li className="flex items-center px-4 py-4 hover:bg-gray-100 space-x-2">
                    {user?.id ? (
                      <>
                        <FaSignOutAlt size={20} />
                        <button
                          onClick={handleLogout}
                          className="w-full cursor-pointer text-left"
                          title="Logout"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <FaSignOutAlt size={20} />
                        <a className="w-full" href="/user/login" title="Login">
                          Login
                        </a>
                      </>
                    )}
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
