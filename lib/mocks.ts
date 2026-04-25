// Seed data used by lib/api.ts when NEXT_PUBLIC_USE_MOCKS=true.
// Shapes here MUST match types in /types so the contract stays honest.

import type { Case, CaseSummary } from "@/types/case";
import type { ServiceType } from "@/types/document";
import type { AdminUser, IndividualUser, EmployerUser } from "@/types/user";

export const mockServices: ServiceType[] = [
  {
    id: "degree",
    icon: "🎓",
    title: "Academic Degree & Certificate",
    description: "Verification of university degrees, diplomas, and academic certificates directly with the awarding institution.",
    requiredDocuments: ["Degree / Certificate (clear scan)", "Official transcript", "Passport copy"],
    estimatedTurnaround: "15–25 days",
    slaDays: { min: 15, max: 25 },
  },
  {
    id: "employment",
    icon: "🏢",
    title: "Employment History Verification",
    description: "Confirmation of job titles, dates of employment, and work history directly with previous employers.",
    requiredDocuments: ["Experience letters", "Employment contracts (if available)", "Passport copy", "Updated CV"],
    estimatedTurnaround: "10–20 days",
    slaDays: { min: 10, max: 20 },
  },
  {
    id: "license",
    icon: "📜",
    title: "Professional License Verification",
    description: "Authentication of professional practice licences, trade licences, and regulatory certifications with the issuing authority.",
    requiredDocuments: ["Professional licence copy", "Issuing authority details", "Passport copy"],
    estimatedTurnaround: "12–22 days",
    slaDays: { min: 12, max: 22 },
  },
  {
    id: "identity",
    icon: "🪪",
    title: "Identity Document Verification",
    description: "Verification of passports, national ID cards, and government-issued identity documents with issuing authorities.",
    requiredDocuments: ["Passport / National ID (clear scan)", "Supporting identity documents"],
    estimatedTurnaround: "5–10 days",
    slaDays: { min: 5, max: 10 },
  },
  {
    id: "goodstanding",
    icon: "✅",
    title: "Good Standing Certificate",
    description: "Confirmation that a professional is in good standing with their licensing board or regulatory body in their home country.",
    requiredDocuments: ["Good standing certificate", "Licensing body details", "Passport copy"],
    estimatedTurnaround: "15–30 days",
    slaDays: { min: 15, max: 30 },
  },
  {
    id: "experience",
    icon: "📋",
    title: "Reference & Experience Letter",
    description: "Direct verification of reference letters and experience certificates with the issuing employer or institution.",
    requiredDocuments: ["Reference / experience letter", "Employer contact details", "Passport copy"],
    estimatedTurnaround: "10–18 days",
    slaDays: { min: 10, max: 18 },
  },
];

export const mockIndividual: IndividualUser = {
  id: "user_individual_1",
  email: "individual@test.com",
  fullName: "Ahmed Khalil",
  accountType: "individual",
  emailVerifiedAt: "2025-03-12T09:00:00Z",
  createdAt: "2025-03-12T09:00:00Z",
  updatedAt: "2025-04-23T11:02:00Z",
  phone: "+971 55 123 4567",
  nationality: "Emirati",
  passportNumber: "AE9988776",
  emiratesId: "784-1990-1234567-8",
  uaePassLinked: false,
};

export const mockEmployer: EmployerUser = {
  id: "user_employer_1",
  email: "employer@test.com",
  fullName: "TechCorp Admin",
  accountType: "employer",
  emailVerifiedAt: "2025-02-01T10:00:00Z",
  createdAt: "2025-02-01T10:00:00Z",
  updatedAt: "2025-04-19T08:00:00Z",
  companyName: "TechCorp LLC",
  tradeLicense: "DED-CN-1234567",
  contactPerson: "Sarah Khan",
  phone: "+971 4 200 3000",
};

export const mockAdmin: AdminUser = {
  id: "user_admin_1",
  email: "admin@test.com",
  fullName: "System Admin",
  accountType: "admin",
  emailVerifiedAt: "2025-01-01T00:00:00Z",
  createdAt: "2025-01-01T00:00:00Z",
  updatedAt: "2025-04-23T00:00:00Z",
  role: "super_admin",
};

