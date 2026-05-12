"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { contentTable } from "@/data/content-table";
import {
  enterTransition,
  hoverSpring,
  itemReveal,
  sectionReveal,
  staggerContainer,
} from "@/lib/motion";

export function Hero() {
  const { hero } = contentTable;
  const nameCharacters = hero.name.split("");
  const heroBackgroundVideoSrc =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4";
  const actionShadow =
    "hover:shadow-[0_24px_80px_rgba(79,124,255,0.1),0_18px_50px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]";

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-16 z-0 h-[28rem] overflow-hidden sm:h-[34rem] lg:h-[40rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.1] [transform:scaleY(-1)]"
        >
          <source src={heroBackgroundVideoSrc} type="video/mp4" />
        </video>
      </div>

      <section id="home" className="section-shell relative z-10 pt-28 sm:pt-32">
      <div className="grid items-center gap-10 lg:min-h-[36rem] lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mx-auto flex w-full max-w-xl flex-col items-center text-center lg:mx-0 lg:block lg:text-left"
        >
          <motion.div
            variants={itemReveal}
            className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/78 px-4 py-2 text-sm font-medium text-muted shadow-[0_10px_24px_rgba(79,124,255,0.08)] backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_16px_rgba(34,197,94,0.65)]" />
            {hero.status}
          </motion.div>

          <motion.h1
            variants={itemReveal}
            className="mt-8 text-5xl font-semibold leading-[1.2] tracking-normal text-ink sm:text-6xl lg:text-7xl"
          >
            <span className="inline-flex w-[3.6em] justify-between">
              {nameCharacters.map((character, index) => (
                <span key={`${character}-${index}`}>{character}</span>
              ))}
            </span>
          </motion.h1>
          <motion.p
            variants={itemReveal}
            className="mt-4 text-2xl font-medium sm:text-3xl"
          >
            <span
              className="inline-block min-w-[8.5ch] bg-gradient-to-r from-accent to-violet bg-clip-text pb-[0.08em] leading-[1.28] tracking-[0.08em] text-transparent sm:min-w-[9.2ch] sm:tracking-[0.12em]"
            >
              {hero.role}
            </span>
          </motion.p>
          <motion.p variants={itemReveal} className="mt-6 max-w-xl text-xl leading-9 text-muted">
            {hero.description}
          </motion.p>

          <motion.div variants={itemReveal} className="mt-8 hidden flex-col gap-3 sm:flex-row lg:flex">
            <motion.a
              href={hero.primaryAction.href}
              className={`group relative overflow-hidden rounded-full bg-[#6273ff] px-6 py-3 text-center text-sm font-semibold text-white shadow-glass transition-shadow duration-300 ${actionShadow}`}
              whileTap={{ scale: 0.98 }}
              transition={hoverSpring}
            >
              <span className="pointer-events-none absolute inset-0 bg-white/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">{hero.primaryAction.label}</span>
            </motion.a>
            <motion.a
              href={hero.secondaryAction.href}
              className={`rounded-full border border-white/80 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-ink shadow-sm backdrop-blur-xl transition-colors duration-300 hover:border-[#d7e2ff] hover:bg-[#eef4ff] hover:text-[#2f4eff] ${actionShadow}`}
              whileTap={{ scale: 0.98 }}
              transition={hoverSpring}
            >
              {hero.secondaryAction.label}
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={sectionReveal}
          initial="hidden"
          animate="show"
          transition={{ ...enterTransition, delay: 0.08 }}
          className="relative order-2 min-h-[420px] lg:order-none"
        >
          <div className="absolute inset-8 rounded-[44px] bg-gradient-to-br from-blue-200 via-violet-100 to-white blur-3xl" />
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.82, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-20 h-36 w-36 rounded-full bg-white/65 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card relative mx-auto w-full max-w-md rounded-[36px] p-6 lg:ml-auto lg:mr-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...enterTransition, delay: 0.18 }}
              className="rounded-[28px] border border-white/55 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-300" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{hero.visual.eyebrow}</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...enterTransition, delay: 0.26 }}
                className="mt-12 overflow-hidden rounded-[30px] border border-white/80 bg-white/65 shadow-[0_18px_48px_rgba(79,124,255,0.1)]"
              >
                <Image
                  src={hero.visual.image.src}
                  alt={hero.visual.image.alt}
                  width={900}
                  height={680}
                  className="h-[214px] w-full object-cover"
                  priority
                />
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="mt-10 grid grid-cols-3 gap-3"
              >
                {hero.visual.chips.map((item) => (
                  <motion.div
                    key={item}
                    variants={itemReveal}
                    className="rounded-2xl border border-white/70 bg-white/74 px-3 py-4 text-center text-sm font-semibold text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-stretch sm:justify-center lg:hidden">
        <motion.a
          href={hero.primaryAction.href}
          className={`group relative w-[140px] overflow-hidden rounded-full bg-[#6273ff] px-6 py-3 text-center text-sm font-semibold text-white shadow-glass transition-shadow duration-300 sm:w-auto ${actionShadow}`}
          whileTap={{ scale: 0.98 }}
          transition={hoverSpring}
        >
          <span className="pointer-events-none absolute inset-0 bg-white/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative">{hero.primaryAction.label}</span>
        </motion.a>
        <motion.a
          href={hero.secondaryAction.href}
          className={`w-[140px] rounded-full border border-white/80 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-ink shadow-sm backdrop-blur-xl transition-colors duration-300 hover:border-[#d7e2ff] hover:bg-[#eef4ff] hover:text-[#2f4eff] sm:w-auto ${actionShadow}`}
          whileTap={{ scale: 0.98 }}
          transition={hoverSpring}
        >
          {hero.secondaryAction.label}
        </motion.a>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 mt-20 w-full sm:mx-auto sm:max-w-md lg:mt-0 lg:max-w-none"
      >
        <div className="h-px w-full bg-gradient-to-r from-slate-300 via-slate-300/95 to-slate-300" />
        <div className="pt-5">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:justify-between">
            {hero.facts.map((item) => (
              <motion.div key={item.label} variants={itemReveal} className="min-w-0 lg:w-auto lg:flex-none">
                <p className="text-sm font-medium text-muted">{item.label}</p>
                <p className="mt-2 text-base font-semibold leading-7 text-ink lg:whitespace-nowrap">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
    </div>
  );
}
