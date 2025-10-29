import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ currentStep = 2, mobileBreakpoint = 762 }) => {
  const [isMobileView, setIsMobileView] = useState(false);

  const steps = [
    "SLEEP APNEA <br> ASSESSMENT",
    "SLEEP <br> STUDY",
    "THE RIGHT <br> TREATMENT",
    "PERSONALIZED <br> SUPPORT",
  ];

  // Clamp currentStep to valid range
  const clampedStep = Math.max(0, Math.min(currentStep, steps.length - 1));

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= mobileBreakpoint);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileBreakpoint]);

  // Function to convert text with <br> to JSX with line breaks
  const formatLabel = (text) => {
    const parts = text.split(/<br\s*\/?>/i);
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < parts.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const renderSteps = () => {
    const baseClasses = "custom-step-wrapper"; // Common classes
    const transitionClass = isMobileView ? "mobile-transition" : "";

    if (!isMobileView) {
      // Desktop: All steps
      return steps.map((step, index) => (
        <div className={`${baseClasses} ${transitionClass}`} key={index}>
          <div
            className={`custom-step-circle ${
              index <= clampedStep ? "completed" : ""
            }`}
          >
            {index === clampedStep && <div className="step-indicator"></div>}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`custom-step-line ${
                index < clampedStep ? "active" : ""
              }`}
            ></div>
          )}
          <div className="custom-step-label">{formatLabel(step)}</div>
        </div>
      ));
    } else {
      // Mobile: Previous, current, next (clamped)
      const startIndex = Math.max(0, clampedStep - 1);
      const endIndex = Math.min(steps.length - 1, clampedStep + 1);
      const mobileIndexes = Array.from(
        { length: endIndex - startIndex + 1 },
        (_, i) => startIndex + i
      );

      return mobileIndexes.map((index, idx) => (
        <div className={`${baseClasses} ${transitionClass}`} key={index}>
          <div
            className={`custom-step-circle ${
              index <= clampedStep ? "completed" : ""
            }`}
          >
            {index === clampedStep && <div className="step-indicator"></div>}
          </div>
          {idx < mobileIndexes.length - 1 && (
            <div
              className={`custom-step-line ${
                index < clampedStep ? "active" : ""
              }`}
            ></div>
          )}
          <div className="custom-step-label">{formatLabel(steps[index])}</div>
        </div>
      ));
    }
  };

  return (
    <div className="custom-prog-barr-container">
      <div className="custom-prog-barr">{renderSteps()}</div>
    </div>
  );
};

export default ProgressBar;
