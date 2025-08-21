// app/product/[id]/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";  
import { motion } from "framer-motion";

export default function ProductPage( ) {
      const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data[0]);
        console.log("data: ",data);
        
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (!product) return <div className="p-10 text-center">Loading...</div>;

  return ( 

    <>
      <section
        data-image-width={1980}
        data-image-height={1214}
        style={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1200px",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap", // important for wrapping
          }}
        >

<motion.div
  initial={{ x: 100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  viewport={{ once: true, amount: 0.4 }}
  style={{
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
  className="content-image"
>
  <img
    src={product.img[1]}
    alt="Company"
    style={{
      width: "100%",
      aspectRatio: "1 / 1", // force square
      objectFit: "contain",  // show the whole image without cropping 
    }}
  />
</motion.div>



          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}

            className="content-text"
          >
            <h5 className="myGray mytitle2" style={{ marginBottom: "20px" }}>
              {product.title}
            </h5>
            <p className="myGray mb-5 aboutt"  dangerouslySetInnerHTML={{ __html: product.description }} /> 
            
<div style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>
  <a
    href="https://wa.me/+96171188020"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      className="buttondr"
      style={{
        backgroundColor: "#c12288",
        color: "#fff",
      }}
    >
      Contact Us Now!
    </button>
  </a>
</div>

          </motion.div>



        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .content-text, .content-image {
            width: 100% !important;
            padding-right: 0 !important;
          }
          .content-text {
            order: 2; /* text goes under image */
            margin-top: 20px;
          }
          .content-image {
            order: 1; /* image stays first */
          }
        }
      `}</style>
    </>













  );
}
