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
  Info,
  Wind,
  Thermometer,
  Smartphone,
  Volume2,
  Zap,
  Package,
  Wifi,
  Heart,
  Droplets,
  Moon,
  Sun,
  Award,
  Home,
  Plane,
  RotateCw,
  Eye,
  Users,
  Sparkles,
  MoveUp,
  Minimize,
  Glasses,
  Box,
} from "lucide-react";
import watchpatImg from "../../assets/images/product.png";
import sleepImageRingImg from "../../assets/images/product2.png";
import watchPat1 from "../../assets/images/watchPat1.jpg";
import watchPat2 from "../../assets/images/watchPat2.jpg";
import watchPat3 from "../../assets/images/watchPat3.jpg";
import watchPat4 from "../../assets/images/watchPat4.jpg";
// import watchPat5 from "../../assets/images/watchPat5.jpg";
import dreamS from "../../assets/images/dreamS.jpeg";
import dreamS1 from "../../assets/images/dreamS1.jpg";
import dreamS2 from "../../assets/images/dreamS2.jpg";
import dreamS3 from "../../assets/images/dreamS3.jpeg";
import dreamS4 from "../../assets/images/dreamS4.jpeg";
import dreamS5 from "../../assets/images/dreamS5.jpeg";
import dreamS6 from "../../assets/images/dreamS6.jpeg";
import dreamS7 from "../../assets/images/dreamS7.jpeg";
import dreamWearFullFaceImg from "../../assets/images/full-mask1.webp";
import dreamWearPillowsImg from "../../assets/images/DWSilicone.jpg";
import dreamWispImg from "../../assets/images/dreamWisp.jpg";
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
import dreamWearMaskImg from "../../assets/images/DWArms.jpg";

import air11cpapP1 from "../../assets/images/air11cpapP1.webp";
import air11cpapP2 from "../../assets/images/air11cpapP2.webp";
import a10cp1 from "../../assets/images/10cp1.webp";
import a10cp2 from "../../assets/images/10cp2.avif";
import a10cp3 from "../../assets/images/10cp3.avif";
import a11a1 from "../../assets/images/11a1.webp";
import a11a2 from "../../assets/images/11a2.webp";
import a11a3 from "../../assets/images/11a3.avif";
import her2 from "../../assets/images/her1.avif";
import her1 from "../../assets/images/her2.avif";
import her3 from "../../assets/images/her3.avif";
import s101 from "../../assets/images/s101.avif";
import s102 from "../../assets/images/s102.avif";
import s103 from "../../assets/images/s103.avif";
import s104 from "../../assets/images/s102.webp";
import a11ih1 from "../../assets/images/11ih1.webp";
import a11ih2 from "../../assets/images/11ih2.webp";
import a11ih3 from "../../assets/images/11ih3.webp";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate, useParams } from "react-router-dom";

