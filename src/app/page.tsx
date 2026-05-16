import Link from "next/link";
import { ArrowRight, KeyRound, Plug, Activity } from "lucide-react";
import { AlphaBanner } from "@/components/alpha-banner";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CodeBlock } from "@/components/code-block";

const steps = [
  {
    icon: KeyRound,
    title: "Get a key",
    body: "Sign up, create a project, pick a chain and stablecoin. USDC on Base is the default. No KYC for testnet.",
  },
  {
    icon: Plug,
    title: "Wrap your route",
    body: "One middleware. paidapy returns 402 with a payment challenge, verifies the on-chain proof, then forwards the request.",
  },
  {
    icon: Activity,
    title: "Watch it settle",
    body: "Every paid call streams to your dashboard in under a second. Revenue, p95 latency, top endpoints. Export anywhere.",
  },
];

const stats = [
  { label: "Settled volume / 24h", value: "184,219.55", unit: "USDC" },
  { label: "Paid requests / 24h", value: "1,284,907", unit: "calls" },
  { label: "p95 settlement", value: "412", unit: "ms" },
  { label: "Endpoints live", value: "3,718", unit: "" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AlphaBanner />
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <LiveStats />
      </main>
      <SiteFooter />
    </div>
  );
}

async function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(0,255,136,0.10),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-10 px-6 py-24 md:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          x402 on Base, Optimism, Solana
        </span>
        <div className="space-y-6">
          <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            Bill HTTP endpoints
            <br />
            <span className="text-muted-foreground">in stablecoins.</span>
          </h1>
          <p className="max-w-xl text-balance text-lg text-muted-foreground">
            paidapy implements x402 in front of your API. One middleware, no
            invoices, no Stripe. Money settles to your wallet, metrics settle
            to your dashboard.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Link
            href="/signup"
            className="group inline-flex h-10 items-center gap-1.5 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_32px_-4px_rgba(0,255,136,0.5)]"
          >
            Start with a test key
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/docs"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Read the docs
          </Link>
        </div>
        <CodeBlock />
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Three steps. No webhooks to babysit.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="group relative bg-background p-7 transition-colors hover:bg-card/40"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-primary transition-colors group-hover:border-primary/30">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/60">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-base font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LiveStats() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">
              Network
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Live across every project on paidapy.
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            updated every second
          </div>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-background p-6 transition-colors hover:bg-card/40"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
              <p className="mt-4 font-mono text-2xl tracking-tight text-foreground">
                {s.value}
              </p>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                {s.unit || " "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
