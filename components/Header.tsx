"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { contentTable } from "@/data/content-table";
import { easeIn, enterTransition, hoverSpring, interactiveTransition } from "@/lib/motion";

export function Header() {
  const { header } = contentTable;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function handleCloseDrawer() {
    setIsDrawerOpen(false);
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={enterTransition}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/72 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-2xl"
    >
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <motion.a
          href="#home"
          className="flex items-center gap-3 font-semibold text-ink"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          transition={hoverSpring}
        >
          <Image
            src={header.logoImage.src}
            alt={header.logoImage.alt}
            width={86}
            height={16}
            className="block max-w-none"
            style={{ height: "16px", width: "86px" }}
            priority
          />
        </motion.a>

        <nav className="ml-auto hidden items-center gap-2 md:flex">
          {header.navigation.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[rgba(0,0,0,0.7)] transition hover:bg-[rgba(79,124,255,0.1)] hover:text-accent"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={hoverSpring}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <motion.button
          type="button"
          onClick={() => setIsDrawerOpen((current) => !current)}
          aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
          className="rounded-full bg-transparent p-3 text-ink backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[rgba(79,124,255,0.12)] hover:text-accent md:hidden"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={hoverSpring}
        >
          {isDrawerOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6L18 18" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7H20" />
              <path d="M4 12H20" />
              <path d="M4 17H20" />
            </svg>
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {isDrawerOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation drawer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: easeIn }}
              onClick={handleCloseDrawer}
              className="fixed inset-0 top-16 bg-white/20 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.985 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 16, scale: 0.99 }}
              transition={interactiveTransition}
              className="section-shell fixed inset-x-0 top-20 md:hidden"
            >
              <div className="w-full rounded-[28px] border border-slate-200/90 bg-white p-4 shadow-[0_24px_64px_rgba(15,23,42,0.12)]">
                <nav className="flex flex-col">
                  {header.navigation.map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={handleCloseDrawer}
                      className="rounded-2xl px-4 py-3 text-base font-medium text-ink transition hover:bg-slate-50"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={hoverSpring}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
