import { codeToHtml } from "shiki";
import { CopyButton } from "@/components/copy-button";

type Tab = { label: string; code: string; lang: string };

const tabs: Tab[] = [
  {
    label: "server.ts",
    lang: "ts",
    code: `import { paidapy } from "paidapy";
import express from "express";

const app = express();
const pay = paidapy({ apiKey: process.env.PAIDAPY_KEY! });

app.get(
  "/v1/forecast",
  pay({ price: "0.01", asset: "USDC", chain: "base" }),
  (req, res) => {
    res.json({ tempC: 21.4, windKph: 12 });
  }
);`,
  },
  {
    label: "install",
    lang: "bash",
    code: `npm install paidapy`,
  },
];

export async function CodeBlock() {
  const rendered = await Promise.all(
    tabs.map(async (t) => ({
      ...t,
      html: await codeToHtml(t.code, {
        lang: t.lang,
        theme: "github-dark-default",
      }),
    }))
  );

  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-card/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between border-b border-border/80 bg-black/40 px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {rendered[0].label}
          </span>
        </div>
        <CopyButton text={rendered[0].code} />
      </div>
      <div
        className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-relaxed [&_pre]:!bg-transparent"
        dangerouslySetInnerHTML={{ __html: rendered[0].html }}
      />
    </div>
  );
}
