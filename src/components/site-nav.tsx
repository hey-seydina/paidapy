import Link from "next/link";
import { Logo } from "@/components/logo";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Logo className="h-5 w-5" />
          <span className="text-sm font-semibold tracking-tight">paidapy</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/docs"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/changelog"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Changelog
          </Link>
        </nav>
        <div className="flex items-center gap-5">
          <Link
            href="/signin"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-8 items-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_24px_-4px_rgba(0,255,136,0.4)]"
          >
            Get key
          </Link>
        </div>
      </div>
    </header>
  );
}
