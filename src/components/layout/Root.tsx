import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
    return(
        <div>
             <div className="max-w-screen-2xl min-h-screen mx-auto py-5 px-3">
                <Outlet/>
             </div>
             <Footer/>
        </div>
    )}
export default Root;