import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "./sidebar.css";
import { FaBars } from "react-icons/fa6";
import { CiReceipt } from "react-icons/ci";
import { RiMedicineBottleLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiBookBookmark, BiClipboard, BiLineChart } from "react-icons/bi";
import axios from "axios";
import { apiUrl } from "../../utils/apiBase";

const UserSidebar = ({ sidebarOpen, toggleSidebar, isSpaceActive }) => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("");
  const [hasCompletedQuiz, setHasCompletedQuiz] = useState(false);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("auth");
    if (!token || !userStr) {
      setHasCompletedQuiz(false);
      return;
    }
    let userId;
    try {
      userId = JSON.parse(userStr)?.user?._id;
    } catch {
      setHasCompletedQuiz(false);
      return;
    }
    if (!userId) return;

    let cancelled = false;
    (async () => {
      try {
        const { data } = await axios.get(
          apiUrl(`/api/v1/user/get-quiz/${userId}`),
          { headers: { Authorization: `Bearer ${token}` } },
        );
        if (!cancelled) setHasCompletedQuiz(!!data?.success);
      } catch {
        if (!cancelled) setHasCompletedQuiz(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [location.pathname]);

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
                <img className="user-sidebar-logo" src="/curesleep-logo.png" alt="CureSleep Solutions" />
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

            {!hasCompletedQuiz && (
              <li
                className={
                  activePath === "/dashboard/user/assessment"
                    ? "user-active-sidebar"
                    : ""
                }
              >
                <Link to="/dashboard/user/assessment">
                  <BiClipboard className="me-3" />
                  {!isSpaceActive && "Sleep assessment"}
                </Link>
              </li>
            )}

            <li
              className={
                activePath === "/dashboard/user/results"
                  ? "user-active-sidebar"
                  : ""
              }
            >
              <Link to="/dashboard/user/results">
                <BiLineChart className="me-3" />
                {!isSpaceActive && "Results"}
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
                activePath === "/dashboard/resources"
                  ? "user-active-sidebar"
                  : ""
              }
            >
              <Link to="/sleep-apnea-explained">
                <BiBookBookmark className="me-3" />
                {!isSpaceActive && "Resources"}
              </Link>
            </li>
          </ul>
        </div>

        <div className={`sidebar-support ${isSpaceActive ? "sidebar-support-compact" : ""}`}>
          <div className="sidebar-support-links-simple">
            <Link to="/contact" className="sidebar-support-simple-link">
              {!isSpaceActive ? "Contact Us" : "Contact"}
            </Link>
            <Link to="#" className="sidebar-support-simple-link">
              {!isSpaceActive ? "Privacy" : "Privacy"}
            </Link>
            <Link to="#" className="sidebar-support-simple-link">
              {!isSpaceActive ? "Terms" : "Terms"}
            </Link>
            <a
              href="https://www.hhs.gov/hipaa/index.html"
              target="_blank"
              rel="noreferrer"
              className="sidebar-support-simple-link"
            >
              {!isSpaceActive ? "HIPAA Privacy Link" : "HIPAA"}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UserSidebar;
