import { motion } from "framer-motion";
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
      className={`relative flex h-[86px] w-[118px] flex-shrink-0 flex-col items-center justify-center gap-2 rounded-[14px]
      border bg-card transform-gpu transition-all duration-200
      hover:z-30 hover:-translate-y-1 hover:scale-[1.03]
      hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.25)]
      focus-visible:z-30 focus-visible:border-green-500 focus-visible:ring-2 focus-visible:ring-green-500/50 focus-visible:outline-none
      sm:h-[94px] sm:w-[132px] md:h-[104px] md:w-[150px] lg:h-[112px] lg:w-[168px]
      ${
        featured
          ? "border-primary/60 shadow-[0_0_30px_rgba(34,197,94,0.15)]"
          : "border-border/50"
      }`}
      tabIndex={0}
      aria-label={name}
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
  duration?: number;
}

const MarqueeRow = ({ technologies, direction, duration = 22 }: MarqueeRowProps) => {
  const items = useMemo(() => [...technologies, ...technologies], [technologies]);

  return (
    <div className="w-full overflow-hidden py-2">
      <motion.div
        // w-max é o “pulo do gato” pra garantir que o track tenha largura e o % funcione
        className="flex w-max flex-nowrap gap-3 px-2 sm:gap-4"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ willChange: "transform" }}
      >
        {items.map((tech, index) => (
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
    <section className="relative w-full overflow-hidden bg-card/40 py-5 md:py-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-card/40 to-card/40" />

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-card/40 to-transparent sm:w-16 md:w-24" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-card/40 to-transparent sm:w-16 md:w-24" />

      <div className="relative flex flex-col gap-2 sm:gap-3">
        <MarqueeRow technologies={row1Technologies} direction="left" duration={95} />
        <MarqueeRow technologies={row2Technologies} direction="right" duration={100} />
      </div>
    </section>
  );
};

export default TechStackMarquee;
