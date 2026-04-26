"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/layout/PageHeader";
import { UserNavbar } from "@/components/layout/UserNavbar";
import { api } from "@/lib/api";
import { cn } from "@/lib/utils";
import type { ServiceType, ServiceTypeId } from "@/types/document";

const steps = [
  { num: "1", label: "Select Document Type" },
  { num: "2", label: "Fill Details" },
  { num: "3", label: "Upload Documents" },
  { num: "4", label: "Sign LOA" },
  { num: "5", label: "Payment & Submit" },
];

export default function ApplyPage() {
  const [services, setServices] = useState<ServiceType[]>([]);
  const [selected, setSelected] = useState<ServiceTypeId>("degree");

  useEffect(() => {
    api.listServices().then(setServices);
  }, []);

  const selectedSvc = services.find((s) => s.id === selected);

  return (
    <div className="min-h-screen bg-canvas font-sans">
      <UserNavbar
        active="New Application"
        user={{ initials: "AK", fullName: "", accountTypeLabel: "" }}
      />

      <PageHeader
        title="Select Document Type for Verification"
        subtitle="Choose the type of document you need verified. You can select multiple types — each will generate a separate case with a unique reference number."
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "New Verification Request" },
        ]}
      />

      <div className="max-w-[1200px] mx-auto px-10 py-8">
        {/* progress steps */}
        <Card className="mb-8">
          <div className="px-8 py-5 flex items-center">
            {steps.map((step, i) => {
              const active = i === 0;
              return (
                <div key={i} className="flex-1 flex items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className={cn(
                      "w-8 h-8 rounded-full border-2 flex items-center justify-center",
                      active ? "bg-navy border-gold" : "bg-muted border-border",
                    )}>
                      <span className={cn("text-xs font-bold", active ? "text-gold" : "text-grey")}>{step.num}</span>
                    </div>
                    <span className={cn(
                      "text-[11px] whitespace-nowrap",
                      active ? "font-semibold text-navy" : "text-grey",
                    )}>
                      {step.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={cn("flex-1 h-px mb-4.5", active ? "bg-gold" : "bg-muted")} />
                  )}
                </div>
              );
            })}
          </div>
        </Card>

        <div className="grid grid-cols-[1fr_340px] gap-7 items-start">
          <div>
            <div className="mb-5">
              <div className="text-[13px] font-semibold text-navy mb-1">Available Verification Types</div>
              <div className="text-xs text-grey">
                Select the document types you need verified. Validate Group will contact the issuing authority directly to confirm authenticity.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {services.map((svc) => {
                const isSelected = svc.id === selected;
                return (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => setSelected(svc.id)}
                    className={cn(
                      "bg-surface rounded-xl p-5 text-left cursor-pointer relative border-[1.5px]",
                      isSelected ? "border-navy border-2 shadow-[0_4px_20px_rgba(30,58,95,0.12)]" : "border-border shadow-[0_2px_8px_rgba(30,58,95,0.04)]",
                    )}
                  >
                    {isSelected && (
                      <div className="absolute top-3 right-3 w-5 h-5 bg-navy rounded-full flex items-center justify-center">
                        <span className="text-[11px] text-gold">✓</span>
                      </div>
                    )}
                    <div className="text-[26px] mb-3">{svc.icon}</div>
                    <div className="text-sm font-semibold text-navy mb-1.5">{svc.title}</div>
                    <div className="text-xs text-sub leading-relaxed mb-3.5">{svc.description}</div>
                    <div className="mb-3.5">
                      <div className="text-[10px] font-semibold text-grey tracking-wider uppercase mb-1.5">Documents Required</div>
                      {svc.requiredDocuments.map((d) => (
                        <div key={d} className="text-[11px] text-sub mb-0.5 flex gap-1.5">
                          <span className="text-gold flex-shrink-0">•</span>{d}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-muted">
                      <div className="text-[11px] text-grey">⏱ Est. {svc.estimatedTurnaround}</div>
                      <div className={cn("text-[11px] font-semibold", isSelected ? "text-navy" : "text-grey")}>
                        {isSelected ? "✓ Selected" : "Click to select"}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Summary sidebar */}
          <div className="sticky top-6 flex flex-col gap-4">
            <Card>
              <div className="bg-navy px-5 py-4">
                <div className="text-[13px] font-semibold text-gold">Selected Verification Types</div>
                <div className="text-[11px] text-white/45 mt-0.5">1 type selected</div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-[13px] font-semibold text-navy">{selectedSvc?.title ?? "—"}</div>
                    <div className="text-[11px] text-grey mt-0.5">Est. {selectedSvc?.estimatedTurnaround} working days</div>
                  </div>
                  <button className="bg-transparent border-none text-danger cursor-pointer text-lg leading-none">×</button>
                </div>
                <div className="bg-muted rounded-md px-3 py-2.5">
                  <div className="text-[11px] font-semibold text-navy mb-1.5">Required Documents:</div>
                  {(selectedSvc?.requiredDocuments ?? []).map((d) => (
                    <div key={d} className="text-[11px] text-sub mb-0.5">• {d}</div>
                  ))}
                </div>
              </div>
            </Card>

            <div className="bg-muted rounded-xl px-4 py-3.5 border border-border">
              <div className="text-[11px] font-semibold text-navy mb-1">📋 How it works</div>
              <div className="text-xs text-sub leading-relaxed">
                Validate Group will contact the issuing authority directly to confirm the authenticity of your document. No attestation or physical copies required.
              </div>
            </div>

            <Button fullWidth size="lg">Continue to Application →</Button>
            <a href="/dashboard" className="block text-center text-[13px] text-grey no-underline">← Back to Dashboard</a>
          </div>

        </div>
      </div>
    </div>
  );
}
