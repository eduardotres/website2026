import { Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import profilePhoto from "@/assets/profile-photo.jpg";
import TechStackMarquee from "@/components/TechStackMarquee";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  const { t } = useTranslation();

  return (
      <div className="relative z-10 min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Hero Section */}
        <main className="mx-auto w-full max-w-6xl flex flex-col items-center gap-12 px-6 py-16 md:flex-row md:px-12 md:py-24 lg:px-20 lg:py-32">
        {/* Left Content */}
        <div className="flex flex-1 flex-col items-start gap-6">
          {/* Availability Badge */}
          <div className="flex items-center gap-2 rounded-full bg-badge-bg px-4 py-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-badge-dot" />
            <span className="text-sm font-medium text-badge-text">
              {t("hero.available")}
            </span>
          </div>

          {/* Greeting */}
          <h2 className="text-2xl font-medium text-foreground md:text-3xl lg:text-4xl">
            {t("hero.greeting")}
          </h2>

          {/* Title with Gradient */}
          <h1 className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl whitespace-pre-line">
            {t("hero.title")}
          </h1>

          {/* Description */}
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("hero.description")}
          </p>

          {/* CTA and Social Links */}
          <div className="flex items-center gap-6 pt-4">
            <a
              href="#"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              {t("hero.cta")}
            </a>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Photo */}
        <div className="flex flex-1 justify-center md:justify-end">
          <div className="relative">
            <div className="h-80 w-72 overflow-hidden rounded-3xl border-4 border-border shadow-2xl md:h-96 md:w-80 lg:h-[450px] lg:w-[380px]">
              <img
                src={profilePhoto}
                alt={t("hero.photoAlt")}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Tech Stack Marquee */}
      <TechStackMarquee />

      {/* Featured Projects */}
      <FeaturedProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
