import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

/* ---------------------------------- */
/* Reusable Section Header             */
/* ---------------------------------- */
function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center space-y-2">
      {eyebrow && (
        <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground md:text-xl">{description}</p>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-20">
      {/* ---------------------------------- */}
      {/* HERO                               */}
      {/* ---------------------------------- */}
      <section id="hero">
        <div className="mx-auto max-w-2xl space-y-6">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl"
            yOffset={8}
            text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
          />
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-muted-foreground md:text-xl"
            text={DATA.description}
          />
        </div>
      </section>

      {/* ---------------------------------- */}
      {/* ABOUT                              */}
      {/* ---------------------------------- */}
      <section id="about" className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <SectionHeader title="About Me" />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-2xl mx-auto text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      {/* ---------------------------------- */}
      {/* SKILLS                             */}
      {/* ---------------------------------- */}
      <section id="skills" className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <SectionHeader title="Skills" />
        </BlurFade>

        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {DATA.skills.map((skill, index) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 6 + index * 0.04}>
              <Badge>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ---------------------------------- */}
      {/* PROJECTS                           */}
      {/* ---------------------------------- */}
      <section id="projects" className="space-y-12 py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <SectionHeader
            eyebrow="Projects"
            title="Things I’ve Built"
            description="A selection of projects I’m most proud of"
          />
        </BlurFade>

        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-4">
          {DATA.projects.map((project, index) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 8 + index * 0.05}
            >
              <ProjectCard {...project} />
            </BlurFade>
          ))}
        </div>
      </section>
      <BlurFade delay={BLUR_FADE_DELAY * 9.5}>
        <div className="flex justify-center">
          <Link
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            <Icons.github className="h-4 w-4" />
            View My  Projects
          </Link>
        </div>
      </BlurFade>
      {/* ---------------------------------- */}
      {/* ANALYTICS + GITHUB CTA              */}
      {/* ---------------------------------- */}
      <section id="stats" className="space-y-12 py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <SectionHeader
            eyebrow="Analytics"
            title="My Coding Journey"
            description="A snapshot of my activity across platforms"
          />
        </BlurFade>

        {/* GitHub CTA */}

        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-6 sm:grid-cols-2">
          {/* GitHub Stats */}
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="rounded-2xl border p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Icons.github className="h-5 w-5" />
                <h3 className="text-lg font-semibold">GitHub</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <Stat
                  label="Commits"
                  value={DATA.githubStats.stats.totalCommits}
                />
                <Stat label="Repos" value={DATA.githubStats.stats.totalRepos} />
                <Stat label="Stars" value={DATA.githubStats.stats.totalStars} />
                <Stat
                  label="Languages"
                  value={DATA.githubStats.stats.languages.length}
                />
              </div>
            </div>
          </BlurFade>

          {/* LeetCode Stats */}
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="rounded-2xl border p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Icons.leetcode className="h-5 w-5" />
                <h3 className="text-lg font-semibold">LeetCode</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <Stat
                  label="Solved"
                  value={DATA.leetcodeStats.stats.totalSolved}
                />
                <Stat
                  label="Easy"
                  value={DATA.leetcodeStats.stats.easySolved}
                />
                <Stat
                  label="Medium"
                  value={DATA.leetcodeStats.stats.mediumSolved}
                />
                <Stat
                  label="Hard"
                  value={DATA.leetcodeStats.stats.hardSolved}
                />
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ---------------------------------- */}
      {/* CONTACT                            */}
      {/* ---------------------------------- */}
      <section id="contact" className="py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <SectionHeader
            eyebrow="Contact"
            title="Get In Touch"
            description="Have a question or opportunity? Let’s talk."
          />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex justify-center pt-6">
            <Link
              href={DATA.contact.social.LinkedIn.url}
              className="text-primary hover:underline"
            >
              Message me on LinkedIn →
            </Link>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}

/* ---------------------------------- */
/* Small Stat Component                 */
/* ---------------------------------- */
function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-primary">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
