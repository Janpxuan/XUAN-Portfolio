"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { contentTable } from "@/data/content-table";
import { hoverSpring, itemReveal, sectionReveal, staggerContainer } from "@/lib/motion";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const { experience } = contentTable;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<number, boolean>>({});
  const [collapsibleDescriptions, setCollapsibleDescriptions] = useState<Record<number, boolean>>({});
  const descriptionRefs = useRef<Array<HTMLParagraphElement | null>>([]);

  useEffect(() => {
    function updateCollapsibleDescriptions() {
      if (window.innerWidth >= 768) {
        setCollapsibleDescriptions({});
        return;
      }

      const nextState: Record<number, boolean> = {};

      descriptionRefs.current.forEach((node, index) => {
        if (!node) {
          return;
        }

        const lineHeight = Number.parseFloat(window.getComputedStyle(node).lineHeight);

        if (Number.isNaN(lineHeight)) {
          return;
        }

        nextState[index] = node.scrollHeight > lineHeight * 2 + 1;
      });

      setCollapsibleDescriptions(nextState);
    }

    updateCollapsibleDescriptions();
    window.addEventListener("resize", updateCollapsibleDescriptions);

    return () => {
      window.removeEventListener("resize", updateCollapsibleDescriptions);
    };
  }, [experience.items]);

  return (
    <section id="experience" className="section-shell section-gap scroll-mt-24">
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <SectionHeading title={experience.title} subtitle={experience.subtitle} />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 hidden lg:grid lg:grid-cols-4 lg:gap-5"
      >
        {experience.items.map((item, index) => (
          <motion.div key={item.number} variants={itemReveal} className="relative flex h-9 items-center justify-center">
            {index > 0 ? (
              <div className="absolute left-[-0.625rem] right-1/2 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-slate-200/50 to-slate-300/90" />
            ) : null}
            {index < experience.items.length - 1 ? (
              <div className="absolute left-1/2 right-[-0.625rem] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-slate-300/90 to-slate-200/50" />
            ) : null}
            <div
              className={`relative z-10 grid h-10 w-10 place-items-center rounded-full border text-xs font-semibold text-white shadow-[0_12px_24px_rgba(15,23,42,0.15)] transition-all duration-300 ${
                hoveredIndex === index
                  ? "border-transparent bg-gradient-to-br from-[#4f7cff] via-[#7088ff] to-[#8f76ff]"
                  : "border-white/70 bg-ink"
              }`}
            >
              {item.number}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {experience.items.map((item, index) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
            className="glass-card group relative overflow-hidden rounded-glass p-6"
            whileHover={{ y: -4 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex((currentIndex) => (currentIndex === index ? null : currentIndex))}
          >
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/85 to-transparent" />
            <div className="flex items-start justify-between gap-4">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={hoverSpring}
                className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/70 shadow-[0_16px_30px_rgba(79,124,255,0.18)]"
              >
                <Image
                  src={item.avatarSrc}
                  alt={`${item.company} avatar placeholder`}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </motion.div>
              <span className="text-sm font-semibold text-slate-300">{item.number}</span>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold leading-[1.28] text-ink md:min-h-[3.25rem]">{item.company}</h3>
              <p className="mt-2 text-sm font-semibold text-accent">{item.role}</p>
              <p className="mt-1 text-sm text-muted">{item.period}</p>
            </div>
            <p
              ref={(node) => {
                descriptionRefs.current[index] = node;
              }}
              className={`mt-5 leading-7 text-muted ${
                !expandedDescriptions[index]
                  ? "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] md:block"
                  : ""
              }`}
            >
              {item.description}
            </p>
            {collapsibleDescriptions[index] ? (
              <button
                type="button"
                onClick={() =>
                  setExpandedDescriptions((currentState) => ({
                    ...currentState,
                    [index]: !currentState[index],
                  }))
                }
                className="mx-auto mt-3 flex h-6 w-16 items-center justify-center rounded-full bg-[rgba(34,34,34,0.08)] text-[14px] font-medium leading-none text-ink transition hover:bg-ink hover:text-white md:hidden"
              >
                {expandedDescriptions[index] ? "收起" : "展开"}
              </button>
            ) : null}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
