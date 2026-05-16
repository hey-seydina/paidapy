import { ExternalLink } from "lucide-react";
import { Topbar } from "@/components/app/topbar";
import { recentPayments } from "@/lib/mock-data";

export default function ActivityPage() {
  return (
    <>
      <Topbar title="Activity" />
      <main className="flex-1 p-6">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Every paid request, streamed in real time.
          </p>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            live
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card/40">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-2.5 text-left font-normal">Time</th>
                <th className="px-5 py-2.5 text-left font-normal">Endpoint</th>
                <th className="px-5 py-2.5 text-left font-normal">Payer</th>
                <th className="px-5 py-2.5 text-left font-normal">Chain</th>
                <th className="px-5 py-2.5 text-right font-normal">Latency</th>
                <th className="px-5 py-2.5 text-right font-normal">Amount</th>
                <th className="px-5 py-2.5 text-right font-normal">Tx</th>
              </tr>
            </thead>
            <tbody>
              {recentPayments.map((p) => (
                <tr
                  key={p.id}
                  className="border-b border-border/40 transition-colors last:border-0 hover:bg-background/60"
                >
                  <td className="px-5 py-3 font-mono text-xs text-muted-foreground">
                    {p.ts}
                  </td>
                  <td className="px-5 py-3 font-mono text-sm">{p.endpoint}</td>
                  <td className="px-5 py-3 font-mono text-xs text-muted-foreground">
                    {p.payer}
                  </td>
                  <td className="px-5 py-3 font-mono text-xs text-muted-foreground">
                    {p.chain}
                  </td>
                  <td className="px-5 py-3 text-right font-mono text-sm text-muted-foreground">
                    {p.latencyMs}ms
                  </td>
                  <td className="px-5 py-3 text-right font-mono text-sm text-primary">
                    +{p.amount.toFixed(p.amount < 0.01 ? 4 : 2)} {p.asset}
                  </td>
                  <td className="px-5 py-3 text-right">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {p.id}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
