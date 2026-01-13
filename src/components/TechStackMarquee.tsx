import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
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
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`flex h-[100px] w-[140px] flex-shrink-0 flex-col items-center justify-center gap-2 rounded-[16px] border transition-shadow duration-300 sm:h-[110px] sm:w-[160px] md:h-[120px] md:w-[180px] ${
        featured
          ? "border-primary/60 bg-card shadow-[0_0_30px_rgba(34,197,94,0.15)]"
          : "border-border/50 bg-card hover:border-border hover:shadow-lg"
      }`}
      aria-label={`${name} technology`}
      tabIndex={0}
    >
      <Icon className="h-7 w-7 text-foreground/80 sm:h-8 sm:w-8 md:h-9 md:w-9" />
      <span className="text-xs font-semibold text-foreground/90 sm:text-sm md:text-[14px]">
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

const MarqueeRow = ({ technologies, direction, speed = 30 }: MarqueeRowProps) => {
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  // Duplicate items for seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  useEffect(() => {
    if (trackRef.current) {
      // Get the width of the first set of items (half the track)
      const singleSetWidth = trackRef.current.scrollWidth / 2;
      setTrackWidth(singleSetWidth);
    }
  }, [technologies]);

  useEffect(() => {
    if (prefersReducedMotion || trackWidth === 0) return;

    const duration = trackWidth / speed;

    if (!isPaused) {
      controls.start({
        x: direction === "left" ? -trackWidth : 0,
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, direction, isPaused, prefersReducedMotion, speed, trackWidth]);

  // Set initial position
  useEffect(() => {
    if (direction === "right" && trackWidth > 0) {
      controls.set({ x: -trackWidth });
    } else {
      controls.set({ x: 0 });
    }
  }, [controls, direction, trackWidth]);

  // Start animation for right direction
  useEffect(() => {
    if (prefersReducedMotion || trackWidth === 0 || isPaused) return;

    const duration = trackWidth / speed;

    if (direction === "right") {
      controls.start({
        x: 0,
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }
  }, [controls, direction, isPaused, prefersReducedMotion, speed, trackWidth]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  if (prefersReducedMotion) {
    // Static row fallback for reduced motion - still only show one set, no wrap
    return (
      <div className="flex justify-center overflow-hidden">
        <div className="flex flex-nowrap gap-3 sm:gap-4">
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={trackRef}
        className="flex flex-nowrap gap-3 sm:gap-4"
        animate={controls}
        style={{ willChange: "transform" }}
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
    <section className="relative w-full overflow-hidden py-12 md:py-20">
      {/* Subtle radial background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-card/30 via-background to-background" />

      {/* Fade overlays for premium effect */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background via-background/80 to-transparent sm:w-20 md:w-32" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background via-background/80 to-transparent sm:w-20 md:w-32" />

      <div className="relative mx-auto max-w-[1100px] space-y-4 sm:space-y-5 md:space-y-6">
        {/* Row 1 - scrolls left */}
        <MarqueeRow technologies={row1Technologies} direction="left" speed={35} />

        {/* Row 2 - scrolls right */}
        <MarqueeRow technologies={row2Technologies} direction="right" speed={30} />
      </div>
    </section>
  );
};

export default TechStackMarquee;
