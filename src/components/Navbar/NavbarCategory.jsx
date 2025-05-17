import { Link } from "react-router-dom";
import { category } from "../../constants";

const NavbarCategory = () => {
  return (
    <div className="mr-44 relative">
      {category.map((category) => (
        <div key={category.id} className="dropdown dropdown-hover space-x-6">
          <Link
            to={`/shop?category=${category.name.toLocaleLowerCase()}`}
            className="text-xl hover:underline"
          >
            {category.name}
          </Link>
          <div className="dropdown-content p-6  gap-10 flex flex-wrap w-[50vw] bg-white rounded-box z-1 shadow-sm">
            {category.products.map((product, i) => (
              <ul className="flex flex-col" key={i}>
                <h1 className="text-amber-400 text-sm cursor-default underline font-semibold">
                  {product.headCategory}
                </h1>
                {product.list.map((list, i) => (
                  <li key={i} className="text-black ">
                    <Link
                      to={`/shop?category=${encodeURIComponent(
                        category.name.toLowerCase()
                      )}&subCategory=${encodeURIComponent(
                        list.name.toLowerCase()
                      )}`}
                    >
                      {list.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavbarCategory;
