import { Link } from "react-router-dom";
import { Moon } from "lucide-react";

/**
 * Large CTA when the user has not completed the sleep quiz (Sleep test dashboard).
 */
const SleepAssessmentPrompt = ({ className = "" }) => {
  return (
    <div className={`w-full ${className}`.trim()}>
      <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-violet-700 via-purple-800 to-violet-900 border border-violet-500/30 min-h-[min(72vh,880px)] flex flex-col justify-center">
        <div className="px-6 py-14 sm:px-10 sm:py-16 md:px-16 md:py-20 lg:px-20 lg:py-24 text-center w-full max-w-4xl lg:max-w-5xl mx-auto">
          <Moon
            className="w-16 h-16 sm:w-20 sm:h-20 text-white/95 mx-auto mb-8 sm:mb-10 drop-shadow-md"
            strokeWidth={1.5}
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            Complete your sleep assessment
          </h2>
          <p className="text-violet-100/95 text-lg sm:text-xl md:text-2xl mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
            Take the short questionnaire so we can show your risk factors and
            personalized sleep test details here. You can start anytime—it only
            takes a few minutes.
          </p>
          <Link
            to="/dashboard/user/assessment"
            className="group inline-flex items-center justify-center gap-2 px-12 py-4 sm:px-14 sm:py-5 rounded-xl text-lg sm:text-xl font-semibold text-violet-900 bg-white shadow-lg transition-all duration-300 ease-out hover:bg-violet-100 hover:text-violet-950 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-violet-800"
          >
            Start sleep assessment
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SleepAssessmentPrompt;
