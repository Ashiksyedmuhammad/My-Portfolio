"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) {
  const [expanded, setExpanded] = React.useState(false);
  const isExpandable = Boolean(description);

  const handleClick = (e: React.MouseEvent) => {
    if (isExpandable) {
      e.preventDefault();
      setExpanded((v) => !v);
    }
  };

  return (
    <Link
      href={href ?? "#"}
      onClick={handleClick}
      className="block"
    >
      <Card
        className={cn(
          "group flex gap-4 rounded-2xl border p-4",
          "transition-all duration-300",
          "hover:shadow-md"
        )}
      >
        {/* Logo */}
        <Avatar className="h-12 w-12 border bg-muted">
          <AvatarImage
            src={logoUrl}
            alt={altText}
            className="object-contain"
          />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>

        {/* Content */}
        <div className="min-w-0 flex-1">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="truncate text-sm font-semibold">
                  {title}
                </h3>

                {badges && (
                  <div className="flex gap-1">
                    {badges.map((badge, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-[10px]"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}

                {isExpandable && (
                  <ChevronRightIcon
                    className={cn(
                      "h-4 w-4 text-muted-foreground",
                      "transition-transform duration-300",
                      expanded && "rotate-90"
                    )}
                  />
                )}
              </div>

              {subtitle && (
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="shrink-0 text-xs tabular-nums text-muted-foreground">
              {period}
            </div>
          </div>

          {/* Expandable Description */}
          {description && (
            <motion.div
              initial={false}
              animate={{
                height: expanded ? "auto" : 0,
                opacity: expanded ? 1 : 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {description}
              </p>
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
}
