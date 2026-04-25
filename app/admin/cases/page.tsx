"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CaseTable } from "@/components/cases/CaseTable";
import { AdminSidebar } from "@/components/layout/AdminSidebar";
import { useCases } from "@/hooks/useCases";
import { cn } from "@/lib/utils";
import type { CaseStatus } from "@/types/case";

const filters: { label: string; status: CaseStatus | "all" }[] = [
  { label: "All Status",          status: "all"        },
  { label: "Submitted",           status: "submitted"  },
  { label: "Under Review",        status: "review"     },
  { label: "Action Required",     status: "action"     },
  { label: "In Progress",         status: "progress"   },
  { label: "Completed",           status: "complete"   },
  { label: "Report Issued",       status: "issued"     },
];

export default function AdminCasesPage() {
  const [activeStatus, setActiveStatus] = useState<CaseStatus | "all">("all");
  const { data, loading } = useCases({ status: activeStatus, perPage: 10 });

  return (
    <div className="flex min-h-screen font-sans">
      <AdminSidebar active="All Cases" />

      <div className="flex-1 overflow-auto bg-canvas">
        <header className="bg-surface border-b border-muted px-8 flex items-center justify-between" style={{ height: 60 }}>
          <div>
            <h1 className="font-display text-xl font-bold text-navy">All Cases</h1>
            <p className="text-[11px] text-grey">{data?.meta.total ?? 0} total cases · 38 active</p>
          </div>
          <Button variant="admin" size="md">Export CSV</Button>
        </header>

        <div className="px-8 py-6">
          <Card className="mb-5">
            <div className="px-5 py-4 flex items-center gap-3 flex-wrap">
              <div className="flex-1 min-w-[200px] flex items-center gap-2 bg-canvas rounded-lg px-3 py-2 border border-border">
                <span className="text-sm">🔍</span>
                <input
                  placeholder="Search by case number, name, or service..."
                  className="border-none bg-transparent text-[13px] text-ink outline-none flex-1"
                />
              </div>
              {filters.map((f) => {
                const isActive = f.status === activeStatus;
                return (
                  <button
                    key={f.label}
                    onClick={() => setActiveStatus(f.status)}
                    className={cn(
                      "px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer",
                      isActive
                        ? "bg-navy text-gold border-none"
                        : "bg-muted text-sub border border-border",
                    )}
                  >
                    {f.label}
                  </button>
                );
              })}
              <button className="px-3.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer bg-muted text-sub border border-border">
                ⚡ SLA Risk
              </button>
            </div>
          </Card>

          <Card>
            {loading ? (
              <div className="p-6 text-sm text-grey">Loading cases…</div>
            ) : (
              <>
                <CaseTable
                  cases={data?.data ?? []}
                  columns={["caseNumber", "applicant", "type", "service", "status", "submitted", "sla", "actions"]}
                  onOpen={() => "/admin/cases/detail"}
                />

                <div className="px-5 py-3.5 border-t border-muted flex justify-between items-center">
                  <span className="text-xs text-grey">
                    Showing {data?.data.length ?? 0} of {data?.meta.total ?? 0} cases
                  </span>
                  <div className="flex gap-1">
                    {["←", "1", "2", "3", "...", "25", "→"].map((p) => {
                      const active = p === "1";
                      return (
                        <button
                          key={p}
                          className={cn(
                            "w-7 h-7 rounded-md border text-xs cursor-pointer",
                            active ? "bg-navy text-gold border-navy font-bold" : "bg-surface text-sub border-border",
                          )}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
