import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Info,
  Lock,
  Minus,
  Plus,
  RotateCcw,
  Shield,
  Star,
  Truck,
} from "lucide-react";
import { apiUrl } from "../../utils/apiBase";
import { isSessionValid } from "../../utils/authSession";

/**
 * Shared product detail body (gallery, price, checkout, accordions, related).
 * Used by public ProductDetails and dashboard DashboardProductDetails.
 */
const ProductDetailView = ({
  product,
  categoryName,
  products = [],
  buildRelatedPath,
  embedded = false,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");
  const [accordion, setAccordion] = useState({
    description: true,
    specifications: true,
    features: true,
  });
  const allImages = product
    ? [product.image, ...(product.extraImages || [])]
    : [];
  const isLoggedIn = isSessionValid();
  const isPriceLocked = !!product?.loginRequiredForPrice && !isLoggedIn;
  const totalPrice = Number(product?.price || 0) * quantity;

  const handleCheckout = async () => {
    if (isPriceLocked) {
      window.location.href = "/login";
      return;
    }

    try {
      const auth = localStorage.getItem("auth");
      const customerEmail = auth
        ? JSON.parse(auth)?.user?.email || undefined
        : undefined;

      const response = await fetch(
        apiUrl("/api/v1/stripe/create-checkout-session"),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            priceId: product.priceId,
            quantity,
            customerEmail,
            productName: product.name,
            amount: product.price,
            image: product.image,
          }),
        },
      );

      const data = await response.json();
      if (!response.ok || !data.url) {
        throw new Error(data.error || "Failed to start checkout");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Checkout error:", error);
      alert(error.message || "Could not start checkout. Please try again.");
    }
  };

  const toggleAccordion = (section) => {
    setAccordion((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));

  useEffect(() => {
    if (product) {
      setMainImage(product.image ?? "");
    }
  }, [product]);

  const mainImageClass = embedded
    ? "w-full h-[min(360px,50vh)] object-contain"
    : "w-full h-[500px] object-contain";

  const relatedPath =
    buildRelatedPath ||
    ((id) => `/category/${categoryName}/${id}/details/`);

  return (
    <>
      <div
        className={`grid lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-2xl shadow-sm ${
          embedded ? "p-4 sm:p-6" : "p-8"
        }`}
      >
        <div>
          <div className="mb-4 bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
            <img
              src={mainImage}
              alt={product.name}
              className={mainImageClass}
            />
          </div>
          {allImages.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {allImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                    mainImage === img
                      ? "border-green-600 shadow-md"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {product.name}
          </h1>
          <div className="mb-6">
            {isPriceLocked ? (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <div className="flex items-center gap-2 text-amber-700 font-semibold">
                  <Lock className="w-5 h-5" />
                  Login to see the price
                </div>
                <Link
                  to="/login"
                  className="inline-block mt-3 text-sm font-medium text-amber-800 underline"
                >
                  Login to view price
                </Link>
              </div>
            ) : (
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500">CAD</span>
              </div>
            )}
          </div>
          <div className="mb-6">
            {product.inStock ? (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">In Stock</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-red-600">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-medium">Out of Stock</span>
              </div>
            )}
          </div>
          <div className="mb-6 text-gray-700 leading-relaxed">
            <p>{product.description}</p>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center gap-3">
              <div className="flex items-center border-2 border-gray-300 rounded-lg">
                <button
                  type="button"
                  onClick={decrementQuantity}
                  className="p-3 hover:bg-gray-100 transition disabled:opacity-50"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-2 font-semibold min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={incrementQuantity}
                  className="p-3 hover:bg-gray-100 transition"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCheckout}
            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl mb-4 ${
              isPriceLocked
                ? "bg-gray-700 text-white hover:bg-gray-800"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {isPriceLocked ? "Login to see price" : `Buy now $${totalPrice}`}
          </button>
          <div className="grid grid-cols-3 gap-4 pt-6 border-t">
            <div className="text-center">
              <Truck className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <p className="text-xs font-medium text-gray-700">
                Standard Shipping
              </p>
              <p className="text-xs text-gray-500">Price $25</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <p className="text-xs font-medium text-gray-700">
                1 Year Warranty
              </p>
              <p className="text-xs text-gray-500">Full coverage</p>
            </div>
            <div className="text-center">
              <RotateCcw className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <p className="text-xs font-medium text-gray-700">
                30-Day Returns
              </p>
              <p className="text-xs text-gray-500">Money back</p>
            </div>
          </div>
          {product.productInfo && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm">
                <p className="text-[15px] text-gray-800 leading-relaxed">
                  {product.productInfo}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-8 bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b">
          <button
            type="button"
            onClick={() => toggleAccordion("description")}
            className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Product Description
            </h3>
            {accordion.description ? (
              <ChevronUp className="w-6 h-6 text-gray-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-600" />
            )}
          </button>
          {accordion.description && (
            <div className="px-6 pb-6">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {product.longDescription}
              </div>
            </div>
          )}
        </div>
        <div className="border-b">
          <button
            type="button"
            onClick={() => toggleAccordion("specifications")}
            className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Specifications
            </h3>
            {accordion.specifications ? (
              <ChevronUp className="w-6 h-6 text-gray-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-600" />
            )}
          </button>
          {accordion.specifications && (
            <div className="px-6 pb-6">
              <table className="w-full">
                <tbody>
                  {product?.specifications?.map(([key, value], i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-4 py-3 font-medium text-gray-700 w-1/3">
                        {key}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {product?.metrics?.length > 0 && (
          <div className="border-b">
            <button
              type="button"
              onClick={() => toggleAccordion("features")}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Key Features
              </h3>
              {accordion.features ? (
                <ChevronUp className="w-6 h-6 text-gray-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>
            {accordion.features && (
              <div className="px-6 pb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {product.metrics.map((metric, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <Info className="w-6 h-6 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {metric.title}
                        </h4>
                        <p className="text-sm text-gray-600">{metric.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {product.other && product.other.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            You may also like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.other.map((otherId) => {
              const otherProduct = products.find((p) => p.id === otherId);
              if (!otherProduct) return null;

              return (
                <Link
                  key={otherId}
                  to={relatedPath(otherId)}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden group cursor-pointer block"
                >
                  <div className="aspect-square bg-gray-50 overflow-hidden">
                    <img
                      src={otherProduct.image}
                      alt={otherProduct.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition">
                      {otherProduct.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(otherProduct.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({otherProduct.reviewCount})
                      </span>
                    </div>
                    {otherProduct.loginRequiredForPrice && !isLoggedIn ? (
                      <p className="text-sm font-semibold text-amber-700 inline-flex items-center gap-1">
                        <Lock className="w-4 h-4" />
                        Login to see price
                      </p>
                    ) : (
                      <p className="text-2xl font-bold text-gray-900">
                        ${otherProduct.price}
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailView;
