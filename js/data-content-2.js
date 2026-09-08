/* Editorial content part 2: roadmap, hardware tips, FAQ */
window.CONTENT = window.CONTENT || {};

window.CONTENT.roadmap = [
  { month:"Month 1", title:"Start at the summit", why:"Elden Ring is your single best-fit game. Alternate with Balatro for short sessions so you don't burn out on bosses.", games:["elden-ring","balatro"] },
  { month:"Month 2", title:"Friends + factory", why:"Get the group into Helldivers 2 for chaos nights. Solo, start Factorio and lose track of time.", games:["helldivers-2","factorio","lethal-company"] },
  { month:"Month 3", title:"2D mastery", why:"Silksong is a top-3 fit. Break it up with Hades II runs.", games:["silksong","hades-2"] },
  { month:"Month 4", title:"Combat purity", why:"Sekiro, then DOOM Eternal on Nightmare. Two of the sharpest combat systems ever made, back to back.", games:["sekiro","doom-eternal"] },
  { month:"Month 5", title:"The long co-op campaign", why:"Baldur's Gate 3 with 3 friends over weekly sessions. Solo, Slay the Spire to Ascension 20.", games:["baldurs-gate-3","slay-the-spire"] },
  { month:"Month 6", title:"Systems and suffering", why:"Oxygen Not Included will humble you. Noita will kill you. Both will fascinate you.", games:["oxygen-not-included","noita"] },
  { month:"Month 7", title:"Hunt together", why:"Monster Hunter Wilds with the squad; pick a weapon each and learn it. Outer Wilds solo — blind, no spoilers.", games:["monster-hunter-wilds","outer-wilds"] },
  { month:"Month 8", title:"Build-craft deep dive", why:"Path of Exile 2's league launch. Follow a guide, then break it. Dead Cells for 20-minute breaks.", games:["path-of-exile-2","dead-cells"] },
  { month:"Month 9", title:"Think differently", why:"Dishonored 2 ghost run, then Blue Prince with a notebook. Creativity and exploration month.", games:["dishonored-2","blue-prince"] },
  { month:"Month 10", title:"Pick a competitive home", why:"Try CS2, Rocket League and Deadlock with the group for a week each. Commit to one.", games:["counter-strike-2","rocket-league","deadlock"] },
  { month:"Month 11", title:"Viking project", why:"Valheim server with friends — a months-long shared world. Solo, Nioh 2 for combat depth.", games:["valheim","nioh-2"] },
  { month:"Month 12", title:"Showcase & story", why:"Cyberpunk 2077 with path tracing on Very Hard, then Expedition 33 on Expert. End the year with two beautiful games.", games:["cyberpunk-2077","expedition-33"] }
];

window.CONTENT.hardware = [
  { title:"🎯 Your rig in context", body:"<p>A 9070 XT + 9950X + 64 GB is a top-tier 1440p/4K machine. Every game here runs at max settings; the only question is frame rate vs. resolution.</p><ul><li>1440p: essentially everything at 144+ fps with FSR 4 Quality.</li><li>4K: AAA titles at 60–100 fps with FSR 4; competitive games at 200+ natively.</li><li>Path tracing (Cyberpunk, Alan Wake 2): playable at 1440p with FSR 4 + frame generation.</li></ul>" },
  { title:"🖥️ Monitor is the bottleneck", body:"<p>If you're not on a high-refresh display, that's the single best upgrade. Your GPU is wasted on 60 Hz.</p><ul><li>1440p 240 Hz OLED (~$600–800): the sweet spot for competitive + single-player.</li><li>4K 240 Hz OLED (~$1000+): if budget truly doesn't matter.</li><li>Enable FreeSync Premium / VRR in Adrenalin.</li></ul>" },
  { title:"⚙️ Software setup", body:"<ul><li>Adrenalin: enable <b>FSR 4</b> override for FSR 3.1 games; <b>Anti-Lag 2</b> for competitive.</li><li>Steam: enable Shader Pre-Caching.</li><li><b>RTSS</b> for frame caps; <b>Special K</b> for HDR fixes.</li><li>FromSoft 60 fps caps: community FPS-unlock patches (offline only).</li></ul>" },
  { title:"🎮 Controller vs. mouse", body:"<p>Souls games, character action, platformers, racing, fighters: <b>controller</b> (Xbox Series or 8BitDo Ultimate). Shooters, strategy, ARPGs, automation: <b>mouse + keyboard</b>. For fighting games, a leverless controller (Haute42, ~$60) is a serious upgrade once hooked.</p>" },
  { title:"🔊 Audio matters", body:"<p>Positional audio is a real competitive edge (CS2, Valorant, Lethal Company) and half of horror atmosphere. Open-back headphones (Sennheiser HD 560S ~$150) plus a cheap USB mic beat any 'gaming headset'.</p>" },
  { title:"💾 Storage & mods", body:"<p>Modern AAA games are 100–200 GB. A 2–4 TB NVMe keeps the library installed. For mod-heavy games (RimWorld, Elden Ring Seamless Co-op, Stardew Expanded, Bannerlord), use Vortex / r2modman and back up save folders.</p>" }
];

