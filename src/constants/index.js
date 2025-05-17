const category = [
  {
    id: "man",
    name: "Men",
    products: [
      {
        headCategory: "Topwears",
        list: [
          { name: "T-shirts", link: "t-shirts" },
          { name: "Shirts", link: "shirts" },
          { name: "Jackets", link: "jackets" },
          { name: "Blazers", link: "blazers" },
          { name: "Sweatshirts", link: "sweatshirts" },
          { name: "Hoodies", link: "hoodies" },
        ],
      },
      {
        headCategory: "Bottomwear",
        list: [
          { name: "Jeans", link: "jeans" },
          { name: "Casual Trousers", link: "casual-trousers" },
          { name: "Formal Trousers", link: "formal-trousers" },
          { name: "Shorts", link: "shorts" },
          { name: "Joggers", link: "joggers" },
          { name: "Cargo Pants", link: "cargo-pants" },
        ],
      },
      {
        headCategory: "Footwear",
        list: [
          { name: "Sneakers", link: "sneakers" },
          { name: "Loafers", link: "loafers" },
          { name: "Formal Shoes", link: "formal-shoes" },
          { name: "Sandals", link: "sandals" },
          { name: "Flip Flops", link: "flip-flops" },
          { name: "Boots", link: "boots" },
        ],
      },
      {
        headCategory: "Accessories",
        list: [
          { name: "Belts", link: "belts" },
          { name: "Watches", link: "watches" },
          { name: "Sunglasses", link: "sunglasses" },
          { name: "Wallets", link: "wallets" },
          { name: "Caps", link: "caps" },
          { name: "Bags", link: "bags" },
        ],
      },
      {
        headCategory: "Ethnic Wear",
        list: [
          { name: "Kurtas", link: "kurtas" },
          { name: "Sherwanis", link: "sherwanis" },
          { name: "Nehru Jackets", link: "nehru-jackets" },
          { name: "Ethnic Sets", link: "ethnic-sets" },
          { name: "Dhoti Pants", link: "dhoti-pants" },
        ],
      },
      {
        headCategory: "Innerwear",
        list: [
          { name: "Boxers", link: "boxers" },
          { name: "Briefs", link: "briefs" },
          { name: "Vests", link: "vests" },
          { name: "Thermals", link: "thermals" },
          { name: "Socks", link: "socks" },
        ],
      },
      {
        headCategory: "Sportswear",
        list: [
          { name: "Track Pants", link: "track-pants" },
          { name: "Sports T-shirts", link: "sports-t-shirts" },
          { name: "Shorts", link: "sports-shorts" },
          { name: "Gym Wear", link: "gym-wear" },
          { name: "Running Shoes", link: "running-shoes" },
        ],
      },
    ],
  },
  {
    id: "women",
    name: "Women",
    products: [
      {
        headCategory: "Topwears",
        list: [
          { name: "Tops", link: "tops" },
          { name: "Kurtis", link: "kurtis" },
          { name: "Shirts", link: "shirts" },
          { name: "Blouses", link: "blouses" },
          { name: "Sweaters", link: "sweaters" },
          { name: "Tunics", link: "tunics" },
        ],
      },
      {
        headCategory: "Bottomwear",
        list: [
          { name: "Jeans", link: "jeans" },
          { name: "Leggings", link: "leggings" },
          { name: "Palazzos", link: "palazzos" },
          { name: "Trousers", link: "trousers" },
          { name: "Skirts", link: "skirts" },
          { name: "Shorts", link: "shorts" },
        ],
      },
      {
        headCategory: "Footwear",
        list: [
          { name: "Heels", link: "heels" },
          { name: "Flats", link: "flats" },
          { name: "Sneakers", link: "sneakers" },
          { name: "Sandals", link: "sandals" },
          { name: "Boots", link: "boots" },
          { name: "Wedges", link: "wedges" },
        ],
      },
      {
        headCategory: "Accessories",
        list: [
          { name: "Handbags", link: "handbags" },
          { name: "Jewellery", link: "jewellery" },
          { name: "Watches", link: "watches" },
          { name: "Sunglasses", link: "sunglasses" },
          { name: "Scarves", link: "scarves" },
          { name: "Hair Accessories", link: "hair-accessories" },
        ],
      },
      {
        headCategory: "Ethnic Wear",
        list: [
          { name: "Sarees", link: "sarees" },
          { name: "Salwar Suits", link: "salwar-suits" },
          { name: "Lehengas", link: "lehengas" },
          { name: "Dupattas", link: "dupattas" },
          { name: "Ethnic Gowns", link: "ethnic-gowns" },
        ],
      },
      {
        headCategory: "Innerwear & Loungewear",
        list: [
          { name: "Bras", link: "bras" },
          { name: "Panties", link: "panties" },
          { name: "Sleepwear", link: "sleepwear" },
          { name: "Shapewear", link: "shapewear" },
          { name: "Camisoles", link: "camisoles" },
        ],
      },
      {
        headCategory: "Sportswear",
        list: [
          { name: "Active T-shirts", link: "active-t-shirts" },
          { name: "Sports Bras", link: "sports-bras" },
          { name: "Track Pants", link: "track-pants" },
          { name: "Yoga Pants", link: "yoga-pants" },
          { name: "Training Shoes", link: "training-shoes" },
        ],
      },
    ],
  },
  {
    id: "kids",
    name: "Kids",
    products: [
      {
        headCategory: "Boys Clothing",
        list: [
          { name: "T-shirts", link: "t-shirts" },
          { name: "Shirts", link: "shirts" },
          { name: "Jeans", link: "jeans" },
          { name: "Shorts", link: "shorts" },
          { name: "Ethnic Wear", link: "ethnic-wear" },
          { name: "Jackets", link: "jackets" },
        ],
      },
      {
        headCategory: "Girls Clothing",
        list: [
          { name: "Frocks", link: "frocks" },
          { name: "Tops", link: "tops" },
          { name: "Leggings", link: "leggings" },
          { name: "Skirts", link: "skirts" },
          { name: "Dresses", link: "dresses" },
          { name: "Ethnic Wear", link: "ethnic-wear" },
        ],
      },
      {
        headCategory: "Footwear",
        list: [
          { name: "Sneakers", link: "/kids/footwear/sneakers" },
          { name: "Sandals", link: "/kids/footwear/sandals" },
          { name: "School Shoes", link: "/kids/footwear/school-shoes" },
          { name: "Flip Flops", link: "/kids/footwear/flip-flops" },
          { name: "Boots", link: "/kids/footwear/boots" },
        ],
      },
      {
        headCategory: "Accessories",
        list: [
          { name: "Caps", link: "/kids/accessories/caps" },
          { name: "Belts", link: "/kids/accessories/belts" },
          { name: "Backpacks", link: "/kids/accessories/backpacks" },
          { name: "Watches", link: "/kids/accessories/watches" },
          { name: "Hairbands", link: "/kids/accessories/hairbands" },
          { name: "Socks", link: "/kids/accessories/socks" },
        ],
      },
      {
        headCategory: "Infants",
        list: [
          { name: "Rompers", link: "/kids/infants/rompers" },
          { name: "Onesies", link: "/kids/infants/onesies" },
          { name: "Baby Sets", link: "/kids/infants/baby-sets" },
          { name: "Sweaters", link: "/kids/infants/sweaters" },
          { name: "Booties", link: "/kids/infants/booties" },
        ],
      },
      {
        headCategory: "Toys & Games",
        list: [
          { name: "Soft Toys", link: "/kids/toys/soft-toys" },
          { name: "Educational Toys", link: "/kids/toys/educational-toys" },
          { name: "Puzzles", link: "/kids/toys/puzzles" },
          { name: "Action Figures", link: "/kids/toys/action-figures" },
          { name: "Board Games", link: "/kids/toys/board-games" },
        ],
      },
    ],
  },
];

