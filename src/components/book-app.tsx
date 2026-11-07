import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { chapterById, chapterIndex, chapters, type ChapterId } from "@/data/chapters";
import { edition } from "@/data/edition";
import { isZoneId, zoneById, zones } from "@/data/zones";
import { patchLibrary, useHydrateLibrary, useLibrary } from "@/state/library";
import { Blocks, chapterBlocks, MonthGrid } from "@/components/widgets";

export function BookApp() {
  const lib = useLibrary();
  useHydrateLibrary();
  const [menuOpen, setMenuOpen] = useState(false);
  const chapter = chapterById(lib.chapter);
  const index = chapterIndex(lib.chapter);
  const previous = chapters[index - 1]?.id ?? null;
  const next = chapters[index + 1]?.id ?? null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lib.chapter]);

  useEffect(() => {
    const current = chapterById(lib.chapter);
    document.title = current.id === "cover" ? "Volume 6: Celery" : `${current.title} · Volume 6: Celery`;
  }, [lib.chapter]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key === "ArrowRight" && next) {
        event.preventDefault();
        patchLibrary({ chapter: next });
      }
      if (event.key === "ArrowLeft" && previous) {
        event.preventDefault();
        patchLibrary({ chapter: previous });
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, previous]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function go(id: ChapterId) {
    patchLibrary({ chapter: id });
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-paper text-ink md:bg-desk">
      <div className="mx-auto min-h-screen md:grid md:max-w-6xl md:grid-cols-[15rem_minmax(0,1fr)] md:bg-paper">
        <aside className="sticky top-0 z-20 hidden h-screen flex-col border-r border-line bg-paper-2 md:flex">
          <div className="border-b border-line px-4 py-5">
            <button type="button" onClick={() => go("cover")} className="press text-left">
              <span className="kicker">The Education Revolution</span>
              <span className="mt-1 block font-display text-2xl tracking-tight text-ink">Volume 6: Celery</span>
            </button>
            <p className="mt-2 text-sm text-muted">{edition.author}</p>
          </div>
          <div className="px-4 py-3">
            <ZoneSelect />
          </div>
          <nav aria-label="Chapters" className="flex-1 overflow-y-auto px-3 pb-6">
            <ChapterList current={lib.chapter} onPick={go} />
          </nav>
        </aside>

        <div className="min-w-0">
          <div
            className="h-1 bg-paper-2"
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={chapters.length}
            aria-valuenow={index + 1}
            aria-label="Reading progress"
          >
            <div className="h-1 bg-sage" style={{ width: `${((index + 1) / chapters.length) * 100}%` }} />
          </div>

          <header className="sticky top-0 z-30 grid grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-2 border-b border-line bg-paper px-3 py-2 md:hidden">
            <button
              type="button"
              className="press grid h-11 w-11 place-items-center"
              aria-label="Open contents"
              onClick={() => setMenuOpen(true)}
            >
              <Menu aria-hidden="true" />
            </button>
            <p className="truncate text-center font-display text-lg text-ink">{chapter.label}</p>
            <ZoneSelect />
          </header>

          <main className="px-5 py-8 pb-28 md:px-10 md:py-12 md:pb-16">
            {lib.chapter === "cover" ? (
              <Cover onRead={() => go("contents")} onPlan={() => go("zones")} />
            ) : lib.chapter === "contents" ? (
              <Contents onPick={go} />
            ) : (
              <article>
                <header className="max-w-prose">
                  <p className="kicker">{chapter.kicker}</p>
                  <h1 id="chapter-title" tabIndex={-1} className="mt-2 font-display text-4xl tracking-tight text-ink">
                    {chapter.title}
                  </h1>
                  <p className="mt-3 text-lg text-ink">{chapter.dek}</p>
                </header>
                <div className="mt-8">
                  <Blocks blocks={chapterBlocks(lib.chapter)} />
                </div>
              </article>
            )}

            <div className="mt-12 hidden max-w-prose items-center justify-between gap-3 md:flex">
              <PagerButton id={previous} dir="prev" />
              <p className="text-sm tabular-nums text-muted">
                {index + 1} of {chapters.length}
              </p>
              <PagerButton id={next} dir="next" />
            </div>
            <p className="mt-4 hidden text-sm text-muted md:block">Arrow keys turn the page.</p>
          </main>
        </div>
      </div>

      <nav
        aria-label="Page turns"
        className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-t border-line bg-paper px-3 py-2 md:hidden"
      >
        <PagerButton id={previous} dir="prev" />
        <p className="text-sm tabular-nums text-muted">
          {index + 1} / {chapters.length}
        </p>
        <PagerButton id={next} dir="next" align="end" />
      </nav>

      {menuOpen ? (
        <div className="fixed inset-0 z-40 flex flex-col bg-paper md:hidden">
          <div className="flex items-center justify-between gap-2 border-b border-line px-3 py-2">
            <p className="font-display text-xl text-ink">Contents</p>
            <button
              type="button"
              className="press grid h-11 w-11 place-items-center"
              aria-label="Close contents"
              onClick={() => setMenuOpen(false)}
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Chapters" className="flex-1 overflow-y-auto px-3 py-3">
            <ChapterList current={lib.chapter} onPick={go} />
          </nav>
        </div>
      ) : null}
    </div>
  );
}

