import { cn } from "@/lib/utils";
import type { SelectHTMLAttributes, ReactNode } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  children: ReactNode;
}

export function Select({ label, id, className, children, ...rest }: SelectProps) {
  const selectId = id ?? rest.name;
  return (
    <div>
      {label && (
        <label htmlFor={selectId} className="block text-xs font-semibold text-grey mb-1.5 tracking-wide uppercase">
          {label}
        </label>
      )}
      <select
        id={selectId}
        {...rest}
        className={cn(
          "w-full px-3 py-2.5 rounded-lg border-[1.5px] border-border bg-surface text-sm text-ink cursor-pointer outline-none focus:border-navy",
          className,
        )}
      >
        {children}
      </select>
    </div>
  );
}
