import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/**
 * Dashboard resource cards grid — shared by Treatment, Results, etc.
 * @param {{ id: string|number, title: string, image: string, href: string }[]} posts
 */
const DashboardResourcesSection = ({
  posts = [],
  title = "Resources",
  viewAllHref = "/sleep-apnea-explained",
  viewAllLabel = "View all",
  className = "",
}) => {
  if (!posts.length) return null;

  return (
    <section className={`mt-8 px-2 md:px-3 lg:px-4 ${className}`.trim()}>
      <div className="w-full max-w-none">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <h2 className="text-lg md:text-xl font-semibold text-slate-900">
            {title}
          </h2>
          <Link
            to={viewAllHref}
            className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-slate-800 hover:text-emerald-700"
          >
            {viewAllLabel}
            <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 w-full">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={post.href}
              className="group overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col h-full"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-44 sm:h-48 md:h-52 w-full object-cover group-hover:scale-[1.02] transition shrink-0"
              />
              <div className="p-3 md:p-4 flex flex-col flex-1">
                <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-[0.1em] mb-1.5">
                  Read
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardResourcesSection;
