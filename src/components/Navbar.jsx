        import React, { useState } from "react";
        import { Link, NavLink } from "react-router-dom";
        import { assets } from "../assets/assets";

        const Navbar = () => {
        const [visible, setVisible] = useState(false);

        return (
            <div className="flex items-center justify-between py-5 px-8 bg-white">
            {/* Logo */}
           <Link to='/'> <img src={assets.logo} alt="Logo" className="w-36" /></Link>

            {/* Main Menu */}
            <ul className="hidden sm:flex gap-8 text-gray-700 text-sm font-medium">
                <NavLink to="/" className="hover:underline" key="home">
                HOME
                </NavLink>
                <NavLink to="/collection" className="hover:underline" key="collection">
                COLLECTION
                </NavLink>
                <NavLink to="/about" className="hover:underline" key="about">
                ABOUT
                </NavLink>
                <NavLink to="/contact" className="hover:underline" key="contact">
                CONTACT
                </NavLink>
            </ul>

            {/* Right Side Menu */}
            <div className="flex items-center gap-6">
                {/* Search Icon */}
                <img
                src={assets.search_icon}
                className="w-5 cursor-pointer"
                alt="Search"
                />

                {/* Profile Dropdown */}
                <div className="group relative">
                <img
                    src={assets.profile_icon}
                    className="w-5 cursor-pointer"
                    alt="Profile"
                />
                <div className="group-hover:block hidden absolute bg-white drop-shadow-md right-0 pt-4">
                    <p className="cursor-pointer hover:text-black">My Profile</p>
                    <p className="cursor-pointer hover:text-black">Order</p>
                    <p className="cursor-pointer hover:text-black">Login</p>
                </div>
                </div>

                {/* Cart Icon */}
                <Link to="/cart" className="relative">
                <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
                <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                    10
                </p>
                </Link>

                {/* Hamburger Menu Icon for small screens */}
                <img
                onClick={() => setVisible(true)}
                src={assets.menu_icon}
                className="w-5 cursor-pointer sm:hidden"
                alt="Menu"
                />
            </div>

            {/* Sidebar Menu for Small Screens */}
            <div
                className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 z-50 ${
                visible ? "w-full" : "w-0"
                }`}
            >
                <div className="flex justify-between p-4">
                {/* Close Sidebar Icon */}
                <img
                    onClick={() => setVisible(false)}
                    src={assets.close_icon}
                    className="w-5 cursor-pointer"
                    alt="Close"
                />
                </div>

                {/* Sidebar Menu Links */}
                <nav className="flex flex-col text-gray-700 text-lg">
                <NavLink
                    className="py-2 pl-6 border-b"
                    to="/"
                    onClick={() => setVisible(false)}
                >
                    HOME
                </NavLink>
                <NavLink
                    className="py-2 pl-6 border-b"
                    to="/collection"
                    onClick={() => setVisible(false)}
                >
                    COLLECTION
                </NavLink>
                <NavLink
                    className="py-2 pl-6 border-b"
                    to="/about"
                    onClick={() => setVisible(false)}
                >
                    ABOUT
                </NavLink>
                <NavLink
                    className="py-2 pl-6 border-b"
                    to="/contact"
                    onClick={() => setVisible(false)}
                >
                    CONTACT
                </NavLink>
                </nav>
            </div>
            </div>
        );
        };

        export default Navbar;
