"use client";

import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

interface LogoProps {
  name: string;
  src: string;
  invertInDark?: boolean;
}

const Logo = ({ name, src, invertInDark }: LogoProps) => (
  <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 px-4 sm:px-6 lg:px-8">
    <div
      className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center transition-opacity hover:opacity-80 ${
        invertInDark ? "dark:invert" : ""
      }`}
    >
      <img
        src={src}
        alt={name}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
    <span className="hidden sm:block text-[10px] lg:text-xs text-black/50 dark:text-white/50 font-mono">
      {name}
    </span>
  </div>
);

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SIMPLE = "https://cdn.simpleicons.org";
const LANGCHAIN_ICON =
  "https://cdn.prod.website-files.com/65b8cd72835ceeacd4449a53/69a17e4a429d54e956e2a763_favicon.png";

const row1Skills: LogoProps[] = [
  { name: "Next.js", src: `${DEVICON}/nextjs/nextjs-original.svg`, invertInDark: true },
  { name: "Supabase", src: `${DEVICON}/supabase/supabase-original.svg` },
  { name: "TypeScript", src: `${DEVICON}/typescript/typescript-original.svg` },
  { name: "Python", src: `${DEVICON}/python/python-original.svg` },
  { name: "PostgreSQL", src: `${DEVICON}/postgresql/postgresql-original.svg` },
  { name: "C++", src: `${DEVICON}/cplusplus/cplusplus-original.svg` },
  { name: "Docker", src: `${DEVICON}/docker/docker-original.svg` },
  { name: "Ansible", src: `${DEVICON}/ansible/ansible-original.svg`, invertInDark: true },
  { name: "Chef", src: `${SIMPLE}/chef` },
  { name: "Kubernetes", src: `${DEVICON}/kubernetes/kubernetes-plain.svg` },
  { name: "MongoDB", src: `${DEVICON}/mongodb/mongodb-original.svg` },
  { name: "Vercel", src: `${DEVICON}/vercel/vercel-original.svg`, invertInDark: true },
  { name: "Render", src: `${SIMPLE}/render`, invertInDark: true },
];

const row2Skills: LogoProps[] = [
  { name: "Redis", src: `${DEVICON}/redis/redis-original.svg` },
  { name: "FastAPI", src: `${DEVICON}/fastapi/fastapi-original.svg` },
  { name: "Git", src: `${DEVICON}/git/git-original.svg` },
  { name: "Qdrant", src: `${SIMPLE}/qdrant` },
  { name: "LangChain", src: LANGCHAIN_ICON },
  { name: "NumPy", src: `${DEVICON}/numpy/numpy-original.svg` },
  { name: "Pandas", src: `${DEVICON}/pandas/pandas-original.svg`, invertInDark: true },
  { name: "TensorFlow", src: `${DEVICON}/tensorflow/tensorflow-original.svg` },
  { name: "Matplotlib", src: `${DEVICON}/matplotlib/matplotlib-original.svg` },
  { name: "Neo4j", src: `${DEVICON}/neo4j/neo4j-original.svg` },
];

export function LogoMarquee() {
  return (
    <section id="skills" className="relative py-8 sm:py-12 lg:py-16">
      <div className="relative z-10">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight">Skills</h2>
          <p className="text-muted-foreground mt-2 font-mono text-xs sm:text-sm">
            Technologies I work with
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-4">
          {DATA.skills.map((skill) => (
            <Badge key={skill} className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-32 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-32 z-10 bg-gradient-to-l from-background to-transparent" />

          <div className="flex mb-4 sm:mb-6 lg:mb-8">
            <div className="flex animate-scroll-left">
              {[...row1Skills, ...row1Skills].map((skill, index) => (
                <Logo
                  key={`row1-${index}`}
                  name={skill.name}
                  src={skill.src}
                  invertInDark={skill.invertInDark}
                />
              ))}
            </div>
          </div>

          <div className="flex">
            <div className="flex animate-scroll-right">
              {[...row2Skills, ...row2Skills].map((skill, index) => (
                <Logo
                  key={`row2-${index}`}
                  name={skill.name}
                  src={skill.src}
                  invertInDark={skill.invertInDark}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
