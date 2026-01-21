import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "./sidebar.css";
import SignLogo from "../../assets/images/logo.png";
import { FaAngleLeft, FaBars, FaBarsStaggered } from "react-icons/fa6";
import { CiReceipt } from "react-icons/ci";
import { TbStethoscope } from "react-icons/tb";
import { RiMedicineBottleLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiBookBookmark } from "react-icons/bi";

const UserSidebar = ({ sidebarOpen, toggleSidebar, isSpaceActive }) => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <>
      {/* Sidebar Toggle Button (for Mobile) */}
      <button type="button" className="user-menu-bars" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <nav
        id="user-sidebar"
        className={`${sidebarOpen ? "user-active" : ""} ${
          isSpaceActive ? "freeSpace" : ""
        }`}
      >
        {/* Close Button */}
        <div className="user-custom-menu">
          <button type="button" id="user-closeSidebar" onClick={toggleSidebar}>
            <IoClose />
          </button>
        </div>

        <div className="pb-2">
          {/* Logo + Collapse Button */}
          <div className="my-2 inc-dec-main">
            <Link to="/">
              {!isSpaceActive && (
                <img className="user-sidebar-logo" src={SignLogo} alt="logo" />
              )}
            </Link>
            {/* <button
              className={`inc-dec-btn ${
                isSpaceActive ? "rotateIcon set-inc-dec-btn" : ""
              }`}
              onClick={onSpaceToggle}
            >
              <FaAngleLeft />
            </button> */}
          </div>

          {/* Sidebar Menu */}
          <ul
            style={{ listStyle: "none" }}
            className={`user-list-unstyled user-components mb-5 ${
              isSpaceActive ? "manage-side" : "mt-4"
            }`}
          >
            <li
              className={
                activePath === "/dashboard/user" ? "user-active-sidebar" : ""
              }
            >
              <Link to="/dashboard/user">
                <CiReceipt className="me-3" />
                {!isSpaceActive && "Sleep test"}
              </Link>
            </li>

            <li
              className={
                activePath === "/dashboard/user/diagnosis"
                  ? "user-active-sidebar"
                  : ""
              }
            >
              <Link to="/dashboard/user/diagnosis">
                <TbStethoscope className="me-3" />
                {!isSpaceActive && "Diagnosis"}
              </Link>
            </li>

            <li
              className={
                activePath === "/dashboard/user/treatment"
                  ? "user-active-sidebar"
                  : ""
              }
            >
              <Link to="/dashboard/user/treatment">
                <RiMedicineBottleLine className="me-3" />
                {!isSpaceActive && "Treatment"}
              </Link>
            </li>

            <li
              className={
                activePath === "/dashboard/user/care-team"
                  ? "user-active-sidebar"
                  : ""
              }
            >
              <Link to="/dashboard/user/care-team">
                <HiOutlineUserGroup className="me-3" />
                {!isSpaceActive && "Care Team"}
              </Link>
            </li>

            <li
              className={
                activePath === "/dashboard/resources"
                  ? "user-active-sidebar"
                  : ""
              }
            >
              <Link to="/dashboard/resources">
                <BiBookBookmark className="me-3" />
                {!isSpaceActive && "Resources"}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default UserSidebar;