window.CONTENT.faq = [
  { q:"How is the Fit Score calculated?", a:"<p>Each game is rated 1–10 on seven axes. Your stated priority order — <b>gameplay → challenge → exploration → progression → creativity → story → atmosphere</b> — gives weights of 26/18/16/14/11/8/7%. The weighted sum is nudged by critic consensus (±0.6 max) so a brilliant-but-niche game and a polished-but-generic game don't tie. Ratings are editorial judgments; treat them as a strong opinion.</p>" },
  { q:"Why are some 'great' games missing?", a:"<p>Three reasons: (1) they rank low on your priorities — walking simulators, visual novels and most pure-story games are here only when exceptional; (2) they're superseded by a listed entry (Dark Souls 1/2, Diablo 2; Bloodborne isn't on PC); (3) they don't run well on PC or aren't available. Names in 'also try' ending in '-note' are honorable mentions without full entries.</p>" },
  { q:"How should I actually pick what to play first?", a:"<p>Use Top Picks for the highest fit. If friends are online tonight, go to Co-op. If you have 30 minutes, use the '30 minutes' mood tab. If stuck, follow the Roadmap — it alternates intensity so you don't burn out.</p>" },
  { q:"What about Game Pass / subscriptions?", a:"<p>PC Game Pass includes many entries here at rotating times (Forza Horizon 5, Hi-Fi Rush, Expedition 33, Age of Empires IV, Stalker 2, etc.). Even with unlimited budget it's worth it as a try-before-you-buy tool.</p>" },
  { q:"Where's Black Myth: Wukong / Ghost of Yōtei / GTA VI?", a:"<p>Ghost of Yōtei and GTA VI are console-first as of this writing. Black Myth: Wukong is a gorgeous boss-rush action game (fit ~8.2) cut for space — a solid pick after the soulslike list. Every list is a snapshot; games release constantly.</p>" },
  { q:"How do I add or edit games?", a:"<p>Everything is data-driven. Edit any <code>data/games-*.js</code> file (schema in <code>PROGRESS.md</code>), or add a new file and include it in <code>index.html</code>. Editorial content lives in <code>js/data-content.js</code> and <code>js/data-content-2.js</code>. No build step — just push to GitHub.</p>" },
  { q:"Difficulty ratings — what do they mean?", a:"<p>1 = relaxed (Stardew), 2 = moderate (Witcher 3), 3 = challenging on default (Hades), 4 = hard (Hollow Knight, XCOM 2 Legend), 5 = brutal / infinite ceiling (Sekiro, Celeste Farewell, CS2). The rating reflects the mode I'm recommending you play.</p>" },
  { q:"Why so many co-op games?", a:"<p>You play both solo and with friends, and all your friends are on PC. Co-op games with a dedicated group are often the games people remember most, so a third of the library is playable together. The Co-op section sorts them by group size.</p>" }
];
