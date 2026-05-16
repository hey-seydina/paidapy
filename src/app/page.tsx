import Link from "next/link";
import { ArrowRight, KeyRound, LineChart, Plug } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CodeBlock } from "@/components/code-block";

const steps = [
  {
    icon: KeyRound,
    title: "Create an API key",
    body: "Sign up, name your project, and choose the stablecoin and chain you want to settle in. USDC on Base by default — switch any time.",
  },
  {
    icon: Plug,
    title: "Wrap your endpoints",
    body: "Install the SDK and add one middleware call. paidapy issues x402 payment challenges, verifies the response, and forwards the request only when the payment clears.",
  },
  {
    icon: LineChart,
    title: "Track revenue in real time",
    body: "Watch requests, settled volume, and per-endpoint margin land in the dashboard as they happen. Export to CSV, pipe to your warehouse, or trigger payouts.",
  },
];

const stats = [
  { label: "Settled volume (24h)", value: "$184,219.55", unit: "USDC" },
  { label: "Paid requests (24h)", value: "1,284,907", unit: "calls" },
  { label: "Avg. settlement", value: "412", unit: "ms" },
  { label: "Active endpoints", value: "3,718", unit: "live" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
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

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.3_0_0)_0%,transparent_70%)]"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-24 md:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Now live on Base, Optimism, and Solana
        </span>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          Revenue analytics for x402 stablecoin payments.
        </h1>
        <p className="max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
          paidapy turns any HTTP endpoint into a metered, stablecoin-paid
          product. Drop in the SDK, get an API key, and watch settled USDC
          revenue land in your dashboard request by request.
        </p>
        <div className="flex flex-col items-start gap-4">
          <CodeBlock code="npm install paidapy" />
          <div className="flex items-center gap-4">
            <Link
              href="/signup"
              className="inline-flex h-10 items-center gap-1.5 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get an API key <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/docs"
              className="inline-flex h-10 items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Read the docs →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground">
            How it works
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            From signup to settled revenue in under five minutes.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-xl border border-border/60 bg-card/40 p-6"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-foreground">
                  <step.icon className="h-4 w-4" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveStats() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">
              Live network stats
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Real money moving through real APIs.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Updated every second
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card/60 p-6">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {s.label}
              </p>
              <p className="mt-3 font-mono text-2xl tracking-tight text-foreground">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{s.unit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
