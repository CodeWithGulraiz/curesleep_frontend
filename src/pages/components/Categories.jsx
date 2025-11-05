import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
let testingImg = "https://www.clmsleep.com/wp-content/uploads/2024/09/sleep-apnea-test-at-home-1.jpg";
let cpapImg = "https://post.healthline.com/wp-content/uploads/2020/08/CPAP_Machine_Male_1296x728-header-1296x729.jpg";
let masksImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvmnCJn9zTk589hVoNstJE2q1HpUVG1apEgQ&s";
let accessoriesImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1QgEL-wT1atyK33VzV-xj0Gm9pD8DJRS3Q&s";

const accentColors = {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  purple: "bg-purple-600 hover:bg-purple-700",
  pink: "bg-pink-600 hover:bg-pink-700",
};

const categories = [
  {
    name: "Testing Machines",
    description:
      "Advanced sleep testing devices that help diagnose sleep apnea and related disorders with precision and comfort.",
    image: testingImg,
    gradient: "from-blue-50 via-indigo-50 to-purple-50",
    accent: "blue",
    link: "/category/testing",
  },
  {
    name: "CPAP Machines",
    description:
      "Reliable Continuous Positive Airway Pressure systems designed to improve breathing and ensure uninterrupted sleep.",
    image: cpapImg,
    gradient: "from-green-50 via-teal-50 to-blue-50",
    accent: "green",
    link: "/category/cpap",
  },
  {
    name: "Masks",
    description:
      "Comfortable and effective CPAP masks that fit all face types, providing an airtight seal for optimal therapy results.",
    image: masksImg,
    gradient: "from-purple-50 via-pink-50 to-red-50",
    accent: "purple",
    link: "/category/masks",
  },
  {
    name: "Accessories",
    description:
      "Essential CPAP accessories including filters, tubing, and humidifiers — keeping your sleep therapy clean and efficient.",
    image: accessoriesImg,
    gradient: "from-pink-50 via-rose-50 to-orange-50",
    accent: "pink",
    link: "/category/accessories",
  },
];

const Categories = () => {
  return (<>
  <Navbar/>
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Explore Our Categories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover equipment and accessories designed to support better sleep,
          effective therapy, and improved breathing for sleep apnea and related
          disorders.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-[90rem] mx-auto">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.link}
            className={`block relative bg-gradient-to-br ${category.gradient} rounded-3xl shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all overflow-hidden border border-gray-100 group`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center p-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {category.name}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {category.description}
                </p>
                <Link
                  to={category.link}
                  className={`inline-block text-white px-6 py-3 rounded-xl font-medium transition ${
                    accentColors[category.accent] ||
                    "bg-gray-600 hover:bg-gray-700"
                  }`}
                >
                  Explore
                </Link>
              </div>

              <div className="relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
    <Footer/>
  </>
  );
};

export default Categories;