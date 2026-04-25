import { StatusBadge } from "./StatusBadge";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";
import type { CaseSummary } from "@/types/case";

type Column = "caseNumber" | "applicant" | "type" | "service" | "status" | "submitted" | "updated" | "sla" | "actions";

interface CaseTableProps {
  cases: CaseSummary[];
  columns?: Column[];
  onOpen?: (id: string) => string; // returns href
}

const headers: Record<Column, string> = {
  caseNumber: "Case Number",
  applicant:  "Applicant",
  type:       "Type",
  service:    "Service",
  status:     "Status",
  submitted:  "Submitted",
  updated:    "Last Update",
  sla:        "SLA",
  actions:    "Actions",
};

const defaultUserCols: Column[] = ["caseNumber", "service", "status", "submitted", "updated"];

export function CaseTable({ cases, columns = defaultUserCols, onOpen }: CaseTableProps) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-[#F8FAFB]">
          {columns.map((c) => (
            <th
              key={c}
              className="px-4 py-2.5 text-left text-[11px] font-semibold text-grey tracking-wide uppercase border-b border-muted whitespace-nowrap"
            >
              {headers[c]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cases.map((c) => (
          <tr key={c.id} className="border-b border-[#F4F7FB] cursor-pointer">
            {columns.includes("caseNumber") && (
              <td className="px-4 py-3.5">
                <div className="flex items-center gap-1.5">
                  {c.flagged && <span title="SLA at risk" className="text-danger text-[11px]">🚨</span>}
                  <span className="text-xs font-semibold text-navy font-mono">{c.caseNumber}</span>
                </div>
              </td>
            )}
            {columns.includes("applicant") && (
              <td className="px-4 py-3.5 text-[13px] font-medium text-ink">{c.applicantName}</td>
            )}
            {columns.includes("type") && (
              <td className="px-4 py-3.5">
                <span className={cn(
                  "px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide",
                  c.applicantType === "Employer" ? "bg-navy/10 text-navy" : "bg-muted text-sub",
                )}>
                  {c.applicantType.toUpperCase()}
                </span>
              </td>
            )}
            {columns.includes("service") && (
              <td className="px-4 py-3.5 text-xs text-sub">{c.serviceLabel}</td>
            )}
            {columns.includes("status") && (
              <td className="px-4 py-3.5"><StatusBadge status={c.status} /></td>
            )}
            {columns.includes("submitted") && (
              <td className="px-4 py-3.5 text-xs text-grey">{formatDate(c.submittedAt)}</td>
            )}
            {columns.includes("updated") && (
              <td className="px-4 py-3.5 text-xs text-grey">{formatDate(c.updatedAt)}</td>
            )}
            {columns.includes("sla") && (
              <td className={cn(
                "px-4 py-3.5 text-xs font-semibold",
                !c.slaDaysRemaining ? "text-grey"
                  : c.slaDaysRemaining === 1 ? "text-danger"
                  : c.slaDaysRemaining <= 3 ? "text-warning"
                  : "text-success",
              )}>
                {c.slaDaysRemaining ? `${c.slaDaysRemaining}d left` : "—"}
              </td>
            )}
            {columns.includes("actions") && (
              <td className="px-4 py-3.5">
                <a
                  href={onOpen ? onOpen(c.id) : "#"}
                  className="text-[11px] font-semibold text-navy no-underline px-2.5 py-1 bg-muted rounded"
                >
                  Open →
                </a>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