const products = {
  watchpat: {
    id: "watchpat",
    name: "WatchPAT®",
    image: watchpatImg,
    extraImages: [watchPat1, watchPat2, watchPat3, watchPat4],
    price: 179,
    priceId: "price_1SOgzcFJmPJDzAR9zGm2ecHj",
    rating: 5,
    reviewCount: 342,
    inStock: true,
    sku: "WP-2024-001",
    description:
      "The WatchPAT® is a next-generation wearable designed to measure your blood oxygen (SpO₂) and heart rate with medical-grade precision. Whether you're training, sleeping, or just living your day — it helps you understand your body better and live healthier.",
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
      ["Display", '1.4" OLED Touchscreen'],
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
        comment:
          "Absolutely love this device! The accuracy is impressive and the app is very intuitive. Battery life is exactly as advertised.",
      },
      {
        author: "John D.",
        rating: 4,
        date: "1 month ago",
        comment:
          "Great product overall. The SpO₂ readings have been very helpful for my training. Only minor issue is the strap could be slightly more comfortable.",
      },
      {
        author: "Emily R.",
        rating: 5,
        date: "3 weeks ago",
        comment:
          "Perfect for monitoring my health metrics. The cloud sync feature is seamless and I love the detailed reports in the app.",
      },
    ],
    other: ["sleepimagering"],
  },
  philipsdreamstation: {
    id: "philipsdreamstation",
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
    rating: 5,
    reviewCount: 218,
    inStock: true,
    sku: "PDS-2024-002",
    description:
      "The Philips DreamStation is an advanced sleep therapy device designed to improve sleep quality and support better breathing.",
    longDescription:
      "Experience better sleep with Philips DreamStation, the advanced CPAP device designed for comfort and effectiveness.",
    metrics: [],
    specifications: [
      ["Manufacturer", "Philips Respironics"],
      ["Type", "Sleep Therapy Device (CPAP)"],
    ],
    reviews: [],
    other: [],
  },
  sleepimagering: {
    id: "sleepimagering",
    name: "SleepImage® Ring",
    image: sleepImageRingImg,
    extraImages: [sleepImageRingImg],
    price: 199,
    priceId: "price_sleepring",
    rating: 5,
    reviewCount: 156,
    inStock: true,
    sku: "SIR-2024-003",
    description:
      "The SleepImage® Ring is an advanced medical-grade sleep monitoring device that tracks your sleep stages.",
    longDescription:
      "Monitor your sleep with medical-grade precision using the SleepImage® Ring.",
    metrics: [],
    specifications: [
      ["Manufacturer", "SleepImage® (MyCardio LLC)"],
      ["Type", "Wearable Sleep Monitoring Ring"],
    ],
    reviews: [],
    other: ["watchpat"],
  },
  dreamWisp: {
    id: "dreamWisp",
    name: "DreamWisp",
    image: dreamWispImg,
    extraImages: [],
    price: 120,
    priceId: "",
    rating: null,
    reviewCount: 2,
    inStock: false, // page shows backordered / sold out
    sku: "1137916",
    description:
      "Minimal-contact nasal mask combining top-of-head tube routing with a comfortable cushion and minimal headgear.",
    longDescription:
      "DreamWisp blends the DreamWear top-of-head tubing architecture with a minimal-contact nasal cushion for comfortable sleep in any position. Magnetic clips and a small headgear footprint make fitting and removal simple. FitPack cushion sizing helps achieve a reliable seal.",
    metrics: [
      {
        icon: "TopOfHeadTube",
        title: "Top-of-Head Tube",
        desc: "Hoses route from the top of the head to allow freedom of movement.",
      },
      {
        icon: "MinimalHeadgear",
        title: "Minimal Headgear",
        desc: "Low-profile headgear to reduce facial contact and pressure.",
      },
      {
        icon: "MagneticClips",
        title: "Magnetic Clips",
        desc: "Quick-connect magnetic clips for easy fitting.",
      },
      {
        icon: "FitPack",
        title: "FitPack Cushions",
        desc: "Multiple cushion sizes included for better fit.",
      },
      {
        icon: "Lightweight",
        title: "Lightweight Design",
        desc: "Compact and comfortable for nightly use.",
      },
    ],
    specifications: [
      ["Manufacturer", "Philips Respironics"],
      ["Product Type", "Nasal Mask (minimal contact)"],
      ["SKU", "1137916"],
      ["Country", "Canada"],
      ["Warranty", "Varies (check vendor)"],
    ],
    reviews: [
      {
        author: "Sarah M.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Comfortable and stays in place. Love the minimal contact.",
      },
      {
        author: "John D.",
        rating: 5,
        date: "1 month ago",
        comment: "Great fit, easy to assemble and quiet.",
      },
      {
        author: "Emily R.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Better than previous nasal masks I've tried.",
      },
      {
        author: "Mark L.",
        rating: 5,
        date: "1 month ago",
        comment: "No pressure on my nose bridge — very comfy.",
      },
      {
        author: "Nadia P.",
        rating: 5,
        date: "3 days ago",
        comment: "Good seal and easy to change the cushion sizes.",
      },
    ],
    other: [],
  },

  dreamWearFullFace: {
    id: "dreamWearFullFace",
    name: "DreamWear Full Face Mask",
    image: dreamWearFullFaceImg,
    extraImages: [],
    price: 178,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description:
      "Minimal-contact full face mask with top-of-head tube routing and a flexible frame for comfort in any sleep position.",
    longDescription:
      "The DreamWear Full Face mask routes air through the top of the head so tubing doesn't lie across the face. Its flexible frame and under-nose/full-mouth cushion reduce pressure on the bridge of the nose and allow multiple cushion options (full face, nasal, or pillow).",
    metrics: [
      {
        icon: "TopOfHeadTube",
        title: "Top-of-Head Tube",
        desc: "Keeps tubing off the face for improved freedom of movement.",
      },
      {
        icon: "MinimalContact",
        title: "Minimal Contact Cushion",
        desc: "Rest-under-nose/full-face cushion reduces red marks and pressure.",
      },
      {
        icon: "FlexibleFrame",
        title: "Flexible Frame",
        desc: "Conforms to facial contours for better comfort.",
      },
      {
        icon: "MultiCushion",
        title: "Three Cushion Options",
        desc: "Works with full-face, nasal, or pillow cushions.",
      },
      {
        icon: "EasyFit",
        title: "Easy Fit",
        desc: "Simple headgear and magnetic clip design.",
      },
    ],
    specifications: [
      ["Manufacturer", "Philips Respironics"],
      ["Type", "Full Face Mask"],
      ["Cushion Options", "Full Face / Nasal / Pillow"],
      ["Tube Position", "Top-of-head"],
    ],
    reviews: [
      {
        author: "Olivia K.",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "Finally a full-face mask that doesn't press on my nose bridge.",
      },
      {
        author: "Ahmed S.",
        rating: 5,
        date: "1 month ago",
        comment: "Comfortable for side sleeping — tube on top helps a lot.",
      },
      {
        author: "Priya M.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Good seal and easy to fit.",
      },
      {
        author: "Liam T.",
        rating: 5,
        date: "1 month ago",
        comment: "Less claustrophobic than other full-face masks.",
      },
      {
        author: "Karen B.",
        rating: 5,
        date: "4 days ago",
        comment: "Excellent design and stable through the night.",
      },
    ],
    other: [],
  },

  dreamStationBiPAPAutoPackage: {
    id: "dreamStationBiPAPAutoPackage",
    name: "DreamStation BiPAP AUTO Package (includes mask, heated tubing, filters, wipes)",
    image: dreamStation2AutoImg,
    extraImages: [],
    price: 2360,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description:
      "Complete DreamStation BiPAP AUTO therapy package — machine with humidifier, heated tubing, mask, spare filters and wipes.",
    longDescription:
      "The DreamStation BiPAP AUTO package provides a complete setup for bilevel therapy with integrated humidification and heated tube compatibility. Includes a mask of your choice plus consumables so users are ready to start therapy immediately.",
    metrics: [
      {
        icon: "BiLevel",
        title: "Bi-Level Auto Technology",
        desc: "Delivers IPAP and EPAP automatically to match breathing needs.",
      },
      {
        icon: "Humidifier",
        title: "Humidifier Included",
        desc: "Integrated humidifier for comfort.",
      },
      {
        icon: "HeatedTubing",
        title: "Heated Tubing",
        desc: "Reduces dryness and rainout for better comfort.",
      },
      {
        icon: "Connectivity",
        title: "Bluetooth/Modem",
        desc: "Connectivity for data sharing and therapist support.",
      },
      {
        icon: "Package",
        title: "Complete Kit",
        desc: "Comes with filters and wipes for immediate use.",
      },
    ],
    specifications: [
      ["Manufacturer", "Philips Respironics"],
      ["Type", "Auto BiPAP Machine (package)"],
      [
        "Includes",
        "Machine, humidifier, heated tubing, mask choice, filters, wipes",
      ],
    ],
    reviews: [
      {
        author: "Evan H.",
        rating: 5,
        date: "1 month ago",
        comment: "Everything arrived ready to use — great package.",
      },
      {
        author: "Monica R.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Works great and the heated tubing is a game-changer.",
      },
      {
        author: "Derek P.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Excellent customer service and fast setup.",
      },
      {
        author: "Fiona L.",
        rating: 5,
        date: "1 week ago",
        comment: "Comfortable therapy and easy to operate.",
      },
      {
        author: "Isaac G.",
        rating: 5,
        date: "3 days ago",
        comment: "Solid, reliable machine with helpful features.",
      },
    ],
    other: [],
  },

  dreamStationBiPAPHumidifierIncl: {
    id: "dreamStationBiPAPHumidifierIncl",
    name: "DreamStation BiPAP AUTO (Humidifier Included)",
    image: dreamStationHumidifierImg,
    extraImages: [],
    price: 215,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description:
      "DreamStation BiPAP AUTO with built-in humidifier — comfortable bi-level therapy with humidification.",
    longDescription:
      "Designed to deliver bilevel therapy with integrated humidification and an intuitive user interface, the DreamStation BiPAP AUTO helps patients achieve comfortable therapy while allowing remote monitoring and management.",
    metrics: [
      {
        icon: "Humidifier",
        title: "Integrated Humidifier",
        desc: "Built-in humidifier reduces dryness and improves comfort.",
      },
      {
        icon: "AutoBIPAP",
        title: "Auto BiPAP",
        desc: "Automatically adjusts pressure delivery.",
      },
      {
        icon: "UserInterface",
        title: "User-friendly Interface",
        desc: "Simple menus and helpful cues make setup easy.",
      },
      {
        icon: "Compatibility",
        title: "Mask Compatibility",
        desc: "Works with most CPAP/BiPAP masks.",
      },
      {
        icon: "Accessories",
        title: "Accessories Included",
        desc: "Optional bundles include filters, wipes, and tubing.",
      },
    ],
    specifications: [
      ["Manufacturer", "Philips Respironics"],
      ["Type", "Auto BiPAP with humidifier"],
    ],
    reviews: [
      {
        author: "Paulina C.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Humidifier makes nights much more comfortable.",
      },
      {
        author: "Carlos N.",
        rating: 5,
        date: "1 month ago",
        comment: "Easy to set up and very quiet.",
      },
      {
        author: "Rita S.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Better sleep quality since switching.",
      },
      {
        author: "Tom W.",
        rating: 5,
        date: "5 days ago",
        comment: "Excellent support from the vendor.",
      },
      {
        author: "Hannah Z.",
        rating: 5,
        date: "3 days ago",
        comment: "Feels premium and durable.",
      },
    ],
    other: [],
  },

  dreamStationBiPAPASV: {
    id: "dreamStationBiPAPASV",
    name: "DreamStation BiPAP ASV",
    image: dreamStationASVImg,
    extraImages: [],
    price: 4995,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description:
      "ASV (Adaptive Servo-Ventilation) therapy device from the DreamStation family — for central sleep apnea and complex breathing disorders.",
    longDescription:
      "The DreamStation BiPAP ASV device is designed to provide advanced therapy for central and complex sleep-disordered breathing by adapting pressure support breath-by-breath.",
    metrics: [
      {
        icon: "ASV",
        title: "Adaptive Servo-Ventilation",
        desc: "Breath-by-breath pressure support adapts to central events.",
      },
      {
        icon: "Comfort",
        title: "Comfort Settings",
        desc: "Advanced comfort algorithms to improve adherence.",
      },
      {
        icon: "Monitoring",
        title: "Therapy Monitoring",
        desc: "Connectivity and reporting for clinician oversight.",
      },
      {
        icon: "Humidifier",
        title: "Humidifier Compatible",
        desc: "Works with external or integrated humidifiers.",
      },
      {
        icon: "Safety",
        title: "Safety Features",
        desc: "Built-in safeguards and alarms as required by therapy.",
      },
    ],
    specifications: [
      ["Manufacturer", "Philips Respironics"],
      ["Type", "ASV therapy device (BiPAP family)"],
    ],
    reviews: [
      {
        author: "Samantha Y.",
        rating: 5,
        date: "3 weeks ago",
        comment:
          "Specialized therapy for my central apneas and very effective.",
      },
      {
        author: "Greg M.",
        rating: 5,
        date: "1 month ago",
        comment: "Clinically precise and reliable.",
      },
      {
        author: "Nora V.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Helps stabilize breathing pattern overnight.",
      },
      {
        author: "Irfan A.",
        rating: 5,
        date: "5 days ago",
        comment: "Good clinician support and device logs.",
      },
      {
        author: "Marta K.",
        rating: 5,
        date: "2 days ago",
        comment: "Solid build quality and effective therapy.",
      },
    ],
    other: [],
  },

  dreamWearSiliconePillowsFitpack: {
    id: "dreamWearSiliconePillowsFitpack",
    name: "DreamWear Silicone Pillows FitPack",
    image: dreamWearPillowsImg,
    extraImages: [],
    price: 120,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description:
      "FitPack of silicone replacement pillows for DreamWear — multiple sizes to help you find the right seal.",
    longDescription:
      "Multiple silicone pillow sizes are included so users can try different cushions to achieve optimal comfort and seal. Ideal as a replacement or spare set.",
    metrics: [
      {
        icon: "Fit",
        title: "Multiple Sizes",
        desc: "Includes small/medium/large pillow options.",
      },
      {
        icon: "Material",
        title: "Silicone Cushions",
        desc: "Comfortable, soft silicone for minimal contact.",
      },
      {
        icon: "Compatibility",
        title: "DreamWear Compatible",
        desc: "Fits DreamWear mask frames and headgear.",
      },
      {
        icon: "EasySwap",
        title: "Easy to Replace",
        desc: "Swap cushions quickly to test fit.",
      },
      {
        icon: "Hygiene",
        title: "Replaceable",
        desc: "Keeps seal performance consistent over time.",
      },
    ],
    specifications: [
      ["Manufacturer", "Philips Respironics"],
      ["Type", "Replacement cushions (FitPack)"],
    ],
    reviews: [
      {
        author: "Gina O.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Good variety and comfortable cushions.",
      },
      {
        author: "Ben R.",
        rating: 5,
        date: "1 month ago",
        comment: "FitPack made it easy to find the right size.",
      },
      {
        author: "Lucy F.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Soft and durable cushions.",
      },
      {
        author: "Omar H.",
        rating: 5,
        date: "6 days ago",
        comment: "Seals perfectly after swapping sizes.",
      },
      {
        author: "Zoe P.",
        rating: 5,
        date: "3 days ago",
        comment: "Quality silicone and longer-lasting.",
      },
    ],
    other: [],
  },

  dreamWearCPAPMask: {
    id: "dreamWearCPAPMask",
    name: "DreamWear Under-the-Nose CPAP Mask",
    image: dreamWearMaskImg,
    extraImages: [],
    price: 178,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description:
      "Under-the-nose (nasal) DreamWear mask design for minimal contact and improved comfort.",
    longDescription:
      "The DreamWear under-the-nose mask positions the cushion under the nostrils to reduce contact on the nose bridge and provide a clear field of vision. Top-of-head tubing keeps the hose out of the way.",
    metrics: [
      {
        icon: "UnderNose",
        title: "Under-the-Nose Cushion",
        desc: "Reduced pressure on the nose bridge while maintaining a strong seal.",
      },
      {
        icon: "TopTube",
        title: "Top-of-Head Tube",
        desc: "Routes tubing away from the face for comfort.",
      },
      {
        icon: "Fit",
        title: "Multiple Cushion Sizes",
        desc: "FitPack or individual cushions to find the right size.",
      },
      {
        icon: "Lightweight",
        title: "Lightweight",
        desc: "Designed for nightly wear.",
      },
      {
        icon: "EasyCare",
        title: "Easy to Clean",
        desc: "Simple disassembly for regular cleaning.",
      },
    ],
    specifications: [
      ["Manufacturer", "Philips Respironics"],
      ["Type", "Nasal / Under-the-nose Mask"],
    ],
    reviews: [
      {
        author: "Ayesha T.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Lightweight and comfortable.",
      },
      {
        author: "Ryan J.",
        rating: 5,
        date: "1 month ago",
        comment: "No more red marks on my nose.",
      },
      {
        author: "Sandra K.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Great for side sleepers.",
      },
      {
        author: "Vikram P.",
        rating: 5,
        date: "1 week ago",
        comment: "Good seal and easy to fit.",
      },
      {
        author: "Helena R.",
        rating: 5,
        date: "2 days ago",
        comment: "Very low profile and comfortable.",
      },
    ],
    other: [],
  },

  dreamStation2AutoPackage: {
    id: "dreamStation2AutoPackage",
    name: "DreamStation 2 Auto Package (includes interface, heated tubing, filters, wipes)",
    image: dreamStation2AutoImg,
    extraImages: [],
    price: 1295,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description:
      "DreamStation 2 Auto CPAP package with interface, heated tubing, consumables and accessories for easy startup.",
    longDescription:
      "DreamStation 2 Auto is a next-gen auto-adjusting CPAP with color touchscreen, integrated humidifier support, heated tubing compatibility and patient-friendly features to support therapy adherence.",
    metrics: [
      {
        icon: "AutoCPAP",
        title: "Auto CPAP",
        desc: "Automatically adjusts pressure to patient needs.",
      },
      {
        icon: "Touchscreen",
        title: "Color Touchscreen",
        desc: "User-friendly controls and menus.",
      },
      {
        icon: "HeatedTubing",
        title: "Heated Tubing compatible",
        desc: "Compatibility with heated tubing to improve comfort.",
      },
      {
        icon: "Humidifier",
        title: "Humidifier support",
        desc: "Integrated or attachable humidifier options.",
      },
      {
        icon: "Connectivity",
        title: "Connectivity",
        desc: "Bluetooth or modem options for remote data.",
      },
    ],
    specifications: [
      ["Manufacturer", "Philips Respironics"],
      ["Type", "Auto CPAP (DreamStation 2 family)"],
    ],
    reviews: [
      {
        author: "Noor E.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Very intuitive interface and comfortable therapy.",
      },
      {
        author: "Kyle S.",
        rating: 5,
        date: "1 month ago",
        comment: "Quiet and reliable machine.",
      },
      {
        author: "Mei L.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Great humidifier performance.",
      },
      {
        author: "Rashid N.",
        rating: 5,
        date: "5 days ago",
        comment: "Excellent customer support from the vendor.",
      },
      {
        author: "Diana A.",
        rating: 5,
        date: "2 days ago",
        comment: "Stable therapy and easy to travel with.",
      },
    ],
    other: [],
  },

  dreamStation2ReSupplyBundle: {
    id: "dreamStation2ReSupplyBundle",
    name: "DreamStation 2 Re-Supply Bundle",
    image: dreamStation2ResupplyImg,
    extraImages: [],
    price: 115,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description:
      "Consumables and replacement parts bundle for DreamStation 2 — filters, mask wipes, water chambers, and more.",
    longDescription:
      "Keep your DreamStation 2 running optimally with a re-supply bundle containing recommended replacement filters, cleaning wipes and other consumables.",
    metrics: [
      {
        icon: "Filters",
        title: "Filters & Consumables",
        desc: "Includes replacement disposable filters and cleaning wipes.",
      },
      {
        icon: "Maintenance",
        title: "Maintenance Kit",
        desc: "Helps maintain therapy performance and hygiene.",
      },
      {
        icon: "Compatibility",
        title: "DreamStation 2 Compatible",
        desc: "Parts matched to DreamStation 2 hardware.",
      },
      {
        icon: "Value",
        title: "Bundle Value",
        desc: "Cost-effective way to replace multiple items at once.",
      },
      {
        icon: "EasyOrder",
        title: "Easy to Replace",
        desc: "Popular parts included for quick maintenance.",
      },
    ],
    specifications: [
      ["Manufacturer", "Philips Respironics (parts compatible)"],
      ["Type", "Re-supply / Consumables Bundle"],
    ],
    reviews: [
      {
        author: "George F.",
        rating: 5,
        date: "1 month ago",
        comment: "All the parts I needed in one order.",
      },
      {
        author: "Maya S.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Good pricing on replacement parts.",
      },
      {
        author: "Oleg R.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Fast shipping and accurate parts.",
      },
      {
        author: "Priya D.",
        rating: 5,
        date: "6 days ago",
        comment: "Easy to install and works fine.",
      },
      {
        author: "Lucas H.",
        rating: 5,
        date: "3 days ago",
        comment: "Everything fits my DreamStation 2.",
      },
    ],
    other: [],
  },

  dreamStation2AutoCPAPAdvanced: {
    id: "dreamStation2AutoCPAPAdvanced",
    name: "DreamStation 2 Auto CPAP Advanced",
    image: dreamStation2AdvancedImg,
    extraImages: [],
    price: 1207,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "CAX521H12C",
    description:
      "DreamStation 2 Auto CPAP Advanced — integrated humidifier, color touchscreen, advanced comfort settings and modem support.",
    longDescription:
      "The DreamStation 2 Auto CPAP Advanced offers a compact design, integrated humidification, ramp features, heated tube compatibility, and connectivity options for remote monitoring and improved adherence.",
    metrics: [
      {
        icon: "ColorScreen",
        title: "Color Touchscreen",
        desc: "Easy-to-use display.",
      },
      {
        icon: "RampPlus",
        title: "Ramp & Comfort Features",
        desc: "Ramp, pressure relief and adaptive technology to improve comfort.",
      },
      {
        icon: "Humidifier",
        title: "Humidifier Support",
        desc: "Built-in humidifier compatibility.",
      },
      {
        icon: "Connectivity",
        title: "Connectivity",
        desc: "Bluetooth & modem for data sharing.",
      },
      {
        icon: "TravelFriendly",
        title: "Travel Friendly",
        desc: "Compact footprint for portability.",
      },
    ],
    specifications: [
      ["Manufacturer", "Philips Respironics"],
      ["Model Number", "CAX521H12C"],
      ["Therapy Modes", "CPAP, Auto CPAP"],
      ["Humidifier Capacity", "Approx. 325 ml"],
      ["Weight", "Approx. 1040 g (varies by source)"],
    ],
    reviews: [
      {
        author: "Anna K.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Perfect balance of features and simplicity.",
      },
      {
        author: "Omar E.",
        rating: 5,
        date: "1 month ago",
        comment: "Reliable and quiet at night.",
      },
      {
        author: "Sandra P.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Heats well and reduces dryness.",
      },
      {
        author: "Peter N.",
        rating: 5,
        date: "1 week ago",
        comment: "Easy to use and set up.",
      },
      {
        author: "Laila M.",
        rating: 5,
        date: "2 days ago",
        comment: "Good battery of helpful comfort features.",
      },
    ],
    other: [],
  },

  dreamStation2WaterChamber: {
    id: "dreamStation2WaterChamber",
    name: "DreamStation 2 Water Chamber",
    image: waterChamberImg,
    extraImages: [],
    price: 50,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description: "Replacement water chamber for DreamStation 2 humidifier.",
    longDescription:
      "Official replacement water chamber designed to fit the DreamStation 2 humidifier reservoir for safe, spill-free humidification during therapy.",
    metrics: [
      {
        icon: "Capacity",
        title: "Humidifier Chamber",
        desc: "Holds water for integrated humidification.",
      },
      {
        icon: "OEMFit",
        title: "OEM Fit",
        desc: "Designed to fit DreamStation 2 humidifier housing.",
      },
      {
        icon: "EasyClean",
        title: "Easy to Clean",
        desc: "Removable for easy rinsing and drying.",
      },
      {
        icon: "Durable",
        title: "Durable Construction",
        desc: "Made for repeated use.",
      },
      {
        icon: "SafeMaterials",
        title: "BPA-free",
        desc: "Made with safe plastics for medical use.",
      },
    ],
    specifications: [
      ["Manufacturer", "Philips Respironics (replacement)"],
      ["Type", "Water chamber / humidifier reservoir"],
    ],
    reviews: [
      {
        author: "Jane Q.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Perfect fit for my DreamStation 2.",
      },
      {
        author: "Murat B.",
        rating: 5,
        date: "1 month ago",
        comment: "No leaks and easy to clean.",
      },
      {
        author: "Carla V.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Compact and reliable.",
      },
      {
        author: "Ben S.",
        rating: 5,
        date: "4 days ago",
        comment: "Exactly what I needed.",
      },
      {
        author: "Rhea G.",
        rating: 5,
        date: "2 days ago",
        comment: "Quick delivery and works as expected.",
      },
    ],
    other: [],
  },

  dreamStation2AutoPowerPackage: {
    id: "dreamStation2AutoPowerPackage",
    name: "DreamStation 2 Auto Power Package (with travel battery)",
    image: dreamStationBiPAPImg,
    extraImages: [],
    price: 1295,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description:
      "Power package for DreamStation 2 including travel battery — ideal for travel and power outages.",
    longDescription:
      "Includes power accessories and a travel battery option to keep DreamStation 2 running off-grid during travel or emergency situations.",
    metrics: [
      {
        icon: "TravelBattery",
        title: "Travel Battery",
        desc: "Portable power solution for overnight use.",
      },
      {
        icon: "Adapter",
        title: "Power Adapter",
        desc: "Compatible DC/AC power options.",
      },
      {
        icon: "Safety",
        title: "Safety Certs",
        desc: "Built to meet device power safety requirements.",
      },
      {
        icon: "Convenience",
        title: "Plug-and-play",
        desc: "Easy connection to DreamStation 2.",
      },
      {
        icon: "Portability",
        title: "Compact",
        desc: "Designed for travel convenience.",
      },
    ],
    specifications: [
      ["Manufacturer", "Third-party / Philips compatible"],
      ["Type", "Power / battery package"],
    ],
    reviews: [
      {
        author: "Vera L.",
        rating: 5,
        date: "1 month ago",
        comment: "Saved me when the hotel power failed.",
      },
      {
        author: "Mateo F.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Good runtime for short trips.",
      },
      {
        author: "Susan W.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Lightweight and easy to use.",
      },
      {
        author: "Khalid R.",
        rating: 5,
        date: "6 days ago",
        comment: "Good compatibility and quick charge.",
      },
      {
        author: "Tanya J.",
        rating: 5,
        date: "3 days ago",
        comment: "Solid option for travel.",
      },
    ],
    other: [],
  },

  dreamStation2MachineFilters: {
    id: "dreamStation2MachineFilters",
    name: "DreamStation 2 Machine Filters",
    image: filtersImg,
    extraImages: [],
    price: 15,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description: "Replacement disposable filters for DreamStation 2 machines.",
    longDescription:
      "Disposable or reusable filters to keep airborne particulates from entering the DreamStation 2 blower — recommended replacements at intervals listed by the manufacturer.",
    metrics: [
      {
        icon: "Filtration",
        title: "Filter Replacement",
        desc: "Helps maintain machine performance and hygiene.",
      },
      {
        icon: "Compatibility",
        title: "Made For DreamStation 2",
        desc: "Sized for DreamStation 2 blower housing.",
      },
      {
        icon: "EasySwap",
        title: "Easy to Replace",
        desc: "Simple filter access for quick swap.",
      },
      {
        icon: "PackSizes",
        title: "Available in Packs",
        desc: "Sold singly or in multi-packs for convenience.",
      },
      {
        icon: "Cost",
        title: "Cost-Effective",
        desc: "Affordable ongoing maintenance.",
      },
    ],
    specifications: [
      ["Manufacturer", "Philips Respironics (compatible)"],
      ["Type", "Disposable / reusable machine filters"],
    ],
    reviews: [
      {
        author: "Harper C.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Filters are genuine and fit perfectly.",
      },
      {
        author: "Diego A.",
        rating: 5,
        date: "2 months ago",
        comment: "Fast shipping and exact replacements.",
      },
      {
        author: "Rosa N.",
        rating: 5,
        date: "1 month ago",
        comment: "Improved airflow after replacement.",
      },
      {
        author: "Ibrahim Y.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Good value multi-pack.",
      },
      {
        author: "Sofia P.",
        rating: 5,
        date: "4 days ago",
        comment: "Exactly as described.",
      },
    ],
    other: [],
  },

  dreamStation2HeatedTube: {
    id: "dreamStation2HeatedTube",
    name: "DreamStation 2 Heated Tube",
    image: heatedTubeImg,
    extraImages: [],
    price: 50,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description:
      "Heated tubing designed for DreamStation 2 for reduced dryness, better humidification and reduced rainout.",
    longDescription:
      "Heated tubing maintains consistent temperature across the tube, reducing condensation (rainout) and improving humidification comfort during therapy.",
    metrics: [
      {
        icon: "Heated",
        title: "Heated Tube",
        desc: "Maintains temperature to reduce rainout.",
      },
      {
        icon: "Compatibility",
        title: "DreamStation 2 Compatible",
        desc: "Engineered to work with DreamStation 2 humidification settings.",
      },
      {
        icon: "Connector",
        title: "Standard Connectors",
        desc: "Standard CPAP tubing connectors for easy attachment.",
      },
      {
        icon: "Length",
        title: "Tube Length Options",
        desc: "Available in standard travel lengths.",
      },
      {
        icon: "Durable",
        title: "Durable Construction",
        desc: "Made for repeated use and flexible routing.",
      },
    ],
    specifications: [
      ["Manufacturer", "Philips Respironics (compatible)"],
      ["Type", "Heated CPAP tubing"],
    ],
    reviews: [
      {
        author: "Megan D.",
        rating: 5,
        date: "2 weeks ago",
        comment: "No rainout and much more comfortable.",
      },
      {
        author: "Connor R.",
        rating: 5,
        date: "1 month ago",
        comment: "Easy to connect and holds heat well.",
      },
      {
        author: "Sadia I.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Significant improvement vs standard tubing.",
      },
      {
        author: "Leo X.",
        rating: 5,
        date: "5 days ago",
        comment: "Good build quality.",
      },
      {
        author: "Inez O.",
        rating: 5,
        date: "2 days ago",
        comment: "Worth it if you use humidification.",
      },
    ],
    other: [],
  },

  tubingDreamStationHeatedTube: {
    id: "tubingDreamStationHeatedTube",
    name: "DreamStation Heated Tube (tubing)",
    image: tubingDreamStationImg,
    extraImages: [],
    price: 50,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description:
      "Replacement heated tubing specifically for DreamStation family machines.",
    longDescription:
      "Designed to integrate with DreamStation humidification systems to keep tube temperature consistent and reduce condensation.",
    metrics: [
      {
        icon: "Compatibility",
        title: "DreamStation Compatible",
        desc: "Direct fit for DreamStation machines.",
      },
      {
        icon: "HeatControl",
        title: "Temperature Control",
        desc: "Works with heated tube control settings.",
      },
      {
        icon: "LengthOptions",
        title: "Length Options",
        desc: "Available sizes for different setups.",
      },
      {
        icon: "Durable",
        title: "Durability",
        desc: "Designed for regular use.",
      },
      {
        icon: "EasyAttach",
        title: "Standard Connectors",
        desc: "Plug-in connectors fit DreamStation ports.",
      },
    ],
    specifications: [
      ["Manufacturer", "Philips Respironics (compatible)"],
      ["Type", "Heated tubing"],
    ],
    reviews: [
      {
        author: "Ari P.",
        rating: 5,
        date: "1 month ago",
        comment: "Fits perfectly and keeps temperature stable.",
      },
      {
        author: "Nina W.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Less condensation overnight.",
      },
      {
        author: "Omar K.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Good quality connectors.",
      },
      {
        author: "Tracy J.",
        rating: 5,
        date: "6 days ago",
        comment: "Improved humidification experience.",
      },
      {
        author: "Luc B.",
        rating: 5,
        date: "2 days ago",
        comment: "Very satisfied.",
      },
    ],
    other: [],
  },

  humidifierSystemOneHeatedHumidifier: {
    id: "humidifierSystemOneHeatedHumidifier",
    name: "Humidifier System One (Heated Humidifier copy)",
    image: dreamStationHumidifierImg,
    extraImages: [],
    price: 215,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description:
      "Heated humidifier accessory designed for CPAP systems (System One style).",
    longDescription:
      "Offers heated humidification to reduce dryness and improve comfort for CPAP users. Designed to integrate with compatible machine models.",
    metrics: [
      {
        icon: "HeatedHumidifier",
        title: "Heated Humidifier",
        desc: "Delivers consistent humidification during therapy.",
      },
      {
        icon: "Compatibility",
        title: "Compatible Models",
        desc: "Works with select CPAP machines — verify compatibility.",
      },
      {
        icon: "EasyInstall",
        title: "Easy Installation",
        desc: "Simple to attach to the machine.",
      },
      {
        icon: "Capacity",
        title: "Water Capacity",
        desc: "Holds adequate water for overnight use.",
      },
      {
        icon: "Cleanable",
        title: "Easy to Clean",
        desc: "Removable chamber for rinsing and drying.",
      },
    ],
    specifications: [
      ["Manufacturer", "Third-party / compatible humidifier"],
      ["Type", "Heated humidifier"],
    ],
    reviews: [
      {
        author: "Beth Z.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Makes nights much more comfortable.",
      },
      {
        author: "Jason L.",
        rating: 5,
        date: "1 month ago",
        comment: "Good performance and quiet.",
      },
      {
        author: "Hui N.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Easy to fit and use.",
      },
      {
        author: "Rolf S.",
        rating: 5,
        date: "4 days ago",
        comment: "Good value and works well.",
      },
      {
        author: "Mila R.",
        rating: 5,
        date: "2 days ago",
        comment: "No complaints and keeps moisture steady.",
      },
    ],
    other: [],
  },

  waterChamberForDreamStation: {
    id: "waterChamberForDreamStation",
    name: "Water Chamber (for DreamStation)",
    image: waterChamberImg,
    extraImages: [],
    price: 50,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description:
      "Replacement water chamber compatible with DreamStation humidifier.",
    longDescription:
      "OEM-style replacement reservoir that fits the DreamStation humidifier housing and ensures proper humidification.",
    metrics: [
      {
        icon: "OEMFit",
        title: "OEM Fit",
        desc: "Designed to fit DreamStation humidifier.",
      },
      {
        icon: "Capacity",
        title: "Reservoir Capacity",
        desc: "Sized for overnight use.",
      },
      {
        icon: "EasyClean",
        title: "Easy Clean",
        desc: "Removable for routine cleaning.",
      },
      {
        icon: "Durability",
        title: "Durable",
        desc: "Built to last through repeated cycles.",
      },
      {
        icon: "SafeMaterials",
        title: "Medical-Grade Plastics",
        desc: "BPA-free and safe for humidification.",
      },
    ],
    specifications: [
      ["Manufacturer", "Philips Respironics (compatible)"],
      ["Type", "Water chamber / humidifier reservoir"],
    ],
    reviews: [
      {
        author: "Sven P.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Fits perfectly and no leaks.",
      },
      {
        author: "Renae M.",
        rating: 5,
        date: "1 month ago",
        comment: "Easy to clean and maintain.",
      },
      {
        author: "Adil K.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Exactly match my old chamber.",
      },
      {
        author: "Cathy B.",
        rating: 5,
        date: "5 days ago",
        comment: "Good product and quick shipping.",
      },
      {
        author: "Miles D.",
        rating: 5,
        date: "2 days ago",
        comment: "Works well for humidification.",
      },
    ],
    other: [],
  },

  dcPowerSupplyForRespironicsDreamStation: {
    id: "dcPowerSupplyForRespironicsDreamStation",
    name: "DC Power Supply for Respironics DreamStation",
    image: dcPowerImg,
    extraImages: [],
    price: 120,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description:
      "DC power supply / cord for Philips Respironics DreamStation — compatible with travel and some battery systems.",
    longDescription:
      "Official DC power cord designed to provide power to DreamStation machines from DC sources and compatible travel batteries.",
    metrics: [
      {
        icon: "Compatibility",
        title: "DreamStation Compatible",
        desc: "Works with DreamStation power input.",
      },
      {
        icon: "Durability",
        title: "Durable Cable",
        desc: "Built to withstand repeated use.",
      },
      {
        icon: "Safety",
        title: "Safety Certified",
        desc: "Meets power safety specs for the device.",
      },
      {
        icon: "Plug",
        title: "Standard Connector",
        desc: "Connects to DC power options.",
      },
      {
        icon: "Length",
        title: "Cord Length",
        desc: "Sufficient length for bedside placement.",
      },
    ],
    specifications: [
      ["Manufacturer", "Philips Respironics (or compatible OEM)"],
      ["Type", "DC power cord / adapter"],
    ],
    reviews: [
      {
        author: "Nabil H.",
        rating: 5,
        date: "1 month ago",
        comment: "Works well with my travel battery.",
      },
      {
        author: "Tess G.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Nice fit and solid connector.",
      },
      {
        author: "Vik S.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Exactly what I needed.",
      },
      {
        author: "Ruth C.",
        rating: 5,
        date: "6 days ago",
        comment: "Good quality and fast shipping.",
      },
      {
        author: "Eli Z.",
        rating: 5,
        date: "2 days ago",
        comment: "Plugged right in and works.",
      },
    ],
    other: [],
  },

  pilot12LiteDreamstation2ConnectorCable: {
    id: "pilot12LiteDreamstation2ConnectorCable",
    name: "Pilot 12 Lite — DreamStation 2 Connector Cable",
    image: connectorCableImg,
    extraImages: [],
    price: 18,
    priceId: "",
    rating: null,
    reviewCount: null,
    inStock: true,
    sku: "",
    description:
      "Connector cable (Pilot 12 Lite) for DreamStation 2 — used for travel power/battery integration.",
    longDescription:
      "Connector cable to link Pilot 12 Lite travel batteries with DreamStation 2 devices for portable operation during travel or outages.",
    metrics: [
      {
        icon: "Compatibility",
        title: "Travel Battery Cable",
        desc: "Enables connection between Pilot 12 Lite and DreamStation 2.",
      },
      {
        icon: "Plug",
        title: "Secure Connection",
        desc: "Engineered for secure, low-loss connections.",
      },
      {
        icon: "Portability",
        title: "Compact",
        desc: "Small and easy to store with travel kit.",
      },
      {
        icon: "Build",
        title: "Durable Wiring",
        desc: "Designed to last through travel use.",
      },
      {
        icon: "EasyUse",
        title: "Plug-and-play",
        desc: "Simple to attach and use.",
      },
    ],
    specifications: [
      ["Manufacturer", "Pilot / accessory vendor (check packaging)"],
      ["Type", "Connector cable for travel battery"],
    ],
    reviews: [
      {
        author: "Nate R.",
        rating: 5,
        date: "1 month ago",
        comment: "Worked as expected on my trip.",
      },
      {
        author: "Felicity D.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Solid cable and good connector.",
      },
      {
        author: "Sean B.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Good travel accessory to have.",
      },
      {
        author: "Reema P.",
        rating: 5,
        date: "5 days ago",
        comment: "Durable and reliable.",
      },
      {
        author: "Cody L.",
        rating: 5,
        date: "2 days ago",
        comment: "Does the job well.",
      },
    ],
    other: [],
  },

  airsense11autoset: {
    id: "airsense-11-autoset",
    name: "AirSense 11 AutoSet CPAP Package",
    image: air11cpapP1,
    extraImages: [air11cpapP1, air11cpapP2],
    price: 1299,
    priceId: "price_airsense11autoset",
    rating: 5,
    reviewCount: 0,
    inStock: true,
    sku: "AS11-AUTO-PKG-001",
    description:
      "The AirSense 11 AutoSet is ResMed's latest auto-adjusting CPAP machine featuring advanced therapy algorithms and enhanced comfort technologies. This complete package includes interface, heated tubing, filters, and cleaning wipes.",
    longDescription: `Experience premium sleep apnea therapy with the AirSense 11 AutoSet CPAP Package. This comprehensive system represents the pinnacle of CPAP technology, combining ResMed's industry-leading AutoSet algorithm with intuitive controls and enhanced comfort features. The AutoSet technology automatically adjusts pressure throughout the night to deliver the minimum pressure needed, ensuring optimal therapy with maximum comfort. The package includes everything you need to start therapy immediately: your choice of mask interface, premium heated tubing to prevent condensation, replacement filters, and cleaning wipes. With built-in cellular connectivity, myAir app integration, and whisper-quiet operation, the AirSense 11 makes CPAP therapy easier and more effective than ever before.`,
    metrics: [
      {
        icon: Wind,
        title: "AutoSet Technology",
        desc: "Automatically adjusts pressure breath-by-breath for optimal therapy.",
      },
      {
        icon: Thermometer,
        title: "Climate Control",
        desc: "Integrated humidifier with heated tubing prevents rainout.",
      },
      {
        icon: Smartphone,
        title: "myAir App Integration",
        desc: "Track therapy progress and receive personalized coaching.",
      },
      {
        icon: Volume2,
        title: "Whisper Quiet",
        desc: "Ultra-quiet operation at just 26.6 dBA for peaceful sleep.",
      },
      {
        icon: Zap,
        title: "Easy-Breathe Motor",
        desc: "Smooth, comfortable airflow mimics natural breathing.",
      },
      {
        icon: Package,
        title: "Complete Package",
        desc: "Includes machine, mask, heated tubing, filters, and supplies.",
      },
    ],
    specifications: [
      ["Manufacturer", "ResMed"],
      ["Model Number", "AirSense 11 AutoSet"],
      ["Type", "Auto-Adjusting CPAP Machine"],
      ["Pressure Range", "4-20 cm H₂O"],
      ["Dimensions", "10 x 4.6 x 5.8 inches"],
      ["Weight", "2.75 lbs (1.25 kg)"],
      ["Noise Level", "26.6 dBA"],
      ["Humidifier", "Integrated HumidAir™"],
      ["Connectivity", "Built-in Cellular & Bluetooth"],
      ["Power Supply", "90W, 100-240V AC"],
      ["Data Tracking", "myAir App Compatible"],
      ["Tubing", "ClimateLineAir 11 Heated Tubing Included"],
      ["Filters", "Hypoallergenic Filter Included"],
      ["Warranty", "2 Year Manufacturer Warranty"],
    ],
    reviews: [],
    other: ["watchpat", "sleepimagering"],
  },

  airsense11autosetpackage: {
    id: "airsense-11-autoset-package",
    name: "AirSense 11 AutoSet CPAP Package",
    category: "CPAP",
    image: a11ih1,
    extraImages: [
      a11ih2,
      a11ih3,
    ],
    price: 1435,
    priceId: "price_airsense11autoset_package",
    rating: 5,
    reviewCount: 0,
    inStock: true,
    description:
      "Complete AirSense 11 AutoSet package with everything you need to start therapy. Includes machine with integrated humidifier, choice of mask interface, heated ClimateLineAir 11 tubing, filters, and cleaning wipes.",
    longDescription: `The AirSense 11 AutoSet CPAP Package delivers ResMed's latest breakthrough in sleep apnea therapy. This premium auto-adjusting CPAP features the advanced AutoSet algorithm that automatically adjusts pressure breath-by-breath to provide the lowest effective pressure throughout the night. The sleek touchscreen interface makes navigation effortless, while the integrated HumidAir humidifier with Climate Control ensures optimal comfort. This complete package includes everything for immediate therapy: your choice of mask, premium heated tubing to eliminate condensation, replacement filters, and maintenance wipes. With built-in wireless connectivity and the myAir app, you'll receive personalized sleep scores and coaching to optimize your therapy journey. The whisper-quiet Easy-Breathe motor operates at just 26.6 dBA, ensuring peaceful nights for you and your partner.`,
    metrics: [
      {
        icon: Wind,
        title: "AutoSet Algorithm",
        desc: "Breath-by-breath pressure adjustment for optimal comfort and efficacy.",
      },
      {
        icon: Smartphone,
        title: "Touchscreen Display",
        desc: "Intuitive color touchscreen for easy navigation and settings.",
      },
      {
        icon: Thermometer,
        title: "Climate Control",
        desc: "Integrated humidifier with heated tubing prevents rainout.",
      },
      {
        icon: Volume2,
        title: "Ultra Quiet",
        desc: "Easy-Breathe motor operates at whisper-quiet 26.6 dBA.",
      },
      {
        icon: Wifi,
        title: "Wireless Connectivity",
        desc: "Automatic data sync with myAir app for therapy tracking.",
      },
      {
        icon: Package,
        title: "Complete Package",
        desc: "Includes machine, mask, heated tubing, filters, and supplies.",
      },
    ],
    specifications: [
      ["Manufacturer", "ResMed"],
      ["Model Number", "AirSense 11 AutoSet"],
      ["Type", "Auto-Adjusting CPAP Machine"],
      ["Pressure Range", "4-20 cm H₂O"],
      ["Display", "Color Touchscreen LCD"],
      ["Dimensions", "10 x 4.6 x 5.8 inches"],
      ["Weight", "2.75 lbs (1.25 kg)"],
      ["Noise Level", "26.6 dBA"],
      ["Humidifier", "Integrated HumidAir with Climate Control"],
      ["Connectivity", "Built-in Cellular & Bluetooth"],
      ["Tubing", "ClimateLineAir 11 Heated Tubing Included"],
      ["Power Supply", "90W, 100-240V AC"],
      ["FAA Approved", "Yes, for Air Travel"],
      ["Warranty", "2 Year Manufacturer Warranty"],
    ],
    reviews: [],
    other: ["airsense-10-autoset-her", "airsense-10-autoset", "watchpat"],
  },
  airsense10autosether: {
    id: "airsense-10-autoset-her",
    name: "AirSense 10 AutoSet for Her",
    category: "CPAP",
    image: her1,
    extraImages: [
      her2,
      her3,
    ],
    price: 1372,
    priceId: "price_airsense10_her",
    rating: 5,
    reviewCount: 0,
    inStock: true,
    description:
      "Specifically designed for women with the AutoSet for Her algorithm that responds to female-specific characteristics of sleep apnea. Includes integrated HumidAir humidifier for enhanced comfort.",
    longDescription: `The AirSense 10 AutoSet for Her is ResMed's pioneering CPAP machine engineered specifically for women's unique sleep apnea therapy needs. Featuring the specialized AutoSet for Her algorithm, this device responds to the distinct characteristics and patterns of obstructive sleep apnea in women, providing gentler, more tailored pressure adjustments throughout the night. The integrated HumidAir heated humidifier combats dryness and enhances comfort, while the AutoRamp feature with sleep onset detection starts at a low pressure to help you fall asleep naturally before gradually increasing to therapeutic levels. The whisper-quiet Easy-Breathe motor and ambient light sensor create a peaceful sleep environment. With optional wireless connectivity, you can track your progress through the myAir app, receiving personalized coaching and nightly sleep scores to stay motivated on your therapy journey.`,
    metrics: [
      {
        icon: Heart,
        title: "AutoSet for Her",
        desc: "Specialized algorithm designed for women's sleep apnea patterns.",
      },
      {
        icon: Wind,
        title: "Gentle Pressure",
        desc: "Smoother pressure adjustments tailored to female physiology.",
      },
      {
        icon: Droplets,
        title: "Integrated Humidifier",
        desc: "Built-in HumidAir prevents dryness and enhances comfort.",
      },
      {
        icon: Moon,
        title: "AutoRamp",
        desc: "Sleep onset detection with gradual pressure increase.",
      },
      {
        icon: Volume2,
        title: "Whisper Quiet",
        desc: "Easy-Breathe motor at 26.6 dBA for peaceful sleep.",
      },
      {
        icon: Sun,
        title: "Ambient Light Sensor",
        desc: "Screen brightness adjusts to room lighting automatically.",
      },
    ],
    specifications: [
      ["Manufacturer", "ResMed"],
      ["Model Number", "AirSense 10 AutoSet for Her"],
      ["Type", "Auto-Adjusting CPAP for Women"],
      ["Algorithm", "AutoSet for Her"],
      ["Pressure Range", "4-20 cm H₂O"],
      ["Display", "Color LCD Screen"],
      ["Dimensions", "10 x 4.6 x 5.8 inches"],
      ["Weight", "2.75 lbs (1.25 kg)"],
      ["Noise Level", "26.6 dBA"],
      ["Humidifier", "Integrated HumidAir"],
      ["Connectivity", "Optional Wireless (myAir App)"],
      ["Power Supply", "90W, 100-240V AC"],
      ["FAA Approved", "Yes, for Air Travel"],
      ["Warranty", "2 Year Manufacturer Warranty"],
    ],
    reviews: [],
    other: [
      "airsense-11-autoset-package",
      "airsense-10-autoset",
      "resmed-platinum-air",
    ],
  },
  resmedplatinumair: {
    id: "resmed-platinum-air",
    name: "ResMed Platinum Air CPAP Package",
    category: "CPAP",
    image: s101,
    extraImages: [
      s102,
      s103,
      s104,
    ],
    price: 3231,
    priceId: "price_resmed_platinum_air",
    rating: 5,
    reviewCount: 0,
    inStock: true,
    description:
      "Premium all-inclusive CPAP package featuring ResMed's top-tier technology. Complete setup with advanced machine, premium mask, heated tubing, and comprehensive accessories for the ultimate therapy experience.",
    longDescription: `The ResMed Platinum Air CPAP Package represents the pinnacle of sleep apnea therapy convenience and performance. This premium all-inclusive package combines ResMed's most advanced CPAP technology with carefully curated accessories to provide an exceptional therapy experience from day one. Featuring an auto-adjusting CPAP machine with integrated humidification, this package eliminates the guesswork from starting therapy. The Platinum package includes a premium comfort mask designed for superior seal and minimal facial contact, ClimateLineAir heated tubing to prevent condensation, multiple replacement filters, and a complete cleaning kit. With wireless connectivity and the myAir coaching app, you'll have 24/7 access to your therapy data and personalized support. The Platinum Air Package is designed for users who want the best possible therapy experience with everything included in one comprehensive solution.`,
    metrics: [
      {
        icon: Award,
        title: "Platinum Tier",
        desc: "Premium all-inclusive package with top-tier components.",
      },
      {
        icon: Wind,
        title: "Auto-Adjusting",
        desc: "Smart pressure optimization throughout the entire night.",
      },
      {
        icon: Droplets,
        title: "Climate Control",
        desc: "Heated humidifier with temperature-controlled tubing.",
      },
      {
        icon: Shield,
        title: "Premium Mask",
        desc: "Top-rated comfort mask included with multiple cushion sizes.",
      },
      {
        icon: Package,
        title: "Complete Kit",
        desc: "Everything included: machine, mask, tubing, filters, supplies.",
      },
      {
        icon: Smartphone,
        title: "Digital Coaching",
        desc: "myAir app provides nightly scores and personalized tips.",
      },
    ],
    specifications: [
      ["Manufacturer", "ResMed"],
      ["Package Type", "Platinum All-Inclusive"],
      ["Machine Type", "Auto-Adjusting CPAP"],
      ["Pressure Range", "4-20 cm H₂O"],
      ["Humidifier", "Integrated HumidAir with Climate Control"],
      ["Tubing", "ClimateLineAir Heated Tubing"],
      ["Mask", "Premium Comfort Mask (Multiple Sizes)"],
      ["Filters", "Hypoallergenic Filters Included"],
      ["Noise Level", "26.6 dBA"],
      ["Connectivity", "Built-in Wireless & myAir App"],
      ["Display", "Color LCD with Ambient Light Sensor"],
      ["FAA Approved", "Yes, for Air Travel"],
      ["Cleaning Kit", "Complete Supplies Included"],
      ["Warranty", "2 Year Manufacturer Warranty"],
    ],
    reviews: [],
    other: [
      "airsense-11-autoset-package",
      "airsense-11-airmini-platinum",
      "airsense-10-autoset",
    ],
  },
  airsense11airminiplatinum: {
    id: "airsense-11-airmini-platinum",
    name: "AirSense 11 & AirMini Platinum Package",
    category: "CPAP",
    image: a11a1,
    extraImages: [
      a11a2,
      a11a3,
    ],
    price: 3344,
    priceId: "price_airsense11_airmini_platinum",
    rating: 5,
    reviewCount: 0,
    inStock: true,
    description:
      "Ultimate dual-machine platinum package combining the AirSense 11 AutoSet for home use with the portable AirMini for travel. Complete therapy solution for home and away.",
    longDescription: `The AirSense 11 & AirMini Platinum Package is the ultimate CPAP solution for people who refuse to compromise on therapy quality whether at home or traveling. This premium dual-machine package includes both the cutting-edge AirSense 11 AutoSet with touchscreen and integrated humidification for home use, plus the world's smallest CPAP - the AirMini - for seamless therapy on the go. The AirSense 11 delivers whisper-quiet operation with advanced AutoSet pressure adjustments and Climate Control comfort, while the ultra-compact AirMini fits in your hand and is FAA-approved for in-flight use. This platinum package includes premium masks compatible with both machines, heated tubing for the AirSense 11, HumidX waterless humidification for the AirMini, comprehensive filter sets, travel case, and complete cleaning supplies. With dual wireless connectivity and myAir app integration for both devices, you'll maintain consistent therapy tracking whether sleeping at home or anywhere in the world.`,
    metrics: [
      {
        icon: Home,
        title: "Home + Travel Solution",
        desc: "Full-size AirSense 11 for home, AirMini for travel.",
      },
      {
        icon: Plane,
        title: "Ultra-Portable AirMini",
        desc: "World's smallest CPAP, FAA-approved for in-flight use.",
      },
      {
        icon: Wind,
        title: "Dual AutoSet",
        desc: "Both machines feature intelligent auto-adjusting pressure.",
      },
      {
        icon: Droplets,
        title: "Climate Control & HumidX",
        desc: "Heated humidification at home, waterless system for travel.",
      },
      {
        icon: Smartphone,
        title: "Unified Tracking",
        desc: "Single myAir app monitors therapy from both devices.",
      },
      {
        icon: Award,
        title: "Platinum Complete",
        desc: "Premium masks, cases, filters, and supplies for both machines.",
      },
    ],
    specifications: [
      ["Manufacturer", "ResMed"],
      ["Package Type", "Platinum Dual-Machine"],
      ["Home Machine", "AirSense 11 AutoSet with Humidifier"],
      ["Travel Machine", "AirMini Auto-Adjusting CPAP"],
      ["Pressure Range", "4-20 cm H₂O (Both Machines)"],
      ["AirSense 11 Weight", "2.75 lbs (1.25 kg)"],
      ["AirMini Weight", "0.66 lbs (300g)"],
      ["AirMini Dimensions", '5.4" x 3.3" x 2.1"'],
      ["Humidification", "HumidAir (AirSense 11) / HumidX (AirMini)"],
      ["Noise Level", "26.6 dBA (Both)"],
      ["Connectivity", "Wireless with myAir App (Both)"],
      ["Travel Case", "Premium Case for AirMini Included"],
      ["Masks", "Compatible Masks for Both Systems"],
      ["Warranty", "2 Year Manufacturer Warranty"],
    ],
    reviews: [],
    other: [
      "airsense-11-autoset-package",
      "resmed-platinum-air",
      "airsense-10-autoset",
    ],
  },
  airsense10autoset: {
    id: "airsense-10-autoset",
    name: "AirSense 10 AutoSet CPAP",
    category: "CPAP",
    image: a10cp1,
    extraImages: [
      a10cp2,
      a10cp3,
    ],
    price: 1595,
    priceId: "price_airsense10_autoset",
    rating: 5,
    reviewCount: 0,
    inStock: true,
    description:
      "Proven auto-adjusting CPAP with integrated HumidAir humidifier. Features the clinically-validated AutoSet algorithm that automatically adjusts pressure to deliver the lowest effective therapy.",
    longDescription: `The AirSense 10 AutoSet remains one of the world's most trusted and widely-used CPAP machines, delivering proven therapy through ResMed's clinically-validated AutoSet algorithm. This premium auto-adjusting device continuously monitors your breathing patterns and adjusts pressure breath-by-breath to provide the lowest effective pressure throughout the night. The integrated HumidAir heated humidifier prevents dryness and enhances comfort, while optional ClimateLineAir heated tubing eliminates condensation for optimal therapy conditions. The whisper-quiet Easy-Breathe motor operates at just 26.6 dBA, ensuring peaceful sleep for both you and your partner. User-friendly controls with an intuitive color LCD display make navigation effortless, while the built-in ambient light sensor adjusts screen brightness to avoid disruption. Features like AutoRamp with sleep onset detection, SmartStart/Stop, and Expiratory Pressure Relief (EPR) ensure comfortable therapy from the first night. With optional wireless connectivity and myAir app integration, you'll receive nightly sleep scores and personalized coaching to optimize your therapy success.`,
    metrics: [
      {
        icon: Wind,
        title: "AutoSet Algorithm",
        desc: "Clinically-proven breath-by-breath pressure optimization.",
      },
      {
        icon: Droplets,
        title: "Integrated Humidifier",
        desc: "Built-in HumidAir with optional Climate Control tubing.",
      },
      {
        icon: Volume2,
        title: "Whisper Quiet",
        desc: "Easy-Breathe motor at 26.6 dBA for peaceful nights.",
      },
      {
        icon: Moon,
        title: "AutoRamp",
        desc: "Sleep onset detection with gentle pressure ramp-up.",
      },
      {
        icon: Zap,
        title: "EPR Technology",
        desc: "Pressure relief on exhale for natural breathing comfort.",
      },
      {
        icon: Smartphone,
        title: "myAir Compatible",
        desc: "Optional wireless tracking with nightly sleep scores.",
      },
    ],
    specifications: [
      ["Manufacturer", "ResMed"],
      ["Model Number", "AirSense 10 AutoSet"],
      ["Type", "Auto-Adjusting CPAP Machine"],
      ["Pressure Range", "4-20 cm H₂O"],
      ["Display", "Color LCD with Ambient Light Sensor"],
      ["Dimensions", "10 x 4.6 x 5.8 inches"],
      ["Weight", "2.75 lbs (1.25 kg)"],
      ["Noise Level", "26.6 dBA"],
      ["Humidifier", "Integrated HumidAir"],
      ["Tubing Options", "SlimLine or ClimateLineAir Heated"],
      ["Connectivity", "Optional Wireless (myAir App)"],
      ["Power Supply", "90W, 100-240V AC"],
      ["FAA Approved", "Yes, for Air Travel"],
      ["Warranty", "2 Year Manufacturer Warranty"],
    ],
    reviews: [],
    other: [
      "airsense-11-autoset-package",
      "airsense-10-autoset-her",
      "airsense-10-package",
    ],
  },
  airsense11autosetstandalone: {
    id: "airsense-11-autoset-standalone",
    name: "AirSense 11 AutoSet CPAP with Integrated Humidifier",
    category: "CPAP",
    image: a11ih1,
    extraImages: [
      a11ih2,
      a11ih3,
    ],
    price: 1444,
    priceId: "price_airsense11_standalone",
    rating: 5,
    reviewCount: 0,
    inStock: true,
    description:
      "Latest generation AirSense 11 AutoSet CPAP machine with intuitive touchscreen and integrated HumidAir humidifier. ResMed's most advanced standalone CPAP device.",
    longDescription: `The AirSense 11 AutoSet with Integrated Humidifier represents ResMed's latest breakthrough in CPAP technology, combining cutting-edge design with proven therapeutic effectiveness. This standalone machine features an elegant touchscreen interface that makes adjusting settings and reviewing therapy data effortless. The advanced AutoSet algorithm continuously monitors your breathing and adjusts pressure in real-time to deliver the minimum effective pressure needed for optimal therapy. The integrated HumidAir humidifier with Climate Control technology maintains consistent temperature and humidity levels throughout the night, preventing dryness and rainout. The whisper-quiet Easy-Breathe motor ensures peaceful operation at just 26.6 dBA. Built-in wireless connectivity automatically syncs your therapy data to the myAir app, providing daily sleep scores, progress tracking, and personalized coaching tips. With features like AutoRamp for comfortable sleep onset, EPR for natural breathing, and SmartStart/Stop convenience, the AirSense 11 AutoSet makes CPAP therapy more intuitive and effective than ever.`,
    metrics: [
      {
        icon: Smartphone,
        title: "Touchscreen Display",
        desc: "Intuitive color touchscreen for easy navigation and control.",
      },
      {
        icon: Wind,
        title: "Advanced AutoSet",
        desc: "Next-gen algorithm provides optimal pressure adjustments.",
      },
      {
        icon: Thermometer,
        title: "Climate Control",
        desc: "Integrated humidifier maintains ideal temperature and humidity.",
      },
      {
        icon: Volume2,
        title: "Ultra Quiet",
        desc: "Premium Easy-Breathe motor at 26.6 dBA.",
      },
      {
        icon: Wifi,
        title: "Wireless Sync",
        desc: "Automatic data upload to myAir app with cellular connectivity.",
      },
      {
        icon: Zap,
        title: "Smart Features",
        desc: "AutoRamp, EPR, SmartStart for enhanced comfort.",
      },
    ],
    specifications: [
      ["Manufacturer", "ResMed"],
      ["Model Number", "AirSense 11 AutoSet"],
      ["Type", "Auto-Adjusting CPAP Machine"],
      ["Pressure Range", "4-20 cm H₂O"],
      ["Display", "Color Touchscreen LCD"],
      ["Dimensions", "10 x 4.6 x 5.8 inches"],
      ["Weight", "2.75 lbs (1.25 kg)"],
      ["Noise Level", "26.6 dBA"],
      ["Humidifier", "Integrated HumidAir with Climate Control"],
      ["Connectivity", "Built-in Cellular & Bluetooth"],
      ["Power Supply", "90W, 100-240V AC"],
      ["Compatible Tubing", "ClimateLineAir 11 Heated Tubing"],
      ["FAA Approved", "Yes, for Air Travel"],
      ["Warranty", "2 Year Manufacturer Warranty"],
    ],
    reviews: [],
    other: [
      "airsense-11-autoset-package",
      "airsense-10-autoset",
      "resmed-platinum-air",
    ],
  },
  airsense10package: {
    id: "airsense-10-package",
    name: "AirSense 10 Auto CPAP Package",
    category: "CPAP",
    image: a10cp1,
    extraImages: [
      a10cp2,
      a10cp3,
    ],
    price: 1595,
    priceId: "price_airsense10_package",
    rating: 5,
    reviewCount: 0,
    inStock: true,
    description:
      "Complete AirSense 10 AutoSet package with everything needed for therapy. Includes machine with humidifier, mask, ClimateLineAir heated tubing, filters, and supplies.",
    longDescription: `The AirSense 10 Auto CPAP Package provides everything you need to begin effective sleep apnea therapy in one comprehensive solution. Built around the proven AirSense 10 AutoSet machine, this complete package includes a carefully selected comfort mask, premium ClimateLineAir heated tubing, replacement filters, and essential cleaning supplies. The AirSense 10's industry-leading AutoSet algorithm automatically adjusts pressure throughout the night to ensure you receive the lowest effective therapy pressure, maximizing both comfort and treatment efficacy. The integrated HumidAir heated humidifier works seamlessly with the included ClimateLineAir tubing to deliver Climate Control technology, maintaining optimal temperature and humidity while preventing condensation. User-friendly controls and an intuitive color LCD screen make setup and daily use effortless, while the whisper-quiet Easy-Breathe motor ensures peaceful nights. Optional wireless connectivity with the myAir app provides nightly sleep scores and personalized coaching to help you stay on track with therapy. This package represents exceptional value, eliminating the guesswork from starting CPAP therapy.`,
    metrics: [
      {
        icon: Package,
        title: "Complete Package",
        desc: "Machine, mask, heated tubing, filters, and supplies included.",
      },
      {
        icon: Wind,
        title: "AutoSet Technology",
        desc: "Proven algorithm delivers lowest effective pressure.",
      },
      {
        icon: Thermometer,
        title: "Climate Control",
        desc: "Heated humidifier with ClimateLineAir tubing prevents rainout.",
      },
      {
        icon: Volume2,
        title: "Quiet Operation",
        desc: "Whisper-quiet 26.6 dBA for undisturbed sleep.",
      },
      {
        icon: Smartphone,
        title: "myAir App",
        desc: "Optional wireless tracking with daily sleep scores.",
      },
      {
        icon: Award,
        title: "Proven Reliability",
        desc: "World's most trusted CPAP with millions of users.",
      },
    ],
    specifications: [
      ["Manufacturer", "ResMed"],
      ["Model Number", "AirSense 10 AutoSet Package"],
      ["Type", "Auto-Adjusting CPAP Package"],
      ["Pressure Range", "4-20 cm H₂O"],
      ["Display", "Color LCD with Ambient Light Sensor"],
      ["Package Includes", "Machine, Mask, Heated Tubing, Filters"],
      ["Dimensions", "10 x 4.6 x 5.8 inches"],
      ["Weight", "2.75 lbs (1.25 kg)"],
      ["Noise Level", "26.6 dBA"],
      ["Humidifier", "Integrated HumidAir"],
      ["Tubing", "ClimateLineAir Heated Tubing Included"],
      ["Connectivity", "Optional Wireless (myAir App)"],
      ["FAA Approved", "Yes, for Air Travel"],
      ["Warranty", "2 Year Manufacturer Warranty"],
    ],
    reviews: [],
    other: [
      "airsense-11-autoset-package",
      "airsense-10-autoset",
      "resmed-platinum-air",
    ],
  },

  airfitf20:{
    id: "airfit-f20",
    name: "AirFit F20 Full Face CPAP Mask",
    category: "Mask",
    image: airfitF20Img,
    extraImages: [airfitF201, airfitF202, airfitF203, airfitF204],
    price: 149,
    priceId: "price_airfit_f20",
    rating: 5,
    reviewCount: 0,
    inStock: true,
    description: "ResMed's most popular full face mask featuring the innovative InfinitySeal cushion that adapts to 97% of facial profiles. Compact design with plush headgear and QuietAir technology for peaceful sleep.",
    longDescription: `The AirFit F20 Full Face CPAP Mask is ResMed's most widely used and trusted mask, designed to fit virtually everyone with its revolutionary InfinitySeal cushion technology. This adaptive dual-wall silicone cushion features infinity loops and variable thickness levels to provide a secure, comfortable seal across all pressure settings and sleep positions. The compact, flexible frame sits below the eyes, providing an unrestricted field of vision perfect for reading or watching TV before bed. Unlike traditional full face masks, the F20 eliminates the need for forehead support, reducing claustrophobia and facial pressure points. The plush, padded headgear features four adjustable velcro straps and innovative magnetic clips that make putting on and taking off the mask effortless - simply snap the lower straps into place. The quick-release elbow allows you to disconnect from your CPAP tubing without removing the mask, perfect for nighttime bathroom trips. With QuietAir vent technology featuring small multidirectional openings, the F20 operates at an ultra-quiet 21 decibels - 89% quieter than previous designs. The 360-degree rotating elbow supports all sleep positions, making this ideal for active sleepers who move throughout the night.`,
    metrics: [
      {
        icon: Users,
        title: "Universal Fit",
        desc: "InfinitySeal cushion adapts to 97% of facial profiles.",
      },
      {
        icon: Shield,
        title: "Secure Seal",
        desc: "Dual-wall silicone maintains seal at all pressures.",
      },
      {
        icon: Eye,
        title: "Open Line of Sight",
        desc: "Under-eye frame design for unrestricted vision.",
      },
      {
        icon: Volume2,
        title: "QuietAir Technology",
        desc: "89% quieter operation at just 21 decibels.",
      },
      {
        icon: Zap,
        title: "Magnetic Clips",
        desc: "Quick on/off with self-guiding magnetic connections.",
      },
      {
        icon: RotateCw,
        title: "360° Swivel",
        desc: "Rotating elbow adapts to all sleeping positions.",
      },
    ],
    specifications: [
      ["Manufacturer", "ResMed"],
      ["Model", "AirFit F20"],
      ["Type", "Full Face CPAP Mask"],
      ["Cushion Type", "InfinitySeal Silicone"],
      ["Sizes Available", "Small, Medium, Large"],
      ["Frame Design", "Flexible Under-Eye Frame"],
      ["Headgear", "Plush Padded with 4 Adjustment Points"],
      ["Magnetic Clips", "Yes (Lower Straps)"],
      ["Quick Release", "Yes (Elbow)"],
      ["Noise Level", "21 dBA (QuietAir)"],
      ["Field of Vision", "Open (No Forehead Support)"],
      ["Cleaning", "Daily with Mild Soap & Water"],
      ["Cushion Replacement", "Every 3 Months"],
      ["Compatibility", "All CPAP/BiPAP Machines, AirMini"],
    ],
    reviews: [],
    other: ["airtouch-f20", "airfit-f30", "dreamwear-full-face"],
  },
  // airtouchf20:{
  //   id: "airtouch-f20",
  //   name: "AirTouch F20 Memory Foam Full Face Mask",
  //   category: "Mask",
  //   image: airtouchF20Img,
  //   extraImages: [airtouchF201, airtouchF202, airtouchF203, airtouchF204],
  //   price: 169,
  //   priceId: "price_airtouch_f20",
  //   rating: 5,
  //   reviewCount: 0,
  //   inStock: true,
  //   description: "ResMed's softest mask ever, featuring revolutionary UltraSoft memory foam cushion technology. Breathable, gentle seal that adapts to your facial contours for exceptional comfort and minimal skin irritation.",
  //   longDescription: `The AirTouch F20 Memory Foam Full Face Mask represents a breakthrough in CPAP comfort technology, being the first ResMed mask to feature the revolutionary UltraSoft memory foam cushion. This premium mask is designed for users who find traditional silicone cushions uncomfortable or irritating. The memory foam conforms precisely to your unique facial contours, creating a naturally breathable seal that allows excess heat and moisture to escape while maintaining therapy pressure. This innovative design significantly reduces facial marks and skin irritation, even when sealed firmly during high-pressure therapy. The permeable foam creates a gentle, soft touch against the skin that many users describe as the most comfortable CPAP experience they've had. Built on the same flexible, padded frame as the AirFit F20, the AirTouch F20 provides an open field of vision without forehead support, perfect for bedtime reading or TV watching. The plush headgear features magnetic clips for effortless on/off, while the quick-release elbow lets you disconnect without mask removal. With QuietAir technology operating at just 21 decibels, both you and your partner will enjoy peaceful, undisturbed sleep. An added benefit: the memory foam cushion requires only daily wiping with CPAP wipes - no daily washing needed - and should be replaced monthly for optimal hygiene and performance.`,
  //   metrics: [
  //     {
  //       icon: Cloud,
  //       title: "UltraSoft Memory Foam",
  //       desc: "Revolutionary cushion technology for unmatched comfort.",
  //     },
  //     {
  //       icon: Wind,
  //       title: "Breathable Seal",
  //       desc: "Permeable foam allows heat and moisture to escape.",
  //     },
  //     {
  //       icon: ShieldCheck,
  //       title: "Reduces Skin Marks",
  //       desc: "Gentle cushion minimizes facial irritation and red marks.",
  //     },
  //     {
  //       icon: Sparkles,
  //       title: "Easy Maintenance",
  //       desc: "Simple daily wipe-down, no washing required.",
  //     },
  //     {
  //       icon: Volume2,
  //       title: "Ultra Quiet",
  //       desc: "QuietAir vents operate at whisper-quiet 21 dBA.",
  //     },
  //     {
  //       icon: Eye,
  //       title: "Clear Vision",
  //       desc: "Open line of sight with under-eye frame design.",
  //     },
  //   ],
  //   specifications: [
  //     ["Manufacturer", "ResMed"],
  //     ["Model", "AirTouch F20"],
  //     ["Type", "Full Face Memory Foam Mask"],
  //     ["Cushion Type", "UltraSoft Memory Foam"],
  //     ["Sizes Available", "Small, Medium, Large"],
  //     ["Frame Design", "Flexible Under-Eye Frame"],
  //     ["Headgear", "Plush Padded with Magnetic Clips"],
  //     ["Quick Release", "Yes (Elbow)"],
  //     ["Noise Level", "21 dBA (QuietAir)"],
  //     ["Field of Vision", "Open (No Forehead Support)"],
  //     ["Cleaning", "Daily Wipe with CPAP Wipes (No Water)"],
  //     ["Cushion Replacement", "Every 30 Days"],
  //     ["Frame Compatibility", "Interchangeable with AirFit F20"],
  //     ["Best For", "Sensitive Skin, Facial Hair"],
  //   ],
  //   reviews: [],
  //   other: ["airfit-f20", "airfit-f30", "dreamwear-full-face"],
  // },
  // dreamwearfullface:{
  //   id: "dreamwear-full-face",
  //   name: "DreamWear Full Face CPAP Mask",
  //   category: "Mask",
  //   image: dreamwearFullFaceImg,
  //   extraImages: [dreamwearFullFace1, dreamwearFullFace2, dreamwearFullFace3, dreamwearFullFace4],
  //   price: 139,
  //   priceId: "price_dreamwear_full_face",
  //   rating: 5,
  //   reviewCount: 0,
  //   inStock: true,
  //   description: "Innovative full face mask with top-of-head hose connection for ultimate freedom of movement. Minimal facial contact design allows you to sleep in any position while maintaining an effective seal.",
  //   longDescription: `The DreamWear Full Face CPAP Mask revolutionizes traditional mask design with its breakthrough top-of-head hose connection, giving you unprecedented freedom to sleep comfortably in any position. Unlike conventional masks where the hose connects at the front, DreamWear's innovative frame-based design routes airflow through a soft, flexible frame that sits gently under your nose, delivering therapy without covering the bridge of your nose. This unique design provides maximum facial freedom - you can sleep on your stomach, side, or back without hose drag or mask displacement. The minimal contact full face cushion seals under your nose and around your mouth, providing secure therapy while leaving your face remarkably unobstructed. The soft silicone frame and cushion create multiple seal points for reliable therapy across all pressure settings. With the hose connection on top, you can comfortably read, watch TV, or wear glasses without interference. The modular design allows you to customize your fit by choosing from multiple cushion sizes and frame options. DreamWear's streamlined design uses fewer parts, making assembly, cleaning, and maintenance remarkably simple. Perfect for active sleepers, claustrophobic users, or anyone who values freedom of movement during sleep therapy.`,
  //   metrics: [
  //     {
  //       icon: MoveUp,
  //       title: "Top-of-Head Connection",
  //       desc: "Revolutionary design allows sleeping in any position.",
  //     },
  //     {
  //       icon: Minimize,
  //       title: "Minimal Contact",
  //       desc: "Less facial coverage for ultimate comfort and freedom.",
  //     },
  //     {
  //       icon: ShieldCheck,
  //       title: "Under-Nose Design",
  //       desc: "Doesn't cover nasal bridge, reducing pressure and marks.",
  //     },
  //     {
  //       icon: RotateCw,
  //       title: "360° Freedom",
  //       desc: "Sleep on stomach, side, or back without restrictions.",
  //     },
  //     {
  //       icon: Glasses,
  //       title: "Unobstructed View",
  //       desc: "Wear glasses, read, or watch TV comfortably.",
  //     },
  //     {
  //       icon: Box,
  //       title: "Modular Design",
  //       desc: "Simple assembly with interchangeable components.",
  //     },
  //   ],
  //   specifications: [
  //     ["Manufacturer", "Philips Respironics"],
  //     ["Model", "DreamWear Full Face"],
  //     ["Type", "Full Face CPAP Mask"],
  //     ["Cushion Type", "Silicone Under-Nose & Mouth Seal"],
  //     ["Sizes Available", "Small, Medium, Large"],
  //     ["Frame Material", "Soft Flexible Silicone"],
  //     ["Hose Connection", "Top-of-Head (360° Rotation)"],
  //     ["Nasal Bridge Contact", "None"],
  //     ["Headgear", "Adjustable 4-Point"],
  //     ["Quick Release", "Yes"],
  //     ["Best For", "Stomach Sleepers, Active Sleepers"],
  //     ["Cleaning", "Daily with Mild Soap & Water"],
  //     ["Cushion Replacement", "Every 3 Months"],
  //     ["Compatibility", "All Standard CPAP/BiPAP Machines"],
  //   ],
  //   reviews: [],
  //   other: ["airfit-f20", "airfit-f30", "airfit-f30i"],
  // },
  // airfitf30:{
  //   id: "airfit-f30",
  //   name: "AirFit F30 Full Face CPAP Mask",
  //   category: "Mask",
  //   image: airfitF30Img,
  //   extraImages: [airfitF301, airfitF302, airfitF303, airfitF304],
  //   price: 139,
  //   priceId: "price_airfit_f30",
  //   rating: 5,
  //   reviewCount: 0,
  //   inStock: true,
  //   description: "Compact full face mask with revolutionary under-nose cushion design. Provides full face coverage without touching the nasal bridge, eliminating discomfort and red marks while maintaining a secure seal.",
  //   longDescription: `The AirFit F30 Full Face CPAP Mask redefines full face therapy with its innovative under-nose cushion design that delivers the benefits of full face coverage without the bulkiness or nasal bridge pressure of traditional masks. This groundbreaking mask features QuietAir elbow technology and a quick-release design that seamlessly combines the comfort of a nasal mask with the effectiveness of full face therapy. The unique cushion sits under your nose rather than covering it, eliminating pressure on the sensitive nasal bridge while still sealing around your mouth for full face functionality. This makes it ideal for users who mouth breathe but find traditional full face masks too invasive or uncomfortable. The compact frame provides an open field of vision, allowing you to comfortably read, watch TV, or wear glasses before sleep. The magnetic clips on the lower headgear straps make donning and doffing remarkably simple - just snap them into place. The QuietAir vent diffuses exhaled air gently and quietly, creating a peaceful sleep environment at just 21 decibels. With its flexible frame that adapts to different facial features and three cushion sizes for optimal fit, the F30 is perfect for users seeking the therapy effectiveness of a full face mask with the comfort and minimal contact of a nasal mask.`,
  //   metrics: [
  //     {
  //       icon: Minimize,
  //       title: "Under-Nose Design",
  //       desc: "Full face coverage without nasal bridge contact.",
  //     },
  //     {
  //       icon: Eye,
  //       title: "Compact Frame",
  //       desc: "Minimal facial coverage with open line of sight.",
  //     },
  //     {
  //       icon: ShieldCheck,
  //       title: "No Bridge Pressure",
  //       desc: "Eliminates red marks and discomfort on nose.",
  //     },
  //     {
  //       icon: Volume2,
  //       title: "QuietAir Vents",
  //       desc: "Whisper-quiet operation at 21 dBA for peaceful sleep.",
  //     },
  //     {
  //       icon: Zap,
  //       title: "Magnetic Clips",
  //       desc: "Easy snap-on connection for quick assembly.",
  //     },
  //     {
  //       icon: RotateCw,
  //       title: "Quick Release",
  //       desc: "Disconnect tubing without removing mask.",
  //     },
  //   ],
  //   specifications: [
  //     ["Manufacturer", "ResMed"],
  //     ["Model", "AirFit F30"],
  //     ["Type", "Full Face CPAP Mask (Under-Nose)"],
  //     ["Cushion Type", "Under-Nose Silicone Seal"],
  //     ["Sizes Available", "Small, Medium, Large"],
  //     ["Frame Design", "Compact Flexible Frame"],
  //     ["Headgear", "Plush with Magnetic Clips"],
  //     ["Nasal Bridge Contact", "None"],
  //     ["Quick Release", "Yes (Elbow)"],
  //     ["Noise Level", "21 dBA (QuietAir)"],
  //     ["Field of Vision", "Open & Unrestricted"],
  //     ["Cleaning", "Daily with Mild Soap & Water"],
  //     ["Cushion Replacement", "Every 3 Months"],
  //     ["Best For", "Mouth Breathers, Nasal Bridge Sensitivity"],
  //   ],
  //   reviews: [],
  //   other: ["airfit-f30i", "airfit-f20", "dreamwear-full-face"],
  // },
  // airfitf30i:{
  //   id: "airfit-f30i",
  //   name: "AirFit F30i Full Face CPAP Mask",
  //   category: "Mask",
  //   image: airfitF30iImg,
  //   extraImages: [airfitF30i1, airfitF30i2, airfitF30i3, airfitF30i4],
  //   price: 149,
  //   priceId: "price_airfit_f30i",
  //   rating: 5,
  //   reviewCount: 0,
  //   inStock: true,
  //   description: "Revolutionary full face mask with top-of-head tube connection for ultimate sleeping freedom. Under-nose cushion design provides full face therapy without nasal bridge contact for exceptional comfort.",
  //   longDescription: `The AirFit F30i Full Face CPAP Mask combines the best features of ResMed's innovative designs into one revolutionary mask. Featuring a top-of-head tube connection inspired by the popular AirFit N30i, this mask gives you unprecedented freedom to sleep in any position - stomach, side, or back - without tube drag or mask displacement. The innovative under-nose cushion design delivers effective full face therapy without touching the nasal bridge, eliminating the discomfort and red marks commonly associated with traditional full face masks. The compact frame sits below the eyes, providing an open, unobstructed view perfect for reading or watching TV before bed. This design is ideal for mouth breathers who need full face coverage but want minimal facial contact and maximum comfort. The QuietAir elbow technology features small multidirectional vents that diffuse exhaled air at a whisper-quiet 21 decibels, ensuring peaceful sleep for you and your partner. The quick-release elbow allows easy disconnection for nighttime bathroom trips without removing the mask. Plush, soft headgear with magnetic clips makes assembly effortless - simply snap the lower straps into place. With three cushion sizes and a flexible frame that adapts to various facial features, the F30i combines innovation, comfort, and therapy effectiveness in one outstanding package.`,
  //   metrics: [
  //     {
  //       icon: MoveUp,
  //       title: "Top-of-Head Tube",
  //       desc: "Sleep freely in any position without restrictions.",
  //     },
  //     {
  //       icon: Minimize,
  //       title: "Under-Nose Cushion",
  //       desc: "Full face therapy without nasal bridge pressure.",
  //     },
  //     {
  //       icon: ShieldCheck,
  //       title: "Minimal Contact",
  //       desc: "Compact design reduces facial marks and discomfort.",
  //     },
  //     {
  //       icon: Volume2,
  //       title: "QuietAir Technology",
  //       desc: "Ultra-quiet 21 dBA operation for peaceful nights.",
  //     },
  //     {
  //       icon: Eye,
  //       title: "Open Vision",
  //       desc: "Unrestricted view for reading and relaxation.",
  //     },
  //     {
  //       icon: Zap,
  //       title: "Magnetic Headgear",
  //       desc: "Quick snap-on clips for effortless assembly.",
  //     },
  //   ],
  //   specifications: [
  //     ["Manufacturer", "ResMed"],
  //     ["Model", "AirFit F30i"],
  //     ["Type", "Full Face CPAP Mask with Top Connection"],
  //     ["Cushion Type", "Under-Nose Silicone Seal"],
  //     ["Sizes Available", "Small, Medium, Large"],
  //     ["Hose Connection", "Top-of-Head"],
  //     ["Headgear", "Plush with Magnetic Clips"],
  //     ["Nasal Bridge Contact", "None"],
  //     ["Quick Release", "Yes (Elbow)"],
  //     ["Noise Level", "21 dBA (QuietAir)"],
  //     ["Frame Design", "Compact Under-Eye"],
  //     ["Cleaning", "Daily with Mild Soap & Water"],
  //     ["Cushion Replacement", "Every 3 Months"],
  //     ["Best For", "Active Sleepers, Stomach Sleepers"],
  //   ],
  //   reviews: [],
  //   other: ["airfit-f30", "dreamwear-full-face", "airfit-f20"],
  // },
  // airfitf20her:{
  //   id: "airfit-f20-her",
  //   name: "AirFit F20 for Her Full Face Mask",
  //   category: "Mask",
  //   image: airfitF20HerImg,
  //   extraImages: [airfitF20Her1, airfitF20Her2, airfitF20Her3, airfitF20Her4],
  //   price: 149,
  //   priceId: "price_airfit_f20_her",
  //   rating: 5,
  //   reviewCount: 0,
  //   inStock: true,
  //   description: "Specifically designed for women with elegant lavender accents and smaller size options. Features the same innovative InfinitySeal cushion and QuietAir technology as the standard F20 for exceptional comfort and effectiveness.",
  //   longDescription: `The AirFit F20 for Her Full Face Mask offers women-specific sizing and elegant design while maintaining all the breakthrough features that make the F20 ResMed's most popular mask. Featuring stylish lavender accents instead of the standard blue, this mask comes in Small and Medium sizes specifically tailored for smaller facial features common in women. The revolutionary InfinitySeal cushion technology adapts to your unique facial contours with its dual-wall silicone design, providing a secure, comfortable seal that moves with you throughout the night. The compact, flexible frame sits comfortably under the eyes, eliminating the need for forehead support and providing an unrestricted field of vision for bedtime reading or TV watching. Plush, padded headgear features four adjustable points and innovative magnetic clips on the lower straps, making putting on and taking off the mask remarkably simple. The quick-release elbow allows you to disconnect from CPAP tubing without removing the mask, perfect for middle-of-night bathroom trips. With QuietAir diffuser technology featuring small multidirectional openings, this mask operates at an ultra-quiet 21 decibels - 89% quieter than previous designs. The 360-degree rotating elbow adapts to all sleeping positions, making this ideal for active sleepers who frequently change positions during the night.`,
  //   metrics: [
  //     {
  //       icon: Heart,
  //       title: "Women-Specific Sizing",
  //       desc: "Small and Medium sizes tailored for female facial features.",
  //     },
  //     {
  //       icon: Sparkles,
  //       title: "Elegant Design",
  //       desc: "Stylish lavender accents for personalized aesthetics.",
  //     },
  //     {
  //       icon: Shield,
  //       title: "InfinitySeal Cushion",
  //       desc: "Adaptive dual-wall silicone fits 97% of facial profiles.",
  //     },
  //     {
  //       icon: Volume2,
  //       title: "Ultra Quiet",
  //       desc: "QuietAir technology at whisper-quiet 21 dBA.",
  //     },
  //     {
  //       icon: Eye,
  //       title: "Open Vision",
  //       desc: "Under-eye frame with no forehead support.",
  //     },
  //     {
  //       icon: Zap,
  //       title: "Magnetic Clips",
  //       desc: "Easy snap-on assembly with quick-release elbow.",
  //     },
  //   ],
  //   specifications: [
  //     ["Manufacturer", "ResMed"],
  //     ["Model", "AirFit F20 for Her"],
  //     ["Type", "Full Face CPAP Mask (Women's)"],
  //     ["Cushion Type", "InfinitySeal Silicone"],
  //     ["Sizes Available", "Small, Medium"],
  //     ["Design Accents", "Lavender"],
  //     ["Frame Design", "Flexible Under-Eye Frame"],
  //     ["Headgear", "Plush Padded with Magnetic Clips"],
  //     ["Quick Release", "Yes (Elbow)"],
  //     ["Noise Level", "21 dBA (QuietAir)"],
  //     ["Field of Vision", "Open (No Forehead Support)"],
  //     ["Cleaning", "Daily with Mild Soap & Water"],
  //     ["Cushion Replacement", "Every 3 Months"],
  //     ["Compatibility", "All CPAP/BiPAP Machines, AirMini"],
  //   ],
  //   reviews: [],
  //   other: ["airfit-f20", "airtouch-f20", "airfit-f30"],
  // },
  // airfitf30small:{
  //   id: "airfit-f30-small",
  //   name: "AirFit F30 Full Face Mask - Small",
  //   category: "Mask",
  //   image: airfitF30SmallImg,
  //   extraImages: [airfitF30Small1, airfitF30Small2, airfitF30Small3, airfitF30Small4],
  //   price: 139,
  //   priceId: "price_airfit_f30_small",
  //   rating: 5,
  //   reviewCount: 0,
  //   inStock: true,
  //   description: "Compact full face mask in Small size with revolutionary under-nose cushion. Perfect for smaller facial features, providing full face therapy without nasal bridge contact for ultimate comfort.",
  //   longDescription: `The AirFit F30 Full Face Mask in Small size is specifically designed for users with smaller facial features who need the effectiveness of full face therapy without the bulk or discomfort of traditional full face masks. This innovative mask features an under-nose cushion design that delivers comprehensive mouth and nose coverage while completely avoiding contact with the sensitive nasal bridge area. The result is full face therapy effectiveness without the red marks, pressure points, or discomfort typically associated with larger full face masks. The compact, flexible frame provides an open field of vision, allowing you to comfortably wear glasses, read, or watch TV before sleep. The Small size is ideal for individuals with petite facial features, youth transitioning to adult masks, or anyone who finds standard-sized masks too large or uncomfortable. Featuring QuietAir elbow technology that operates at a whisper-quiet 21 decibels, this mask ensures peaceful sleep for both you and your bed partner. The plush headgear includes magnetic clips on the lower straps for effortless snap-on assembly, while the quick-release elbow allows easy tube disconnection without mask removal. With three points of adjustment and a flexible frame that adapts to your unique facial contours, the Small F30 combines precision fit, minimal contact, and maximum comfort for effective sleep apnea therapy.`,
  //   metrics: [
  //     {
  //       icon: Minimize,
  //       title: "Small Size Fit",
  //       desc: "Specifically designed for smaller facial features.",
  //     },
  //     {
  //       icon: ShieldCheck,
  //       title: "Under-Nose Design",
  //       desc: "Full face coverage without nasal bridge pressure.",
  //     },
  //     {
  //       icon: Eye,
  //       title: "Compact Profile",
  //       desc: "Minimal coverage with open line of sight.",
  //     },
  //     {
  //       icon: Volume2,
  //       title: "Quiet Operation",
  //       desc: "QuietAir technology at 21 dBA for peaceful sleep.",
  //     },
  //     {
  //       icon: Zap,
  //       title: "Easy Assembly",
  //       desc: "Magnetic clips and quick-release for convenience.",
  //     },
  //     {
  //       icon: Users,
  //       title: "Versatile Fit",
  //       desc: "Ideal for petite adults and transitioning youth.",
  //     },
  //   ],
  //   specifications: [
  //     ["Manufacturer", "ResMed"],
  //     ["Model", "AirFit F30"],
  //     ["Type", "Full Face CPAP Mask (Under-Nose)"],
  //     ["Size", "Small"],
  //     ["Cushion Type", "Under-Nose Silicone Seal"],
  //     ["Frame Design", "Compact Flexible Frame"],
  //     ["Headgear", "Plush with Magnetic Clips"],
  //     ["Nasal Bridge Contact", "None"],
  //     ["Quick Release", "Yes (Elbow)"],
  //     ["Noise Level", "21 dBA (QuietAir)"],
  //     ["Field of Vision", "Open & Unrestricted"],
  //     ["Cleaning", "Daily with Mild Soap & Water"],
  //     ["Cushion Replacement", "Every 3 Months"],
  //     ["Best For", "Smaller Faces, Petite Adults"],
  //   ],
  //   reviews: [],
  //   other: ["airfit-f30", "airfit-f30i", "airfit-f20-her"],
  // },
};