const brands = [
  {
    id: 1,
    name: "Nike",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png",
    productCount: 230,
    description: "High-performance sportswear and footwear.",
  },
  {
    id: 2,
    name: "Adidas",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png",
    productCount: 195,
    description: "Trendy and functional sports and casual fashion.",
  },
  {
    id: 3,
    name: "Puma",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo.png",
    productCount: 140,
    description: "Sporty apparel, shoes, and accessories.",
  },
  {
    id: 5,
    name: "H&M",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png",
    productCount: 150,
    description: "Affordable fashion for everyone.",
  },
  {
    id: 6,
    name: "Levi's",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Levis-Logo.png",
    productCount: 100,
    description: "Classic denim and casualwear.",
  },
  {
    id: 7,
    name: "Gucci",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Gucci-Logo.png",
    productCount: 80,
    description: "Luxury fashion and leather goods.",
  },
  {
    id: 8,
    name: "Louis Vuitton",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Louis-Vuitton-Logo.png",
    productCount: 90,
    description: "Luxury bags, shoes, and accessories.",
  },
  {
    id: 10,
    name: "Versace",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Versace-Logo.png",
    productCount: 70,
    description: "Bold Italian luxury fashion.",
  },
];

const products = [
  {
    name: "Stylish Blue Denim Jeans for Men",
    category: "Men's Fashion",
    image:
      "https://th.bing.com/th/id/OIP.zKSVo1U88z6h-uEMZ0A1wAHaJP?pid=ImgDet&w=178&h=221&c=7&dpr=1.3",
    brand: "Levi's",
    price: 999,
    link: "https://www.example.com/product1",
  },
  {
    name: "Stylish Blue Denim Jeans for Men",
    category: "Men's Fashion",
    image:
      "https://th.bing.com/th/id/OIP.zKSVo1U88z6h-uEMZ0A1wAHaJP?pid=ImgDet&w=178&h=221&c=7&dpr=1.3",
    brand: "Levi's",
    price: 999,
    link: "https://www.example.com/product1",
  },
  {
    name: "Stylish Blue Denim Jeans for Men",
    category: "Men's Fashion",
    image:
      "https://th.bing.com/th/id/OIP.zKSVo1U88z6h-uEMZ0A1wAHaJP?pid=ImgDet&w=178&h=221&c=7&dpr=1.3",
    brand: "Levi's",
    price: 999,
    link: "https://www.example.com/product1",
  },
  {
    name: "Stylish Blue Denim Jeans for Men",
    category: "Men's Fashion",
    image:
      "https://th.bing.com/th/id/OIP.zKSVo1U88z6h-uEMZ0A1wAHaJP?pid=ImgDet&w=178&h=221&c=7&dpr=1.3",
    brand: "Levi's",
    price: 999,
    link: "https://www.example.com/product1",
  },
  {
    name: "Stylish Blue Denim Jeans for Men",
    category: "Men's Fashion",
    image:
      "https://th.bing.com/th/id/OIP.zKSVo1U88z6h-uEMZ0A1wAHaJP?pid=ImgDet&w=178&h=221&c=7&dpr=1.3",
    brand: "Levi's",
    price: 999,
    link: "https://www.example.com/product1",
  },
  {
    name: "Stylish Blue Denim Jeans for Men",
    category: "Men's Fashion",
    image:
      "https://th.bing.com/th/id/OIP.zKSVo1U88z6h-uEMZ0A1wAHaJP?pid=ImgDet&w=178&h=221&c=7&dpr=1.3",
    brand: "Levi's",
    price: 999,
    link: "https://www.example.com/product1",
  },
  {
    name: "Stylish Blue Denim Jeans for Men",
    category: "Men's Fashion",
    image:
      "https://th.bing.com/th/id/OIP.zKSVo1U88z6h-uEMZ0A1wAHaJP?pid=ImgDet&w=178&h=221&c=7&dpr=1.3",
    brand: "Levi's",
    price: 999,
    link: "https://www.example.com/product1",
  },
];

