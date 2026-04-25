import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Input({ label, hint, error, id, className, ...rest }: InputProps) {
  const inputId = id ?? rest.name;
  return (
    <div>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold text-navy mb-1.5 tracking-wide uppercase"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        {...rest}
        className={cn(
          "w-full px-4 py-3 rounded-lg border-[1.5px] bg-surface text-sm text-ink outline-none transition-colors",
          error
            ? "border-danger focus:border-danger"
            : "border-border focus:border-navy",
          className,
        )}
      />
      {(hint || error) && (
        <p className={cn("text-xs mt-1", error ? "text-danger" : "text-grey")}>
          {error ?? hint}
        </p>
      )}
    </div>
  );
}
