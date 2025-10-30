"use client";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { support } from "@/content/site";
import {
  Headphones,
  HelpCircle,
  FileText,
  Phone,
  MessageCircle,
  Clock
} from "lucide-react";

export default function SupportPage() {
  return (
    <main className="pt-20">
      <Section 
        title={support.title}
        subtitle="전문적인 고객 서비스로 최상의 경험을 제공합니다"
      >
        <Reveal>
          <div className="text-center">
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              24시간 온라인 접수부터 전문가 상담까지, 에코사는 고객의 모든 요청에 
              신속하고 정확하게 대응합니다.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* A/S 서비스 */}
      <Section id="as-service" title={support.services.as.title}>
        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Headphones className="text-blue-400" />
                  접수 채널
                </h3>
                <div className="space-y-4">
                  {support.services.as.channels.map((channel, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-lg border border-white/10 bg-white/5">
                      <div className="w-10 h-10 rounded-full bg-blue-400/20 border border-blue-400/30 flex items-center justify-center">
                        {channel.type === "온라인" && <FileText className="text-blue-400" size={20} />}
                        {channel.type === "전화" && <Phone className="text-blue-400" size={20} />}
                        {channel.type === "카카오톡" && <MessageCircle className="text-blue-400" size={20} />}
                      </div>
                      <div>
                        <div className="font-semibold">{channel.type}</div>
                        <div className="text-sm text-foreground/70">{channel.info}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Clock className="text-green-400" />
                  처리 시간
                </h3>
                <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="text-3xl font-bold text-gradient mb-2">24시간</div>
                  <div className="text-sm text-foreground/70">{support.services.as.responseTime}</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h3 className="text-xl font-bold mb-6">A/S 신청 폼</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none"
                    placeholder="회사명"
                  />
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none"
                    placeholder="담당자명"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input 
                    type="tel" 
                    className="w-full p-3 rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none"
                    placeholder="연락처"
                  />
                  <input 
                    type="email" 
                    className="w-full p-3 rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none"
                    placeholder="이메일"
                  />
                </div>
                <select className="w-full p-3 rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none">
                  <option>제품 선택</option>
                  <option>에코쉬 EU-01</option>
                  <option>에코쉬 EU-04/05</option>
                  <option>다막아</option>
                </select>
                <textarea 
                  rows={4}
                  className="w-full p-3 rounded-lg border border-white/20 bg-white/5 focus:border-cyan-400 focus:outline-none resize-none"
                  placeholder="문제 상황을 설명해주세요"
                />
                <button type="submit" className="button button-primary w-full">
                  A/S 신청하기
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="자주 묻는 질문">
        <div className="space-y-6">
          {support.faq.map((faq, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <div className="flex items-start gap-4">
                  <HelpCircle className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-gradient">
                      Q. {faq.question}
                    </h4>
                    <p className="text-foreground/80">
                      A. {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

    </main>
  );
}


