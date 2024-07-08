import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return(
        <div className="font-poppins">
            <Navbar/>
             <div className="max-w-screen-2xl min-h-screen mx-auto py-5 px-3">
                <Outlet/>
             </div>
             <Footer/>
        </div>
    )}
export default Root;