import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import UserNav from "./UserNav";
import { useProduct, useProducts } from "../../hooks/useProducts";
import ProductDetailView from "../../components/product/ProductDetailView";

const DashboardProductDetails = () => {
  const { categoryName, productId } = useParams();
  const { products } = useProducts();
  const { product, error } = useProduct(productId);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSpaceActive, setIsSpaceActive] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleSpaceToggle = () => setIsSpaceActive(!isSpaceActive);

  return (
    <div className="dashboard-container">
      <UserSidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        onSpaceToggle={handleSpaceToggle}
        isSpaceActive={isSpaceActive}
      />
      <div
        className={`dashboard-main ${sidebarOpen ? "shifted" : ""} ${
          isSpaceActive ? "freeSpaceDash" : "dashboard-main"
        }`}
      >
        <UserNav />
        <div className="dashboard-content">
          <div className="bg-white border-b border-gray-200 px-4 py-3 flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-semibold tracking-wide text-gray-900 uppercase">
              Treatment{" "}
              <span className="text-gray-400 font-normal mx-1">|</span>
              <span className="font-mono text-xs font-normal normal-case text-gray-600">
                {productId}
              </span>
            </p>
            <Link
              to="/dashboard/user"
              className="text-sm font-medium text-green-700 hover:text-green-800"
            >
              Back to dashboard
            </Link>
          </div>
          <div className="p-4 md:p-6 bg-gray-50 min-h-[60vh]">
            {!product && !error ? (
              <div className="max-w-7xl mx-auto text-center py-16 text-gray-600">
                Loading product…
              </div>
            ) : error || !product ? (
              <div className="max-w-7xl mx-auto text-center py-16 text-gray-600">
                {error ? "Could not load this product." : "Product not found."}
              </div>
            ) : (
              <div className="max-w-7xl mx-auto w-full">
                <ProductDetailView
                  product={product}
                  categoryName={categoryName}
                  products={products}
                  buildRelatedPath={(id) =>
                    `/dashboard/user/product/${categoryName}/${id}`
                  }
                  embedded
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProductDetails;
