import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-w.png";
import ProgressBar from "./ProgressBar";
import { ArrowRightCircle } from "lucide-react";
const SleepQuiz = () => {
  return (
    <div className="min-h-screen bg-slate-800 flex flex-col items-center justify-center px-6 py-12">
      {/* Logo */}
      <div className="flex justify-end w-full mb-3">
        <Link
          to={"/login"}
          className="inline-flex items-center justify-end mb-4 text-white"
        >
          Already have an account ?{" "}
          <span className="font-bold ml-1 underline"> Sign In</span>
        </Link>
      </div>
      <div className=" mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <Link
              to={"/"}
              className="inline-flex items-center justify-center mb-4"
            >
              <img className="page-logo" src={Logo} alt="" />
            </Link>
            <ProgressBar currentStep={0} />
          </div>
        </div>
        {/* Main Heading */}
        <h2 className="text-white text-4xl md:text-5xl lg:text-5xl font-bold mb-8 leading-tight">
          THINK YOU MIGHT HAVE SLEEP APNEA?
        </h2>
        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
          RestoraSleep solutions is a virtual sleep clinic. Take our one-minute
          sleep quiz, which will help us determine your risk of Obstructive
          Sleep Apnea (OSA) and recommend the best next step. If home sleep
          testing is recommended, you can get started right away.
        </p>
        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/assessment"
            className="inline-flex items-center px-8 py-4 bg-white text-[#00aa63] font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start The Quiz
            <ArrowRightCircle className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SleepQuiz;
