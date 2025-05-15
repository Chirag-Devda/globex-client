import "../../index.css";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import { brands, products, shopByCategories } from "../../constants/index.js";
// Framer Motion
import { motion, useAnimationControls, useMotionValue } from "framer-motion";

// Swiper Import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const Home = () => {
  const brandSliderControler = useAnimationControls();
  const x = useMotionValue(0);

  // Function to start/resume animation

  const startAnimation = () => {
    brandSliderControler.start({
      x: "-100%",
      transition: {
        ease: "linear",
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  useEffect(() => {
    startAnimation();
    return () => brandSliderControler.stop(); // optional cleanup
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-primary-bg text-secondary-text">
        {/* Discount Bannner Section */}
        <section
          id="banners"
          className="h-[25vw] flex flex-col justify-center px-10"
        >
          <div className="banner-container flex rounded-2xl bg-white">
            <div className="text-7xl font-extrabold flex-1 text-center py-12 rounded-l-2xl bg-amber-300 shadow-md">
              FLAT <sup className="text-5xl">₹</sup>500 OFF
            </div>
            <div className="text-5xl font-semibold flex-1 text-center py-12 text-gray-800">
              <span>
                On Your 1<sup className="text-4xl">st</sup> Purchase
              </span>
              <br />
              <span className="text-3xl font-medium">
                From Globex with our exclusive new collection!
              </span>
            </div>
          </div>
        </section>

        {/* Shop By Brands Section */}
        <section
          id="Brands"
          className="bg-gradient-to-b from-[#fdfcfb] to-[#e2d9c7] text-[#333333] px-10 py-10"
        >
          <h1 className="text-4xl font-bold text-center mb-6">Shop by Brand</h1>

          <div className="relative overflow-hidden w-full py-4">
            {/* Left Gradient Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#fdfcfb] to-transparent z-10 pointer-events-none" />

            {/* Right Gradient Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#fdfcfb] to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-8 min-w-full"
              animate={brandSliderControler}
              style={{ x }} // 👈 bind motionValue to div
              onMouseEnter={() => brandSliderControler.stop()}
              onMouseLeave={() => {
                startAnimation();
                console.log(x.current);
              }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <a
                  href={brand.link}
                  key={index}
                  className="group hover:cursor-pointer min-w-[160px] p-5 bg-white text-black shadow-md rounded-2xl flex flex-col items-center justify-center border border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-16 w-auto object-contain mb-3 transition-transform duration-300 group-hover:scale-110"
                  />
                  <p className="text-sm font-semibold group-hover:text-amber-600 transition-colors">
                    {brand.name}
                  </p>
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* All In Just ₹999 */}
        <section className=" p-10">
          <h1 className="text-4xl font-bold text-center mb-6">
            All In Just ₹999
          </h1>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation, A11y]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={50}
            slidesPerView={4}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white w-[250px] border border-gray-200 rounded-2xl shadow-md mx-auto">
                  {/* Product Image */}
                  <div className="relative flex justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-64 object-cover rounded-t-2xl"
                    />
                    <span className="absolute top-2 left-2 bg-amber-500 text-white text-xs px-2 py-1 rounded">
                      ₹999 Only
                    </span>
                  </div>
                  {/* Product Info */}
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold text-secondary-text">
                        ₹999
                      </span>
                      <button className="bg-secondary-text text-white px-4 py-1 rounded hover:bg-amber-500 hover:text-black transition-colors text-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* View All Button */}
          <div className="text-end mt-6">
            <a
              href="/all-products"
              className="inline-block bg-secondary-text text-white px-6 py-2 rounded hover:bg-amber-500 hover:text-black transition-colors"
            >
              View All
            </a>
          </div>
        </section>

        {/* Shop by Category */}
        <section className=" p-10">
          {" "}
          <h1 className="text-4xl font-bold text-center mb-6">
            Shop by Category
          </h1>
          <div className="grid grid-cols-5 gap-6  p-6 rounded-xl">
            {shopByCategories.map((product) => (
              <div
                key={product.id}
                className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer w-60 h-64 bg-white"
              >
                {/* Image with smooth hover */}
                <div className="overflow-hidden w-full h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Category text overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 to-transparent flex items-end justify-center">
                  <div className="w-full group-hover:text-amber-600 text-center translate-y-15 group-hover:translate-y-0 transition-transform duration-500 text-neutral-800 text-lg font-semibold bg-white/30 backdrop-blur-md backdrop-saturate-150 border border-white/40 p-2 rounded-t-lg">
                    {product.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
