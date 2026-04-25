import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AuthLayoutProps {
  brand: ReactNode;          // left panel content (login marketing copy / register marketing copy)
  children: ReactNode;       // right panel form
  className?: string;
}

/**
 * Split-pane layout used on /login and registration screens.
 * Left = navy brand panel, right = canvas-tinted form.
 */
export function AuthLayout({ brand, children, className }: AuthLayoutProps) {
  return (
    <div className={cn("flex min-h-screen", className)}>
      <div className="w-[45%] bg-navy relative overflow-hidden">
        {/* decorative circles */}
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-gold/[0.06]" />
        <div className="absolute -bottom-16 -left-16 w-[280px] h-[280px] rounded-full bg-gold/[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.015]" />
        <div className="relative z-10 px-13 py-12 flex flex-col h-full" style={{ paddingLeft: 52, paddingRight: 52 }}>
          {brand}
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-10 bg-canvas">
        <div className="w-full max-w-[420px]">{children}</div>
      </div>
    </div>
  );
}
