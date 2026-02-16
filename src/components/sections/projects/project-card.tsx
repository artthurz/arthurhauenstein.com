"use client";

import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  code: string;
  image: string;
  link: string;
  index: number;
}

export function ProjectCard({ code, image, link, index }: ProjectCardProps) {
  const t = useTranslations(`root.projects.list.${code}`);

  const stack = t("stack").split(", ");

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={cn(
        "group block rounded-2xl overflow-hidden",
        "bg-base-100 ring-1 ring-slate-900/10 dark:ring-slate-100/10",
        "shadow-sm hover:shadow-lg transition-shadow"
      )}
    >
      <div className="relative aspect-video overflow-hidden bg-base-200">
        <Image
          src={image}
          alt={t("name")}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-primary text-lg">{t("name")}</h3>
          <ExternalLink className="w-4 h-4 text-violet-500 dark:text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-sm leading-relaxed">{t("description")}</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className={cn(
                "badge badge-sm",
                "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
                "border-0"
              )}
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-xs opacity-60">{t("year")}</p>
      </div>
    </motion.a>
  );
}
