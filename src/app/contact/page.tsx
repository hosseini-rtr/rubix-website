import NavigationCinematic from "@/components/NavigationCinematic";
import ContactFormCinematic from "@/components/ContactFormCinematic";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, MapPin, Clock, Send, Lightbulb } from "lucide-react";

export default function ContactPage() {

  return (
    <main className="min-h-screen bg-deep-black">
      <NavigationCinematic />

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

      {/* Main Content */}
      <section className="relative py-12 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <ContactFormCinematic />

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Contact form is rendered via ContactFormCinematic; removed duplicate inline form */}
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
      </section>

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
