import Image from "next/image";
import Hero from "@/components/hero/Hero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { coreValues, products, installationCases, innovation, cta } from "@/content/site";
import { Calculator, CheckCircle, Users, Award, TrendingUp, Zap } from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Core Values Section */}
      <div className="bg-slate-900/20 border-y border-white/5">
        <Section 
          id="values" 
          title={coreValues.title}
          subtitle="물 보존 · 위생과 건강 · 경제성으로 지속가능한 미래 구현"
        >
        <div className="grid lg:grid-cols-3 gap-8">
          {coreValues.items.map((value, i) => (
            <Reveal key={value.id} delay={i * 0.2}>
              <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:from-white/10 hover:to-white/5 transition-all duration-500">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-lg font-semibold text-gradient mb-4">{value.headline}</p>
                
                {value.id === "water-conservation" && value.stats && (
                  <div className="space-y-3 mb-4">
                    {value.stats.map((stat, j) => (
                      <div key={j} className="flex justify-between items-center p-3 rounded-xl bg-white/5">
                        <span className="text-sm font-medium">{stat.year}</span>
                        <span className="text-sm">{stat.label}</span>
                        <span className="text-sm font-bold text-cyan-400">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {value.id === "hygiene-health" && value.comparison && typeof value.comparison === 'object' && (
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                      <div className="text-xs font-medium text-red-400 mb-1">Before</div>
                      <div className="text-sm">{value.comparison.before}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                      <div className="text-xs font-medium text-green-400 mb-1">After</div>
                      <div className="text-sm">{value.comparison.after}</div>
                    </div>
                  </div>
                )}

                {value.id === "cost-efficiency" && (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calculator size={16} className="text-yellow-400" />
                      <span className="text-sm font-medium">ROI 계산기</span>
                    </div>
                    <div className="text-xs text-foreground/70">설치 규모에 따른 정확한 절감액을 확인하세요</div>
                  </div>
                )}

                <div className="space-y-2">
                  {(value.contributions || value.certifications || []).map((item, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      </div>

      {/* Products Portfolio Section */}
      <div className="bg-gradient-to-b from-transparent via-slate-900/5 to-transparent">
        <Section 
          id="products" 
          title={products.title}
          subtitle="혁신적인 특허 기술로 물 절약과 위생을 동시에"
        >
        <div className="space-y-16">
          {/* 에코쉬 무수소변기 */}
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gradient">{products.ecosh.title}</h3>
                <p className="text-lg text-foreground/80 mb-6">{products.ecosh.description}</p>
                
                {/* 4 ZERO 기술 섹션 - 설명 바로 아래로 이동 */}
                <div className="mb-6 p-6 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
                  <div className="text-2xl font-bold text-gradient mb-4">4 ZERO 기술</div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">💧</span>
                      <span>Water Zero</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🚫</span>
                      <span>Odor Zero</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">⚡</span>
                      <span>Energy Zero</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">💰</span>
                      <span>Cost Zero</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {products.ecosh.models.map((model, i) => (
                    <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/5">
                      <h4 className="font-semibold text-cyan-400 mb-2">{model.model}</h4>
                      <div className="text-sm text-foreground/70 mb-2">{model.type}</div>
                      <div className="space-y-1 text-xs">
                        <div>규격: {model.specs.dimensions}</div>
                        <div>무게: {model.specs.weight}</div>
                        <div>재질: {model.specs.material}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="/products#ecosh" className="button button-primary">상세 정보</a>
                  <a href="/contact" className="button button-secondary">견적 문의</a>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 overflow-hidden">
                  <Image
                    src="/products/ecosh-models.png"
                    alt="에코쉬 무수소변기 모델 EU-01, EU-04, EU-05"
                    width={800}
                    height={400}
                    className="w-full h-auto object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* 다막아 하수구트랩 */}
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-green-500/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-emerald-400 mb-4">다막아</div>
                    <div className="text-sm text-foreground/70 mb-4">특허 10-2323048호</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span>심장판막 원리</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span>일체형 실리콘</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span>Y형 배수 시스템</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold mb-4 text-gradient">{products.damaga.title}</h3>
                <p className="text-lg text-foreground/80 mb-6">{products.damaga.description}</p>
                
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 mb-6">
                  <h4 className="font-semibold mb-4">핵심 기술</h4>
                  <div className="space-y-3">
                    {products.damaga.coreTechnology.slice(0, 3).map((tech, i) => (
                      <div key={i}>
                        <div className="font-medium text-emerald-400 mb-1">{tech.name}</div>
                        <div className="text-sm text-foreground/70">{tech.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="/products#damaga" className="button button-primary">성능 확인</a>
                  <a href="/contact?sample=damaga" className="button button-secondary">무료 샘플</a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Air Clean Care & Dress Care */}
          <Reveal>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4 text-gradient">Air Clean Care & Dress Care</h3>
              <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                실내 공기 정화와 의류 케어의 새로운 기준
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-purple-500/10">
                  <h4 className="text-2xl font-bold text-violet-400 mb-4">Air Clean Care</h4>
                  <div className="space-y-3 text-sm">
                    {products.airCleanCare.functions.airPurification.map((func, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Zap size={16} className="text-violet-400" />
                        <span>{func}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                  <h4 className="text-2xl font-bold text-purple-400 mb-4">Dress Care</h4>
                  <div className="space-y-3 text-sm">
                    {products.dressCare.functions.sterilization.map((func, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Zap size={16} className="text-purple-400" />
                        <span>{func}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="/products#air-clean" className="button button-primary">카탈로그 보기</a>
              </div>
            </div>
          </Reveal>
        </div>
        </Section>
      </div>

      {/* Installation Cases Section */}
      <div className="bg-gradient-to-br from-slate-900/30 to-slate-800/20 border-y border-white/5">
        <Section 
          id="cases" 
          title={installationCases.title}
          subtitle="정부/공공기관부터 상업시설까지 다양한 성공 사례"
        >
        <div className="space-y-12">
          {Object.entries(installationCases.categories).map(([key, category], i) => (
            <Reveal key={key} delay={i * 0.1}>
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  {key === "government" && <Award className="text-blue-400" />}
                  {key === "commercial" && <TrendingUp className="text-green-400" />}
                  {key === "parks" && <Users className="text-purple-400" />}
                  {key === "education" && <Users className="text-orange-400" />}
                  {category.title}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.cases.slice(0, 6).map((case_, j) => (
                    <div key={j} className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-gradient transition-colors">
                        {case_.name}
                      </h4>
                      <p className="text-sm text-foreground/70 mb-4">{case_.description}</p>
                      
                      {('year' in case_ && case_.year) ? (
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span>설치년도:</span>
                            <span className="font-medium">{(case_ as any).year}</span>
                          </div>
                          {('quantity' in case_ && case_.quantity) ? (
                            <div className="flex justify-between">
                              <span>설치대수:</span>
                              <span className="font-medium">{(case_ as any).quantity}대</span>
                            </div>
                          ) : null}
                          {('savings' in case_ && case_.savings) ? (
                            <div className="flex justify-between">
                              <span>절감효과:</span>
                              <span className="font-medium text-green-400">{(case_ as any).savings}</span>
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Customer Testimonials */}
        <div className="mt-16">
        <Reveal>
            <h3 className="text-2xl font-bold mb-8 text-center">고객 후기</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {installationCases.testimonials.map((testimonial, i) => (
                <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/5">
                  <div className="mb-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-foreground/70">{testimonial.company}</div>
                  </div>
                  <p className="text-sm text-foreground/80 italic">&ldquo;{testimonial.content}&rdquo;</p>
                </div>
              ))}
          </div>
        </Reveal>
        </div>
      </Section>
      </div>

      {/* Innovation Section */}
      <div className="bg-gradient-to-r from-emerald-900/10 via-teal-900/5 to-cyan-900/10">
        <Section 
          id="innovation" 
          title={innovation.title}
          subtitle="특허 포트폴리오와 R&D 센터 운영"
        >
        <div className="grid lg:grid-cols-2 gap-12">
        <Reveal>
            <div>
              <h3 className="text-2xl font-bold mb-6">핵심 특허 기술</h3>
              <div className="space-y-4">
                {innovation.patents.map((patent, i) => (
                  <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/5">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-gradient">특허 {patent.number}</h4>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">등록</span>
                    </div>
                    <div className="font-medium mb-2">{patent.title}</div>
                    <div className="text-sm text-foreground/70 mb-2">{patent.description}</div>
                    <div className="text-sm font-medium text-cyan-400">효과: {patent.effect}</div>
                  </div>
                ))}
              </div>
          </div>
        </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold mb-6">R&D 성과</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl border border-white/10 bg-white/5">
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {innovation.rdCenter.achievements.patents.registered}
                  </div>
                  <div className="text-sm text-foreground/70">등록 특허</div>
                </div>
                <div className="text-center p-4 rounded-xl border border-white/10 bg-white/5">
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {innovation.rdCenter.achievements.designs.registered}
                  </div>
                  <div className="text-sm text-foreground/70">디자인 등록</div>
                </div>
                <div className="text-center p-4 rounded-xl border border-white/10 bg-white/5">
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {innovation.rdCenter.achievements.trademarks.registered}
                  </div>
                  <div className="text-sm text-foreground/70">상표 등록</div>
                </div>
                <div className="text-center p-4 rounded-xl border border-white/10 bg-white/5">
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {innovation.rdCenter.achievements.papers.published}
                  </div>
                  <div className="text-sm text-foreground/70">논문 발표</div>
                </div>
              </div>

              <div className="space-y-4">
                {innovation.rdCenter.areas.map((area, i) => (
                  <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <h4 className="font-semibold mb-2">{area.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.focus.map((focus, j) => (
                        <span key={j} className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </Reveal>
        </div>
      </Section>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-900/20 via-blue-900/15 to-purple-900/20 border-y border-white/5">
        <Section 
          id="cta" 
          title={cta.title}
          subtitle="전문 상담부터 무료 샘플까지"
        >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cta.actions.map((action, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <a 
                href={action.href}
                className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 block"
              >
                <h3 className="font-semibold text-lg mb-3 group-hover:text-gradient transition-colors">
                  {action.title}
                </h3>
                <p className="text-sm text-foreground/70">{action.description}</p>
                <div className="mt-4 text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  자세히 보기 →
          </div>
              </a>
        </Reveal>
          ))}
        </div>
      </Section>
      </div>
    </main>
  );
}