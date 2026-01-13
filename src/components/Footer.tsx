import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Left Column - Logo & Description */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">E</span>
              </div>
              <span className="text-lg font-semibold">
                eduardo<span className="text-muted-foreground">.dev</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Desenvolvendo experiências digitais modernas, performáticas e acessíveis.
            </p>
          </div>

          {/* Middle Column - Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground">Navegação</h3>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Início
              </Link>
              <Link
                to="/projects"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Projetos
              </Link>
            </nav>
          </div>

          {/* Right Column - Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground">Conecte-se</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:contato@eduardotres.com"
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
            © 2026 Eduardo Rodrigues. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
