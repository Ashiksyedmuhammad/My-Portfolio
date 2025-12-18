import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Code2Icon } from "lucide-react";


interface ProjectLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface Props {
  title: string;
  description: string;
  dates: string;
  tags?: readonly string[];
  href?: string;
  image?: string;
  video?: string;
  links?: readonly ProjectLink[];
}

export function ProjectCard({
  title,
  description,
  tags=[],
  href,
  image,
  video,
  links,
}: Props) {
  return (
    <Card
      className={clsx(
        "group relative flex overflow-hidden rounded-2xl border",
        "transition-all duration-300 ease-out",
        "hover:shadow-xl hover:-translate-y-0.5"
      )}
    >
      {/* Media */}
      <Link
        href={href ?? "#"}
        className="relative h-36 w-48 shrink-0 overflow-hidden"
      >
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : image ? (
          <Image
            src={image}
            alt={title}
            width={192}
            height={144}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
<div className="flex h-full w-full items-center justify-center bg-muted">
  <Code2Icon className="h-6 w-6 text-muted-foreground" />
</div>
        )}

        {/* Status */}
        { (
          <Badge
            variant="secondary"
            className="absolute left-2 top-2 text-[10px]"
          >
          </Badge>
        )}
      </Link>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col p-4">
        {/* Header */}
        <div className="mb-1">
          <h3 className="truncate text-sm font-semibold leading-tight">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-xs text-muted-foreground">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.slice(0, 7).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-[10px]"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 4 && (
              <Badge
                variant="outline"
                className="text-[10px]"
              >
                +{tags.length - 4}
              </Badge>
            )}
          </div>
        )}

        {/* Actions */}
        {links && links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-3">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  className={clsx(
                    "flex items-center gap-1 text-[10px]",
                    "transition-colors hover:bg-primary hover:text-primary-foreground"
                  )}
                >
                  {link.icon}
                  {link.label}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
