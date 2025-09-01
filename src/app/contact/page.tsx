"use client";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { contact } from "@/content/site";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Building, 
  Factory,
  MessageCircle,
  Users,
  Award,
  Target,
  Globe,
  Calendar,
  Send
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Section 
        title={contact.title}
        subtitle="프로젝트 상담부터 제휴 문의까지, 언제든 연락하세요"
      >
        <Reveal>
          <div className="text-center">
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              에코사는 고객의 모든 문의에 신속하고 정확하게 대응합니다. 
              전국 서비스 네트워크를 통해 최고의 서비스를 제공합니다.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 연락처 정보 */}
      <Section id="contact-info" title="연락처 정보">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 본사 */}
          <Reveal>
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-400/20 border border-blue-400/30 flex items-center justify-center">
                  <Building className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{contact.headquarters.title}</h3>
                  <p className="text-sm text-foreground/70">본사 및 영업본부</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                  <div>
                    <div className="font-medium">주소</div>
                    <div className="text-sm text-foreground/70">{contact.headquarters.address}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-400" size={16} />
                  <div>
                    <div className="font-medium">대표전화</div>
                    <div className="text-sm text-foreground/70">{contact.headquarters.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-400" size={16} />
                  <div>
                    <div className="font-medium">이메일</div>
                    <div className="text-sm text-foreground/70">{contact.headquarters.email}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="text-blue-400" size={16} />
                  <div>
                    <div className="font-medium">운영시간</div>
                    <div className="text-sm text-foreground/70">{contact.headquarters.hours}</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 공장 */}
          <Reveal delay={0.1}>
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-green-400/20 border border-green-400/30 flex items-center justify-center">
                  <Factory className="text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{contact.factory.title}</h3>
                  <p className="text-sm text-foreground/70">생산 및 품질관리</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-green-400 mt-1 flex-shrink-0" size={16} />
                  <div>
                    <div className="font-medium">주소</div>
                    <div className="text-sm text-foreground/70">{contact.factory.address}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="text-green-400" size={16} />
                  <div>
                    <div className="font-medium">전화</div>
                    <div className="text-sm text-foreground/70">{contact.factory.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-sm font-medium">FAX</span>
                  <div>
                    <div className="font-medium">팩스</div>
                    <div className="text-sm text-foreground/70">{contact.factory.fax}</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 고객센터 */}
          <Reveal delay={0.2}>
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-violet-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-400/20 border border-purple-400/30 flex items-center justify-center">
                  <MessageCircle className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{contact.customerService.title}</h3>
                  <p className="text-sm text-foreground/70">A/S 및 기술지원</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-purple-400" size={16} />
                  <div>
                    <div className="font-medium">고객센터</div>
                    <div className="text-sm text-foreground/70">{contact.customerService.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-purple-400" size={16} />
                  <div>
                    <div className="font-medium">카카오톡</div>
                    <div className="text-sm text-foreground/70">{contact.customerService.kakao}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="text-purple-400" size={16} />
                  <div>
                    <div className="font-medium">운영시간</div>
                    <div className="text-sm text-foreground/70">{contact.customerService.hours}</div>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <div className="font-medium text-red-400 mb-1">긴급상황</div>
                  <div className="text-sm">{contact.customerService.emergency}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 문의 폼 */}
      <Section id="inquiry-form" title="온라인 문의" subtitle="빠른 상담을 원하시면 온라인으로 문의하세요">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      문의 유형 <span className="text-red-400">*</span>
                    </label>
                    <select className="w-full p-3 rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none transition-colors">
                      <option>문의 유형을 선택하세요</option>
                      <option>제품 상담</option>
                      <option>견적 요청</option>
                      <option>기술 지원</option>
                      <option>A/S 신청</option>
                      <option>제휴 문의</option>
                      <option>기타</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      회사/기관명 <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="회사명을 입력하세요"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      담당자명 <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="담당자명을 입력하세요"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      직책/부서
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="직책이나 부서를 입력하세요"
                    />
                  </div>
                </div>

        <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      연락처 <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="tel" 
                      className="w-full p-3 rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="010-1234-5678"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      이메일 <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="email" 
                      className="w-full p-3 rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    관심 제품
                  </label>
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {["에코쉬 EU-01", "에코쉬 EU-04/05", "다막아", "Air Clean Care", "Dress Care", "기타"].map((product) => (
                      <label key={product} className="flex items-center gap-2 p-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <input type="checkbox" className="text-cyan-400" />
                        <span className="text-sm">{product}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    문의 내용 <span className="text-red-400">*</span>
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full p-3 rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="문의하실 내용을 자세히 입력해주세요"
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" required />
                  <label className="text-sm text-foreground/70">
                    개인정보 수집 및 이용에 동의합니다. 
                    <span className="text-red-400">*</span>
                  </label>
                </div>

                <div className="text-center">
                  <button 
                    type="submit" 
                    className="button button-primary px-12 flex items-center gap-2 mx-auto"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('문의가 성공적으로 접수되었습니다. 24시간 내에 연락드리겠습니다.');
                    }}
                  >
                    <Send size={16} />
                    문의 보내기
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 제휴 문의 */}
      <Section id="partnership" title={contact.partnership.title}>
        <div className="space-y-12">
          {/* 제휴 프로그램 */}
          <div className="grid lg:grid-cols-4 gap-6">
            {contact.partnership.programs.map((program, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <button 
                  onClick={() => {
                    const inquiryForm = document.getElementById('inquiry-form');
                    if (inquiryForm) {
                      inquiryForm.scrollIntoView({ behavior: 'smooth' });
                      // 문의 유형을 제휴 문의로 설정
                      const selectElement = inquiryForm.querySelector('select') as HTMLSelectElement;
                      if (selectElement) {
                        selectElement.value = '제휴 문의';
                      }
                    }
                  }}
                  className="p-6 rounded-xl border border-white/10 bg-white/5 text-center group hover:bg-white/10 transition-all w-full"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-cyan-400/30 mx-auto mb-4 flex items-center justify-center">
                    {i === 0 && <Users className="text-cyan-400" size={24} />}
                    {i === 1 && <Building className="text-cyan-400" size={24} />}
                    {i === 2 && <Target className="text-cyan-400" size={24} />}
                    {i === 3 && <Globe className="text-cyan-400" size={24} />}
                  </div>
                  <h4 className="font-bold text-lg mb-2 group-hover:text-gradient transition-colors">
                    {program}
                  </h4>
                  <p className="text-sm text-foreground/70">
                    {i === 0 && "전국 대리점 네트워크 구축"}
                    {i === 1 && "전문 시공업체 파트너십"}
                    {i === 2 && "공동 기술개발 협력"}
                    {i === 3 && "해외 진출 파트너"}
                  </p>
                </button>
              </Reveal>
            ))}
          </div>

          {/* 제휴 혜택 */}
          <Reveal>
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
                <Award className="text-green-400" />
                제휴 혜택
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contact.partnership.benefits.map((benefit, i) => (
                  <div key={i} className="text-center p-4 rounded-xl border border-white/10 bg-white/5">
                    <div className="w-12 h-12 rounded-full bg-green-400/20 border border-green-400/30 mx-auto mb-3 flex items-center justify-center">
                      {i === 0 && <Award className="text-green-400" size={20} />}
                      {i === 1 && <Target className="text-green-400" size={20} />}
                      {i === 2 && <Users className="text-green-400" size={20} />}
                      {i === 3 && <Calendar className="text-green-400" size={20} />}
                    </div>
                    <div className="font-semibold text-sm">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>



      {/* Quick Contact */}
      <Section id="quick-contact" title="빠른 연락" subtitle="긴급한 문의는 바로 연락하세요">
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal>
            <a href={`tel:${contact.headquarters.phone}`} className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all block text-center">
              <div className="w-16 h-16 rounded-full bg-blue-400/20 border border-blue-400/30 mx-auto mb-4 flex items-center justify-center">
                <Phone className="text-blue-400" size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-gradient transition-colors">전화 상담</h4>
              <p className="text-sm text-foreground/70 mb-2">{contact.headquarters.phone}</p>
              <p className="text-xs text-foreground/60">{contact.headquarters.hours}</p>
            </a>
          </Reveal>
          
          <Reveal delay={0.1}>
            <a href={`mailto:${contact.headquarters.email}`} className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all block text-center">
              <div className="w-16 h-16 rounded-full bg-green-400/20 border border-green-400/30 mx-auto mb-4 flex items-center justify-center">
                <Mail className="text-green-400" size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-gradient transition-colors">이메일 문의</h4>
              <p className="text-sm text-foreground/70 mb-2">{contact.headquarters.email}</p>
              <p className="text-xs text-foreground/60">24시간 접수</p>
            </a>
          </Reveal>
          
          <Reveal delay={0.2}>
            <button 
              onClick={() => {
                alert('카카오톡 @에코사로 문의해주세요!');
              }}
              className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all block text-center w-full"
            >
              <div className="w-16 h-16 rounded-full bg-purple-400/20 border border-purple-400/30 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="text-purple-400" size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-gradient transition-colors">카카오톡</h4>
              <p className="text-sm text-foreground/70 mb-2">{contact.customerService.kakao}</p>
              <p className="text-xs text-foreground/60">실시간 채팅</p>
            </button>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}