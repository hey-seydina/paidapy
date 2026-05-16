import Link from "next/link";
import { Logo } from "@/components/logo";

const product = [
  { href: "/docs", label: "Documentation" },
  { href: "/pricing", label: "Pricing" },
  { href: "/changelog", label: "Changelog" },
  { href: "/status", label: "Status" },
];

const company = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-6 w-6" />
              <span className="text-base font-semibold tracking-tight">
                paidapy
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Revenue analytics and billing for x402 stablecoin payments.
              Built for developers shipping pay-per-call APIs.
            </p>
          </div>
          <FooterColumn title="Product" links={product} />
          <FooterColumn title="Company" links={company} />
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} paidapy, Inc. All rights reserved.</p>
          <p>Made for the x402 payment standard.</p>
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
      <h4 className="text-sm font-medium text-foreground">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
