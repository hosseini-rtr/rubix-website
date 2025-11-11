import Navigation from "@/components/Navigation";
import { Heart, Radar, Shield, Target, Unlock, User } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Rubix Core",
  description: "Learn about Rubix Core's mission, values, and team",
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Transparency",
      description: "شفافیت کامل در تمام مراحل همکاری",
      detail:
        "ما معتقدیم اعتماد از شفافیت می‌آید. در هر مرحله با شما در میان می‌گذاریم که چه کاری انجام می‌دهیم و چرا.",
      icon: Unlock,
    },
    {
      title: "Precision",
      description: "دقت در جزئیات و کیفیت کد",
      detail:
        "هر خط کدی که می‌نویسیم، با دقت و توجه به بهترین practices صنعت پیاده‌سازی می‌شود.",
      icon: Target,
    },
    {
      title: "Stability",
      description: "ثبات و پایداری سیستم‌ها",
      detail:
        "سیستم‌هایی می‌سازیم که نه تنها امروز، بلکه سال‌ها بعد هم به خوبی کار کنند.",
      icon: Shield,
    },
    {
      title: "Empathy",
      description: "همدلی با نیازهای کسب‌وکار",
      detail:
        "ما نه تنها توسعه‌دهنده، بلکه شریک کسب‌وکار شما هستیم. موفقیت شما، موفقیت ماست.",
      icon: Heart,
    },
  ];

  const team = [
    {
      name: "محمد رضایی",
      role: "Technical Lead & Co-founder",
      bio: "10+ سال تجربه در معماری سیستم‌های مقیاس‌پذیر",
      linkedin: "#",
      github: "#",
      icon: User,
    },
    {
      name: "سارا احمدی",
      role: "AI/ML Engineer",
      bio: "متخصص یادگیری ماشین و سیستم‌های هوشمند",
      linkedin: "#",
      github: "#",
      icon: User,
    },
    {
      name: "علی کریمی",
      role: "Full-Stack Developer",
      bio: "طراح و توسعه‌دهنده تجربه‌های کاربری پیشرفته",
      linkedin: "#",
      github: "#",
      icon: User,
    },
  ];

  return (
    <main className="min-h-screen bg-deep-black">
      <Navigation />

      {/* Page Header */}
      <section className="section-container pt-32" data-section="about-header">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="text-glow">درباره روبیکس</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            ایجاد اعتماد از طریق هویت و ارزش‌ها
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-container" data-section="brand-story">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                داستان ما
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  روبیکس کور از یک ایده ساده آغاز شد: وقتی همه‌چیز سر جای خودش
                  باشد، سیستم به طور طبیعی رشد می‌کند.
                </p>
                <p>
                  ما دیدیم که بسیاری از پروژه‌های نرم‌افزاری با مشکلات پیچیدگی
                  غیرضروری، عدم شفافیت و فقدان مستندات مواجه هستند. تصمیم گرفتیم
                  راهی متفاوت را دنبال کنیم.
                </p>
                <p>
                  امروز، روبیکس کور یک سیستم کامل برای توسعه نرم‌افزار است که بر
                  پایه سه اصل بنا شده: شفافیت، دقت و پایداری.
                </p>
                <p className="text-electric-blue font-semibold">
                  ما سیستم‌هایی می‌سازیم که رشد می‌کنند، نه فقط کار می‌کنند.
                </p>
              </div>
            </div>

            {/* Cube Animation Placeholder */}
            <div className="relative">
              <div className="glass-card p-12 aspect-square flex items-center justify-center relative overflow-hidden">
                {/* Animated Cube Visual */}
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-neon-cyan/20 rounded-3xl animate-float" />
                  <div
                    className="absolute inset-4 bg-gradient-to-br from-electric-blue/30 to-neon-cyan/30 rounded-2xl animate-float"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="absolute inset-8 bg-gradient-to-br from-electric-blue/40 to-neon-cyan/40 rounded-xl animate-float"
                    style={{ animationDelay: "0.4s" }}
                  >
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* <span className="text-6xl">🎯</span> */}
                    <Radar size={120} strokeWidth={1.5} />
                  </div>
                  </div>
                </div>

                {/* Decorative Lines */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />
                  <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />
                  <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-container" data-section="values">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            ارزش‌های اصلی ما
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="relative p-8 hover:border-electric-blue/50 transition-all duration-300 rounded-2xl overflow-hidden border border-light-gray/20 bg-gradient-to-br from-soft-gray/40 via-soft-gray/30 to-soft-gray/20 backdrop-blur-xl"
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

                <div className="relative z-10 flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center border border-electric-blue/20">
                      <value.icon
                        className="text-electric-blue"
                        size={32}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-electric-blue">
                      {value.title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-3">
                      {value.description}
                    </p>
                    <p className="text-sm text-gray-400">{value.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="section-container" data-section="team">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            تیم روبیکس
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            مجموعه‌ای از متخصصان با تجربه در توسعه سیستم‌های پیچیده
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="relative p-8 text-center hover:border-electric-blue/50 transition-all duration-300 group rounded-2xl overflow-hidden border border-light-gray/20 bg-gradient-to-br from-soft-gray/40 via-soft-gray/30 to-soft-gray/20 backdrop-blur-xl"
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
                  {/* Avatar */}
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-electric-blue/20 to-neon-cyan/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-electric-blue/20">
                    <member.icon
                      className="text-electric-blue"
                      size={48}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-display font-bold mb-2">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-electric-blue text-sm font-display font-semibold mb-4">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="text-gray-400 text-sm mb-6">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-soft-gray/50 rounded-full flex items-center justify-center hover:bg-electric-blue/20 hover:border-electric-blue/50 border border-transparent transition-all"
                      aria-label="LinkedIn"
                    >
                      <span className="text-sm">in</span>
                    </a>
                    <a
                      href={member.github}
                      className="w-10 h-10 bg-soft-gray/50 rounded-full flex items-center justify-center hover:bg-electric-blue/20 hover:border-electric-blue/50 border border-transparent transition-all"
                      aria-label="GitHub"
                    >
                      <span className="text-sm">gh</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-container" data-section="mission">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-display font-bold mb-6">ماموریت ما</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              ما متعهد هستیم که سیستم‌های نرم‌افزاری بسازیم که نه تنها امروز
              مشکلات را حل می‌کنند، بلکه پایه‌ای برای رشد آینده کسب‌وکارها
              می‌گذارند. با ترکیب دقت فنی، شفافیت و همدلی، تجربه‌ای متفاوت در
              توسعه نرم‌افزار ارائه می‌دهیم.
            </p>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 rounded-full border border-electric-blue/30">
              <span className="text-electric-blue font-display font-semibold">
                Building systems that grow
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            بیایید با هم بسازیم
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            آماده‌ایم تا در مسیر دیجیتال شما همراه‌تان باشیم
          </p>
          <a href="/contact" className="btn-primary inline-block">
            شروع همکاری
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
