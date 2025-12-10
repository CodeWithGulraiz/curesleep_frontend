import BannerImage from "../assets/images/banner.jpg"; // Ensure you have an image at this path or update the path accordingly
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "lucide-react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("' + BannerImage + '")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative min-h-screen overflow-hidden   text-white flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/65"></div>
      {/* Animated background elements */}

      {/* Main content - centered */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="space-y-10">
          <div className="container">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl xl:text-7xl font-bold leading-tight">
                <span className="text-white block">
                  At Home Sleep Apnea Testing and Treatment
                </span>
              </h1>

              <p className="text-6xl lg:text-5xl text-white font-bold">
                Put your sleep apnea to bed.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-5">
            <Link
              to="/take-quiz"
              className="inline-flex items-center px-8 py-4 bg-white text-[#00aa63] font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Take the Sleep Quiz
              <ArrowRightCircle className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-green-500/10">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;
