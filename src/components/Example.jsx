export default function EcommerceHomePage() {
  return (
    <div className="bg-[#F5EEea] text-[#23243c] font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#23243c]/90 backdrop-blur-sm text-white p-4 flex justify-between items-center border-b border-[#4b516b]/20">
        {" "}
        {/* Added border */}
        <a href="#" className="font-bold text-xl text-[#CCB1ab]">
          My Store
        </a>
        <div>
          <a
            href="#"
            className="mr-4 hover:bg-[#4b516b]/30 p-2 rounded transition-colors"
          >
            Shop
          </a>{" "}
          {/* Softer hover */}
          <a
            href="#"
            className="mr-4 hover:bg-[#4b516b]/30 p-2 rounded transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="hover:bg-[#4b516b]/30 p-2 rounded transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      <main className="p-8 flex-grow">
        {/* Hero Section */}
        <section className="mb-16 relative">
          <img
            src="placeholder-hero.jpg"
            alt="Hero Image"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            {" "}
            {/* Slightly darker overlay */}
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">New Collection</h1>
              <p className="text-xl mb-6">Explore our latest arrivals.</p>
              <button className="bg-[#CCB1ab] hover:bg-[#CCB1ab]/70 text-white py-2 px-6 rounded-md transition-colors">
                {" "}
                {/* More subtle hover */}
                Shop Now
              </button>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#4b516b]">Categories</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-48 bg-white rounded-lg shadow-sm p-4 text-center border border-[#9d8f9c]/50">
              {" "}
              {/* Subtler border */}
              <img
                src="placeholder-category1.jpg"
                alt="Category 1"
                className="w-32 h-32 mx-auto mb-2 rounded-full object-cover"
              />
              <h3 className="text-lg font-medium">Category 1</h3>
            </div>
            <div className="w-48 bg-white rounded-lg shadow-sm p-4 text-center border border-[#9d8f9c]/50">
              <img
                src="placeholder-category2.jpg"
                alt="Category 2"
                className="w-32 h-32 mx-auto mb-2 rounded-full object-cover"
              />
              <h3 className="text-lg font-medium">Category 2</h3>
            </div>
            <div className="w-48 bg-white rounded-lg shadow-sm p-4 text-center border border-[#9d8f9c]/50">
              <img
                src="placeholder-category3.jpg"
                alt="Category 3"
                className="w-32 h-32 mx-auto mb-2 rounded-full object-cover"
              />
              <h3 className="text-lg font-medium">Category 3</h3>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#4b516b]">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-4 border border-[#9d8f9c]/50">
              {" "}
              {/* Subtler border */}
              <img
                src="placeholder-product1.jpg"
                alt="Product 1"
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-medium">Product 1</h3>
              <p className="text-gray-600">$99</p>
              <button className="bg-[#CCB1ab] hover:bg-[#CCB1ab]/70 text-white py-2 px-4 rounded-md mt-2 transition-colors">
                {" "}
                {/* More subtle hover */}
                Add to Cart
              </button>
            </div>
            {/* ... other products */}
            <div className="bg-white rounded-lg shadow-sm p-4 border border-[#9d8f9c]/50">
              <img
                src="placeholder-product2.jpg"
                alt="Product 2"
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-medium">Product 2</h3>
              <p className="text-gray-600">$79</p>
              <button className="bg-[#CCB1ab] hover:bg-[#CCB1ab]/70 text-white py-2 px-4 rounded-md mt-2 transition-colors">
                Add to Cart
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-[#9d8f9c]/50">
              <img
                src="placeholder-product3.jpg"
                alt="Product 3"
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-medium">Product 3</h3>
              <p className="text-gray-600">$129</p>
              <button className="bg-[#CCB1ab] hover:bg-[#CCB1ab]/70 text-white py-2 px-4 rounded-md mt-2 transition-colors">
                Add to Cart
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-[#9d8f9c]/50">
              <img
                src="placeholder-product4.jpg"
                alt="Product 4"
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-medium">Product 4</h3>
              <p className="text-gray-600">$49</p>
              <button className="bg-[#CCB1ab] hover:bg-[#CCB1ab]/70 text-white py-2 px-4 rounded-md mt-2 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#23243c] text-[#9d8f9c] p-4 text-center">
        &copy; 2023 My Store. All rights reserved.
      </footer>
    </div>
  );
}
