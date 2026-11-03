import type { ChapterId } from "@/data/chapters";

export type WidgetId = "varieties" | "zones" | "companions" | "checklist" | "troubles";

export type Block =
  | { kind: "lead"; text: string }
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "callout"; title: string; text: string }
  | { kind: "steps"; items: { title: string; text: string }[] }
  | { kind: "specs"; rows: { label: string; value: string }[] }
  | { kind: "list"; items: string[] }
  | { kind: "jump"; to: ChapterId; label: string }
  | { kind: "widget"; id: WidgetId };

const plant: Block[] = [
  {
    kind: "lead",
    text: "Celery is a cool-season biennial. You eat the leaf stalks in year one. Leave a strong plant through a winter of cold and it flowers in year two, which is when you take the seed.",
  },
  {
    kind: "p",
    text: "The grocery-store crop is Apium graveolens var. dulce, in the carrot family. The flowers are flat sprays called umbels. What you eat are petioles, the leaf stalks. The true stem stays short until the plant bolts.",
  },
  { kind: "h2", text: "Three crops, one species" },
  {
    kind: "p",
    text: "Stalk celery is the head of long petioles. Celeriac is grown for a knobby root and is not the subject of this book, except for one warning: it crosses freely with celery if you save seed. Leaf celery, also called cutting celery or smallage, makes thin stalks and a cloud of leaves. It is faster and more heat tolerant. In zones 10 and 11 it is often the crop worth growing. It is still the same species. Do not grow it beside a seed crop if you want stalk seed that comes true.",
  },
  { kind: "h2", text: "What it demands" },
  {
    kind: "specs",
    rows: [
      {
        label: "Weather",
        value: "Best days are 60–70°F. Quality falls once days sit above 75–80°F.",
      },
      {
        label: "Time",
        value: "Most stalk varieties need 80–110 days after transplant, plus 10–12 weeks indoors before that.",
      },
      {
        label: "Water",
        value: "Steady moisture. A dry spell makes strings, bitterness, and black heart.",
      },
      {
        label: "Soil",
        value: "Rich, moisture-retentive, and never soggy. pH about 6.0–6.8.",
      },
      {
        label: "Cold",
        value: "A light frost sweetens a mature head. A long spell under 50°F on young plants can make them bolt.",
      },
      {
        label: "Seed life",
        value: "A dry, cool jar keeps strong germination about three years, and sometimes usable seed to five.",
      },
    ],
  },
  {
    kind: "callout",
    title: "Do not save seed from a first-year bolter",
    text: "A plant that flowers in the season you wanted stalks has already shown you it bolts too easily. Eat it or compost it. Seed from that plant teaches the next generation the same habit.",
  },
  { kind: "h2", text: "Choose a variety" },
  {
    kind: "p",
    text: "The choice follows you through the zone planner. Day counts below are from transplant to a full cutting, not from the day you sowed. Weather still moves the harvest.",
  },
  { kind: "widget", id: "varieties" },
  { kind: "jump", to: "zones", label: "See sowing and harvest for your zone" },
];

const zones: Block[] = [
  {
    kind: "lead",
    text: "A USDA zone tells you how cold the winter gets. It does not tell you how hot July is. Celery lives or dies by the cool stretch on your calendar.",
  },
  {
    kind: "p",
    text: "Use the windows below as the plan, then slide them to your real last frost and to the weeks before your days lock in above 80°F. Two gardens in zone 8 — a mild Oregon valley and central Texas — are not the same summer. If you know your frost dates, the planner under the zone list turns them into sowing, transplant, and harvest days for the variety you picked.",
  },
  {
    kind: "p",
    text: "Months are a Northern Hemisphere year. South of the equator, shift every month by six.",
  },
  { kind: "widget", id: "zones" },
];

