import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "pt-BR", label: "Português", short: "BR" },
  { code: "en-US", label: "English", short: "US" },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-6 py-4 md:px-12 lg:px-20">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo-header.png"
              alt="Eduardo Tres logo"
              className="h-16 w-auto scale-125 origin-left"
            />
          </Link>

          <nav className="flex items-center gap-2">
            <Link
              to="/"
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors
                hover:bg-primary/15 hover:text-primary
                ${isActive("/") ? "bg-primary/20 text-primary" : "text-muted-foreground"}
              `}
            >
              {t("nav.home")}
            </Link>

           {/*  <Link
              to="/projects"
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground ${isActive("/projects")
                ? "bg-nav-active text-foreground"
                : "text-muted-foreground"
                }`}
            >
              {t("nav.projects")}
            </Link> */}

            {/* Language Dropdown */}
            <div className="relative ml-4" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-full border border-border px-3 py-2 transition-colors hover:border-primary/50 hover:bg-muted/50"
              >
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{currentLang.short}</span>
                <ChevronDown
                  className={`h-3 w-3 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 min-w-[140px] overflow-hidden rounded-lg border border-border bg-card shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-muted"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-muted-foreground">
                          {lang.short}
                        </span>
                        <span className="text-foreground">{lang.label}</span>
                      </div>
                      {i18n.language === lang.code && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
