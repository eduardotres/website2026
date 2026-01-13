import { Github, Linkedin, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import TechStackMarquee from "@/components/TechStackMarquee";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">E</span>
          </div>
          <span className="text-lg font-semibold">
            eduardo<span className="text-muted-foreground">.dev</span>
          </span>
        </div>

        <nav className="flex items-center gap-2">
          <a
            href="#"
            className="rounded-full bg-nav-active px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Início
          </a>
          <a
            href="#"
            className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Projetos
          </a>
          <div className="ml-4 flex items-center gap-2 rounded-full border border-border px-3 py-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">PT</span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center gap-12 px-6 py-16 md:flex-row md:px-12 md:py-24 lg:px-20 lg:py-32">
        {/* Left Content */}
        <div className="flex flex-1 flex-col items-start gap-6">
          {/* Availability Badge */}
          <div className="flex items-center gap-2 rounded-full bg-badge-bg px-4 py-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-badge-dot" />
            <span className="text-sm font-medium text-badge-text">
              Disponível para novos projetos
            </span>
          </div>

          {/* Greeting */}
          <h2 className="text-2xl font-medium text-foreground md:text-3xl lg:text-4xl">
            Olá, meu nome é Eduardo
          </h2>

          {/* Title with Gradient */}
          <h1 className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl">
            Engenheiro de
            <br />
            Software - full stack
          </h1>

          {/* Description */}
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Especialista em transformar conceitos em experiências digitais
            cativantes, com um foco preciso em UX e SEO para resultados
            superiores.
          </p>

          {/* CTA and Social Links */}
          <div className="flex items-center gap-6 pt-4">
            <a
              href="#"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Entrar em contato
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
                alt="Eduardo - Engenheiro de Software"
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
