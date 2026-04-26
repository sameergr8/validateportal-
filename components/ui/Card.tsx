import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface rounded-xl border border-border shadow-[0_2px_12px_rgba(30,58,95,0.05)] overflow-hidden",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: CardProps) {
  return (
    <div className={cn("px-5 py-4 border-b border-muted flex items-center justify-between", className)}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children }: CardProps) {
  return <div className={cn("text-sm font-semibold text-navy", className)}>{children}</div>;
}

export function CardBody({ className, children }: CardProps) {
  return <div className={cn("p-5", className)}>{children}</div>;
}
