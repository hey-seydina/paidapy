"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="group relative w-full max-w-xl rounded-xl border border-border/60 bg-card/60 px-5 py-4 font-mono text-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset]">
      <div className="flex items-center justify-between gap-4">
        <code className="text-foreground/90">
          <span className="text-muted-foreground">$ </span>
          {code}
        </code>
        <button
          type="button"
          onClick={onCopy}
          aria-label="Copy"
          className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
