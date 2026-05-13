import React, { useEffect, useState } from "react";
import UserSidebar from "./UserSidebar";
import UserNav from "./UserNav";
import ProductService from "../../services/productService";
import TreatmentProductCard from "../../components/treatment/TreatmentProductCard";
import DashboardResourcesSection from "../../components/dashboard/DashboardResourcesSection";
import DashboardPhoneCta from "../../components/dashboard/DashboardPhoneCta";

const treatmentBlogPosts = [
  {
    id: 1,
    title: "10 CPAP Hacks for Better Sleep",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    href: "/services",
  },
  {
    id: 2,
    title: "How Sleep Apnea Impacts The Body",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    href: "/sleep-apnea-explained",
  },
  {
    id: 3,
    title: "What is REM Sleep?",
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1200&q=80",
    href: "/whycuresleep",
  },
];

const productBadges = ["Most Famous", "Best Selling", "Most Popular"];

const Treatment = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSpaceActive, setIsSpaceActive] = useState(false);
  const [cpapProducts, setCpapProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleSpaceToggle = () => setIsSpaceActive(!isSpaceActive);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await ProductService.getProductsByCategory("CPAP");
        setCpapProducts(Array.isArray(data) ? data.slice(0, 3) : []);
      } catch (e) {
        console.error(e);
        setCpapProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

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
              <section className="p-2 md:p-3 lg:p-4 mb-8 md:mb-10">
                <div className="max-w-4xl">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 uppercase">
                    My treatment
                  </h1>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    Your CureSleep clinician has recommended a personalized
                    treatment plan for you. Our team will support you from
                    getting started through ongoing care and supplies.
                  </p>
                </div>
              </section>

              <section className="px-2 md:px-3 lg:px-4 mb-8 md:mb-10">
                <div className="flex flex-col gap-6 md:gap-8 w-full max-w-none">
                  {loading ? (
                    <div className="rounded-2xl bg-white shadow-md border border-slate-100 p-10 text-center text-slate-500">
                      Loading treatment products…
                    </div>
                  ) : cpapProducts.length === 0 ? (
                    <div className="rounded-2xl bg-white shadow-md border border-slate-100 p-10 text-center text-slate-500">
                      No treatment products available right now.
                    </div>
                  ) : (
                    cpapProducts.map((product, index) => (
                      <TreatmentProductCard
                        key={product.id}
                        product={product}
                        badge={productBadges[index] || "Recommended"}
                      />
                    ))
                  )}
                </div>
              </section>

              <DashboardResourcesSection
                posts={treatmentBlogPosts}
                title="Resources"
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

export default Treatment;
