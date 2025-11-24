import React from "react";
import { Link, useParams } from "react-router-dom";
import { Watch, Headphones, Moon, Activity } from "lucide-react";

import watchpatImg from "../../assets/images/product.png";
import sleepImageRingImg from "../../assets/images/product2.png";
import dreamS from "../../assets/images/dreamS.jpeg";
import dreamWearFullFaceImg from "../../assets/images/full-mask1.webp";
import dreamWearPillowsImg from "../../assets/images/DWSilicone.jpg";
import dreamWearMaskImg from "../../assets/images/dreamWisp.jpg";
import dreamStationBiPAPImg from "../../assets/images/DreamStation-BiPAP-ASV.jpg";
import dreamStationHumidifierImg from "../../assets/images/dreamstation-humidifier-connection-side.jpg";
import dreamStationASVImg from "../../assets/images/DreamStation-BiPAP-ASV.jpg";
import dreamStation2AutoImg from "../../assets/images/Untitleddesign_3.png";
import dreamStation2ResupplyImg from "../../assets/images/DreamStation2ReSupply.webp";
import dreamStation2AdvancedImg from "../../assets/images/DreamStation2.jpg";
import waterChamberImg from "../../assets/images/Dream2WaC.png";
import heatedTubeImg from "../../assets/images/FlexibleSetup.png";
import tubingDreamStationImg from "../../assets/images/FlexibleSetup.png";
import filtersImg from "../../assets/images/Filters1.jpg";
import dcPowerImg from "../../assets/images/DS_shielded_DC_cord_RGBLo_Web.png";
import connectorCableImg from "../../assets/images/DreamStation-2-DC-OUT-CABLE-600px.jpg";
import dreamWispImg from "../../assets/images/DWArms.jpg";
import air11cpapP1 from "../../assets/images/air11cpapP1.webp";
import a11ih1 from "../../assets/images/11ih1.webp";
import F401 from "../../assets/images/F401.webp";
import airfitf30her from "../../assets/images/resmed_airfit_f20_for_her.jpg";
import airfitf30i from "../../assets/images/Airfit_F30i.jpg";
import airfitf30 from "../../assets/images/Airfit_F30.jpg";
import dw1 from "../../assets/images/dw1.webp";
import airtouchf20 from "../../assets/images/airtouch-F20.jpg";
import airfitf20 from "../../assets/images/resmed_airfit_f20_cushion.jpg";
import a10cp1 from "../../assets/images/10cp1.webp";
import a11a1 from "../../assets/images/11a1.webp";
import s101 from "../../assets/images/s101.avif";
import her1 from "../../assets/images/her2.avif";


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
    category: "CPAP",
    name: "Philips DreamStation",
    description:
      "A premium sleep therapy system designed to enhance your sleep quality with gentle airflow control and smart pressure adjustment.",
    image: dreamS,
    gradient: "from-purple-50 via-violet-50 to-pink-50",
    icon: Moon,
    accent: "purple",
  },
  {
    id: "dreamWisp",
    category: "masks",
    name: "DreamWisp Mask",
    description:
      "A lightweight CPAP nasal mask designed for comfort and secure fit, perfect for a restful night of therapy.",
    image: dreamWispImg,
    gradient: "from-indigo-50 via-blue-50 to-purple-50",
    icon: Activity,
    accent: "blue",
  },
  {
    id: "dreamWearFullFace",
    category: "masks",
    name: "DreamWear Full Face Mask",
    description:
      "Full face CPAP mask that provides maximum comfort and effective airflow, ideal for users who breathe through their mouth.",
    image: dreamWearFullFaceImg,
    gradient: "from-indigo-50 via-blue-50 to-purple-50",
    icon: Activity,
    accent: "blue",
  },
  {
    id: "dreamWearSiliconePillowsFitpack",
    category: "masks",
    name: "DreamWear Silicone Pillows FitPack",
    description:
      "Soft silicone pillow mask tips for a customized, comfortable CPAP therapy experience.",
    image: dreamWearPillowsImg,
    gradient: "from-indigo-50 via-blue-50 to-purple-50",
    icon: Activity,
    accent: "blue",
  },
  {
    id: "dreamWearCPAPMask",
    category: "masks",
    name: "DreamWear Nasal Mask",
    description:
      "Ergonomic CPAP mask that ensures a secure fit while minimizing pressure points, perfect for consistent nightly use.",
    image: dreamWearMaskImg,
    gradient: "from-indigo-50 via-blue-50 to-purple-50",
    icon: Activity,
    accent: "blue",
  },
  {
  id: "airfitf20",
  category: "masks",
  name: "AirFit F20 Full Face Mask",
  description:
    "ResMed's most popular full face mask with InfinitySeal cushion, magnetic clips, and QuietAir technology for peaceful sleep.",
  image: airfitf20,
  gradient: "from-indigo-50 via-blue-50 to-purple-50",
  icon: Activity,
  accent: "blue",
},
  {
    id: "dreamStationBiPAPAutoPackage",
    category: "CPAP",
    name: "DreamStation BiPAP Auto Package",
    description:
      "Advanced BiPAP sleep therapy system with automatic pressure adjustments, includes mask, heated tubing, filters, and wipes.",
    image: dreamStationBiPAPImg,
    gradient: "from-purple-50 via-violet-50 to-pink-50",
    icon: Moon,
    accent: "purple",
  },
  {
    id: "dreamStationBiPAPHumidifierIncl",
    category: "CPAP",
    name: "DreamStation BiPAP Auto with Humidifier",
    description:
      "BiPAP therapy system with integrated humidifier for maximum comfort and optimal sleep therapy.",
    image: dreamStationHumidifierImg,
    gradient: "from-purple-50 via-violet-50 to-pink-50",
    icon: Moon,
    accent: "purple",
  },
  {
    id: "dreamStationBiPAPASV",
    category: "CPAP",
    name: "DreamStation BiPAP ASV",
    description:
      "Adaptive servo-ventilation system designed to treat complex sleep apnea effectively with precise pressure management.",
    image: dreamStationASVImg,
    gradient: "from-purple-50 via-violet-50 to-pink-50",
    icon: Moon,
    accent: "purple",
  },
  {
    id: "dreamStation2AutoPackage",
    category: "CPAP",
    name: "DreamStation 2 Auto Package",
    description:
      "Next-gen CPAP machine with auto-adjusting pressure, includes interface, heated tubing, filters, and wipes for a complete sleep therapy setup.",
    image: dreamStation2AutoImg,
    gradient: "from-purple-50 via-violet-50 to-pink-50",
    icon: Moon,
    accent: "purple",
  },
  {
    id: "dreamStation2ReSupplyBundle",
    category: "CPAP",
    name: "DreamStation 2 Resupply Bundle",
    description:
      "Comprehensive resupply kit for DreamStation 2, including filters, tubing, and other essential accessories.",
    image: dreamStation2ResupplyImg,
    gradient: "from-purple-50 via-violet-50 to-pink-50",
    icon: Moon,
    accent: "purple",
  },
  {
    id: "dreamStation2AutoCPAPAdvanced",
    category: "CPAP",
    name: "DreamStation 2 Auto CPAP Advanced",
    description:
      "Advanced auto CPAP machine for personalized therapy, ensuring optimal pressure and comfort throughout the night.",
    image: dreamStation2AdvancedImg,
    gradient: "from-purple-50 via-violet-50 to-pink-50",
    icon: Moon,
    accent: "purple",
  },
  {
    id: "dreamStation2WaterChamber",
    category: "accessories",
    name: "DreamStation 2 Water Chamber",
    description:
      "Replacement water chamber for DreamStation 2 humidifier, ensuring clean, comfortable humidified airflow.",
    image: waterChamberImg,
    gradient: "from-pink-50 via-rose-50 to-purple-50",
    icon: Activity,
    accent: "pink",
  },
  {
    id: "dreamStation2HeatedTube",
    category: "accessories",
    name: "DreamStation 2 Heated Tube",
    description:
      "Heated CPAP tubing for DreamStation 2 to prevent condensation and maintain comfortable airflow.",
    image: heatedTubeImg,
    gradient: "from-pink-50 via-rose-50 to-purple-50",
    icon: Activity,
    accent: "pink",
  },
  {
    id: "tubingDreamStationHeatedTube",
    category: "accessories",
    name: "Tubing for DreamStation Heated Tube",
    description:
      "High-quality replacement tubing compatible with DreamStation heated tubes for reliable CPAP therapy.",
    image: tubingDreamStationImg,
    gradient: "from-pink-50 via-rose-50 to-purple-50",
    icon: Activity,
    accent: "pink",
  },
  {
    id: "dreamStation2MachineFilters",
    category: "accessories",
    name: "DreamStation 2 Filters",
    description:
      "Replacement filters for DreamStation 2 CPAP machines, keeping airflow clean and efficient.",
    image: filtersImg,
    gradient: "from-pink-50 via-rose-50 to-purple-50",
    icon: Activity,
    accent: "pink",
  },
  {
    id: "dcPowerSupplyForRespironicsDreamStation",
    category: "accessories",
    name: "DC Power Supply for DreamStation",
    description:
      "Reliable DC power supply for DreamStation CPAP machines, ensuring uninterrupted therapy.",
    image: dcPowerImg,
    gradient: "from-pink-50 via-rose-50 to-purple-50",
    icon: Activity,
    accent: "pink",
  },
  {
    id: "pilot12LiteDreamstation2ConnectorCable",
    category: "accessories",
    name: "Pilot 12 Lite Connector Cable",
    description:
      "Connector cable for DreamStation 2, enabling easy setup and connectivity for CPAP machines and accessories.",
    image: connectorCableImg,
    gradient: "from-pink-50 via-rose-50 to-purple-50",
    icon: Activity,
    accent: "pink",
  },
  {
  id: "airsense11autoset",
  category: "CPAP",
  name: "AirSense 11 AutoSet CPAP Package",
  description:
    "ResMed's latest auto-adjusting CPAP with advanced therapy algorithms, touchscreen display, and integrated humidifier for optimal comfort.",
  image: air11cpapP1,
  gradient: "from-purple-50 via-violet-50 to-pink-50",
  icon: Moon,
  accent: "purple",
},
{
  id: "airsense11autosetpackage",
  category: "CPAP",
  name: "AirSense 11 AutoSet CPAP Package",
  description:
    "Complete package with AirSense 11 AutoSet, mask, heated tubing, filters, and supplies for immediate therapy.",
  image: a11ih1,
  gradient: "from-purple-50 via-violet-50 to-pink-50",
  icon: Moon,
  accent: "purple",
},
{
  id: "airsense10autosether",
  category: "CPAP",
  name: "AirSense 10 AutoSet for Her",
  description:
    "Specially designed CPAP for women with AutoSet for Her algorithm, providing gentler pressure adjustments tailored to female physiology.",
  image: her1,
  gradient: "from-purple-50 via-violet-50 to-pink-50",
  icon: Moon,
  accent: "purple",
},
{
  id: "resmedplatinumair",
  category: "CPAP",
  name: "ResMed Platinum Air CPAP Package",
  description:
    "Premium all-inclusive CPAP package with advanced machine, premium mask, heated tubing, and comprehensive accessories.",
  image: s101,
  gradient: "from-purple-50 via-violet-50 to-pink-50",
  icon: Moon,
  accent: "purple",
},
{
  id: "airsense11airminiplatinum",
  category: "CPAP",
  name: "AirSense 11 & AirMini Platinum Package",
  description:
    "Ultimate dual-machine package: full-size AirSense 11 for home and ultra-portable AirMini for travel.",
  image: a11a1,
  gradient: "from-purple-50 via-violet-50 to-pink-50",
  icon: Moon,
  accent: "purple",
},
{
  id: "airsense10autoset",
  category: "CPAP",
  name: "AirSense 10 AutoSet CPAP",
  description:
    "Proven auto-adjusting CPAP with integrated humidifier and clinically-validated AutoSet algorithm for effective therapy.",
  image: a10cp1,
  gradient: "from-purple-50 via-violet-50 to-pink-50",
  icon: Moon,
  accent: "purple",
},
{
  id: "airsense11autosetstandalone",
  category: "CPAP",
  name: "AirSense 11 AutoSet with Humidifier",
  description:
    "Latest generation CPAP with intuitive touchscreen, integrated humidifier, and advanced AutoSet technology.",
  image: a11ih1,
  gradient: "from-purple-50 via-violet-50 to-pink-50",
  icon: Moon,
  accent: "purple",
},
{
  id: "airsense10package",
  category: "CPAP",
  name: "AirSense 10 Auto CPAP Package",
  description:
    "Complete therapy package with AirSense 10 machine, mask, heated tubing, filters, and cleaning supplies.",
  image: a10cp1,
  gradient: "from-purple-50 via-violet-50 to-pink-50",
  icon: Moon,
  accent: "purple",
},
{
  id: "airtouchf20",
  category: "masks",
  name: "AirTouch F20 Memory Foam Mask",
  description:
    "Revolutionary UltraSoft memory foam cushion that breathes and adapts to facial contours for exceptional comfort.",
  image: airtouchf20,
  gradient: "from-indigo-50 via-blue-50 to-purple-50",
  icon: Activity,
  accent: "blue",
},
{
  id: "dreamwearfullface",
  category: "masks",
  name: "DreamWear Full Face CPAP Mask",
  description:
    "Innovative mask with top-of-head hose connection for ultimate freedom of movement and minimal facial contact.",
  image: dw1,
  gradient: "from-indigo-50 via-blue-50 to-purple-50",
  icon: Activity,
  accent: "blue",
},
{
  id: "airfitf30",
  category: "masks",
  name: "AirFit F30 Full Face Mask",
  description:
    "Compact full face mask with under-nose cushion design that eliminates nasal bridge pressure and red marks.",
  image: airfitf30,
  gradient: "from-indigo-50 via-blue-50 to-purple-50",
  icon: Activity,
  accent: "blue",
},
{
  id: "airfitf30i",
  category: "masks",
  name: "AirFit F30i Full Face Mask",
  description:
    "Full face mask with top-of-head tube connection and under-nose cushion for maximum comfort and sleeping freedom.",
  image: airfitf30i,
  gradient: "from-indigo-50 via-blue-50 to-purple-50",
  icon: Activity,
  accent: "blue",
},
{
  id: "airfitf20her",
  category: "masks",
  name: "AirFit F20 for Her",
  description:
    "Women-specific full face mask with elegant lavender design, smaller sizes, and InfinitySeal cushion technology.",
  image: airfitf30her,
  gradient: "from-indigo-50 via-blue-50 to-purple-50",
  icon: Activity,
  accent: "blue",
},
{
  id: "airfitf30small",
  category: "masks",
  name: "AirFit F30 Small",
  description:
    "Compact full face mask in small size with under-nose design, perfect for petite facial features and maximum comfort.",
  image: F401,
  gradient: "from-indigo-50 via-blue-50 to-purple-50",
  icon: Activity,
  accent: "blue",
},
];

const Products = () => {
const { categoryName } = useParams();
  // Filter products by category
  const filteredProducts = allProducts.filter(
    (product) => product.category === categoryName
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
          {categoryName} Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our collection of {categoryName.replace("-", " ")} — designed to improve
          sleep health and comfort.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-[90rem] mx-auto">
        {filteredProducts.map((product) => {
          const Icon = product.icon;
          return (
            <Link
              key={product.id}
              to={`/category/${categoryName}/${product.id}/details/`}
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
