"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaBarsStaggered, FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import axios from "axios";
import { toast } from "sonner";
import { apiUrl } from "../../utils/apiBase";
import { cn } from "@/lib/utils";

/**
 * Center-aligned marketing header for the revamped homepage only.
 * Uses `fixed` top positioning so it stays visible while scrolling (the homepage
 * `<main>` uses `overflow-x-hidden`, which prevents `position: sticky` from working).
 * `HomeRevampPage` adds top padding on `<main>` to offset this bar height.
 */
export default function RevampHomeNavbar() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const authDataString = localStorage.getItem("auth");
  const auth = authDataString ? JSON.parse(authDataString) : null;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isWhyOpen, setIsWhyOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = async () => {
    try {
      const res = await axios.post(apiUrl("/api/v1/auth/logout"), {}, { withCredentials: true });
      if (res.data.success) {
        localStorage.removeItem("token");
        localStorage.removeItem("auth");
        toast.info("Logged out successfully");
        navigate("/");
      } else {
        toast.error("Logout failed. Please try again.");
      }
    } catch {
      toast.error("An error occurred while logging out. Please try again.");
    }
  };

  const linkClass =
    "font-medium text-slate-700 transition hover:text-[#4DB6B1] whitespace-nowrap";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link to="/" className="z-20 flex shrink-0 items-center gap-2" onClick={closeMenu}>
          <img src="/curesleep-logo.png" alt="CureSleep Solutions" className="h-12 w-auto md:h-14" />
        </Link>

        <nav
          className={cn(
            "fixed inset-0 z-30 flex flex-col bg-white p-6 pt-20 transition md:static md:inset-auto md:z-10 md:flex md:flex-1 md:flex-row md:items-center md:justify-center md:gap-6 md:bg-transparent md:p-0 md:pt-0",
            isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0",
          )}
        >
          <button
            type="button"
            className="absolute right-4 top-4 md:hidden"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <IoClose className="h-7 w-7" />
          </button>

          <Link to="/" className={linkClass} onClick={closeMenu}>
            Home
          </Link>

          <div
            className="relative py-1"
            onMouseEnter={() => setIsWhyOpen(true)}
            onMouseLeave={() => setIsWhyOpen(false)}
          >
            <button
              type="button"
              className={cn(linkClass, "inline-flex items-center gap-1")}
              onClick={() => setIsWhyOpen((v) => !v)}
            >
              Why CureSleep
              <ChevronDown className={cn("h-4 w-4 transition", isWhyOpen && "rotate-180")} />
            </button>
            {isWhyOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-52 rounded-xl border border-slate-200 bg-white py-2 shadow-xl md:left-1/2 md:-translate-x-1/2">
                <Link
                  to="/whycuresleep"
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[#4DB6B1]/10"
                  onClick={() => {
                    setIsWhyOpen(false);
                    closeMenu();
                  }}
                >
                  About us
                </Link>
                <Link
                  to="/ourteam"
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[#4DB6B1]/10"
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

          <Link to="/sleep-apnea-explained" className={linkClass} onClick={closeMenu}>
            Sleep Apnea Explained
          </Link>

          <div
            className="relative py-1"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button
              type="button"
              className={cn(linkClass, "inline-flex items-center gap-1")}
              onClick={() => navigate("/categories")}
            >
              Products
              <ChevronDown className={cn("h-4 w-4 transition", isProductsOpen && "rotate-180")} />
            </button>
            {isProductsOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 max-h-[70vh] w-64 overflow-y-auto rounded-xl border border-slate-200 bg-white py-2 shadow-xl md:left-1/2 md:-translate-x-1/2">
                {[
                  ["/category/testing", "Testing Machines"],
                  ["/category/CPAP", "CPAP Machines"],
                  ["/category/CPAP-MASK-PARTS", "CPAP Mask Parts"],
                  ["/category/CPAP-CLEANING", "CPAP Cleaning"],
                  ["/category/CPAP-MACHINE-FILTERS", "CPAP Machines Filters"],
                  ["/category/CPAP-HUMIDIFIERS", "CPAP Humidifiers"],
                  ["/category/masks", "Masks"],
                  ["/category/accessories", "Accessories"],
                ].map(([href, label]) => (
                  <Link
                    key={href}
                    to={href}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[#4DB6B1]/10"
                    onClick={() => {
                      setIsProductsOpen(false);
                      closeMenu();
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/take-quiz"
            className="mt-4 rounded-xl bg-[#4DB6B1] px-5 py-3 text-center font-semibold text-white shadow md:mt-0 md:px-4 md:py-2"
            onClick={closeMenu}
          >
            Take the sleep quiz
          </Link>

          {!auth?.user && (
            <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-6 sm:hidden">
              <Link
                to="/register"
                className="rounded-lg bg-[#4A6FA5] px-4 py-3 text-center font-semibold text-white"
                onClick={closeMenu}
              >
                Create an account
              </Link>
              <Link to="/login" className="text-center font-medium text-[#4A6FA5]" onClick={closeMenu}>
                Login
              </Link>
            </div>
          )}
        </nav>

        <div className="z-20 flex shrink-0 items-center gap-2 md:gap-3">
          <Link to="/cart" className="relative p-2 text-slate-700 hover:text-[#4DB6B1]" aria-label="Cart">
            <FaCartShopping className="h-5 w-5" />
            {cart.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#4A6FA5] px-1 text-[10px] font-bold text-white">
                {cart.length}
              </span>
            )}
          </Link>

          {!auth?.user ? (
            <div className="hidden items-center gap-2 sm:flex">
              <Link
                to="/register"
                className="rounded-lg bg-[#4A6FA5] px-3 py-2 text-sm font-semibold text-white hover:opacity-90"
              >
                Create an account
              </Link>
              <Link to="/login" className="text-sm font-medium text-[#4A6FA5] hover:underline">
                Login
              </Link>
            </div>
          ) : (
            <div className="relative">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4A6FA5] text-sm font-bold text-white"
                onClick={() => setDropdownOpen((v) => !v)}
                aria-expanded={dropdownOpen}
              >
                {auth?.user?.firstName?.[0]?.toUpperCase() ?? "U"}
              </button>
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 min-w-[10rem] rounded-md border border-slate-200 bg-white py-1 shadow-lg">
                  <li>
                    <NavLink
                      className="block px-4 py-2 text-sm hover:bg-slate-50"
                      to="/dashboard/user"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-slate-50"
                      onClick={() => {
                        void handleLogout();
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

          <button
            type="button"
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaBarsStaggered className="h-6 w-6 text-slate-800" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          aria-label="Close overlay"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
