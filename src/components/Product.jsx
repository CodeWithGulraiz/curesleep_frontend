import { Link, useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import TestingInfoSection from "./testing/TestingInfoSection";

const Products = () => {
  const { categoryName } = useParams();
  const accentColors = {
    green: "bg-green-600 hover:bg-green-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    blue: "bg-blue-600 hover:bg-blue-700",
    pink: "bg-pink-600 hover:bg-pink-700",
  };
  const { products, loading, error } = useProducts();
  // if (loading) return <LoadingSpinner />;
  // if (error) return <ErrorMessage error={error} />;
  const filteredProducts = products.filter(
    (product) => product.category === categoryName,
  );

  // Handle invalid or missing categories
  if (filteredProducts.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700">
          No products found for this category.
        </h2>
      </section>
    );
  }

  const isTestingCategory = categoryName === "testing";

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 capitalize">
          {isTestingCategory
            ? "Home Sleep Apnea Tests"
            : `${categoryName} Products`}
        </h2>
        <p
          className={`${isTestingCategory ? "text-xl text-muted-foreground max-w-3xl mx-auto mb-6" : "text-gray-600 max-w-2xl mx-auto"}`}
        >
          {isTestingCategory
            ? "Accurate, physician-reviewed testing—done comfortably at home"
            : `Explore our collection of ${categoryName.replace("-", " ")} — designed to improve sleep health and comfort.`}
        </p>
        {isTestingCategory && (
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Click below to view our selection of clinically validated home sleep
            apnea tests. We offer the SleepImage® Ring and EnsoData-supported
            sleep testing, both designed to deliver high-quality diagnostic data
            comparable to in-lab polysomnography (PSG) when used in appropriate
            patients.
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-[90rem] mx-auto">
        {filteredProducts.map((product) => {
          return (
            <Link
              key={product.id}
              to={`/category/${categoryName}/${product.id}/details/`}
              className={`relative bg-gradient-to-br ${product.gradient} rounded-3xl shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all overflow-hidden border border-gray-100 group`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center p-10">
                <div>
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <span
                    className={`inline-block text-white px-6 py-3 rounded-xl font-medium transition ${
                      accentColors[product.accent] ||
                      "bg-gray-600 hover:bg-gray-700"
                    }`}
                  >
                    Details
                  </span>
                </div>

                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Testing Category Information Section */}
      {isTestingCategory && (
        <div className="mt-10">
          <TestingInfoSection />
        </div>
      )}
    </section>
  );
};

export default Products;
