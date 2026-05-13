import DashboardProductSection from "./dashboard/DashboardProductSection";

/**
 * Post-assessment: same recommended home sleep tests + in-dashboard checkout flow as the no-quiz dashboard.
 */
const DashboardDiagnosisSections = () => {
  return (
    <div className="space-y-8 mt-6">
      <div className="text-center mb-2 sm:mb-4 px-2">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
          LET&apos;S GET YOU DIAGNOSED
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          There are two simple ways to get testing and treatment options from
          CureSleep: order a home sleep study, or upload your existing sleep
          study report. A CureSleep provider will review your results and guide
          you toward the right next step for diagnosis and treatment.
        </p>
      </div>
      <DashboardProductSection
        title="Home sleep tests"
        subtitle="Order a physician-reviewed device — checkout opens in Stripe when you choose Buy now."
      />
    </div>
  );
};

export default DashboardDiagnosisSections;
