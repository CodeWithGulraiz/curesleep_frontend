import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import testingImg from "../assets/images/ensoData1.jpg"
let cpapImg =
  "https://post.healthline.com/wp-content/uploads/2020/08/CPAP_Machine_Male_1296x728-header-1296x729.jpg";
let masksImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvmnCJn9zTk589hVoNstJE2q1HpUVG1apEgQ&s";
let accessoriesImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1QgEL-wT1atyK33VzV-xj0Gm9pD8DJRS3Q&s";
let humidifiersImg =
  "https://images.pexels.com/photos/6941321/pexels-photo-6941321.jpeg";

let filtersImg =
  "https://www.shutterstock.com/shutterstock/photos/1145054834/display_1500/stock-photo-male-hand-holding-cpap-mask-over-white-bed-1145054834.jpg";

let cleaningImg =
  "https://www.shutterstock.com/shutterstock/photos/1145054834/display_1500/stock-photo-male-hand-holding-cpap-mask-over-white-bed-1145054834.jpg";

let maskPartsImg =
  "https://www.shutterstock.com/shutterstock/photos/1145054834/display_1500/stock-photo-male-hand-holding-cpap-mask-over-white-bed-1145054834.jpg";

const accentColors = {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  purple: "bg-purple-600 hover:bg-purple-700",
  pink: "bg-pink-600 hover:bg-pink-700",
  teal: "bg-teal-600 hover:bg-teal-700",
  cyan: "bg-cyan-600 hover:bg-cyan-700",
  indigo: "bg-indigo-600 hover:bg-indigo-700",
  orange: "bg-orange-600 hover:bg-orange-700",
};

const categories = [
  {
    name: "Home Sleep Apnea Tests",
    description:
      "Home sleep apnea tests—accurate, physician-reviewed testing done comfortably at home with clinically validated devices.",
    image: testingImg,
    gradient: "from-blue-50 via-indigo-50 to-purple-50",
    accent: "blue",
    link: "/category/testing",
  },
  {
    name: "Auto CPAP Machines",
    description:
      "Reliable Continuous Positive Airway Pressure systems designed to improve breathing and ensure uninterrupted sleep.",
    image: cpapImg,
    gradient: "from-green-50 via-teal-50 to-blue-50",
    accent: "green",
    link: "/category/CPAP",
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
    name: "CPAP Humidifiers",
    description:
      "Water chambers and heated humidifiers that add moisture to your therapy air for enhanced comfort throughout the night.",
    image: humidifiersImg,
    gradient: "from-cyan-50 via-blue-50 to-indigo-50",
    accent: "cyan",
    link: "/category/CPAP-HUMIDIFIERS",
  },
  {
    name: "CPAP Machine Filters",
    description:
      "Replacement filters that keep your CPAP air clean and free from dust, allergens, and contaminants for healthy therapy.",
    image: filtersImg,
    gradient: "from-teal-50 via-cyan-50 to-blue-50",
    accent: "teal",
    link: "/category/CPAP-MACHINE-FILTERS",
  },
  {
    name: "CPAP Cleaning",
    description:
      "Sanitizers and cleaning supplies that eliminate bacteria and keep your CPAP equipment hygienic and safe to use.",
    image: cleaningImg,
    gradient: "from-green-50 via-emerald-50 to-teal-50",
    accent: "green",
    link: "/category/CPAP-CLEANING",
  },
  {
    name: "CPAP Mask Parts",
    description:
      "Replacement cushions, headgear, and seals to maintain your mask's fit and extend its lifespan for optimal therapy.",
    image: maskPartsImg,
    gradient: "from-indigo-50 via-purple-50 to-pink-50",
    accent: "indigo",
    link: "/category/CPAP-MASK-PARTS",
  },
  {
    name: "Accessories",
    description:
      "Essential CPAP accessories including tubing, travel cases, and more — keeping your sleep therapy convenient and efficient.",
    image: accessoriesImg,
    gradient: "from-pink-50 via-rose-50 to-orange-50",
    accent: "pink",
    link: "/category/accessories",
  },
];

const Categories = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6">
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
                  <div
                    className={`inline-block text-white px-6 py-3 rounded-xl font-medium transition ${
                      accentColors[category.accent] ||
                      "bg-gray-600 hover:bg-gray-700"
                    }`}
                  >
                    View Collections
                  </div>
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
    </>
  );
};

export default Categories;
