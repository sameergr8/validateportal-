import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  actions?: ReactNode;
  className?: string;
}

/**
 * Navy sub-header strip used on /dashboard, /apply, etc.
 */
export function PageHeader({ title, subtitle, breadcrumbs, actions, className }: PageHeaderProps) {
  return (
    <div className={cn("bg-navy-dark px-10 py-7", className)}>
      <div className="max-w-[1200px] mx-auto">
        {breadcrumbs && (
          <div className="flex items-center gap-2 mb-2 text-xs">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.href ? (
                  <a href={b.href} className="text-white/40 no-underline hover:text-white/60">
                    {b.label}
                  </a>
                ) : (
                  <span className="text-gold">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <span className="text-white/25">›</span>}
              </span>
            ))}
          </div>
        )}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-display text-[26px] font-bold text-white mb-1">{title}</h1>
            {subtitle && <p className="text-[13px] text-white/45 font-light">{subtitle}</p>}
          </div>
          {actions}
        </div>
      </div>
    </div>
  );
}
