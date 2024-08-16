import {  Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            {/* className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center" */}
            <div className="navbar text-white border-b-2 bg-[#FC2E01] rounded-full container lg:px-24 px-2 pl-0 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><NavLink style={({isActive})=> isActive? {color: " #8B4513",background:"none"}:{}} to="/">Home </NavLink></li>
                    <li><NavLink style={({isActive})=> isActive? {color: " #8B4513",background:"none"}:{}} to="/about">About </NavLink></li>
                    <li><NavLink style={({isActive})=> isActive? {color: " #8B4513",background:"none"}:{}} to="/contact">Contact </NavLink></li>
                </ul>
                </div>
                <Link to="/" className="text-3xl font-bold text-white">EchoMart</Link>
            </div>
            
            <div className="navbar-end">
              <div className="hidden lg:flex">
              <ul className="menu menu-horizontal mr-5 px-1">
                <li><NavLink style={({isActive})=> isActive? {color: "black",background:"none"}:{}} to="/">Home </NavLink></li>
                    <li><NavLink style={({isActive})=> isActive? {color: " #8B4513",background:"none"}:{}} to="/about">About </NavLink></li>
                    <li><NavLink style={({isActive})=> isActive? {color: " #8B4513",background:"none"}:{}} to="/contact">Contact </NavLink></li>
                </ul>
              </div>
                <button className="btn ">LogOut</button>
            </div>
            </div>
        </div>
    );
};

export default Navbar;