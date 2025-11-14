"use client";

// ContactFormCinematic: Futuristic contact form
// - Neon focus states with glow animations
// - Intelligent inline validation with micro-feedback
// - Glass morphism input fields
// - Precision-engineered submission states

import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  Briefcase,
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FieldValidation {
  isValid: boolean;
  message: string;
}

export default function ContactFormCinematic() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "first-turn",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Validation rules
  const validateField = (name: string, value: string): FieldValidation => {
    switch (name) {
      case "name":
        return {
          isValid: value.length >= 2,
          message:
            value.length === 0 ? "" : "Name must be at least 2 characters",
        };
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return {
          isValid: emailRegex.test(value),
          message: value.length === 0 ? "" : "Please enter a valid email",
        };
      case "phone":
        return {
          isValid: value.length >= 10 || value.length === 0,
          message:
            value.length === 0
              ? ""
              : "Phone number should be at least 10 digits",
        };
      case "message":
        return {
          isValid: value.length >= 10,
          message:
            value.length === 0 ? "" : "Message must be at least 10 characters",
        };
      default:
        return { isValid: true, message: "" };
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (name: string) => {
    setTouchedFields((prev) => new Set(prev).add(name));
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "first-turn",
        message: "",
      });
      setTouchedFields(new Set());
    }, 2000);
  };

  // Input field component
  const InputField = ({
    name,
    label,
    type = "text",
    icon: Icon,
    required = false,
  }: {
    name: keyof FormData;
    label: string;
    type?: string;
    icon: typeof User;
    required?: boolean;
  }) => {
    const value = formData[name];
    const isFocused = focusedField === name;
    const isTouched = touchedFields.has(name);
    const validation = validateField(name, value);
    const showError = isTouched && !validation.isValid && value.length > 0;
    const showSuccess = isTouched && validation.isValid && value.length > 0;

    return (
      <div className="relative">
        <label
          htmlFor={name}
          className="block text-sm font-display font-medium mb-2 text-gray-300"
        >
          {label} {required && <span className="text-electric-blue">*</span>}
        </label>

        <div className="relative">
          {/* Icon */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <Icon
              className={`w-5 h-5 transition-colors duration-300 ${
                isFocused
                  ? "text-electric-blue"
                  : showError
                  ? "text-red-400"
                  : "text-gray-500"
              }`}
            />
          </div>

          {/* Input */}
          <motion.input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            onFocus={() => setFocusedField(name)}
            onBlur={() => handleBlur(name)}
            required={required}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border transition-all duration-300 font-display text-white placeholder-gray-600 focus:outline-none"
            style={{
              borderColor: isFocused
                ? "rgba(0,212,255,0.4)"
                : showError
                ? "rgba(239,68,68,0.4)"
                : "rgba(0,212,255,0.08)",
              boxShadow: isFocused
                ? "0 0 20px rgba(0,212,255,0.15), inset 0 0 20px rgba(0,212,255,0.03)"
                : "none",
              backdropFilter: "blur(12px)",
            }}
            placeholder={`Enter your ${label.toLowerCase()}`}
          />

          {/* Validation icon */}
          <AnimatePresence>
            {(showSuccess || showError) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showSuccess ? (
                  <CheckCircle2 className="w-5 h-5 text-electric-blue" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-400" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Error message */}
        <AnimatePresence>
          {showError && validation.message && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="mt-2 text-xs text-red-400 flex items-center gap-1"
            >
              <AlertCircle className="w-3 h-3" />
              {validation.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] as const }}
      className="relative rounded-2xl p-8 md:p-10"
      style={{
        background: "rgba(255,255,255,0.02)",
        backdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(0,212,255,0.08)",
        boxShadow:
          "0 10px 40px rgba(2,6,23,0.7), 0 0 0 1px rgba(0,212,255,0.03)",
      }}
    >
      {/* Top reflection */}
      <div
        aria-hidden
        className="absolute -top-6 left-0 right-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%)",
          transform: "skewY(-3deg)",
          mixBlendMode: "overlay",
        }}
      />

      {/* Header */}
      <div className="mb-8">
        <h2 className="font-display font-bold text-3xl text-white mb-2">
          Start Your Project
        </h2>
        <p className="text-gray-400">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      {/* Success message */}
      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 rounded-xl flex items-center gap-3"
            style={{
              background: "rgba(0,212,255,0.08)",
              border: "1px solid rgba(0,212,255,0.2)",
            }}
          >
            <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0" />
            <p className="text-sm text-gray-200">
              Message sent successfully! We'll be in touch soon.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <InputField name="name" label="Name" icon={User} required />
          <InputField
            name="email"
            label="Email"
            type="email"
            icon={Mail}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <InputField name="phone" label="Phone" type="tel" icon={Phone} />
          <InputField name="company" label="Company" icon={Briefcase} />
        </div>

        {/* Service select */}
        <div className="relative">
          <label
            htmlFor="service"
            className="block text-sm font-display font-medium mb-2 text-gray-300"
          >
            Service Interest
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-[rgba(0,212,255,0.08)] transition-all duration-300 font-display text-white focus:outline-none focus:border-[rgba(0,212,255,0.4)] appearance-none cursor-pointer"
              style={{
                backdropFilter: "blur(12px)",
              }}
            >
              <option value="first-turn" className="bg-deep-black">
                First Turn - MVP Development
              </option>
              <option value="loop" className="bg-deep-black">
                The Loop - Continuous Improvement
              </option>
              <option value="ai-tools" className="bg-deep-black">
                AI Tools - Custom Solutions
              </option>
              <option value="consulting" className="bg-deep-black">
                Consulting
              </option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="rgba(0,212,255,0.6)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Message textarea */}
        <div className="relative">
          <label
            htmlFor="message"
            className="block text-sm font-display font-medium mb-2 text-gray-300"
          >
            Message <span className="text-electric-blue">*</span>
          </label>
          <div className="relative">
            <div className="absolute left-4 top-4 pointer-events-none">
              <MessageSquare
                className={`w-5 h-5 transition-colors duration-300 ${
                  focusedField === "message"
                    ? "text-electric-blue"
                    : "text-gray-500"
                }`}
              />
            </div>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => handleBlur("message")}
              required
              rows={5}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border transition-all duration-300 font-display text-white placeholder-gray-600 focus:outline-none resize-none"
              style={{
                borderColor:
                  focusedField === "message"
                    ? "rgba(0,212,255,0.4)"
                    : "rgba(0,212,255,0.08)",
                boxShadow:
                  focusedField === "message"
                    ? "0 0 20px rgba(0,212,255,0.15), inset 0 0 20px rgba(0,212,255,0.03)"
                    : "none",
                backdropFilter: "blur(12px)",
              }}
              placeholder="Tell us about your project..."
            />
          </div>
          <AnimatePresence>
            {touchedFields.has("message") &&
              !validateField("message", formData.message).isValid &&
              formData.message.length > 0 && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mt-2 text-xs text-red-400 flex items-center gap-1"
                >
                  <AlertCircle className="w-3 h-3" />
                  Message must be at least 10 characters
                </motion.p>
              )}
          </AnimatePresence>
        </div>

        {/* Submit button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-xl font-display font-semibold text-white flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,160,255,0.08))",
            border: "1px solid rgba(0,212,255,0.25)",
            boxShadow:
              "0 6px 20px rgba(0,212,255,0.15), inset 0 -2px 6px rgba(0,0,0,0.3)",
          }}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}
