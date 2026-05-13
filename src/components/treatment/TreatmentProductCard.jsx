import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const BADGE_PURPLE = "bg-[#7367F0]";

/**
 * Horizontal treatment product row — matches dashboard “my treatment” reference layout.
 */
const TreatmentProductCard = ({ product, badge }) => {
  const categorySegment = encodeURIComponent(product.category || "CPAP");
  const detailPath = `/dashboard/user/product/${categorySegment}/${product.id}`;

  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-100/80 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="grid md:grid-cols-[minmax(200px,280px)_1fr] gap-6 md:gap-10 items-center p-6 md:p-8">
        <div className="flex flex-col">
          <span
            className={`${BADGE_PURPLE} text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-md w-fit mb-4`}
          >
            {badge}
          </span>
          <div className="flex flex-1 items-center justify-center rounded-xl bg-slate-50/80 min-h-[180px] md:min-h-[220px] p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-h-48 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center min-w-0">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-slate-900 leading-snug mb-3 md:mb-4">
            {product.name}
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
            {product.description}
          </p>
          <Link
            to={detailPath}
            className="flex w-[70%] max-w-full items-center justify-between gap-4 rounded-xl bg-[#00A651] hover:bg-[#008a45] text-white font-bold uppercase tracking-wide text-sm sm:text-base px-5 sm:px-6 py-3.5 sm:py-4 transition-colors shadow-sm"
          >
            <span>Order now</span>
            <ShoppingCart className="w-5 h-5 shrink-0" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TreatmentProductCard;
