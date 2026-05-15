"use client";

import { useEffect, useRef, useState } from "react";

type PdfPageProxy = {
  getViewport: (options: { scale: number }) => { width: number; height: number };
  render: (options: {
    canvasContext: CanvasRenderingContext2D;
    viewport: { width: number; height: number };
  }) => { promise: Promise<void>; cancel: () => void };
};

type PdfDocumentProxy = {
  numPages: number;
  getPage: (pageNumber: number) => Promise<PdfPageProxy>;
};

type PdfJsModule = {
  GlobalWorkerOptions: {
    workerSrc: string;
  };
  getDocument: (src: string) => { promise: Promise<PdfDocumentProxy> };
};

type PdfCanvasPreviewProps = {
  src: string;
};

export function PdfCanvasPreview({ src }: PdfCanvasPreviewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRefs = useRef<Record<number, HTMLCanvasElement | null>>({});
  const pdfDocumentRef = useRef<PdfDocumentProxy | null>(null);
  const renderRunIdRef = useRef(0);
  const [pageCount, setPageCount] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState("PDF preview failed to load.");

  useEffect(() => {
    const node = containerRef.current;

    if (!node) {
      return;
    }

    const updateWidth = () => {
      setPageWidth(Math.max(node.clientWidth - 32, 280));
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadPdf() {
      try {
        setStatus("loading");
        setErrorMessage("PDF preview failed to load.");
        setPageCount(0);
        pdfDocumentRef.current = null;

        const runtimeImport = new Function(
          "src",
          "return import(/* webpackIgnore: true */ src);",
        ) as (src: string) => Promise<PdfJsModule>;
        const pdfjs = await runtimeImport("/vendor/pdfjs/pdf.min.mjs");

        pdfjs.GlobalWorkerOptions.workerSrc = "/vendor/pdfjs/pdf.worker.min.mjs";

        const pdfDocument = await pdfjs.getDocument(src).promise;

        if (cancelled) {
          return;
        }

        pdfDocumentRef.current = pdfDocument;
        setPageCount(pdfDocument.numPages);
      } catch (error) {
        console.error("PDF load failed", error);
        if (!cancelled) {
          setErrorMessage(
            error instanceof Error ? error.message : "PDF preview failed to load.",
          );
          setStatus("error");
        }
      }
    }

    void loadPdf();

    return () => {
      cancelled = true;
    };
  }, [src]);

  useEffect(() => {
    let cancelled = false;
    const renderRunId = renderRunIdRef.current + 1;
    renderRunIdRef.current = renderRunId;
    const renderTasks: Array<{ promise: Promise<void>; cancel: () => void }> = [];

    async function renderPages() {
      const pdfDocument = pdfDocumentRef.current;

      if (!pdfDocument || !pageCount || !pageWidth) {
        return;
      }

      try {
        setStatus("loading");

        for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
          if (cancelled) {
            return;
          }

          const page = await pdfDocument.getPage(pageNumber);
          const baseViewport = page.getViewport({ scale: 1 });
          const cssScale = pageWidth / baseViewport.width;
          const outputScale =
            typeof window !== "undefined"
              ? Math.min(window.devicePixelRatio || 1, 2.5)
              : 1;
          const cssViewport = page.getViewport({
            scale: cssScale,
          });
          const renderViewport = page.getViewport({
            scale: cssScale * outputScale,
          });
          const displayCanvas = canvasRefs.current[pageNumber];
          const displayContext = displayCanvas?.getContext("2d");

          if (!displayCanvas || !displayContext) {
            continue;
          }

          const renderCanvas = document.createElement("canvas");
          const renderContext = renderCanvas.getContext("2d");

          if (!renderContext) {
            continue;
          }

          renderCanvas.width = Math.floor(renderViewport.width);
          renderCanvas.height = Math.floor(renderViewport.height);

          const renderTask = page.render({
            canvasContext: renderContext,
            viewport: renderViewport,
          });
          renderTasks.push(renderTask);

          await renderTask.promise.catch((error: { name?: string }) => {
            if (error?.name === "RenderingCancelledException") {
              return;
            }

            throw error;
          });

          if (cancelled || renderRunIdRef.current !== renderRunId) {
            return;
          }

          displayCanvas.width = renderCanvas.width;
          displayCanvas.height = renderCanvas.height;
          displayCanvas.style.width = `${cssViewport.width}px`;
          displayCanvas.style.height = `${cssViewport.height}px`;
          displayContext.clearRect(0, 0, displayCanvas.width, displayCanvas.height);
          displayContext.drawImage(renderCanvas, 0, 0);
        }

        if (!cancelled && renderRunIdRef.current === renderRunId) {
          setStatus("ready");
        }
      } catch (error) {
        console.error("PDF render failed", error);
        if (!cancelled && renderRunIdRef.current === renderRunId) {
          setErrorMessage(
            error instanceof Error ? error.message : "PDF preview failed to load.",
          );
          setStatus("error");
        }
      }
    }

    void renderPages();

    return () => {
      cancelled = true;
      renderRunIdRef.current += 1;
      renderTasks.forEach((task) => task.cancel());
    };
  }, [pageCount, pageWidth, src]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-y-auto bg-white px-4 py-4 sm:px-5"
    >
      <div className="mx-auto flex w-full max-w-fit flex-col gap-4">
        {Array.from({ length: pageCount }, (_, index) => {
          const pageNumber = index + 1;

          return (
            <canvas
              key={`page-${pageNumber}`}
              ref={(node) => {
                canvasRefs.current[pageNumber] = node;
              }}
              className="rounded-[18px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
            />
          );
        })}
      </div>

      {status === "loading" ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/72">
          <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-500 shadow-sm">
            Loading PDF...
          </div>
        </div>
      ) : null}

      {status === "error" ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white px-6 text-center text-sm text-slate-500">
          {errorMessage}
        </div>
      ) : null}
    </div>
  );
}
