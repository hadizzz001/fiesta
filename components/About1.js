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
              src="https://res.cloudinary.com/dx6kwjzog/image/upload/v1755364271/fr_xqflvo.webp"
              alt="Company"
              style={{
                width: "100%",
                aspectRatio: "1 / 1", // force square
                objectFit: "cover",   // crop to fit inside the square 
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
              Product Overview
            </h5>
            <p className="myGray mb-5 aboutt"  >
              Our beverage line includes a variety of exciting
              flavors, each crafted to deliver a unique and
              satisfying taste experience.<br />
              Our Unique Selling Proposition (USP) is the
              combination of high-quality ingredients and
              innovative flavor profiles that set us apart from
              the competition.

            </p>
            <a href="/contact">
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
