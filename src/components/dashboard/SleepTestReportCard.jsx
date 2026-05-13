import { useState } from "react";
import { CircleHelp, Download } from "lucide-react";
import CenteredModal from "../common/CenteredModal";

/** Four equal-width severity sections with within-band interpolation for pointer. */
const BAR_SEGMENTS = [
  { color: "bg-emerald-500", label: "<5", sub: "NORMAL" },
  { color: "bg-yellow-400", label: "5-15", sub: "MILD" },
  { color: "bg-orange-400", label: "16-30", sub: "MODERATE" },
  { color: "bg-red-500", label: "31+", sub: "SEVERE" },
];

const formatSeverityTitle = (severity) => {
  if (!severity) return "Pending review";
  const raw = String(severity).trim();
  if (/obstructive sleep apnea/i.test(raw)) {
    return raw
      .split(/\s+/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");
  }
  const lower = raw.toLowerCase().replace(/-/g, " ");
  if (lower.includes("mild")) return "Mild Obstructive Sleep Apnea";
  if (lower.includes("moderate")) return "Moderate Obstructive Sleep Apnea";
  if (lower.includes("severe")) return "Severe Obstructive Sleep Apnea";
  if (lower.includes("normal") || lower.includes("minimal"))
    return "Normal — Minimal Obstructive Sleep Apnea";
  return raw.charAt(0).toUpperCase() + raw.slice(1);
};

const AHI_VISUAL_MAX = 60;

const clamp01 = (value) => Math.max(0, Math.min(1, value));

const getPointerPercent = (ahi) => {
  if (ahi == null || Number.isNaN(Number(ahi))) return 0;

  const value = Math.max(0, Number(ahi));
  const segmentWidth = 25;

  // 0-4 (normal)
  if (value <= 4) {
    const progress = clamp01(value / 4);
    return progress * segmentWidth;
  }

  // 5-15 (mild)
  if (value <= 15) {
    const progress = clamp01((value - 5) / (15 - 5));
    return segmentWidth + progress * segmentWidth;
  }

  // 16-30 (moderate)
  if (value <= 30) {
    const progress = clamp01((value - 16) / (30 - 16));
    return segmentWidth * 2 + progress * segmentWidth;
  }

  // 31+ (severe) visualized to max display cap.
  const bounded = Math.min(value, AHI_VISUAL_MAX);
  const progress = clamp01((bounded - 31) / (AHI_VISUAL_MAX - 31));
  return segmentWidth * 3 + progress * segmentWidth;
};

const SleepTestReportCard = ({ report, onDownload }) => {
  const [isAhiModalOpen, setIsAhiModalOpen] = useState(false);
  const ahi = report?.ahi;
  const pointerPosition = getPointerPercent(ahi);
  const diagnosisTitle = report?.reportAvailable
    ? formatSeverityTitle(report?.severity)
    : "Results pending upload";
  const suggestText = report?.reportAvailable
    ? "The data from your test suggests"
    : "When your report is ready";

  return (
    <section className="rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 p-5 md:p-7 border-b border-slate-100">
        <h2 className="text-sm md:text-base font-bold text-slate-900 uppercase tracking-wide">
          Sleep test results
        </h2>
        <button
          type="button"
          onClick={onDownload}
          disabled={!report?.reportPdfUrl}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wide hover:text-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-slate-900"
        >
          Full details
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white">
            <Download className="w-4 h-4" aria-hidden />
          </span>
        </button>
      </div>

      <div className="p-5 md:p-7 space-y-8">
        <div>
          <p className="text-sm text-slate-500 mb-2">{suggestText}</p>
          <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
            {diagnosisTitle}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Your AHI:
            </span>
            <button
              type="button"
              onClick={() => setIsAhiModalOpen(true)}
              className="text-emerald-600 hover:text-emerald-700"
              aria-label="About AHI"
            >
              <CircleHelp className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 tabular-nums">
            {ahi != null && ahi !== "" ? ahi : "—"}
          </p>
        </div>

        <div className="relative pt-8">
          <div
            className="absolute top-0 -translate-x-1/2 flex flex-col items-center pointer-events-none"
            style={{ left: `${pointerPosition}%` }}
          >
            <div className="h-3 w-[3px] rounded-full bg-slate-900/90" />
            <div className="w-0 h-0 border-l-[11px] border-r-[11px] border-t-[15px] border-l-transparent border-r-transparent border-t-slate-900 drop-shadow-sm" />
          </div>

          <div className="flex gap-0.5 rounded-md overflow-hidden h-4 md:h-5">
            {BAR_SEGMENTS.map((seg) => (
              <div
                key={seg.sub}
                className={`flex-1 ${seg.color} min-w-0`}
              />
            ))}
          </div>

          <div className="flex gap-0.5 mt-2 text-[10px] sm:text-xs font-bold text-slate-800 uppercase leading-tight">
            {BAR_SEGMENTS.map((seg) => (
              <div
                key={seg.sub}
                className="flex-1 min-w-0 text-center px-0.5"
              >
                <div className="font-semibold text-slate-600 normal-case text-[10px]">
                  {seg.label}
                </div>
                <div>{seg.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {!report?.reportAvailable && (
          <p className="text-sm text-slate-600 border-t border-slate-100 pt-6">
            Your sleep study results are not available just yet. Once your
            report is uploaded, you&apos;ll see your AHI on the scale above and
            can download the full report.
          </p>
        )}

        {report?.summary && (
          <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
            {report.summary}
          </p>
        )}
      </div>

      <CenteredModal
        isOpen={isAhiModalOpen}
        onClose={() => setIsAhiModalOpen(false)}
        title="What is AHI?"
      >
        <p>
          AHI (Apnea-Hypopnea Index) is the number of times you stop
          breathing per hour while you sleep. It&apos;s calculated from your
          home sleep test by tracking your breathing, airflow, oxygen levels,
          and movement throughout the night to estimate how often these pauses
          occur. The higher the number, the more severe the sleep apnea.
        </p>
      </CenteredModal>
    </section>
  );
};

export default SleepTestReportCard;
