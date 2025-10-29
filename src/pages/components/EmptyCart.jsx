import { ShoppingCart, Sparkles } from "lucide-react";

const EmptyCart = () => {
  return (
    <div className="text-center py-20 px-4">
      <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl p-12 max-w-lg mx-auto border border-slate-100 transform transition-all duration-300 hover:scale-105">
        {/* Icon Container */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-green-700 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <ShoppingCart className="w-16 h-16 text-white" strokeWidth={2} />
          </div>
          <div className="absolute top-0 right-1/4 animate-bounce">
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Your cart is empty
        </h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Looks like you haven't added anything to your cart yet. Start
          exploring our amazing products!
        </p>
      </div>
    </div>
  );
};

export default EmptyCart;
