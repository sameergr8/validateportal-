import { Button } from "@/components/ui/Button";
import { cn, formatBytes, formatDate } from "@/lib/utils";
import type { UploadedDocument } from "@/types/document";

interface DocumentListProps {
  documents: UploadedDocument[];
  onView?: (doc: UploadedDocument) => void;
}

export function DocumentList({ documents, onView }: DocumentListProps) {
  return (
    <div className="px-5 py-4">
      {documents.map((doc) => {
        const missing = doc.status === "missing";
        return (
          <div
            key={doc.id}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg mb-2 border",
              missing ? "bg-danger-bg border-danger-border" : "bg-[#F8FAFB] border-muted",
            )}
          >
            <div className={cn(
              "w-9 h-10 rounded-md flex items-center justify-center flex-shrink-0",
              missing ? "bg-[#FDDCDC]" : "bg-muted",
            )}>
              <span className="text-base">{missing ? "❌" : "📄"}</span>
            </div>
            <div className="flex-1">
              <div className={cn("text-[13px] font-medium", missing ? "text-danger" : "text-ink")}>
                {doc.name}
              </div>
              <div className="text-[11px] text-grey">
                {missing
                  ? "Not yet uploaded — re-upload request sent"
                  : `${formatBytes(doc.sizeBytes)} · Uploaded ${formatDate(doc.uploadedAt)}`}
              </div>
            </div>
            {!missing && (
              <Button variant="secondary" size="sm" onClick={() => onView?.(doc)}>View</Button>
            )}
          </div>
        );
      })}
    </div>
  );
}
