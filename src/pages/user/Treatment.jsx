import React, { useEffect, useState } from "react";

import UserSidebar from "./UserSidebar";
import UserNav from "./UserNav";
import DRecom from "../components/DRecom";

const Treatment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSpaceActive, setIsSpaceActive] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSpaceToggle = () => {
    setIsSpaceActive(!isSpaceActive);
  };

  useEffect(() => {
    // Trigger animations on component mount
    setIsVisible(true);

    // Animate cards with staggered delay
    const timer = setTimeout(() => {
      setVisibleCards([0, 1]);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const treatmentCards = [
    {
      id: 1,
      title: "CPAP THERAPY",
      description:
        "Continuous Positive Airway Pressure, or CPAP, is the most common treatment for sleep apnea.",
      image:
        "https://portal.gem.health/static/media/cpap-treatment.3bd42eb3375c75e4e90b.jpg", // Replace with actual CPAP therapy image
      alt: "CPAP therapy treatment showing patient using CPAP machine",
    },
    {
      id: 2,
      title: "ORAL APPLIANCE THERAPY",
      description:
        "Oral appliance therapy uses a mouthguard-like appliance to treat sleep apnea and can be a good alternative for certain people.",
      image:
        "https://portal.gem.health/static/media/dental-treatment.a12ee324b25aa7be7bda.jpg", // Replace with actual oral appliance therapy image
      alt: "Oral appliance therapy showing dental consultation",
    },
  ];

  return (
    <>
      <div className="dashboard-container">
        <UserSidebar
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          onSpaceToggle={handleSpaceToggle}
          isSpaceActive={isSpaceActive}
        />
        {/* Main Content */}
        <div
          className={`dashboard-main ${sidebarOpen ? "shifted" : ""}  ${
            isSpaceActive ? "freeSpaceDash" : "dashboard-main"
          }`}
        >
          <UserNav />
          <div className="dashboard-content">
            {/* Hero Section */}
            <div
              className={`mb-6 sm:mb-8 md:mb-12 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight pt-2 sm:pt-3 px-2 uppercase">
                GEM SLEEP Treatments
              </h1>
              <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-4xl leading-relaxed px-2 sm:px-4">
                There are two simple ways to get treatment options from GEM
                SLEEP: Arrange for a home sleep study, or upload your own sleep
                study report. A GEM SLEEP Provider will review the report and
                provide options to start a new treatment or continue your
                existing treatment through GEM.
              </p>
            </div>

            {/* Treatment Cards Section */}
            <div className="px-2 sm:px-4 mb-8 sm:mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
                {treatmentCards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden   transition-all duration-700 transform ${
                      visibleCards.includes(index)
                        ? "translate-y-0 opacity-100 scale-100"
                        : "translate-y-10 opacity-0 scale-95"
                    } hover:scale-101   group`}
                    style={{
                      transitionDelay: `${index * 200}ms`,
                    }}
                  >
                    {/* Card Image */}
                    <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-8">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-2 tracking-wide uppercase group-hover:text-green-700 transition-colors duration-300">
                        {card.title}
                      </h2>

                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        {card.description}
                      </p>

                      {/* Learn More Button */}
                      <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 sm:py-3 px-4 sm:px-5 rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 uppercase tracking-wide text-sm sm:text-base  ">
                        <span className="flex items-center justify-center gap-2">
                          Learn More
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <DRecom />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }

        .group:hover .animate-bounce {
          animation: bounce 1s infinite;
        }

        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            transform: translate3d(0, 0, 0);
          }
          40%,
          43% {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            transform: translate3d(0, -5px, 0);
          }
          70% {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            transform: translate3d(0, -3px, 0);
          }
          90% {
            transform: translate3d(0, -1px, 0);
          }
        }
      `}</style>
    </>
  );
};

export default Treatment;
