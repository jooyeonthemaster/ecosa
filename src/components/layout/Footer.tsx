export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-foreground/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} ECOSA. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:opacity-80">개인정보처리방침</a>
          <a href="#" className="hover:opacity-80">이용약관</a>
        </nav>
      </div>
    </footer>
  );
}
