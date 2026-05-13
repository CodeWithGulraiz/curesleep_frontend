import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";
import ProductService from "../../services/productService";
import {
  FEATURED_TESTING_PRODUCT_IDS,
  FEATURED_TESTING_PRODUCTS,
} from "../../data/testingProducts";

const TESTING_CATEGORY = "testing";
const HIDDEN_PRODUCT_ID = "ensoData";

const accentColors = {
  green: "bg-green-600 hover:bg-green-700",
  purple: "bg-purple-600 hover:bg-purple-700",
  blue: "bg-blue-600 hover:bg-blue-700",
  pink: "bg-pink-600 hover:bg-pink-700",
};

/**
 * Recommended testing products on the user dashboard (in-dashboard detail + Stripe).
 */
const DashboardProductSection = ({
  className = "",
  title = "Products",
  subtitle = "Home sleep tests — explore options while you complete your assessment",
}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await ProductService.getAllProducts();
        const apiProducts = (data || []).filter(
          (p) =>
            p.category?.toLowerCase() === TESTING_CATEGORY &&
            FEATURED_TESTING_PRODUCT_IDS.includes(p.id) &&
            p.id !== HIDDEN_PRODUCT_ID,
        );
        const list =
          apiProducts.length > 0
            ? apiProducts
            : FEATURED_TESTING_PRODUCTS.filter(
                (product) => product.id !== HIDDEN_PRODUCT_ID,
              );
        if (!cancelled) setProducts(list);
      } catch {
        if (!cancelled) {
          setProducts(
            FEATURED_TESTING_PRODUCTS.filter(
              (product) => product.id !== HIDDEN_PRODUCT_ID,
            ),
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className={`bg-white rounded-sm border border-gray-200 overflow-hidden ${className}`.trim()}
    >
      <div className="user-active-sidebar text-black px-6 py-4 flex items-center gap-3">
        <Package className="w-6 h-6" />
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm font-normal text-gray-600">{subtitle}</p>
        </div>
      </div>

      <div className="p-4 sm:p-6 bg-gray-50">
        {loading ? (
          <p className="text-gray-500 text-center py-8">Loading products…</p>
        ) : products.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No products available right now.
          </p>
        ) : (
          <div
            className={`grid gap-6 lg:gap-8 w-full ${
              products.length === 1 ? "md:grid-cols-1 justify-items-center" : "md:grid-cols-2"
            }`}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/dashboard/user/product/${TESTING_CATEGORY}/${product.id}`}
                className={`relative bg-gradient-to-br ${product.gradient} rounded-2xl overflow-hidden border-2 border-transparent transition-[transform,border-color] duration-300 hover:border-green-700 hover:-translate-y-0.5 group ${
                  products.length === 1 ? "w-full max-w-4xl" : ""
                }`}
              >
                {product.recommended ? (
                  <span className="absolute top-3 right-3 z-10 rounded-full bg-primary text-white text-[11px] font-bold tracking-wide px-3 py-1 shadow-sm">
                    Recommended
                  </span>
                ) : null}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 items-center p-5 sm:p-7">
                  <div className="text-left min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base mb-4 line-clamp-4 leading-relaxed">
                      {product.description}
                    </p>
                    <span
                      className={`inline-block text-white px-4 py-2 rounded-lg text-sm font-medium transition ${
                        accentColors[product.accent] ||
                        "bg-gray-600 hover:bg-gray-700"
                      }`}
                    >
                      Order now
                    </span>
                  </div>
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full rounded-xl transform group-hover:scale-[1.02] transition-transform duration-300 max-h-52 object-cover sm:max-h-none"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardProductSection;
