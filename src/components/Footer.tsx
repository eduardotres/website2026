import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          {/* Left Column - Logo & Description */}
          <div className="flex flex-col items-start gap-4">
            {/* LOGO AREA: fixed height + hide overflow to avoid overlap */}
            <Link to="/" className="block">
              <div className="h-12 overflow-hidden">
                <img
                  src="/logo-footer.png"
                  alt="Eduardo Tres logo"
                  className="h-12 w-auto max-w-[240px] object-contain object-left-top"
                  loading="lazy"
                />
              </div>
            </Link>
            
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>

          {/* Middle Column - Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground">
              {t("footer.navigation")}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/projects"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("nav.projects")}
              </Link>
            </nav>
          </div>

          {/* Right Column - Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground">
              {t("footer.connect")}
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/eduardotres"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/eduardotres/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href="mailto:eduardotres19@gmail.com"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 border-t border-border/40 pt-6">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
