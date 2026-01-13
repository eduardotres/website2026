import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
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
];

const row2Technologies: Technology[] = [
  { name: "React Query", icon: ReactQueryIcon },
  { name: "Zod", icon: ZodIcon },
  { name: "Git", icon: GitIcon },
  { name: "GitHub", icon: GitHubIcon },
  { name: "Framer Motion", icon: FramerIcon },
  { name: "shadcn/ui", icon: ShadcnIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "Nuxt", icon: NuxtIcon },
  { name: "Vue", icon: VueIcon },
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
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`flex h-[110px] w-[180px] flex-shrink-0 flex-col items-center justify-center gap-3 rounded-[18px] border transition-all duration-300 md:h-[120px] md:w-[200px] ${
        featured
          ? "border-primary/60 bg-card shadow-[0_0_30px_rgba(34,197,94,0.15)]"
          : "border-border/50 bg-card hover:border-border hover:shadow-lg"
      }`}
      style={{ willChange: "transform" }}
      aria-label={`${name} technology`}
      tabIndex={0}
    >
      <Icon className="h-8 w-8 text-foreground/80 md:h-10 md:w-10" />
      <span className="text-sm font-semibold text-foreground/90 md:text-[15px]">
        {name}
      </span>
    </motion.div>
  );
};

interface MarqueeRowProps {
  technologies: Technology[];
  direction: "left" | "right";
  speed?: number;
}

const MarqueeRow = ({ technologies, direction, speed = 45 }: MarqueeRowProps) => {
  const prefersReducedMotion = useReducedMotion();
  
  // Duplicate items for seamless loop
  const duplicatedTechs = useMemo(
    () => [...technologies, ...technologies, ...technologies],
    [technologies]
  );

  // Calculate animation duration based on content width and speed
  const itemWidth = 216; // 200px card + 16px gap
  const totalWidth = technologies.length * itemWidth;
  const duration = totalWidth / speed;

  if (prefersReducedMotion) {
    // Static grid fallback for reduced motion
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech) => (
          <TechCard
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            featured={tech.featured}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === "left" ? [-totalWidth, 0] : [0, -totalWidth],
        }}
        transition={{
          x: {
            duration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
        style={{ willChange: "transform" }}
        whileHover={{ animationPlayState: "paused" }}
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
      
      {/* Pause animation on hover */}
      <style>{`
        .group:hover > div {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

const TechStackMarquee = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Subtle radial background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-card/30 via-background to-background" />
      
      {/* Fade overlays for premium effect */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background via-background/80 to-transparent md:w-32" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background via-background/80 to-transparent md:w-32" />

      <div className="relative mx-auto max-w-[1100px] space-y-6">
        {/* First row - scrolls left to right */}
        <MarqueeRow technologies={row1Technologies} direction="left" speed={45} />

        {/* Second row - scrolls right to left */}
        <MarqueeRow technologies={row2Technologies} direction="right" speed={40} />
      </div>
    </section>
  );
};

export default TechStackMarquee;
