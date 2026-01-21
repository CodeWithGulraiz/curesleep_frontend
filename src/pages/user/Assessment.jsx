import React, { useState, useEffect, useRef } from "react";
import { IoArrowBack, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-w.png";
import Product from "../../assets/images/ensoData.jpg";
import Product2 from "../../assets/images/sleepImage4.png";
import axios from "axios";
import ThankYouPage from "../../components/ThankYouPage";
const Assessment = () => {
  const isManualNavigation = useRef(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    snoreLoudly: "",
    tiredDuringDay: "",
    breathingStopped: "",
    gender: "",
    highBloodPressure: "",
    heightFeet: "",
    heightInches: "",
    heightCm: "",
    heightUnit: "feet",
    weight: "",
    weightUnit: "kg",
    sleepStudyExclusions: [],
    additionalDescriptions: [],
    additionalNotes: "",
  });
  const [completed, setCompleted] = useState(false);
  const [thankyou, setThankyou] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    mobile: "",
    privacyPolicy: false,
  });

  const questions = [
    {
      id: 1,
      question: "DO YOU SNORE LOUDLY?",
      type: "yesno",
      field: "snoreLoudly",
    },
    {
      id: 2,
      question: "ARE YOU TIRED DURING THE DAY?",
      type: "yesno",
      field: "tiredDuringDay",
    },
    {
      id: 3,
      question:
        "HAS ANYONE OBSERVED YOU STOP BREATHING, OR STRUGGLE TO BREATHE WHILE SLEEPING?",
      type: "yesno",
      field: "breathingStopped",
    },
    {
      id: 4,
      question: "ARE YOU ?",
      type: "gender",
      field: "gender",
      options: ["Female", "Male"],
    },
    {
      id: 5,
      question:
        "HAVE YOU BEEN DIAGNOSED WITH HIGH BLOOD PRESSURE (HYPERTENSION)?",
      type: "yesno",
      field: "highBloodPressure",
    },
    {
      id: 6,
      question: "HOW TALL ARE YOU?",
      type: "height",
      fields: [
        { name: "heightFeet", label: "FEET", required: true },
        { name: "heightInches", label: "INCHES", required: false },
      ],
    },
    {
      id: 7,
      question: "HOW MUCH DO YOU WEIGH?",
      type: "weight",
      field: "weight",
      required: true,
    },
    {
      id: 8,
      question:
        "DO ANY OF THE FOLLOWING HOME SLEEP STUDY EXCLUSIONS APPLY TO YOU?",
      type: "checkbox",
      field: "sleepStudyExclusions",
      options: [
        "None of the below",
        "Have serious heart or lung disease (examples: heart failure, stroke, COPD, condition requiring a pacemaker)",
        "Currently taking Opioid, Alpha Blocker or Short Acting Nitrate medications*",
        "Severe Insomnia",
      ],
    },
    {
      id: 9,
      question: "ARE ANY OF THESE DESCRIPTIONS TRUE FOR YOU?",
      type: "checkbox",
      field: "additionalDescriptions",
      options: [
        "None of the below",
        "Family has a history of sleep apnea (parents or siblings)",
        "Heartburn or acid reflux at night",
        "Frequently wake up throughout the night",
        "Headache in the morning",
      ],
    },
    {
      id: 10,
      question: "IS THERE ANYTHING ELSE YOU WOULD LIKE US TO KNOW?",
      type: "textarea",
      field: "additionalNotes",
      optional: true,
    },
  ];

  const handleAnswerChange = (field, value) => {
    setAnswers((prev) => ({
      ...prev,
      [field]: value,
    }));

    const currentQuestion = questions[currentStep];

    if (
      currentQuestion.field === field &&
      (currentQuestion.type === "yesno" || currentQuestion.type === "gender")
    ) {
      setTimeout(() => {
        setCurrentStep((prev) =>
          prev < questions.length - 1 ? prev + 1 : prev,
        );
      }, 300);
    }
  };
  const handlePersonalDetailsChange = (field, value) => {
    setPersonalDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (field, value) => {
    setAnswers((prev) => {
      const currentValues = [...prev[field]];
      const index = currentValues.indexOf(value);

      if (index === -1) {
        currentValues.push(value);
      } else {
        currentValues.splice(index, 1);
      }

      if (
        value === "None of the below" &&
        currentValues.includes("None of the below")
      ) {
        return { ...prev, [field]: ["None of the below"] };
      }

      if (
        value !== "None of the below" &&
        currentValues.includes("None of the below")
      ) {
        const filtered = currentValues.filter(
          (item) => item !== "None of the below",
        );
        return { ...prev, [field]: filtered };
      }

      return { ...prev, [field]: currentValues };
    });
  };

  const handleNext = () => {
    const currentQuestion = questions[currentStep];

    if (currentQuestion.type === "height") {
      if (answers.heightUnit === "feet" && !answers.heightFeet) {
        alert("Please enter your height in feet");
        return;
      }
      if (answers.heightUnit === "cm" && !answers.heightCm) {
        alert("Please enter your height in centimeters");
        return;
      }
    } else if (currentQuestion.type === "weight" && !answers.weight) {
      alert("Please enter your weight");
      return;
    } else if (
      (currentQuestion.type === "yesno" || currentQuestion.type === "gender") &&
      !answers[currentQuestion.field]
    ) {
      alert("Please answer this question");
      return;
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    isManualNavigation.current = true;
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Quiz answers:", answers);
    setCompleted(true);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 3000);
  };

  const handleGetStarted = () => {
    setShowPersonalDetails(true);
  };

  const handlePersonalDetailsSubmit = async () => {
    if (
      !personalDetails.firstName ||
      !personalDetails.lastName ||
      !personalDetails.email ||
      !personalDetails.password ||
      // !personalDetails.birthMonth ||
      // !personalDetails.birthDay ||
      // !personalDetails.birthYear ||
      !personalDetails.mobile ||
      !personalDetails.privacyPolicy
    ) {
      alert("Please fill in all required fields and accept the privacy policy");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API}/api/v1/auth/register`,
        {
          personalDetails,
          answers,
        },
      );

      if (data.success) {
        setThankyou(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const renderQuestion = () => {
    const question = questions[currentStep];

    switch (question.type) {
      case "yesno":
        return (
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center">
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-300 hover:text-green-300">
                {question.question}
              </h3>
              {question.subquestion && (
                <p className="text-gray-300 text-lg underline hover:text-green-200 transition-colors duration-300">
                  {question.subquestion}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
              <button
                className={`relative overflow-hidden h-48 text-4xl font-bold rounded-lg border-2 transition-all duration-300 transform hover:scale-105 group ${
                  answers[question.field] === "No"
                    ? "bg-white text-slate-800 border-white shadow-lg"
                    : "bg-transparent text-white border-gray-600 hover:border-gray-400"
                }`}
                onClick={() => handleAnswerChange(question.field, "No")}
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    answers[question.field] === "No"
                      ? "text-slate-800"
                      : "text-white group-hover:text-white"
                  }`}
                >
                  No
                </span>
                {answers[question.field] !== "No" && (
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
                )}
              </button>

              <button
                className={`relative overflow-hidden h-48 text-4xl font-bold rounded-lg border-2 transition-all duration-300 transform hover:scale-105 group ${
                  answers[question.field] === "Yes"
                    ? "bg-white text-slate-800 border-white shadow-lg"
                    : "bg-transparent text-white border-gray-600 hover:border-gray-400"
                }`}
                onClick={() => handleAnswerChange(question.field, "Yes")}
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    answers[question.field] === "Yes"
                      ? "text-slate-800"
                      : "text-white group-hover:text-white"
                  }`}
                >
                  Yes
                </span>
                {answers[question.field] !== "Yes" && (
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
                )}
              </button>
            </div>
          </div>
        );

      case "gender":
        return (
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center">
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold transition-colors duration-300 hover:text-green-300">
                {question.question}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
              {question.options.map((option) => (
                <button
                  key={option}
                  className={`relative overflow-hidden h-48 text-4xl font-bold rounded-lg border-2 transition-all duration-300 transform hover:scale-105 group ${
                    answers[question.field] === option
                      ? "bg-white text-slate-800 border-white shadow-lg"
                      : "bg-transparent text-white border-gray-600 hover:border-gray-400"
                  }`}
                  onClick={() => handleAnswerChange(question.field, option)}
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      answers[question.field] === option
                        ? "text-slate-800"
                        : "text-white group-hover:text-white"
                    }`}
                  >
                    {option}
                  </span>
                  {answers[question.field] !== option && (
                    <span className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case "height":
        return (
          <div className="flex flex-col items-center space-y-8">
            <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center transition-colors duration-300 hover:text-green-300">
              {question.question}
            </h3>

            {/* Unit toggle buttons */}
            <div className="flex space-x-4 mb-6">
              <button
                className={`px-6 py-3 rounded-lg border-2 text-lg font-semibold transition-all duration-300 ${
                  answers.heightUnit === "feet"
                    ? "bg-white text-slate-800 border-white"
                    : "bg-transparent text-white border-gray-600 hover:border-gray-400"
                }`}
                onClick={() => handleAnswerChange("heightUnit", "feet")}
              >
                FEET/INCHES
              </button>
              <button
                className={`px-6 py-3 rounded-lg border-2 text-lg font-semibold transition-all duration-300 ${
                  answers.heightUnit === "cm"
                    ? "bg-white text-slate-800 border-white"
                    : "bg-transparent text-white border-gray-600 hover:border-gray-400"
                }`}
                onClick={() => handleAnswerChange("heightUnit", "cm")}
              >
                CM
              </button>
            </div>

            {/* If feet selected */}
            {answers.heightUnit === "feet" && (
              <div className="flex space-x-6 items-end pt-4">
                <div className="flex flex-col items-center">
                  <input
                    type="number"
                    className="w-32 h-16 text-5xl bg-transparent border-0 border-b-2 
              border-white focus:border-green-500 focus:outline-none 
              hover:border-green-400 transition-colors duration-300
              placeholder-white text-white placeholder:text-4xl text-center"
                    value={answers.heightFeet || ""}
                    onChange={(e) =>
                      handleAnswerChange("heightFeet", e.target.value)
                    }
                    placeholder="FEET"
                    required
                  />
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="number"
                    className="w-32 h-16 text-5xl bg-transparent border-0 border-b-2 
              border-white focus:border-green-500 focus:outline-none 
              hover:border-green-400 transition-colors duration-300
              placeholder-white text-white placeholder:text-4xl text-center"
                    value={answers.heightInches || ""}
                    onChange={(e) =>
                      handleAnswerChange("heightInches", e.target.value)
                    }
                    placeholder="INCHES"
                  />
                </div>
              </div>
            )}

            {/* If cm selected */}
            {answers.heightUnit === "cm" && (
              <div className="flex flex-col items-center">
                <input
                  type="number"
                  className="w-40 h-16 text-5xl bg-transparent border-0 border-b-2 
             border-white focus:border-green-500 focus:outline-none 
             hover:border-green-400 transition-colors duration-300
             placeholder-white text-white placeholder:text-4xl text-center"
                  value={answers.heightCm || ""}
                  onChange={(e) =>
                    handleAnswerChange("heightCm", e.target.value)
                  }
                  placeholder="CM"
                  required
                />
              </div>
            )}
          </div>
        );
      case "weight":
        return (
          <div className="flex flex-col items-center space-y-8">
            <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center transition-colors duration-300 hover:text-green-300">
              {question.question}
            </h3>
            <div className="flex flex-col items-center space-y-6">
              {/* Unit Selection */}
              <div className="flex space-x-4 mb-4">
                <button
                  className={`px-6 py-3 rounded-lg border-2 text-lg font-semibold transition-all duration-300 ${
                    answers.weightUnit === "kg"
                      ? "bg-white text-slate-800 border-white"
                      : "bg-transparent text-white border-gray-600 hover:border-gray-400"
                  }`}
                  onClick={() => handleAnswerChange("weightUnit", "kg")}
                >
                  KG
                </button>
                <button
                  className={`px-6 py-3 rounded-lg border-2 text-lg font-semibold transition-all duration-300 ${
                    answers.weightUnit === "lbs"
                      ? "bg-white text-slate-800 border-white"
                      : "bg-transparent text-white border-gray-600 hover:border-gray-400"
                  }`}
                  onClick={() => handleAnswerChange("weightUnit", "lbs")}
                >
                  LBS
                </button>
              </div>

              {/* Weight Input */}
              <div className="flex flex-col items-center">
                <input
                  type="number"
                  className="w-48 h-16 text-5xl bg-transparent border-0 border-b-1 
                   border-white focus:border-green-500 focus:outline-none 
                   hover:border-green-400 transition-colors duration-300
                   placeholder-white text-white placeholder:text-4xl text-center"
                  value={answers.weight || ""}
                  onChange={(e) => handleAnswerChange("weight", e.target.value)}
                  placeholder={answers.weightUnit.toUpperCase()}
                  required={question.required}
                />
                <span className="text-white text-lg mt-2 opacity-70">
                  {answers.weightUnit === "kg" ? "Kilograms" : "Pounds"}
                </span>
              </div>
            </div>
          </div>
        );

      case "checkbox":
        return (
          <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 hover:text-green-300">
                {question.question}
              </h3>
              {question.subquestion && (
                <p className="text-gray-300 text-lg transition-colors duration-300 hover:text-green-200">
                  {question.subquestion}
                </p>
              )}
            </div>
            <div className="space-y-4 w-full">
              {question.options.map((option) => (
                <div
                  key={option}
                  className="flex items-start space-x-4 p-4 bg-gray-700 bg-opacity-50 rounded-lg hover:bg-opacity-70 hover:border-green-400 border border-transparent transition-all duration-300"
                >
                  <input
                    type="checkbox"
                    id={option}
                    className="h-6 w-6 mt-1 text-green-500 rounded border-gray-300 focus:ring-green-500"
                    checked={answers[question.field].includes(option)}
                    onChange={() =>
                      handleCheckboxChange(question.field, option)
                    }
                  />
                  <label
                    htmlFor={option}
                    className="text-white text-lg leading-relaxed flex-1 hover:text-green-200 transition-colors duration-300 cursor-pointer"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case "textarea":
        return (
          <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
            <h3 className="text-white text-3xl md:text-4xl font-bold text-center transition-colors duration-300 hover:text-green-300">
              {question.question}
            </h3>
            <textarea
              className="w-full p-4 text-lg bg-slate-100 rounded-lg border-2 border-gray-300 focus:border-green-500 focus:outline-none hover:border-green-400 transition-colors duration-300"
              value={answers[question.field] || ""}
              onChange={(e) =>
                handleAnswerChange(question.field, e.target.value)
              }
              placeholder={
                question.optional
                  ? "Optional - share anything else you'd like us to know..."
                  : ""
              }
              rows={6}
            />
          </div>
        );

      default:
        return null;
    }
  };

  if (thankyou) {
    return <ThankYouPage />;
  } else {
    // Loading Screen
    if (completed && isLoading) {
      return (
        <div className="bg-slate-800 min-h-screen flex flex-col">
          <div className="flex items-center justify-between p-6">
            <button className="text-white opacity-50 cursor-not-allowed">
              <IoArrowBack size={24} />
            </button>
            <div className="flex items-center justify-center">
              <Link to={"/"}>
                <img className="page-logo" src={Logo} alt="" />
              </Link>
            </div>
            <Link
              to={"/take-quiz"}
              className="text-white hover:text-gray-300 transition-colors flex items-center space-x-2"
            >
              <span className="text-sm font-medium">EXIT</span>
              <IoClose size={24} />
            </Link>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <div className="text-center space-y-8">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500 border-solid mx-auto"></div>
              <div>
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                  Computing Risk
                </h2>
                <p className="text-gray-300 text-lg">
                  Taking a look at risk factors...
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Personal Details Form (unchanged)
    if (showPersonalDetails) {
      return (
        <div className="bg-slate-800 min-h-screen">
          <div className={`space-y-6 transform transition-all duration-1000`}>
            <div className="flex items-center justify-center py-5">
              <Link to={"/"}>
                <img className="page-logo filter" src={Logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center space-y-6">
                  <h2 className="text-white text-5xl font-bold">
                    Get Started with Your Sleep Study
                  </h2>
                  <p className="text-white text-lg">
                    Please provide your personal details to continue with your
                    sleep study recommendation.
                  </p>
                  <p className="text-white">
                    We'll use this information to create your personalized sleep
                    assessment and connect you with the right resources.
                  </p>
                </div>

                <div className="bg-slate-800 p-8 rounded-lg border-2 border-white">
                  <h3 className="text-white text-3xl font-semibold mb-6">
                    Personal Details
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-sm font-medium">
                          First Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-2 border-b border-white focus:outline-none bg-transparent text-white focus:border-green-400 hover:border-green-300 transition-colors duration-300"
                          value={personalDetails.firstName}
                          onChange={(e) =>
                            handlePersonalDetailsChange(
                              "firstName",
                              e.target.value,
                            )
                          }
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-2 border-b border-white focus:outline-none bg-transparent text-white focus:border-green-400 hover:border-green-300 transition-colors duration-300"
                          value={personalDetails.lastName}
                          onChange={(e) =>
                            handlePersonalDetailsChange(
                              "lastName",
                              e.target.value,
                            )
                          }
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="w-full px-2 border-b border-white focus:outline-none bg-transparent text-white focus:border-green-400 hover:border-green-300 transition-colors duration-300"
                        value={personalDetails.email}
                        onChange={(e) =>
                          handlePersonalDetailsChange("email", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium">
                        Password *
                      </label>
                      <input
                        type="password"
                        className="w-full px-2 border-b border-white focus:outline-none bg-transparent text-white focus:border-green-400 hover:border-green-300 transition-colors duration-300"
                        value={personalDetails.password}
                        onChange={(e) =>
                          handlePersonalDetailsChange(
                            "password",
                            e.target.value,
                          )
                        }
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-1">
                        Date of Birth
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <input
                          type="number"
                          className="px-2 border-b border-white focus:outline-none bg-transparent text-white focus:border-green-400 hover:border-green-300 transition-colors duration-300"
                          value={personalDetails.birthMonth}
                          onChange={(e) =>
                            handlePersonalDetailsChange(
                              "birthMonth",
                              e.target.value,
                            )
                          }
                          placeholder="MM"
                        />
                        <input
                          type="number"
                          className="px-2 border-b border-white focus:outline-none bg-transparent text-white focus:border-green-400 hover:border-green-300 transition-colors duration-300"
                          value={personalDetails.birthDay}
                          onChange={(e) =>
                            handlePersonalDetailsChange(
                              "birthDay",
                              e.target.value,
                            )
                          }
                          placeholder="DD"
                          required
                        />
                        <input
                          type="number"
                          className="px-2 border-b border-white focus:outline-none bg-transparent text-white focus:border-green-400 hover:border-green-300 transition-colors duration-300"
                          value={personalDetails.birthYear}
                          onChange={(e) =>
                            handlePersonalDetailsChange(
                              "birthYear",
                              e.target.value,
                            )
                          }
                          placeholder="YYYY"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-1">
                        Mobile *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-2 border-b border-white focus:outline-none bg-transparent text-white focus:border-green-400 hover:border-green-300 transition-colors duration-300"
                        value={personalDetails.mobile}
                        onChange={(e) =>
                          handlePersonalDetailsChange("mobile", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        className="h-5 w-5 mt-1 text-green-500 rounded border-white focus:ring-green-500"
                        checked={personalDetails.privacyPolicy}
                        onChange={(e) =>
                          handlePersonalDetailsChange(
                            "privacyPolicy",
                            e.target.checked,
                          )
                        }
                        required
                      />
                      <label
                        htmlFor="privacy"
                        className="text-white text-sm hover:text-green-200 transition-colors duration-300"
                      >
                        I agree to the Privacy Policy and Terms of Service *
                      </label>
                    </div>

                    <button
                      className="w-full bg-[#00aa63] text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors font-semibold transform hover:scale-105 duration-300"
                      onClick={handlePersonalDetailsSubmit}
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="animate-pulse">Creating ....</span>
                      ) : (
                        "Create account"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const getRiskFactors = (answers) => {
      const factors = [];

      if (answers.snoreLoudly === "Yes") factors.push("Snoring");
      if (answers.tiredDuringDay === "Yes") factors.push("Daytime fatigue");
      if (answers.breathingStopped === "Yes")
        factors.push("Breathing interruptions");
      if (answers.highBloodPressure === "Yes")
        factors.push("High blood pressure");

      if (
        answers.additionalDescriptions?.includes(
          "Heartburn or acid reflux at night",
        )
      ) {
        factors.push("Nighttime heartburn");
      }

      if (
        answers.additionalDescriptions?.includes(
          "Family has a history of sleep apnea (parents or siblings)",
        )
      ) {
        factors.push("Family history");
      }

      return factors;
    };
    // Results Screen (unchanged)
    if (completed && showResults) {
      const riskFactors = getRiskFactors(answers);
      return (
        <div className="bg-slate-800 min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          <div className="relative z-10 p-6">
            <div className="max-w-4xl mx-auto container space-y-12">
              <div
                className={`space-y-6 transform transition-all duration-1000`}
              >
                <div className="flex items-center justify-center">
                  <Link to={"/"}>
                    <img className="page-logo filter" src={Logo} alt="" />
                  </Link>
                </div>

                <div className="text-center space-y-4">
                  <h2 className="text-white text-5xl font-bold mb-4 leading-tight">
                    You may be at risk for
                    <span className="block text-[#00aa63]">Sleep Apnea</span>
                  </h2>

                  <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Based on your responses, we identified the following risk
                    factors:
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {riskFactors.map((factor, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium border border-orange-300"
                      >
                        {factor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-10 text-center">
                <p className="text-white text-3xl font-semibold">
                  We recommend a sleep study
                </p>
                <p className="text-gray-300 mt-2 max-w-4xl mx-auto">
                  To receive an accurate diagnosis and get treated using your
                  insurance, a clinically approved sleep study is the next step.
                </p>
              </div>

              <div
                className={`transform transition-all duration-1000 delay-300`}
              >
                <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-10 shadow-2xl">
                  <div className="space-y-8">
                    <div className="flex justify-center">
                      <div className="relative flex gap-5">
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-600/30 shadow-xl w-1/2">
                          <h3 className="text-white text-xl">Option 1 (Enso Data)</h3>
                          <Link to={`/category/testing/ensoData/details/`}>
                            <img
                              src={Product}
                              alt="Product"
                              className="rounded-xl h-[350px] cursor-pointer"
                            />
                          </Link>
                        </div>
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-600/30 shadow-xl w-1/2">
                          <h4 className="text-white text-xl">Option 2 (Sleep Ring)</h4>
                          <Link to={`/category/testing/sleepRing/details/`} >
                            <img
                              src={Product2}
                              alt="Product 2"
                              className="rounded-xl h-[350px] bg-cover cursor-pointer"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center ">
                      <button
                        className="bg-gradient-to-r from-[#00aa63] to-green-600 text-white px-10 py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold flex-1 transform hover:scale-105 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-green-400/30"
                        onClick={handleGetStarted}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none"></div>
        </div>
      );
    }

    return (
      <div className="bg-slate-800 min-h-screen">
        <div className="flex items-center justify-between p-6">
          <button
            onClick={handlePrev}
            className={`text-white hover:text-green-300 transition-colors transform hover:scale-110 duration-300 ${
              currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentStep === 0}
          >
            <IoArrowBack size={24} />
          </button>

          <div className="flex items-center justify-center">
            <img className="page-logo" src={Logo} alt="" />
          </div>

          <Link
            to={"/take-quiz"}
            className="text-white hover:text-green-300 transition-colors flex items-center space-x-2 transform hover:scale-110 duration-300"
          >
            <span className="text-sm font-medium">EXIT</span>
            <IoClose size={24} />
          </Link>
        </div>

        <div className="px-6 mb-8">
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div
              className="bg-green-500 h-1 rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${((currentStep + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">{renderQuestion()}</div>
        </div>

        <div className=" bg-slate-800 p-2 border-t border-gray-700">
          <div className="max-w-6xl mx-auto flex justify-between">
            {!(currentStep === questions.length - 1) && (
              <button
                className="bg-green-700 hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-200 text-white text-lg font-semibold py-3 px-8 rounded-lg transition-colors transform hover:scale-105 duration-300"
                onClick={handlePrev}
                disabled={currentStep === 0}
              >
                Previous
              </button>
            )}
            {questions[currentStep].type !== "yesno" &&
              questions[currentStep].type !== "gender" && (
                <button
                  className="bg-green-700 hover:bg-green-800 text-white text-lg font-semibold py-3 px-8 rounded-lg transition-colors transform hover:scale-105 duration-300"
                  onClick={handleNext}
                >
                  {currentStep === questions.length - 1 ? "Finish" : "Continue"}
                </button>
              )}
          </div>
        </div>
      </div>
    );
  }
};

export default Assessment;
