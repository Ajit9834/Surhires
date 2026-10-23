import { readFileSync } from "node:fs";
const r = JSON.parse(readFileSync(process.argv[2], "utf8"));
const a = r.audits;
const show = (id, n = 1200) => {
  const x = a[id];
  if (!x) return console.log("-- " + id + " MISSING");
  console.log("-- " + id + " score=" + x.score + " " + (x.displayValue ?? ""));
  if (x.details?.items) console.log(JSON.stringify(x.details.items).slice(0, n));
  else if (x.details) console.log(JSON.stringify(x.details).slice(0, n));
};
show("errors-in-console");
show("bootup-time", 1500);
show("mainthread-work-breakdown", 1200);
show("unused-javascript", 1600);
show("bf-cache", 1500);
show("third-party-summary", 800);
show("long-tasks", 800);
