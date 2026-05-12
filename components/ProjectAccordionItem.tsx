"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { FeaturedProject } from "@/data/content-table";
import {
  easeIn,
  hoverSpring,
  interactiveTransition,
  itemReveal,
} from "@/lib/motion";

type ProjectAccordionItemProps = {
  project: FeaturedProject;
  isOpen: boolean;
  onToggle: () => void;
  onViewProject: (project: FeaturedProject) => void;
};

export function ProjectAccordionItem({
  project,
  isOpen,
  onToggle,
  onViewProject,
}: ProjectAccordionItemProps) {
  const isLatinTitle = /^[\x00-\x7F\s-]+$/.test(project.title);

  return (
    <motion.article
      layout
      variants={itemReveal}
      className="glass-card overflow-hidden rounded-[30px]"
      transition={hoverSpring}
      whileHover={{ y: -4 }}
    >
      <motion.button
        type="button"
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-white/35 sm:p-6"
        aria-expanded={isOpen}
        whileTap={{ scale: 0.99 }}
        transition={hoverSpring}
      >
        <span className="min-w-0">
          <span
            className={`block truncate text-lg text-ink ${
              isLatinTitle ? "font-bold tracking-[0.01em]" : "font-semibold"
            }`}
          >
            {project.title}
          </span>
          <span className="mt-1 block text-sm text-muted">{project.type}</span>
        </span>
        <motion.span
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          transition={hoverSpring}
          className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[rgba(34,34,34,0.08)] text-ink transition group-hover:bg-ink group-hover:text-white group-focus-visible:bg-ink group-focus-visible:text-white"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 12h12" />
            {!isOpen ? <path d="M12 6v12" /> : null}
          </svg>
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0, y: 8 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: 4 }}
            transition={{
              height: interactiveTransition,
              opacity: interactiveTransition,
              y: isOpen ? interactiveTransition : { duration: 0.18, ease: easeIn },
            }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 border-t border-white/70 p-5 pt-0 sm:p-6 sm:pt-0 lg:grid-cols-[0.95fr_1.05fr]">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={interactiveTransition}
                className="relative aspect-video overflow-hidden rounded-[22px] bg-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
              >
                <Image
                  src={project.coverImage.src}
                  alt={project.coverImage.alt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
              <button
                type="button"
                onClick={() => onViewProject(project)}
                className="mx-auto inline-flex h-11 w-fit items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 lg:hidden"
              >
                View Project
              </button>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ ...interactiveTransition, delay: 0.04 }}
                className="hidden flex-col justify-center lg:flex"
              >
                <p className="text-lg leading-8 text-muted">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/70 bg-slate-50/95 px-4 py-2 text-sm font-medium text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => onViewProject(project)}
                  className="mt-6 inline-flex h-11 w-fit items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  View Project
                </button>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}
