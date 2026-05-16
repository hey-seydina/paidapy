import { Topbar } from "@/components/app/topbar";

export default function SettingsPage() {
  return (
    <>
      <Topbar title="Settings" />
      <main className="flex-1 space-y-6 p-6">
        <Section
          title="Payout wallet"
          description="paidapy settles paid requests to this address on the chain you select per endpoint."
        >
          <Field label="Address">
            <input
              defaultValue="0x71C8b9F1e2A03e8d27a4De1b6a4f1d8C40d83aF2"
              className="w-full rounded-md border border-border bg-background px-3 py-2 font-mono text-sm outline-none transition-colors focus:border-primary/40"
            />
          </Field>
          <Field label="Default chain">
            <select
              defaultValue="base"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary/40"
            >
              <option value="base">Base</option>
              <option value="optimism">Optimism</option>
              <option value="solana">Solana</option>
            </select>
          </Field>
        </Section>

        <Section
          title="Facilitator"
          description="paidapy can verify on-chain proofs itself or hand off to a third-party facilitator."
        >
          <Field label="Mode">
            <select
              defaultValue="hosted"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary/40"
            >
              <option value="hosted">Hosted by paidapy</option>
              <option value="self">Self-hosted</option>
            </select>
          </Field>
        </Section>

        <Section
          title="Danger zone"
          description="Deleting an organization revokes every key and stops every endpoint."
        >
          <button className="inline-flex h-8 items-center rounded-md border border-orange-400/30 bg-orange-400/5 px-3 text-xs font-medium text-orange-400 transition-colors hover:bg-orange-400/10">
            Delete organization
          </button>
        </Section>
      </main>
    </>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 rounded-xl border border-border bg-card/40 p-6 md:grid-cols-[1fr_2fr]">
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
