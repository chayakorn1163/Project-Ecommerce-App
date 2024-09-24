// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

// ฟังก์ชันหลักของคอมโพเนนท์ Collection
const Collection = () => {
  const { products } = useContext(ShopContext); // ใช้ useContext เพื่อดึงข้อมูลสินค้า (products) จาก ShopContext
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, SetCategory] = useState([]);
  const [Subcategory, SetSubcategory] = useState([]);

  // ฟังก์ชัน togglecatgory ใช้สำหรับเพิ่มหรือลบประเภทย่อยจาก state
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      SetCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      SetCategory((prev) => [...prev, e.target.value]);
    }
  };

  // ฟังก์ชัน toggleSubcategory ใช้สำหรับเพิ่มหรือลบประเภทย่อยจาก state
  const toggleSubcategory = (e) => {
    if (Subcategory.includes(e.target.value)) {
      SetSubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      SetSubcategory((prev) => [...prev, e.target.value]);
    }
  };

  // useEffect สำหรับตั้งค่า filterProducts เป็นสินค้าทั้งหมด เมื่อโหลดครั้งแรก
  useEffect(() => {
    setFilterProducts(products); // Initial filter is all products
  }, [products]);

  // useEffect สำหรับดูค่า Subcategory ที่เปลี่ยนแปลงทุกครั้ง {สำหรับทดสอบ}
  useEffect(() => {
    console.log(Subcategory);
  }, [Subcategory]);

  return (
    <div className="flex flex-col sm:flex-row gap-5 pt-10 border-t">
      {/* Filter Section */}
      <div className="sm:w-1/4 w-full">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="Toggle filters"
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 px-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Man", "Woman", "Kids"].map((category) => (
              <label key={category} className="flex items-center gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={category}
                  onChange={toggleCategory}
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 px-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={type}
                  onChange={toggleSubcategory}
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-10">
          <Title text1={"All"} text2={"COLLECTIONS"} />
          {/* Products Sort */}
          <select className="border-2 border-gray-400 text-sm px-2">
            <option value="relavent">Sort by: Relevant</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item.id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
