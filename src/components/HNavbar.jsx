"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { FaBarsStaggered, FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { toast } from "sonner";
import { apiUrl } from "../utils/apiBase";
const HNavbar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const authDataString = localStorage.getItem("auth");
  const auth = authDataString ? JSON.parse(authDataString) : null;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isWhyOpen, setIsWhyOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        apiUrl("/api/v1/auth/logout"),
        {},
        { withCredentials: true }
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
      className={`${
        isScrolled
          ? "sticky top-0 left-0 m-2 w-[calc(100%-1rem)] rounded-3xl z-50 bg-white/80 backdrop-blur-xl shadow-xl border border-primary/10"
          : "relative w-full bg-background"
      } transition-all duration-300`}
    >
      <div className="w-full grid grid-cols-[auto_1fr_auto] items-center px-5 py-4 gap-4">
        <div className="flex items-center min-w-0">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition flex-shrink-0"
          >
            <img
              src="/curesleep-logo.png"
              alt="CureSleep Solutions"
              className="h-[69.12px] w-auto"
            />
          </Link>
        </div>
        <div
          id="sidemenu"
          className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-2xl transition-transform duration-300 z-40 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:translate-x-0 md:h-auto md:bg-transparent md:shadow-none md:w-full md:flex md:items-center md:justify-center`}
        >
          <button
            className="absolute top-4 right-4 md:hidden text-black hover:text-primary transition"
            onClick={closeMenu}
          >
            <IoClose className="w-6 h-6" />
          </button>
          <nav className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 p-6 md:p-0 pt-12 md:pt-0">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>

            <div
              className="relative py-3"
              onMouseEnter={() => setIsWhyOpen(true)}
              onMouseLeave={() => setIsWhyOpen(false)}
            >
              <div
                className={`flex items-center gap-2 font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
              <span className="flex items-center gap-2">Why CureSleep</span>

                <button
                  type="button"
                aria-label="Toggle Why CureSleep menu"
                  className="p-0.5"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsWhyOpen((v) => !v);
                  }}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isWhyOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {isWhyOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-xl rounded-xl w-56 py-2 border border-gray-200 z-50">
                  <Link
                    to="/whycuresleep"
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => {
                      setIsWhyOpen(false);
                      closeMenu();
                    }}
                  >
                  About us
                  </Link>
                  <Link
                    to="/ourteam"
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => {
                      setIsWhyOpen(false);
                      closeMenu();
                    }}
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/sleep-apnea-explained"
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={closeMenu}
            >
              Sleep Apnea Explained
            </Link>
            <Link
              to="#"
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={closeMenu}
            >
              Articles
            </Link>

            {/* <Link
              to="/services"
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={closeMenu}
            >
              Services
            </Link> */}
            <div
              className="relative py-3 px-2 group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className={`flex items-center gap-2 font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-foreground hover:text-primary"
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
                <div className="absolute left-0 mt-1 bg-white shadow-xl rounded-xl w-64 py-2 border border-gray-200 z-50">
                  <Link
                    to="/category/testing"
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    Testing Machines
                  </Link>
                  <Link
                    to="/category/CPAP"
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    CPAP Machines
                  </Link>
                  <Link
                    to="/category/CPAP-MASK-PARTS"
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    CPAP Mask Parts
                  </Link>
                  <Link
                    to="/category/CPAP-CLEANING"
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    CPAP Cleaning
                  </Link>
                  <Link
                    to="/category/CPAP-MACHINE-FILTERS"
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    CPAP Machines Filters
                  </Link>
                  <Link
                    to="/category/CPAP-HUMIDIFIERS"
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    CPAP Humidifiers
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

            <div className="md:hidden flex flex-col gap-3 pt-2">
              <Link
                to="/take-quiz"
                className="inline-flex justify-center px-5 py-2 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 transition-all"
                onClick={closeMenu}
              >
                Take the sleep quiz
              </Link>
              {!auth?.user && (
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/register"
                    className="inline-flex justify-center px-4 py-2 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 transition-all"
                    onClick={closeMenu}
                  >
                    Create account
                  </Link>
                  <Link
                    to="/login"
                    className="inline-flex justify-center px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/5 transition-all"
                    onClick={closeMenu}
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-3 md:gap-4">
          <Link
            to="/take-quiz"
            className={`hidden md:inline-flex px-5 py-2 rounded-lg font-semibold transition-all duration-200 ${
              isScrolled
                ? "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl"
                : "bg-primary text-white hover:bg-primary/90"
            }`}
          >
            Take the sleep quiz
          </Link>
          <button
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition"
            onClick={openMenu}
          >
            <FaBarsStaggered
              className={`w-6 h-6 transition-colors ${
                isScrolled ? "text-primary" : "text-foreground"
              }`}
            />
          </button>
          {!auth?.user ? (
            <div className="hidden md:flex md:items-center md:gap-3">
              <Link
                to="/register"
                className={`px-5 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  isScrolled
                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                Create an account
              </Link>
              <p className="text-sm text-black whitespace-nowrap">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  login
                </Link>
              </p>
            </div>
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
