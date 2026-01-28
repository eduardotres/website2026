import { Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsappButton from "@/components/WhatsappButton";

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
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/eduardotres"
                target="_blank"
                className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <span className="pointer-events-none absolute inset-0 rounded-full bg-green-200/25 opacity-0 blur-[1px] transition-all duration-200 group-hover:opacity-100 group-hover:scale-110" />
                <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-green-500 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:scale-110" />

                <Github className="relative z-10 h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/eduardotres/"
                target="_blank"
                className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <span className="pointer-events-none absolute inset-0 rounded-full bg-green-500/25 opacity-0 blur-[1px] transition-all duration-200 group-hover:opacity-100 group-hover:scale-110" />
                <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-green-500 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:scale-110" />

                <Linkedin className="relative z-10 h-5 w-5" />
              </a>
            </div>

          </div>
        </div>
      </main>

      {/* Featured Projects */}
      {<FeaturedProjectsSection />}

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsappButton />
    </div>
  );
};

export default Index;
