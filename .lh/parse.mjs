import { readFileSync } from "node:fs";

const files = process.argv.slice(2);
for (const f of files) {
  const r = JSON.parse(readFileSync(f, "utf8"));
  const c = r.categories;
  const a = r.audits;
  const num = (id) => (a[id] ? a[id].numericValue : undefined);
  const disp = (id) => (a[id] ? a[id].displayValue : undefined);
  console.log("=== " + f);
  console.log("  perf=" + Math.round((c.performance?.score ?? 0) * 100)
    + " a11y=" + Math.round((c.accessibility?.score ?? 0) * 100)
    + " bp=" + Math.round((c["best-practices"]?.score ?? 0) * 100)
    + " seo=" + Math.round((c.seo?.score ?? 0) * 100));
  console.log("  FCP=" + disp("first-contentful-paint")
    + " | LCP=" + disp("largest-contentful-paint")
    + " | TBT=" + disp("total-blocking-time")
    + " | CLS=" + disp("cumulative-layout-shift")
    + " | SI=" + disp("speed-index")
    + " | TTI=" + disp("interactive"));
  console.log("  LCP elem=" + (a["largest-contentful-paint-element"]?.details?.items?.[0]?.items?.[0]?.node?.snippet ?? "n/a"));
  const opp = Object.values(a).filter((x) => x.details?.type === "opportunity" && (x.numericValue ?? 0) > 0)
    .sort((x, y) => (y.numericValue ?? 0) - (x.numericValue ?? 0)).slice(0, 6);
  for (const o of opp) console.log("  OPP " + o.id + " = " + o.displayValue);
  const diag = Object.values(a).filter((x) => x.score !== null && x.score !== undefined && x.score < 0.9 && x.scoreDisplayMode !== "notApplicable" && x.details?.type !== "opportunity" && !x.id.startsWith("unused"))
    .slice(0, 10);
  for (const d of diag) console.log("  DIAG " + d.id + " score=" + d.score + " " + (d.displayValue ?? ""));
  const lh = a["network-requests"]?.details?.items ?? [];
  console.log("  JS transfer KB=" + Math.round(lh.filter(i => (i.mimeType||"").includes("javascript")).reduce((s,i)=>s+(i.transferSize||0),0)/1024)
    + " total transfer KB=" + Math.round(lh.reduce((s,i)=>s+(i.transferSize||0),0)/1024)
    + " requests=" + lh.length);
}
