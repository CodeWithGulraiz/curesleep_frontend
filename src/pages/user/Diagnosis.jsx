import React, { useEffect, useState } from "react";
import { Moon, ShoppingCart } from "lucide-react";
import DiagnosisImg from "../../assets/images/diagnosis.webp";
import UserSidebar from "./UserSidebar";
import UserNav from "./UserNav";
import DRecom from "../../components/DRecom";

const Diagnosis = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSpaceActive, setIsSpaceActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSpaceToggle = () => {
    setIsSpaceActive(!isSpaceActive);
  };

  useEffect(() => {
    // Trigger animations on component mount
    setIsVisible(true);
  }, []);

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
          <div className="dashboard-content  ">
            {/* Hero Section */}
            <div
              className={`text-center mb-6 sm:mb-8 md:mb-12 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight pt-2 sm:pt-3 px-2">
                LET'S GET YOU DIAGNOSED
              </h1>
              <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
                There are two simple ways to get treatment options from GEM
                SLEEP: Arrange for a home sleep study, or upload your own sleep
                study report. A GEM SLEEP Provider will review the report and
                provide options to start a new treatment or continue your
                existing treatment through GEM.
              </p>
            </div>

            {/* Options Grid */}
            <div className="px-2 sm:px-0">
              {/* Home Sleep Study Option */}
              <div
                className={`bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 delay-200 hover:shadow-xl hover:scale-101 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="p-3 sm:p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                      <img
                        className="w-full max-w-[150px] sm:max-w-[300px] md:max-w-[400px] h-auto"
                        src={DiagnosisImg}
                        alt="Home Sleep Study Device"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                        GET A HOME SLEEP STUDY
                      </h2>

                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                        GEM SLEEP provides WatchPat™ devices for your Home Sleep
                        Test. Complete the study with just one night of sleep --
                        no cords, no wires, no lab -- the entire study is done
                        completely at home.
                      </p>

                      <button className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group text-sm sm:text-base">
                        <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>ORDER A SLEEP STUDY</span>
                        <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
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

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        @media (max-width: 640px) {
          .dashboard-content {
            padding: 0.5rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Diagnosis;
