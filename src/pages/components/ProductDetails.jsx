// import React, { useState } from "react";
// import {
//   Watch,
//   HeartPulse,
//   Cloud,
//   Brain,
//   ShieldCheck,
//   Smartphone,
//   Star,
//   CheckCircle,
//   AlertTriangle,
//   Headphones,
//   Moon,
//   Waves,
//   Battery,
//   Heart,
//   Activity,
// } from "lucide-react";
// import watchpatImg from "../../assets/images/product.png";
// import sleepImageRingImg from "../../assets/images/product2.png";
// import watchPat1 from "../../assets/images/watchPat1.jpg";
// import watchPat2 from "../../assets/images/watchPat2.jpg";
// import watchPat3 from "../../assets/images/watchPat3.jpg";
// import watchPat4 from "../../assets/images/watchPat4.jpg";
// import watchPat5 from "../../assets/images/watchPat5.jpg";
// import dreamS from "../../assets/images/dreamS.jpeg";
// import dreamS1 from "../../assets/images/dreamS1.jpg";
// import dreamS2 from "../../assets/images/dreamS2.jpg";
// import dreamS3 from "../../assets/images/dreamS3.jpeg";
// import dreamS4 from "../../assets/images/dreamS4.jpeg";
// import dreamS5 from "../../assets/images/dreamS5.jpeg";
// import dreamS6 from "../../assets/images/dreamS6.jpeg";
// import dreamS7 from "../../assets/images/dreamS7.jpeg";
// import { useParams, Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const products = {
//   watchpad: {
//     name: "WatchPAT®",
//     image: watchpatImg,
//     extraImages: [watchPat1, watchPat2, watchPat3, watchPat4, watchPat5], // replace with your tracker image
//     price: 179,
//     priceId: "price_1SOgzcFJmPJDzAR9zGm2ecHj",
//     heroColor: "from-green-50 via-blue-50 to-purple-50",
//     heroIcon: Watch,
//     description: `
//       The <strong>WatchPAT®</strong> is a next-generation wearable designed
//       to measure your blood oxygen (SpO₂) and heart rate with medical-grade precision.
//       Whether you're training, sleeping, or just living your day — it helps you
//       understand your body better and live healthier.
//     `,
//     metrics: [
//       {
//         icon: HeartPulse,
//         title: "Oxygen Saturation (SpO₂)",
//         desc: "Tracks oxygen levels in real-time.",
//       },
//       {
//         icon: Brain,
//         title: "Heart Rate",
//         desc: "Monitors pulse variations and stress indicators.",
//       },
//       {
//         icon: Cloud,
//         title: "Cloud Sync",
//         desc: "Automatically uploads health data to your profile.",
//       },
//       {
//         icon: ShieldCheck,
//         title: "Accurate Sensors",
//         desc: "Medical-grade precision for daily use.",
//       },
//       {
//         icon: Watch,
//         title: "Wear Comfort",
//         desc: "Ergonomic lightweight fit for 24/7 wear.",
//       },
//       {
//         icon: Star,
//         title: "7-Day Battery",
//         desc: "Long-lasting battery life with USB-C charging.",
//       },
//     ],
//     features: [
//       {
//         icon: Smartphone,
//         title: "App Integration",
//         desc: "View and analyze trends on the companion app.",
//       },
//       {
//         icon: ShieldCheck,
//         title: "Health Certified",
//         desc: "Meets international accuracy standards.",
//       },
//       {
//         icon: Watch,
//         title: "Smart Design",
//         desc: "Minimalist and water-resistant with OLED display.",
//       },
//       {
//         icon: Cloud,
//         title: "Auto Sync",
//         desc: "Stores all readings securely in the cloud.",
//       },
//       {
//         icon: Star,
//         title: "Rechargeable & Durable",
//         desc: "Built for everyday use with long-term reliability.",
//       },
//     ],
//     cautions: [
//       "⚠️ Not a substitute for medical diagnosis.",
//       "⚠️ Consult your doctor for irregular readings.",
//       "⚠️ Keep away from high humidity or heat.",
//     ],
//     benefits: [
//       "Athletes tracking oxygen & recovery",
//       "Individuals monitoring daily health trends",
//       "Sleep-conscious users tracking SpO₂ overnight",
//       "People seeking a minimal, all-day wearable",
//     ],
//     summary: [
//       ["Manufacturer", "WellTrack Technologies"],
//       ["Type", "Wearable Health Monitor"],
//       ["Primary Metrics", "SpO₂, Heart Rate, Sleep Data"],
//       ["Connectivity", "Bluetooth & Cloud Sync"],
//       ["Battery", "7 days continuous use"],
//       ["Water Resistance", "IP67 Rated"],
//       ["Warranty", "1 Year"],
//     ],
//     other: ["sleepImageRing", "philipsdreamstation"],
//   },
//   philipsdreamstation: {
//     name: "Philips DreamStation",
//     image: dreamS,
//     extraImages: [
//       dreamS1,
//       dreamS2,
//       dreamS3,
//       dreamS4,
//       dreamS5,
//       dreamS6,
//       dreamS7,
//     ],
//     price: 350,
//     heroColor: "from-blue-50 via-indigo-50 to-purple-50",
//     heroIcon: Headphones,
//     description: `
//     The <strong>Philips DreamStation</strong> is an advanced sleep therapy device
//     designed to improve sleep quality and support better breathing. With intelligent
//     algorithms, quiet operation, and comfort-focused design, it ensures restful nights
//     and effective therapy for sleep apnea users.
//   `,
//     metrics: [
//       {
//         icon: Cloud,
//         title: "Auto-Adjusting Pressure",
//         desc: "Continuously adapts air pressure for optimal comfort.",
//       },
//       {
//         icon: HeartPulse,
//         title: "Breathing Pattern Detection",
//         desc: "Analyzes and records your breathing cycles during sleep.",
//       },
//       {
//         icon: ShieldCheck,
//         title: "Leak Detection",
//         desc: "Monitors mask fit and air leakage in real-time.",
//       },
//       {
//         icon: Star,
//         title: "Quiet Performance",
//         desc: "Operates quietly, promoting uninterrupted sleep.",
//       },
//       {
//         icon: Brain,
//         title: "Smart Tracking",
//         desc: "Stores therapy data and syncs with mobile apps.",
//       },
//       {
//         icon: Battery,
//         title: "Power Efficient",
//         desc: "Energy-saving design for long overnight use.",
//       },
//     ],
//     features: [
//       {
//         icon: Smartphone,
//         title: "App Connectivity",
//         desc: "Syncs with the Philips DreamMapper app for detailed insights.",
//       },
//       {
//         icon: ShieldCheck,
//         title: "Safety Certified",
//         desc: "Meets global medical device standards.",
//       },
//       {
//         icon: Watch,
//         title: "User-Friendly Interface",
//         desc: "Simple display and intuitive controls.",
//       },
//       {
//         icon: Cloud,
//         title: "Cloud Data Backup",
//         desc: "Automatically uploads therapy records for review.",
//       },
//       {
//         icon: Star,
//         title: "Ergonomic Design",
//         desc: "Compact and lightweight with flexible tubing options.",
//       },
//     ],
//     cautions: [
//       "⚠️ Use only under medical supervision.",
//       "⚠️ Clean tubing and mask regularly to prevent blockages.",
//       "⚠️ Do not use near open flames or excessive heat.",
//     ],
//     benefits: [
//       "Individuals with sleep apnea",
//       "Users seeking quiet, automatic air pressure adjustment",
//       "Patients needing easy monitoring through mobile apps",
//       "Anyone prioritizing better and healthier sleep quality",
//     ],
//     summary: [
//       ["Manufacturer", "Philips Respironics"],
//       ["Type", "Sleep Therapy Device (CPAP)"],
//       ["Primary Function", "Air Pressure Regulation for Sleep Apnea"],
//       ["Connectivity", "Bluetooth & Cloud Sync via DreamMapper App"],
//       ["Noise Level", "Below 30 dB (Ultra Quiet)"],
//       ["Power", "100–240V AC Compatible"],
//       ["Warranty", "2 Years"],
//     ],
//     other: ["watchpad", "sleepImageRing"],
//   },

