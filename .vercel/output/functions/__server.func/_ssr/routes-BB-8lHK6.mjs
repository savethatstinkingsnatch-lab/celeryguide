import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronLeft, i as ChevronRight, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as format, r as addDays, t as parseISO } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BB-8lHK6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var chapters = [
	{
		id: "cover",
		label: "Stem to Seed",
		kicker: "A field book",
		title: "Stem to Seed",
		dek: "Celery from the first sowing to the seed jar."
	},
	{
		id: "contents",
		label: "Contents",
		kicker: "Contents",
		title: "What is in this book",
		dek: "Garden order, from the plant in front of you to the seed you keep."
	},
	{
		id: "plant",
		label: "The plant",
		kicker: "Chapter 1",
		title: "The plant",
		dek: "What celery is, what it demands, and which variety to grow."
	},
	{
		id: "zones",
		label: "Zones",
		kicker: "Chapter 2",
		title: "Zones, sowing, and harvest",
		dek: "When to start seed, set plants out, cut stalks, and collect seed in zones 2 through 11."
	},
	{
		id: "bed",
		label: "The bed",
		kicker: "Chapter 3",
		title: "Ground and site",
		dek: "Soil, sun, spacing, and the fertility this crop actually uses."
	},
	{
		id: "sow",
		label: "Sowing",
		kicker: "Chapter 4",
		title: "Starting from seed",
		dek: "A slow, light-loving seed, and the transplant that must not feel a cold snap."
	},
	{
		id: "season",
		label: "The season",
		kicker: "Chapter 5",
		title: "Water, feed, and blanch",
		dek: "How to carry plants from transplant to a stalk worth cutting."
	},
	{
		id: "stalks",
		label: "Stalks",
		kicker: "Chapter 6",
		title: "Harvesting stalks",
		dek: "When a head is ready, how to cut it, and how to keep it."
	},
	{
		id: "seed",
		label: "Taking seed",
		kicker: "Chapter 7",
		title: "Harvesting seed",
		dek: "Year two: cold, flowering, and cutting umbels before they shatter."
	},
	{
		id: "jar",
		label: "The jar",
		kicker: "Chapter 8",
		title: "Storing seed",
		dek: "Dry, dark, and cool — and a test before you trust an old jar."
	},
	{
		id: "companions",
		label: "Companions",
		kicker: "Chapter 9",
		title: "Plants that help celery",
		dek: "Neighbors worth planting, and the ones to keep off the bed."
	},
	{
		id: "troubles",
		label: "Troubles",
		kicker: "Chapter 10",
		title: "When something goes wrong",
		dek: "Bolting, black heart, miners, blight, and seed that molded."
	}
];
function isChapterId(value) {
	return chapters.some((chapter) => chapter.id === value);
}
function chapterById(id) {
	const found = chapters.find((chapter) => chapter.id === id);
	if (!found) throw new Error(`Unknown chapter ${id}`);
	return found;
}
function chapterIndex(id) {
	return chapters.findIndex((chapter) => chapter.id === id);
}
var zones$1 = [
	{
		id: "2",
		region: "The coldest interior valleys and high country",
		prefer: "spring",
		preferLabel: "One summer crop",
		lastFrost: "Late May to mid-June",
		firstFrost: "Late August to mid-September",
		strategy: "You get one short summer crop. Start seed indoors while snow is still around, and do not plan a fall sowing. Seed parents will not survive winter outdoors.",
		sow: "Early to mid-March, indoors",
		transplant: "Early to mid-June, once nights stay above about 45°F",
		harvest: "Mid-August through September, before a hard freeze",
		seed: "Replant stored crowns in late May of year two. Flowers in July. Collect seed in August and September, in a race with frost. A hoop house over the seed plants matters in a cold year.",
		sowMonths: [2],
		plantMonths: [5],
		harvestMonths: [7, 8],
		seedMonths: [7, 8]
	},
	{
		id: "3",
		region: "Northern Minnesota, northern North Dakota, interior Maine",
		prefer: "spring",
		preferLabel: "One summer crop",
		lastFrost: "Mid to late May",
		firstFrost: "Early to mid-September",
		strategy: "Still one outdoor crop. A fall transplant rarely sizes before frost. Put the effort into an early indoor start and a June planting.",
		sow: "Late February to mid-March, indoors",
		transplant: "Late May to early June",
		harvest: "August to mid-September",
		seed: "Lift crowns in September and store them cold. Replant the next May. Collect seed in late August if the summer is kind. In a short year, take the central umbel as soon as it browns.",
		sowMonths: [1, 2],
		plantMonths: [4, 5],
		harvestMonths: [7, 8],
		seedMonths: [7, 8]
	},
	{
		id: "4",
		region: "Northern Wisconsin, the Montana valleys, and much of the northern tier",
		prefer: "spring",
		preferLabel: "Spring crop",
		lastFrost: "Mid to late May",
		firstFrost: "Mid to late September",
		strategy: "One reliable crop. A fall sowing only pays if you already have a cold frame and you will accept smaller stalks.",
		sow: "Late February to early March, indoors",
		transplant: "Late May",
		harvest: "August and September",
		seed: "Lift crowns in early October, store them at 32–40°F in damp sand, and replant in May. Seed ripens in September of year two.",
		sowMonths: [1, 2],
		plantMonths: [4],
		harvestMonths: [7, 8],
		seedMonths: [8]
	},
	{
		id: "5",
		region: "Iowa, northern Illinois, upstate New York, and similar",
		prefer: "both",
		preferLabel: "Spring, plus a fall crop",
		lastFrost: "Late April to mid-May",
		firstFrost: "Early to mid-October",
		strategy: "Spring is the dependable crop. A fall crop works when the June sowing actually happens. Gardeners who wait until July to think about it miss it.",
		sow: "Mid to late February for spring. Early June, indoors, for fall.",
		transplant: "Mid-May for spring. Mid-July for fall.",
		harvest: "Late July into early October from the spring planting. September and October from the fall planting, before a hard freeze.",
		seed: "In-ground survival is unreliable. Lift crowns after the first light frost, store them cold, and replant in April. Collect seed in August and September.",
		sowMonths: [1, 5],
		plantMonths: [4, 6],
		harvestMonths: [
			6,
			7,
			8,
			9
		],
		seedMonths: [7, 8]
	},
	{
		id: "6",
		region: "Ohio, Pennsylvania, Missouri, Kansas, and similar",
		prefer: "both",
		preferLabel: "Both crops; fall tastes better",
		lastFrost: "Mid to late April",
		firstFrost: "Mid to late October",
		strategy: "Grow both if you have the room. The fall head is milder. The spring head has to come out before August heat strings it.",
		sow: "Early to mid-February for spring. Late May to mid-June for fall.",
		transplant: "Late April to early May, watching cold snaps. July for the fall crop.",
		harvest: "July through September from spring plantings. September through November from fall plantings. Flavor peaks after a light frost.",
		seed: "A heavy mulch sometimes carries crowns through winter. Lifting is safer. Replant in April. Collect seed in August and September.",
		sowMonths: [
			1,
			4,
			5
		],
		plantMonths: [
			3,
			4,
			6
		],
		harvestMonths: [
			6,
			7,
			8,
			9,
			10
		],
		seedMonths: [7, 8]
	},
	{
		id: "7",
		region: "Tennessee, Virginia, Oklahoma, and the milder mid-Atlantic",
		prefer: "fall",
		preferLabel: "Fall crop preferred",
		lastFrost: "Early to mid-April",
		firstFrost: "Late October to mid-November",
		strategy: "Spring celery is a race you often lose in July. Plan the bed around the fall crop.",
		sow: "January to early February for a short spring crop. June for the fall crop.",
		transplant: "Early April for spring. Late July to early August for fall.",
		harvest: "June and July for spring, pulled before the heat. October through December for fall.",
		seed: "Many crowns overwinter under mulch if the bed drains. They flower in May and June. Collect seed in July and August. Lift a few spares if your winters are wet.",
		sowMonths: [
			0,
			1,
			5
		],
		plantMonths: [
			3,
			6,
			7
		],
		harvestMonths: [
			5,
			6,
			9,
			10,
			11
		],
		seedMonths: [6, 7]
	},
	{
		id: "8",
		region: "The Southeast coastal plain, central Texas, and mild Oregon valleys",
		prefer: "fall",
		preferLabel: "Fall and winter",
		lastFrost: "Mid to late March, earlier in mild pockets",
		firstFrost: "Mid to late November",
		strategy: "Zone 8 is not one summer. A mild coastal or valley garden can keep celery longer than central Texas with the same zone number. Slide these dates away from weeks that sit above 80°F.",
		sow: "December to January for a short spring crop. July for the main crop.",
		transplant: "March for spring. Late August to September for fall.",
		harvest: "May and June for the spring crop, then pull it. November through February for the main crop.",
		seed: "Leave parents in the ground. They flower in spring and set seed by early to mid-summer. Collect it before peak heat shatters the umbels.",
		sowMonths: [
			11,
			0,
			6
		],
		plantMonths: [
			2,
			7,
			8
		],
		harvestMonths: [
			4,
			5,
			10,
			11,
			0
		],
		seedMonths: [5, 6]
	},
	{
		id: "9",
		region: "Gulf Coast, southern Texas, inland southern California",
		prefer: "fall",
		preferLabel: "Winter crop",
		lastFrost: "Around mid-February, often light",
		firstFrost: "Around early December, some years almost none",
		strategy: "Do not try to grow a summer head. Celery here is a winter vegetable. Coast stretches the harvest. Inland heat ends it.",
		sow: "August and September for the main crop. January only if your heat arrives late.",
		transplant: "September and October. A February transplant is a short extra, not the main crop.",
		harvest: "December through March, and into April if the spring stays cool.",
		seed: "Plants overwinter easily. They flower in late spring. Collect seed in June, and dry it fast before humidity or rain.",
		sowMonths: [
			7,
			8,
			0
		],
		plantMonths: [
			8,
			9,
			1
		],
		harvestMonths: [
			11,
			0,
			1,
			2,
			3
		],
		seedMonths: [5]
	},
	{
		id: "10",
		region: "South Florida and the warmest pockets of coastal southern California",
		prefer: "fall",
		preferLabel: "Cool months only",
		lastFrost: "Rare",
		firstFrost: "Rare",
		strategy: "Quality collapses once days sit above about 75°F. If your cool season is short, grow leaf celery instead of a fat Pascal head.",
		sow: "Late August through September",
		transplant: "October",
		harvest: "December through March",
		seed: "Leave the best plants through spring. They bolt as days lengthen. Collect seed in late spring. Dry it out of the humidity, and keep the jar in the refrigerator.",
		sowMonths: [7, 8],
		plantMonths: [9],
		harvestMonths: [
			11,
			0,
			1,
			2
		],
		seedMonths: [4, 5]
	},
	{
		id: "11",
		region: "Frost-free tropics and the Florida Keys",
		prefer: "fall",
		preferLabel: "Only the coolest weeks",
		lastFrost: "None",
		firstFrost: "None",
		strategy: "Stalk celery is a poor fit for true tropical heat. Grow it only in the coolest months, or grow leaf celery and treat a fat head as a lucky year.",
		sow: "October",
		transplant: "November",
		harvest: "January through March, and only while the weather stays mild",
		seed: "This climate may never provide the cold that triggers flowering. Refrigerate lifted crowns for six to eight weeks, then replant in the coolest stretch. Without that cold, do not expect seed.",
		sowMonths: [9],
		plantMonths: [10],
		harvestMonths: [
			0,
			1,
			2
		],
		seedMonths: [3, 4]
	}
];
function isZoneId(value) {
	return zones$1.some((zone) => zone.id === value);
}
function zoneById(id) {
	const found = zones$1.find((zone) => zone.id === id);
	if (!found) throw new Error(`Unknown zone ${id}`);
	return found;
}
var MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
var varieties = [
	{
		id: "tango",
		name: "Tango",
		days: 85,
		kind: "stalk",
		heat: "Some heat tolerance",
		blanch: "Leave it green. Blanching is optional and usually skipped.",
		note: "The default home-garden stalk. Upright, slower to string, and relatively bolt-resistant."
	},
	{
		id: "utah",
		name: "Tall Utah 52-70",
		days: 105,
		kind: "stalk",
		heat: "Wants a long cool spell",
		blanch: "Eaten green. Blanch only if you want a pale heart.",
		note: "Classic tall Pascal type with a strong celery flavor. Rich soil and steady water, or it is stringy."
	},
	{
		id: "conquistador",
		name: "Conquistador",
		days: 80,
		kind: "stalk",
		heat: "The most forgiving of heat",
		blanch: "Green, and left unblanched.",
		note: "Earlier and stockier. Choose it when the cool window is short or the zone runs warm."
	},
	{
		id: "golden",
		name: "Golden Self-Blanching",
		days: 95,
		kind: "stalk",
		heat: "Cool weather",
		blanch: "Set plants about 6 inches apart so they shade one another. Do not hill soil into the crown.",
		note: "Milder and paler. Close spacing is the blanching method."
	},
	{
		id: "red",
		name: "Giant Red",
		days: 100,
		kind: "stalk",
		heat: "Cool weather",
		blanch: "Leave it unblanched if you want the color. Cooking fades the red.",
		note: "Red stalks and green leaves. Same culture as green celery, with a slightly deeper flavor."
	},
	{
		id: "leaf",
		name: "Leaf celery",
		days: 55,
		kind: "leaf",
		heat: "Best choice for hot zones",
		blanch: "Never blanched. You cut leaves and thin petioles, not a fat head.",
		note: "Also called cutting celery or smallage. Faster, stronger, and the practical crop in zones 10 and 11. Same species, so it crosses with stalk celery."
	}
];
function isVarietyId(value) {
	return varieties.some((variety) => variety.id === value);
}
function varietyById(id) {
	const found = varieties.find((variety) => variety.id === id);
	if (!found) throw new Error(`Unknown variety ${id}`);
	return found;
}
var companions$1 = [
	{
		id: "leek",
		name: "Leek",
		role: "help",
		why: "Same long cool season, same need for water, and an upright leaf that does not sprawl into the crown. Allium scent is a traditional deterrent for some flying pests. Treat that as a bonus, not a guarantee.",
		how: "Alternate leeks and celery in the row, or run a leek row about 8 inches from the celery."
	},
	{
		id: "onion",
		name: "Onion",
		role: "help",
		why: "Onions take little space, share the season, and are the classic allium partner in an intensive bed.",
		how: "Plant a row along the south edge so the celery does not shade them out as it rises."
	},
	{
		id: "garlic",
		name: "Garlic",
		role: "help",
		why: "Garlic is in the ground over winter and finished by early summer. That fits a fall celery plan in warm zones and a spring plan in cold ones, and it is not competing when celery is sizing.",
		how: "Keep it on the bed edge. Do not pack it so tightly that you cannot water the celery."
	},
	{
		id: "bean",
		name: "Bush bean",
		role: "help",
		why: "Beans fix nitrogen. Celery spends it. Bush beans can finish before a fall celery crop needs the room, or sit on the north side of a spring crop.",
		how: "North edge only. Pole beans are the wrong bean here. A trellis will shade the bed."
	},
	{
		id: "lettuce",
		name: "Lettuce",
		role: "help",
		why: "The best use of bare soil while celery is still small. Same cool weather, same water.",
		how: "Tuck leaf lettuce between transplants and pull it within a month, before the celery foliage closes."
	},
	{
		id: "spinach",
		name: "Spinach",
		role: "help",
		why: "Same idea as lettuce, and it is gone before heat, which is while spring celery still has time.",
		how: "Sow it the day you transplant the celery. Cut the spinach young."
	},
	{
		id: "kale",
		name: "Kale",
		role: "help",
		why: "A cool-season brassica that can stand on the north side as a windbreak. Both crops are heavy feeders, so this only works in a rich bed.",
		how: "One row on the north edge, at least 18 inches from the nearest celery. Feed the bed as if both crops were greedy."
	},
	{
		id: "cabbage",
		name: "Cabbage and cauliflower",
		role: "help",
		why: "They share the season. The risk is competition, not some hidden clash. A hungry cabbage beside a hungry celery in poor soil makes two small crops.",
		how: "Give each a full spacing and enough compost for both, or grow them in neighboring beds rather than the same square."
	},
	{
		id: "chive",
		name: "Chives",
		role: "rim",
		why: "A permanent allium on the corner is useful. A mature clump will also steal water if it sits against the crowns.",
		how: "One clump at the corner of the bed, not a ribbon through the row."
	},
	{
		id: "marigold",
		name: "French marigold",
		role: "rim",
		why: "Short French marigolds, Tagetes patula, suppress some soil nematodes over a season. They will not repair a bad rotation by themselves.",
		how: "A few plants at the corners. Do not ring the celery so tightly that the flowers take the water."
	},
	{
		id: "alyssum",
		name: "Sweet alyssum",
		role: "rim",
		why: "Low flowers feed hoverflies and parasitic wasps that hunt aphids, and they cover bare soil along the path.",
		how: "Sow along the path, not under the celery, where the foliage stays wet and shelters slugs."
	},
	{
		id: "nasturtium",
		name: "Nasturtium",
		role: "rim",
		why: "Aphids often hit nasturtium first. That only helps if the nasturtium is not tangled in the celery, and if you pull it once it is covered in aphids.",
		how: "A few plants at the end of the row, off the crowns. Check under the leaves. Slugs hide there."
	},
	{
		id: "tomato",
		name: "Tomato",
		role: "rim",
		why: "Old lists pair them. The real overlap is weak. A hot tomato bed is a bad celery bed, and the seasons barely meet in a good celery climate.",
		how: "Only in a mild summer, and on the north side. If your summers are hot, skip it."
	},
	{
		id: "carrot",
		name: "Carrot",
		role: "apart",
		why: "Carrots do not cross with celery. They do share leaf miners and carrot rust fly, and those insects will use both crops as one table.",
		how: "A different bed, not a different inch. Do not leave carrot debris and celery debris against next year's row."
	},
	{
		id: "parsnip",
		name: "Parsnip",
		role: "apart",
		why: "Same pest bridge as carrots, and parsnip stays in the ground longer, so the bridge lasts longer.",
		how: "Keep the root bed away from the celery bed."
	},
	{
		id: "parsley",
		name: "Parsley",
		role: "apart",
		why: "Parsley shares the leaf miners and often stays in the garden all year, which gives them a home between celery crops.",
		how: "Grow parsley by the door, not in this bed."
	},
	{
		id: "cilantro",
		name: "Cilantro",
		role: "apart",
		why: "The flowers are good for beneficial insects. The foliage is still a relative that miners use. You want the flowers, not the shared larvae.",
		how: "Give cilantro its own patch, off the celery."
	},
	{
		id: "dill",
		name: "Dill",
		role: "apart",
		why: "Dill flowers feed beneficial insects, and dill also hosts swallowtail caterpillars and leaf miners. It will not cross with celery seed. It is a different genus.",
		how: "A dill patch at a distance, where the flowers can work off this bed."
	},
	{
		id: "fennel",
		name: "Fennel",
		role: "apart",
		why: "Fennel is a poor neighbor for most vegetables. It competes hard, and it extends the same pest bridge.",
		how: "Its own spot, away from the vegetable beds."
	},
	{
		id: "corn",
		name: "Corn",
		role: "apart",
		why: "Corn shades the row and drinks hard at the same time celery is trying to size.",
		how: "Not on the south side of this bed, and not in it."
	},
	{
		id: "potato",
		name: "Potato",
		role: "apart",
		why: "Hilling potatoes disturbs celery's shallow roots. Both crops are heavy feeders and want different spacing.",
		how: "Separate beds."
	},
	{
		id: "celeriac",
		name: "Celeriac",
		role: "apart",
		why: "Same species. Insects will cross it with celery, and the seed will not grow true to either crop. In a year you are not saving seed, celeriac is a fine relative with the same soil and water needs.",
		how: "In a seed year, do not grow it, or bag umbels and hand-pollinate. In a kitchen year, it can share the bed."
	}
];
var roleLabels = {
	help: "In the bed",
	rim: "On the edge",
	apart: "Keep apart"
};
var jarChecks = [
	{
		id: "parents",
		label: "Seed came from healthy plants that did not bolt in year one"
	},
	{
		id: "clean-plants",
		label: "Parent plants had no leaf spots or blight"
	},
	{
		id: "dry",
		label: "Seed snaps when bent. It does not flex."
	},
	{
		id: "clean",
		label: "Chaff is winnowed out so the jar stays dry"
	},
	{
		id: "sealed",
		label: "Glass jar, tight lid, labeled with variety and year"
	},
	{
		id: "cool",
		label: "Stored dark and cool, refrigerated if the climate is warm"
	},
	{
		id: "open",
		label: "Jar warms to room temperature before it is opened"
	},
	{
		id: "test",
		label: "A germination test is written on the label after year three"
	}
];
var troubles$1 = [
	{
		symptom: "Nothing sprouted",
		cause: "The seed dried, was buried, was too cold, or was too old.",
		fix: "Resow on the surface at 70–75°F and do not let the mix dry. If the jar is more than three years old, test it before you depend on it."
	},
	{
		symptom: "Seedlings fell over at the soil line",
		cause: "Damping-off. The mix stayed soggy, air could not move, or the mix was not clean.",
		fix: "Start over in fresh sterile mix. Do not reuse that soil. Take the dome off as soon as they sprout, and water less."
	},
	{
		symptom: "Seedlings are tall, pale, and floppy",
		cause: "Not enough light, often with too much heat.",
		fix: "Drop a grow light to a few inches above the leaves for 14–16 hours a day. Cool the room toward 60–65°F if you can."
	},
	{
		symptom: "Plants bolted",
		cause: "Young plants felt a long spell under about 50°F, or they were pushed by drought and heat. They can look fine, then throw a flower stalk.",
		fix: "Eat what is still good. Do not save seed from these plants. Next time, harden off without cold nights, and do not transplant into a cold snap."
	},
	{
		symptom: "Stalks are stringy or bitter",
		cause: "Heat, drought, old age, or a variety that strings easily.",
		fix: "Water, harvest younger, and in a hot climate move the crop to the fall window. Tango and Conquistador string less than older Pascal strains."
	},
	{
		symptom: "Heart leaves turn black",
		cause: "Black heart. Calcium failed to move into the heart, almost always because moisture swung from dry to wet.",
		fix: "Mulch and keep the soil evenly moist. Do not pile on lime if the pH is already near 6.0–6.8."
	},
	{
		symptom: "Pale tunnels in the leaves",
		cause: "Leaf miner.",
		fix: "Pinch off mined leaves and do not leave them in the bed. Cover the next planting with row fabric from transplant day. Keep parsley and carrots off this bed."
	},
	{
		symptom: "Yellow spots that develop black pinpricks",
		cause: "Septoria, late blight. It splashes from soil and can arrive on seed.",
		fix: "Remove the worst leaves, water the soil rather than the foliage, and do not save seed from this planting. Rotate away for two or three years. Start next time from clean seed."
	},
	{
		symptom: "Slugs take the seedlings",
		cause: "Night feeding on soft growth, worse under early mulch and evening water.",
		fix: "Water in the morning. Hold mulch until plants are sturdy. Set a board in the row, check it each morning, and remove the slugs."
	},
	{
		symptom: "Stalks are hollow or cracked",
		cause: "Uneven water on a sizing head, or the head is simply old.",
		fix: "Keep moisture steady and cut on time. A hollow stalk is still edible if it has not dried out."
	},
	{
		symptom: "Second-year plants never flowered",
		cause: "They did not get enough cold, or the crown was too weak to respond.",
		fix: "Give the next parents a real winter: in the ground under mulch where that is safe, or in damp sand at 32–40°F for at least six to eight weeks."
	},
	{
		symptom: "Seed molded in the bag",
		cause: "Heads went into plastic, or into a closed bag while still green.",
		fix: "Use paper, shade, and airflow. Spread the heads and pick out anything fuzzy. If the lot smells musty, do not store it."
	}
];
var KEY = "stem-to-seed";
var defaults = {
	chapter: "cover",
	zone: "6",
	variety: "tango",
	lastFrost: "",
	firstFrost: "",
	checks: []
};
var snapshot = defaults;
var listeners = /* @__PURE__ */ new Set();
function emit() {
	listeners.forEach((listener) => listener());
}
function persist() {
	try {
		localStorage.setItem(KEY, JSON.stringify(snapshot));
	} catch {}
}
function dateOrEmpty(value) {
	return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : "";
}
function hydrateLibrary() {
	let next = {
		...defaults,
		checks: []
	};
	try {
		const raw = localStorage.getItem(KEY);
		if (raw) {
			const parsed = JSON.parse(raw);
			next = {
				chapter: isChapterId(parsed.chapter) ? parsed.chapter : defaults.chapter,
				zone: isZoneId(parsed.zone) ? parsed.zone : defaults.zone,
				variety: isVarietyId(parsed.variety) ? parsed.variety : defaults.variety,
				lastFrost: dateOrEmpty(parsed.lastFrost),
				firstFrost: dateOrEmpty(parsed.firstFrost),
				checks: Array.isArray(parsed.checks) ? parsed.checks.filter((item) => typeof item === "string") : []
			};
		}
	} catch {
		next = {
			...defaults,
			checks: []
		};
	}
	const hash = window.location.hash.replace(/^#/, "");
	if (isChapterId(hash)) next.chapter = hash;
	snapshot = next;
	emit();
}
function subscribe(listener) {
	listeners.add(listener);
	return () => listeners.delete(listener);
}
function useLibrary() {
	return (0, import_react.useSyncExternalStore)(subscribe, () => snapshot, () => defaults);
}
function useHydrateLibrary() {
	(0, import_react.useEffect)(() => {
		hydrateLibrary();
	}, []);
}
function patchLibrary(partial) {
	snapshot = {
		...snapshot,
		...partial
	};
	persist();
	if (partial.chapter) {
		const url = `${window.location.pathname}${window.location.search}#${partial.chapter}`;
		window.history.replaceState(null, "", url);
	}
	emit();
}
function toggleCheck(id) {
	const has = snapshot.checks.includes(id);
	snapshot = {
		...snapshot,
		checks: has ? snapshot.checks.filter((item) => item !== id) : [...snapshot.checks, id]
	};
	persist();
	emit();
}
var bodies = {
	plant: [
		{
			kind: "lead",
			text: "Celery is a cool-season biennial. You eat the leaf stalks in year one. Leave a strong plant through a winter of cold and it flowers in year two, which is when you take the seed."
		},
		{
			kind: "p",
			text: "The grocery-store crop is Apium graveolens var. dulce, in the carrot family. The flowers are flat sprays called umbels. What you eat are petioles, the leaf stalks. The true stem stays short until the plant bolts."
		},
		{
			kind: "h2",
			text: "Three crops, one species"
		},
		{
			kind: "p",
			text: "Stalk celery is the head of long petioles. Celeriac is grown for a knobby root and is not the subject of this book, except for one warning: it crosses freely with celery if you save seed. Leaf celery, also called cutting celery or smallage, makes thin stalks and a cloud of leaves. It is faster and more heat tolerant. In zones 10 and 11 it is often the crop worth growing. It is still the same species. Do not grow it beside a seed crop if you want stalk seed that comes true."
		},
		{
			kind: "h2",
			text: "What it demands"
		},
		{
			kind: "specs",
			rows: [
				{
					label: "Weather",
					value: "Best days are 60–70°F. Quality falls once days sit above 75–80°F."
				},
				{
					label: "Time",
					value: "Most stalk varieties need 80–110 days after transplant, plus 10–12 weeks indoors before that."
				},
				{
					label: "Water",
					value: "Steady moisture. A dry spell makes strings, bitterness, and black heart."
				},
				{
					label: "Soil",
					value: "Rich, moisture-retentive, and never soggy. pH about 6.0–6.8."
				},
				{
					label: "Cold",
					value: "A light frost sweetens a mature head. A long spell under 50°F on young plants can make them bolt."
				},
				{
					label: "Seed life",
					value: "A dry, cool jar keeps strong germination about three years, and sometimes usable seed to five."
				}
			]
		},
		{
			kind: "callout",
			title: "Do not save seed from a first-year bolter",
			text: "A plant that flowers in the season you wanted stalks has already shown you it bolts too easily. Eat it or compost it. Seed from that plant teaches the next generation the same habit."
		},
		{
			kind: "h2",
			text: "Choose a variety"
		},
		{
			kind: "p",
			text: "The choice follows you through the zone planner. Day counts below are from transplant to a full cutting, not from the day you sowed. Weather still moves the harvest."
		},
		{
			kind: "widget",
			id: "varieties"
		},
		{
			kind: "jump",
			to: "zones",
			label: "See sowing and harvest for your zone"
		}
	],
	zones: [
		{
			kind: "lead",
			text: "A USDA zone tells you how cold the winter gets. It does not tell you how hot July is. Celery lives or dies by the cool stretch on your calendar."
		},
		{
			kind: "p",
			text: "Use the windows below as the plan, then slide them to your real last frost and to the weeks before your days lock in above 80°F. Two gardens in zone 8 — a mild Oregon valley and central Texas — are not the same summer. If you know your frost dates, the planner under the zone list turns them into sowing, transplant, and harvest days for the variety you picked."
		},
		{
			kind: "p",
			text: "Months are a Northern Hemisphere year. South of the equator, shift every month by six."
		},
		{
			kind: "widget",
			id: "zones"
		}
	],
	bed: [
		{
			kind: "lead",
			text: "Celery is a heavy feeder with shallow roots. The bed is either right before you transplant, or the crop is ordinary."
		},
		{
			kind: "p",
			text: "Choose a place with at least six hours of sun. In hot-summer zones, afternoon shade is a gift. Avoid the low spot where water stands after rain. Crowns rot in a puddle. Also avoid ground that baked dry last year no matter how often you watered. You will be watering this crop every few days."
		},
		{
			kind: "h2",
			text: "Build the soil"
		},
		{
			kind: "p",
			text: "Work a two-inch layer of finished compost into the top eight inches. Celery wants organic matter more than it wants a clever fertilizer recipe. In clay, compost keeps water available without sealing the surface. In sand, compost is what stops the water from leaving."
		},
		{
			kind: "p",
			text: "Aim for a pH near 6.0 to 6.8. Outside that range, nutrients are harder for the plant to take up. A soil test beats a guessing bag of lime. Do not lime a bed that is already near neutral."
		},
		{
			kind: "h2",
			text: "Feed through the season"
		},
		{
			kind: "p",
			text: "Compost at planting carries the start. Side-dress every three to four weeks until stalks are thickening: a thin layer of compost, a watering with fish emulsion, or a light dose of a balanced vegetable fertilizer at the rate on the bag. Stop pushing nitrogen in the last month. Soft, rank growth is more bitter and more attractive to aphids."
		},
		{
			kind: "callout",
			title: "Black heart is a water problem first",
			text: "The inner leaves turn black when calcium fails to move into the heart. That usually happens because the soil swung from dry to wet, not because the bed has no calcium. Steady moisture prevents it better than a supplement."
		},
		{
			kind: "h2",
			text: "Spacing"
		},
		{
			kind: "p",
			text: "Set stalk celery 8 inches apart, in rows 18 to 24 inches apart. Golden self-blanching types can sit at 6 inches so the plants shade one another's hearts. Leaf celery can go at 4 to 6 inches, because you will cut it like a leafy herb."
		},
		{
			kind: "p",
			text: "A raised bed of 4 to 6 inches helps drainage. Once the soil has warmed and the plants are established, mulch with straw or shredded leaves, about two inches, pulled back an inch from each crown so the base can dry."
		},
		{
			kind: "jump",
			to: "companions",
			label: "Neighbors that fit this spacing"
		}
	],
	sow: [
		{
			kind: "lead",
			text: "Celery seed is small, slow, and unforgiving if it dries. Almost every failed sowing is a dry afternoon, buried seed, or a cold tray."
		},
		{
			kind: "specs",
			rows: [
				{
					label: "Germination",
					value: "14–21 days, sometimes longer"
				},
				{
					label: "Temperature",
					value: "70–75°F until sprout, then cooler"
				},
				{
					label: "Light",
					value: "Seed needs light. Do not bury it."
				},
				{
					label: "When",
					value: "10–12 weeks before you transplant"
				},
				{
					label: "Tray",
					value: "Soil blocks or cells about 2 inches deep"
				}
			]
		},
		{
			kind: "h2",
			text: "Before you sow"
		},
		{
			kind: "list",
			items: [
				"Use seed less than three years old, or test a pinch first.",
				"Use a fine, sterile seed mix. Garden soil in a tray damps off.",
				"A winter windowsill, by itself, is not enough light. Plan on a grow light."
			]
		},
		{
			kind: "h2",
			text: "The sowing"
		},
		{
			kind: "steps",
			items: [
				{
					title: "Soak, if you want",
					text: "A half-day in clean water can shave a few days off germination. Drain well. Do not soak longer than 24 hours."
				},
				{
					title: "Fill and water the mix",
					text: "Pre-moisten it so it is damp, not dripping. Fill the cells and firm gently."
				},
				{
					title: "Surface sow",
					text: "Sprinkle a few seeds on top and press them in so they touch the damp mix. Do not cover them. A dust of vermiculite is optional and must not hide the seed."
				},
				{
					title: "Hold the moisture",
					text: "A clear dome or a sheet of plastic helps until sprout. Vent it daily. Keep the tray at 70–75°F. A heat mat is useful until you see green, then turn it off."
				},
				{
					title: "The day they sprout",
					text: "Remove the cover. Move the light to 2–3 inches above the leaves, 14–16 hours a day. Drop the temperature toward 60–65°F if you can. Hot, dim seedlings become weak and floppy."
				},
				{
					title: "Water without burying them",
					text: "Mist, or water from below. A heavy stream buries seed that has not sprouted yet. The surface stays damp. One dry afternoon can kill a germinating seed."
				},
				{
					title: "Thin",
					text: "At two true leaves, snip the extras. Leave one plant per cell. Pulling disturbs the keeper."
				},
				{
					title: "Pot up if the cells fill",
					text: "Celery sits indoors a long time. If roots circle the plug before transplant time, move it to a slightly larger cell. A cramped plug stalls in the garden."
				}
			]
		},
		{
			kind: "h2",
			text: "Hardening off"
		},
		{
			kind: "p",
			text: "Give them 7 to 10 days outside before planting. Start in shade and shelter, then add sun and wind. Bring them in if a night will fall below 40°F. A week near 50°F or under, while they are still young, can vernalize them. They look fine, then bolt in early summer."
		},
		{
			kind: "callout",
			title: "The transplant",
			text: "Set plants out when they have four or five true leaves, the soil is at least 50°F and preferably near 60°F, and nights are staying above about 45°F. Plant at the same depth as the cell. Water them in. Shade them for two or three days if the sun is sudden."
		},
		{
			kind: "p",
			text: "In mild zones you can sow a nursery bed outdoors in the cool season. Surface-sow, keep it wet, and give light shade. It works when the weather cooperates. Indoor starts are more reliable."
		},
		{
			kind: "jump",
			to: "zones",
			label: "Match the sowing week to your zone"
		}
	],
	season: [
		{
			kind: "lead",
			text: "From transplant to harvest, the job is simple and easy to fail: never let the bed dry, and never let it drown."
		},
		{
			kind: "h2",
			text: "Water"
		},
		{
			kind: "p",
			text: "Aim for about an inch of water a week from rain and irrigation together, and more when days climb above 75°F. Two or three soakings beat a daily sprinkle. Shallow daily water builds shallow roots and a bitter stalk. Water in the morning so leaves are not wet all night."
		},
		{
			kind: "p",
			text: "If the top inch is dry, water. If it is cool and dark, wait. Mulch is what makes that schedule possible once summer arrives."
		},
		{
			kind: "h2",
			text: "Heat"
		},
		{
			kind: "p",
			text: "Celery does not tough out a heat wave. Growth stalls, strings form, and the flavor turns sharp. In zones 8 and warmer, finish the head before the hot lock-in, or start so the head sizes in the cool months. Thirty-percent shade cloth can save a week of quality on a spring crop. It will not turn July into October."
		},
		{
			kind: "h2",
			text: "Blanching"
		},
		{
			kind: "p",
			text: "Blanching pales the heart by blocking light for the last two or three weeks. The stalk is milder, and also weaker, and it rots if you wrap wet plants. Modern green varieties are meant to be eaten green. They taste like celery rather than like water."
		},
		{
			kind: "p",
			text: "If you blanch, wait until stalks are nearly full size and do it in dry weather. Slip a paper or cardboard collar around the lower stalks, or set boards along the row. Leave the top third of the plant in the light. Check inside the collar every few days. Hill soil only if you must, and do not bury the growing point. Self-blanching varieties only need close spacing."
		},
		{
			kind: "h2",
			text: "A cover against insects"
		},
		{
			kind: "p",
			text: "A light row cover from transplant onward keeps out leaf miners and a share of aphids, and it softens wind. Pin the edges. On a stalk crop you can leave it on all season. Take it off seed plants in year two, when the flowers need insects."
		},
		{
			kind: "jump",
			to: "stalks",
			label: "When the stalks are ready to cut"
		}
	],
	stalks: [
		{
			kind: "lead",
			text: "Cut celery when the stalks are worth eating, not when a packet says the variety is done. A head can be technically mature and already stringy if the week was hot and dry."
		},
		{
			kind: "h2",
			text: "The test"
		},
		{
			kind: "list",
			items: [
				"Outer stalks are at least 8 inches from the soil to the first leaf, and still crisp.",
				"A stalk snaps, rather than bending and peeling into strings.",
				"The heart is tight, not opening into a flower stalk.",
				"You are ahead of a hard freeze. Light frost is welcome. Much below about 28°F turns stalks to mush."
			]
		},
		{
			kind: "h2",
			text: "Two ways to cut"
		},
		{
			kind: "steps",
			items: [{
				title: "Outer stalks only",
				text: "Take a few outside petioles with a knife at the base and leave the crown. The plant keeps producing. This is the right method for leaf celery, and for a kitchen that wants a handful at a time."
			}, {
				title: "The whole head",
				text: "When the plant is full, cut at the soil line. Trim the root plate and any tired outer stalks in the garden, not in the sink a week later."
			}]
		},
		{
			kind: "p",
			text: "Cut in the morning, when the plants are full of water. Chill them quickly. Heat in the basket is how a good head goes limp."
		},
		{
			kind: "h2",
			text: "Keeping the harvest"
		},
		{
			kind: "specs",
			rows: [
				{
					label: "Temperature",
					value: "As close to 32°F as the refrigerator allows"
				},
				{
					label: "Humidity",
					value: "High. A loose bag or a crisper, not a sealed sweating box"
				},
				{
					label: "Time",
					value: "About two to four weeks"
				},
				{
					label: "Keep away from",
					value: "Apples, pears, and tomatoes. Celery yellows and turns bitter in their ethylene."
				},
				{
					label: "Washing",
					value: "If you wash, dry the stalks before you bag them. Wet stalks rot."
				}
			]
		},
		{
			kind: "p",
			text: "A light frost before the final cut sweetens the stalks. In cold zones, harvest before the hard freeze, or mulch deeply and cut as soon as you can get into the bed. Celery is not a storage root. The refrigerator is the cellar."
		},
		{
			kind: "callout",
			title: "Leave the best plant",
			text: "If you want seed, do not cut the crown of the plant you are saving. You may take a few outer stalks early, then leave it alone to grow a strong crown for winter."
		},
		{
			kind: "jump",
			to: "seed",
			label: "How to take seed the next year"
		}
	],
	seed: [
		{
			kind: "lead",
			text: "Seed is a second-year crop. Celery will not flower properly until it has felt a winter. Year one is for choosing parents and getting them through that cold alive."
		},
		{
			kind: "h2",
			text: "Choose parents in year one"
		},
		{
			kind: "p",
			text: "Mark six plants at a minimum. Twelve to twenty is better if you have the room. You are keeping a population, not a single stalk. Pick plants that sized up, stayed sweet, and did not bolt. Skip anything with leaf spots. Septoria blight rides on the seed."
		},
		{
			kind: "p",
			text: "Do not mix varieties in the same seed year. Celery crosses with other stalk celery, with celeriac, and with leaf celery. It does not cross with carrots, parsley, dill, or fennel — those are different genera — but that is only a fact about seed purity. They still share pests, which is why they stay off the celery bed."
		},
		{
			kind: "callout",
			title: "Isolation",
			text: "Home seed savers commonly keep Apium varieties about half a mile apart. In a street of gardens, that is hard. The practical version: grow only one celery or celeriac variety for seed that year. If another Apium is flowering nearby, bag a few umbels in fine mesh and move pollen between your own flowers with a soft brush every day or two while they are open. A single floret sheds pollen before it can receive it, so one plant brushing itself is a poor plan."
		},
		{
			kind: "h2",
			text: "Through the winter"
		},
		{
			kind: "p",
			text: "In zones 7 and warmer, many crowns survive in the ground under a thick mulch put on after the first light frosts. The crown must not sit in water. Wet cold kills more overwintered celery than dry cold. Keep a spare plan."
		},
		{
			kind: "p",
			text: "In zones 2 through 6, and anywhere winter is wet or deeply cold, dig the crowns after a light frost and before a hard freeze. Trim the tops to about two inches. Nest the roots in damp, not wet, sand or sawdust. Store them as you would carrots: 32–40°F and high humidity. A root cellar, a garage that does not freeze, or a spare refrigerator works. Check monthly and remove anything rotting. Replant in early spring, as soon as the soil can be worked, at the same depth they grew."
		},
		{
			kind: "p",
			text: "They need roughly six to eight weeks of cold before they will flower. In a frost-free zone 11, a refrigerator can supply it: lift the crowns, bag them, chill them for six to eight weeks, and replant in the coolest part of the year. Without some cold, they may never bolt, and you get no seed."
		},
		{
			kind: "h2",
			text: "Flowering"
		},
		{
			kind: "p",
			text: "In spring of year two the crown sends up a ridged stalk, often two to four feet, branching into compound umbels. The central umbel ripens first and usually carries the best seed. Side umbels follow for several weeks. Stake the plants if the site is windy. Keep watering. A drought now makes thin, weak seed."
		},
		{
			kind: "h2",
			text: "When the seed is ready"
		},
		{
			kind: "p",
			text: "Seed turns from green to tan, then gray-brown. Ripe seed loosens, and it will shatter onto the soil if you wait for every seed on the head. Cut early rather than late."
		},
		{
			kind: "steps",
			items: [
				{
					title: "Watch the central umbel",
					text: "When most seeds on it are brown, and a few fall when you tap the head, cut it."
				},
				{
					title: "Cut into a paper bag",
					text: "Take the umbel with a short piece of stalk. Do not use plastic. Plastic holds moisture and the seed molds."
				},
				{
					title: "Come back for the side umbels",
					text: "They ripen over the next few weeks. Take each one at the same brown, just-starting-to-drop stage."
				},
				{
					title: "Dry in shade",
					text: "Airflow, one to two weeks. Hang the bags or spread the heads on a screen. They are not done while the little stems are still leathery."
				},
				{
					title: "Thresh",
					text: "Rub the heads between your palms over a tub. Most of the seed falls free."
				},
				{
					title: "Winnow gently",
					text: "Pour the seed slowly in front of a fan on low so the chaff lifts and the seed drops. Celery seed is small. A hard breath sends the crop across the room."
				},
				{
					title: "Dry until it snaps",
					text: "Bend a seed. If it snaps, it is ready to seal. If it bends, it still holds moisture."
				}
			]
		},
		{
			kind: "p",
			text: "In hot zones this harvest often lands in early summer. Do not leave bags in a closed car or on a sunny porch. Heat plus moisture is how fresh seed dies in July."
		},
		{
			kind: "jump",
			to: "jar",
			label: "How to store the jar"
		}
	],
	jar: [
		{
			kind: "lead",
			text: "Celery seed is also a spice. It holds oils. Those oils go stale in a warm, humid kitchen, and the seed loses the ability to sprout long before it looks different."
		},
		{
			kind: "specs",
			rows: [
				{
					label: "Dry",
					value: "A seed snaps. It does not bend."
				},
				{
					label: "Container",
					value: "A small glass jar with a tight lid. Paper envelopes inside that jar are fine. Paper alone in a kitchen is not."
				},
				{
					label: "Temperature",
					value: "Under 50°F if you can. A refrigerator is the right place in a warm climate."
				},
				{
					label: "Humidity",
					value: "Low. In a humid house, add a food-safe desiccant, or a small cloth bag of dry rice, and replace the rice when it softens."
				},
				{
					label: "Light",
					value: "Dark. A cupboard, or an opaque tin around the jar."
				},
				{
					label: "Label",
					value: "Variety, harvest year, how many plants, and a note that they were not first-year bolters."
				},
				{
					label: "Life",
					value: "Plan on strong germination for three years. Test after that. Some lots still sprout at five years if they stayed cool and dry."
				}
			]
		},
		{
			kind: "h2",
			text: "Opening the jar"
		},
		{
			kind: "p",
			text: "If the jar lives in the refrigerator, let it warm to room temperature before you open it. Cold seed meeting kitchen air sweats. Water in the jar undoes the year of keeping it dry. Close it again as soon as you have taken what you need."
		},
		{
			kind: "h2",
			text: "A germination test"
		},
		{
			kind: "steps",
			items: [
				{
					title: "Count twenty seeds",
					text: "Take them from the jar after it has warmed, then close the jar."
				},
				{
					title: "Lay them on a damp towel",
					text: "Fold a paper towel over them and slip it into a labeled bag. Keep it near 70°F, out of direct sun, and do not let the towel dry."
				},
				{
					title: "Count at 21 days",
					text: "Fifteen or more sprouts out of twenty is a strong lot. Ten is still usable if you sow more thickly. Fewer than ten means this jar should not be your only plan."
				}
			]
		},
		{
			kind: "h2",
			text: "What not to do"
		},
		{
			kind: "list",
			items: [
				"Do not seal seed that still feels leathery.",
				"Do not store the jar above the stove, or in a shed that hits summer heat.",
				"Do not freeze seed unless it is very dry, and then double-bag it. A refrigerator is enough for a home supply.",
				"Do not save seed from plants that had leaf spots.",
				"Do not mix two varieties in one unlabeled envelope."
			]
		},
		{
			kind: "p",
			text: "The seed you cook with and the seed you sow are the same thing. If you dip into the jar for the pot, you are eating the seed stock. Keep a sowing jar you do not open for soup."
		},
		{
			kind: "widget",
			id: "checklist"
		}
	],
	companions: [
		{
			kind: "lead",
			text: "Companion lists are garden habits, not laboratory results. Celery does not need a magic neighbor. It needs rich soil, steady water, and a cool stretch."
		},
		{
			kind: "p",
			text: "The plants below earn a place because they share that season, add nitrogen, or pull a pest somewhere more useful than the crown. Anything marked keep-apart is about pests, shade, or seed purity. A carrot row across the garden is fine. A carrot row threaded through the celery is how leaf miners get a continuous meal."
		},
		{
			kind: "widget",
			id: "companions"
		}
	],
	troubles: [
		{
			kind: "lead",
			text: "Most celery failures are water, temperature, or time. Walk the symptom before you reach for a spray."
		},
		{
			kind: "widget",
			id: "troubles"
		},
		{
			kind: "callout",
			title: "When the book and the weather disagree",
			text: "The dates in the zone chapter are typical, not a forecast. Frost, soil, and a hot spell outrank the calendar. Believe the weather."
		}
	]
};
function parseDay(value) {
	if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
	const date = parseISO(value);
	return Number.isNaN(date.getTime()) ? null : date;
}
function dayLabel(date) {
	return format(date, "MMMM d");
}
function Blocks({ blocks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-5",
		children: blocks.map((block, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, { block }, index))
	});
}
function BlockView({ block }) {
	if (block.kind === "lead") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "max-w-prose text-lg leading-relaxed text-ink",
		children: block.text
	});
	if (block.kind === "p") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "max-w-prose text-ink",
		children: block.text
	});
	if (block.kind === "h2") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "max-w-prose pt-3 font-display text-2xl tracking-tight text-ink",
		children: block.text
	});
	if (block.kind === "callout") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "max-w-prose rounded-xl border border-line bg-paper-2 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl text-ink",
			children: block.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-ink",
			children: block.text
		})]
	});
	if (block.kind === "list") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex max-w-prose flex-col gap-3",
		children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "border-l-2 border-sage pl-3 text-ink",
			children: item
		}, item))
	});
	if (block.kind === "specs") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "max-w-prose divide-y divide-line border-y border-line",
		children: block.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-1 py-3 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-sm font-semibold text-sage",
				children: row.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "text-ink",
				children: row.value
			})]
		}, row.label))
	});
	if (block.kind === "steps") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "flex max-w-prose flex-col gap-5",
		children: block.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-xl tabular-nums text-sage",
				children: index + 1
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold text-ink",
				children: item.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-ink",
				children: item.text
			})] })]
		}, item.title))
	});
	if (block.kind === "jump") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Jump, {
		to: block.to,
		label: block.label
	});
	if (block.kind === "widget" && block.id === "varieties") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VarietyPicker, {});
	if (block.kind === "widget" && block.id === "zones") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoneStudio, {});
	if (block.kind === "widget" && block.id === "companions") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanionStudio, {});
	if (block.kind === "widget" && block.id === "checklist") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JarChecklist, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TroubleList, {});
}
function Jump({ to, label }) {
	const title = chapterById(to).title;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "press inline-flex min-h-11 items-center text-sage underline decoration-line underline-offset-4",
		onClick: () => patchLibrary({ chapter: to }),
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "sr-only",
			children: [", ", title]
		})]
	}) });
}
function VarietyPicker() {
	const { variety } = useLibrary();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid max-w-prose gap-2",
		children: varieties.map((item) => {
			const selected = item.id === variety;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"aria-pressed": selected,
				onClick: () => patchLibrary({ variety: item.id }),
				className: `press rounded-xl border p-4 text-left ${selected ? "border-sage bg-paper-2" : "border-line bg-paper"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-wrap items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl text-ink",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm tabular-nums text-muted",
							children: [item.days, " days from transplant"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block text-sm text-ink",
						children: item.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block text-sm text-muted",
						children: item.blanch
					})
				]
			}, item.id);
		})
	});
}
function MonthGrid({ zone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "text-sm font-semibold text-ink",
			children: ["A typical year in zone ", zone.id]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 grid grid-cols-6 gap-2",
			children: MONTHS.map((name, index) => {
				const sow = zone.sowMonths.some((month) => month === index);
				const plant = zone.plantMonths.some((month) => month === index);
				const harvest = zone.harvestMonths.some((month) => month === index);
				const seed = zone.seedMonths.some((month) => month === index);
				const bits = [
					sow ? "sow" : "",
					plant ? "transplant" : "",
					harvest ? "harvest stalks" : "",
					seed ? "collect seed in year two" : ""
				].filter(Boolean);
				const active = bits.length > 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"aria-label": active ? `${name}: ${bits.join(", ")}` : `${name}: quiet`,
					className: `rounded-sm px-1 py-2 text-center ${active ? "bg-paper" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `text-xs font-semibold ${active ? "text-ink" : "text-muted"}`,
						children: name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex min-h-2 items-center justify-center gap-1",
						"aria-hidden": "true",
						children: [
							sow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-sage" }) : null,
							plant ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-ink" }) : null,
							harvest ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-paper-2 ring-2 ring-sage" }) : null,
							seed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-sm bg-muted" }) : null
						]
					})]
				}, name);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-2 rounded-full bg-sage",
						"aria-hidden": "true"
					}), " Sow"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-2 rounded-full bg-ink",
						"aria-hidden": "true"
					}), " Transplant"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-2 rounded-full bg-paper-2 ring-2 ring-sage",
						"aria-hidden": "true"
					}), " Harvest"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-2 rounded-sm bg-muted",
						"aria-hidden": "true"
					}), " Seed, year two"]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-xs text-muted",
			children: "Seed marks are the second year, after a winter of cold."
		})
	] });
}
function ZoneStudio() {
	const lib = useLibrary();
	const selected = zoneById(lib.zone);
	const variety = varietyById(lib.variety);
	const last = parseDay(lib.lastFrost);
	const first = parseDay(lib.firstFrost);
	const datesInverted = Boolean(last && first && first.getTime() <= last.getTime());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex max-w-3xl flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "zone-detail",
				className: "rounded-xl bg-paper-2 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "kicker",
						children: ["Zone ", selected.id]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl tracking-tight text-ink",
						children: selected.region
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-ink",
						children: selected.strategy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid gap-3 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-sm bg-paper p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-sm font-semibold text-sage",
									children: "Sow"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-ink",
									children: selected.sow
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-sm bg-paper p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-sm font-semibold text-sage",
									children: "Transplant"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-ink",
									children: selected.transplant
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-sm bg-paper p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-sm font-semibold text-sage",
									children: "Harvest stalks"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-ink",
									children: selected.harvest
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 rounded-sm bg-paper p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-sage",
							children: "Seed harvest, year two"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-ink",
							children: selected.seed
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							"Typical last spring frost: ",
							selected.lastFrost,
							". Typical first fall frost: ",
							selected.firstFrost,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthGrid, { zone: selected })
					}),
					(selected.id === "10" || selected.id === "11") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink",
						children: "Leaf celery is the more honest crop in this zone. It is ready in about 55 days from transplant and tolerates heat better than a Pascal head."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-line p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-ink",
						children: "Your frost dates"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 max-w-prose text-ink",
						children: [
							"Optional. These override the typical windows above for ",
							variety.name,
							", counted at ",
							variety.days,
							" days from transplant. Change the variety in The plant."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-3 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-ink",
								children: "Last spring frost"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								value: lib.lastFrost,
								onChange: (event) => patchLibrary({ lastFrost: event.target.value }),
								className: "mt-1 h-11 w-full rounded-sm border border-line bg-paper px-3"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-ink",
								children: "First fall frost"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								value: lib.firstFrost,
								onChange: (event) => patchLibrary({ firstFrost: event.target.value }),
								className: "mt-1 h-11 w-full rounded-sm border border-line bg-paper px-3"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-3 block max-w-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold text-ink",
							children: "Variety"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: lib.variety,
							onChange: (event) => {
								if (isVarietyId(event.target.value)) patchLibrary({ variety: event.target.value });
							},
							className: "mt-1 h-11 w-full rounded-sm border border-line bg-paper px-3",
							children: varieties.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item.id,
								children: item.name
							}, item.id))
						})]
					}),
					datesInverted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink",
						children: "Use a spring frost and the autumn frost that follows it. Those two dates are in the wrong order."
					}) : null,
					last && !datesInverted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpringPlan, { last }) : null,
					first && !datesInverted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FallPlan, { first }) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-ink",
				children: "All zones"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-2",
				children: zones$1.map((zone) => {
					const on = zone.id === lib.zone;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": on,
						onClick: () => {
							if (isZoneId(zone.id)) patchLibrary({ zone: zone.id });
							document.getElementById("zone-detail")?.scrollIntoView({ block: "start" });
						},
						className: `press w-full rounded-xl border p-4 text-left ${on ? "border-sage bg-paper-2" : "border-line bg-paper"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex flex-wrap items-baseline justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-xl text-ink",
									children: ["Zone ", zone.id]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted",
									children: zone.preferLabel
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-sm text-muted",
								children: zone.region
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-2 block text-sm text-ink",
								children: ["Plant: ", zone.transplant]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-1 block text-sm text-ink",
								children: ["Harvest: ", zone.harvest]
							})
						]
					}) }, zone.id);
				})
			})] })
		]
	});
}
function SpringPlan({ last }) {
	const { variety: varietyId, zone: zoneId } = useLibrary();
	const variety = varietyById(varietyId);
	const zone = zoneById(zoneId);
	const sowStart = addDays(last, -84);
	const sowEnd = addDays(last, -70);
	const plantStart = addDays(last, 7);
	const plantEnd = addDays(last, 18);
	const harvest = addDays(plantStart, variety.days);
	const hot = harvest.getMonth() >= 5 && harvest.getMonth() <= 7 && zone.prefer === "fall";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 border-t border-line pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl text-ink",
				children: "Spring crop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-2 grid gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanRow, {
						label: "Sow indoors",
						value: `${dayLabel(sowStart)} – ${dayLabel(sowEnd)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanRow, {
						label: "Transplant",
						value: `${dayLabel(plantStart)} – ${dayLabel(plantEnd)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanRow, {
						label: "Earliest full harvest",
						value: dayLabel(harvest)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: variety.kind === "leaf" ? "You can snip leaves earlier than this. The date is a full cutting, not the first cut." : "Outer stalks are often ready before a full head. Cut them when they snap."
			}),
			hot ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-ink",
				children: [
					"That spring harvest lands in summer heat, which is when stalk celery turns stringy. In zone ",
					zone.id,
					", trust the fall dates."
				]
			}) : null
		]
	});
}
function FallPlan({ first }) {
	const { variety: varietyId, zone: zoneId } = useLibrary();
	const variety = varietyById(varietyId);
	const zone = zoneById(zoneId);
	const transplant = addDays(first, -(variety.days + 14));
	const sowStart = addDays(transplant, -84);
	const sowEnd = addDays(transplant, -70);
	const harvest = addDays(transplant, variety.days);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 border-t border-line pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl text-ink",
				children: "Fall crop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-2 grid gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanRow, {
						label: "Sow indoors",
						value: `${dayLabel(sowStart)} – ${dayLabel(sowEnd)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanRow, {
						label: "Transplant",
						value: dayLabel(transplant)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanRow, {
						label: "Harvest before frost",
						value: `${dayLabel(harvest)} – ${dayLabel(first)}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Transplant is set so the variety finishes about two weeks before your first frost."
			}),
			zone.prefer === "spring" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-ink",
				children: [
					"A fall crop is a tight race in zone ",
					zone.id,
					". If that transplant lands in high summer and frost comes early, put your effort into the spring sowing."
				]
			}) : null
		]
	});
}
function PlanRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-1 sm:grid-cols-[11rem_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-sm font-semibold text-sage",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-ink tabular-nums",
			children: value
		})]
	});
}
var roles = [
	"help",
	"rim",
	"apart"
];
function CompanionStudio() {
	const [role, setRole] = (0, import_react.useState)("all");
	const shown = role === "all" ? companions$1 : companions$1.filter((item) => item.role === role);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex max-w-3xl flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedPlan, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Filter companions",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
					label: "All",
					pressed: role === "all",
					onClick: () => setRole("all")
				}), roles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
					label: roleLabels[item],
					pressed: role === item,
					onClick: () => setRole(item)
				}, item))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-3",
				children: shown.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-line p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-ink",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-sage",
								children: roleLabels[item.role]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-ink",
							children: item.why
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-ink",
							children: item.how
						})
					]
				}, item.id))
			})
		]
	});
}
function FilterChip({ label, pressed, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": pressed,
		onClick,
		className: `press min-h-11 rounded-sm px-3 text-sm font-semibold ${pressed ? "bg-sage text-paper" : "border border-line bg-paper text-ink"}`,
		children: label
	});
}
function BedPlan() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "rounded-xl bg-paper-2 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "font-display text-xl text-ink",
				children: "A bed that fits"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-ink",
				children: "North at the top. Taller plants stay behind the celery."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedRow, {
						label: "North",
						cells: ["Kale", "Bush beans"],
						note: "Windbreak and nitrogen, not shade."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedRow, {
						label: "Center",
						cells: [
							"Leek",
							"Celery",
							"Leek"
						],
						note: "Celery at 8 inches. Leeks in the gaps.",
						emphasize: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedRow, {
						label: "South",
						cells: [
							"Lettuce",
							"Onion",
							"Spinach"
						],
						note: "Pull the greens as celery fills in."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedRow, {
						label: "Path",
						cells: ["Alyssum", "Marigold"],
						note: "Flowers on the edge, not against the crowns."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-ink",
				children: "Keep carrots, parsley, dill, fennel, corn, and potatoes off this bed. Keep celeriac off it in a seed year."
			})
		]
	});
}
function BedRow({ label, cells, note, emphasize = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold text-muted",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-1 grid gap-2 ${cells.length === 3 ? "grid-cols-3" : "grid-cols-2"}`,
			children: cells.map((cell, index) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `grid min-h-11 place-items-center rounded-sm px-2 text-center text-sm font-semibold ${emphasize && cell === "Celery" ? "bg-sage text-paper" : "bg-paper text-ink"}`,
					children: cell
				}, `${label}-${index}`);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted",
			children: note
		})
	] });
}
function JarChecklist() {
	const { checks } = useLibrary();
	const done = jarChecks.filter((item) => checks.includes(item.id)).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "max-w-prose rounded-xl border border-line p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-ink",
				children: "Before you seal the jar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm tabular-nums text-muted",
				children: [
					done,
					" of ",
					jarChecks.length,
					" checked. Saved on this device."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3",
				children: jarChecks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-t border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 items-start gap-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: checks.includes(item.id),
							onChange: () => toggleCheck(item.id),
							className: "mt-1 size-5 accent-sage"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ink",
							children: item.label
						})]
					})
				}, item.id))
			})
		]
	});
}
function TroubleList() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex max-w-prose flex-col gap-3",
		children: troubles$1.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl border border-line p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl text-ink",
					children: item.symptom
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-ink",
					children: item.cause
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-ink",
					children: item.fix
				})
			]
		}, item.symptom))
	});
}
function chapterBlocks(id) {
	return bodies[id];
}
function BookApp() {
	const lib = useLibrary();
	useHydrateLibrary();
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const chapter = chapterById(lib.chapter);
	const index = chapterIndex(lib.chapter);
	const previous = chapters[index - 1]?.id ?? null;
	const next = chapters[index + 1]?.id ?? null;
	(0, import_react.useEffect)(() => {
		window.scrollTo(0, 0);
	}, [lib.chapter]);
	(0, import_react.useEffect)(() => {
		const current = chapterById(lib.chapter);
		document.title = current.id === "cover" ? "Stem to Seed" : `${current.title} · Stem to Seed`;
	}, [lib.chapter]);
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			const tag = event.target?.tagName;
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
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);
	function go(id) {
		patchLibrary({ chapter: id });
		setMenuOpen(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink md:bg-desk",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto min-h-screen md:grid md:max-w-6xl md:grid-cols-[15rem_minmax(0,1fr)] md:bg-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "sticky top-0 z-20 hidden h-screen flex-col border-r border-line bg-paper-2 md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-line px-4 py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => go("cover"),
								className: "press text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "kicker",
									children: "Field book"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block font-display text-2xl tracking-tight text-ink",
									children: "Stem to Seed"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Celery, from sowing to the seed jar."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoneSelect, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							"aria-label": "Chapters",
							className: "flex-1 overflow-y-auto px-3 pb-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterList, {
								current: lib.chapter,
								onPick: go
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1 bg-paper-2",
							role: "progressbar",
							"aria-valuemin": 1,
							"aria-valuemax": chapters.length,
							"aria-valuenow": index + 1,
							"aria-label": "Reading progress",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1 bg-sage",
								style: { width: `${(index + 1) / chapters.length * 100}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "sticky top-0 z-30 grid grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-2 border-b border-line bg-paper px-3 py-2 md:hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "press grid h-11 w-11 place-items-center",
									"aria-label": "Open contents",
									onClick: () => setMenuOpen(true),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-center font-display text-lg text-ink",
									children: chapter.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoneSelect, {})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
							className: "px-5 py-8 pb-28 md:px-10 md:py-12 md:pb-16",
							children: [
								lib.chapter === "cover" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
									onRead: () => go("contents"),
									onPlan: () => go("zones")
								}) : lib.chapter === "contents" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contents, { onPick: go }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
									className: "max-w-prose",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "kicker",
											children: chapter.kicker
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
											id: "chapter-title",
											tabIndex: -1,
											className: "mt-2 font-display text-4xl tracking-tight text-ink",
											children: chapter.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-lg text-ink",
											children: chapter.dek
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blocks, { blocks: chapterBlocks(lib.chapter) })
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-12 hidden max-w-prose items-center justify-between gap-3 md:flex",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PagerButton, {
											id: previous,
											dir: "prev"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm tabular-nums text-muted",
											children: [
												index + 1,
												" of ",
												chapters.length
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PagerButton, {
											id: next,
											dir: "next"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 hidden text-sm text-muted md:block",
									children: "Arrow keys turn the page."
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Page turns",
				className: "fixed inset-x-0 bottom-0 z-30 grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-t border-line bg-paper px-3 py-2 md:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PagerButton, {
						id: previous,
						dir: "prev"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm tabular-nums text-muted",
						children: [
							index + 1,
							" / ",
							chapters.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PagerButton, {
						id: next,
						dir: "next",
						align: "end"
					})
				]
			}),
			menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 flex flex-col bg-paper md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-line px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl text-ink",
						children: "Contents"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "press grid h-11 w-11 place-items-center",
						"aria-label": "Close contents",
						onClick: () => setMenuOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Chapters",
					className: "flex-1 overflow-y-auto px-3 py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterList, {
						current: lib.chapter,
						onPick: go
					})
				})]
			}) : null
		]
	});
}
function ZoneSelect() {
	const { zone } = useLibrary();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "USDA zone"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value: zone,
			onChange: (event) => {
				if (isZoneId(event.target.value)) patchLibrary({ zone: event.target.value });
			},
			className: "h-11 rounded-sm border border-line bg-paper px-2 text-sm",
			children: zones$1.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
				value: item.id,
				children: ["Zone ", item.id]
			}, item.id))
		})]
	});
}
function ChapterList({ current, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "flex flex-col",
		children: chapters.map((item, index) => {
			const on = item.id === current;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"aria-current": on ? "page" : void 0,
				onClick: () => onPick(item.id),
				className: `press flex min-h-11 w-full items-baseline gap-3 rounded-sm border-l-2 px-2 py-2 text-left ${on ? "border-sage bg-paper-2 text-ink" : "border-transparent text-ink"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-5 shrink-0 text-sm tabular-nums text-muted",
					children: index + 1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold",
					children: item.label
				})]
			}) }, item.id);
		})
	});
}
function PagerButton({ id, dir, align = "start" }) {
	const label = dir === "prev" ? "Previous" : "Next";
	const Icon = dir === "prev" ? ChevronLeft : ChevronRight;
	if (!id) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: align === "end" ? "justify-self-end" : "" });
	const title = chapterById(id).title;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => patchLibrary({ chapter: id }),
		className: `press inline-flex min-h-11 items-center gap-1 rounded-sm border border-line bg-paper px-3 text-sm font-semibold text-ink ${align === "end" ? "justify-self-end" : "justify-self-start"}`,
		children: [
			dir === "prev" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				"aria-hidden": "true",
				className: "size-4"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "sr-only",
				children: [": ", title]
			}),
			dir === "next" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				"aria-hidden": "true",
				className: "size-4"
			}) : null
		]
	});
}
function Cover({ onRead, onPlan }) {
	const { zone } = useLibrary();
	const guide = zoneById(zone);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "A field book for the kitchen garden"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-xl font-display text-4xl tracking-tight text-ink md:text-5xl",
				children: "Stem to Seed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-prose text-lg text-ink",
				children: "How to grow celery from the first sowing through the stalk harvest, then keep a plant through winter and store the seed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-xl bg-paper-2 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-ink",
						children: "Your zone"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ink",
						children: "Pick a USDA zone. Planting and harvest dates follow you through the book."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-5 gap-2",
						children: zones$1.map((item) => {
							const on = item.id === zone;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": on,
								onClick: () => patchLibrary({ zone: item.id }),
								className: `press h-11 rounded-sm text-sm font-semibold tabular-nums ${on ? "bg-sage text-paper" : "border border-line bg-paper text-ink"}`,
								children: item.id
							}, item.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink",
						children: guide.strategy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-ink",
						children: [
							"Plant: ",
							guide.transplant,
							". Harvest: ",
							guide.harvest,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthGrid, { zone: guide })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-2 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onRead,
					className: "press inline-flex min-h-11 items-center justify-center rounded-sm bg-sage px-4 font-semibold text-paper",
					children: "Read the book"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onPlan,
					className: "press inline-flex min-h-11 items-center justify-center rounded-sm border border-line bg-paper px-4 font-semibold text-ink",
					children: "Plan the dates"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "Northern Hemisphere months. South of the equator, shift them by six."
			})
		]
	});
}
function Contents({ onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "max-w-prose",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Contents"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight text-ink",
				children: "What is in this book"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg text-ink",
				children: "The order is the order of the garden: know the plant, place it in your zone, build the bed, sow, tend, cut stalks, then take and store seed. Companions and troubles sit at the back."
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "mt-8 flex max-w-prose flex-col gap-2",
		children: chapters.filter((item) => item.id !== "contents").map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onPick(item.id),
			className: "press w-full rounded-xl border border-line p-4 text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "kicker",
					children: item.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block font-display text-xl text-ink",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block text-sm text-muted",
					children: item.dek
				})
			]
		}) }, item.id))
	})] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookApp, {});
}
//#endregion
export { Home as component };
