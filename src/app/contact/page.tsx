"use client";

import Navigation from "@/components/Navigation";
import { Lightbulb, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "first-turn",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "first-turn",
        message: "",
      });
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-deep-black">
      <Navigation />

      {/* Page Header */}
      <section
        className="section-container pt-32"
        data-section="contact-header"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="text-glow">تماس با ما</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            آماده شروع سفر دیجیتال شما هستیم
          </p>
        </div>
      </section>

      <div className="section-container ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div id="form" data-section="booking-form">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-display font-bold mb-6">
                رزرو اولین جلسه
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-electric-blue/10 border border-electric-blue/30 rounded-lg">
                  <p className="text-electric-blue text-sm">
                    ✓ پیام شما با موفقیت ارسال شد. به زودی با شما تماس می‌گیریم.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-display font-semibold mb-2"
                  >
                    نام و نام خانوادگی *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-soft-gray/50 border border-light-gray/20 rounded-lg focus:border-electric-blue/50 focus:outline-none focus:ring-1 focus:ring-electric-blue/50 transition-colors"
                    placeholder="علی احمدی"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-display font-semibold mb-2"
                  >
                    ایمیل *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-soft-gray/50 border border-light-gray/20 rounded-lg focus:border-electric-blue/50 focus:outline-none focus:ring-1 focus:ring-electric-blue/50 transition-colors"
                    placeholder="ali@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-display font-semibold mb-2"
                  >
                    تلفن
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-soft-gray/50 border border-light-gray/20 rounded-lg focus:border-electric-blue/50 focus:outline-none focus:ring-1 focus:ring-electric-blue/50 transition-colors"
                    placeholder="+98 912 345 6789"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-display font-semibold mb-2"
                  >
                    نام شرکت / سازمان
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-soft-gray/50 border border-light-gray/20 rounded-lg focus:border-electric-blue/50 focus:outline-none focus:ring-1 focus:ring-electric-blue/50 transition-colors"
                    placeholder="نام شرکت شما"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-display font-semibold mb-2"
                  >
                    خدمت مورد نظر *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-soft-gray/50 border border-light-gray/20 rounded-lg focus:border-electric-blue/50 focus:outline-none focus:ring-1 focus:ring-electric-blue/50 transition-colors"
                  >
                    <option value="first-turn">Rubix First Turn</option>
                    <option value="loop">Rubix Loop</option>
                    <option value="ai-tools">Rubix AI Tools</option>
                    <option value="consultation">مشاوره عمومی</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-display font-semibold mb-2"
                  >
                    توضیحات پروژه *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-soft-gray/50 border border-light-gray/20 rounded-lg focus:border-electric-blue/50 focus:outline-none focus:ring-1 focus:ring-electric-blue/50 transition-colors resize-none"
                    placeholder="لطفا درباره پروژه یا نیاز خود توضیح دهید..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "در حال ارسال..." : "ارسال درخواست"}
                </button>
              </form>

              <p className="mt-6 text-xs text-gray-400 text-center">
                در اولین چرخش، نقشه‌ راه شما ترسیم می‌شود.
              </p>
            </div>
          </div>

          {/* Contact Info & Additional Content */}
          <div className="space-y-8" data-section="contact-info">
            {/* Direct Contact */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-display font-bold mb-6">
                راه‌های ارتباطی
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center flex-shrink-0 border border-electric-blue/20">
                    <Mail
                      className="text-electric-blue"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@rubixcore.com"
                      className="text-gray-400 hover:text-electric-blue transition-colors"
                    >
                      hello@rubixcore.com
                    </a>
                  </div>
                </div>

                {/* Telegram */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center flex-shrink-0 border border-electric-blue/20">
                    <Send
                      className="text-electric-blue"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-1">
                      Telegram
                    </h3>
                    <a
                      href="https://t.me/rubixcore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-electric-blue transition-colors"
                    >
                      @rubixcore
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center flex-shrink-0 border border-electric-blue/20">
                    <MessageCircle
                      className="text-electric-blue"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/989123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-electric-blue transition-colors"
                    >
                      +98 912 345 6789
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini CTA */}
            <div className="relative p-8 bg-gradient-to-br from-electric-blue/5 to-neon-cyan/5 border-electric-blue/20 rounded-2xl overflow-hidden border border-light-gray/20 backdrop-blur-xl">
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center border border-electric-blue/20">
                    <Lightbulb
                      className="text-electric-blue"
                      size={32}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  اولین چرخش رایگان است
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  در اولین جلسه، بدون هیچ تعهدی، نیازهای شما را بررسی می‌کنیم و
                  نقشه راه پیشنهادی ارائه می‌دهیم.
                </p>
                <div className="inline-block px-4 py-2 bg-electric-blue/20 border border-electric-blue/30 rounded-full">
                  <span className="text-electric-blue text-sm font-display font-semibold">
                    بدون ریسک، بدون تعهد
                  </span>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-display font-bold mb-4">
                ساعات پاسخگویی
              </h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex justify-between">
                  <span>شنبه تا چهارشنبه</span>
                  <span className="text-electric-blue">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>پنج‌شنبه</span>
                  <span className="text-electric-blue">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>جمعه</span>
                  <span className="text-gray-500">تعطیل</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                * پیام‌های خارج از ساعت اداری در اولین فرصت پاسخ داده می‌شوند
              </p>
            </div>

            {/* FAQ Quick Links */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-display font-bold mb-4">
                سوالات متداول
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/process"
                    className="text-gray-400 hover:text-electric-blue transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-electric-blue">→</span>
                    فرآیند کاری چگونه است؟
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-electric-blue transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-electric-blue">→</span>
                    خدمات شما چیست؟
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="text-gray-400 hover:text-electric-blue transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-electric-blue">→</span>
                    نمونه کارها
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-light-gray/20 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-neon-cyan rounded-lg flex items-center justify-center">
                <span className="text-deep-black font-display font-bold">
                  R
                </span>
              </div>
              <span className="font-display text-lg font-bold">Rubix Core</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Rubix Core. Building systems that grow.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
