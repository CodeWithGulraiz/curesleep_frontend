import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaPowerOff } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { useCart } from "../../context/CartContext";
import { FaCartShopping } from "react-icons/fa6";
const UserNav = ({ title }) => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API}/api/v1/auth/logout`,
        {},
        { withCredentials: true }
      );
      toast.info("Logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
      toast.warning("Server error during logout. Session cleared locally.");
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("auth");
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-between items-center bg-white   px-4 py-3  ">
      {/* Page Title */}
      <h3 className="text-xl font-semibold">{title}</h3>

      {/* User Avatar + Dropdown */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/cart")}
          className="flex items-center gap-2 cursor-pointer font-bold"
        >
          CART
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 font-semibold text-lg relative">
            <FaCartShopping />
            <div className="cart-number">{cart?.length}</div>
          </div>
        </button>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center gap-2 cursor-pointer font-bold"
          >
            ACCOUNT
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 font-semibold text-lg">
              <AiOutlineUser />
            </div>
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
              <button
                onClick={handleLogout}
                className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100 transition"
              >
                <FaPowerOff className="mr-2 text-gray-600" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserNav;
