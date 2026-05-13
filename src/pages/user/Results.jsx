import React, { useEffect, useState } from "react";
import axios from "axios";
import UserSidebar from "./UserSidebar";
import UserNav from "./UserNav";
import { apiUrl, getApiOrigin } from "../../utils/apiBase";
import DashboardResourcesSection from "../../components/dashboard/DashboardResourcesSection";
import DashboardPhoneCta from "../../components/dashboard/DashboardPhoneCta";
import SleepTestReportCard from "../../components/dashboard/SleepTestReportCard";

const resultsBlogPosts = [
  {
    id: 1,
    title: "How Sleep Apnea Impacts The Body",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    href: "/sleep-apnea-explained",
  },
  {
    id: 2,
    title: "Understanding your AHI Score",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    href: "/whycuresleep",
  },
  {
    id: 3,
    title: "What is a Sleep Study and How Does it Work?",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    href: "/services",
  },
];

const Results = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSpaceActive, setIsSpaceActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [report, setReport] = useState(null);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const handleSpaceToggle = () => setIsSpaceActive((prev) => !prev);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("auth");

    if (!token || !userStr) {
      setLoading(false);
      return;
    }

    let userId = null;
    try {
      userId = JSON.parse(userStr)?.user?._id;
    } catch (error) {
      console.error("Failed to parse auth user:", error);
    }

    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchReport = async () => {
      try {
        const { data } = await axios.get(
          apiUrl(`/api/v1/user/sleep-report/${userId}`),
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (data?.success) {
          setReport(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch sleep report:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, []);

  const handleDownload = () => {
    if (!report?.reportPdfUrl) return;
    const raw = String(report.reportPdfUrl).trim();
    const isAbsolute = /^https?:\/\//i.test(raw);
    const normalizedUrl = isAbsolute
      ? raw
      : `${getApiOrigin() || window.location.origin}${raw.startsWith("/") ? raw : `/${raw}`}`;
    window.open(normalizedUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="dashboard-container">
      <UserSidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        onSpaceToggle={handleSpaceToggle}
        isSpaceActive={isSpaceActive}
      />

      <div
        className={`dashboard-main min-h-screen flex flex-col ${sidebarOpen ? "shifted" : ""} ${
          isSpaceActive ? "freeSpaceDash" : ""
        }`}
      >
        <UserNav />

        <div className="dashboard-content !min-h-0 flex-1 flex flex-col min-h-0 pb-0 bg-slate-50/60">
          <div className="flex flex-col flex-1 min-h-0 pt-2">
            <div className="shrink-0">
              <section className="p-2 md:p-3 lg:p-4 mb-6 md:mb-8">
                <div className="max-w-4xl">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 uppercase">
                    Sleep test results
                  </h1>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    Below are the results of your home sleep test. Your
                    CureSleep clinician will use these results to recommend your
                    treatment plan; we&apos;re here to support you every step of
                    the way.
                  </p>
                </div>
              </section>

              <section className="px-2 md:px-3 lg:px-4 mb-2">
                {loading ? (
                  <div className="rounded-2xl bg-white border border-slate-200 p-12 text-center text-slate-500">
                    <div className="inline-block h-10 w-10 animate-spin rounded-full border-2 border-slate-200 border-t-emerald-600 mb-4" />
                    <p>Loading your results…</p>
                  </div>
                ) : (
                  <SleepTestReportCard
                    report={report}
                    onDownload={handleDownload}
                  />
                )}
              </section>

              <DashboardResourcesSection
                posts={resultsBlogPosts}
                title="Sleep resources"
                viewAllHref="/sleep-apnea-explained"
                viewAllLabel="View all"
              />
            </div>

            <DashboardPhoneCta fillRemainingViewport />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
