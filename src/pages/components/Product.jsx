// import React from "react";
// import { Link } from "react-router-dom";
// import { Watch, Headphones, Moon } from "lucide-react";
// import watchpatImg from "../../assets/images/product.png";
// import sleepImageRingImg from "../../assets/images/product2.png";
// import dreamS from "../../assets/images/dreamS.jpeg";

// const accentColors = {
//   green: "bg-green-600 hover:bg-green-700",
//   purple: "bg-purple-600 hover:bg-purple-700",
//   pink: "bg-pink-600 hover:bg-pink-700",
//   indigo: "bg-indigo-600 hover:bg-indigo-700",
// };
// const products = [
//   {
//     id: "watchpad",
//     name: "WatchPAT®",
//     description:
//       "A next-gen smart health tracker that monitors your oxygen levels, sleep patterns, and heart rate — all while you rest.",
//     image: watchpatImg,
//     gradient: "from-green-50 via-blue-50 to-purple-50",
//     icon: Watch,
//     accent: "green",
//   },
//   {
//     id: "philipsdreamstation",
//     name: "Philips DreamStation",
//     description:
//       "A premium sleep therapy system designed to enhance your sleep quality with gentle airflow control, smart pressure adjustment, and silent operation for all-night comfort.",
//     image: dreamS, // replace with your DreamStation image import
//     gradient: "from-purple-50 via-violet-50 to-pink-50",
//     icon: Headphones,
//     accent: "purple",
//   },
//   {
//     id: "sleepImageRing",
//     name: "SleepImage® Ring",
//     description:
//       "A clinically validated smart ring that tracks your sleep quality, oxygen levels, and breathing patterns — giving you accurate insights for better rest.",
//     image: sleepImageRingImg,
//     gradient: "from-blue-50 via-indigo-50 to-purple-50",
//     icon: Headphones,
//     accent: "blue",
//   },
// ];

// const Products = () => {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6">
//       <div className="max-w-7xl mx-auto text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//           Explore Our Products
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Smart devices designed to help you sleep better, live healthier, and
//           stay connected effortlessly.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-12 max-w-[90rem] mx-auto">
//         {products.map((product) => {
//           const Icon = product.icon;
//           return (
//             <div
//               key={product.id}
//               className={`relative bg-gradient-to-br ${product.gradient} rounded-3xl shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all overflow-hidden border border-gray-100`}
//             >
//               <div className="grid md:grid-cols-2 gap-8 items-center p-10">
//                 <div>
//                   <div className="flex items-center mb-4">
//                     <Icon
//                       className={`w-8 h-8 text-${product.accent}-600 mr-3`}
//                     />
//                     <h3 className="text-2xl font-bold text-gray-800">
//                       {product.name}
//                     </h3>
//                   </div>
//                   <p className="text-gray-700 mb-6 leading-relaxed">
//                     {product.description}
//                   </p>

//                   <Link
//                     to={`/products/${product.id}/details`}
//                     className={`inline-block text-white px-6 py-3 rounded-xl font-medium transition ${
//                       accentColors[product.accent] ||
//                       "bg-gray-600 hover:bg-gray-700"
//                     }`}
//                   >
//                     Buy Now
//                   </Link>
//                 </div>

//                 <div className="relative">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Products;
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Watch, Headphones, Moon, Activity } from "lucide-react";

import watchpatImg from "../../assets/images/product.png";
import sleepImageRingImg from "../../assets/images/product2.png";
import dreamS from "../../assets/images/dreamS.jpeg";

// Temporary fallback URLs for missing local images
const maskImg = "https://www.beechfieldsleep.ie/wp-content/uploads/2025/02/full-face-cpap-mask.jpg";
const accessoriesImg = "https://shop.resmed.com/GB/en/cpap-accessories/cpap-tubing/c/1202/cpap-tubing-1.jpg";

const accentColors = {
  green: "bg-green-600 hover:bg-green-700",
  purple: "bg-purple-600 hover:bg-purple-700",
  blue: "bg-blue-600 hover:bg-blue-700",
  pink: "bg-pink-600 hover:bg-pink-700",
};

const allProducts = [
  {
    id: "watchpat",
    category: "testing",
    name: "WatchPAT®",
    description:
      "A next-gen smart health tracker that monitors your oxygen levels, sleep patterns, and heart rate — all while you rest.",
    image: watchpatImg,
    gradient: "from-green-50 via-blue-50 to-purple-50",
    icon: Watch,
    accent: "green",
  },
  {
    id: "sleepimagering",
    category: "testing",
    name: "SleepImage® Ring",
    description:
      "A clinically validated smart ring that tracks your sleep quality, oxygen levels, and breathing patterns — giving you accurate insights for better rest.",
    image: sleepImageRingImg,
    gradient: "from-blue-50 via-indigo-50 to-purple-50",
    icon: Headphones,
    accent: "blue",
  },
  {
    id: "philipsdreamstation",
    category: "cpap",
    name: "Philips DreamStation",
    description:
      "A premium sleep therapy system designed to enhance your sleep quality with gentle airflow control and smart pressure adjustment.",
    image: dreamS,
    gradient: "from-purple-50 via-violet-50 to-pink-50",
    icon: Moon,
    accent: "purple",
  },
  {
    id: "maskpro",
    category: "masks",
    name: "ResMed AirFit Mask",
    description:
      "A lightweight, comfortable CPAP mask that ensures a secure fit while minimizing pressure on the face, ideal for restful sleep therapy.",
    image: maskImg,
    gradient: "from-indigo-50 via-blue-50 to-purple-50",
    icon: Activity,
    accent: "blue",
  },
  {
    id: "cordpipe",
    category: "accessories",
    name: "CPAP Tubing & Cord Kit",
    description:
      "High-quality replacement tubing and power cords compatible with most CPAP devices, ensuring clean airflow and reliable connection.",
    image: accessoriesImg,
    gradient: "from-pink-50 via-rose-50 to-purple-50",
    icon: Activity,
    accent: "pink",
  },
];

const Products = () => {
  const { id } = useParams(); // extract category id from route

  // Filter products by category
  const filteredProducts = allProducts.filter(
    (product) => product.category === id
  );

  // Handle invalid or missing categories
  if (filteredProducts.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700">
          No products found for this category.
        </h2>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 capitalize">
          {id} Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our collection of {id.replace("-", " ")} — designed to improve
          sleep health and comfort.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-[90rem] mx-auto">
        {filteredProducts.map((product) => {
          const Icon = product.icon;
          return (
            <Link
              key={product.id}
              to={`/category/${id}/details`}
              className={`relative bg-gradient-to-br ${product.gradient} rounded-3xl shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all overflow-hidden border border-gray-100 group`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center p-10">
                <div>
                  <div className="flex items-center mb-4">
                    <Icon
                      className={`w-8 h-8 text-${product.accent}-600 mr-3`}
                    />
                    <h3 className="text-2xl font-bold text-gray-800">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <span
                    className={`inline-block text-white px-6 py-3 rounded-xl font-medium transition ${
                      accentColors[product.accent] ||
                      "bg-gray-600 hover:bg-gray-700"
                    }`}
                  >
                    Details
                  </span>
                </div>

                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
