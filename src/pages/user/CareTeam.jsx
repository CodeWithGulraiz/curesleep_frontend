import React, { useEffect, useState } from "react";

import UserSidebar from "./UserSidebar";
import UserNav from "./UserNav";
import DRecom from "../components/DRecom";

const CareTeam = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSpaceActive, setIsSpaceActive] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const authDataString = localStorage.getItem("auth");
  const auth = authDataString ? JSON.parse(authDataString) : null;
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
      setVisibleCards([0, 1, 2, 3]);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Coach",
      role: "Patient Support Coach",
      description:
        "Your dedicated coach will guide you through every step of your sleep therapy journey, providing personalized support and motivation.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      alt: "Professional female coach smiling",
      bgColor: "bg-purple-50",
      accentColor: "text-purple-700",
    },
    {
      id: 2,
      name: "Coach",
      role: "Sleep Therapy Specialist",
      description:
        "Our experienced coaches provide expert guidance on CPAP therapy, helping you adapt and succeed with your treatment plan.",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      alt: "Professional female coach with blonde hair",
      bgColor: "bg-blue-50",
      accentColor: "text-blue-700",
    },
    {
      id: 3,
      name: "Order Specialist",
      role: "Equipment Coordinator",
      description:
        "Your order specialist ensures seamless equipment delivery and setup, making your transition to therapy as smooth as possible.",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      alt: "Professional female order specialist",
      bgColor: "bg-green-50",
      accentColor: "text-green-700",
    },
    {
      id: 4,
      name: "Patient Care Specialist",
      role: "Healthcare Coordinator",
      description:
        "Our patient care specialists provide comprehensive support, addressing your questions and ensuring optimal treatment outcomes.",
      image:
        "https://images.unsplash.com/photo-1594824720837-6d29ba75bb38?w=400&h=400&fit=crop&crop=face ",
      alt: "Professional Asian female patient care specialist",
      bgColor: "bg-indigo-50",
      accentColor: "text-indigo-700",
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
              className={`mb-8 sm:mb-10 md:mb-12 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 tracking-tight pt-2 sm:pt-3 px-2 mb-5">
                <span className="text-gray-900">
                  {auth?.user?.firstName && auth.user.firstName.toUpperCase()}
                  'S{" "}
                </span>
                <span className="text-green-700">CARE TEAM</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 tracking-wide px-2 uppercase">
                Your Patient Experience Team
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed px-2 sm:px-4">
                This group of individuals will help you navigate the GEM
                experience from ordering an HST through adjusting to therapy.
                Once you order a CPAP your assigned coach will reach out to you.
              </p>
            </div>

            {/* Team Cards Section */}
            <div className="px-2 sm:px-4 mb-8 sm:mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 max-w-7xl mx-auto">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className={`${
                      member.bgColor
                    } rounded-sm shadow-md overflow-hidden transition-all duration-700 transform ${
                      visibleCards.includes(index)
                        ? "translate-y-0 opacity-100 scale-100"
                        : "translate-y-10 opacity-0 scale-95"
                    } hover:scale-105 hover:shadow-xl group`}
                    style={{
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
                    {/* Member Image */}
                    <div className="relative overflow-hidden p-3  ">
                      <div className="w-24 h-20 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-gray-100 transition-all duration-300">
                        <img
                          src={member.image}
                          alt={member.alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Member Content */}
                    <div className="px-2 pb-2 text-center">
                      <h3
                        className={`text-lg sm:text-xl font-bold mb-1 ${member.accentColor} group-hover:scale-105 transition-all duration-300`}
                      >
                        {member.name}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                        {member.role}
                      </p>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300 px-2">
                        {member.description}
                      </p>

                      {/* Contact Button */}
                      <button
                        className={`bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 text-xs sm:text-sm uppercase tracking-wide`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          Connect
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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
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

export default CareTeam;