const shopByCategories = [
  {
    id: 1,
    name: "Men T-Shirts",
    image:
      "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Winterflip/Unrec/ClothingSBC/6._SY530_QL85_FMpng_.png",
  },
  {
    id: 2,
    name: "Women Kurtas",
    image:
      "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Winterflip/Unrec/ClothingSBC/3._SY530_QL85_FMpng_.png",
  },
  {
    id: 3,
    name: "Men Jeans",
    image:
      "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/SSflip/Unrec/ClothingSBC/20._SY530_QL85_FMpng_.png",
  },
  {
    id: 4,
    name: "Women Sarees",
    image:
      "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Winterflip/Unrec/ClothingSBC/1._CB543856130_.png",
  },
  {
    id: 5,
    name: "Kids Dresses",
    image: "https://m.media-amazon.com/images/I/61etvyyVU2L._AC._SR360,460.jpg",
  },
  {
    id: 6,
    name: "Men Shirts",
    image:
      "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/SSflip/Unrec/ClothingSBC/19._CB548566394_.png",
  },
  {
    id: 7,
    name: "Tops & T-shirts",
    image:
      "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Winterflip/Unrec/ClothingSBC/4._CB543856130_.png",
  },
  {
    id: 8,
    name: "Kids Ethnic Wear",
    image: "https://m.media-amazon.com/images/I/71yHuZzNH3L._AC._SR360,460.jpg",
  },
  {
    id: 9,
    name: "Women Heels",
    image:
      "https://m.media-amazon.com/images/I/51ogd81On1L._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 10,
    name: "Men Watches",
    image:
      "https://m.media-amazon.com/images/I/81Q7WuKlezL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 11,
    name: "Women Handbags",
    image: "https://m.media-amazon.com/images/I/41Okp-NjjDL._AC._SR360,460.jpg",
  },
  {
    id: 12,
    name: "Men Jackets",
    image:
      "https://m.media-amazon.com/images/I/712UDW7pnEL._AC_UL480_QL65_.jpg",
  },
  {
    id: 13,
    name: "Kids T-Shirts",
    image: "https://m.media-amazon.com/images/I/41rc4SzjBqL._AC._SR180,230.jpg",
  },
  {
    id: 14,
    name: "Men Shoes",
    image: "https://m.media-amazon.com/images/I/31oAL8SjASL._AC._SR180,230.jpg",
  },
  {
    id: 15,
    name: "Women Jeans",
    image: "https://m.media-amazon.com/images/I/41fvsUY3alL._AC._SR360,460.jpg",
  },
  {
    id: 16,
    name: "Kids Shoes",
    image:
      "https://m.media-amazon.com/images/I/81XS5AnsviL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 17,
    name: "Women Jewellery",
    image:
      "https://m.media-amazon.com/images/I/51iS0lEEJqL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 18,
    name: "Men Sunglasses",
    image:
      "https://m.media-amazon.com/images/I/419UE6j-mBL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 19,
    name: "Kids Pants",
    image: "https://m.media-amazon.com/images/I/31yVfSTKrjL._SR480,440_.jpg",
  },
  {
    id: 20,
    name: "Women Flats",
    image: "https://m.media-amazon.com/images/I/61QyM-Gsx7L._AC._SR360,460.jpg",
  },
];

const footerData = [
  {
    title: "Shop Categories",
    links: [
      { name: "Men’s Clothing", url: "#" },
      { name: "Women’s Clothing", url: "#" },
      { name: "Accessories", url: "#" },
      { name: "Footwear", url: "#" },
      { name: "New Arrivals", url: "#" },
      { name: "Best Sellers", url: "#" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { name: "FAQ", url: "#" },
      { name: "Shipping & Returns", url: "#" },
      { name: "Order Tracking", url: "#" },
      { name: "Contact Support", url: "#" },
      { name: "Size Guide", url: "#" },
    ],
  },
  {
    title: "Information",
    links: [
      { name: "About Us", url: "#" },
      { name: "Careers", url: "#" },
      { name: "Blog", url: "#" },
      { name: "Affiliate Program", url: "#" },
      { name: "Gift Cards", url: "#" },
    ],
  },
  {
    title: "Policies",
    links: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms & Conditions", url: "#" },
      { name: "Refund Policy", url: "#" },
      { name: "Cookie Policy", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { name: "Instagram", url: "#" },
      { name: "Facebook", url: "#" },
      { name: "Twitter", url: "#" },
    ],
  },
];
export { brands, products, shopByCategories, footerData, category };
