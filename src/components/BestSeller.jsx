import React, { useEffect, useState } from "react";
import { products } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"สินค้าขายดี"} text2={""} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700">
          เลือกสินค้าที่คุณชื่นชอบจากสินค้าขายดีของเรา
          รายการเหล่านี้ถูกขายไปแล้วมากกว่า 100 ครั้งในเดือนที่ผ่านมา
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
