import { Card } from "@/components/ui/Card";

interface SLARow {
  label: string;
  count: number;
  color: "danger" | "warning" | "info" | "success";
  pct: number;
}

const colorMap = {
  danger:  { text: "text-danger",  bar: "bg-danger"  },
  warning: { text: "text-warning", bar: "bg-warning" },
  info:    { text: "text-info",    bar: "bg-info"    },
  success: { text: "text-success", bar: "bg-success" },
};

export function SLAMonitor({ rows }: { rows: SLARow[] }) {
  return (
    <Card>
      <div className="p-5">
        <div className="text-[13px] font-semibold text-navy mb-1">SLA Monitor</div>
        <div className="text-[11px] text-grey mb-4">Cases by time remaining</div>
        {rows.map((row) => (
          <div key={row.label} className="mb-2.5">
            <div className="flex justify-between mb-1">
              <span className="text-xs text-sub">{row.label}</span>
              <span className={`text-xs font-semibold ${colorMap[row.color].text}`}>
                {row.count} cases
              </span>
            </div>
            <div className="h-1.5 bg-muted rounded overflow-hidden">
              <div
                className={`h-full rounded ${colorMap[row.color].bar}`}
                style={{ width: `${row.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
