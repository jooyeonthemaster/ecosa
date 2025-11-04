import { footer, contact } from "@/content/site";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-gray-200 mt-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gradient">ECOSA</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>{footer.company.name}</p>
              <p>{footer.company.ceo}</p>
              <p>{footer.company.businessNumber}</p>
              <p>{footer.company.address}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">연락처</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-green-600" />
                <a href={`tel:${contact.headquarters.phone}`} className="hover:text-green-600 transition-colors">
                  {contact.headquarters.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-green-600" />
                <a href={`mailto:${contact.headquarters.email}`} className="hover:text-green-600 transition-colors">
                  {contact.headquarters.email}
                </a>
              </div>
              <p className="text-xs">{contact.headquarters.hours}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">바로가기</h3>
            <nav className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <a href="/company" className="hover:text-green-600 transition-colors">회사소개</a>
              <a href="/products" className="hover:text-green-600 transition-colors">제품소개</a>
              <a href="/cases" className="hover:text-green-600 transition-colors">설치사례</a>
              <a href="/support" className="hover:text-green-600 transition-colors">고객지원</a>
              <a href="/contact" className="hover:text-green-600 transition-colors">Contact Us</a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ECOSA. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:text-green-600 transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-green-600 transition-colors">이용약관</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
