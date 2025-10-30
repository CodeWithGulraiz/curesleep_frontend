import React from "react";
import { Link } from "react-router-dom";
import { Watch, Headphones } from "lucide-react";
import watchpatImg from "../../assets/images/product.png";
import sleepbudsImg from "../../assets/images/product2.png";

const products = [
  {
    id: "watchpad",
    name: "WatchPat",
    description:
      "A next-gen smart health tracker that monitors your oxygen levels, sleep patterns, and heart rate — all while you rest.",
    image: watchpatImg,
    gradient: "from-green-50 via-blue-50 to-purple-50",
    icon: Watch,
    accent: "green",
  },
  {
    id: "sleepbuds",
    name: "Philips dream station",
    description:
      "Engineered for comfort, these smart earbuds track your sleep quality and help you drift into deep rest with soothing sounds.",
    image: sleepbudsImg,
    gradient: "from-blue-50 via-indigo-50 to-purple-50",
    icon: Headphones,
    accent: "blue",
  },
];

const Products = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Explore Our Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Smart devices designed to help you sleep better, live healthier, and stay connected effortlessly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-[90rem] mx-auto">
        {products.map((product) => {
          const Icon = product.icon;
          return (
            <div
              key={product.id}
              className={`relative bg-gradient-to-br ${product.gradient} rounded-3xl shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all overflow-hidden border border-gray-100`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center p-10">
                <div>
                  <div className="flex items-center mb-4">
                    <Icon className={`w-8 h-8 text-${product.accent}-600 mr-3`} />
                    <h3 className="text-2xl font-bold text-gray-800">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <Link
                    to={`/products/${product.id}/details`}
                    className={`inline-block bg-${product.accent}-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-${product.accent}-700 transition`}
                  >
                    See Details
                  </Link>
                </div>

                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
