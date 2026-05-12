"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { contentTable } from "@/data/content-table";
import { itemReveal } from "@/lib/motion";
import { SectionHeading } from "./SectionHeading";

export function OtherWorksGrid() {
  const { otherWorks } = contentTable;

  return (
    <section id="other-works" className="section-shell section-gap scroll-mt-24">
      <motion.div
        variants={itemReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-5"
      >
        <SectionHeading title={otherWorks.title} subtitle={otherWorks.subtitle} />
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {otherWorks.items.map((work, index) => (
          <motion.article
            key={work.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
            className="group glass-card relative aspect-[4/3] overflow-hidden rounded-[26px]"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${work.tone}`} />
            <div className="absolute inset-0 bg-white/30" />
            <div className="absolute inset-0 transition duration-500 group-hover:scale-[1.02]">
              <Image
                src={work.image.src}
                alt={work.image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
