import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams(); // ดึง productId จาก URL
  const { products, currency } = useContext(ShopContext); // ดึงข้อมูล products จาก context
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  // ฟังก์ชันสำหรับดึงข้อมูลสินค้าที่ตรงกับ productId
  const fetchProductData = () => {
    // ใช้ find เพื่อหาสินค้าที่ตรงกับ productId
    const foundProduct = products.find((item) => item._id === productId);

    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]); // ตั้งค่าภาพแรกเป็นภาพเริ่มต้น
      setLoading(false);
    } else {
      console.log("Product not found");
      setLoading(false);
    }
  };

  // ตรวจสอบการเปลี่ยนแปลงของ productId และ products
  useEffect(() => {
    if (productId && products.length > 0) {
      fetchProductData(); // เรียกฟังก์ชันดึงข้อมูลสินค้า
    }
  }, [productId, products]);

  // แสดง loading ระหว่างดึงข้อมูลสินค้า
  if (loading) {
    return <div>Loading...</div>;
  }

  // ถ้าไม่มีข้อมูลสินค้า
  if (!productData) {
    return <div>Product not found</div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-4 sm:gap-12 flex-col sm:flex-row items-start">
        
        <div className="flex sm:flex-col gap-4 overflow-x-auto sm:overflow-y-auto w-full sm:w-[15%]">
          {productData.image.map((item, index) => (
            <img
              onClick={() => setImage(item)}
              src={item}
              key={index}
              className="w-[100px] h-auto sm:w-[150px] cursor-pointer flex-shrink-0"
              alt=""
            />
          ))}
        </div>

        
        <div className="w-full sm:w-[40%]">
          <img
            className="w-full h-auto max-h-[600px] object-contain"
            src={image}
            alt=""
          />
        </div>

        
        <div className="flex-1 sm:pl-8">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex item-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
              ADD TO CART
            </button>
            <hr className="mt-8 sm:w-4/5" />
            <div className=" text-sm text-gray-500 mt-5 flex flex-col gap-4">
              <p>100% Original products.</p>
              <p>Cash on delivery is available on this product</p>
              <p>Easy return and exchange policy within 7 days</p>
            </div>
          </div>
        </div>
      </div>
      {/*-------Description &  Review Sections */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Review (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 text-sm text-gray-500">
          <p>
            Fugiat eiusmod veniam eu consectetur anim. Esse excepteur nisi ad et
            tempor ipsum duis eiusmod reprehenderit veniam sint.
          </p>
        </div>
      </div>
      {/* Display related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
