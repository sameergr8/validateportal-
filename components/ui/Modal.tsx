"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className={cn("bg-surface rounded-xl shadow-xl w-full max-w-lg overflow-hidden", className)}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="px-5 py-4 border-b border-muted flex items-center justify-between">
            <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
            <button
              onClick={onClose}
              className="text-grey hover:text-ink text-xl leading-none cursor-pointer"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        )}
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
