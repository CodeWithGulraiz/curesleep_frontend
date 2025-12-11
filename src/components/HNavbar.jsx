"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { toast } from "sonner";
const HNavbar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const authDataString = localStorage.getItem("auth");
  const auth = authDataString ? JSON.parse(authDataString) : null;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API}/api/v1/auth/logout`
      );

      if (res.data.success) {
        localStorage.removeItem("token");
        localStorage.removeItem("auth");
        toast.info("Logged out successfully");
        navigate("/");
      } else {
        toast.error("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("An error occurred while logging out. Please try again.");
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 m-2 w-[calc(100%-1rem)] rounded-3xl z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-xl border border-primary/10"
          : "bg-black/30  backdrop-blur-md"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-8xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-90 transition flex-shrink-0"
        >
          <img src={logo} alt="Restora Sleep" className="h-10 w-auto" />
        </Link>
        <div
          id="sidemenu"
          className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-2xl transition-transform duration-300 z-40 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:translate-x-0 md:h-auto md:bg-transparent md:shadow-none md:w-auto md:flex md:items-center md:gap-8`}
        >
          <button
            className="absolute top-4 right-4 md:hidden text-black hover:text-primary transition"
            onClick={closeMenu}
          >
            <IoClose className="w-6 h-6" />
          </button>
          <nav className="flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-0 pt-12 md:pt-0">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-primary"
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-primary"
              }`}
              onClick={closeMenu}
            >
              About us
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-primary"
              }`}
              onClick={closeMenu}
            >
              Contact Us
            </Link>

            <Link
              to="/services"
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-primary"
              }`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <div
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className={`flex items-center gap-2 font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-primary"
                }`}
                onClick={() => navigate("/categories")}
              >
                Products
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isProductsOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-xl rounded-xl w-64 py-2 border border-gray-200 z-50">
                  <Link
                    to="/category/testing"
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    Testing Machines
                  </Link>
                  <Link
                    to="/category/cpap"
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    CPAP Machines
                  </Link>
                  <Link
                    to="/category/masks"
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    Masks
                  </Link>
                  <Link
                    to="/category/accessories"
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    Accessories
                  </Link>
                </div>
              )}
            </div>
            <Link
            to="/take-quiz"
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-200 md:ml-2 ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl"
                  : "border-2 border-white text-white hover:bg-primary hover:border-primary"
              }`}
              onClick={closeMenu}
            >
              Take Sleep Quiz
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition"
            onClick={openMenu}
          >
            <FaBarsStaggered
              className={`w-6 h-6 transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            />
          </button>
          {!auth?.user ? (
            <Link
              to="#login"
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl"
                  : "border-2 border-white text-white hover:bg-primary hover:border-primary"
              }`}
            >
              Login
            </Link>
          ) : (
            <div className="custom-nav-item relative">
              <Link className="cart-btn relative" to="/cart">
                <FaCartShopping />
                <div className="cart-number">{cart.length}</div>
              </Link>

              <button
                className={`acc-circle border-0 ${
                  isScrolled
                    ? "bg-gray-700 text-white"
                    : "bg-gray-500 text-white"
                } hover:bg-gray-600`}
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen}
              >
                {auth?.user?.firstName && auth.user.firstName[0].toUpperCase()}
              </button>

              {dropdownOpen && (
                <ul className="custom-dropdown-menu absolute right-0 mt-2 bg-white text-black shadow-md rounded-md">
                  <li>
                    <NavLink
                      className="custom-dropdown-item block px-4 py-2 hover:bg-gray-100"
                      to={`/dashboard/user`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <button
                      className="custom-dropdown-item block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        handleLogout();
                        setDropdownOpen(false);
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HNavbar;
