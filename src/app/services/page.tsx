import Navigation from "@/components/Navigation";
import {
  Brain,
  Clock,
  Code2,
  FileCheck,
  MessageSquare,
  Palette,
  RefreshCw,
  Search,
  Settings,
  Sparkles,
  Target,
  Wand2,
  Zap,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Rubix Core",
  description: "Rubix Core services: First Turn, Loop, and AI Tools",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-deep-black">
      <Navigation />

      {/* Page Header */}
      <section
        className="section-container pt-32"
        data-section="services-header"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="text-glow">خدمات روبیکس</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            لایه‌های خدمات با تمرکز بر چرخه رشد
          </p>
        </div>
      </section>

      {/* Rubix First Turn */}
      <section className="section-container" data-section="first-turn">
        <div
          className="relative p-8 md:p-12 max-w-5xl mx-auto rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
            backdropFilter: "blur(20px) saturate(180%)",
            boxShadow:
              "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 0 rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {/* Liquid glass highlight */}
          <div
            className="absolute top-0 left-0 right-0 h-[40%] opacity-50 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.15), transparent)",
              borderRadius: "inherit",
            }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-electric-blue/10 to-neon-cyan/10 backdrop-blur-sm border border-electric-blue/20">
                <Target
                  className="text-electric-blue"
                  size={32}
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Rubix First Turn
                </h2>
                <p className="text-lg text-gray-400 mb-6">
                  اولین چرخش روبیکس، نقطه آغاز مسیر شماست. در این مرحله:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="relative p-6 rounded-xl overflow-hidden border border-light-gray/10 bg-soft-gray/20 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Search
                    className="text-electric-blue mt-1"
                    size={24}
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-3 text-electric-blue">
                      Discovery
                    </h3>
                    <p className="text-gray-400">
                      شناخت عمیق از نیازها، اهداف کسب‌وکار و چالش‌های فنی
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative p-6 rounded-xl overflow-hidden border border-light-gray/10 bg-soft-gray/20 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Code2
                    className="text-electric-blue mt-1"
                    size={24}
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-3 text-electric-blue">
                      Technical Analysis
                    </h3>
                    <p className="text-gray-400">
                      بررسی دقیق زیرساخت، معماری پیشنهادی و تکنولوژی‌های مناسب
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative p-6 rounded-xl overflow-hidden border border-light-gray/10 bg-soft-gray/20 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Clock
                    className="text-electric-blue mt-1"
                    size={24}
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-3 text-electric-blue">
                      Timeline & Cost
                    </h3>
                    <p className="text-gray-400">
                      برنامه‌ریزی زمانی شفاف و برآورد هزینه‌های واقع‌بینانه
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative p-6 rounded-xl overflow-hidden border border-light-gray/10 bg-soft-gray/20 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <FileCheck
                    className="text-electric-blue mt-1"
                    size={24}
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-3 text-electric-blue">
                      Deliverables
                    </h3>
                    <p className="text-gray-400">
                      مستندات فنی کامل + پروپوزال جامع
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <a href="/contact" className="btn-primary group">
                شروع اولین چرخش روبیکس
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
                  ←
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rubix Loop */}
      <section className="section-container" data-section="loop">
        <div
          className="relative p-8 md:p-12 max-w-5xl mx-auto rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
            backdropFilter: "blur(20px) saturate(180%)",
            boxShadow:
              "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 0 rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {/* Liquid glass highlight */}
          <div
            className="absolute top-0 left-0 right-0 h-[40%] opacity-50 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.15), transparent)",
              borderRadius: "inherit",
            }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(167, 139, 250, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(167, 139, 250, 0.1) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-cyber-purple/10 to-electric-blue/10 backdrop-blur-sm border border-cyber-purple/20">
                <RefreshCw
                  className="text-cyber-purple"
                  size={32}
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Rubix Loop
                </h2>
                <p className="text-lg text-gray-400 mb-6">
                  چرخه توسعه مدولار و پایدار برای رشد مستمر سیستم
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-soft-gray/20 rounded-xl p-5 border border-light-gray/10 hover:border-electric-blue/30 transition-colors backdrop-blur-sm">
                <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center flex-shrink-0 border border-electric-blue/20">
                  <Zap
                    className="text-electric-blue"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold mb-1">
                    Modular Development
                  </h3>
                  <p className="text-gray-400 text-sm">
                    توسعه به صورت ماژولار با امکان افزودن قابلیت‌های جدید
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-soft-gray/20 rounded-xl p-5 border border-light-gray/10 hover:border-electric-blue/30 transition-colors backdrop-blur-sm">
                <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center flex-shrink-0 border border-electric-blue/20">
                  <Sparkles
                    className="text-electric-blue"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold mb-1">
                    QA Bot Integration
                  </h3>
                  <p className="text-gray-400 text-sm">
                    کنترل کیفیت خودکار با استفاده از هوش مصنوعی
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-soft-gray/20 rounded-xl p-5 border border-light-gray/10 hover:border-electric-blue/30 transition-colors backdrop-blur-sm">
                <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center flex-shrink-0 border border-electric-blue/20">
                  <Settings
                    className="text-electric-blue"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold mb-1">
                    Continuous Support
                  </h3>
                  <p className="text-gray-400 text-sm">
                    پشتیبانی مستمر و بهبود تدریجی سیستم
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <a href="/contact" className="btn-primary group">
                ورود به چرخه توسعه
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
                  ←
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rubix AI Tools */}
      <section className="section-container" data-section="ai-tools">
        <div
          className="relative p-8 md:p-12 max-w-5xl mx-auto rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
            backdropFilter: "blur(20px) saturate(180%)",
            boxShadow:
              "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 0 rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {/* Liquid glass highlight */}
          <div
            className="absolute top-0 left-0 right-0 h-[40%] opacity-50 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.15), transparent)",
              borderRadius: "inherit",
            }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(167, 139, 250, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(167, 139, 250, 0.1) 1px, transparent 1px)`,
              backgroundSize: "25px 25px",
            }}
          />

          {/* Coming Soon Badge */}
          <div className="absolute top-6 right-6 z-20">
            <span className="px-4 py-2 bg-cyber-purple/20 border border-cyber-purple/50 rounded-full text-sm font-display font-semibold text-cyber-purple backdrop-blur-sm">
              Coming Soon
            </span>
          </div>

          <div className="relative z-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-cyber-purple/10 to-glow-blue/10 backdrop-blur-sm border border-cyber-purple/20">
                <Brain
                  className="text-cyber-purple"
                  size={32}
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Rubix AI Modules
                </h2>
                <p className="text-lg text-gray-400 mb-6">
                  ماژول‌های هوشمند برای افزودن قابلیت‌های پیشرفته به سیستم شما
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 opacity-60">
              <div className="bg-soft-gray/20 rounded-xl p-6 border border-light-gray/10 text-center backdrop-blur-sm">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-cyber-purple/10 rounded-full flex items-center justify-center border border-cyber-purple/20">
                    <Wand2
                      className="text-cyber-purple"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">
                  Predictive Analytics
                </h3>
                <p className="text-sm text-gray-400">تحلیل پیش‌بینانه با AI</p>
              </div>

              <div className="bg-soft-gray/20 rounded-xl p-6 border border-light-gray/10 text-center backdrop-blur-sm">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-cyber-purple/10 rounded-full flex items-center justify-center border border-cyber-purple/20">
                    <MessageSquare
                      className="text-cyber-purple"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">
                  Smart Chatbots
                </h3>
                <p className="text-sm text-gray-400">چت‌بات‌های هوشمند</p>
              </div>

              <div className="bg-soft-gray/20 rounded-xl p-6 border border-light-gray/10 text-center backdrop-blur-sm">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-cyber-purple/10 rounded-full flex items-center justify-center border border-cyber-purple/20">
                    <Palette
                      className="text-cyber-purple"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">
                  Content Generation
                </h3>
                <p className="text-sm text-gray-400">تولید محتوا با AI</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Future R&D Zone — در حال توسعه
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            آماده شروع هستید؟
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            اولین چرخش روبیکس، نقطه شروع تحول دیجیتال شماست
          </p>
          <a href="/contact" className="btn-primary inline-block">
            رزرو اولین جلسه
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-light-gray/20 py-12">
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
