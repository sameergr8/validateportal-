"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardBody } from "@/components/ui/Card";
import { CaseTable } from "@/components/cases/CaseTable";
import { PageHeader } from "@/components/layout/PageHeader";
import { UserNavbar } from "@/components/layout/UserNavbar";
import { useCases } from "@/hooks/useCases";

const stats = [
  { label: "Total Applications", value: "4", sub: "All time",                  icon: "📋", color: "navy" as const },
  { label: "Active Cases",       value: "3", sub: "In progress",               icon: "⚡", color: "navy" as const },
  { label: "Reports Ready",      value: "1", sub: "Available to download",     icon: "✅", color: "success" as const },
  { label: "Action Required",    value: "1", sub: "Needs your attention",      icon: "⚠️", color: "danger" as const },
];

const colorMap = {
  navy:    "text-navy",
  success: "text-success",
  danger:  "text-danger",
};

const dotMap = {
  navy:    "bg-navy",
  success: "bg-success",
  danger:  "bg-danger",
};

export default function DashboardPage() {
  const { data, loading } = useCases({ forUser: "self", perPage: 4 });

  return (
    <div className="min-h-screen bg-canvas font-sans">
      <UserNavbar
        active="Dashboard"
        showNotifications
        user={{ initials: "AK", fullName: "Ahmed K.", accountTypeLabel: "Individual Account" }}
      />

      <PageHeader
        title="My Dashboard"
        subtitle="Welcome back, Ahmed. Here's the status of your verification requests."
        actions={
          <a
            href="/apply"
            className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded-lg text-[13px] font-bold no-underline tracking-wide"
          >
            <span className="text-base">+</span> New Verification Request
          </a>
        }
      />

      <div className="max-w-[1200px] mx-auto px-10 py-8">
        <div className="grid grid-cols-4 gap-5 mb-8">
          {stats.map((s) => (
            <Card key={s.label}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3.5">
                  <div className="text-[22px]">{s.icon}</div>
                  <div className={`w-2 h-2 rounded-full mt-1 ${dotMap[s.color]}`} />
                </div>
                <div className={`font-display text-[32px] font-bold mb-1 ${colorMap[s.color]}`}>{s.value}</div>
                <div className="text-[13px] font-semibold text-ink mb-0.5">{s.label}</div>
                <div className="text-[11px] text-grey">{s.sub}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-danger-bg border-[1.5px] border-danger-border rounded-xl px-5 py-4 mb-7 flex items-center gap-3.5">
          <div className="w-9 h-9 bg-danger rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-base">⚠️</span>
          </div>
          <div className="flex-1">
            <div className="text-[13px] font-semibold text-danger mb-0.5">
              Action Required — Case VG-2025-00055
            </div>
            <div className="text-xs text-danger/80">
              Validate Group has requested additional documents for your Due Diligence case. Please upload the missing items to avoid delays.
            </div>
          </div>
          <Button variant="danger" size="md">Upload Now</Button>
        </div>

        <div className="grid grid-cols-[2fr_1fr] gap-6">
          <Card>
            <CardHeader>
              <div>
                <CardTitle className="text-[15px]">My Verification Cases</CardTitle>
                <div className="text-xs text-grey">All active and completed applications</div>
              </div>
              <a href="#" className="text-xs text-gold font-semibold no-underline">View All →</a>
            </CardHeader>
            {loading ? (
              <div className="p-6 text-sm text-grey">Loading cases…</div>
            ) : (
              <CaseTable cases={data?.data ?? []} />
            )}
          </Card>

          <div className="flex flex-col gap-5">
            <div className="bg-navy rounded-xl p-6 border border-navy-mid">
              <div className="w-10 h-10 bg-gold/15 border border-gold/30 rounded-lg flex items-center justify-center mb-3.5">
                <span className="text-lg">📄</span>
              </div>
              <div className="text-sm font-semibold text-white mb-1.5">Report Ready</div>
              <div className="text-xs text-white/50 mb-4 leading-relaxed">
                Your Degree &amp; Certificate Verification report (VG-2025-00047) is available for download.
              </div>
              <Button fullWidth size="md">Download PDF Report</Button>
            </div>

            <Card>
              <CardBody>
                <div className="text-[13px] font-semibold text-navy mb-3">Need Assistance?</div>
                {[
                  { icon: "📧", label: "Email Support", sub: "sales@validategroup.com" },
                  { icon: "📞", label: "Call Us",       sub: "+971 55 460 1791" },
                  { icon: "📍", label: "Dubai Office",  sub: "Sheikh Zayed Road" },
                ].map((it, i, arr) => (
                  <div
                    key={it.label}
                    className={
                      "flex items-center gap-2.5 " +
                      (i < arr.length - 1 ? "mb-3 pb-3 border-b border-muted" : "")
                    }
                  >
                    <span className="text-base">{it.icon}</span>
                    <div>
                      <div className="text-xs font-semibold text-navy">{it.label}</div>
                      <div className="text-[11px] text-grey">{it.sub}</div>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
