import { useState, FormEvent } from "react";
import { collaborationService } from "@/services/collaborationService";
import { validators } from "@/utils/validators";

export default function CollaborationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    dealDetails: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!validators.name(formData.name)) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!validators.email(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.companyName.trim().length < 2) {
      newErrors.companyName = "Company name must be at least 2 characters";
    }

    if (formData.dealDetails.trim().length < 10) {
      newErrors.dealDetails =
        "Please provide more details (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      const response = await collaborationService.submitCollaboration(formData);
      setSubmitStatus("success");
      setStatusMessage(
        response.message || "Your request has been sent successfully!",
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        companyName: "",
        dealDetails: "",
      });
      setErrors({});

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Failed to submit request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Partner With Us
          </h2>
          <p className="text-xl text-gray-300">
            Interested in collaboration or sponsorship opportunities? Let's
            talk.
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-900 border ${
                  errors.name ? "border-red-500" : "border-slate-600"
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition`}
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-900 border ${
                  errors.email ? "border-red-500" : "border-slate-600"
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Company Name Field */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-900 border ${
                  errors.companyName ? "border-red-500" : "border-slate-600"
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition`}
                disabled={isSubmitting}
              />
              {errors.companyName && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.companyName}
                </p>
              )}
            </div>

            {/* Deal Details Field */}
            <div>
              <label
                htmlFor="dealDetails"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Partnership Details *
              </label>
              <textarea
                id="dealDetails"
                name="dealDetails"
                value={formData.dealDetails}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 bg-slate-900 border ${
                  errors.dealDetails ? "border-red-500" : "border-slate-600"
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition resize-none`}
                placeholder="Tell us about your collaboration or sponsorship proposal..."
                disabled={isSubmitting}
              />
              {errors.dealDetails && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.dealDetails}
                </p>
              )}
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg">
                <p className="text-green-400 text-center font-medium">
                  ✓ {statusMessage}
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg">
                <p className="text-red-400 text-center font-medium">
                  ✗ {statusMessage}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                isSubmitting
                  ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-0.5"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Submit Request"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
