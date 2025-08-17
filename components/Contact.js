"use client";
import { useState } from "react";

export default function DistributorForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can replace with API call / email handler here
  };

  return (
    <section className="w-full flex justify-center items-center py-12  ">
      <div className="max-w-lg w-full  p-8 rounded-2xl  ">
        <h2 className="myGray mytitle4 mb-4 ">
          Become a Distributor Today!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c12288] outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c12288] outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c12288] outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c12288] outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-full font-bold uppercase text-lg"
            style={{ backgroundColor: "#c12288", color: "#fff" }}
          >
            Contact Us Now!
          </button>
        </form>
      </div>
    </section>
  );
}
