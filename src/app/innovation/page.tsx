import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { innovation } from "@/content/site";
import { 
  Beaker, 
  Award, 
  Lightbulb, 
  Target, 
  Rocket,
  CheckCircle,
  BarChart3,
  Brain,
  Cpu,
  Droplets
} from "lucide-react";

export default function InnovationPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Section 
        title={innovation.title}
        subtitle="특허 포트폴리오와 R&D 센터로 미래 기술을 선도합니다"
      >
        <Reveal>
          <div className="text-center">
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              에코사는 지속적인 연구개발을 통해 세계 최고 수준의 친환경 위생 기술을 개발하고 있습니다. 
              다수의 특허 기술과 인증을 바탕으로 혁신을 이어가겠습니다.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* R&D Center */}
      <Section id="rd-center" title={innovation.rdCenter.title}>
        <div className="space-y-12">
          {/* 연구 분야 */}
          <div className="grid lg:grid-cols-3 gap-8">
            {innovation.rdCenter.areas.map((area, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-cyan-400/30 mb-4 flex items-center justify-center">
                    {area.name === "소재 개발" && <Beaker className="text-cyan-400" />}
                    {area.name === "유체 역학" && <Droplets className="text-blue-400" />}
                    {area.name === "IoT 융합" && <Cpu className="text-purple-400" />}
                  </div>
                  <h3 className="font-bold text-xl mb-4">{area.name}</h3>
                  <div className="space-y-2">
                    {area.focus.map((focus, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 mt-2 flex-shrink-0"></div>
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* R&D 성과 */}
          <Reveal>
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
              <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <BarChart3 className="text-green-400" />
                R&D 성과
              </h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 rounded-xl border border-white/10 bg-white/5">
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {innovation.rdCenter.achievements.patents.registered}
                  </div>
                  <div className="text-sm text-foreground/70 mb-1">등록 특허</div>
                  <div className="text-xs text-green-400">
                    출원 {innovation.rdCenter.achievements.patents.applied}건
                  </div>
                </div>
                
                <div className="text-center p-6 rounded-xl border border-white/10 bg-white/5">
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {innovation.rdCenter.achievements.designs.registered}
                  </div>
                  <div className="text-sm text-foreground/70">디자인 등록</div>
                </div>
                
                <div className="text-center p-6 rounded-xl border border-white/10 bg-white/5">
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {innovation.rdCenter.achievements.trademarks.registered}
                  </div>
                  <div className="text-sm text-foreground/70">상표 등록</div>
                </div>
                
                <div className="text-center p-6 rounded-xl border border-white/10 bg-white/5">
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {innovation.rdCenter.achievements.papers.published}
                  </div>
                  <div className="text-sm text-foreground/70">논문 발표</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 핵심 특허 기술 */}
      <Section id="patents" title="핵심 특허 포트폴리오">
        <div className="grid lg:grid-cols-3 gap-8">
          {innovation.patents.map((patent, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 group hover:bg-white/10 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center">
                    <Award className="text-yellow-400" />
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">등록</span>
                </div>
                
                <h3 className="font-bold text-lg mb-2 text-gradient">특허 {patent.number}</h3>
                <h4 className="font-semibold mb-3">{patent.title}</h4>
                <p className="text-sm text-foreground/70 mb-4">{patent.description}</p>
                
                <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <div className="text-sm font-medium text-cyan-400">효과</div>
                  <div className="text-sm">{patent.effect}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 기술 비교 분석표 */}
      <Section id="comparison" title="기술 비교 분석" subtitle="에코사 기술 vs 기존 기술">
        <Reveal>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                  {innovation.comparisonTable.headers.map((header, i) => (
                    <th key={i} className={`p-4 text-left font-bold ${
                      i === 1 ? 'text-cyan-400' : 'text-foreground'
                    }`}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {innovation.comparisonTable.rows.map((row, i) => (
                  <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className={`p-4 text-sm ${
                        j === 0 ? 'font-medium text-foreground' : 
                        j === 1 ? 'font-medium text-cyan-400 bg-cyan-500/5' : 
                        'text-foreground/80'
                      }`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      {/* 특허 인증 배너 - 무한 스크롤 */}
      <div className="py-20 bg-gradient-to-r from-cyan-900/20 via-blue-900/15 to-purple-900/20 border-y border-white/10">
        <Reveal>
          <h3 className="text-4xl font-bold text-center mb-12">특허 및 인증 포트폴리오</h3>
        </Reveal>
        <div className="scroll-container">
          <div className="scroll-content scroll-horizontal">
            {/* 이미지를 두 번 반복하여 끊김 없는 무한 스크롤 효과 */}
            <Image
              src="/products/certifications-banner.png"
              alt="에코사 특허 및 인증"
              width={6000}
              height={600}
              className="h-[448px] w-auto object-contain opacity-100"
              priority
            />
            <Image
              src="/products/certifications-banner.png"
              alt="에코사 특허 및 인증"
              width={6000}
              height={600}
              className="h-[448px] w-auto object-contain opacity-100"
              priority
            />
          </div>
        </div>
      </div>

      {/* 인증 현황 */}
      <Section id="certifications" title="인증 현황" subtitle="신뢰할 수 있는 기술력 검증">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {innovation.certifications.map((cert, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-center group hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-full bg-green-400/20 border border-green-400/30 mx-auto mb-3 flex items-center justify-center">
                  <Award size={20} className="text-green-400" />
                </div>
                <div className="text-sm font-medium group-hover:text-gradient transition-colors">
                  {cert}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 미래 기술 로드맵 */}
      <Section id="roadmap" title="미래 기술 로드맵" subtitle="지속적인 혁신으로 미래를 준비합니다">
        <div className="space-y-12">
          {Object.entries(innovation.roadmap).map(([key, phase], i) => {
            const colors = [
              { bg: "from-green-500/10 to-emerald-500/10", icon: "text-green-400", border: "border-green-500/20" },
              { bg: "from-blue-500/10 to-cyan-500/10", icon: "text-blue-400", border: "border-blue-500/20" },
              { bg: "from-purple-500/10 to-violet-500/10", icon: "text-purple-400", border: "border-purple-500/20" }
            ];
            const color = colors[i % colors.length];
            
            return (
              <Reveal key={key} delay={i * 0.2}>
                <div className={`p-8 rounded-2xl border ${color.border} bg-gradient-to-br ${color.bg}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      {key === "shortTerm" && <Target className={color.icon} size={24} />}
                      {key === "mediumTerm" && <Lightbulb className={color.icon} size={24} />}
                      {key === "longTerm" && <Rocket className={color.icon} size={24} />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">
                        {key === "shortTerm" && "단기 목표"}
                        {key === "mediumTerm" && "중기 목표"}
                        {key === "longTerm" && "장기 비전"}
                      </h3>
                      <p className="text-lg text-foreground/70">{phase.period}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {phase.goals.map((goal, j) => (
                      <div key={j} className="p-4 rounded-xl border border-white/10 bg-white/5">
                        <div className="flex items-start gap-2">
                          <CheckCircle size={16} className={`${color.icon} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm">{goal}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Innovation CTA */}
      <Section id="innovation-cta" title="기술 협력" subtitle="함께 혁신을 만들어갑니다">
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal>
            <a href="/contact?type=partnership" className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all block text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-cyan-400/30 mx-auto mb-4 flex items-center justify-center">
                <Brain className="text-cyan-400" size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-gradient transition-colors">기술 제휴</h4>
              <p className="text-sm text-foreground/70">공동 연구개발 및 기술 협력</p>
            </a>
          </Reveal>
          
          <Reveal delay={0.1}>
            <a href="/contact?type=licensing" className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all block text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/20 border border-green-400/30 mx-auto mb-4 flex items-center justify-center">
                <Award className="text-green-400" size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-gradient transition-colors">특허 라이센싱</h4>
              <p className="text-sm text-foreground/70">특허 기술 라이센스 문의</p>
            </a>
          </Reveal>
          
          <Reveal delay={0.2}>
            <a href="/contact?type=consultation" className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all block text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400/20 to-violet-400/20 border border-purple-400/30 mx-auto mb-4 flex items-center justify-center">
                <Lightbulb className="text-purple-400" size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-gradient transition-colors">기술 컨설팅</h4>
              <p className="text-sm text-foreground/70">전문가 기술 자문 서비스</p>
            </a>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}