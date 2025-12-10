import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  User,
  Activity,
  Moon,
  Heart,
  AlertTriangle,
  Calendar,
  FileText,
  Wind,
  TrendingUp,
  Skull,
} from "lucide-react";
import UserSidebar from "./UserSidebar";
import UserNav from "./UserNav";
import DRecom from "../../components/DRecom";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSpaceActive, setIsSpaceActive] = useState(false);

  // Get userId from localStorage
  const getUserId = () => {
    const userStr = localStorage.getItem("auth");
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        return user.user._id;
      } catch (e) {
        console.error("Error parsing user data:", e);
        return null;
      }
    }
    return null;
  };

  const userId = getUserId();
  const token = localStorage.getItem("token");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSpaceToggle = () => {
    setIsSpaceActive(!isSpaceActive);
  };

  const formatValue = (type, value) => {
    if (!value) return "N/A";
    if (type === "createdAt" || type === "updatedAt") {
      return new Date(value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    return value;
  };

  const getQuizData = async () => {
    if (!userId) {
      console.error("No user ID found");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/v1/user/get-quiz/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (data?.success) {
        setQuizData(data.quiz);
      } else {
        setQuizData(null);
      }
    } catch (error) {
      console.error(error);
      setQuizData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      getQuizData();
    } else {
      setLoading(false);
    }
  }, [userId]);

  const StatusBadge = ({ condition, yesText, noText, type = "default" }) => {
    const isPositive = condition === "Yes";
    const colors = {
      danger: isPositive
        ? "bg-red-100 text-red-800 border-red-200"
        : "bg-green-100 text-green-800 border-green-200",
      warning: isPositive
        ? "bg-yellow-100 text-yellow-800 border-yellow-200"
        : "bg-green-100 text-green-800 border-green-200",
      default: isPositive
        ? "bg-gray-200 text-gray-800 border-gray-300"
        : "bg-gray-200 text-gray-800 border-gray-300",
    };

    return (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-sm text-sm font-medium border ${colors[type]} transition-all duration-200`}
      >
        {isPositive ? yesText : noText}
      </span>
    );
  };

  // Show Skull loader while loading
  if (loading) {
    return (
      <div className="dashboard-container">
        <UserSidebar
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          onSpaceToggle={handleSpaceToggle}
          isSpaceActive={isSpaceActive}
        />
        <div
          className={`dashboard-main ${sidebarOpen ? "shifted" : ""}  ${
            isSpaceActive ? "freeSpaceDash" : "dashboard-main"
          }`}
        >
          <UserNav />
          <div className="dashboard-content">
            <div className="min-h-screen pt-2">
              <div className="space-y-6">
                {/* Patient Information Card Skull */}
                <div className="bg-white rounded-sm shadow-lg overflow-hidden">
                  <div className="user-active-sidebar text-black px-6 py-4">
                    <Skull className="h-6 w-48" />
                  </div>
                  <div className="p-6 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="space-y-3">
                          <Skull className="h-20 w-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sleep Assessment Results Skull */}
                <div className="bg-white rounded-sm shadow-lg overflow-hidden">
                  <div className="user-active-sidebar text-black px-6 py-4">
                    <Skull className="h-6 w-64" />
                  </div>
                  <div className="p-6 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[...Array(4)].map((_, i) => (
                        <Skull key={i} className="h-24 w-full" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DRecom />
          </div>
        </div>
      </div>
    );
  }

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
            {/* Content Wrapper with animations */}
            <div className="min-h-screen pt-2">
              {!quizData ? (
                <div className="bg-white rounded-sm shadow-lg p-12 text-center opacity-0 animate-fadeIn">
                  <Moon className="w-16 h-16 text-green-700 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    No Quiz Data Available
                  </h4>
                  <p className="text-gray-600">
                    Complete the sleep assessment to view your results here.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Patient Information Card */}
                  <div
                    className="bg-white rounded-sm shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl opacity-0 animate-fadeIn"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <div className="user-active-sidebar text-black px-6 py-4 flex items-center gap-3">
                      <User className="w-6 h-6" />
                      <h2 className="text-xl font-semibold">
                        Patient Information
                      </h2>
                    </div>
                    <div className="p-6 bg-gray-50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3 p-4 bg-white rounded-lg group hover:shadow-md transition-all duration-200">
                            <div className="mt-1 text-gray-400 group-hover:text-green-700 transition-colors duration-200">
                              <User className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 font-medium">
                                Full Name
                              </p>
                              <p className="text-lg font-semibold text-gray-900">
                                {quizData.user?.firstName}{" "}
                                {quizData.user?.lastName}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-4 bg-white rounded-lg group hover:shadow-md transition-all duration-200">
                            <div className="mt-1 text-gray-400 group-hover:text-green-700 transition-colors duration-200">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 font-medium">
                                Email
                              </p>
                              <p className="text-lg text-gray-900">
                                {quizData.user?.email}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3 p-4 bg-white rounded-lg group hover:shadow-md transition-all duration-200">
                            <div className="mt-1 text-gray-400 group-hover:text-green-700 transition-colors duration-200">
                              <Activity className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 font-medium">
                                Gender
                              </p>
                              <p className="text-lg font-semibold text-gray-900">
                                {quizData.gender}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-4 bg-white rounded-lg group hover:shadow-md transition-all duration-200">
                            <div className="mt-1 text-gray-400 group-hover:text-green-700 transition-colors duration-200">
                              <TrendingUp className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 font-medium">
                                Height & Weight
                              </p>
                              <p className="text-lg text-gray-900">
                                {quizData.heightUnit === "cm"
                                  ? `${quizData.heightCm} cm`
                                  : `${quizData.heightFeet}'${
                                      quizData.heightInches || 0
                                    }"`}
                                {" • "}
                                {quizData.weight} {quizData.weightUnit}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Assessment Details */}
                  <div
                    className="bg-white rounded-sm shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl opacity-0 animate-fadeIn"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <div className="user-active-sidebar text-black px-6 py-4 flex items-center gap-3">
                      <Calendar className="w-6 h-6" />
                      <h2 className="text-xl font-semibold">
                        Assessment Details
                      </h2>
                    </div>
                    <div className="p-6 bg-gray-50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                          <Calendar className="w-5 h-5 text-green-700" />
                          <div>
                            <p className="text-sm text-gray-500 font-medium">
                              Assessment Date
                            </p>
                            <p className="text-lg font-semibold text-gray-900">
                              {formatValue("createdAt", quizData.createdAt)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                          <Calendar className="w-5 h-5 text-green-700" />
                          <div>
                            <p className="text-sm text-gray-500 font-medium">
                              Last Updated
                            </p>
                            <p className="text-lg font-semibold text-gray-900">
                              {formatValue("updatedAt", quizData.updatedAt)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sleep Assessment Results */}
                  <div
                    className="bg-white rounded-sm shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl opacity-0 animate-fadeIn"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <div className="user-active-sidebar text-black px-6 py-4 flex items-center gap-3">
                      <Moon className="w-6 h-6" />
                      <h2 className="text-xl font-semibold">
                        Sleep Assessment Results
                      </h2>
                    </div>
                    <div className="p-6 bg-gray-50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                          <div className="flex items-center gap-3 mb-3">
                            <Wind className="w-6 h-6 text-green-700" />
                            <h3 className="text-lg font-semibold text-gray-900">
                              Breathing During Sleep
                            </h3>
                          </div>
                          <StatusBadge
                            condition={quizData.breathingStopped}
                            yesText="Yes - Breathing stops"
                            noText="No breathing issues"
                            type="danger"
                          />
                        </div>

                        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                          <div className="flex items-center gap-3 mb-3">
                            <Activity className="w-6 h-6 text-green-700" />
                            <h3 className="text-lg font-semibold text-gray-900">
                              Snoring
                            </h3>
                          </div>
                          <StatusBadge
                            condition={quizData.snoreLoudly}
                            yesText="Yes - Loud snoring"
                            noText="No significant snoring"
                            type="warning"
                          />
                        </div>

                        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                          <div className="flex items-center gap-3 mb-3">
                            <Moon className="w-6 h-6 text-green-700" />
                            <h3 className="text-lg font-semibold text-gray-900">
                              Daytime Fatigue
                            </h3>
                          </div>
                          <StatusBadge
                            condition={quizData.tiredDuringDay}
                            yesText="Yes - Tired during day"
                            noText="No daytime fatigue"
                            type="warning"
                          />
                        </div>

                        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                          <div className="flex items-center gap-3 mb-3">
                            <Heart className="w-6 h-6 text-green-700" />
                            <h3 className="text-lg font-semibold text-gray-900">
                              Blood Pressure
                            </h3>
                          </div>
                          <StatusBadge
                            condition={quizData.highBloodPressure}
                            yesText="Yes - High BP"
                            noText="Normal BP"
                            type="danger"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sleep Study Exclusions */}
                  {quizData.sleepStudyExclusions &&
                    quizData.sleepStudyExclusions.length > 0 && (
                      <div
                        className="bg-white rounded-sm shadow-lg overflow-hidden border-2 border-red-200 transform transition-all duration-300 hover:shadow-xl opacity-0 animate-fadeIn"
                        style={{ animationDelay: "0.4s" }}
                      >
                        <div className="user-active-sidebar text-black px-6 py-4 flex items-center gap-3">
                          <AlertTriangle className="w-6 h-6" />
                          <h2 className="text-xl font-semibold">
                            Sleep Study Alarms
                          </h2>
                        </div>
                        <div className="p-6 bg-red-50">
                          <div className="space-y-2">
                            {quizData.sleepStudyExclusions.map(
                              (exclusion, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-red-100 hover:shadow-md transition-all duration-200"
                                >
                                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                  <p className="text-gray-700">{exclusion}</p>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  {/* Additional Symptoms */}
                  {quizData.additionalDescriptions &&
                    quizData.additionalDescriptions.length > 0 && (
                      <div
                        className="bg-white rounded-sm shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl opacity-0 animate-fadeIn"
                        style={{ animationDelay: "0.3s" }}
                      >
                        <div className="user-active-sidebar text-black px-6 py-4 flex items-center gap-3">
                          <FileText className="w-6 h-6" />
                          <h2 className="text-xl font-semibold">
                            Additional Symptoms
                          </h2>
                        </div>
                        <div className="p-6 bg-gray-50">
                          <div className="space-y-2">
                            {quizData.additionalDescriptions.map(
                              (symptom, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-200 hover:shadow-md transition-all duration-200"
                                >
                                  <div className="w-2 h-2 user-active-sidebar rounded-sm"></div>
                                  <p className="text-gray-700">{symptom}</p>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  {/* Additional Notes */}
                  {quizData.additionalNotes && (
                    <div
                      className="bg-white rounded-sm shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl opacity-0 animate-fadeIn"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <div className="user-active-sidebar text-black px-6 py-4 flex items-center gap-3">
                        <FileText className="w-6 h-6" />
                        <h2 className="text-xl font-semibold">
                          Additional Notes
                        </h2>
                      </div>
                      <div className="p-6 bg-gray-50">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <p className="text-gray-700 leading-relaxed">
                            {quizData.additionalNotes}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
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
      `}</style>
    </>
  );
};

export default Dashboard;
