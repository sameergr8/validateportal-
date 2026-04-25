import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type BadgeTone =
  | "neutral"
  | "warning"
  | "danger"
  | "info"
  | "success"
  | "issued";

interface BadgeProps {
  tone?: BadgeTone;
  withDot?: boolean;
  className?: string;
  children: ReactNode;
}

const toneClasses: Record<BadgeTone, string> = {
  neutral: "bg-muted text-navy border-border",
  warning: "bg-warning-bg text-warning border-warning-border",
  danger:  "bg-danger-bg text-danger border-danger-border",
  info:    "bg-info-bg text-info border-info-border",
  success: "bg-success-bg text-success border-success-border",
  issued:  "bg-navy text-gold border-navy",
};

const dotClasses: Record<BadgeTone, string> = {
  neutral: "bg-sub",
  warning: "bg-warning",
  danger:  "bg-danger",
  info:    "bg-info",
  success: "bg-success",
  issued:  "bg-gold",
};

export function Badge({ tone = "neutral", withDot = true, className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide border",
        toneClasses[tone],
        className,
      )}
    >
      {withDot && <span className={cn("w-1.5 h-1.5 rounded-full", dotClasses[tone])} />}
      {children}
    </span>
  );
}
