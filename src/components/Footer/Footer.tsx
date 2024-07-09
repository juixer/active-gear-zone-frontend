import {
  FaFacebook,
  FaInstagram,
  FaRightLong,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const date = new Date();

  const getYear = date.getFullYear();

  return (
    <div className="bg-zinc-900 text-white py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 max-w-screen-xl mx-auto px-3 py-5">
        <div className="space-y-3">
          <h2 className="text-xl font-medium uppercase">About Us</h2>
          <p className="text-zinc-500 ">
            Welcome to Active Gear. We are dedicated to supporting athletes of
            all levels with the best products and outstanding customer service.
            Let's gear up and achieve greatness together!
          </p>
          <div className="flex gap-2 text-2xl">
            <FaFacebook className="cursor-pointer hover:bg-baseColor hover:text-black hover:border-none duration-300 border rounded-full p-2 text-4xl " />
            <FaInstagram className="cursor-pointer hover:bg-baseColor hover:text-black hover:border-none duration-300 border rounded-full p-2 text-4xl " />
            <FaXTwitter className="cursor-pointer hover:bg-baseColor hover:text-black hover:border-none duration-300 border rounded-full p-2 text-4xl " />
            <FaYoutube className="cursor-pointer hover:bg-baseColor hover:text-black hover:border-none duration-300 border rounded-full p-2 text-4xl " />
            <FaTiktok className="cursor-pointer hover:bg-baseColor hover:text-black hover:border-none duration-300 border rounded-full p-2 text-4xl " />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium uppercase">Customer Service</h2>
          <ul>
            <li className=" mt-2 hover:text-white text-zinc-500 duration-300 cursor-pointer">
              FAQ
            </li>

            <li className=" mt-2 hover:text-white text-zinc-500 duration-300 cursor-pointer">
              Order Status
            </li>
            <li className=" mt-2 hover:text-white text-zinc-500 duration-300 cursor-pointer">
              Returns
            </li>
            <li className=" mt-2 hover:text-white text-zinc-500 duration-300 cursor-pointer">
              Shipping
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-medium uppercase">Quick links</h2>
          <ul>
            <li className=" mt-2 hover:text-white text-zinc-500 duration-300 cursor-pointer">
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li className=" mt-2 hover:text-white text-zinc-500 duration-300 cursor-pointer">
              <NavLink to={"/products"}>All Products</NavLink>
            </li>
            <li className=" mt-2 hover:text-white text-zinc-500 duration-300 cursor-pointer">
              <NavLink to={"/manage-products"}>Manage Products</NavLink>
            </li>
            <li className=" mt-2 hover:text-white text-zinc-500 duration-300 cursor-pointer">
              <NavLink to={"/about"}>About Us</NavLink>
            </li>
            <li className=" mt-2 hover:text-white text-zinc-500 duration-300 cursor-pointer">
              <NavLink to={"/cart"}>Cart</NavLink>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-medium uppercase">let's get in touch</h2>
          <p className="text-zinc-500 text-justify max-w-64">
            Sign up for get updates and new hot deals
          </p>
          <div className="flex w-full max-w-sm items-center relative">
            <Input
              className="text-black rounded-full "
              type="email"
              placeholder="Email"
            />
            <Button
              className="bg-baseColor rounded-r-full absolute right-0 text-black hover:bg-lime-600 duration-300 "
              type="submit"
            >
              <FaRightLong />
            </Button>
          </div>
        </div>
      </div>
      <hr className="border-zinc-800 mb-1" />
      <div className="flex justify-center items-center">
        <p className="text-sm text-zinc-500">
          Copyright © {getYear} Active Gear. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