const bed: Block[] = [
  {
    kind: "lead",
    text: "Celery is a heavy feeder with shallow roots. The bed is either right before you transplant, or the crop is ordinary.",
  },
  {
    kind: "p",
    text: "Choose a place with at least six hours of sun. In hot-summer zones, afternoon shade is a gift. Avoid the low spot where water stands after rain. Crowns rot in a puddle. Also avoid ground that baked dry last year no matter how often you watered. You will be watering this crop every few days.",
  },
  { kind: "h2", text: "Build the soil" },
  {
    kind: "p",
    text: "Work a two-inch layer of finished compost into the top eight inches. Celery wants organic matter more than it wants a clever fertilizer recipe. In clay, compost keeps water available without sealing the surface. In sand, compost is what stops the water from leaving.",
  },
  {
    kind: "p",
    text: "Aim for a pH near 6.0 to 6.8. Outside that range, nutrients are harder for the plant to take up. A soil test beats a guessing bag of lime. Do not lime a bed that is already near neutral.",
  },
  { kind: "h2", text: "Feed through the season" },
  {
    kind: "p",
    text: "Compost at planting carries the start. Side-dress every three to four weeks until stalks are thickening: a thin layer of compost, a watering with fish emulsion, or a light dose of a balanced vegetable fertilizer at the rate on the bag. Stop pushing nitrogen in the last month. Soft, rank growth is more bitter and more attractive to aphids.",
  },
  {
    kind: "callout",
    title: "Black heart is a water problem first",
    text: "The inner leaves turn black when calcium fails to move into the heart. That usually happens because the soil swung from dry to wet, not because the bed has no calcium. Steady moisture prevents it better than a supplement.",
  },
  { kind: "h2", text: "Spacing" },
  {
    kind: "p",
    text: "Set stalk celery 8 inches apart, in rows 18 to 24 inches apart. Golden self-blanching types can sit at 6 inches so the plants shade one another's hearts. Leaf celery can go at 4 to 6 inches, because you will cut it like a leafy herb.",
  },
  {
    kind: "p",
    text: "A raised bed of 4 to 6 inches helps drainage. Once the soil has warmed and the plants are established, mulch with straw or shredded leaves, about two inches, pulled back an inch from each crown so the base can dry.",
  },
  { kind: "jump", to: "companions", label: "Neighbors that fit this spacing" },
];

const sow: Block[] = [
  {
    kind: "lead",
    text: "Celery seed is small, slow, and unforgiving if it dries. Almost every failed sowing is a dry afternoon, buried seed, or a cold tray.",
  },
  {
    kind: "specs",
    rows: [
      { label: "Germination", value: "14–21 days, sometimes longer" },
      { label: "Temperature", value: "70–75°F until sprout, then cooler" },
      { label: "Light", value: "Seed needs light. Do not bury it." },
      { label: "When", value: "10–12 weeks before you transplant" },
      { label: "Tray", value: "Soil blocks or cells about 2 inches deep" },
    ],
  },
  { kind: "h2", text: "Before you sow" },
  {
    kind: "list",
    items: [
      "Use seed less than three years old, or test a pinch first.",
      "Use a fine, sterile seed mix. Garden soil in a tray damps off.",
      "A winter windowsill, by itself, is not enough light. Plan on a grow light.",
    ],
  },
  { kind: "h2", text: "The sowing" },
  {
    kind: "steps",
    items: [
      {
        title: "Soak, if you want",
        text: "A half-day in clean water can shave a few days off germination. Drain well. Do not soak longer than 24 hours.",
      },
      {
        title: "Fill and water the mix",
        text: "Pre-moisten it so it is damp, not dripping. Fill the cells and firm gently.",
      },
      {
        title: "Surface sow",
        text: "Sprinkle a few seeds on top and press them in so they touch the damp mix. Do not cover them. A dust of vermiculite is optional and must not hide the seed.",
      },
      {
        title: "Hold the moisture",
        text: "A clear dome or a sheet of plastic helps until sprout. Vent it daily. Keep the tray at 70–75°F. A heat mat is useful until you see green, then turn it off.",
      },
      {
        title: "The day they sprout",
        text: "Remove the cover. Move the light to 2–3 inches above the leaves, 14–16 hours a day. Drop the temperature toward 60–65°F if you can. Hot, dim seedlings become weak and floppy.",
      },
      {
        title: "Water without burying them",
        text: "Mist, or water from below. A heavy stream buries seed that has not sprouted yet. The surface stays damp. One dry afternoon can kill a germinating seed.",
      },
      {
        title: "Thin",
        text: "At two true leaves, snip the extras. Leave one plant per cell. Pulling disturbs the keeper.",
      },
      {
        title: "Pot up if the cells fill",
        text: "Celery sits indoors a long time. If roots circle the plug before transplant time, move it to a slightly larger cell. A cramped plug stalls in the garden.",
      },
    ],
  },
  { kind: "h2", text: "Hardening off" },
  {
    kind: "p",
    text: "Give them 7 to 10 days outside before planting. Start in shade and shelter, then add sun and wind. Bring them in if a night will fall below 40°F. A week near 50°F or under, while they are still young, can vernalize them. They look fine, then bolt in early summer.",
  },
  {
    kind: "callout",
    title: "The transplant",
    text: "Set plants out when they have four or five true leaves, the soil is at least 50°F and preferably near 60°F, and nights are staying above about 45°F. Plant at the same depth as the cell. Water them in. Shade them for two or three days if the sun is sudden.",
  },
  {
    kind: "p",
    text: "In mild zones you can sow a nursery bed outdoors in the cool season. Surface-sow, keep it wet, and give light shade. It works when the weather cooperates. Indoor starts are more reliable.",
  },
  { kind: "jump", to: "zones", label: "Match the sowing week to your zone" },
];

