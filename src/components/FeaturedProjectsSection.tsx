import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";


interface Project {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  links: { liveUrl: string };
  tech: string[];
  featured?: boolean;
}

const projects: Project[] = (projectsData as Project[])
  .filter((project) => project.featured)
  .map((project) => ({
    ...project,
    description: project.shortDescription,
    href: project.links.liveUrl,
    tags: project.tech,
  }));

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <a
      href={project.href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.1)] h-full min-h-[420px]"
      target="_blank" rel="noopener noreferrer"
    >
      {/* Image Banner */}
      <div className="relative h-48 w-full overflow-hidden sm:h-56 md:h-64">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6 min-h-0">
        {/* Title Row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground sm:text-xl">
            {project.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.tags.slice(0, 4).map((tag: string, index: number) => (
              <span
                key={index}
                className="rounded-full border border-border/50 bg-background/50 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </a>
  );
};

const FeaturedProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        {/* Section Title */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
            {t("projects.featuredTitle")}
          </h2>
          {/* Glow effect behind title */}
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-32 w-64 -translate-x-1/2 bg-primary/10 blur-3xl" />
        </div>


        {/* Projects Carousel */}
        <div className="relative">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 h-full flex items-stretch">
                    <div className="flex flex-1 h-full"><ProjectCard project={project} /></div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {projects.length > 3 && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
        </div>

        {/* View All Link */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-card"
          >
            {t("projects.viewAll")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
