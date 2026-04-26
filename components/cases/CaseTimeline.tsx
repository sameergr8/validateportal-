import { cn } from "@/lib/utils";
import { formatDateTime } from "@/lib/utils";
import type { CaseTimelineEvent } from "@/types/case";

const typeStyles = {
  request: { bg: "bg-danger-bg", border: "border-danger-border", icon: "⚠" },
  admin:   { bg: "bg-muted",     border: "border-navy",          icon: "👤" },
  system:  { bg: "bg-navy",      border: "border-gold",          icon: "⚡" },
  user:    { bg: "bg-info-bg",   border: "border-info-border",   icon: "👤" },
} as const;

export function CaseTimeline({ events }: { events: CaseTimelineEvent[] }) {
  return (
    <div>
      {events.map((t, i) => {
        const style = typeStyles[t.type];
        const isLast = i === events.length - 1;
        return (
          <div key={t.id} className={cn("flex gap-3.5 relative", !isLast && "pb-4.5")}>
            {!isLast && <div className="absolute left-[11px] top-7 bottom-0 w-px bg-muted" />}
            <div
              className={cn(
                "w-[22px] h-[22px] rounded-full flex-shrink-0 flex items-center justify-center z-10 border-2",
                style.bg,
                style.border,
              )}
            >
              <span className="text-[9px]">{style.icon}</span>
            </div>
            <div>
              <div className="text-xs font-medium text-ink mb-0.5">{t.event}</div>
              <div className="text-[11px] text-grey">
                {formatDateTime(t.timestamp)} · {t.user}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
