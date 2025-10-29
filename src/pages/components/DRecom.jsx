import { Figma, ShoppingCart, Info } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../context/CartContext"; // adjust path if needed
import { toast } from "react-toastify";

const DRecom = () => {
  const [loading, setLoading] = useState(false);
  const [chips, setChips] = useState([]);
  const { cart, setCart } = useCart();

  const fetchChipsData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/v1/chips/get-all-chips`
      );
      if (data?.success) {
        setChips(data?.chips || []);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChipsData();
  }, []);

  const handleAddToCart = (chip) => {
    const alreadyInCart = cart.some((item) => item._id === chip._id);

    if (alreadyInCart) {
      toast.error("Device already present in cart");
      return;
    }

    const updatedCart = [...cart, { ...chip, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Device added to cart");
  };

  return (
    <div
      className="bg-white rounded-sm shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl opacity-0 animate-fadeIn mt-5"
      style={{ animationDelay: "0.5s" }}
    >
      <div className="user-active-sidebar text-black px-6 py-4 flex items-center gap-3">
        <Figma className="w-6 h-6" />
        <h2 className="text-xl font-semibold">Recommended for you</h2>
      </div>

      <div className="flex justify-center p-6">
        <div className="relative flex gap-6 w-full">
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : chips.length > 0 ? (
            chips.slice(0, 2).map((chip) => (
              <div
                key={chip._id}
                className="user-active-sidebar border-0 rounded-2xl p-6 border border-slate-600/30 shadow-xl w-1/2 flex flex-col transition-transform duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  <h3 className="text-black text-2xl font-bold mb-2">
                    {chip.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-black">
                      ${chip.price}
                    </span>
                  </div>
                </div>

                <div className="flex-grow mb-4">
                  <img
                    src={chip.image}
                    alt={chip.title}
                    className="rounded-xl w-full h-48 object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => handleAddToCart(chip)}
                    className="w-full bg-green-700 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                    <Info className="w-5 h-5" />
                    Learn More
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No recommendations available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DRecom;
