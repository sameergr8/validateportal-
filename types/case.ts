import type { ServiceTypeId, UploadedDocument } from "./document";

// Case lifecycle states from CLAUDE.md.
export type CaseStatus =
  | "submitted"
  | "review"
  | "action"
  | "progress"
  | "complete"
  | "issued";

export type TimelineEventType = "system" | "admin" | "request" | "user";

export interface CaseTimelineEvent {
  id: string;
  caseId: string;
  type: TimelineEventType;
  event: string;
  user: string;
  timestamp: string;
}

export interface PaymentInfo {
  status: "unpaid" | "paid" | "refunded";
  amount: number;
  currency: "AED" | "USD";
  method: string | null;
  paidAt: string | null;
  reference: string | null;
}

export interface Case {
  id: string;
  caseNumber: string;          // e.g. VG-2025-00057
  applicantUserId: string;
  applicantName: string;
  applicantType: "Individual" | "Employer";
  serviceType: ServiceTypeId;
  serviceLabel: string;        // human-readable, denormalised for table views
  status: CaseStatus;
  payment: PaymentInfo;
  loaSignedAt: string | null;
  documents: UploadedDocument[];
  timeline: CaseTimelineEvent[];
  submittedAt: string;
  updatedAt: string;
  slaDueAt: string | null;
  slaDaysRemaining: number | null;
  flagged: boolean;
  reportUrl: string | null;
  reportNumber: string | null;
}

// Lighter shape for list views — what /api/cases returns.
export type CaseSummary = Pick<
  Case,
  | "id"
  | "caseNumber"
  | "applicantName"
  | "applicantType"
  | "serviceLabel"
  | "status"
  | "submittedAt"
  | "updatedAt"
  | "slaDaysRemaining"
  | "flagged"
>;

export interface CreateCaseInput {
  serviceType: ServiceTypeId;
  applicantDetails: Record<string, string>;
}

export interface UpdateCaseStatusInput {
  caseId: string;
  status: CaseStatus;
  internalNote?: string;
}