function ZoneSelect() {
  const { zone } = useLibrary();
  return (
    <label className="block">
      <span className="sr-only">USDA zone</span>
      <select
        value={zone}
        onChange={(event) => {
          if (isZoneId(event.target.value)) patchLibrary({ zone: event.target.value });
        }}
        className="h-11 rounded-sm border border-line bg-paper px-2 text-sm"
      >
        {zones.map((item) => (
          <option key={item.id} value={item.id}>
            Zone {item.id}
          </option>
        ))}
      </select>
    </label>
  );
}

function ChapterList({ current, onPick }: { current: ChapterId; onPick: (id: ChapterId) => void }) {
  return (
    <ol className="flex flex-col">
      {chapters.map((item, index) => {
        const on = item.id === current;
        return (
          <li key={item.id}>
            <button
              type="button"
              aria-current={on ? "page" : undefined}
              onClick={() => onPick(item.id)}
              className={`press flex min-h-11 w-full items-baseline gap-3 rounded-sm border-l-2 px-2 py-2 text-left ${
                on ? "border-sage bg-paper-2 text-ink" : "border-transparent text-ink"
              }`}
            >
              <span className="w-5 shrink-0 text-sm tabular-nums text-muted">{index + 1}</span>
              <span className="font-semibold">{item.label}</span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}

function PagerButton({
  id,
  dir,
  align = "start",
}: {
  id: ChapterId | null;
  dir: "prev" | "next";
  align?: "start" | "end";
}) {
  const label = dir === "prev" ? "Previous" : "Next";
  const Icon = dir === "prev" ? ChevronLeft : ChevronRight;
  if (!id) {
    return <span className={align === "end" ? "justify-self-end" : ""} />;
  }
  const title = chapterById(id).title;
  return (
    <button
      type="button"
      onClick={() => patchLibrary({ chapter: id })}
      className={`press inline-flex min-h-11 items-center gap-1 rounded-sm border border-line bg-paper px-3 text-sm font-semibold text-ink ${
        align === "end" ? "justify-self-end" : "justify-self-start"
      }`}
    >
      {dir === "prev" ? <Icon aria-hidden="true" className="size-4" /> : null}
      <span>{label}</span>
      <span className="sr-only">: {title}</span>
      {dir === "next" ? <Icon aria-hidden="true" className="size-4" /> : null}
    </button>
  );
}

function Cover({ onRead, onPlan }: { onRead: () => void; onPlan: () => void }) {
  const { zone } = useLibrary();
  const guide = zoneById(zone);
  return (
    <div className="max-w-3xl">
      <p className="kicker">The Education Revolution · Volume 6</p>
      <h1 className="mt-3 max-w-xl font-display text-4xl tracking-tight text-ink md:text-5xl">
        <span className="block">Volume 6: Celery</span>
      </h1>
      <p className="mt-3 text-lg text-ink">{edition.author}</p>
      <p className="mt-1 text-sm text-muted">© {edition.year}</p>
      <p className="mt-4 max-w-prose text-lg text-ink">
        How to grow celery from the first sowing through the stalk harvest, then keep a plant through winter and
        store the seed.
      </p>

      <section className="mt-8 rounded-xl bg-paper-2 p-4">
        <h2 className="font-display text-2xl text-ink">Your zone</h2>
        <p className="mt-2 text-sm text-ink">Pick a USDA zone. Planting and harvest dates follow you through the book.</p>
        <div className="mt-4 grid grid-cols-5 gap-2">
          {zones.map((item) => {
            const on = item.id === zone;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={on}
                onClick={() => patchLibrary({ zone: item.id })}
                className={`press h-11 rounded-sm text-sm font-semibold tabular-nums ${
                  on ? "bg-sage text-paper" : "border border-line bg-paper text-ink"
                }`}
              >
                {item.id}
              </button>
            );
          })}
        </div>
        <p className="mt-4 text-ink">{guide.strategy}</p>
        <p className="mt-2 text-sm text-ink">
          Plant: {guide.transplant}. Harvest: {guide.harvest}.
        </p>
        <div className="mt-4">
          <MonthGrid zone={guide} />
        </div>
      </section>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={onRead}
          className="press inline-flex min-h-11 items-center justify-center rounded-sm bg-sage px-4 font-semibold text-paper"
        >
          Read the book
        </button>
        <button
          type="button"
          onClick={onPlan}
          className="press inline-flex min-h-11 items-center justify-center rounded-sm border border-line bg-paper px-4 font-semibold text-ink"
        >
          Plan the dates
        </button>
      </div>
      <p className="mt-4 text-sm text-muted">Northern Hemisphere months. South of the equator, shift them by six.</p>
    </div>
  );
}

function Contents({ onPick }: { onPick: (id: ChapterId) => void }) {
  return (
    <article>
      <header className="max-w-prose">
        <p className="kicker">Contents</p>
        <h1 className="mt-2 font-display text-4xl tracking-tight text-ink">What is in this book</h1>
        <p className="mt-3 text-lg text-ink">
          The order is the order of the garden: know the plant, place it in your zone, build the bed, sow, tend,
          cut stalks, then take and store seed. Companions and troubles sit at the back.
        </p>
      </header>
      <ol className="mt-8 flex max-w-prose flex-col gap-2">
        {chapters
          .filter((item) => item.id !== "contents")
          .map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onPick(item.id)}
                className="press w-full rounded-xl border border-line p-4 text-left"
              >
                <span className="kicker">{item.kicker}</span>
                <span className="mt-1 block font-display text-xl text-ink">{item.title}</span>
                <span className="mt-1 block text-sm text-muted">{item.dek}</span>
              </button>
            </li>
          ))}
      </ol>
    </article>
  );
}
