"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Badge } from "@/components/ui/Badge";
import { CaseTimeline } from "@/components/cases/CaseTimeline";
import { DocumentList } from "@/components/cases/DocumentList";
import { StatusBadge } from "@/components/cases/StatusBadge";
import { AdminSidebar } from "@/components/layout/AdminSidebar";
import { useCase } from "@/hooks/useCases";
import { formatDate, formatDateTime } from "@/lib/utils";

export default function CaseDetailPage() {
  const { data: c, loading } = useCase("case_57");

  return (
    <div className="flex min-h-screen font-sans">
      <AdminSidebar active="All Cases" />

      <div className="flex-1 overflow-auto bg-canvas">
        <header className="bg-surface border-b border-muted px-8 flex items-center justify-between" style={{ height: 60 }}>
          <div className="flex items-center gap-2.5">
            <a href="/admin/cases" className="text-xs text-grey no-underline">← All Cases</a>
            <span className="text-border">›</span>
            <span className="font-display text-base font-bold text-navy">
              {loading ? "Loading…" : `Case ${c?.caseNumber ?? ""}`}
            </span>
            {c && <StatusBadge status={c.status} />}
            {c?.flagged && (
              <span className="bg-danger-bg text-danger text-[10px] font-bold px-2 py-0.5 rounded">
                🚨 SLA AT RISK — {c.slaDaysRemaining ?? 0} day{c.slaDaysRemaining === 1 ? "" : "s"}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="md">Add Note</Button>
            <Button variant="admin" size="md">Update Status</Button>
          </div>
        </header>

        {!c ? (
          <div className="p-8 text-sm text-grey">Loading case…</div>
        ) : (
          <div className="px-8 py-6">
            <div className="grid grid-cols-[1fr_340px] gap-5 items-start">
              <div className="flex flex-col gap-5">
                <Card>
                  <div className="bg-navy px-5 py-3.5 flex justify-between items-center">
                    <div className="text-[13px] font-semibold text-gold">Applicant Information</div>
                    <div className="text-[11px] text-white/40">{c.applicantType} Account</div>
                  </div>
                  <div className="p-5 grid grid-cols-3 gap-4">
                    {[
                      { label: "Full Name",     value: c.applicantName },
                      { label: "Email",         value: "sarah.j@email.com" },
                      { label: "Phone",         value: "+44 7700 900123" },
                      { label: "Nationality",   value: "British" },
                      { label: "Passport No.",  value: "GB1234567" },
                      { label: "Account Since", value: "Mar 2025" },
                    ].map((f) => (
                      <div key={f.label}>
                        <div className="text-[10px] font-semibold text-grey tracking-wider uppercase mb-1">{f.label}</div>
                        <div className="text-[13px] font-medium text-ink">{f.value}</div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Case Details</CardTitle>
                    <div className="text-[11px] text-grey">Submitted {formatDate(c.submittedAt)}</div>
                  </CardHeader>
                  <div className="p-5 grid grid-cols-2 gap-4">
                    {[
                      { label: "Service Type",    value: c.serviceLabel },
                      { label: "Case Number",     value: c.caseNumber },
                      { label: "Payment Status",  value: c.payment.status === "paid" ? `Paid — AED ${c.payment.amount.toFixed(2)}` : c.payment.status },
                      { label: "Payment Method",  value: c.payment.method ?? "—" },
                      { label: "Institution",     value: "University of Edinburgh" },
                      { label: "Document Type",   value: "Bachelor's Degree — Computer Science (2019)" },
                      { label: "Graduation Year", value: "2019" },
                      { label: "LOA Signed",      value: c.loaSignedAt ? `Yes — ${formatDateTime(c.loaSignedAt)}` : "No" },
                    ].map((f) => (
                      <div key={f.label}>
                        <div className="text-[10px] font-semibold text-grey tracking-wider uppercase mb-1">{f.label}</div>
                        <div className="text-[13px] font-medium text-ink">{f.value}</div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Uploaded Documents</CardTitle>
                    <Button variant="danger" size="sm">+ Request Missing Docs</Button>
                  </CardHeader>
                  <DocumentList documents={c.documents} />
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Case Timeline</CardTitle>
                  </CardHeader>
                  <div className="p-5">
                    <CaseTimeline events={c.timeline} />
                  </div>
                </Card>
              </div>

              <div className="flex flex-col gap-4 sticky top-6">
                <Card>
                  <div className="bg-navy px-5 py-3.5">
                    <div className="text-[13px] font-semibold text-gold">Update Case Status</div>
                  </div>
                  <div className="p-5">
                    <div className="mb-3">
                      <div className="text-[11px] font-semibold text-grey tracking-wide uppercase mb-1.5">Current Status</div>
                      <StatusBadge status={c.status} />
                    </div>
                    <div className="mb-3">
                      <Select label="Set New Status">
                        <option>Under Review</option>
                        <option>Verification In Progress</option>
                        <option>Completed</option>
                        <option>Report Issued</option>
                      </Select>
                    </div>
                    <div className="mb-3.5">
                      <Textarea label="Internal Note (optional)" placeholder="Add a note for this status change..." rows={3} />
                    </div>
                    <Button variant="admin" fullWidth>Save Status Update</Button>
                  </div>
                </Card>

                <div className="bg-success-bg rounded-xl border-[1.5px] border-success-border px-5 py-4">
                  <div className="text-[13px] font-semibold text-success mb-1.5">📄 Generate Report</div>
                  <div className="text-xs text-success/80 leading-relaxed mb-3.5">
                    Once verification is complete, generate and issue the final PDF report with QR code to the applicant.
                  </div>
                  <Button variant="ghost" fullWidth disabled className="!bg-success/30 !text-success">
                    Available After Completion
                  </Button>
                </div>

                <Card>
                  <div className="p-5">
                    <div className="text-[13px] font-semibold text-navy mb-1.5">📧 Request Re-upload</div>
                    <div className="text-xs text-sub leading-relaxed mb-3">
                      Re-upload request already sent on {formatDate("2025-04-24")}. Awaiting response from applicant.
                    </div>
                    <div className="bg-gold-pale rounded-md px-3 py-2 flex gap-1.5 items-center">
                      <span className="text-xs">⏳</span>
                      <span className="text-[11px] text-warning font-medium">Link expires in 47 hours</span>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="p-5">
                    <div className="text-xs font-semibold text-navy mb-3">Case Meta</div>
                    {[
                      { label: "Opened",      value: formatDate("2025-04-24") },
                      { label: "SLA Due",     value: formatDate(c.slaDueAt), alert: true },
                      { label: "Days Active", value: "1 day" },
                      { label: "Assigned To", value: "Unassigned" },
                    ].map((m, i, arr) => (
                      <div
                        key={m.label}
                        className={
                          "flex justify-between " +
                          (i < arr.length - 1 ? "pb-2 mb-2 border-b border-muted" : "")
                        }
                      >
                        <span className="text-xs text-grey">{m.label}</span>
                        <span className={"text-xs font-semibold " + (m.alert ? "text-danger" : "text-ink")}>
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Badge tone="neutral" className="hidden">noop</Badge>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
