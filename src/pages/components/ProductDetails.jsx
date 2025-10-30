import React, { useState } from "react";
import {
  Watch,
  HeartPulse,
  Cloud,
  Brain,
  ShieldCheck,
  Smartphone,
  Star,
  CheckCircle,
  AlertTriangle,
  Headphones,
  Moon,
  Waves,
  Music2,
  Battery,
} from "lucide-react";
import watchpatImg from "../../assets/images/product.png";
import sleepbudsImg from "../../assets/images/product2.png";
import watchPat1 from "../../assets/images/watchPat1.jpg";
import watchPat2 from "../../assets/images/watchPat2.jpg";
import watchPat3 from "../../assets/images/watchPat3.jpg";
import watchPat4 from "../../assets/images/watchPat4.jpg";
import watchPat5 from "../../assets/images/watchPat5.jpg";
import dreamS from "../../assets/images/dreamS.jpeg";
import dreamS1 from "../../assets/images/dreamS1.jpg";
import dreamS2 from "../../assets/images/dreamS2.jpg";
import dreamS3 from "../../assets/images/dreamS3.jpeg";
import dreamS4 from "../../assets/images/dreamS4.jpeg";
import dreamS5 from "../../assets/images/dreamS5.jpeg";
import dreamS6 from "../../assets/images/dreamS6.jpeg";
import dreamS7 from "../../assets/images/dreamS7.jpeg";
// import sleepbudsImg from "../../assets/images/product2.png";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const products = {
  watchpad: {
    name: "WatchPat",
    image: watchpatImg,
    extraImages: [watchPat1, watchPat2, watchPat3, watchPat4, watchPat5], // replace with your tracker image
    price: 120,
    heroColor: "from-green-50 via-blue-50 to-purple-50",
    heroIcon: Watch,
    description: `
      The <strong>WatchPat</strong> is a next-generation wearable designed
      to measure your blood oxygen (SpO₂) and heart rate with medical-grade precision.
      Whether you're training, sleeping, or just living your day — it helps you
      understand your body better and live healthier.
    `,
    metrics: [
      {
        icon: HeartPulse,
        title: "Oxygen Saturation (SpO₂)",
        desc: "Tracks oxygen levels in real-time.",
      },
      {
        icon: Brain,
        title: "Heart Rate",
        desc: "Monitors pulse variations and stress indicators.",
      },
      {
        icon: Cloud,
        title: "Cloud Sync",
        desc: "Automatically uploads health data to your profile.",
      },
      {
        icon: ShieldCheck,
        title: "Accurate Sensors",
        desc: "Medical-grade precision for daily use.",
      },
      {
        icon: Watch,
        title: "Wear Comfort",
        desc: "Ergonomic lightweight fit for 24/7 wear.",
      },
      {
        icon: Star,
        title: "7-Day Battery",
        desc: "Long-lasting battery life with USB-C charging.",
      },
    ],
    features: [
      {
        icon: Smartphone,
        title: "App Integration",
        desc: "View and analyze trends on the companion app.",
      },
      {
        icon: ShieldCheck,
        title: "Health Certified",
        desc: "Meets international accuracy standards.",
      },
      {
        icon: Watch,
        title: "Smart Design",
        desc: "Minimalist and water-resistant with OLED display.",
      },
      {
        icon: Cloud,
        title: "Auto Sync",
        desc: "Stores all readings securely in the cloud.",
      },
      {
        icon: Star,
        title: "Rechargeable & Durable",
        desc: "Built for everyday use with long-term reliability.",
      },
    ],
    cautions: [
      "⚠️ Not a substitute for medical diagnosis.",
      "⚠️ Consult your doctor for irregular readings.",
      "⚠️ Keep away from high humidity or heat.",
    ],
    benefits: [
      "Athletes tracking oxygen & recovery",
      "Individuals monitoring daily health trends",
      "Sleep-conscious users tracking SpO₂ overnight",
      "People seeking a minimal, all-day wearable",
    ],
    summary: [
      ["Manufacturer", "WellTrack Technologies"],
      ["Type", "Wearable Health Monitor"],
      ["Primary Metrics", "SpO₂, Heart Rate, Sleep Data"],
      ["Connectivity", "Bluetooth & Cloud Sync"],
      ["Battery", "7 days continuous use"],
      ["Water Resistance", "IP67 Rated"],
      ["Warranty", "1 Year"],
    ],
    other: ["sleepbuds", "philipsdreamstation"],
  },
  philipsdreamstation: {
    name: "Philips DreamStation",
    image: dreamS, // main image
    extraImages: [
      dreamS1,
      dreamS2,
      dreamS3,
      dreamS4,
      dreamS5,
      dreamS6,
      dreamS7,
    ], // replace with your extra images
    price: 350,
    heroColor: "from-blue-50 via-indigo-50 to-purple-50",
    heroIcon: Headphones,
    description: `
    The <strong>Philips DreamStation</strong> is an advanced sleep therapy device
    designed to improve sleep quality and support better breathing. With intelligent
    algorithms, quiet operation, and comfort-focused design, it ensures restful nights
    and effective therapy for sleep apnea users.
  `,
    metrics: [
      {
        icon: Cloud,
        title: "Auto-Adjusting Pressure",
        desc: "Continuously adapts air pressure for optimal comfort.",
      },
      {
        icon: HeartPulse,
        title: "Breathing Pattern Detection",
        desc: "Analyzes and records your breathing cycles during sleep.",
      },
      {
        icon: ShieldCheck,
        title: "Leak Detection",
        desc: "Monitors mask fit and air leakage in real-time.",
      },
      {
        icon: Star,
        title: "Quiet Performance",
        desc: "Operates quietly, promoting uninterrupted sleep.",
      },
      {
        icon: Brain,
        title: "Smart Tracking",
        desc: "Stores therapy data and syncs with mobile apps.",
      },
      {
        icon: Battery,
        title: "Power Efficient",
        desc: "Energy-saving design for long overnight use.",
      },
    ],
    features: [
      {
        icon: Smartphone,
        title: "App Connectivity",
        desc: "Syncs with the Philips DreamMapper app for detailed insights.",
      },
      {
        icon: ShieldCheck,
        title: "Safety Certified",
        desc: "Meets global medical device standards.",
      },
      {
        icon: Watch,
        title: "User-Friendly Interface",
        desc: "Simple display and intuitive controls.",
      },
      {
        icon: Cloud,
        title: "Cloud Data Backup",
        desc: "Automatically uploads therapy records for review.",
      },
      {
        icon: Star,
        title: "Ergonomic Design",
        desc: "Compact and lightweight with flexible tubing options.",
      },
    ],
    cautions: [
      "⚠️ Use only under medical supervision.",
      "⚠️ Clean tubing and mask regularly to prevent blockages.",
      "⚠️ Do not use near open flames or excessive heat.",
    ],
    benefits: [
      "Individuals with sleep apnea",
      "Users seeking quiet, automatic air pressure adjustment",
      "Patients needing easy monitoring through mobile apps",
      "Anyone prioritizing better and healthier sleep quality",
    ],
    summary: [
      ["Manufacturer", "Philips Respironics"],
      ["Type", "Sleep Therapy Device (CPAP)"],
      ["Primary Function", "Air Pressure Regulation for Sleep Apnea"],
      ["Connectivity", "Bluetooth & Cloud Sync via DreamMapper App"],
      ["Noise Level", "Below 30 dB (Ultra Quiet)"],
      ["Power", "100–240V AC Compatible"],
      ["Warranty", "2 Years"],
    ],
    other: ["watchpad", "sleepbuds"],
  },

  sleepbuds: {
    name: "Philips dream station",
    image: sleepbudsImg,
    extraImages: [sleepbudsImg], // replace with your Philips dream station image
    price: 200,
    heroColor: "from-blue-50 via-indigo-50 to-purple-50",
    heroIcon: Headphones,
    description: `
      The <strong>Philips dream station</strong> are designed to help you fall asleep faster and
      wake up refreshed. Ultra-soft and lightweight, these earbuds play calming sounds
      or connect to your favorite sleep app for an immersive relaxation experience.
    `,
    metrics: [
      {
        icon: Moon,
        title: "Sleep Tracking",
        desc: "Analyzes sleep duration and patterns.",
      },
      {
        icon: Music2,
        title: "Soothing Sounds",
        desc: "Built-in white noise and ambient tracks.",
      },
      {
        icon: Waves,
        title: "Noise Masking",
        desc: "Blocks out snoring and background noise.",
      },
      {
        icon: Battery,
        title: "12-Hour Battery",
        desc: "All-night use with fast USB-C charging.",
      },
      {
        icon: ShieldCheck,
        title: "Safe Fit",
        desc: "Ergonomic silicone tips for side sleepers.",
      },
      {
        icon: Star,
        title: "App Connectivity",
        desc: "Connects to sleep monitoring apps easily.",
      },
    ],
    features: [
      {
        icon: Brain,
        title: "Smart Sleep Analysis",
        desc: "Tracks light, deep, and REM sleep.",
      },
      {
        icon: Smartphone,
        title: "Bluetooth 5.3",
        desc: "Stable connection for uninterrupted audio.",
      },
      {
        icon: Watch,
        title: "Comfort Design",
        desc: "Tiny, soft, and pressure-free for side sleepers.",
      },
      {
        icon: Cloud,
        title: "Auto Sync",
        desc: "Save and view sleep reports on your phone.",
      },
      {
        icon: Star,
        title: "Peaceful Rest",
        desc: "Engineered for relaxation and stress relief.",
      },
    ],
    cautions: [
      "⚠️ Not recommended for use while swimming.",
      "⚠️ Avoid listening at high volumes for long periods.",
      "⚠️ Keep earbuds clean for best comfort and hygiene.",
    ],
    benefits: [
      "Light sleepers needing quiet nights",
      "People living in noisy environments",
      "Travelers and shift workers",
      "Anyone seeking better sleep quality",
    ],
    summary: [
      ["Manufacturer", "DreamSense Labs"],
      ["Type", "Wireless Sleep Earbuds"],
      ["Primary Purpose", "Noise Masking & Sleep Tracking"],
      ["Connectivity", "Bluetooth 5.3 + App"],
      ["Battery", "12 hours playtime"],
      ["Charging", "Fast USB-C charging"],
      ["Material", "Soft medical-grade silicone"],
    ],
    other: ["watchpad", "philipsdreamstation"],
  },
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = products[id];
  console.log(products);
  
  const [mainImage, setMainImage] = useState(product ? product.image : "");
  if (!product) {
    return <h2 className="text-center mt-20 text-2xl">Product not found</h2>;
  }

  // Merge main image + extra ones (if any)
  const allImages = [product.image, ...(product.extraImages || [])];
  const HeroIcon = product.heroIcon;

  return (
    <>
      <div className="mt-top border"></div>
      <Navbar />
      <div className="bg-white min-h-screen border">
        {/* HERO */}
        <section
          className={`relative py-20 px-4 bg-gradient-to-br ${product.heroColor}`}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <HeroIcon className="w-10 h-10 text-green-600 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                  {product.name}
                </h1>
              </div>
              <p
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              <div className="flex items-center gap-4">
                <p className="text-3xl font-bold text-green-700">
                  ${product.price} /- only
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="relative">
              {/* Main Image */}
              <img
                src={mainImage}
                alt={product.name}
                className="w-full rounded-2xl shadow-2xl mb-6 transition-transform duration-300 hover:scale-105"
              />

              {/* Thumbnails (only if extraImages exist) */}
              {product.extraImages && product.extraImages.length > 0 && (
                <div className="flex gap-4 flex-wrap">
                  {allImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      onClick={() => setMainImage(img)}
                      className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition-all duration-200 ${
                        mainImage === img
                          ? "border-green-600 scale-105"
                          : "border-gray-300 hover:border-green-400"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What It Measures
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {product.name} monitors key indicators to improve your daily
              health and wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {product.metrics.map((m, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <m.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {m.title}
                </h3>
                <p className="text-gray-600 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Key Features
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover what makes {product.name} stand out.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {product.features.map((f, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-green-100 transition-transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CAUTIONS */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Things to Keep in Mind
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-yellow-100">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <AlertTriangle className="w-12 h-12 text-yellow-500 flex-shrink-0" />
                <ul className="text-left space-y-3 text-gray-700">
                  {product.cautions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Who Can Benefit?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {product.name} is perfect for those who value comfort, health, and
              insight.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {product.benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-2xl transition-transform hover:-translate-y-2"
              >
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SUMMARY TABLE */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Summary</h2>
          </div>

          <div className="overflow-x-auto max-w-4xl mx-auto">
            <table className="w-full border border-green-100 bg-white rounded-2xl shadow-lg">
              <tbody>
                {product.summary.map(([k, v], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-green-50/50" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-800 w-1/3">
                      {k}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* WE ALSO SELL */}
        {product.other && product.other.length > 0 && (
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-10">We Also Sell</h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
                {product.other.map((otherId) => {
                  const otherProduct = products[otherId];
                  if (!otherProduct) return null;

                  return (
                    <Link
                      key={otherId}
                      to={`/products/${otherId}`}
                      className="inline-block bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100"
                    >
                      <img
                        src={otherProduct.image}
                        alt={otherProduct.name}
                        className="w-56 h-56 object-cover mx-auto rounded-xl mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        {otherProduct.name}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        ${otherProduct.price}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
