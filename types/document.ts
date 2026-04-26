// Verification service catalogue + uploaded document model.

export type ServiceTypeId =
  | "degree"
  | "employment"
  | "license"
  | "identity"
  | "goodstanding"
  | "experience";

export interface ServiceType {
  id: ServiceTypeId;
  icon: string;
  title: string;
  description: string;
  requiredDocuments: string[];
  estimatedTurnaround: string;
  slaDays: { min: number; max: number };
}

export type DocumentStatus = "pending" | "uploaded" | "missing" | "rejected";

export interface UploadedDocument {
  id: string;
  caseId: string;
  name: string;
  fileName: string;
  mimeType: string;
  sizeBytes: number;
  status: DocumentStatus;
  uploadedAt: string | null;
  s3Key: string | null;
}
