import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "compact" | "admin";
  className?: string;
}

// Shield icon used as the brand mark.
function ShieldMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"
        fill="#1E3A5F"
      />
    </svg>
  );
}

export function Logo({ variant = "full", className }: LogoProps) {
  const isCompact = variant === "compact";
  const isAdmin = variant === "admin";
  const iconSize = isCompact ? 16 : isAdmin ? 16 : 22;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "bg-gold rounded-md flex items-center justify-center flex-shrink-0",
          isCompact ? "w-8 h-8" : isAdmin ? "w-7 h-7" : "w-10 h-10",
        )}
      >
        <ShieldMark size={iconSize} />
      </div>
      {!isCompact && (
        <div>
          <div
            className={cn(
              "font-display font-bold leading-tight",
              isAdmin ? "text-sm text-white" : "text-xl text-white tracking-tight",
            )}
          >
            {isAdmin ? "TrueValidate" : "Validate Group"}
          </div>
          <div
            className={cn(
              "tracking-widest uppercase",
              isAdmin ? "text-[9px] text-gold" : "text-[11px] text-white/45",
            )}
          >
            {isAdmin ? "Admin Panel" : "TrueValidate Portal"}
          </div>
        </div>
      )}
    </div>
  );
}