const season: Block[] = [
  {
    kind: "lead",
    text: "From transplant to harvest, the job is simple and easy to fail: never let the bed dry, and never let it drown.",
  },
  { kind: "h2", text: "Water" },
  {
    kind: "p",
    text: "Aim for about an inch of water a week from rain and irrigation together, and more when days climb above 75°F. Two or three soakings beat a daily sprinkle. Shallow daily water builds shallow roots and a bitter stalk. Water in the morning so leaves are not wet all night.",
  },
  {
    kind: "p",
    text: "If the top inch is dry, water. If it is cool and dark, wait. Mulch is what makes that schedule possible once summer arrives.",
  },
  { kind: "h2", text: "Heat" },
  {
    kind: "p",
    text: "Celery does not tough out a heat wave. Growth stalls, strings form, and the flavor turns sharp. In zones 8 and warmer, finish the head before the hot lock-in, or start so the head sizes in the cool months. Thirty-percent shade cloth can save a week of quality on a spring crop. It will not turn July into October.",
  },
  { kind: "h2", text: "Blanching" },
  {
    kind: "p",
    text: "Blanching pales the heart by blocking light for the last two or three weeks. The stalk is milder, and also weaker, and it rots if you wrap wet plants. Modern green varieties are meant to be eaten green. They taste like celery rather than like water.",
  },
  {
    kind: "p",
    text: "If you blanch, wait until stalks are nearly full size and do it in dry weather. Slip a paper or cardboard collar around the lower stalks, or set boards along the row. Leave the top third of the plant in the light. Check inside the collar every few days. Hill soil only if you must, and do not bury the growing point. Self-blanching varieties only need close spacing.",
  },
  { kind: "h2", text: "A cover against insects" },
  {
    kind: "p",
    text: "A light row cover from transplant onward keeps out leaf miners and a share of aphids, and it softens wind. Pin the edges. On a stalk crop you can leave it on all season. Take it off seed plants in year two, when the flowers need insects.",
  },
  { kind: "jump", to: "stalks", label: "When the stalks are ready to cut" },
];

const stalks: Block[] = [
  {
    kind: "lead",
    text: "Cut celery when the stalks are worth eating, not when a packet says the variety is done. A head can be technically mature and already stringy if the week was hot and dry.",
  },
  { kind: "h2", text: "The test" },
  {
    kind: "list",
    items: [
      "Outer stalks are at least 8 inches from the soil to the first leaf, and still crisp.",
      "A stalk snaps, rather than bending and peeling into strings.",
      "The heart is tight, not opening into a flower stalk.",
      "You are ahead of a hard freeze. Light frost is welcome. Much below about 28°F turns stalks to mush.",
    ],
  },
  { kind: "h2", text: "Two ways to cut" },
  {
    kind: "steps",
    items: [
      {
        title: "Outer stalks only",
        text: "Take a few outside petioles with a knife at the base and leave the crown. The plant keeps producing. This is the right method for leaf celery, and for a kitchen that wants a handful at a time.",
      },
      {
        title: "The whole head",
        text: "When the plant is full, cut at the soil line. Trim the root plate and any tired outer stalks in the garden, not in the sink a week later.",
      },
    ],
  },
  {
    kind: "p",
    text: "Cut in the morning, when the plants are full of water. Chill them quickly. Heat in the basket is how a good head goes limp.",
  },
  { kind: "h2", text: "Keeping the harvest" },
  {
    kind: "specs",
    rows: [
      { label: "Temperature", value: "As close to 32°F as the refrigerator allows" },
      { label: "Humidity", value: "High. A loose bag or a crisper, not a sealed sweating box" },
      { label: "Time", value: "About two to four weeks" },
      {
        label: "Keep away from",
        value: "Apples, pears, and tomatoes. Celery yellows and turns bitter in their ethylene.",
      },
      {
        label: "Washing",
        value: "If you wash, dry the stalks before you bag them. Wet stalks rot.",
      },
    ],
  },
  {
    kind: "p",
    text: "A light frost before the final cut sweetens the stalks. In cold zones, harvest before the hard freeze, or mulch deeply and cut as soon as you can get into the bed. Celery is not a storage root. The refrigerator is the cellar.",
  },
  {
    kind: "callout",
    title: "Leave the best plant",
    text: "If you want seed, do not cut the crown of the plant you are saving. You may take a few outer stalks early, then leave it alone to grow a strong crown for winter.",
  },
  { kind: "jump", to: "seed", label: "How to take seed the next year" },
];