//   sleepImageRing: {
//     name: "SleepImage® Ring",
//     image: sleepImageRingImg,
//     extraImages: [sleepImageRingImg],
//     price: 199,
//     heroColor: "from-blue-50 via-indigo-50 to-purple-50",
//     heroIcon: Moon,
//     description: `
//     The <strong>SleepImage® Ring</strong> is an advanced medical-grade sleep monitoring device
//     that tracks your sleep stages, heart rate, oxygen saturation, and breathing patterns
//     throughout the night — all in a lightweight, comfortable wearable ring.
//   `,
//     metrics: [
//       {
//         icon: Moon,
//         title: "Sleep Quality Index",
//         desc: "Generates a Sleep Quality Score (SQI) using advanced sleep algorithms.",
//       },
//       {
//         icon: Heart,
//         title: "Heart Rate Tracking",
//         desc: "Monitors continuous heart rate during sleep.",
//       },
//       {
//         icon: Activity,
//         title: "Oxygen Saturation",
//         desc: "Tracks blood oxygen (SpO₂) levels for sleep apnea detection.",
//       },
//       {
//         icon: Waves,
//         title: "Breathing Analysis",
//         desc: "Identifies irregular breathing and sleep-disordered patterns.",
//       },
//       {
//         icon: Cloud,
//         title: "Data Sync",
//         desc: "Auto-syncs with the SleepImage® app for detailed sleep reports.",
//       },
//       {
//         icon: ShieldCheck,
//         title: "Clinically Validated",
//         desc: "FDA-cleared and validated for sleep study accuracy.",
//       },
//     ],
//     features: [
//       {
//         icon: Brain,
//         title: "AI Sleep Scoring",
//         desc: "Uses advanced AI to classify sleep stages and apnea events.",
//       },
//       {
//         icon: Smartphone,
//         title: "App Dashboard",
//         desc: "Access full analytics, trends, and reports via mobile app.",
//       },
//       {
//         icon: Watch,
//         title: "Comfortable Design",
//         desc: "Lightweight and soft for uninterrupted overnight wear.",
//       },
//       {
//         icon: Battery,
//         title: "Long Battery Life",
//         desc: "Lasts up to 3 nights on a single charge.",
//       },
//       {
//         icon: Star,
//         title: "Research-Grade Data",
//         desc: "Trusted by sleep labs and clinicians worldwide.",
//       },
//     ],
//     cautions: [
//       "⚠️ Not intended for continuous daytime use.",
//       "⚠️ Keep the sensor clean and dry for accurate readings.",
//       "⚠️ Consult a doctor if abnormal sleep data persists.",
//     ],
//     benefits: [
//       "Detects potential sleep apnea risk",
//       "Monitors sleep quality without bulky headgear",
//       "Helps users improve sleep habits through data insights",
//       "Provides clinical-level sleep tracking at home",
//     ],
//     summary: [
//       ["Manufacturer", "SleepImage® (MyCardio LLC)"],
//       ["Type", "Wearable Sleep Monitoring Ring"],
//       ["Primary Purpose", "Sleep Quality & Apnea Detection"],
//       ["Connectivity", "Bluetooth + Mobile App"],
//       ["Battery Life", "Up to 3 nights per charge"],
//       ["Charging", "Magnetic USB charger"],
//       ["Material", "Soft hypoallergenic medical-grade silicone"],
//     ],
//     other: ["watchpad", "philipsdreamstation"],
//   },
// };

