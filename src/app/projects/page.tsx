import Navigation from "@/components/Navigation";
import {
  BarChart3,
  Bot,
  Hospital,
  Link2,
  Radio,
  ShoppingCart,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Rubix Core",
  description: "Explore our case studies and project portfolio",
};

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "AI-Powered E-Commerce Platform",
      challenge:
        "یک استارتاپ نیاز به پلتفرم فروش آنلاین با قابلیت پیشنهاد هوشمند محصول داشت",
      solution:
        "ساخت سیستم توصیه‌گر مبتنی بر ML با معماری مایکروسرویس و API Gateway",
      result: "افزایش 40% در نرخ تبدیل و کاهش 60% در زمان بارگذاری صفحات",
      tags: ["AI", "Backend", "Microservices"],
      icon: ShoppingCart,
    },
    {
      id: 2,
      title: "Real-Time Analytics Dashboard",
      challenge:
        "نیاز به داشبورد تحلیلی برای مانیتورینگ لحظه‌ای داده‌های کسب‌وکار",
      solution:
        "پیاده‌سازی سیستم stream processing با Kafka و visualization با React",
      result: "پردازش بیش از 100K رویداد در ثانیه با latency کمتر از 100ms",
      tags: ["Real-time", "Data", "DevOps"],
      icon: BarChart3,
    },
    {
      id: 3,
      title: "Automated QA Bot System",
      challenge: "فرآیند تست دستی زمان‌بر و خطاهای انسانی در تست‌های تکراری",
      solution: "توسعه ربات QA با AI برای تست خودکار و شناسایی باگ‌ها",
      result: "کاهش 70% زمان تست و شناسایی 95% باگ‌ها قبل از production",
      tags: ["AI", "Automation", "Testing"],
      icon: Bot,
    },
    {
      id: 4,
      title: "Blockchain-Based Supply Chain",
      challenge: "نیاز به شفافیت و ردیابی محصولات در زنجیره تامین چندملیتی",
      solution: "پیاده‌سازی smart contracts روی Ethereum با dashboard مدیریتی",
      result: "کاهش 80% در زمان تایید تراکنش‌ها و شفافیت کامل در زنجیره",
      tags: ["Blockchain", "Web3", "Backend"],
      icon: Link2,
    },
    {
      id: 5,
      title: "Healthcare Management System",
      challenge: "سیستم قدیمی بیمارستانی با مشکلات امنیتی و کارایی پایین",
      solution: "مهاجرت به معماری مدرن با امنیت بالا و رعایت HIPAA compliance",
      result: "افزایش 3 برابری سرعت سیستم و کاهش صفر خطاهای امنیتی",
      tags: ["Healthcare", "Security", "Cloud"],
      icon: Hospital,
    },
    {
      id: 6,
      title: "Smart IoT Platform",
      challenge: "مدیریت و مانیتورینگ هزاران دستگاه IoT در زمان واقعی",
      solution: "ساخت پلتفرم مقیاس‌پذیر با MQTT و time-series database",
      result: "مدیریت موفق 50K+ دستگاه با uptime بالای 99.9%",
      tags: ["IoT", "Real-time", "DevOps"],
      icon: Radio,
    },
  ];

  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  return (
    <main className="min-h-screen bg-deep-black">
      <Navigation />

      {/* Page Header */}
      <section
        className="section-container pt-32"
        data-section="projects-header"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="text-glow">پروژه‌های ما</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            نمایش خروجی واقعی سیستم روبیکس
          </p>
        </div>
      </section>

      {/* Filter Tags (Placeholder for future) */}
      <section
        className="max-w-7xl mx-auto px-6 md:px-12 pb-12"
        data-section="filters"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <button className="px-5 py-2 bg-electric-blue/20 border border-electric-blue/50 rounded-full text-sm font-display font-semibold text-electric-blue hover:bg-electric-blue/30 transition-colors">
            All Projects
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className="px-5 py-2 bg-soft-gray/30 border border-light-gray/20 rounded-full text-sm font-display font-semibold text-gray-400 hover:border-electric-blue/30 hover:text-electric-blue transition-colors"
            >
              #{tag}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-container" data-section="case-studies">
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative p-8 hover:border-electric-blue/50 transition-all duration-300 group rounded-2xl overflow-hidden border border-light-gray/20 bg-gradient-to-br from-soft-gray/40 via-soft-gray/30 to-soft-gray/20 backdrop-blur-xl"
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
                {/* Project Icon */}
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center border border-electric-blue/20">
                    <project.icon
                      className="text-electric-blue"
                      size={32}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-electric-blue transition-colors">
                  {project.title}
                </h3>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="text-sm font-display font-semibold text-electric-blue mb-2">
                    CHALLENGE
                  </h4>
                  <p className="text-gray-400 text-sm">{project.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <h4 className="text-sm font-display font-semibold text-neon-cyan mb-2">
                    SOLUTION
                  </h4>
                  <p className="text-gray-400 text-sm">{project.solution}</p>
                </div>

                {/* Result */}
                <div className="mb-6">
                  <h4 className="text-sm font-display font-semibold text-cyber-purple mb-2">
                    RESULT
                  </h4>
                  <p className="text-gray-400 text-sm font-semibold">
                    {project.result}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-soft-gray/50 border border-light-gray/20 rounded-full text-xs font-display font-semibold text-gray-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container" data-section="stats">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-12">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              در یک نگاه
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-glow mb-2">
                  50+
                </div>
                <p className="text-gray-400">پروژه موفق</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-glow mb-2">
                  99.9%
                </div>
                <p className="text-gray-400">Uptime میانگین</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-glow mb-2">
                  30+
                </div>
                <p className="text-gray-400">مشتری راضی</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-glow mb-2">
                  5+
                </div>
                <p className="text-gray-400">سال تجربه</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            پروژه بعدی، پروژه شماست
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            بیایید چالش شما را به یک موفقیت تبدیل کنیم
          </p>
          <a href="/contact" className="btn-primary inline-block">
            شروع پروژه
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
