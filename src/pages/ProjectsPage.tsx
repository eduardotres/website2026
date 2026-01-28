import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Search, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import projectsData from "../data/projects.json";

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  links: { liveUrl: string };
  tech: string[];
  date: string;
  featured?: boolean;
}

const projects: Project[] = (projectsData as Project[]).map((project) => ({
  ...project,
  description: project.shortDescription,
  href: project.links.liveUrl,
  tags: project.tech,
}));

const allTechnologies = ["React", "Next.js", "Vue", "Laravel", "TypeScript"];

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
}

const Select = ({ value, onChange, options, placeholder }: SelectProps) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full appearance-none rounded-lg border border-border/50 bg-card/80 px-4 pr-10 text-sm text-foreground backdrop-blur-sm transition-colors hover:border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option} className="bg-card text-foreground">
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      href={project.links.liveUrl}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.1)]"
      target="_blank" rel="noopener noreferrer"
    >
      {/* Image Banner */}
      <div className="relative h-56 w-full overflow-hidden sm:h-64 md:h-72">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-70" />
        {/* Arrow icon in corner */}
        <div className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/90 text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
        {/* Title Row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground sm:text-xl">
            {project.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>
      </div>
    </a>
  );
};

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState(t("projects.allTechnologies"));
  const [sortBy, setSortBy] = useState(t("projects.sortRecent"));

  const sortOptions = [t("projects.sortRecent"), t("projects.sortOldest")];
  const techOptions = [t("projects.allTechnologies"), ...allTechnologies];

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.shortDescription.toLowerCase().includes(query)
      );
    }

    // Filter by technology
    if (selectedTech !== t("projects.allTechnologies")) {
      result = result.filter((p) => p.tech.includes(selectedTech));
    }

    // Sort
    if (sortBy === t("projects.sortRecent")) {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === t("projects.sortOldest")) {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }

    return result;
  }, [searchQuery, selectedTech, sortBy, t]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <Header />

      <div className="mx-auto max-w-6xl px-6 py-8 md:px-8 md:py-12">
        {/* Back Link */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("projects.backToHome")}
        </Link>

        {/* Header */}
        <div className="mb-10">
          <h1 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            {t("projects.title")}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 flex flex-col gap-3 rounded-xl border border-border/40 bg-card/50 p-3 backdrop-blur-sm sm:flex-row sm:items-center md:p-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder={t("projects.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 w-full rounded-lg border border-border/50 bg-card/80 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-sm transition-colors hover:border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
          </div>

          {/* Selects */}
          <div className="flex gap-3">
            <div className="w-36 sm:w-40">
              <Select
                value={selectedTech}
                onChange={setSelectedTech}
                options={techOptions}
              />
            </div>
            <div className="w-36 sm:w-40">
              <Select
                value={sortBy}
                onChange={setSortBy}
                options={sortOptions}
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-lg text-muted-foreground">
              {t("projects.noResults")}
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTech(t("projects.allTechnologies"));
                setSortBy(t("projects.sortRecent"));
              }}
              className="mt-4 text-sm text-primary hover:underline"
            >
              {t("projects.clearFilters")}
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;
