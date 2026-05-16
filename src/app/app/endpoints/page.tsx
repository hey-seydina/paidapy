import { Plus } from "lucide-react";
import { Topbar } from "@/components/app/topbar";
import { endpoints } from "@/lib/mock-data";

export default function EndpointsPage() {
  return (
    <>
      <Topbar title="Endpoints" />
      <main className="flex-1 p-6">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {endpoints.length} endpoints metered across {new Set(endpoints.map((e) => e.chain)).size} chains.
          </p>
          <button className="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_24px_-4px_rgba(0,255,136,0.4)]">
            <Plus className="h-3.5 w-3.5" />
            New endpoint
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card/40">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-2.5 text-left font-normal">Endpoint</th>
                <th className="px-5 py-2.5 text-left font-normal">Price</th>
                <th className="px-5 py-2.5 text-left font-normal">Chain</th>
                <th className="px-5 py-2.5 text-right font-normal">Calls 24h</th>
                <th className="px-5 py-2.5 text-right font-normal">Revenue 24h</th>
                <th className="px-5 py-2.5 text-right font-normal">p95</th>
                <th className="px-5 py-2.5 text-right font-normal">Status</th>
              </tr>
            </thead>
            <tbody>
              {endpoints.map((e) => (
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
                  <td className="px-5 py-3 font-mono text-sm">
                    ${e.price}{" "}
                    <span className="text-xs text-muted-foreground">
                      {e.asset}
                    </span>
                  </td>
                  <td className="px-5 py-3 font-mono text-xs text-muted-foreground">
                    {e.chain}
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
                  <td className="px-5 py-3 text-right">
                    <span
                      className={`inline-flex items-center gap-1.5 font-mono text-[11px] ${
                        e.status === "live"
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          e.status === "live" ? "bg-primary" : "bg-muted-foreground/50"
                        }`}
                      />
                      {e.status}
                    </span>
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
