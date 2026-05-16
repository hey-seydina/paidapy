import { Bell, Search } from "lucide-react";

export function Topbar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-border/60 bg-background/80 px-6 backdrop-blur-xl">
      <h1 className="text-sm font-medium tracking-tight">{title}</h1>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="inline-flex h-8 items-center gap-2 rounded-md border border-border bg-card/40 px-2.5 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
        >
          <Search className="h-3.5 w-3.5" />
          Search
          <kbd className="ml-2 hidden font-mono text-[10px] text-muted-foreground/80 md:inline">
            ⌘K
          </kbd>
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-card/60 hover:text-foreground"
        >
          <Bell className="h-4 w-4" strokeWidth={1.75} />
        </button>
      </div>
    </header>
  );
}