// const ProductDetails = () => {
//   const { id } = useParams();
//   const product = products[id];
//   console.log(products);

//   const [mainImage, setMainImage] = useState(product ? product.image : "");
//   if (!product) {
//     return <h2 className="text-center mt-20 text-2xl">Product not found</h2>;
//   }

//   const allImages = [product.image, ...(product.extraImages || [])];
//   const HeroIcon = product.heroIcon;

//   const handleCheckout = async (priceId) => {
//     console.log("priceid", priceId);
    
//     const res = await fetch(
//       "http://localhost:8080/api/v1/stripe/create-checkout-session",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ priceId }),
//       }
//     );
//     const data = await res.json();
//     if (data.url) {
//       window.location.href = data.url; // redirect to Stripe checkout page
//     } else {
//       alert("Error starting checkout");
//     }
//   };

//   return (
//     <>
//       <div className="mt-top border"></div>
//       <Navbar />
//       <div className="bg-white min-h-screen border">
//         <section
//           className={`relative py-20 px-4 bg-gradient-to-br ${product.heroColor}`}
//         >
//           <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="flex items-center mb-6">
//                 <HeroIcon className="w-10 h-10 text-green-600 mr-4" />
//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
//                   {product.name}
//                 </h1>
//               </div>
//               <p
//                 className="text-xl text-gray-600 mb-8 leading-relaxed"
//                 dangerouslySetInnerHTML={{ __html: product.description }}
//               />
//               <div className="flex items-center gap-4">
//                 <p className="text-3xl font-bold text-green-700">
//                   ${product.price}
//                 </p>
//                 <button
//                   onClick={() => handleCheckout(product.priceId)}
//                   className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>

