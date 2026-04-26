import { Avatar } from "@/components/ui/Avatar";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: string;
  label: string;
  href: string;
  badge?: string;
}

const items: NavItem[] = [
  { icon: "📊", label: "Dashboard",       href: "/admin" },
  { icon: "📋", label: "All Cases",       href: "/admin/cases" },
  { icon: "⚠️",  label: "Requires Action", href: "#", badge: "9" },
  { icon: "👥", label: "User Accounts",   href: "#" },
  { icon: "📈", label: "Reports & SLA",   href: "#" },
  { icon: "🔒", label: "Audit Log",       href: "#" },
  { icon: "⚙️",  label: "Settings",        href: "#" },
];

interface AdminSidebarProps {
  active?: NavItem["label"];
}

export function AdminSidebar({ active = "Dashboard" }: AdminSidebarProps) {
  return (
    <aside className="w-60 bg-navy-dark flex flex-col flex-shrink-0">
      <div className="px-5 py-6 border-b border-white/10">
        <Logo variant="admin" />
      </div>

      <nav className="py-4 flex-1">
        {items.map((it) => {
          const isActive = it.label === active;
          return (
            <a
              key={it.label}
              href={it.href}
              className={cn(
                "flex items-center gap-2.5 px-5 py-2.5 text-[13px]",
                isActive
                  ? "text-gold bg-gold/10 border-l-[3px] border-gold font-semibold"
                  : "text-white/55 border-l-[3px] border-transparent hover:text-white",
              )}
            >
              <span>{it.icon}</span>
              <span className="flex-1">{it.label}</span>
              {it.badge && (
                <span className="bg-danger text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {it.badge}
                </span>
              )}
            </a>
          );
        })}
      </nav>

      <div className="px-5 py-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          <Avatar initials="SA" size="sm" variant="gold" />
          <div>
            <div className="text-xs font-semibold text-white">System Admin</div>
            <div className="text-[10px] text-white/35">Full Access</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
