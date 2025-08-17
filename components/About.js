"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section
        data-image-width={1980}
        data-image-height={1214}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          padding: "40px 20px",
          backgroundColor: "#ffcceb",
        }}
      >
<div
  className="content-wrapper"
  style={{
    display: "flex",
    width: "100%",
    maxWidth: "1200px",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  }}
>
  {/* Left Side - Title */}
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.4 }}
    style={{
      width: "50%",
      paddingRight: "20px",
    }}
    className="content-text"
  >
    <h5 className="myGray mytitle2" style={{ marginBottom: "20px" }}>
      Welcome To Fiesta Beverages!
    </h5>
  </motion.div>

  {/* Right Side - Description */}
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
    <p className="myGray aboutt">
      We are excited to introduce our line of refreshing beverages. Our
      mission is to provide unique and delightful flavors that satisfy our
      customers.<br />
      Our vision is to become one of the leading provider of innovative and
      refreshing beverages in the market.<br />
      With a strong focus on quality and customer satisfaction, we aim to
      capture a significant share of the growing beverage market.
    </p>
  </motion.div>
</div>

<style>{`
  @media (max-width: 768px) {
    .content-wrapper {
      display: block !important; /* instead of flex */
    }
    .content-text, .content-image {
      width: 100% !important;
      padding-right: 0 !important;
      text-align: center; /* optional for better mobile look */
    }
    .content-text {
      margin-bottom: 20px;
    }
  }
`}</style>

      </section>
 
    </>
  );
}