//             <div className="relative">
//               <img
//                 src={mainImage}
//                 alt={product.name}
//                 className="w-full rounded-2xl shadow-2xl mb-6 transition-transform duration-300 hover:scale-105"
//               />

//               {product.extraImages && product.extraImages.length > 0 && (
//                 <div className="flex gap-4 flex-wrap">
//                   {allImages.map((img, index) => (
//                     <img
//                       key={index}
//                       src={img}
//                       alt={`Thumbnail ${index + 1}`}
//                       onClick={() => setMainImage(img)}
//                       className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition-all duration-200 ${
//                         mainImage === img
//                           ? "border-green-600 scale-105"
//                           : "border-gray-300 hover:border-green-400"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </section>

//         <section className="py-20 px-4">
//           <div className="max-w-6xl mx-auto text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               What It Measures
//             </h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               {product.name} monitors key indicators to improve your daily
//               health and wellbeing.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {product.metrics.map((m, i) => (
//               <div
//                 key={i}
//                 className="p-6 bg-white rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all"
//               >
//                 <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
//                   <m.icon className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2 text-gray-800">
//                   {m.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{m.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
//           <div className="max-w-6xl mx-auto text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Key Features
//             </h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               Discover what makes {product.name} stand out.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {product.features.map((f, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-green-100 transition-transform hover:-translate-y-2"
//               >
//                 <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
//                   <f.icon className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                   {f.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="py-20 px-4">
//           <div className="max-w-5xl mx-auto text-center">
//             <h2 className="text-4xl font-bold text-gray-800 mb-6">
//               Things to Keep in Mind
//             </h2>
//             <div className="bg-white rounded-2xl shadow-xl p-8 border border-yellow-100">
//               <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
//                 <AlertTriangle className="w-12 h-12 text-yellow-500 flex-shrink-0" />
//                 <ul className="text-left space-y-3 text-gray-700">
//                   {product.cautions.map((c, i) => (
//                     <li key={i}>{c}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
//           <div className="max-w-5xl mx-auto text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Who Can Benefit?
//             </h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               {product.name} is perfect for those who value comfort, health, and
//               insight.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {product.benefits.map((b, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-2xl transition-transform hover:-translate-y-2"
//               >
//                 <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
//                 <p className="text-gray-700 font-medium">{b}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="py-20 px-4">
//           <div className="max-w-4xl mx-auto text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Summary</h2>
//           </div>

