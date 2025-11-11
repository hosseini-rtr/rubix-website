import Navigation from "@/components/Navigation";
import {
  BookOpen,
  Download,
  Lightbulb,
  MessageSquare,
  RefreshCw,
  Search,
  Settings,
  Sparkles,
  Unlock,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process | Rubix Core",
  description: "The Rubix Core development process and methodology",
};

export default function ProcessPage() {
  const loopSteps = [
    {
      number: "1",
      title: "دریافت نیاز",
      description: "شناخت دقیق نیازها و اهداف پروژه",
      icon: Download,
    },
    {
      number: "2",
      title: "تحلیل",
      description: "بررسی فنی و طراحی معماری",
      icon: Search,
    },
    {
      number: "3",
      title: "توسعه",
      description: "پیاده‌سازی مدولار و با کیفیت",
      icon: Settings,
    },
    {
      number: "4",
      title: "بازخورد",
      description: "دریافت نظرات و تست کاربری",
      icon: MessageSquare,
    },
    {
      number: "5",
      title: "بهبود",
      description: "اعمال تغییرات و ارتقای مستمر",
      icon: Sparkles,
    },
  ];

  const values = [
    {
      title: "Transparency",
      description: "شفافیت کامل در هر مرحله از پروژه",
      icon: Unlock,
    },
    {
      title: "Documentation",
      description: "مستندسازی دقیق و قابل فهم",
      icon: BookOpen,
    },
    {
      title: "Communication",
      description: "ارتباط مستمر و موثر با تیم",
      icon: Lightbulb,
    },
  ];

  return (
    <main className="min-h-screen bg-deep-black">
      <Navigation />

      {/* Page Header */}
      <section
        className="section-container pt-32"
        data-section="process-header"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="text-glow">فرآیند کاری روبیکس</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            شفاف‌سازی سیستم کاری و چرخه توسعه
          </p>
        </div>
      </section>

      {/* Loop Diagram */}
      <section className="section-container" data-section="loop-diagram">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            چرخه توسعه پیوسته
          </h2>

          <div className="grid md:grid-cols-5 gap-6 relative">
            {/* Connection Lines - Hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue via-neon-cyan to-electric-blue opacity-30 -translate-y-1/2" />

            {loopSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative p-6 text-center hover:border-electric-blue/50 transition-all duration-300 h-full z-10 rounded-2xl overflow-hidden border border-light-gray/20 bg-gradient-to-br from-soft-gray/40 via-soft-gray/30 to-soft-gray/20 backdrop-blur-xl">
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
                      backgroundSize: "15px 15px",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-electric-blue to-neon-cyan rounded-full flex items-center justify-center font-display font-bold text-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center border border-electric-blue/20">
                        <step.icon
                          className="text-electric-blue"
                          size={24}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </div>

                {/* Arrow for mobile */}
                {index < loopSteps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="text-electric-blue text-2xl">↓</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Loop indicator */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3">
              <div className="w-8 h-8 bg-electric-blue/10 rounded-full flex items-center justify-center border border-electric-blue/20">
                <RefreshCw
                  className="text-electric-blue"
                  size={20}
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-gray-400">
                این چرخه به صورت مستمر تکرار می‌شود
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Points */}
      <section className="section-container" data-section="values">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            ارزش‌های اصلی ما
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="relative p-8 text-center hover:border-electric-blue/50 transition-all duration-300 rounded-2xl overflow-hidden border border-light-gray/20 bg-gradient-to-br from-soft-gray/40 via-soft-gray/30 to-soft-gray/20 backdrop-blur-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center border border-electric-blue/20">
                      <value.icon
                        className="text-electric-blue"
                        size={32}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-electric-blue">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-container" data-section="quote">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            {/* Decorative quotes */}
            <div className="absolute top-8 left-8 text-6xl text-electric-blue/20 font-serif">
              "
            </div>
            <div className="absolute bottom-8 right-8 text-6xl text-electric-blue/20 font-serif">
              "
            </div>

            <blockquote className="relative z-10">
              <p className="text-2xl md:text-3xl font-light text-gray-300 mb-6 leading-relaxed">
                کیفیت پایدار، از صداقت در تصمیم‌گیری آغاز می‌شود.
              </p>
              <footer className="text-electric-blue font-display font-semibold">
                — Rubix Core Philosophy
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Methodology Details */}
      <section className="section-container" data-section="methodology">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            چرا روش ما متفاوت است؟
          </h2>

          <div className="space-y-6">
            <div className="glass-card p-8 hover:border-electric-blue/30 transition-colors">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-3">
                    هدف‌گذاری واضح
                  </h3>
                  <p className="text-gray-400">
                    در هر مرحله، اهداف مشخص و قابل اندازه‌گیری داریم. شما
                    می‌دانید چه انتظاری دارید و چه زمانی به آن می‌رسید.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 hover:border-electric-blue/30 transition-colors">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-3">
                    گزارش‌دهی منظم
                  </h3>
                  <p className="text-gray-400">
                    به صورت هفتگی از پیشرفت کار مطلع می‌شوید. هیچ تصمیم مهمی
                    بدون اطلاع شما گرفته نمی‌شود.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 hover:border-electric-blue/30 transition-colors">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔧</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-3">
                    انعطاف‌پذیری
                  </h3>
                  <p className="text-gray-400">
                    نیازهای شما ممکن است تغییر کند. ما آماده‌ایم تا با حفظ
                    کیفیت، مسیر را تنظیم کنیم.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            بیایید با هم شروع کنیم
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            در اولین جلسه، فرآیند کاری را با جزئیات بررسی می‌کنیم
          </p>
          <a href="/contact" className="btn-primary inline-block">
            رزرو جلسه رایگان
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
