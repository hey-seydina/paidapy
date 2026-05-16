"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  KeyRound,
  LayoutDashboard,
  Plug,
  Settings,
} from "lucide-react";
import { Logo } from "@/components/logo";

const items = [
  { href: "/app", label: "Overview", icon: LayoutDashboard },
  { href: "/app/endpoints", label: "Endpoints", icon: Plug },
  { href: "/app/activity", label: "Activity", icon: Activity },
  { href: "/app/keys", label: "API keys", icon: KeyRound },
  { href: "/app/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-56 shrink-0 flex-col border-r border-border/60 bg-background">
      <div className="flex h-14 items-center gap-2 border-b border-border/60 px-5">
        <Logo className="h-5 w-5" />
        <span className="text-sm font-semibold tracking-tight">paidapy</span>
      </div>
      <nav className="flex-1 space-y-0.5 p-3">
        {items.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === "/app"
              ? pathname === "/app"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                active
                  ? "bg-card text-foreground"
                  : "text-muted-foreground hover:bg-card/60 hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={1.75} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-border/60 p-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 font-mono text-[11px] text-primary">
            SD
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-medium">Seydina</p>
            <p className="truncate text-[11px] text-muted-foreground">
              paidapy / personal
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
