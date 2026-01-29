import { Home, FileEdit, LucideIcon } from "lucide-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export function useNavigationItems() {
  const navigationItems: NavigationItem[] = [
    {
      title: "Home",
      href: "/",
      icon: Home,
    },
    {
      title: "Editor",
      href: "/editor",
      icon: FileEdit,
    },
  ];

  return { navigationItems };
}