//           <div className="overflow-x-auto max-w-4xl mx-auto">
//             <table className="w-full border border-green-100 bg-white rounded-2xl shadow-lg">
//               <tbody>
//                 {product.summary.map(([k, v], i) => (
//                   <tr
//                     key={i}
//                     className={i % 2 === 0 ? "bg-green-50/50" : "bg-white"}
//                   >
//                     <td className="px-6 py-4 font-semibold text-gray-800 w-1/3">
//                       {k}
//                     </td>
//                     <td className="px-6 py-4 text-gray-700">{v}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {product.other && product.other.length > 0 && (
//           <section className="py-20 px-4 bg-gray-50">
//             <div className="max-w-6xl mx-auto text-center">
//               <h2 className="text-3xl font-bold mb-10">We Also Sell</h2>

//               <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
//                 {product.other.map((otherId) => {
//                   const otherProduct = products[otherId];
//                   if (!otherProduct) return null;

//                   return (
//                     <Link
//                       key={otherId}
//                       to={`/products/${otherId}/details`}
//                       className="inline-block bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100"
//                     >
//                       <img
//                         src={otherProduct.image}
//                         alt={otherProduct.name}
//                         className="w-56 h-56 object-cover mx-auto rounded-xl mb-4"
//                       />
//                       <h3 className="text-xl font-semibold mb-2 text-gray-800">
//                         {otherProduct.name}
//                       </h3>
//                       <p className="text-gray-600 font-medium">
//                         ${otherProduct.price}
//                       </p>
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>
//           </section>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ProductDetails;

