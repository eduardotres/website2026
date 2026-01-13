import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useEffect, useState, useRef, useCallback } from "react";
import {
  ViteIcon,
  ReactIcon,
  NextJsIcon,
  TailwindIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  LaravelIcon,
  PhpIcon,
  DockerIcon,
  ReactQueryIcon,
  ZodIcon,
  GitIcon,
  GitHubIcon,
  FramerIcon,
  ShadcnIcon,
  FigmaIcon,
  NuxtIcon,
  VueIcon,
  LivewireIcon,
  FilamentIcon,
  NovaIcon,
  MariaDbIcon,
  MySqlIcon,
  PostgreSqlIcon,
  BlockchainIcon,
  JQueryIcon,
  BootstrapIcon,
} from "./icons/TechIcons";

interface Technology {
  name: string;
  icon: React.FC<{ className?: string }>;
  featured?: boolean;
}

const row1Technologies: Technology[] = [
  { name: "Vite", icon: ViteIcon },
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextJsIcon, featured: true },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "Laravel", icon: LaravelIcon },
  { name: "PHP", icon: PhpIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Nuxt", icon: NuxtIcon },
  { name: "Vue", icon: VueIcon },
];

const row2Technologies: Technology[] = [
  { name: "React Query", icon: ReactQueryIcon },
  { name: "Zod", icon: ZodIcon },
  { name: "Git", icon: GitIcon },
  { name: "GitHub", icon: GitHubIcon },
  { name: "Framer Motion", icon: FramerIcon },
  { name: "shadcn/ui", icon: ShadcnIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "Livewire", icon: LivewireIcon },
  { name: "FilamentPHP", icon: FilamentIcon },
  { name: "Laravel Nova", icon: NovaIcon },
  { name: "MariaDB", icon: MariaDbIcon },
  { name: "MySQL", icon: MySqlIcon },
  { name: "PostgreSQL", icon: PostgreSqlIcon },
  { name: "Blockchain", icon: BlockchainIcon },
  { name: "jQuery", icon: JQueryIcon },
  { name: "Bootstrap", icon: BootstrapIcon },
];

const TechCard = ({
  name,
  icon: Icon,
  featured = false,
}: {
  name: string;
  icon: React.FC<{ className?: string }>;
  featured?: boolean;
}) => {
  return (
    <div
      className={`flex h-[90px] w-[120px] flex-shrink-0 flex-col items-center justify-center gap-2 rounded-[14px] border transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 sm:h-[100px] sm:w-[140px] md:h-[110px] md:w-[160px] lg:h-[120px] lg:w-[180px] ${
        featured
          ? "border-primary/60 bg-card shadow-[0_0_30px_rgba(34,197,94,0.15)]"
          : "border-border/50 bg-card hover:border-border hover:shadow-lg"
      }`}
      aria-label={`${name} technology`}
    >
      <Icon className="h-6 w-6 text-foreground/80 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9" />
      <span className="text-[11px] font-semibold text-foreground/90 sm:text-xs md:text-sm">
        {name}
      </span>
    </div>
  );
};

interface MarqueeRowProps {
  technologies: Technology[];
  direction: "left" | "right";
  speed?: number;
}

const MarqueeRow = ({ technologies, direction, speed = 40 }: MarqueeRowProps) => {
  const prefersReducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [singleSetWidth, setSingleSetWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate items for seamless loop (3x for safety)
  const duplicatedTechs = useMemo(
    () => [...technologies, ...technologies, ...technologies],
    [technologies]
  );

  // Measure width of one set of items
  const measureWidth = useCallback(() => {
    if (trackRef.current) {
      const width = trackRef.current.scrollWidth / 3;
      setSingleSetWidth(width);
    }
  }, []);

  useEffect(() => {
    measureWidth();
    window.addEventListener("resize", measureWidth);
    return () => window.removeEventListener("resize", measureWidth);
  }, [measureWidth]);

  // Calculate animation duration based on width and speed
  const duration = singleSetWidth > 0 ? singleSetWidth / speed : 20;

  if (prefersReducedMotion) {
    return (
      <div className="flex w-full justify-center overflow-hidden">
        <div className="flex flex-nowrap gap-3 px-4 sm:gap-4">
          {technologies.map((tech) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              featured={tech.featured}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={trackRef}
        className="flex flex-nowrap gap-3 sm:gap-4"
        animate={{
          x: direction === "left" ? [0, -singleSetWidth] : [-singleSetWidth, 0],
        }}
        transition={{
          x: {
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
        style={{
          willChange: "transform",
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {duplicatedTechs.map((tech, index) => (
          <TechCard
            key={`${tech.name}-${index}`}
            name={tech.name}
            icon={tech.icon}
            featured={tech.featured}
          />
        ))}
      </motion.div>
    </div>
  );
};

const TechStackMarquee = () => {
  return (
    <section className="relative w-screen overflow-hidden py-10 md:py-16 lg:py-20 -ml-[calc((100vw-100%)/2)]">
      {/* Subtle radial background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-card/20 via-background to-background" />

      {/* Fade overlays for edge effect */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-background to-transparent sm:w-16 md:w-24 lg:w-32" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-background to-transparent sm:w-16 md:w-24 lg:w-32" />

      <div className="relative flex flex-col gap-3 sm:gap-4 md:gap-5">
        {/* Row 1 - scrolls left */}
        <MarqueeRow technologies={row1Technologies} direction="left" speed={45} />

        {/* Row 2 - scrolls right */}
        <MarqueeRow technologies={row2Technologies} direction="right" speed={35} />
      </div>
    </section>
  );
};

export default TechStackMarquee;
