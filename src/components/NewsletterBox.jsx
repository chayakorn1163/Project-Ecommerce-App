    import React from "react";

    const NewsletterBox = () => {
    const onSubmitHandler = (Event) => {
        Event.preventDefault();
        alert("Form submitted!");
    };

    return (
        <div className="text-center mx-auto max-w-xl">
        {" "}
        {/* Set a max width */}
        <p className="text-2xl font-medium text-gray-800">
            สมัครรับข้อมูลตอนนี้ & รับส่วนลด 20%
        </p>
        <p className="text-gray-400 mt-2">
            ข้อความนี้เป็นข้อมูลเกี่ยวกับการสมัครเพื่อให้ทราบถึงบริการของเรา
        </p>
        <form className="w-full flex items-center gap-3 my-6 border pl-3">
            <input
            className="flex-1 outline-none"
            type="email"
            placeholder="กรุณากรอกอีเมลของคุณ"
            required
            />
            <button type="submit" className="bg-black text-white text-xs px-4 py-2">
            สมัครสมาชิก
            </button>{" "}
            {/* Adjust padding */}
        </form>
        </div>
    );
    };

    export default NewsletterBox;