const seed: Block[] = [
  {
    kind: "lead",
    text: "Seed is a second-year crop. Celery will not flower properly until it has felt a winter. Year one is for choosing parents and getting them through that cold alive.",
  },
  { kind: "h2", text: "Choose parents in year one" },
  {
    kind: "p",
    text: "Mark six plants at a minimum. Twelve to twenty is better if you have the room. You are keeping a population, not a single stalk. Pick plants that sized up, stayed sweet, and did not bolt. Skip anything with leaf spots. Septoria blight rides on the seed.",
  },
  {
    kind: "p",
    text: "Do not mix varieties in the same seed year. Celery crosses with other stalk celery, with celeriac, and with leaf celery. It does not cross with carrots, parsley, dill, or fennel — those are different genera — but that is only a fact about seed purity. They still share pests, which is why they stay off the celery bed.",
  },
  {
    kind: "callout",
    title: "Isolation",
    text: "Home seed savers commonly keep Apium varieties about half a mile apart. In a street of gardens, that is hard. The practical version: grow only one celery or celeriac variety for seed that year. If another Apium is flowering nearby, bag a few umbels in fine mesh and move pollen between your own flowers with a soft brush every day or two while they are open. A single floret sheds pollen before it can receive it, so one plant brushing itself is a poor plan.",
  },
  { kind: "h2", text: "Through the winter" },
  {
    kind: "p",
    text: "In zones 7 and warmer, many crowns survive in the ground under a thick mulch put on after the first light frosts. The crown must not sit in water. Wet cold kills more overwintered celery than dry cold. Keep a spare plan.",
  },
  {
    kind: "p",
    text: "In zones 2 through 6, and anywhere winter is wet or deeply cold, dig the crowns after a light frost and before a hard freeze. Trim the tops to about two inches. Nest the roots in damp, not wet, sand or sawdust. Store them as you would carrots: 32–40°F and high humidity. A root cellar, a garage that does not freeze, or a spare refrigerator works. Check monthly and remove anything rotting. Replant in early spring, as soon as the soil can be worked, at the same depth they grew.",
  },
  {
    kind: "p",
    text: "They need roughly six to eight weeks of cold before they will flower. In a frost-free zone 11, a refrigerator can supply it: lift the crowns, bag them, chill them for six to eight weeks, and replant in the coolest part of the year. Without some cold, they may never bolt, and you get no seed.",
  },
  { kind: "h2", text: "Flowering" },
  {
    kind: "p",
    text: "In spring of year two the crown sends up a ridged stalk, often two to four feet, branching into compound umbels. The central umbel ripens first and usually carries the best seed. Side umbels follow for several weeks. Stake the plants if the site is windy. Keep watering. A drought now makes thin, weak seed.",
  },
  { kind: "h2", text: "When the seed is ready" },
  {
    kind: "p",
    text: "Seed turns from green to tan, then gray-brown. Ripe seed loosens, and it will shatter onto the soil if you wait for every seed on the head. Cut early rather than late.",
  },
  {
    kind: "steps",
    items: [
      {
        title: "Watch the central umbel",
        text: "When most seeds on it are brown, and a few fall when you tap the head, cut it.",
      },
      {
        title: "Cut into a paper bag",
        text: "Take the umbel with a short piece of stalk. Do not use plastic. Plastic holds moisture and the seed molds.",
      },
      {
        title: "Come back for the side umbels",
        text: "They ripen over the next few weeks. Take each one at the same brown, just-starting-to-drop stage.",
      },
      {
        title: "Dry in shade",
        text: "Airflow, one to two weeks. Hang the bags or spread the heads on a screen. They are not done while the little stems are still leathery.",
      },
      {
        title: "Thresh",
        text: "Rub the heads between your palms over a tub. Most of the seed falls free.",
      },
      {
        title: "Winnow gently",
        text: "Pour the seed slowly in front of a fan on low so the chaff lifts and the seed drops. Celery seed is small. A hard breath sends the crop across the room.",
      },
      {
        title: "Dry until it snaps",
        text: "Bend a seed. If it snaps, it is ready to seal. If it bends, it still holds moisture.",
      },
    ],
  },
  {
    kind: "p",
    text: "In hot zones this harvest often lands in early summer. Do not leave bags in a closed car or on a sunny porch. Heat plus moisture is how fresh seed dies in July.",
  },
  { kind: "jump", to: "jar", label: "How to store the jar" },
];

