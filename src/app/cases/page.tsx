import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { installationCases } from "@/content/site";
import { 
  Award, 
  Building, 
  Users, 
  GraduationCap, 
  MapPin,
  TrendingUp,
  BarChart3,
  Globe,
  Star,
  CheckCircle
} from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function CasesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Section 
        title={installationCases.title}
        subtitle="정부/공공기관부터 글로벌 진출까지 검증된 성공 사례"
        variant="hero"
      >
        <Reveal>
          <div className="text-center">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              청와대, 평창올림픽을 비롯해 다양한 분야의 주요 기관들이 에코사를 선택했습니다. 
              실제 설치 사례와 고객 만족도를 확인해보세요.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 카테고리별 설치 사례 */}
      {Object.entries(installationCases.categories).map(([key, category]) => {
        const icons = {
          government: <Award className="text-blue-600" size={24} />,
          commercial: <Building className="text-green-600" size={24} />,
          parks: <MapPin className="text-purple-400" size={24} />,
          education: <GraduationCap className="text-orange-400" size={24} />
        };
        
        return (
          <Section key={key} id={key} title={category.title}>
            <div className="space-y-8">
              {/* Featured Cases */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.cases.slice(0, 6).map((case_, j) => (
                  <Reveal key={j} delay={j * 0.1}>
                    <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:bg-white/10 transition-all group">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                          {icons[key as keyof typeof icons]}
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-lg mb-2 group-hover:text-gradient transition-colors">
                        {case_.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{case_.description}</p>
                      
                      {/* Case Details */}
                      {(('quantity' in case_ && case_.quantity) || ('savings' in case_ && case_.savings) || ('highlight' in case_ && case_.highlight)) ? (
                        <div className="space-y-2 text-xs">
                          {('quantity' in case_ && case_.quantity) ? (
                            <div className="flex items-center justify-between p-2 rounded bg-white shadow-sm">
                              <span>설치 대수:</span>
                              <span className="font-medium text-green-600">{(case_ as any).quantity}대</span>
                            </div>
                          ) : null}
                          {('savings' in case_ && case_.savings) ? (
                            <div className="flex items-center justify-between p-2 rounded bg-white shadow-sm">
                              <span>절감 효과:</span>
                              <span className="font-medium text-green-600">{(case_ as any).savings}</span>
                            </div>
                          ) : null}
                          {('highlight' in case_ && case_.highlight) ? (
                            <div className="p-2 rounded bg-yellow-500/10 border border-yellow-500/20">
                              <span className="text-yellow-400 font-medium">특징: </span>
                              <span className="text-sm">{(case_ as any).highlight}</span>
                            </div>
                          ) : null}
                          {('testimonial' in case_ && case_.testimonial) ? (
                            <div className="p-2 rounded bg-blue-500/10 border border-blue-500/20">
                              <span className="text-blue-600 font-medium">평가: </span>
                              <span className="text-sm italic">&ldquo;{(case_ as any).testimonial}&rdquo;</span>
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                      
                      {/* Locations for grouped cases */}
                      {('locations' in case_ && case_.locations) ? (
                        <div className="mt-4">
                          <div className="text-xs text-gray-600 mb-2">주요 위치:</div>
                          <div className="flex flex-wrap gap-1">
                            {(case_ as any).locations.map((location: string, k: number) => (
                              <span key={k} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-700">
                                {location}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      {/* 고객 후기 */}
      <Section id="testimonials" title="고객 후기" subtitle="현장의 생생한 목소리">
        <div className="grid lg:grid-cols-3 gap-8">
          {installationCases.testimonials.map((testimonial, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-cyan-400/30 flex items-center justify-center">
                    <Users className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-sm text-gray-700 italic leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 산업별 적용 현황 */}
      <Section id="industry-stats" title="산업별 적용 현황" subtitle="다양한 분야에서 검증된 성과">
        <div className="grid lg:grid-cols-3 gap-8">
          <Reveal>
            <div className="p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-orange-500/10 to-amber-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-orange-400/20 border border-orange-400/30 flex items-center justify-center">
                  <GraduationCap className="text-orange-400" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">교육 시설</h3>
                  <p className="text-sm text-gray-600">학교 및 교육기관</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white shadow-sm">
                  <div className="text-sm font-medium text-orange-400 mb-2">주요 설치 사례</div>
                  <div className="text-sm">삼괴고등학교, 가평 예원 어린이집</div>
                </div>
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="text-sm font-medium text-green-600">효과</div>
                  <div className="text-sm">{installationCases.industryStats.education.description}</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-red-500/10 to-pink-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-red-400/20 border border-red-400/30 flex items-center justify-center">
                  <Award className="text-red-400" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">의료 시설</h3>
                  <p className="text-sm text-gray-600">병원 및 의료기관</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white shadow-sm">
                  <div className="text-sm font-medium text-red-400 mb-2">적용 분야</div>
                  <div className="text-sm">종합병원, 의료센터 등</div>
                </div>
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="text-sm font-medium text-green-600">효과</div>
                  <div className="text-sm">{installationCases.industryStats.medical.description}</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-green-400/20 border border-green-400/30 flex items-center justify-center">
                  <Building className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">상업 시설</h3>
                  <p className="text-sm text-gray-600">매장 및 상업공간</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white shadow-sm">
                  <div className="text-sm font-medium text-green-600 mb-2">주요 설치 사례</div>
                  <div className="text-sm">홈플러스, 코레일, 부산해운대 센텀누리</div>
                </div>
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="text-sm font-medium text-blue-600">효과</div>
                  <div className="text-sm">{installationCases.industryStats.commercial.description}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 글로벌 진출 계획 */}
      <Section id="global-expansion" title="글로벌 진출 계획" subtitle="K-친환경 기술의 세계 진출을 준비하고 있습니다">
        <Reveal>
          <div className="text-center p-12 rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
            <Globe className="text-green-600 mx-auto mb-6" size={64} />
            <h3 className="text-2xl font-bold mb-4">해외 진출 준비 중</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              에코사는 검증된 국내 기술력을 바탕으로 아시아, 유럽, 중동 등 
              전 세계 시장 진출을 적극 추진하고 있습니다.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                <h4 className="font-semibold mb-2">기술 검증 완료</h4>
                <p className="text-sm text-gray-600">국내 주요 기관 성공 사례</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                <h4 className="font-semibold mb-2">국제 인증 준비</h4>
                <p className="text-sm text-gray-600">해외 진출을 위한 인증 획득</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                <h4 className="font-semibold mb-2">파트너십 구축</h4>
                <p className="text-sm text-gray-600">현지 파트너와 협력 체계</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 성과 요약 */}
      <Section id="summary" title="에코사 성과 요약" subtitle="검증된 기술력과 신뢰할 수 있는 실적">
        <Reveal>
          <div className="p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-cyan-400/30 mx-auto mb-4 flex items-center justify-center">
                  <Award className="text-green-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">8건</div>
                <div className="text-sm text-gray-600">등록 특허</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/20 border border-green-400/30 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">12건</div>
                <div className="text-sm text-gray-600">디자인 등록</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400/20 to-violet-400/20 border border-purple-400/30 mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="text-purple-400" size={24} />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">주요</div>
                <div className="text-sm text-gray-600">기관 선택</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400/20 to-amber-400/20 border border-orange-400/30 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="text-orange-400" size={24} />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">검증</div>
                <div className="text-sm text-gray-600">기술력</div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section id="cases-cta" title="당신의 공간도 에코사와 함께" subtitle="성공 사례에 동참하세요">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reveal>
            <a href="/contact?type=consultation" className="group p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:bg-white/10 transition-all block text-center">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-gradient transition-colors">사업 제안</h4>
              <p className="text-sm text-gray-600">대규모 프로젝트 상담</p>
            </a>
          </Reveal>
          
          <Reveal delay={0.1}>
            <a href="/contact?type=site-visit" className="group p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:bg-white/10 transition-all block text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-gradient transition-colors">현장 방문</h4>
              <p className="text-sm text-gray-600">설치 사례 견학</p>
            </a>
          </Reveal>
          
          <Reveal delay={0.2}>
            <a href="/contact?type=partnership" className="group p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:bg-white/10 transition-all block text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-gradient transition-colors">파트너십</h4>
              <p className="text-sm text-gray-600">대리점 및 제휴</p>
            </a>
          </Reveal>
          
          <Reveal delay={0.3}>
            <a href="/support#downloads" className="group p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:bg-white/10 transition-all block text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-gradient transition-colors">성과 리포트</h4>
              <p className="text-sm text-gray-600">상세 성과 자료</p>
            </a>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}