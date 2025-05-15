import { footerData } from "../../constants";

const Footer = () => {
  return (
    <footer className="bg-[#23243C] text-[#F5EEEA] py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {footerData.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.url} className="hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="max-w-2xl mx-auto mt-10 text-center border-t border-gray-700 pt-6">
        <p className="mb-4">
          Subscribe to get special offers, free giveaways, and
          once-in-a-lifetime deals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg text-[#F5EEEA] w-full sm:w-auto"
          />
          <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200">
            Subscribe
          </button>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="max-w-2xl mx-auto mt-8 text-center">
        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">
            Instagram
          </a>
          <a href="#" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-400">
            Twitter
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-8">
        &copy; 2025 Globex. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
