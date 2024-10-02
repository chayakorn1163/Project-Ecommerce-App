    import React from "react";
    import { assets } from "../assets/assets";

    const Hero = () => {
    return (
        <div className="flex flex-col sm:flex-row border border-gray-300">
        {/* right Hero */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-10">
            <div className="text-[#414141]">
            <div className="flex items-center gap-2">
                <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                <p className="font-medium text-sm md:text-base lg:text-[56px]">
                สินค้าขายดีของเรา
                </p>
            </div>
            <h1 className="text-3xl sm:py-3 lg:text-sxl leading-relaxed lg:text-[56px]">
                สินค้ามาใหม่ล่าสุด
            </h1>
            <div className="flex items-center gap-2">
                <p className="font-semibold text-sm md:text-base lg:text-[45px]">ช้อปเลย</p>
                <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            </div>
            </div>
        </div>
        {/* lift Hero */}
        <img className="w-full sm:w-1/2" src={assets.hero_img} alt="Hero" />
        </div>
    );
    };

    export default Hero;