const jar: Block[] = [
  {
    kind: "lead",
    text: "Celery seed is also a spice. It holds oils. Those oils go stale in a warm, humid kitchen, and the seed loses the ability to sprout long before it looks different.",
  },
  {
    kind: "specs",
    rows: [
      { label: "Dry", value: "A seed snaps. It does not bend." },
      {
        label: "Container",
        value: "A small glass jar with a tight lid. Paper envelopes inside that jar are fine. Paper alone in a kitchen is not.",
      },
      {
        label: "Temperature",
        value: "Under 50°F if you can. A refrigerator is the right place in a warm climate.",
      },
      {
        label: "Humidity",
        value: "Low. In a humid house, add a food-safe desiccant, or a small cloth bag of dry rice, and replace the rice when it softens.",
      },
      { label: "Light", value: "Dark. A cupboard, or an opaque tin around the jar." },
      {
        label: "Label",
        value: "Variety, harvest year, how many plants, and a note that they were not first-year bolters.",
      },
      {
        label: "Life",
        value: "Plan on strong germination for three years. Test after that. Some lots still sprout at five years if they stayed cool and dry.",
      },
    ],
  },
  { kind: "h2", text: "Opening the jar" },
  {
    kind: "p",
    text: "If the jar lives in the refrigerator, let it warm to room temperature before you open it. Cold seed meeting kitchen air sweats. Water in the jar undoes the year of keeping it dry. Close it again as soon as you have taken what you need.",
  },
  { kind: "h2", text: "A germination test" },
  {
    kind: "steps",
    items: [
      { title: "Count twenty seeds", text: "Take them from the jar after it has warmed, then close the jar." },
      {
        title: "Lay them on a damp towel",
        text: "Fold a paper towel over them and slip it into a labeled bag. Keep it near 70°F, out of direct sun, and do not let the towel dry.",
      },
      {
        title: "Count at 21 days",
        text: "Fifteen or more sprouts out of twenty is a strong lot. Ten is still usable if you sow more thickly. Fewer than ten means this jar should not be your only plan.",
      },
    ],
  },
  { kind: "h2", text: "What not to do" },
  {
    kind: "list",
    items: [
      "Do not seal seed that still feels leathery.",
      "Do not store the jar above the stove, or in a shed that hits summer heat.",
      "Do not freeze seed unless it is very dry, and then double-bag it. A refrigerator is enough for a home supply.",
      "Do not save seed from plants that had leaf spots.",
      "Do not mix two varieties in one unlabeled envelope.",
    ],
  },
  {
    kind: "p",
    text: "The seed you cook with and the seed you sow are the same thing. If you dip into the jar for the pot, you are eating the seed stock. Keep a sowing jar you do not open for soup.",
  },
  { kind: "widget", id: "checklist" },
];

const companions: Block[] = [
  {
    kind: "lead",
    text: "Companion lists are garden habits, not laboratory results. Celery does not need a magic neighbor. It needs rich soil, steady water, and a cool stretch.",
  },
  {
    kind: "p",
    text: "The plants below earn a place because they share that season, add nitrogen, or pull a pest somewhere more useful than the crown. Anything marked keep-apart is about pests, shade, or seed purity. A carrot row across the garden is fine. A carrot row threaded through the celery is how leaf miners get a continuous meal.",
  },
  { kind: "widget", id: "companions" },
];

const troubles: Block[] = [
  {
    kind: "lead",
    text: "Most celery failures are water, temperature, or time. Walk the symptom before you reach for a spray.",
  },
  { kind: "widget", id: "troubles" },
  {
    kind: "callout",
    title: "When the book and the weather disagree",
    text: "The dates in the zone chapter are typical, not a forecast. Frost, soil, and a hot spell outrank the calendar. Believe the weather.",
  },
];

export const bodies: Record<Exclude<ChapterId, "cover" | "contents">, Block[]> = {
  plant,
  zones,
  bed,
  sow,
  season,
  stalks,
  seed,
  jar,
  companions,
  troubles,
};
