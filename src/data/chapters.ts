export const chapters = [
  {
    id: "cover",
    label: "Stem to Seed",
    kicker: "A field book",
    title: "Celery, Stem to Seed",
    dek: "By Jessica McIntosh. Celery from the first sowing to the seed jar.",
  },
  {
    id: "contents",
    label: "Contents",
    kicker: "Contents",
    title: "What is in this book",
    dek: "Garden order, from the plant in front of you to the seed you keep.",
  },
  {
    id: "plant",
    label: "The plant",
    kicker: "Chapter 1",
    title: "The plant",
    dek: "What celery is, what it demands, and which variety to grow.",
  },
  {
    id: "zones",
    label: "Zones",
    kicker: "Chapter 2",
    title: "Zones, sowing, and harvest",
    dek: "When to start seed, set plants out, cut stalks, and collect seed in zones 2 through 11.",
  },
  {
    id: "bed",
    label: "The bed",
    kicker: "Chapter 3",
    title: "Ground and site",
    dek: "Soil, sun, spacing, and the fertility this crop actually uses.",
  },
  {
    id: "sow",
    label: "Sowing",
    kicker: "Chapter 4",
    title: "Starting from seed",
    dek: "A slow, light-loving seed, and the transplant that must not feel a cold snap.",
  },
  {
    id: "season",
    label: "The season",
    kicker: "Chapter 5",
    title: "Water, feed, and blanch",
    dek: "How to carry plants from transplant to a stalk worth cutting.",
  },
  {
    id: "stalks",
    label: "Stalks",
    kicker: "Chapter 6",
    title: "Harvesting stalks",
    dek: "When a head is ready, how to cut it, and how to keep it.",
  },
  {
    id: "seed",
    label: "Taking seed",
    kicker: "Chapter 7",
    title: "Harvesting seed",
    dek: "Year two: cold, flowering, and cutting umbels before they shatter.",
  },
  {
    id: "jar",
    label: "The jar",
    kicker: "Chapter 8",
    title: "Storing seed",
    dek: "Dry, dark, and cool — and a test before you trust an old jar.",
  },
  {
    id: "companions",
    label: "Companions",
    kicker: "Chapter 9",
    title: "Plants that help celery",
    dek: "Neighbors worth planting, and the ones to keep off the bed.",
  },
  {
    id: "troubles",
    label: "Troubles",
    kicker: "Chapter 10",
    title: "When something goes wrong",
    dek: "Bolting, black heart, miners, blight, and seed that molded.",
  },
] as const;

export type ChapterId = (typeof chapters)[number]["id"];

export function isChapterId(value: unknown): value is ChapterId {
  return chapters.some((chapter) => chapter.id === value);
}

export function chapterById(id: ChapterId) {
  const found = chapters.find((chapter) => chapter.id === id);
  if (!found) throw new Error(`Unknown chapter ${id}`);
  return found;
}

export function chapterIndex(id: ChapterId) {
  return chapters.findIndex((chapter) => chapter.id === id);
}
