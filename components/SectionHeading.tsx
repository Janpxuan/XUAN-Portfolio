import { useId } from "react";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  subtitle: string;
  align?: "left" | "center";
  subtitleClassName?: string;
};

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  subtitleClassName,
}: SectionHeadingProps) {
  const gradientId = `section-heading-gradient-${useId().replace(/:/g, "")}`;
  const titleWords = title.trim().split(/\s+/).filter(Boolean);
  const titleLeading = titleWords.slice(0, -1).join(" ");
  const titleAccent = titleWords[titleWords.length - 1] ?? title.trim();
  const isCentered = align === "center";

  return (
    <div className={`relative overflow-hidden py-4 sm:py-6 ${isCentered ? "text-center" : ""}`}>
      <div
        className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 md:block ${
          isCentered
            ? "left-1/2 -translate-x-1/2 opacity-55"
            : "right-0 opacity-65"
        }`}
      >
        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: 24 }).map((_, index) => (
            <span
              key={index}
              className="h-2 w-2 rounded-full bg-[rgba(188,206,255,0.72)]"
            />
          ))}
        </div>
      </div>

      <div className={`relative flex min-h-[11.5rem] items-center sm:min-h-[14rem] ${isCentered ? "justify-center" : ""}`}>
        <div className={isCentered ? "mx-auto max-w-5xl" : "max-w-5xl"}>
          {kicker ? (
            <p className={`mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-[#7b8bac] ${isCentered ? "mx-auto w-fit" : ""}`}>
              {kicker}
            </p>
          ) : null}

          <div className={`flex items-center gap-5 ${isCentered ? "justify-center" : ""}`}>
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#b8cbff] sm:w-14" />
            <span className="relative block h-6 w-6 shrink-0" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                className="h-full w-full drop-shadow-[0_4px_10px_rgba(96,125,255,0.18)]"
                fill="none"
              >
                <defs>
                  <linearGradient id={gradientId} x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7B9CFF" />
                    <stop offset="0.55" stopColor="#4F7CFF" />
                    <stop offset="1" stopColor="#917FFF" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2.75C12.6 7.3 13.9 10.1 15.9 12C13.9 13.9 12.6 16.7 12 21.25C11.4 16.7 10.1 13.9 8.1 12C10.1 10.1 11.4 7.3 12 2.75Z"
                  fill={`url(#${gradientId})`}
                />
                <path
                  d="M21.25 12C16.7 12.6 13.9 13.9 12 15.9C10.1 13.9 7.3 12.6 2.75 12C7.3 11.4 10.1 10.1 12 8.1C13.9 10.1 16.7 11.4 21.25 12Z"
                  fill={`url(#${gradientId})`}
                />
              </svg>
            </span>
            <span className="h-px w-24 bg-gradient-to-r from-[#9fbfff] to-transparent sm:w-40" />
          </div>

          <h2
            className={`mt-8 max-w-[11ch] text-[clamp(3rem,7vw,6.15rem)] leading-[0.92] tracking-normal text-[#0f172a] ${isCentered ? "mx-auto" : ""}`}
            style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif' }}
          >
            {titleLeading ? `${titleLeading} ` : ""}
            <span className="bg-gradient-to-r from-[#5d7cff] via-[#6f8eff] to-[#9589ff] bg-clip-text text-transparent">
              {titleAccent}
            </span>
          </h2>

          <p
            className={`mt-7 max-w-2xl text-[20px] leading-[1.55] text-[#6a7b99] ${isCentered ? "mx-auto" : ""} ${subtitleClassName ?? ""}`}
          >
            {subtitle}
          </p>

          <span
            className={`mt-10 block h-[3px] w-28 rounded-full bg-gradient-to-r from-[#4f7cff] via-[#7088ff] to-[#8f76ff] sm:w-44 ${isCentered ? "mx-auto" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}
