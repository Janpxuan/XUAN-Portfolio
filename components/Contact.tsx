"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { contentTable } from "@/data/content-table";
import { itemReveal, staggerContainer } from "@/lib/motion";
import { ContactCard } from "./ContactCard";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const { contact } = contentTable;
  const [activeToast, setActiveToast] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  async function handleCopy(label: string, value: string) {
    await navigator.clipboard.writeText(value);
    setActiveToast(label);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setActiveToast(null);
      timeoutRef.current = null;
    }, 1500);
  }

  return (
    <section id="contact" className="section-shell section-gap scroll-mt-24">
      <motion.div
        variants={itemReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative"
      >
        <SectionHeading
          kicker={contact.kicker}
          title={contact.title}
          subtitle={contact.description}
          subtitleClassName="max-w-5xl"
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {contact.methods.map((method) => (
          <ContactCard
            key={method.label}
            label={method.label}
            value={method.value}
            isToastVisible={activeToast === method.label}
            onCopy={() => handleCopy(method.label, method.value)}
          />
        ))}
      </motion.div>
    </section>
  );
}
