import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { toast } from "react-toastify";
import { FaBarsStaggered, FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const authDataString = localStorage.getItem("auth");
  const auth = authDataString ? JSON.parse(authDataString) : null;

  const handleLogout = async () => {
    try {
      // Send POST request to the server to log out
      const res = await axios.post(
        `${import.meta.env.VITE_API}/api/v1/auth/logout`
      );

      if (res.data.success) {
        localStorage.removeItem("token");
        localStorage.removeItem("auth");

        // Show a logout notification
        toast.info("Logged out successfully");

        // Redirect to the login page
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

  return (
    <>
      <div className={`navbarr `}>
        <div className="navbar-logo">
          <Link to={`/`}>
            <img className="logo" src={Logo} alt="logo" />
          </Link>
        </div>

        <div
          id="sidemenu"
          className={`navbar-left ${isMenuOpen ? "active-menu" : ""}`}
        >
          <button className="close-btn" onClick={closeMenu}>
            <IoClose />
          </button>

          <Link className="nav-link " to="/">
            Home
          </Link>
          <Link className="nav-link " to="/about">
            About us
          </Link>
          <Link className="nav-link " to="/contact">
            Contact Us
          </Link>
          <Link className="nav-link " to="/services">
            services
          </Link>
         <div
          className="relative"
          
          onMouseEnter={() => setIsProductsOpen((prev) => !prev)}
          onMouseLeave={() => setIsProductsOpen((prev) => !prev)}
        >
          <Link
            className="nav-link flex justify-between gap-1 items-center text-gray-700 hover:text-blue-600 transition cursor-pointer"
            to="/categories"
          >
            Products   <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition" />
          </Link>

          {/* Dropdown menu */}
          {isProductsOpen && (
            <div className="absolute left-0 mt-0 bg-white shadow-lg rounded-lg w-60 py-2 border border-gray-100 z-50">
              <Link
                to="/category/testing"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Testing Machines
              </Link>
              <Link
                to="/category/cpap"
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
          <Link className="sleep-quiz-button" to="/take-quiz">
            <span className="sleep-icon">😴</span>
            Take Sleep Quiz
          </Link>
        </div>

        <div className="nav-right-c">
          <button className="open-nav" onClick={openMenu}>
            <FaBarsStaggered />
          </button>

          {!auth?.user ? (
            <>
              <Link className="login-btn" to="/login">
                Login
              </Link>
            </>
          ) : (
            <>
              <div className="custom-nav-item">
                <Link className="cart-btn" to="/cart">
                  <FaCartShopping />
                  <div className="cart-number">{cart?.length}</div>
                </Link>
                <button
                  className="acc-circle border-0 bg-gray-500 hover:bg-gray-600"
                  onClick={toggleDropdown}
                  aria-expanded={dropdownOpen}
                >
                  {auth?.user?.firstName &&
                    auth.user.firstName[0].toUpperCase()}
                </button>
                {dropdownOpen && (
                  <ul className="custom-dropdown-menu">
                    <li>
                      <NavLink
                        className="custom-dropdown-item"
                        to={`/dashboard/user`}
                        onClick={() => setDropdownOpen(false)}
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="custom-dropdown-item"
                        onClick={() => {
                          handleLogout();
                          setDropdownOpen(false);
                        }}
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mt-bottom"></div>
    </>
  );
};

export default Navbar;
