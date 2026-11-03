export const varieties = [
  {
    id: "tango",
    name: "Tango",
    days: 85,
    kind: "stalk",
    heat: "Some heat tolerance",
    blanch: "Leave it green. Blanching is optional and usually skipped.",
    note: "The default home-garden stalk. Upright, slower to string, and relatively bolt-resistant.",
  },
  {
    id: "utah",
    name: "Tall Utah 52-70",
    days: 105,
    kind: "stalk",
    heat: "Wants a long cool spell",
    blanch: "Eaten green. Blanch only if you want a pale heart.",
    note: "Classic tall Pascal type with a strong celery flavor. Rich soil and steady water, or it is stringy.",
  },
  {
    id: "conquistador",
    name: "Conquistador",
    days: 80,
    kind: "stalk",
    heat: "The most forgiving of heat",
    blanch: "Green, and left unblanched.",
    note: "Earlier and stockier. Choose it when the cool window is short or the zone runs warm.",
  },
  {
    id: "golden",
    name: "Golden Self-Blanching",
    days: 95,
    kind: "stalk",
    heat: "Cool weather",
    blanch: "Set plants about 6 inches apart so they shade one another. Do not hill soil into the crown.",
    note: "Milder and paler. Close spacing is the blanching method.",
  },
  {
    id: "red",
    name: "Giant Red",
    days: 100,
    kind: "stalk",
    heat: "Cool weather",
    blanch: "Leave it unblanched if you want the color. Cooking fades the red.",
    note: "Red stalks and green leaves. Same culture as green celery, with a slightly deeper flavor.",
  },
  {
    id: "leaf",
    name: "Leaf celery",
    days: 55,
    kind: "leaf",
    heat: "Best choice for hot zones",
    blanch: "Never blanched. You cut leaves and thin petioles, not a fat head.",
    note: "Also called cutting celery or smallage. Faster, stronger, and the practical crop in zones 10 and 11. Same species, so it crosses with stalk celery.",
  },
] as const;

export type Variety = (typeof varieties)[number];
export type VarietyId = Variety["id"];

export function isVarietyId(value: unknown): value is VarietyId {
  return varieties.some((variety) => variety.id === value);
}

export function varietyById(id: VarietyId): Variety {
  const found = varieties.find((variety) => variety.id === id);
  if (!found) throw new Error(`Unknown variety ${id}`);
  return found;
}