import React, { useState } from "react";
import {
  Watch,
  HeartPulse,
  Cloud,
  Brain,
  ShieldCheck,
  Star,
  CheckCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import watchpatImg from "../../assets/images/product.png";
import sleepImageRingImg from "../../assets/images/product2.png";
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
import Navbar from "./Navbar";
import Footer from "./Footer";

const products = {
  watchpad: {
    name: "WatchPAT®",
    image: watchpatImg,
    extraImages: [watchPat1, watchPat2, watchPat3, watchPat4, watchPat5],
    price: 179,
    priceId: "price_1SOgzcFJmPJDzAR9zGm2ecHj",
    rating: 4.8,
    reviewCount: 342,
    inStock: true,
    sku: "WP-2024-001",
    description: "The WatchPAT® is a next-generation wearable designed to measure your blood oxygen (SpO₂) and heart rate with medical-grade precision. Whether you're training, sleeping, or just living your day — it helps you understand your body better and live healthier.",
    longDescription: `Experience the future of health monitoring with WatchPAT®. This advanced wearable device combines cutting-edge sensor technology with elegant design to deliver medical-grade health insights right on your wrist.

Whether you're an athlete optimizing performance, a health-conscious individual tracking daily wellness, or someone monitoring specific health metrics, WatchPAT® provides the accuracy and convenience you need.

With continuous SpO₂ monitoring, heart rate tracking, and intelligent cloud synchronization, you'll have comprehensive health data at your fingertips. The device seamlessly integrates with your smartphone, providing detailed analytics and personalized insights through our companion app.`,
    metrics: [
      {
        icon: HeartPulse,
        title: "Oxygen Saturation (SpO₂)",
        desc: "Tracks oxygen levels in real-time with medical-grade accuracy.",
      },
      {
        icon: Brain,
        title: "Heart Rate Monitoring",
        desc: "Monitors pulse variations and stress indicators throughout the day.",
      },
      {
        icon: Cloud,
        title: "Cloud Sync",
        desc: "Automatically uploads health data to your secure profile.",
      },
      {
        icon: ShieldCheck,
        title: "Accurate Sensors",
        desc: "Medical-grade precision validated for daily use.",
      },
      {
        icon: Watch,
        title: "Comfortable Wear",
        desc: "Ergonomic lightweight fit designed for 24/7 wear.",
      },
      {
        icon: Star,
        title: "7-Day Battery",
        desc: "Long-lasting battery life with convenient USB-C charging.",
      },
    ],
    specifications: [
      ["Manufacturer", "WellTrack Technologies"],
      ["Model Number", "WP-2024-001"],
      ["Type", "Wearable Health Monitor"],
      ["Primary Metrics", "SpO₂, Heart Rate, Sleep Data"],
      ["Display", "1.4\" OLED Touchscreen"],
      ["Connectivity", "Bluetooth 5.0 & Cloud Sync"],
      ["Battery Life", "7 days continuous use"],
      ["Charging", "USB-C Fast Charging"],
      ["Water Resistance", "IP67 Rated (1m for 30 minutes)"],
      ["Compatibility", "iOS 12+ / Android 8+"],
      ["Sensors", "Optical HR, SpO₂, Accelerometer"],
      ["Weight", "38g"],
      ["Warranty", "1 Year Limited Warranty"],
    ],
    reviews: [
      {
        author: "Sarah M.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Absolutely love this device! The accuracy is impressive and the app is very intuitive. Battery life is exactly as advertised.",
      },
      {
        author: "John D.",
        rating: 4,
        date: "1 month ago",
        comment: "Great product overall. The SpO₂ readings have been very helpful for my training. Only minor issue is the strap could be slightly more comfortable.",
      },
      {
        author: "Emily R.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Perfect for monitoring my health metrics. The cloud sync feature is seamless and I love the detailed reports in the app.",
      },
    ],
    other: ["philipsdreamstation", "sleepImageRing"],
  },
  philipsdreamstation: {
    name: "Philips DreamStation",
    image: dreamS, 
    extraImages: [
      dreamS1,
      dreamS2,
      dreamS3,
      dreamS4,
      dreamS5,
      dreamS6,
      dreamS7,
    ],
    price: 350,
    priceId: "price_dreamstation",
    rating: 4.6,
    reviewCount: 218,
    inStock: true,
    sku: "PDS-2024-002",
    description: "The Philips DreamStation is an advanced sleep therapy device designed to improve sleep quality and support better breathing.",
    longDescription: "Experience better sleep with Philips DreamStation, the advanced CPAP device designed for comfort and effectiveness.",
    metrics: [],
    specifications: [
      ["Manufacturer", "Philips Respironics"],
      ["Type", "Sleep Therapy Device (CPAP)"],
    ],
    reviews: [],
    other: ["watchpad", "sleepImageRing"],
  },
  sleepImageRing: {
    name: "SleepImage® Ring",
    image: sleepImageRingImg,
    extraImages: [sleepImageRingImg],
    price: 199,
    priceId: "price_sleepring",
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    sku: "SIR-2024-003",
    description: "The SleepImage® Ring is an advanced medical-grade sleep monitoring device that tracks your sleep stages.",
    longDescription: "Monitor your sleep with medical-grade precision using the SleepImage® Ring.",
    metrics: [],
    specifications: [
      ["Manufacturer", "SleepImage® (MyCardio LLC)"],
      ["Type", "Wearable Sleep Monitoring Ring"],
    ],
    reviews: [],
    other: ["watchpad", "philipsdreamstation"],
  },
};

const ProductDetails = () => {
  const id = "watchpad";
  const product = products[id];
  
  const [mainImage, setMainImage] = useState(product ? product.image : "");
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState("description");

  if (!product) {
    return <h2 className="text-center mt-20 text-2xl">Product not found</h2>;
  }

  const allImages = [product.image, ...(product.extraImages || [])];

  const handleCheckout = async (priceId) => {
    console.log("Checkout with quantity:", quantity, "priceId:", priceId);
    alert(`Proceeding to checkout with ${quantity} item(s)`);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (<>
<Navbar/>
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="hover:text-green-600 cursor-pointer">Home</span>
            <span>/</span>
            <span className="hover:text-green-600 cursor-pointer">Products</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-sm p-8">
          {/* Left Column - Images */}
          <div>
            {/* Main Image */}
            <div className="mb-4 bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-[500px] object-contain"
              />
            </div>

            {/* Thumbnail Images */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {allImages.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setMainImage(img)}
                    className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                      mainImage === img
                        ? "border-green-600 shadow-md"
                        : "border-gray-200 hover:border-green-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              {product.name}
            </h1>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500">USD</span>
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">In Stock</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-medium">Out of Stock</span>
                </div>
              )}
              <p className="text-sm text-gray-600 mt-1">SKU: {product.sku}</p>
            </div>

            {/* Short Description */}
            <div className="mb-6 text-gray-700 leading-relaxed">
              <p>{product.description}</p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button
                    onClick={decrementQuantity}
                    className="p-3 hover:bg-gray-100 transition disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-2 font-semibold min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="p-3 hover:bg-gray-100 transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Buy Now Button */}
            <button
              onClick={() => handleCheckout(product.priceId)}
              className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl mb-4"
            >
              Buy Now - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="text-xs font-medium text-gray-700">Free Shipping</p>
                <p className="text-xs text-gray-500">Orders over $100</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="text-xs font-medium text-gray-700">1 Year Warranty</p>
                <p className="text-xs text-gray-500">Full coverage</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="text-xs font-medium text-gray-700">30-Day Returns</p>
                <p className="text-xs text-gray-500">Money back</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Description Accordion */}
          <div className="border-b">
            <button
              onClick={() => toggleAccordion("description")}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Product Description
              </h3>
              {activeAccordion === "description" ? (
                <ChevronUp className="w-6 h-6 text-gray-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>
            {activeAccordion === "description" && (
              <div className="px-6 pb-6">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {product.longDescription}
                </div>
              </div>
            )}
          </div>

          {/* Specifications Accordion */}
          <div className="border-b">
            <button
              onClick={() => toggleAccordion("specifications")}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Specifications
              </h3>
              {activeAccordion === "specifications" ? (
                <ChevronUp className="w-6 h-6 text-gray-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>
            {activeAccordion === "specifications" && (
              <div className="px-6 pb-6">
                <table className="w-full">
                  <tbody>
                    {product.specifications.map(([key, value], i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="px-4 py-3 font-medium text-gray-700 w-1/3">
                          {key}
                        </td>
                        <td className="px-4 py-3 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Features Accordion */}
          {product.metrics.length > 0 && (
            <div className="border-b">
              <button
                onClick={() => toggleAccordion("features")}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Key Features
                </h3>
                {activeAccordion === "features" ? (
                  <ChevronUp className="w-6 h-6 text-gray-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                )}
              </button>
              {activeAccordion === "features" && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {product.metrics.map((metric, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <metric.icon className="w-6 h-6 text-green-600" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {metric.title}
                          </h4>
                          <p className="text-sm text-gray-600">{metric.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Reviews Accordion */}
          {product.reviews.length > 0 && (
            <div>
              <button
                onClick={() => toggleAccordion("reviews")}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Customer Reviews ({product.reviewCount})
                </h3>
                {activeAccordion === "reviews" ? (
                  <ChevronUp className="w-6 h-6 text-gray-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                )}
              </button>
              {activeAccordion === "reviews" && (
                <div className="px-6 pb-6">
                  <div className="space-y-6">
                    {product.reviews.map((review, i) => (
                      <div key={i} className="border-b last:border-0 pb-6 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-gray-900">
                              {review.author}
                            </span>
                            <div className="flex">
                              {[...Array(5)].map((_, j) => (
                                <Star
                                  key={j}
                                  className={`w-4 h-4 ${
                                    j < review.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Related Products */}
        {product.other && product.other.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.other.map((otherId) => {
                const otherProduct = products[otherId];
                if (!otherProduct) return null;

                return (
                  <div
                    key={otherId}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden group cursor-pointer"
                  >
                    <div className="aspect-square bg-gray-50 overflow-hidden">
                      <img
                        src={otherProduct.image}
                        alt={otherProduct.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition">
                        {otherProduct.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(otherProduct.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          ({otherProduct.reviewCount})
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">
                        ${otherProduct.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  <Footer/>
  </>
  );
};

export default ProductDetails;