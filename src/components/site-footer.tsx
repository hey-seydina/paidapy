import Link from "next/link";
import { Logo } from "@/components/logo";

const product = [
  { href: "/docs", label: "Documentation" },
  { href: "/pricing", label: "Pricing" },
  { href: "/changelog", label: "Changelog" },
  { href: "/status", label: "Status" },
];

const company = [
  { href: "/github", label: "GitHub" },
  { href: "/security", label: "Security" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Logo className="h-5 w-5" />
              <span className="text-sm font-semibold tracking-tight">
                paidapy
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Stablecoin billing and analytics for HTTP APIs. Built on x402.
            </p>
          </div>
          <FooterColumn title="Product" links={product} />
          <FooterColumn title="Resources" links={company} />
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 font-mono text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} paidapy, Inc.</p>
          <p>
            built on{" "}
            <Link
              href="https://x402.org"
              className="text-foreground/80 transition-colors hover:text-primary"
            >
              x402
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