// Light-weight summaries for table views (matches the rows shown in existing screens).
export const mockCaseSummaries: CaseSummary[] = [
  { id: "case_58", caseNumber: "VG-2025-00058", applicantName: "Omar Al Rashidi", applicantType: "Individual", serviceLabel: "Employment History Verification", status: "review",    submittedAt: "2025-04-24", updatedAt: "2025-04-24", slaDaysRemaining: 3, flagged: false },
  { id: "case_57", caseNumber: "VG-2025-00057", applicantName: "Sarah Johnson",     applicantType: "Individual", serviceLabel: "Degree & Certificate Verification", status: "action",   submittedAt: "2025-04-23", updatedAt: "2025-04-24", slaDaysRemaining: 1, flagged: true  },
  { id: "case_56", caseNumber: "VG-2025-00056", applicantName: "Raj Patel",          applicantType: "Individual", serviceLabel: "Professional Licence Verification", status: "progress", submittedAt: "2025-04-22", updatedAt: "2025-04-23", slaDaysRemaining: 8, flagged: false },
  { id: "case_55", caseNumber: "VG-2025-00055", applicantName: "Fatima Al Zaabi",    applicantType: "Individual", serviceLabel: "Identity Document Verification",    status: "submitted",submittedAt: "2025-04-22", updatedAt: "2025-04-22", slaDaysRemaining: 5, flagged: false },
  { id: "case_54", caseNumber: "VG-2025-00054", applicantName: "Chen Wei",           applicantType: "Individual", serviceLabel: "Good Standing Certificate",         status: "complete", submittedAt: "2025-04-20", updatedAt: "2025-04-21", slaDaysRemaining: 0, flagged: false },
  { id: "case_53", caseNumber: "VG-2025-00053", applicantName: "TechCorp LLC",       applicantType: "Employer",   serviceLabel: "Employment Verification ×12",       status: "progress", submittedAt: "2025-04-19", updatedAt: "2025-04-22", slaDaysRemaining: 6, flagged: false },
  { id: "case_52", caseNumber: "VG-2025-00052", applicantName: "GlobalHire Ltd",     applicantType: "Employer",   serviceLabel: "Degree Verification ×5",            status: "issued",   submittedAt: "2025-04-15", updatedAt: "2025-04-19", slaDaysRemaining: 0, flagged: false },
  { id: "case_51", caseNumber: "VG-2025-00051", applicantName: "Ahmed Khalil",       applicantType: "Individual", serviceLabel: "Employment History Verification",   status: "progress", submittedAt: "2025-04-20", updatedAt: "2025-04-24", slaDaysRemaining: 4, flagged: false },
  { id: "case_50", caseNumber: "VG-2025-00050", applicantName: "Maria Santos",       applicantType: "Individual", serviceLabel: "Degree & Certificate Verification", status: "action",   submittedAt: "2025-04-19", updatedAt: "2025-04-22", slaDaysRemaining: 0, flagged: true  },
  { id: "case_49", caseNumber: "VG-2025-00049", applicantName: "BuildCo Dubai",      applicantType: "Employer",   serviceLabel: "Identity Verification ×8",          status: "issued",   submittedAt: "2025-04-17", updatedAt: "2025-04-18", slaDaysRemaining: 0, flagged: false },
  { id: "case_47", caseNumber: "VG-2025-00047", applicantName: "Ahmed Khalil",       applicantType: "Individual", serviceLabel: "Degree & Certificate Verification", status: "issued",   submittedAt: "2025-04-18", updatedAt: "2025-04-22", slaDaysRemaining: 0, flagged: false },
];

// Full case detail for VG-2025-00057 (Sarah Johnson) — used by /admin/cases/[id]
export const mockCaseDetail: Case = {
  id: "case_57",
  caseNumber: "VG-2025-00057",
  applicantUserId: "user_individual_2",
  applicantName: "Sarah Johnson",
  applicantType: "Individual",
  serviceType: "degree",
  serviceLabel: "Degree & Certificate Verification",
  status: "action",
  payment: {
    status: "paid",
    amount: 450,
    currency: "AED",
    method: "Telr (Visa ****4521)",
    paidAt: "2025-04-23T09:15:00Z",
    reference: "TLR-7841992",
  },
  loaSignedAt: "2025-04-23T11:02:00Z",
  documents: [
    { id: "doc_1", caseId: "case_57", name: "Passport Copy",          fileName: "passport.pdf",   mimeType: "application/pdf",  sizeBytes: 1_258_000, status: "uploaded", uploadedAt: "2025-04-23T11:00:00Z", s3Key: "cases/case_57/passport.pdf" },
    { id: "doc_2", caseId: "case_57", name: "Degree Certificate",     fileName: "",               mimeType: "",                  sizeBytes: 0,         status: "missing",  uploadedAt: null,                    s3Key: null },
    { id: "doc_3", caseId: "case_57", name: "Transcript",             fileName: "transcript.pdf", mimeType: "application/pdf",  sizeBytes:   843_000, status: "uploaded", uploadedAt: "2025-04-23T11:01:00Z", s3Key: "cases/case_57/transcript.pdf" },
    { id: "doc_4", caseId: "case_57", name: "University Contact Info",fileName: "uoe-contact.pdf",mimeType: "application/pdf",  sizeBytes:   122_000, status: "uploaded", uploadedAt: "2025-04-23T11:01:30Z", s3Key: "cases/case_57/uoe-contact.pdf" },
  ],
  timeline: [
    { id: "tl_1", caseId: "case_57", type: "system",  event: "Case submitted by applicant",                                                                                       user: "System",          timestamp: "2025-04-24T09:14:00Z" },
    { id: "tl_2", caseId: "case_57", type: "system",  event: "Payment confirmed (AED 450.00)",                                                                                    user: "Payment Gateway", timestamp: "2025-04-24T09:15:00Z" },
    { id: "tl_3", caseId: "case_57", type: "admin",   event: "Case opened for review",                                                                                            user: "Admin",           timestamp: "2025-04-24T10:30:00Z" },
    { id: "tl_4", caseId: "case_57", type: "request", event: "Additional documents requested — Passport copy (clear scan) and Original degree certificate",                       user: "Admin",           timestamp: "2025-04-24T11:45:00Z" },
    { id: "tl_5", caseId: "case_57", type: "system",  event: "Re-upload link sent to applicant via email",                                                                        user: "System",          timestamp: "2025-04-24T14:22:00Z" },
  ],
  submittedAt: "2025-04-23T09:14:00Z",
  updatedAt:   "2025-04-24T14:22:00Z",
  slaDueAt:    "2025-04-25T00:00:00Z",
  slaDaysRemaining: 1,
  flagged: true,
  reportUrl: null,
  reportNumber: null,
};

export const mockStats = {
  totalCases: 247,
  activeCases: 38,
  awaitingDocs: 9,
  reportsThisMonth: 34,
  overdue: 2,
  dueToday: 4,
  dueThisWeek: 12,
  onTrack: 20,
};
