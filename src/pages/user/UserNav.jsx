import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaPowerOff } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useCart } from "../../context/CartContext";
import { FaCartShopping } from "react-icons/fa6";
import { apiUrl } from "../../utils/apiBase";
import CenteredModal from "../../components/common/CenteredModal";
const UserNav = ({ title }) => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [authUser, setAuthUser] = useState(null);
  const [settingsForm, setSettingsForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

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

  useEffect(() => {
    try {
      const auth = JSON.parse(localStorage.getItem("auth") || "{}");
      const user = auth?.user || null;
      setAuthUser(user);
      setSettingsForm({
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        email: user?.email || "",
        phone: user?.phone || user?.mobile || user?.contactNumber || "",
      });
    } catch {
      setAuthUser(null);
    }
  }, []);

  const displayName =
    [authUser?.firstName, authUser?.lastName].filter(Boolean).join(" ").trim() ||
    authUser?.email ||
    "Account";
  const initials = (
    [authUser?.firstName, authUser?.lastName]
      .filter(Boolean)
      .map((name) => name[0])
      .join("")
      .slice(0, 2) || "A"
  ).toUpperCase();

  const handleOpenSettings = () => {
    setMenuOpen(false);
    setSettingsOpen(true);
  };

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        apiUrl("/api/v1/auth/logout"),
        {},
        { withCredentials: true }
      );

      if (!res?.data?.success) {
        toast.error(res?.data?.message || "Logout failed. Please try again.");
        return;
      }

      localStorage.removeItem("token");
      localStorage.removeItem("auth");
      toast.info("Logged out successfully.");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error(
        error.response?.data?.message || "Server error during logout. Please try again."
      );
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
            <span className="hidden sm:inline max-w-[160px] truncate text-gray-900">
              {displayName}
            </span>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 font-semibold text-sm">
              {authUser ? initials : <AiOutlineUser />}
            </div>
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
              <button
                onClick={handleOpenSettings}
                className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100 transition"
              >
                <FiSettings className="mr-2 text-gray-600" /> Settings
              </button>
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

      <CenteredModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        title="Account Settings"
        contentClassName="max-w-2xl mx-auto text-slate-700 leading-relaxed"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold mb-1">First name</label>
              <input
                type="text"
                value={settingsForm.firstName}
                disabled
                className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-gray-100 text-gray-700 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Last name</label>
              <input
                type="text"
                value={settingsForm.lastName}
                disabled
                className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-gray-100 text-gray-700 cursor-not-allowed"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              value={settingsForm.email}
              disabled
              className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-gray-100 text-gray-700 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Phone number</label>
            <input
              type="text"
              value={settingsForm.phone}
              disabled
              className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-gray-100 text-gray-700 cursor-not-allowed"
            />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setSettingsOpen(false)}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Close
            </button>
          </div>
        </div>
      </CenteredModal>
    </div>
  );
};

export default UserNav;
