"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  
  const navItems = [
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
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-md bg-background/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          ECOSA
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              prefetch={false} 
              href={item.href} 
              className={`hover:opacity-80 transition-all relative ${
                isActive(item.href) 
                  ? "text-cyan-400 font-medium" 
                  : "text-foreground"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
              )}
            </Link>
          ))}
          <Link 
            prefetch={false} 
            href="/contact" 
            className={`rounded-full px-4 py-2 transition-all ${
              isActive("/contact")
                ? "bg-cyan-400 text-white font-medium"
                : "text-background bg-foreground hover:bg-foreground/90"
            }`}
          >
            문의하기
          </Link>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center size-10 rounded-full border border-white/15 text-foreground/80">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
