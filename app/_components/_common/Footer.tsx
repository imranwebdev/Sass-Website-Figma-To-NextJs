import { FaArrowRight } from "react-icons/fa6";
import { footerNavLinks } from "@/app/_data/data";
import Logo from "../_ui/logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 lg:px-20 px-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
        <Logo/>
          <p className="mt-4 mb-6">Get started now, try our product</p>
          <div className="flex items-center relative">
            <input
              type="email"
              placeholder="Enter your email here"
              className="bg-gray-800 text-white rounded-full px-4 py-2 outline-none "
            />
            <button className="bg-orange-500 hover:bg-orange-600 rounded-full p-1 absolute right-10 md:right-3  bg-orange ">
              <FaArrowRight size={22} className="text-white" />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-lg mb-4">Support</h3>
          <ul>
            {footerNavLinks.support.map((link) => (
              <li key={link.name} className="mb-2">
                <a href={link.href} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-lg mb-4">Help and Solution</h3>
          <ul>
            {footerNavLinks.helpAndSolution.map((link) => (
              <li key={link.name} className="mb-2">
                <a href={link.href} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-lg mb-4">Product</h3>
          <ul>
            {footerNavLinks.product.map((link) => (
              <li key={link.name} className="mb-2">
                <a href={link.href} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-4">
        <p className="mb-4 lg:mb-0">
          © 2022 Biccas Inc. Copyright and rights reserved
        </p>
        <div className="flex space-x-4">
          {footerNavLinks.bottomLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:underline">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
