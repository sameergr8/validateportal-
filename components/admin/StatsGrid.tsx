import { Card } from "@/components/ui/Card";

interface Stat {
  label: string;
  value: string | number;
  delta?: string;
  icon: string;
  color: "navy" | "warning" | "danger" | "success";
}

const colorMap = {
  navy:    "text-navy",
  warning: "text-warning",
  danger:  "text-danger",
  success: "text-success",
};

const dotMap = {
  navy:    "bg-navy",
  warning: "bg-warning",
  danger:  "bg-danger",
  success: "bg-success",
};

export function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-7">
      {stats.map((s) => (
        <Card key={s.label} className="!shadow-[0_2px_8px_rgba(30,58,95,0.04)]">
          <div className="p-5">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[22px]">{s.icon}</span>
              <div className={`w-2 h-2 rounded-full ${dotMap[s.color]}`} />
            </div>
            <div className={`font-display text-[30px] font-bold mb-0.5 ${colorMap[s.color]}`}>
              {s.value}
            </div>
            <div className="text-xs font-semibold text-ink">{s.label}</div>
            {s.delta && <div className="text-[11px] text-grey mt-0.5">{s.delta}</div>}
          </div>
        </Card>
      ))}
    </div>
  );
}