export const companions = [
  {
    id: "leek",
    name: "Leek",
    role: "help",
    why: "Same long cool season, same need for water, and an upright leaf that does not sprawl into the crown. Allium scent is a traditional deterrent for some flying pests. Treat that as a bonus, not a guarantee.",
    how: "Alternate leeks and celery in the row, or run a leek row about 8 inches from the celery.",
  },
  {
    id: "onion",
    name: "Onion",
    role: "help",
    why: "Onions take little space, share the season, and are the classic allium partner in an intensive bed.",
    how: "Plant a row along the south edge so the celery does not shade them out as it rises.",
  },
  {
    id: "garlic",
    name: "Garlic",
    role: "help",
    why: "Garlic is in the ground over winter and finished by early summer. That fits a fall celery plan in warm zones and a spring plan in cold ones, and it is not competing when celery is sizing.",
    how: "Keep it on the bed edge. Do not pack it so tightly that you cannot water the celery.",
  },
  {
    id: "bean",
    name: "Bush bean",
    role: "help",
    why: "Beans fix nitrogen. Celery spends it. Bush beans can finish before a fall celery crop needs the room, or sit on the north side of a spring crop.",
    how: "North edge only. Pole beans are the wrong bean here. A trellis will shade the bed.",
  },
  {
    id: "lettuce",
    name: "Lettuce",
    role: "help",
    why: "The best use of bare soil while celery is still small. Same cool weather, same water.",
    how: "Tuck leaf lettuce between transplants and pull it within a month, before the celery foliage closes.",
  },
  {
    id: "spinach",
    name: "Spinach",
    role: "help",
    why: "Same idea as lettuce, and it is gone before heat, which is while spring celery still has time.",
    how: "Sow it the day you transplant the celery. Cut the spinach young.",
  },
  {
    id: "kale",
    name: "Kale",
    role: "help",
    why: "A cool-season brassica that can stand on the north side as a windbreak. Both crops are heavy feeders, so this only works in a rich bed.",
    how: "One row on the north edge, at least 18 inches from the nearest celery. Feed the bed as if both crops were greedy.",
  },
  {
    id: "cabbage",
    name: "Cabbage and cauliflower",
    role: "help",
    why: "They share the season. The risk is competition, not some hidden clash. A hungry cabbage beside a hungry celery in poor soil makes two small crops.",
    how: "Give each a full spacing and enough compost for both, or grow them in neighboring beds rather than the same square.",
  },
  {
    id: "chive",
    name: "Chives",
    role: "rim",
    why: "A permanent allium on the corner is useful. A mature clump will also steal water if it sits against the crowns.",
    how: "One clump at the corner of the bed, not a ribbon through the row.",
  },
  {
    id: "marigold",
    name: "French marigold",
    role: "rim",
    why: "Short French marigolds, Tagetes patula, suppress some soil nematodes over a season. They will not repair a bad rotation by themselves.",
    how: "A few plants at the corners. Do not ring the celery so tightly that the flowers take the water.",
  },
  {
    id: "alyssum",
    name: "Sweet alyssum",
    role: "rim",
    why: "Low flowers feed hoverflies and parasitic wasps that hunt aphids, and they cover bare soil along the path.",
    how: "Sow along the path, not under the celery, where the foliage stays wet and shelters slugs.",
  },
  {
    id: "nasturtium",
    name: "Nasturtium",
    role: "rim",
    why: "Aphids often hit nasturtium first. That only helps if the nasturtium is not tangled in the celery, and if you pull it once it is covered in aphids.",
    how: "A few plants at the end of the row, off the crowns. Check under the leaves. Slugs hide there.",
  },
  {
    id: "tomato",
    name: "Tomato",
    role: "rim",
    why: "Old lists pair them. The real overlap is weak. A hot tomato bed is a bad celery bed, and the seasons barely meet in a good celery climate.",
    how: "Only in a mild summer, and on the north side. If your summers are hot, skip it.",
  },
  {
    id: "carrot",
    name: "Carrot",
    role: "apart",
    why: "Carrots do not cross with celery. They do share leaf miners and carrot rust fly, and those insects will use both crops as one table.",
    how: "A different bed, not a different inch. Do not leave carrot debris and celery debris against next year's row.",
  },
  {
    id: "parsnip",
    name: "Parsnip",
    role: "apart",
    why: "Same pest bridge as carrots, and parsnip stays in the ground longer, so the bridge lasts longer.",
    how: "Keep the root bed away from the celery bed.",
  },
  {
    id: "parsley",
    name: "Parsley",
    role: "apart",
    why: "Parsley shares the leaf miners and often stays in the garden all year, which gives them a home between celery crops.",
    how: "Grow parsley by the door, not in this bed.",
  },
  {
    id: "cilantro",
    name: "Cilantro",
    role: "apart",
    why: "The flowers are good for beneficial insects. The foliage is still a relative that miners use. You want the flowers, not the shared larvae.",
    how: "Give cilantro its own patch, off the celery.",
  },
  {
    id: "dill",
    name: "Dill",
    role: "apart",
    why: "Dill flowers feed beneficial insects, and dill also hosts swallowtail caterpillars and leaf miners. It will not cross with celery seed. It is a different genus.",
    how: "A dill patch at a distance, where the flowers can work off this bed.",
  },
  {
    id: "fennel",
    name: "Fennel",
    role: "apart",
    why: "Fennel is a poor neighbor for most vegetables. It competes hard, and it extends the same pest bridge.",
    how: "Its own spot, away from the vegetable beds.",
  },
  {
    id: "corn",
    name: "Corn",
    role: "apart",
    why: "Corn shades the row and drinks hard at the same time celery is trying to size.",
    how: "Not on the south side of this bed, and not in it.",
  },
  {
    id: "potato",
    name: "Potato",
    role: "apart",
    why: "Hilling potatoes disturbs celery's shallow roots. Both crops are heavy feeders and want different spacing.",
    how: "Separate beds.",
  },
  {
    id: "celeriac",
    name: "Celeriac",
    role: "apart",
    why: "Same species. Insects will cross it with celery, and the seed will not grow true to either crop. In a year you are not saving seed, celeriac is a fine relative with the same soil and water needs.",
    how: "In a seed year, do not grow it, or bag umbels and hand-pollinate. In a kitchen year, it can share the bed.",
  },
] as const;

