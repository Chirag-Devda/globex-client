import { FaHeart, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const NavbarDropdown = (user, logout) => {
  return (
    <div className="z-[1] absolute top-full right-0 mt-3 w-70 bg-white text-black border border-gray-300 rounded-lg shadow-lg py-2">
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
                onClick={logout}
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
  );
};

export default NavbarDropdown;
