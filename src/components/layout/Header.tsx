"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  
  const navItems = [
    { href: "/brand-story", label: "Brand Story" },
    { href: "/company", label: "회사소개" },
    { href: "/products", label: "제품소개" },
    { href: "/innovation", label: "기술혁신" },
    { href: "/cases", label: "설치사례" },
    { href: "/support", label: "고객지원" }
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/contact" && pathname === "/contact") return true;
    return pathname.startsWith(href) && href !== "/" && href !== "/contact";
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-md bg-white/95 border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-green-600">
          ECOSA
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              prefetch={false} 
              href={item.href} 
              className={`hover:text-green-600 transition-all relative ${
                isActive(item.href) 
                  ? "text-green-600 font-medium" 
                  : "text-foreground"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 rounded-full" />
              )}
            </Link>
          ))}
          <Link 
            prefetch={false} 
            href="/contact" 
            className={`rounded-full px-4 py-2 transition-all ${
              isActive("/contact")
                ? "bg-green-600 text-white font-medium"
                : "button button-primary"
            }`}
          >
            문의하기
          </Link>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center size-10 rounded-full border border-gray-300 text-foreground hover:bg-green-50">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
