import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer/Footer";
import Navbar from "./shared/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar/>
             <div className="container lg:min-h-screen px-6 lg:px-24 py-12 mx-auto">
                <Outlet/>
             </div>
            <Footer/>
        </div>
    );
};

export default Root;