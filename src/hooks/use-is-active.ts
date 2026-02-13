"use client";

import { usePathname } from "@/i18n/navigation";

export function useActiveNavLink() {
  const pathname = usePathname();

  return (href: string) => pathname === href || pathname.startsWith(href + "/");
}
