/* Batch 5a: Metroidvania / Platformer */
window.GAMES = window.GAMES || [];
window.GAMES.push(
{
  id:"silksong", title:"Hollow Knight: Silksong", year:2025, developer:"Team Cherry", genres:["Metroidvania","Action","Indie"],
  modes:["single"], hours:50, difficulty:5, critic:92, price:"$20",
  colors:["#c03a3a","#1a0a0a"], tags:["hornet","huge","harder than hollow knight","tools","crests","boss fights"],
  ratings:{gameplay:10,challenge:10,exploration:10,progression:8,creativity:7,story:7,atmosphere:10},
  short:"The most anticipated indie ever, and it delivered: a bigger, faster, harder Hollow Knight with Hornet's acrobatic combat.",
  verdict:"Gameplay 10, challenge 10, exploration 10. Twenty dollars. This is a top-3 game for your profile.",
  description:"Hornet is dragged to the kingdom of Pharloom and must climb to its peak. Faster movement, a needle with combos, Crests that change your moveset, and a tool system for builds. Enormous interconnected map, brutal bosses, and Team Cherry's usual generosity with secrets.",
  why:"Your top three priorities are all maxed. It's harder than Hollow Knight — the early difficulty spike is real — and it rewards mastery enormously.",
  caveats:"The difficulty is contentious in Act 1. Some bench placement is mean. Pixel-perfect platforming challenges.",
  tips:["Explore sideways when a boss walls you; there's always another path.","Crests matter more than tools — switch when stuck.","Rosaries are lost on death. Spend or bank them."],
  similar:["hollow-knight","nine-sols","blasphemous-2","celeste"]
},
{
  id:"hollow-knight", title:"Hollow Knight", year:2017, developer:"Team Cherry", genres:["Metroidvania","Action","Indie"],
  modes:["single"], hours:40, difficulty:4, critic:90, price:"$15",
  colors:["#2a3a5a","#0a0a0a"], tags:["hallownest","charms","pantheons","free dlc","atmosphere","genre peak"],
  ratings:{gameplay:9,challenge:9,exploration:10,progression:8,creativity:7,story:8,atmosphere:10},
  short:"The metroidvania benchmark. A gorgeous, melancholy kingdom to get lost in, with 40+ bosses and the Pantheon gauntlets for masochists.",
  verdict:"Play before or after Silksong — both are essential. Pantheon of Hallownest is one of gaming's hardest optional challenges.",
  description:"A silent knight descends into Hallownest. Charms customize your build; the map is vast and labyrinthine with almost no hand-holding. Four free content packs added bosses, the Godhome pantheons and Path of Pain.",
  why:"Exploration 10, atmosphere 10. Gameplay and challenge 9.",
  caveats:"Early hours are slow. Path of Pain isn't for everyone.",
  tips:["Buy the compass and quill first. Then the lantern.","Bosses have patterns; learn, don't spam.","Pantheon 5 is the final exam."],
  similar:["silksong","nine-sols","ori-2","blasphemous-2"]
},
{
  id:"nine-sols", title:"Nine Sols", year:2024, developer:"Red Candle Games", genres:["Metroidvania","Action","Soulslike"],
  modes:["single"], hours:25, difficulty:5, critic:87, price:"$30",
  colors:["#c03a1a","#1a1a2a"], tags:["parry","taopunk","sekiro in 2d","hand-drawn","boss fights","story-heavy"],
  ratings:{gameplay:10,challenge:10,exploration:7,progression:7,creativity:6,story:8,atmosphere:9},
  short:"Sekiro as a 2D metroidvania. Deflection-based combat with talisman detonations, gorgeous 'Taopunk' art, and bosses that rival FromSoft.",
  verdict:"Gameplay and challenge 10. The final boss is one of the hardest and best in the genre. Story mode exists if you want it easier.",
  description:"Yi, a vengeful Solarian, hunts nine rulers of New Kunlun. Parry everything; charged parries plant talismans that explode. Hand-drawn art and a surprisingly affecting story.",
  why:"For a Sekiro fan this is mandatory. Combat depth in 2D is unmatched.",
  caveats:"Exploration is less open than Hollow Knight. Difficulty spikes.",
  tips:["Unbounded Counter (charged parry) is the core skill.","Story mode adjusts difficulty granularly if needed."],
  similar:["sekiro","silksong","hollow-knight","blasphemous-2"]
},
{
  id:"blasphemous-2", title:"Blasphemous 2 (+ Mea Culpa)", year:2023, developer:"The Game Kitchen", genres:["Metroidvania","Action","Soulslike"],
  modes:["single"], hours:25, difficulty:4, critic:83, price:"$30",
  colors:["#8a6a1a","#1a0a0a"], tags:["catholic horror","three weapons","pixel art","boss fights","grotesque beauty"],
  ratings:{gameplay:8,challenge:8,exploration:8,progression:7,creativity:5,story:6,atmosphere:10},
  short:"Baroque Catholic horror metroidvania with three switchable weapons and some of the most striking pixel art ever made.",
  verdict:"Atmosphere 10. Combat is much improved over the first; the Mea Culpa DLC brings back the original's sword.",
  description:"The Penitent One returns with a rapier-and-dagger, a censer flail and a greatsword. Metroidvania traversal with prayers, rosary beads and figurine builds. Bosses are enormous and grotesque.",
  why:"Strong all-round; atmosphere is unlike anything else.",
  caveats:"Less mechanically deep than Nine Sols. Some backtracking.",
  tips:["Veredicto (censer) is the easy-mode weapon.","Do the optional bosses."],
  similar:["silksong","nine-sols","hollow-knight"]
},
{
  id:"ori-2", title:"Ori and the Will of the Wisps", year:2020, developer:"Moon Studios", genres:["Metroidvania","Platformer"],
  modes:["single"], hours:15, difficulty:3, critic:88, price:"$30 (often $10)",
  colors:["#3a8a8a","#1a1a3a"], tags:["movement","gorgeous","escape sequences","soundtrack","polished","emotional"],
  ratings:{gameplay:9,challenge:6,exploration:8,progression:7,creativity:5,story:7,atmosphere:10},
  short:"The most beautiful metroidvania, with movement so fluid it feels like flying. Escape sequences are set-piece brilliance.",
  verdict:"Lighter on challenge than Hollow Knight but gameplay feel is a 9. Hard difficulty recommended.",
  description:"Ori searches for Ku across a hand-painted forest. Bash, dash, grapple and glide chain into effortless flow. Shards customize your build; combat is much improved over the first game.",
  why:"Gameplay feel and atmosphere. Short — an ideal palate cleanser.",
  caveats:"Not very hard.",
  tips:["Hard difficulty.","Master Bash early — everything flows from it."],
  similar:["hollow-knight","celeste","silksong"]
},
{
  id:"celeste", title:"Celeste", year:2018, developer:"Maddy Makes Games", genres:["Platformer","Indie"],
  modes:["single"], hours:20, difficulty:5, critic:94, price:"$20 (often $5)",
  colors:["#8a3a8a","#3a8ac0"], tags:["precision platforming","b-sides","c-sides","farewell","assist mode","perfect controls"],
  ratings:{gameplay:10,challenge:10,exploration:5,progression:6,creativity:5,story:8,atmosphere:9},
  short:"The precision platformer. Perfect controls, brutal optional content (Farewell), and a kind heart.",
  verdict:"Gameplay 10, challenge 10. The B-sides, C-sides and Farewell chapter are as hard as anything ever made and always fair.",
  description:"Madeline climbs a mountain. Dash, climb, wall-jump through 700+ screens. Each death is instant respawn; the game is designed around failing forward. Strawberries are optional; B/C-sides remix each chapter at absurd difficulty.",
  why:"The purest gameplay-and-challenge experience in this list. 5 dollars on sale.",
  caveats:"Pixel art. Pure platforming — no combat.",
  tips:["Ignore strawberries first run; come back for them.","Farewell is 3–10 hours alone. Respect it."],
  similar:["ori-2","hollow-knight","spelunky-2","pizza-tower"]
},
{
  id:"pizza-tower", title:"Pizza Tower", year:2023, developer:"Tour De Pizza", genres:["Platformer","Action","Indie"],
  modes:["single"], hours:12, difficulty:4, critic:90, price:"$20",
  colors:["#e0a020","#c03a1a"], tags:["wario land","combo system","p-ranks","insane animation","speed","lap 2"],
  ratings:{gameplay:10,challenge:8,exploration:5,progression:5,creativity:7,story:2,atmosphere:8},
  short:"Wario Land on amphetamines. A combo-driven speed platformer with unhinged 90s cartoon animation and a P-rank system that demands perfection.",
  verdict:"Gameplay 10 — momentum has never felt this good. P-ranking every level is a serious challenge.",
  description:"Peppino sprints, grabs, dashes and smashes through 20 levels, each ending in an escape sequence. Score is combo-based; P-rank requires a full-level combo and Lap 2. The Noise DLC adds a second campaign.",
  why:"Pure feel and flow. Perfect for short sessions.",
  caveats:"Short. Deliberately ugly-beautiful art.",
  tips:["Don't stop moving. Ever.","Learn the Mach dash cancels."],
  similar:["celeste","ultrakill","hi-fi-rush"]
}
);
