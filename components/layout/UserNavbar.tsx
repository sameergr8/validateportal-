import { Avatar } from "@/components/ui/Avatar";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface UserNavbarProps {
  active?: NavItem["label"];
  user?: { initials: string; fullName: string; accountTypeLabel: string };
  showNotifications?: boolean;
}

const items: NavItem[] = [
  { label: "Dashboard",        href: "/dashboard" },
  { label: "My Cases",         href: "#" },
  { label: "New Application",  href: "/apply" },
  { label: "Documents",        href: "#" },
];

export function UserNavbar({ active = "Dashboard", user, showNotifications }: UserNavbarProps) {
  return (
    <nav className="bg-navy border-b-[3px] border-gold px-10">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-16">
        <Logo variant="compact" />
        <div className="flex items-center gap-2">
          {items.map((it) => {
            const isActive = it.label === active;
            return (
              <a
                key={it.label}
                href={it.href}
                className={cn(
                  "px-3.5 py-2 rounded-md text-sm font-medium",
                  isActive ? "text-gold bg-gold/10" : "text-white/60 hover:text-white",
                )}
              >
                {it.label}
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          {showNotifications && (
            <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-sm">🔔</span>
            </div>
          )}
          {user && (
            <div className="flex items-center gap-2">
              <Avatar initials={user.initials} size="md" variant="gold" />
              <div>
                <div className="text-xs font-semibold text-white">{user.fullName}</div>
                <div className="text-[10px] text-white/40">{user.accountTypeLabel}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