const ProductDetails = () => {
  const navigate = useNavigate();
  const { categoryName, productId } = useParams();
  const product = products[productId];
  console.log(product, productId);

  const [mainImage, setMainImage] = useState(product ? product.image : "");
  const [quantity, setQuantity] = useState(1);
  const [accordion, setAccordion] = useState({
    description: true,
    specifications: true,
    features: true,
  });

  if (!product) {
    return <h2 className="text-center mt-20 text-2xl">Product not found</h2>;
  }

  const allImages = [product.image, ...(product.extraImages || [])];

  const handleCheckout = async (priceId) => {
    console.log("Checkout with quantity:", quantity, "priceId:", priceId);
    alert(`Proceeding to checkout with ${quantity} item(s)`);
  };

  const toggleAccordion = (section) => {
    setAccordion((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="hover:text-green-600 cursor-pointer">Home</span>
              <span>/</span>
              <span
                onClick={() => navigate("/categories")}
                className="hover:text-green-600 cursor-pointer"
              >
                Category
              </span>
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
              {/* <div className="flex items-center gap-3 mb-4">
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
              </div> */}

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-500">CAD</span>
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
                Buy Now - ${product.price * quantity}
              </button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <Truck className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-xs font-medium text-gray-700">
                    Standard Shipping
                  </p>
                  <p className="text-xs text-gray-500">Price $25</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-xs font-medium text-gray-700">
                    1 Year Warranty
                  </p>
                  <p className="text-xs text-gray-500">Full coverage</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-xs font-medium text-gray-700">
                    30-Day Returns
                  </p>
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
                {accordion.description ? (
                  <ChevronUp className="w-6 h-6 text-gray-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                )}
              </button>
              {accordion.description && (
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
                {accordion.specifications ? (
                  <ChevronUp className="w-6 h-6 text-gray-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                )}
              </button>
              {accordion.specifications && (
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
                  {accordion.features ? (
                    <ChevronUp className="w-6 h-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  )}
                </button>
                {accordion.features && (
                  <div className="px-6 pb-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {product.metrics.map((metric, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                              <Info className="w-6 h-6 text-green-600" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {metric.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {metric.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* {product.reviews.length > 0 && (
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
          )} */}
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
                    <Link to={`/category/${categoryName}/${otherId}/details`}>
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
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
