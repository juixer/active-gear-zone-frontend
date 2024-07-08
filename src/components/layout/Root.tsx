import { Outlet } from "react-router-dom";

const Root = () => {
    return(
        <div>
             <div className="max-w-screen-2xl mx-auto py-5">
                <Outlet/>
             </div>
        </div>
    )}
export default Root;