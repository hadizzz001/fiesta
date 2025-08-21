"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const TwoByTwoGrid = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  const handleClick = (id) => {
    router.push(`/product?id=${id}`);
  };

  return (
    <div className="grid-container mt-10" id="services1133">
      {products.map((item) => (
        <div
          key={item._id}
          className="grid-item cursor-pointer"
          onClick={() => handleClick(item._id)}
        >
          <img
            src={item.img?.[0] || "/placeholder.png"}
            alt={item.title}
            className="grid-image"
          />
          <div
            className="grid-box"
            style={{ backgroundColor: item.colorback, color: item.colorback2 }}
          >
            <h2 className="grid-title">{item.title}</h2>
            <p className="grid-text">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TwoByTwoGrid;
