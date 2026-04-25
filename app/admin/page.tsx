"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { CaseTable } from "@/components/cases/CaseTable";
import { AdminSidebar } from "@/components/layout/AdminSidebar";
import { SLAMonitor } from "@/components/admin/SLAMonitor";
import { StatsGrid } from "@/components/admin/StatsGrid";
import { useCases } from "@/hooks/useCases";

const stats = [
  { label: "Total Cases",         value: 247, delta: "+12 this week",     icon: "📁", color: "navy"    as const },
  { label: "Active Cases",        value: 38,  delta: "6 overdue SLA",     icon: "⚡", color: "warning" as const },
  { label: "Awaiting Docs",       value: 9,   delta: "Needs attention",   icon: "📎", color: "danger"  as const },
  { label: "Reports This Month",  value: 34,  delta: "+8 vs last month",  icon: "✅", color: "success" as const },
];

const slaRows = [
  { label: "Overdue",       count: 2,  color: "danger"  as const, pct: 5  },
  { label: "Due Today",     count: 4,  color: "warning" as const, pct: 10 },
  { label: "Due This Week", count: 12, color: "info"    as const, pct: 32 },
  { label: "On Track",      count: 20, color: "success" as const, pct: 53 },
];

export default function AdminDashboard() {
  const { data, loading } = useCases({ perPage: 5 });

  return (
    <div className="flex min-h-screen font-sans">
      <AdminSidebar active="Dashboard" />

      <div className="flex-1 flex flex-col overflow-auto">
        <header className="bg-surface border-b border-muted px-8 h-15 flex items-center justify-between flex-shrink-0" style={{ height: 60 }}>
          <div>
            <h1 className="font-display text-xl font-bold text-navy">Admin Dashboard</h1>
            <p className="text-[11px] text-grey">Wednesday, 23 April 2025</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center cursor-pointer">
                <span className="text-base">🔔</span>
              </div>
              <div className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full border-2 border-surface" />
            </div>
            <Button variant="admin" size="md">+ Create Case</Button>
          </div>
        </header>

        <div className="px-8 py-7 bg-canvas flex-1">
          <StatsGrid stats={stats} />

          <div className="grid grid-cols-[2fr_1fr] gap-5 items-start">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Recent Cases</CardTitle>
                  <div className="text-[11px] text-grey">Latest submissions requiring review</div>
                </div>
                <a href="/admin/cases" className="text-xs text-gold font-semibold no-underline">View All →</a>
              </CardHeader>
              {loading ? (
                <div className="p-6 text-sm text-grey">Loading…</div>
              ) : (
                <CaseTable
                  cases={data?.data ?? []}
                  columns={["caseNumber", "applicant", "service", "status", "sla", "actions"]}
                  onOpen={() => "/admin/cases/detail"}
                />
              )}
            </Card>

            <div className="flex flex-col gap-5">
              <SLAMonitor rows={slaRows} />

              <div className="bg-navy rounded-xl p-5 border border-navy-mid">
                <div className="text-[13px] font-semibold text-gold mb-3.5">Quick Actions</div>
                {[
                  { label: "Review Pending Cases",     count: "5 new" },
                  { label: "Send Re-upload Requests",  count: "3 pending" },
                  { label: "Generate Reports",         count: "2 ready" },
                ].map((action, i, arr) => (
                  <button
                    key={action.label}
                    className={
                      "w-full flex justify-between items-center bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 cursor-pointer " +
                      (i < arr.length - 1 ? "mb-2" : "")
                    }
                  >
                    <span className="text-xs text-white/75 font-medium">{action.label}</span>
                    <span className="text-[11px] text-gold font-semibold">{action.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
