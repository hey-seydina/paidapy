import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AlphaBanner() {
  return (
    <Link
      href="/changelog"
      className="group block border-b border-border/60 bg-black/60"
    >
      <div className="mx-auto flex h-9 max-w-6xl items-center justify-center gap-2 px-6 text-xs">
        <span className="rounded-sm bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-primary">
          v0.1
        </span>
        <span className="text-muted-foreground">
          now in alpha — read the changelog
        </span>
        <ArrowRight className="h-3 w-3 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
    </Link>
  );
}
