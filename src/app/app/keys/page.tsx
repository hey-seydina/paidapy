import { Copy, Plus, Trash2 } from "lucide-react";
import { Topbar } from "@/components/app/topbar";
import { apiKeys } from "@/lib/mock-data";

export default function KeysPage() {
  return (
    <>
      <Topbar title="API keys" />
      <main className="flex-1 p-6">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Use a <span className="font-mono text-foreground">pk_test_*</span>{" "}
            key locally and <span className="font-mono text-foreground">pk_live_*</span> in production.
          </p>
          <button className="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_24px_-4px_rgba(0,255,136,0.4)]">
            <Plus className="h-3.5 w-3.5" />
            New key
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card/40">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-2.5 text-left font-normal">Label</th>
                <th className="px-5 py-2.5 text-left font-normal">Key</th>
                <th className="px-5 py-2.5 text-left font-normal">Env</th>
                <th className="px-5 py-2.5 text-left font-normal">Created</th>
                <th className="px-5 py-2.5 text-left font-normal">Last used</th>
                <th className="px-5 py-2.5"></th>
              </tr>
            </thead>
            <tbody>
              {apiKeys.map((k) => (
                <tr
                  key={k.id}
                  className="border-b border-border/40 transition-colors last:border-0 hover:bg-background/60"
                >
                  <td className="px-5 py-3 text-sm">{k.label}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">
                        {k.prefix}…
                        <span className="text-muted-foreground/40">
                          ••••••••••••
                        </span>
                      </span>
                      <button
                        aria-label="Copy"
                        className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                      >
                        <Copy className="h-3 w-3" />
                      </button>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span
                      className={`font-mono text-[11px] ${
                        k.env === "live" ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {k.env}
                    </span>
                  </td>
                  <td className="px-5 py-3 font-mono text-xs text-muted-foreground">
                    {k.createdAt}
                  </td>
                  <td className="px-5 py-3 font-mono text-xs text-muted-foreground">
                    {k.lastUsed}
                  </td>
                  <td className="px-5 py-3 text-right">
                    <button
                      aria-label="Revoke"
                      className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-card hover:text-orange-400"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
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
