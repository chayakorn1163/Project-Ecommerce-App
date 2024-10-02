        import React, { useContext, useEffect, useState } from "react";
        import { ShopContext } from "../context/ShopContext";
        import Title from "./Title";
        import ProductItem from "./ProductItem";

        const LatestCollection = () => {
        const { products } = useContext(ShopContext);
        const [latestProducts, setLatestProducts] = useState([]);

        // Effect to set the latest products when the component mounts

        useEffect(() => {
            setLatestProducts(products.slice(0, 10)); // Get the first 10 products
        }, []);

        return (
            <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={"สินค้าล่าสุด"} text2={"สินค้าคอลเลกชัน"} />

                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600"></p>
                <p>Lorem import is simply</p>
            </div>

            {/* Rendering Products */}
            <div className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">
                {latestProducts.map((item, index) => (
                <ProductItem
                    key={index}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                />
                ))}
            </div>
            </div>
        );
        };

        export default LatestCollection;
