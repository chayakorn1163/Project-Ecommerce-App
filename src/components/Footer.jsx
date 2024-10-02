    import React from "react";
    import { assets } from "../assets/assets";

    const Footer = () => {
    return (
        <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
            <div>
            <img src={assets.logo} className="mb-5 w-32" alt="" />
            <p className="w-full md:w-2/3 text-gray-600 lg:text-[18px]">
                การทำงานหนักของเราจะช่วยให้คุณประสบความสำเร็จในสิ่งที่ต้องการ
                การทำงานหนักของเราจะช่วยให้คุณประสบความสำเร็จในสิ่งที่ต้องการ
            </p>
            </div>
        </div>

        <div>
            <p className="text-xl font-medium mb-5 lg:text-[35px]">บริษัท</p>
            <ul className="flex flex-col gap-1 text-gray-600 mb-10 lg:text-[22px]">
            <li>หน้าหลัก</li>
            <li>เกี่ยวกับเรา</li>
            <li>การจัดส่ง</li>
            <li>นโยบายความเป็นส่วนตัว</li>
            </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5 lg:text-[35px]">ติดต่อเรา</p>
            <ul className="flex flex-col gap-1 text-gray-600 mb-5 lg:text-[20px] ">
            <li>+66 095-331-6394</li>
            <li>chayakon@gmail.com</li>
            </ul>
        </div>

        <div>
            <hr />
            <p className="py-5 text-sm text-center">
            การทำงานหนักคือหัวใจของความสำเร็จ และเราอยู่ที่นี่เพื่อสนับสนุนคุณ
            </p>
        </div>
        </div>
    );
    };

    export default Footer;
