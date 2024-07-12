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
import { useAppSelector } from "@/redux/hooks";
import { selectInCart } from "@/redux/features/cart/cartSlice";
import { Button } from "../ui/button";

const Navbar = () => {
  const inCart = useAppSelector(selectInCart);

  // NAVLINKS FOR PC AND LAPTOP
  const navLinks = (
    <div className="space-x-10">
      <NavLink
        className={({ isActive }) =>
          `hover:text-baseColor duration-300 text-xl ${
            isActive && "text-baseColor"
          }`
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:text-baseColor duration-300 text-xl ${
            isActive && "text-baseColor"
          }`
        }
        to={"/products"}
      >
        All Products
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:text-baseColor duration-300 text-xl ${
            isActive && "text-baseColor"
          }`
        }
        to={"/manage-products"}
      >
        Manage Products
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:text-baseColor duration-300 text-xl ${
            isActive && "text-baseColor"
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
      {/* MOBILE AND TABLE NAVBAR */}
      <Sheet>
        <SheetTrigger className="flex items-center gap-5 lg:hidden text-3xl">
          <FaBars />
          <h1>Active <span className="text-lime-400">Gear</span></h1>
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
                    `text-xl ${isActive && "text-baseColor"}`
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="list-none text-white py-3 border-b">
                <NavLink
                  className={({ isActive }) =>
                    `text-xl ${isActive && "text-baseColor"}`
                  }
                  to={"/products"}
                >
                  All Products
                </NavLink>
              </li>
              <li className="list-none text-white py-3 border-b">
                <NavLink
                  className={({ isActive }) =>
                    `text-xl ${isActive && "text-baseColor"}`
                  }
                  to={"/manage-products"}
                >
                  Manage Products
                </NavLink>
              </li>
              <li className="list-none text-white py-3 border-b">
                <NavLink
                  className={({ isActive }) =>
                    `text-xl ${isActive && "text-baseColor"}`
                  }
                  to={"/about"}
                >
                  About Us
                </NavLink>
              </li>
              <li className="list-none text-white py-3 border-b">
                <NavLink
                  className={({ isActive }) =>
                    `text-xl ${isActive && "text-baseColor"}`
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

      {/* PC AND LAPTOP NAVBAR */}
      <div className="max-w-screen-2xl mx-auto hidden lg:flex items-center justify-between">
        <div className="flex justify-start">
          {/* LOGO */}
          <NavLink className={"text-xl"} to={"/"}>
            <img
              src="https://i.ibb.co/QmkBvmg/Brimston-1.png"
              className="w-24"
            />
          </NavLink>
        </div>
        <div className="flex justify-center">{navLinks}</div>
        <div className="flex justify-end">
          {/* CART NAVLINK */}
          <NavLink className={"text-xl flex relative"} to={"/cart"}>
            <Button className="bg-baseColor hover:bg-lime-600 text-black">
              <FaCartShopping className="text-3xl" />
              <span className="text-sm absolute top-[6px] right-5 text-white">
                {inCart}
              </span>
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
