import { CheckCircle, Clock, Shield, PackageCheck } from "lucide-react";
import Product2 from "../../assets/images/product2.png";

const DeviceT = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content Left */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Smart Fingertip Pulse Oximeter
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Track your overnight health with continuous SpO₂ and heart rate
                monitoring. Designed for comfort and accuracy, it helps you spot
                drops in oxygen levels and irregular heart rates while you sleep
                — perfect for better sleep insights and overall wellness.
              </p>
            </div>
          </div>

          {/* Image Right Side */}
          <div className="relative order-1 lg:order-2 rounded-lg">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl h-64 sm:h-80 lg:h-96 flex items-center justify-center border-none animate-float">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={Product2}
                alt="Follow Up Support"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceT;
