import { Badge, type BadgeTone } from "@/components/ui/Badge";
import type { CaseStatus } from "@/types/case";

const config: Record<CaseStatus, { label: string; tone: BadgeTone }> = {
  submitted: { label: "Submitted",                tone: "neutral" },
  review:    { label: "Under Review",             tone: "warning" },
  action:    { label: "Action Required",          tone: "danger"  },
  progress:  { label: "Verification In Progress", tone: "info"    },
  complete:  { label: "Completed",                tone: "success" },
  issued:    { label: "Report Issued",            tone: "issued"  },
};

export function StatusBadge({ status }: { status: CaseStatus }) {
  const { label, tone } = config[status];
  return <Badge tone={tone}>{label}</Badge>;
}

export function statusLabel(status: CaseStatus): string {
  return config[status].label;
}
