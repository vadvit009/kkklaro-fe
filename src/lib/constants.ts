export interface NavItem {
  /** Translation key inside "header.nav" namespace */
  tKey: string;
  /** Route path or hash anchor */
  href: string;
}

/** Main desktop navigation links */
export const navLinks: NavItem[] = [
  { tKey: "products", href: "/#products" },
  { tKey: "services", href: "/services" },
  { tKey: "developers", href: "/#developers" },
  { tKey: "contacts", href: "/#contacts" },
];

/** Mobile menu navigation (anchor links to sections) */
export const mobileNavLinks: NavItem[] = [
  { tKey: "networks", href: "/#networks" },
  { tKey: "howItWorks", href: "/#steps" },
  { tKey: "faq", href: "/#faq" },
];
