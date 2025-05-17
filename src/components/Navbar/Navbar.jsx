import { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { PiGlobeLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { LogoutRequest } from "../../api/authApi";
import { logout } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import NavbarDropdown from "./NavbarDropdown";
import NavbarCategory from "./NavbarCategory";

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
    <nav className="w-screen h-[80px] bg-nav-bg flex justify-between items-center px-6 py-4 text-cream-white font-semibold">
      {/* Logo */}
      <div className="text-4xl flex items-center space-x-2 font-bold">
        <span>Gl</span>
        <PiGlobeLight size={32} />
        <span>bex</span>
      </div>

      {/* Category */}
      <NavbarCategory />
      {/* Search Bar */}
      <div className="relative flex items-center max-w-[30vw]  flex-1">
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
            <NavbarDropdown user={user} logout={handleLogout} />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
