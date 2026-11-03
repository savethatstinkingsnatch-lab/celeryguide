import { addDays, format, parseISO } from "date-fns";
import { useState } from "react";
import { chapterById, type ChapterId } from "@/data/chapters";
import {
  companions,
  isVarietyId,
  jarChecks,
  roleLabels,
  troubles,
  varieties,
  varietyById,
  type CompanionRole,
} from "@/data/garden";
import { bodies, type Block } from "@/data/prose";
import { isZoneId, MONTHS, zoneById, zones, type ZoneGuide } from "@/data/zones";
import { patchLibrary, toggleCheck, useLibrary } from "@/state/library";

function parseDay(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const date = parseISO(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function dayLabel(date: Date) {
  return format(date, "MMMM d");
}

export function Blocks({ blocks }: { blocks: readonly Block[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, index) => (
        <BlockView key={index} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  if (block.kind === "lead") {
    return <p className="max-w-prose text-lg leading-relaxed text-ink">{block.text}</p>;
  }
  if (block.kind === "p") {
    return <p className="max-w-prose text-ink">{block.text}</p>;
  }
  if (block.kind === "h2") {
    return <h2 className="max-w-prose pt-3 font-display text-2xl tracking-tight text-ink">{block.text}</h2>;
  }
  if (block.kind === "callout") {
    return (
      <aside className="max-w-prose rounded-xl border border-line bg-paper-2 p-4">
        <h2 className="font-display text-xl text-ink">{block.title}</h2>
        <p className="mt-2 text-ink">{block.text}</p>
      </aside>
    );
  }
  if (block.kind === "list") {
    return (
      <ul className="flex max-w-prose flex-col gap-3">
        {block.items.map((item) => (
          <li key={item} className="border-l-2 border-sage pl-3 text-ink">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if (block.kind === "specs") {
    return (
      <dl className="max-w-prose divide-y divide-line border-y border-line">
        {block.rows.map((row) => (
          <div key={row.label} className="grid gap-1 py-3 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-4">
            <dt className="text-sm font-semibold text-sage">{row.label}</dt>
            <dd className="text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>
    );
  }
  if (block.kind === "steps") {
    return (
      <ol className="flex max-w-prose flex-col gap-5">
        {block.items.map((item, index) => (
          <li key={item.title} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3">
            <span className="font-display text-xl tabular-nums text-sage">{index + 1}</span>
            <div>
              <p className="font-semibold text-ink">{item.title}</p>
              <p className="mt-1 text-ink">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    );
  }
  if (block.kind === "jump") {
    return <Jump to={block.to} label={block.label} />;
  }
  if (block.kind === "widget" && block.id === "varieties") return <VarietyPicker />;
  if (block.kind === "widget" && block.id === "zones") return <ZoneStudio />;
  if (block.kind === "widget" && block.id === "companions") return <CompanionStudio />;
  if (block.kind === "widget" && block.id === "checklist") return <JarChecklist />;
  return <TroubleList />;
}

function Jump({ to, label }: { to: ChapterId; label: string }) {
  const title = chapterById(to).title;
  return (
    <p>
      <button
        type="button"
        className="press inline-flex min-h-11 items-center text-sage underline decoration-line underline-offset-4"
        onClick={() => patchLibrary({ chapter: to })}
      >
        {label}
        <span className="sr-only">, {title}</span>
      </button>
    </p>
  );
}

function VarietyPicker() {
  const { variety } = useLibrary();
  return (
    <div className="grid max-w-prose gap-2">
      {varieties.map((item) => {
        const selected = item.id === variety;
        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={selected}
            onClick={() => patchLibrary({ variety: item.id })}
            className={`press rounded-xl border p-4 text-left ${
              selected ? "border-sage bg-paper-2" : "border-line bg-paper"
            }`}
          >
            <span className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-display text-xl text-ink">{item.name}</span>
              <span className="text-sm tabular-nums text-muted">{item.days} days from transplant</span>
            </span>
            <span className="mt-2 block text-sm text-ink">{item.note}</span>
            <span className="mt-2 block text-sm text-muted">{item.blanch}</span>
          </button>
        );
      })}
    </div>
  );
}

export function MonthGrid({ zone }: { zone: ZoneGuide }) {
  return (
    <figure>
      <figcaption className="text-sm font-semibold text-ink">A typical year in zone {zone.id}</figcaption>
      <div className="mt-3 grid grid-cols-6 gap-2">
        {MONTHS.map((name, index) => {
          const sow = zone.sowMonths.some((month) => month === index);
          const plant = zone.plantMonths.some((month) => month === index);
          const harvest = zone.harvestMonths.some((month) => month === index);
          const seed = zone.seedMonths.some((month) => month === index);
          const bits = [
            sow ? "sow" : "",
            plant ? "transplant" : "",
            harvest ? "harvest stalks" : "",
            seed ? "collect seed in year two" : "",
          ].filter(Boolean);
          const active = bits.length > 0;
          return (
            <div
              key={name}
              aria-label={active ? `${name}: ${bits.join(", ")}` : `${name}: quiet`}
              className={`rounded-sm px-1 py-2 text-center ${active ? "bg-paper" : ""}`}
            >
              <p className={`text-xs font-semibold ${active ? "text-ink" : "text-muted"}`}>{name}</p>
              <div className="mt-1 flex min-h-2 items-center justify-center gap-1" aria-hidden="true">
                {sow ? <span className="size-2 rounded-full bg-sage" /> : null}
                {plant ? <span className="size-2 rounded-full bg-ink" /> : null}
                {harvest ? <span className="size-2 rounded-full bg-paper-2 ring-2 ring-sage" /> : null}
                {seed ? <span className="size-2 rounded-sm bg-muted" /> : null}
              </div>
            </div>
          );
        })}
      </div>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
        <li className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-sage" aria-hidden="true" /> Sow
        </li>
        <li className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-ink" aria-hidden="true" /> Transplant
        </li>
        <li className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-paper-2 ring-2 ring-sage" aria-hidden="true" /> Harvest
        </li>
        <li className="flex items-center gap-2">
          <span className="size-2 rounded-sm bg-muted" aria-hidden="true" /> Seed, year two
        </li>
      </ul>
      <p className="mt-2 text-xs text-muted">Seed marks are the second year, after a winter of cold.</p>
    </figure>
  );
}

function ZoneStudio() {
  const lib = useLibrary();
  const selected = zoneById(lib.zone);
  const variety = varietyById(lib.variety);
  const last = parseDay(lib.lastFrost);
  const first = parseDay(lib.firstFrost);
  const datesInverted = Boolean(last && first && first.getTime() <= last.getTime());

  return (
    <div className="flex max-w-3xl flex-col gap-6">
      <section id="zone-detail" className="rounded-xl bg-paper-2 p-4">
        <p className="kicker">Zone {selected.id}</p>
        <h2 className="mt-2 font-display text-2xl tracking-tight text-ink">{selected.region}</h2>
        <p className="mt-3 text-ink">{selected.strategy}</p>
        <dl className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-sm bg-paper p-3">
            <dt className="text-sm font-semibold text-sage">Sow</dt>
            <dd className="mt-1 text-ink">{selected.sow}</dd>
          </div>
          <div className="rounded-sm bg-paper p-3">
            <dt className="text-sm font-semibold text-sage">Transplant</dt>
            <dd className="mt-1 text-ink">{selected.transplant}</dd>
          </div>
          <div className="rounded-sm bg-paper p-3">
            <dt className="text-sm font-semibold text-sage">Harvest stalks</dt>
            <dd className="mt-1 text-ink">{selected.harvest}</dd>
          </div>
        </dl>
        <div className="mt-3 rounded-sm bg-paper p-3">
          <p className="text-sm font-semibold text-sage">Seed harvest, year two</p>
          <p className="mt-1 text-ink">{selected.seed}</p>
        </div>
        <p className="mt-3 text-sm text-muted">
          Typical last spring frost: {selected.lastFrost}. Typical first fall frost: {selected.firstFrost}.
        </p>
        <div className="mt-4">
          <MonthGrid zone={selected} />
        </div>
        {(selected.id === "10" || selected.id === "11") && (
          <p className="mt-4 text-ink">
            Leaf celery is the more honest crop in this zone. It is ready in about 55 days from transplant and
            tolerates heat better than a Pascal head.
          </p>
        )}
      </section>

      <section className="rounded-xl border border-line p-4">
        <h2 className="font-display text-2xl text-ink">Your frost dates</h2>
        <p className="mt-2 max-w-prose text-ink">
          Optional. These override the typical windows above for {variety.name}, counted at {variety.days} days
          from transplant. Change the variety in The plant.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-ink">Last spring frost</span>
            <input
              type="date"
              value={lib.lastFrost}
              onChange={(event) => patchLibrary({ lastFrost: event.target.value })}
              className="mt-1 h-11 w-full rounded-sm border border-line bg-paper px-3"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-ink">First fall frost</span>
            <input
              type="date"
              value={lib.firstFrost}
              onChange={(event) => patchLibrary({ firstFrost: event.target.value })}
              className="mt-1 h-11 w-full rounded-sm border border-line bg-paper px-3"
            />
          </label>
        </div>
        <label className="mt-3 block max-w-xs">
          <span className="text-sm font-semibold text-ink">Variety</span>
          <select
            value={lib.variety}
            onChange={(event) => {
              if (isVarietyId(event.target.value)) patchLibrary({ variety: event.target.value });
            }}
            className="mt-1 h-11 w-full rounded-sm border border-line bg-paper px-3"
          >
            {varieties.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        {datesInverted ? (
          <p className="mt-4 text-ink">
            Use a spring frost and the autumn frost that follows it. Those two dates are in the wrong order.
          </p>
        ) : null}
        {last && !datesInverted ? <SpringPlan last={last} /> : null}
        {first && !datesInverted ? <FallPlan first={first} /> : null}
      </section>

      <section>
        <h2 className="font-display text-2xl text-ink">All zones</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {zones.map((zone) => {
            const on = zone.id === lib.zone;
            return (
              <li key={zone.id}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    if (isZoneId(zone.id)) patchLibrary({ zone: zone.id });
                    document.getElementById("zone-detail")?.scrollIntoView({ block: "start" });
                  }}
                  className={`press w-full rounded-xl border p-4 text-left ${
                    on ? "border-sage bg-paper-2" : "border-line bg-paper"
                  }`}
                >
                  <span className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-display text-xl text-ink">Zone {zone.id}</span>
                    <span className="text-sm text-muted">{zone.preferLabel}</span>
                  </span>
                  <span className="mt-2 block text-sm text-muted">{zone.region}</span>
                  <span className="mt-2 block text-sm text-ink">Plant: {zone.transplant}</span>
                  <span className="mt-1 block text-sm text-ink">Harvest: {zone.harvest}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

function SpringPlan({ last }: { last: Date }) {
  const { variety: varietyId, zone: zoneId } = useLibrary();
  const variety = varietyById(varietyId);
  const zone = zoneById(zoneId);
  const sowStart = addDays(last, -84);
  const sowEnd = addDays(last, -70);
  const plantStart = addDays(last, 7);
  const plantEnd = addDays(last, 18);
  const harvest = addDays(plantStart, variety.days);
  const hot = harvest.getMonth() >= 5 && harvest.getMonth() <= 7 && zone.prefer === "fall";

  return (
    <div className="mt-4 border-t border-line pt-4">
      <h3 className="font-display text-xl text-ink">Spring crop</h3>
      <dl className="mt-2 grid gap-2">
        <PlanRow label="Sow indoors" value={`${dayLabel(sowStart)} – ${dayLabel(sowEnd)}`} />
        <PlanRow label="Transplant" value={`${dayLabel(plantStart)} – ${dayLabel(plantEnd)}`} />
        <PlanRow label="Earliest full harvest" value={dayLabel(harvest)} />
      </dl>
      <p className="mt-2 text-sm text-muted">
        {variety.kind === "leaf"
          ? "You can snip leaves earlier than this. The date is a full cutting, not the first cut."
          : "Outer stalks are often ready before a full head. Cut them when they snap."}
      </p>
      {hot ? (
        <p className="mt-2 text-ink">
          That spring harvest lands in summer heat, which is when stalk celery turns stringy. In zone {zone.id},
          trust the fall dates.
        </p>
      ) : null}
    </div>
  );
}

function FallPlan({ first }: { first: Date }) {
  const { variety: varietyId, zone: zoneId } = useLibrary();
  const variety = varietyById(varietyId);
  const zone = zoneById(zoneId);
  const transplant = addDays(first, -(variety.days + 14));
  const sowStart = addDays(transplant, -84);
  const sowEnd = addDays(transplant, -70);
  const harvest = addDays(transplant, variety.days);

  return (
    <div className="mt-4 border-t border-line pt-4">
      <h3 className="font-display text-xl text-ink">Fall crop</h3>
      <dl className="mt-2 grid gap-2">
        <PlanRow label="Sow indoors" value={`${dayLabel(sowStart)} – ${dayLabel(sowEnd)}`} />
        <PlanRow label="Transplant" value={dayLabel(transplant)} />
        <PlanRow label="Harvest before frost" value={`${dayLabel(harvest)} – ${dayLabel(first)}`} />
      </dl>
      <p className="mt-2 text-sm text-muted">
        Transplant is set so the variety finishes about two weeks before your first frost.
      </p>
      {zone.prefer === "spring" ? (
        <p className="mt-2 text-ink">
          A fall crop is a tight race in zone {zone.id}. If that transplant lands in high summer and frost comes
          early, put your effort into the spring sowing.
        </p>
      ) : null}
    </div>
  );
}

function PlanRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[11rem_minmax(0,1fr)]">
      <dt className="text-sm font-semibold text-sage">{label}</dt>
      <dd className="text-ink tabular-nums">{value}</dd>
    </div>
  );
}

const roles: CompanionRole[] = ["help", "rim", "apart"];

function CompanionStudio() {
  const [role, setRole] = useState<CompanionRole | "all">("all");
  const shown = role === "all" ? companions : companions.filter((item) => item.role === role);

  return (
    <div className="flex max-w-3xl flex-col gap-5">
      <BedPlan />
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter companions">
        <FilterChip label="All" pressed={role === "all"} onClick={() => setRole("all")} />
        {roles.map((item) => (
          <FilterChip
            key={item}
            label={roleLabels[item]}
            pressed={role === item}
            onClick={() => setRole(item)}
          />
        ))}
      </div>
      <ul className="flex flex-col gap-3">
        {shown.map((item) => (
          <li key={item.id} className="rounded-xl border border-line p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl text-ink">{item.name}</h3>
              <p className="text-sm font-semibold text-sage">{roleLabels[item.role]}</p>
            </div>
            <p className="mt-2 text-ink">{item.why}</p>
            <p className="mt-2 text-ink">{item.how}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FilterChip({
  label,
  pressed,
  onClick,
}: {
  label: string;
  pressed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`press min-h-11 rounded-sm px-3 text-sm font-semibold ${
        pressed ? "bg-sage text-paper" : "border border-line bg-paper text-ink"
      }`}
    >
      {label}
    </button>
  );
}

function BedPlan() {
  return (
    <figure className="rounded-xl bg-paper-2 p-4">
      <figcaption className="font-display text-xl text-ink">A bed that fits</figcaption>
      <p className="mt-2 text-sm text-ink">North at the top. Taller plants stay behind the celery.</p>
      <div className="mt-4 grid gap-2">
        <BedRow label="North" cells={["Kale", "Bush beans"]} note="Windbreak and nitrogen, not shade." />
        <BedRow label="Center" cells={["Leek", "Celery", "Leek"]} note="Celery at 8 inches. Leeks in the gaps." emphasize />
        <BedRow label="South" cells={["Lettuce", "Onion", "Spinach"]} note="Pull the greens as celery fills in." />
        <BedRow label="Path" cells={["Alyssum", "Marigold"]} note="Flowers on the edge, not against the crowns." />
      </div>
      <p className="mt-4 text-sm text-ink">
        Keep carrots, parsley, dill, fennel, corn, and potatoes off this bed. Keep celeriac off it in a seed year.
      </p>
    </figure>
  );
}

function BedRow({
  label,
  cells,
  note,
  emphasize = false,
}: {
  label: string;
  cells: string[];
  note: string;
  emphasize?: boolean;
}) {
  return (
    <div>
      <p className="text-xs font-semibold text-muted">{label}</p>
      <div className={`mt-1 grid gap-2 ${cells.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
        {cells.map((cell, index) => {
          const heart = emphasize && cell === "Celery";
          return (
            <p
              key={`${label}-${index}`}
              className={`grid min-h-11 place-items-center rounded-sm px-2 text-center text-sm font-semibold ${
                heart ? "bg-sage text-paper" : "bg-paper text-ink"
              }`}
            >
              {cell}
            </p>
          );
        })}
      </div>
      <p className="mt-1 text-xs text-muted">{note}</p>
    </div>
  );
}

function JarChecklist() {
  const { checks } = useLibrary();
  const done = jarChecks.filter((item) => checks.includes(item.id)).length;
  return (
    <section className="max-w-prose rounded-xl border border-line p-4">
      <h2 className="font-display text-2xl text-ink">Before you seal the jar</h2>
      <p className="mt-2 text-sm tabular-nums text-muted">
        {done} of {jarChecks.length} checked. Saved on this device.
      </p>
      <ul className="mt-3">
        {jarChecks.map((item) => (
          <li key={item.id} className="border-t border-line">
            <label className="flex min-h-11 items-start gap-3 py-3">
              <input
                type="checkbox"
                checked={checks.includes(item.id)}
                onChange={() => toggleCheck(item.id)}
                className="mt-1 size-5 accent-sage"
              />
              <span className="text-ink">{item.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TroubleList() {
  return (
    <div className="flex max-w-prose flex-col gap-3">
      {troubles.map((item) => (
        <article key={item.symptom} className="rounded-xl border border-line p-4">
          <h3 className="font-display text-xl text-ink">{item.symptom}</h3>
          <p className="mt-2 text-ink">{item.cause}</p>
          <p className="mt-2 text-ink">{item.fix}</p>
        </article>
      ))}
    </div>
  );
}

export function chapterBlocks(id: keyof typeof bodies) {
  return bodies[id];
}
