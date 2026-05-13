import { useEffect } from "react";
import { X } from "lucide-react";

const CenteredModal = ({
  isOpen,
  onClose,
  title,
  children,
  contentClassName = "",
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] bg-slate-900/65 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
      role="presentation"
    >
      <div className="w-full max-w-3xl flex flex-col items-center gap-4">
        <button
          type="button"
          onClick={onClose}
          className="h-11 w-11 rounded-full bg-white/90 text-slate-700 hover:bg-white transition flex items-center justify-center shadow"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div
          className="w-full rounded-2xl bg-white shadow-2xl px-6 py-9 sm:px-10 sm:py-12"
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <h3 className="text-4xl font-bold text-center text-slate-900 uppercase tracking-tight mb-4">
            {title}
          </h3>
          <div
            className={
              contentClassName.trim()
                ? `max-w-2xl mx-auto text-slate-700 leading-relaxed ${contentClassName}`
                : "max-w-2xl mx-auto text-center text-slate-700 text-lg leading-relaxed"
            }
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenteredModal;
