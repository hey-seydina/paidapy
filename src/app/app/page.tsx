import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Topbar } from "@/components/app/topbar";
import { Sparkline } from "@/components/app/sparkline";
import {
  endpoints,
  orgTotals,
  recentPayments,
  revenueByHour,
} from "@/lib/mock-data";

export default function OverviewPage() {
  return (
    <>
      <Topbar title="Overview" />
      <main className="flex-1 space-y-8 p-6">
        <KpiRow />
        <RevenueChart />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <TopEndpoints />
          </div>
          <LiveFeed />
        </div>
      </main>
    </>
  );
}

function KpiRow() {
  const cards = [
    {
      label: "Revenue / 24h",
      value: `$${orgTotals.revenue24h.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      delta: orgTotals.revenueDelta,
      unit: "USDC",
    },
    {
      label: "Paid calls / 24h",
      value: orgTotals.calls24h.toLocaleString(),
      delta: orgTotals.callsDelta,
      unit: "calls",
    },
    {
      label: "p95 settlement",
      value: orgTotals.p95ms.toLocaleString(),
      delta: orgTotals.p95Delta,
      unit: "ms",
      lowerIsBetter: true,
    },
    {
      label: "Active payers",
      value: orgTotals.payersActive.toLocaleString(),
      delta: orgTotals.payersDelta,
      unit: "wallets",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
      {cards.map((c) => {
        const up = c.delta >= 0;
        const good = c.lowerIsBetter ? !up : up;
        return (
          <div key={c.label} className="bg-background p-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {c.label}
            </p>
            <div className="mt-3 flex items-baseline gap-2">
              <p className="font-mono text-2xl tracking-tight">{c.value}</p>
              <p className="font-mono text-[11px] text-muted-foreground">
                {c.unit}
              </p>
            </div>
            <div
              className={`mt-2 inline-flex items-center gap-1 font-mono text-[11px] ${
                good ? "text-primary" : "text-orange-400/90"
              }`}
            >
              {up ? (
                <ArrowUpRight className="h-3 w-3" />
              ) : (
                <ArrowDownRight className="h-3 w-3" />
              )}
              {(c.delta >= 0 ? "+" : "") +
                (c.delta * 100).toFixed(1) +
                "% vs prev 24h"}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function RevenueChart() {
  const total = revenueByHour.reduce((a, b) => a + b, 0);
  return (
    <div className="rounded-xl border border-border bg-card/40">
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Revenue, last 24h
          </p>
          <p className="mt-1 font-mono text-lg tracking-tight">
            ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{" "}
            <span className="text-xs text-muted-foreground">USDC</span>
          </p>
        </div>
        <div className="flex items-center gap-1 rounded-md border border-border bg-background p-0.5 font-mono text-[11px]">
          {["24h", "7d", "30d", "all"].map((r, i) => (
            <button
              key={r}
              className={`rounded px-2 py-1 transition-colors ${
                i === 0
                  ? "bg-card text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div className="h-44 p-5">
        <Sparkline data={revenueByHour} />
      </div>
    </div>
  );
}

function TopEndpoints() {
  const top = [...endpoints].sort((a, b) => b.revenue24h - a.revenue24h);
  return (
    <div className="rounded-xl border border-border bg-card/40">
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          Top endpoints / 24h
        </p>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/60 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            <th className="px-5 py-2.5 text-left font-normal">Endpoint</th>
            <th className="px-5 py-2.5 text-right font-normal">Calls</th>
            <th className="px-5 py-2.5 text-right font-normal">Revenue</th>
            <th className="px-5 py-2.5 text-right font-normal">p95</th>
          </tr>
        </thead>
        <tbody>
          {top.map((e) => (
            <tr
              key={e.id}
              className="border-b border-border/40 transition-colors last:border-0 hover:bg-background/60"
            >
              <td className="px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-sm bg-card px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {e.method}
                  </span>
                  <span className="font-mono text-sm">{e.path}</span>
                </div>
              </td>
              <td className="px-5 py-3 text-right font-mono text-sm text-muted-foreground">
                {e.calls24h.toLocaleString()}
              </td>
              <td className="px-5 py-3 text-right font-mono text-sm">
                ${e.revenue24h.toFixed(2)}
              </td>
              <td className="px-5 py-3 text-right font-mono text-sm text-muted-foreground">
                {e.p95ms}ms
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LiveFeed() {
  return (
    <div className="rounded-xl border border-border bg-card/40">
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          Live payments
        </p>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          streaming
        </div>
      </div>
      <ul className="divide-y divide-border/40">
        {recentPayments.slice(0, 7).map((p) => (
          <li key={p.id} className="px-5 py-2.5">
            <div className="flex items-center justify-between gap-3">
              <span className="truncate font-mono text-xs">{p.endpoint}</span>
              <span className="font-mono text-xs text-primary">
                +{p.amount.toFixed(p.amount < 0.01 ? 4 : 2)}
              </span>
            </div>
            <div className="mt-1 flex items-center justify-between text-[11px] text-muted-foreground">
              <span className="font-mono">{p.payer}</span>
              <span className="font-mono">{p.ts}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
