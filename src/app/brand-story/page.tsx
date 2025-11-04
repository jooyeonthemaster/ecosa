"use client";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { 
  Droplets, 
  Shield, 
  Leaf,
  Users,
  TrendingUp,
  ChevronRight,
  CheckCircle,
  Sparkles,
  Zap
} from "lucide-react";

export default function BrandStoryPage() {

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-emerald-100/10 to-transparent" />
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 text-center px-6">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">사람과 자연</span>을 위한
              <br />
              <span className="text-gradient">길</span>을 찾다
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              에코웨이의 모든 생각과 기술은 인간과 자연을 먼저 생각합니다
            </p>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="rotate-90 text-gray-400" size={32} />
        </div>
      </section>

      {/* Core Philosophy */}
      <Section title="브랜드 철학" subtitle="물 부족 문제를 해결하는 혁신적인 접근">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-8">
              <div className="text-4xl font-bold">
                <span className="text-gradient">획기적인 절수 방안</span>이
                <br />
                필요합니다
              </div>
              
                <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 shadow-md">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                    <Droplets className="text-green-600" />
                    개인 평균 1일 90L 물 사용
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-green-600">6L</div>
                    <div className="text-sm text-gray-600">(양변기)</div>
                    <div className="text-lg">+</div>
                    <div className="text-3xl font-bold text-emerald-600">2L</div>
                    <div className="text-sm text-gray-600">(소변기)</div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    1회 물 소비량 (절수형 변기 기준)
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 border border-green-200 shadow-md">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                    <TrendingUp className="text-green-600" />
                    1년 1인 평균 변기 물 사용량
                  </h3>
                  <div className="text-3xl font-bold text-green-600">30L</div>
                  <p className="text-sm text-gray-600 mt-2">
                    1회 양변기 + (6회 소변기 × 2회) = 6L + 24L
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl" />
              <div className="relative p-8 rounded-3xl border border-gray-200 bg-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">2025년 전세계 50% 물부족</h3>
                
                {/* Population Visualization */}
                <div className="space-y-8">
                  <div>
                    <div className="text-sm text-gray-600 mb-3">2000년도 - 8% 물부족</div>
                    <div className="flex gap-1">
                      {[...Array(10)].map((_, i) => (
                        <div key={i} className={`w-8 h-12 rounded ${i === 0 ? 'bg-red-500' : 'bg-green-200'}`} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600 mb-3">2025년도 - 50% 물부족</div>
                    <div className="flex gap-1">
                      {[...Array(10)].map((_, i) => (
                        <div key={i} className={`w-8 h-12 rounded ${i < 5 ? 'bg-red-500' : 'bg-green-200'}`} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-xl bg-yellow-50 border border-yellow-200">
                  <p className="text-center font-medium text-gray-700">
                    수질오염과 무분별한 물 사용으로
                    <br />
                    <span className="text-yellow-700 font-bold">2025년 전세계 50% 수인성 질병 노출</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Product Innovation */}
      <Section title="혁신 기술" subtitle="특허받은 기술로 완성한 친환경 솔루션">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 사회적 문제 */}
          <Reveal>
            <div className="h-full p-8 rounded-2xl border border-gray-200 bg-white shadow-md">
              <div className="w-16 h-16 rounded-full bg-green-100 border border-green-200 mb-6 flex items-center justify-center">
                <Users className="text-green-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">사회적 문제</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-purple-400 mt-1" size={16} />
                  <div>
                    <div className="font-medium">물 부족</div>
                    <div className="text-sm text-foreground/70">전 세계적 물 부족 위기</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-purple-400 mt-1" size={16} />
                  <div>
                    <div className="font-medium">화장실 위생</div>
                    <div className="text-sm text-foreground/70">공중화장실 위생 문제</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-purple-400 mt-1" size={16} />
                  <div>
                    <div className="font-medium">규제 강화</div>
                    <div className="text-sm text-foreground/70">환경 규제 강화 추세</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 기술적 대안 */}
          <Reveal delay={0.1}>
            <div className="h-full p-8 rounded-2xl border border-gray-200 bg-white shadow-md">
              <div className="w-16 h-16 rounded-full bg-green-100 border border-green-200 mb-6 flex items-center justify-center">
                <Zap className="text-green-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">기술적 대안</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 mt-1" size={16} />
                  <div>
                    <div className="font-medium">PMMA 소재</div>
                    <div className="text-sm text-foreground/70">항균, 내구성 우수</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 mt-1" size={16} />
                  <div>
                    <div className="font-medium">매직 밸브</div>
                    <div className="text-sm text-foreground/70">특허받은 밀폐 기술</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-400 mt-1" size={16} />
                  <div>
                    <div className="font-medium">친수 코팅</div>
                    <div className="text-sm text-foreground/70">자가 세척 효과</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 개발 배경 */}
          <Reveal delay={0.2}>
            <div className="h-full p-8 rounded-2xl border border-gray-200 bg-white shadow-md">
              <div className="w-16 h-16 rounded-full bg-green-100 border border-green-200 mb-6 flex items-center justify-center">
                <Leaf className="text-green-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">개발 배경</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1" size={16} />
                  <div>
                    <div className="font-medium">물 부족 해결</div>
                    <div className="text-sm text-foreground/70">100% 물 절약</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1" size={16} />
                  <div>
                    <div className="font-medium">위생 개선</div>
                    <div className="text-sm text-foreground/70">악취 원천 차단</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 mt-1" size={16} />
                  <div>
                    <div className="font-medium">경제성</div>
                    <div className="text-sm text-foreground/70">유지비 90% 절감</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Core Technology */}
      <Section title="핵심 기술" subtitle="특허받은 기술력으로 완성한 혁신">
        <div className="space-y-16">
          {/* Magic Valve Technology */}
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gradient">매직 밸브 기술</h3>
                <p className="text-lg text-foreground/80 mb-8">
                  냄새 차단의 핵심인 특허기술 (특허 10-1166553, 1597321)로
                  소변이 배수구를 통해 매직 밸브를 거쳐 내부의 실리콘 트랩을 통과하여
                  배수관으로 내려가고 마지막 한 방울의 소변이 통과하면 실리콘 트랩의
                  판이 엑체의 장력에 의해 자동으로 폐쇄되어 소변냄새 및 기타 악취 등의
                  역류를 완벽하게 차단합니다.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <h4 className="font-bold mb-2">교체주기: 1년</h4>
                    <p className="text-sm text-gray-600">
                      물청소, 전용 세정제 사용가능<br />
                      소변 배출 후 밸브 자동 폐쇄
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                    <h4 className="font-bold mb-2 text-green-600">정맥판막의 원리 적용</h4>
                    <p className="text-sm text-gray-600">
                      정맥의 내벽에 있는 혈액의 역류를 막는 역할을 하는 반달 모양의 판막.
                      혈액을 한방향으로만 흐르게 함.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-4 flex items-center justify-center">
                      <div className="text-center">
                        <Shield className="text-cyan-400 mx-auto mb-2" size={32} />
                        <div className="text-xs text-foreground/70">Step {i}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Hydrophilic Coating */}
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <h4 className="font-bold mb-4">일반 도기변기</h4>
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 p-8 flex items-center justify-center">
                      <div>
                        <Droplets className="text-red-400 mx-auto mb-3" size={40} />
                        <div className="text-sm text-foreground/70">물방울 형성</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="font-bold mb-4">에코웨이 친수 코팅</h4>
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-8 flex items-center justify-center">
                      <div>
                        <Sparkles className="text-cyan-400 mx-auto mb-3" size={40} />
                        <div className="text-sm text-foreground/70">막 형성</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold mb-6 text-gradient">친수(親水) 코팅 기술</h3>
                <p className="text-lg text-foreground/80 mb-8">
                  절수와 위생을 위해 친수(親水)코팅 기술을 적용하였습니다.
                  에코웨이 소변기에는 친수(Hydrophilic)코팅 기술을 적용하여
                  잔뇨가 남아있지 않으며, 미량의 물로도 청소가 가능합니다.
                </p>
                
                <div className="p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="text-green-400" size={20} />
                    친수 코팅의 효과
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2" />
                      <span>소변이 도기 표면에 잔류하지 않음</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2" />
                      <span>Yellow Stain 발생 억제</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2" />
                      <span>청소 주기 연장 및 관리 편의성</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Product Comparison */}
      <Section title="제품 비교" subtitle="공중화장실 위생문제의 완벽한 해결">
        <div className="space-y-12">
          <Reveal>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                    <th className="p-4 text-left font-bold border-b border-white/10">구분</th>
                    <th className="p-4 text-left font-bold border-b border-white/10 text-cyan-400">에코웨이 무수소변기</th>
                    <th className="p-4 text-left font-bold border-b border-white/10">일반 소변기</th>
                    <th className="p-4 text-left font-bold border-b border-white/10">공중화장실</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-4 font-medium">악취 문제</td>
                    <td className="p-4 text-cyan-400">
                      <CheckCircle className="inline mr-2" size={16} />
                      악취 원천 차단
                    </td>
                    <td className="p-4 text-foreground/70">변색과 악취 발생</td>
                    <td className="p-4 text-foreground/70">심각한 악취</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-4 font-medium">물 사용량</td>
                    <td className="p-4 text-cyan-400">
                      <CheckCircle className="inline mr-2" size={16} />
                      100% 절수 (0L)
                    </td>
                    <td className="p-4 text-foreground/70">1회 2L</td>
                    <td className="p-4 text-foreground/70">1회 2-4L</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-4 font-medium">위생 상태</td>
                    <td className="p-4 text-cyan-400">
                      <CheckCircle className="inline mr-2" size={16} />
                      항균 PMMA 소재
                    </td>
                    <td className="p-4 text-foreground/70">도기 변색</td>
                    <td className="p-4 text-foreground/70">비위생적</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-4 font-medium">유지보수</td>
                    <td className="p-4 text-cyan-400">
                      <CheckCircle className="inline mr-2" size={16} />
                      연 1-2회
                    </td>
                    <td className="p-4 text-foreground/70">일일 청소 필수</td>
                    <td className="p-4 text-foreground/70">수시 점검</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Statistics */}
          <Reveal delay={0.2}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                <div className="text-5xl font-bold text-gradient mb-3">669배</div>
                <div className="text-lg font-medium mb-2">공중화장실 세균</div>
                <div className="text-sm text-foreground/70">일반 화장실 대비</div>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <div className="text-5xl font-bold text-gradient mb-3">300배</div>
                <div className="text-lg font-medium mb-2">일반지역 대비</div>
                <div className="text-sm text-foreground/70">공중화장실 세균 농도</div>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20">
                <div className="text-5xl font-bold text-gradient mb-3">500배</div>
                <div className="text-lg font-medium mb-2">공업지역 대비</div>
                <div className="text-sm text-foreground/70">공중화장실 세균 농도</div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20" />
              <div className="relative p-12 md:p-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  미래를 위한 <span className="text-gradient">선택</span>
                </h2>
                <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
                  에코웨이와 함께 지속가능한 미래를 만들어가세요
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/products" className="button button-primary text-lg px-8 py-3">
                    제품 둘러보기
                  </a>
                  <a href="/contact" className="button button-secondary text-lg px-8 py-3">
                    문의하기
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}