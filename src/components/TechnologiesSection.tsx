import {
  ViteIcon,
  ReactIcon,
  NextJsIcon,
  TailwindIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  ReactQueryIcon,
  ZodIcon,
  GitIcon,
  GitHubIcon,
  FramerIcon,
  ShadcnIcon,
  FigmaIcon,
} from "./icons/TechIcons";

interface Technology {
  name: string;
  icon: React.FC<{ className?: string }>;
  highlighted?: boolean;
}

const technologies: Technology[] = [
  { name: "Vite", icon: ViteIcon },
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextJsIcon, highlighted: true },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
];

const technologies2: Technology[] = [
  { name: "React Query", icon: ReactQueryIcon },
  { name: "Zod", icon: ZodIcon },
  { name: "Git", icon: GitIcon },
  { name: "GitHub", icon: GitHubIcon },
  { name: "Framer Motion", icon: FramerIcon },
  { name: "Shadcn/ui", icon: ShadcnIcon },
  { name: "Figma", icon: FigmaIcon },
];

const TechCard = ({
  name,
  icon: Icon,
  highlighted = false,
}: {
  name: string;
  icon: React.FC<{ className?: string }>;
  highlighted?: boolean;
}) => {
  return (
    <div
      className={`flex h-28 w-28 flex-shrink-0 flex-col items-center justify-center gap-2 rounded-xl border transition-all duration-300 hover:border-primary/50 md:h-32 md:w-32 ${
        highlighted
          ? "border-primary bg-primary/10"
          : "border-border bg-card"
      }`}
    >
      <Icon className="h-8 w-8 text-foreground md:h-10 md:w-10" />
      <span className="text-xs font-medium text-foreground md:text-sm">{name}</span>
    </div>
  );
};

const TechnologiesSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Fade overlays for carousel effect */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent md:w-32" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent md:w-32" />

      {/* First row */}
      <div className="mb-6 flex justify-center gap-4 md:gap-6">
        {technologies.map((tech) => (
          <TechCard
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            highlighted={tech.highlighted}
          />
        ))}
      </div>

      {/* Second row */}
      <div className="flex justify-center gap-4 md:gap-6">
        {technologies2.map((tech) => (
          <TechCard
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            highlighted={tech.highlighted}
          />
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
