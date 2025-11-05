import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo-w.png";
import Logo2 from "../../assets/images/logo.png";
import { toast } from "react-toastify";
import { FaBarsStaggered, FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { useCart } from "../../context/CartContext";

const HNavbar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const authDataString = localStorage.getItem("auth");
  const auth = authDataString ? JSON.parse(authDataString) : null;

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img
            className="h-10 transition-all duration-300"
            src={isScrolled ? Logo2 : Logo}
            alt="logo"
          />
        </Link>

        {/* Side Menu */}
        <div
          id="sidemenu"
          className={`navbar-left ${isMenuOpen ? "active-menu" : ""}`}
        >
          <button className="close-btn" onClick={closeMenu}>
            <IoClose />
          </button>

          <Link className={`${isScrolled ? "nav-link" : "nav-link-h"}`} to="/">
            Home
          </Link>

          <Link
            className={`${isScrolled ? "nav-link" : "nav-link-h"}`}
            to="/about"
          >
            About us
          </Link>
          <Link
            className={`${isScrolled ? "nav-link" : "nav-link-h"}`}
            to="/contact"
          >
            Contact Us
          </Link>
          <Link
            className={`${isScrolled ? "nav-link" : "nav-link-h"}`}
            to="/services"
          >
            Services
          </Link>
          <div
          className="relative"
          onClick={(prev) => setIsProductsOpen(!prev)}
        >
          <Link
            className={`${isScrolled ? "nav-link" : "nav-link-h"}`}
            to="/products"
          >
            Products   <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition" />
          </Link>

          {/* Dropdown menu */}
          {isProductsOpen && (
            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-60 py-2 border border-gray-100 z-50">
              <Link
                to="/category/testing-machines"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Testing Machines
              </Link>
              <Link
                to="/category/cpap-machines"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                CPAP Machines
              </Link>
              <Link
                to="/category/masks"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Masks
              </Link>
              <Link
                to="/category/accessories"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Accessories
              </Link>
            </div>
          )}
        </div>
          <Link
            className={`${isScrolled ? "sleep-quiz-button" : "nav-link-h"}`}
            to="/take-quiz"
          >
            <span className="sleep-icon">😴</span>
            Take the Sleep Quiz
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="open-nav" onClick={openMenu}>
            <FaBarsStaggered />
          </button>

          {!auth?.user ? (
            <Link className="login-btn" to="/login">
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
