    import React, { useContext, useState } from "react";
    import { Link, NavLink } from "react-router-dom";
    import { assets } from "../assets/assets";
    import { ShopContext } from "../context/ShopContext";

    const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const { setShowSearch } = useContext(ShopContext);

    return (
        <div className="flex items-center justify-between py-5 px-8 bg-white">
        {/* logo */}
        <Link to="/">
            {" "}
            <img src={assets.logo} alt="โลโก้" className="w-36" />
        </Link>

        {/* Main Menu */}
        <ul className="hidden sm:flex gap-8 text-gray-700 text-sm font-medium lg:text-[25px]">
            <NavLink to="/" className="hover:underline" key="home">
            หน้าแรก
            </NavLink>
            <NavLink to="/collection" className="hover:underline" key="collection">
            สินค้าทั้งหมด
            </NavLink>
            <NavLink to="/about" className="hover:underline" key="about">
            เกี่ยวกับเรา
            </NavLink>
            <NavLink to="/contact" className="hover:underline" key="contact">
            ติดต่อเรา
            </NavLink>
        </ul>

        <div className="flex items-center gap-6">
            {/* Search Icon */}
            <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt="ค้นหา"
            />

            {/* Profile Dropdown */}
            <div className="group relative">
            <img
                src={assets.profile_icon}
                className="w-5 cursor-pointer"
                alt="โปรไฟล์"
            />
            <div className="group-hover:block hidden absolute bg-white drop-shadow-md right-0 pt-4 ">
                <p className="cursor-pointer hover:text-black">โปรไฟล์ของฉัน</p>
                <p className="cursor-pointer hover:text-black">คำสั่งซื้อ</p>
                <p className="cursor-pointer hover:text-black">เข้าสู่ระบบ</p>
            </div>
            </div>

            {/*  Cart Icon */}
            <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="รถเข็น" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                10
            </p>
            </Link>

            {/* Hamburger Menu Icon for small screens */}
            <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt="เมนู"
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
                alt="ปิด"
            />
            </div>

            {/* Sidebar Menu Links */}
            <nav className="flex flex-col text-gray-700 text-lg">
            <NavLink
                className="py-2 pl-6 border-b"
                to="/"
                onClick={() => setVisible(false)}
            >
                หน้าแรก
            </NavLink>
            <NavLink
                className="py-2 pl-6 border-b"
                to="/collection"
                onClick={() => setVisible(false)}
            >
                สินค้าทั้งหมด
            </NavLink>
            <NavLink
                className="py-2 pl-6 border-b"
                to="/about"
                onClick={() => setVisible(false)}
            >
                เกี่ยวกับเรา
            </NavLink>
            <NavLink
                className="py-2 pl-6 border-b"
                to="/contact"
                onClick={() => setVisible(false)}
            >
                ติดต่อเรา
            </NavLink>
            </nav>
        </div>
        </div>
    );
    };

    export default Navbar;
