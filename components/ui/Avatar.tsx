import { cn } from "@/lib/utils";

interface AvatarProps {
  initials: string;
  size?: "sm" | "md" | "lg";
  variant?: "gold" | "navy";
  className?: string;
}

const sizeClasses = {
  sm: "w-7 h-7 text-[11px]",
  md: "w-9 h-9 text-xs",
  lg: "w-12 h-12 text-sm",
};

const variantClasses = {
  gold: "bg-gold text-navy",
  navy: "bg-navy text-gold",
};

export function Avatar({ initials, size = "md", variant = "gold", className }: AvatarProps) {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center font-bold flex-shrink-0",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      {initials}
    </div>
  );
}
