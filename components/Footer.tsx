import { contentTable } from "@/data/content-table";
import { BackToTop } from "./BackToTop";

export function Footer() {
  const { footer } = contentTable;

  return (
    <footer className="section-shell mt-[var(--section-gap)] pb-8">
      <div className="flex flex-col gap-4 border-t border-slate-200/80 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{footer.copyright}</p>
        <BackToTop label={footer.backToTopLabel} />
      </div>
    </footer>
  );
}
