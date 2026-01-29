import { Layout, Code2, Search, Bot, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ServiceCard {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  priceKey: string;
}

const services: ServiceCard[] = [
  {
    icon: <Layout className="h-6 w-6" />, 
    titleKey: "services.landingPages.title",
    descriptionKey: "services.landingPages.description",
    priceKey: "services.landingPages.price",
  },
  {
    icon: <Code2 className="h-6 w-6" />, 
    titleKey: "services.webApps.title",
    descriptionKey: "services.webApps.description",
    priceKey: "services.webApps.price",
  },
  {
    icon: <Search className="h-6 w-6" />, 
    titleKey: "services.seo.title",
    descriptionKey: "services.seo.description",
    priceKey: "services.seo.price",
  },
  {
    icon: <Bot className="h-6 w-6" />, 
    titleKey: "services.ai.title",
    descriptionKey: "services.ai.description",
    priceKey: "services.ai.price",
  },
];

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full px-6 py-16 md:px-8 md:py-24 lg:py-32 bg-[hsl(220,20%,10%)] text-foreground overflow-x-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            {t("services.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl border border-border/40 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.1)]"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {t(service.titleKey)}
              </h3>

              {/* Description */}
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(service.descriptionKey)}
              </p>

              {/* Price */}
              <p className="mb-4 text-sm font-medium text-primary">
                {t(service.priceKey)}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {t("services.cta")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
