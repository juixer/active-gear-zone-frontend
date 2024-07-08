import { FaBars, FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const navLinks = (
    <div className="space-x-10">
      <NavLink
        className={({ isActive }) =>
          `hover:text-lime-400 duration-300 text-xl ${
            isActive && "text-lime-400"
          }`
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:text-lime-400 duration-300 text-xl ${
            isActive && "text-lime-400"
          }`
        }
        to={"/products"}
      >
        All Products
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:text-lime-400 duration-300 text-xl ${
            isActive && "text-lime-400"
          }`
        }
        to={"/manage-products"}
      >
        Manage Products
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:text-lime-400 duration-300 text-xl ${
            isActive && "text-lime-400"
          }`
        }
        to={"/about"}
      >
        About Us
      </NavLink>
    </div>
  );

  return (
    <div className="bg-zinc-900 text-white sticky top-0 z-50 py-2 px-3">
      <Sheet>
        <SheetTrigger className="flex lg:hidden text-3xl">
          <FaBars />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="bg-black bg-opacity-50 text-white"
        >
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <li className="list-none text-white py-3 border-b">
                <NavLink
                  className={({ isActive }) =>
                    `text-xl ${isActive && "text-lime-400"}`
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="list-none text-white py-3 border-b">
                <NavLink
                  className={({ isActive }) =>
                    `text-xl ${isActive && "text-lime-400"}`
                  }
                  to={"/products"}
                >
                  All Products
                </NavLink>
              </li>
              <li className="list-none text-white py-3 border-b">
                <NavLink
                  className={({ isActive }) =>
                    `text-xl ${isActive && "text-lime-400"}`
                  }
                  to={"/manage-products"}
                >
                  Manage Products
                </NavLink>
              </li>
              <li className="list-none text-white py-3 border-b">
                <NavLink
                  className={({ isActive }) =>
                    `text-xl ${isActive && "text-lime-400"}`
                  }
                  to={"/about"}
                >
                  About Us
                </NavLink>
              </li>
              <li className="list-none text-white py-3 border-b">
                <NavLink
                  className={({ isActive }) =>
                    `text-xl ${isActive && "text-lime-400"}`
                  }
                  to={"/cart"}
                >
                  Cart
                </NavLink>
              </li>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {/* pc/laptop */}
      <div className="max-w-screen-2xl mx-auto hidden lg:flex items-center justify-between">
        <div className="flex justify-start">
          <NavLink
            className={"text-xl"}
            to={"/"}
          >
            <h1>Active Gear Zone</h1>
          </NavLink>
        </div>
        <div className="flex justify-center">{navLinks}</div>
        <div className="flex justify-end">
          <NavLink
            className={"hover:text-lime-400 duration-300 text-xl"}
            to={"/cart"}
          >
            <FaCartShopping className="text-xl" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
