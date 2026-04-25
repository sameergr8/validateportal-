import { cn } from "@/lib/utils";
import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, id, className, ...rest }: TextareaProps) {
  const taId = id ?? rest.name;
  return (
    <div>
      {label && (
        <label htmlFor={taId} className="block text-xs font-semibold text-grey mb-1.5 tracking-wide uppercase">
          {label}
        </label>
      )}
      <textarea
        id={taId}
        {...rest}
        className={cn(
          "w-full px-3 py-2.5 rounded-lg border-[1.5px] border-border bg-surface text-sm text-ink outline-none focus:border-navy resize-none font-sans",
          className,
        )}
      />
    </div>
  );
}
