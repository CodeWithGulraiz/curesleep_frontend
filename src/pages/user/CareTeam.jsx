import React, { useEffect, useState } from "react";
import { Calendar, MapPin, X, Stethoscope, User, Heart, Users } from "lucide-react";
import UserSidebar from "./UserSidebar";
import UserNav from "./UserNav";
import { toast } from "react-toastify";
import { apiUrl } from "../../utils/apiBase";

// Generate time slots: next 7 days, 4 times per day
function buildTimeSlots() {
  const slots = [];
  const times = ["09:00", "11:00", "14:00", "16:00"];
  for (let d = 0; d < 7; d++) {
    const date = new Date();
    date.setDate(date.getDate() + d);
    const dateStr = date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
    times.forEach((t) => {
      const [hh, mm] = t.split(":").map(Number);
      const slotDate = new Date(date);
      slotDate.setHours(hh, mm, 0, 0);
      if (slotDate > new Date()) {
        slots.push({
          label: `${dateStr} at ${t}`,
          value: slotDate.toISOString(),
        });
      }
    });
  }
  return slots.slice(0, 20);
}

const TIME_SLOTS = buildTimeSlots();

const PATIENT_SUPPORT_TEAM = [
  {
    id: 1,
    name: "Suzanne",
    role: "Your Assigned Coach",
    subRole: "Coach",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    alt: "Coach",
  },
  {
    id: 2,
    name: "Coach",
    role: "Sleep Therapy Specialist",
    subRole: "Coach",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    alt: "Coach",
  },
  {
    id: 3,
    name: "Order Specialist",
    role: "Equipment & orders",
    subRole: "Order Specialist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    alt: "Order Specialist",
  },
  {
    id: 4,
    name: "Patient Care Specialist",
    role: "Support & care",
    subRole: "Patient Care Specialist",
    image: "https://images.unsplash.com/photo-1594824720837-6d29ba75bb38?w=400&h=400&fit=crop&crop=face",
    alt: "Patient Care Specialist",
  },
];

const CLINICAL_TEAM = [
  {
    id: 1,
    name: "Dr. Mohammed Jomha, MD",
    title: "Sleep Medicine",
    icon: Stethoscope,
    description:
      "Dr. Jomha is an American Board of Sleep Medicine (ABSM)–certified sleep physician and a member of the Canadian Sleep Society and the European Sleep Research Society. With over 5 years of dedicated sleep medicine practice, he has diagnosed and managed thousands of patients with sleep disorders.",
    specialization:
      "He specializes in the diagnosis and treatment of obstructive sleep apnea and other sleep-related breathing and behavioral sleep disorders, delivering evidence-based care focused on long-term results.",
  },
  {
    id: 2,
    name: "Hammzah Jomha, MD",
    title: "Family Physician",
    icon: User,
    description:
      "Dr. Hammzah Jomha is a Family Physician with a clinical interest in sleep medicine and metabolic health. He is a member of the European Sleep Research Society and is board certified in obesity management, supporting integrated care where sleep apnea and cardiometabolic health overlap.",
  },
  {
    id: 3,
    name: "Evangeline Bedaiko, CPSGT",
    title: "Polysomnographic Technologist",
    icon: Heart,
    description:
      "Evangeline is a Certified Polysomnographic Technologist (CPSGT) with specialized expertise in sleep study setup, signal quality, data acquisition, and patient support. She plays a key role in ensuring high-quality sleep testing and a smooth patient experience throughout the diagnostic process.",
  },
  {
    id: 4,
    name: "Arshad Siddique, RPSGT",
    title: "Sleep Technologist & Coach",
    icon: Stethoscope,
    description:
      "Arshad is a Registered Polysomnographic Technologist (RPSGT) with extensive experience in sleep apnea education, patient coaching, and PAP therapy optimization. He works closely with patients to improve comfort, adherence, and treatment success with APAP/CPAP therapy.",
  },
  {
    id: 5,
    name: "Monique Españole",
    title: "Administrative Care Coordinator",
    icon: Users,
    description:
      "Monique support patients through scheduling, communication, and care coordination, working closely with the clinical team to ensure a seamless, organized, and patient-centered experience.",
  },
  {
    id: 6,
    name: "Brooklyne Halter",
    title: "Administrative Care Coordinator",
    icon: Users,
    description:
      "Brooklyne support patients through scheduling, communication, and care coordination, working closely with the clinical team to ensure a seamless, organized, and patient-centered experience.",
  },
];

