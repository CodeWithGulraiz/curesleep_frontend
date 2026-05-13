import { Phone } from "lucide-react";

/**
 * Full-bleed phone CTA for dashboard pages (cancels .dashboard-content 20px padding).
 * @param {boolean} fillRemainingViewport — when true, grows to fill space below content (Treatment-style footer).
 */
const DashboardPhoneCta = ({
  phoneDisplay = "(780) 665-1500",
  telHref = "tel:+17806651500",
  fillRemainingViewport = false,
  className = "",
}) => {
  const bleed =
    "-mx-[20px] w-[calc(100%+40px)] max-w-none rounded-none bg-slate-950 text-white px-4 pt-12 pb-10 md:px-6 md:pt-16 md:pb-12 text-center border-0";
  const grow = fillRemainingViewport
    ? "flex-1 flex flex-col justify-center min-h-0 mt-8 md:mt-10"
    : "mt-8 md:mt-10";

  return (
    <section className={`${bleed} ${grow} ${className}`.trim()}>
      <p className="text-sm md:text-base text-slate-300 mb-2">
        Have a question? Call us.
      </p>
      <a
        href={telHref}
        className="inline-flex items-center justify-center gap-2 md:gap-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#00aa63] hover:text-green-400 transition"
      >
        <Phone className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
        {phoneDisplay}
      </a>
    </section>
  );
};

export default DashboardPhoneCta;
