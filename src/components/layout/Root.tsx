import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    // THIS THIS THE MAIN LAYOUT
    <div className="font-poppins">
      {/* NAVBAR */}
      <Navbar />
      {/* ROUTER PAGE OUTLET */}
      <Outlet />
      {/* FOOTER */}
      <Footer />
    </div>
  );
};
export default Root;
