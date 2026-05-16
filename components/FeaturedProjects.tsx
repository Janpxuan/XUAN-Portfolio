"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { contentTable } from "@/data/content-table";
import { itemReveal, staggerContainer } from "@/lib/motion";
import { PdfCanvasPreview } from "./PdfCanvasPreview";
import { ProjectAccordionItem } from "./ProjectAccordionItem";
import { SectionHeading } from "./SectionHeading";

export function FeaturedProjects() {
  const { featuredProjects } = contentTable;
  const [activeId, setActiveId] = useState<string | null>(
    featuredProjects.items[0]?.id ?? null,
  );
  const [previewProjectId, setPreviewProjectId] = useState<string | null>(null);

  const previewProject =
    featuredProjects.items.find((project) => project.id === previewProjectId) ??
    null;

  useEffect(() => {
    if (!previewProject) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewProjectId(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [previewProject]);

  return (
    <>
      <section
        id="featured-projects"
        className="section-shell section-gap scroll-mt-24"
      >
        <motion.div
          variants={itemReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-5"
        >
          <SectionHeading
            title={featuredProjects.title}
            subtitle={featuredProjects.subtitle}
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 flex flex-col gap-5"
        >
          {featuredProjects.items.map((project) => (
            <ProjectAccordionItem
              key={project.id}
              project={project}
              isOpen={activeId === project.id}
              onToggle={() =>
                setActiveId((currentId) =>
                  currentId === project.id ? null : project.id,
                )
              }
              onViewProject={(selectedProject) =>
                setPreviewProjectId(selectedProject.id)
              }
            />
          ))}
        </motion.div>
      </section>

      <AnimatePresence>
        {previewProject ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-[100] bg-[#000000]"
            />
            <button
              type="button"
              aria-label="Close PDF preview"
              onClick={() => setPreviewProjectId(null)}
              className="fixed inset-0 z-[101]"
            />
            <div className="fixed inset-0 z-[102] flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.985 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto w-[calc(100%-2.5rem)] max-w-6xl sm:w-[calc(100%-3.5rem)] lg:w-[calc(100%-4rem)]"
                style={{ height: "85dvh" }}
              >
                <button
                  type="button"
                  aria-label="Close PDF preview"
                  onClick={() => setPreviewProjectId(null)}
                  className="pointer-events-auto absolute right-0 top-[-56px] grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/18 lg:left-[calc(100%+20px)] lg:right-auto lg:top-0"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M6 6L18 18" />
                    <path d="M18 6L6 18" />
                  </svg>
                </button>
                <div
                  className="pointer-events-auto h-full w-full overflow-hidden rounded-[28px] border border-white/12 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.36)]"
                  onContextMenu={(event) => event.preventDefault()}
                >
                  <PdfCanvasPreview src={previewProject.pdfSrc} />
                </div>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