export type CompanionRole = (typeof companions)[number]["role"];

export const roleLabels: Record<CompanionRole, string> = {
  help: "In the bed",
  rim: "On the edge",
  apart: "Keep apart",
};

export const jarChecks = [
  {
    id: "parents",
    label: "Seed came from healthy plants that did not bolt in year one",
  },
  {
    id: "clean-plants",
    label: "Parent plants had no leaf spots or blight",
  },
  {
    id: "dry",
    label: "Seed snaps when bent. It does not flex.",
  },
  {
    id: "clean",
    label: "Chaff is winnowed out so the jar stays dry",
  },
  {
    id: "sealed",
    label: "Glass jar, tight lid, labeled with variety and year",
  },
  {
    id: "cool",
    label: "Stored dark and cool, refrigerated if the climate is warm",
  },
  {
    id: "open",
    label: "Jar warms to room temperature before it is opened",
  },
  {
    id: "test",
    label: "A germination test is written on the label after year three",
  },
] as const;

export const troubles = [
  {
    symptom: "Nothing sprouted",
    cause: "The seed dried, was buried, was too cold, or was too old.",
    fix: "Resow on the surface at 70–75°F and do not let the mix dry. If the jar is more than three years old, test it before you depend on it.",
  },
  {
    symptom: "Seedlings fell over at the soil line",
    cause: "Damping-off. The mix stayed soggy, air could not move, or the mix was not clean.",
    fix: "Start over in fresh sterile mix. Do not reuse that soil. Take the dome off as soon as they sprout, and water less.",
  },
  {
    symptom: "Seedlings are tall, pale, and floppy",
    cause: "Not enough light, often with too much heat.",
    fix: "Drop a grow light to a few inches above the leaves for 14–16 hours a day. Cool the room toward 60–65°F if you can.",
  },
  {
    symptom: "Plants bolted",
    cause:
      "Young plants felt a long spell under about 50°F, or they were pushed by drought and heat. They can look fine, then throw a flower stalk.",
    fix: "Eat what is still good. Do not save seed from these plants. Next time, harden off without cold nights, and do not transplant into a cold snap.",
  },
  {
    symptom: "Stalks are stringy or bitter",
    cause: "Heat, drought, old age, or a variety that strings easily.",
    fix: "Water, harvest younger, and in a hot climate move the crop to the fall window. Tango and Conquistador string less than older Pascal strains.",
  },
  {
    symptom: "Heart leaves turn black",
    cause:
      "Black heart. Calcium failed to move into the heart, almost always because moisture swung from dry to wet.",
    fix: "Mulch and keep the soil evenly moist. Do not pile on lime if the pH is already near 6.0–6.8.",
  },
  {
    symptom: "Pale tunnels in the leaves",
    cause: "Leaf miner.",
    fix: "Pinch off mined leaves and do not leave them in the bed. Cover the next planting with row fabric from transplant day. Keep parsley and carrots off this bed.",
  },
  {
    symptom: "Yellow spots that develop black pinpricks",
    cause: "Septoria, late blight. It splashes from soil and can arrive on seed.",
    fix: "Remove the worst leaves, water the soil rather than the foliage, and do not save seed from this planting. Rotate away for two or three years. Start next time from clean seed.",
  },
  {
    symptom: "Slugs take the seedlings",
    cause: "Night feeding on soft growth, worse under early mulch and evening water.",
    fix: "Water in the morning. Hold mulch until plants are sturdy. Set a board in the row, check it each morning, and remove the slugs.",
  },
  {
    symptom: "Stalks are hollow or cracked",
    cause: "Uneven water on a sizing head, or the head is simply old.",
    fix: "Keep moisture steady and cut on time. A hollow stalk is still edible if it has not dried out.",
  },
  {
    symptom: "Second-year plants never flowered",
    cause: "They did not get enough cold, or the crown was too weak to respond.",
    fix: "Give the next parents a real winter: in the ground under mulch where that is safe, or in damp sand at 32–40°F for at least six to eight weeks.",
  },
  {
    symptom: "Seed molded in the bag",
    cause: "Heads went into plastic, or into a closed bag while still green.",
    fix: "Use paper, shade, and airflow. Spread the heads and pick out anything fuzzy. If the lot smells musty, do not store it.",
  },
] as const;