const CareTeam = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSpaceActive, setIsSpaceActive] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const authDataString = localStorage.getItem("auth");
  const auth = authDataString ? JSON.parse(authDataString) : null;

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleSpaceToggle = () => setIsSpaceActive(!isSpaceActive);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setVisibleCards([0, 1, 2, 3, 4, 5]), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleScheduleConsult = () => setConsultModalOpen(true);
  const handleCloseConsult = () => {
    setConsultModalOpen(false);
    setEmail("");
    setSelectedSlot(null);
  };

  const handleSubmitConsultation = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    if (!selectedSlot) {
      toast.error("Please select a date and time");
      return;
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email.trim())) {
      toast.error("Please enter a valid email");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(apiUrl("/api/v1/consultation/schedule"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          scheduledAt: selectedSlot.value,
          userId: auth?.user?._id || null,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (data.success) {
        toast.success(data.message || "Consultation scheduled. Check your email for a reminder.");
        handleCloseConsult();
      } else {
        toast.error(data.message || "Failed to schedule consultation");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="dashboard-container">
        <UserSidebar
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          onSpaceToggle={handleSpaceToggle}
          isSpaceActive={isSpaceActive}
        />
        <div
          className={`dashboard-main ${sidebarOpen ? "shifted" : ""} ${
            isSpaceActive ? "freeSpaceDash" : "dashboard-main"
          }`}
        >
          <UserNav />
          <div className="dashboard-content pb-8 sm:pb-12">
            {/* Section 1: Doctor cards (same style as /ourteam) */}
            <div
              className={`mb-10 md:mb-14 transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 tracking-tight pt-2 sm:pt-3 px-2 mb-5">
                <span className="text-gray-900">CURESLEEP&apos;S </span>
                <span className="text-green-700">CARE TEAM</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 tracking-wide px-2 uppercase">
                Your Patient Support Team
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed px-2 sm:px-4 mb-8">
                This group will help you navigate the CureSleep experience from ordering an HST through adjusting to therapy. Once you order a CPAP, your assigned coach will reach out to you.
              </p>
              <div className="px-2 sm:px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                  {CLINICAL_TEAM.map((member, index) => {
                    const ExpertIcon = member.icon;
                    return (
                    <div
                      key={member.id}
                      className={`bg-card border border-border rounded-2xl p-6 transition-all duration-500 ${
                        visibleCards.includes(index) ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                      } hover:border-primary/50 hover:shadow-lg`}
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <ExpertIcon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{member.name}</h3>
                      <p className="text-sm font-semibold text-primary mb-4">{member.title}</p>
                      <p className="text-muted-foreground leading-relaxed text-sm mb-3">{member.description}</p>
                      {member.specialization && (
                        <p className="text-muted-foreground leading-relaxed text-sm">{member.specialization}</p>
                      )}
                    </div>
                  )})}
                </div>
              </div>
            </div>

            {/* Section 2: Simple consultant list + CTA */}
            <div className="px-2 sm:px-4 mt-12 md:mt-16">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 tracking-wide uppercase">
                Your Clinical Team
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl leading-relaxed mb-6">
                Your CureSleep clinicians specialize in sleep apnea. They follow you through your journey, including reviewing sleep study results, creating personalized treatment recommendations, writing prescriptions, and overseeing your treatment. If you’d like to meet them virtually, please schedule a consult.
              </p>
              <button
                onClick={handleScheduleConsult}
                className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 mb-8"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Consult
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Consult Modal */}
      {consultModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900">Schedule a consult</h3>
              <button
                type="button"
                onClick={handleCloseConsult}
                className="p-2 rounded-lg hover:bg-gray-200 text-gray-600"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmitConsultation} className="flex flex-col flex-1 overflow-auto">
              <div className="p-6 space-y-6">
                {/* Map */}
                <div className="rounded-xl overflow-hidden border border-gray-200">
                  <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border-b border-gray-200">
                    <MapPin className="w-4 h-4 text-green-700" />
                    <span className="text-sm font-medium text-gray-700">Consultation location</span>
                  </div>
                  <iframe
                    title="Consultation location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-74.02%2C40.70%2C-73.96%2C40.74&layer=mapnik&marker=40.72%2C-73.99"
                    className="w-full h-48 sm:h-56 border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Time slots */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-3">Choose a date & time</p>
                  <div className="flex flex-wrap gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot.value}
                        type="button"
                        onClick={() => setSelectedSlot(selectedSlot?.value === slot.value ? null : slot)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedSlot?.value === slot.value
                            ? "bg-green-700 text-white shadow"
                            : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-800 hover:border-green-200 border border-transparent"
                        }`}
                      >
                        {slot.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="consult-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email to be contacted
                  </label>
                  <input
                    id="consult-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 focus:border-green-500"
                    required
                  />
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleCloseConsult}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-green-700 hover:bg-green-800 disabled:opacity-60 text-white font-semibold py-2 px-5 rounded-lg"
                >
                  {submitting ? "Scheduling…" : "Schedule consult"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CareTeam;
