import { useState } from "react";
import { Mail, Copy, Check, Github, Linkedin, ArrowRight } from "lucide-react";
import WhatsappSvgIcon from "./icons/WhatsappSvgIcon";
import { useTranslation } from "react-i18next";

const EMAIL = "eduardotres19@gmail.com";

const ContactSection = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section className="relative w-full bg-card/30 px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Card Container */}
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-[hsl(220,20%,10%)] px-8 py-12 shadow-2xl backdrop-blur-sm md:px-16 md:py-16">
          {/* Subtle glow effect */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

          <div className="relative flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              {t("contact.title")}
            </h2>

            {/* Subtitle */}
            <p className="mb-8 max-w-md text-base text-muted-foreground md:text-lg">
              {t("contact.subtitle")}
            </p>

            {/* Buttons */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={`https://wa.me/5527996257391?text=${encodeURIComponent(`Fala Edu, tudo bem?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                <WhatsappSvgIcon className="h-4 w-4" />
                {t("contact.sendEmail")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-muted"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-primary" />
                    {t("contact.emailCopied")}
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    {t("contact.copyEmail")}
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/eduardotres"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/eduardotres/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
