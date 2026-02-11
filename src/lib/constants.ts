export interface NavItem {
  tKey: string;
  href: string;
}

export const navLinks: NavItem[] = [
  { tKey: "products", href: "/products" },
  { tKey: "services", href: "/services" },
  { tKey: "developers", href: "/developers" },
  { tKey: "contacts", href: "/contacts" },
];
