import React from "react";
import { CheckCircle, Clock } from "lucide-react";

const Device = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Left */}
          <div className="relative order-1">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl h-64 sm:h-80 lg:h-96 flex items-center justify-center border-none  ">
              <img
                className="w-full h-full object-cover rounded-xl animate-image"
                src={
                  "https://cdn.prod.website-files.com/630e6814478c66d312f27a7b/6489f56703522341e181d444_WatchPat%20on%20nightstand.webp"
                }
                alt="Experts"
              />
            </div>
          </div>

          {/* Text and Icons Right */}
          <div className="space-y-6 lg:space-y-8 order-2">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Sleep Evaluations without the wait
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                The first step to better sleep is a diagnosis. We perform a
                clinical evaluation without you stepping foot in a clinic. It
                starts with a quick online assessment followed by a home sleep
                study reviewed by our clinicians virtually. In just a few days,
                you’ll receive a diagnosis - a process that may take months with
                an in-person clinic.
              </p>
            </div>

            {/* Icon Features */}
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 text-green-600 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <span className="text-base text-gray-700 font-medium">
                  Easy to use
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-gray-800 text-white p-2 rounded-full">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="text-base text-gray-700 font-medium">
                  24/7 Working
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Device;
