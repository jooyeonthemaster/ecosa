import Image from "next/image";
import Hero from "@/components/hero/Hero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CatalogDownload, { CatalogCard } from "@/components/ui/CatalogDownload";
import { coreValues, products, installationCases, innovation, cta, catalogs } from "@/content/site";
import { CheckCircle, Users, Award, TrendingUp, Zap, Download } from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Core Values Section */}
      <div className="bg-green-50 border-y border-gray-200">
        <Section 
          id="values" 
          title={coreValues.title}
          subtitle="물 보존 · 위생과 건강 · 경제성으로 지속가능한 미래 구현"
        >
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {coreValues.items.map((value, i) => (
            <Reveal key={value.id} delay={i * 0.2}>
              <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm p-6 hover:shadow-xl hover:border-green-400 transition-all duration-500 h-full flex flex-col">
                <div className="text-5xl mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-center">{value.title}</h3>
                <p className="text-base font-semibold text-gradient mb-6 text-center">{value.headline}</p>
                
                {value.id === "water-conservation" && value.stats && (
                  <div className="space-y-2 mb-6 flex-grow">
                    {value.stats.map((stat, j) => (
                      <div key={j} className="grid grid-cols-[80px_1fr_80px] items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                        <span className="text-xs font-semibold text-gray-700">{stat.year}</span>
                        <span className="text-xs text-gray-600 text-center">{stat.label}</span>
                        <span className="text-sm font-bold text-green-600 text-right">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {value.id === "hygiene-health" && value.comparison && typeof value.comparison === 'object' && (
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex flex-col">
                      <div className="text-xs font-bold text-red-600 mb-2 uppercase tracking-wide">Before</div>
                      <div className="text-xs text-gray-700 leading-relaxed">{value.comparison.before}</div>
                    </div>
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200 flex flex-col">
                      <div className="text-xs font-bold text-green-600 mb-2 uppercase tracking-wide">After</div>
                      <div className="text-xs text-gray-700 leading-relaxed">{value.comparison.after}</div>
                    </div>
                  </div>
                )}

                <div className="space-y-2 flex-grow">
                  {(value.contributions || value.certifications || []).map((item, j) => (
                    <div key={j} className="flex items-start gap-2 text-xs text-gray-700 bg-gray-50 p-2 rounded-md">
                      <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
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
      <div className="bg-white">
        <Section
          id="products"
          title={products.title}
          subtitle="혁신적인 특허 기술로 물 절약과 위생을 동시에"
        >
        {/* 카탈로그 다운로드 카드 */}
        <Reveal>
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <CatalogCard
                title={catalogs.main.title}
                description={catalogs.main.description}
                fileName={catalogs.main.fileName}
                fileSize={catalogs.main.fileSize}
              />
              <CatalogCard
                title={catalogs.mainEn.title}
                description={catalogs.mainEn.description}
                fileName={catalogs.mainEn.fileName}
                fileSize={catalogs.mainEn.fileSize}
              />
            </div>
          </div>
        </Reveal>

        <div className="space-y-16">
          {/* 1. 에코쉬 무수소변기 */}
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gradient">{products.ecosh.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{products.ecosh.description}</p>

                {/* 4 ZERO 기술 섹션 */}
                <div className="mb-6 p-6 rounded-xl border border-gray-200 bg-gradient-to-br from-green-50 to-emerald-50 shadow-sm">
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
                    <div key={i} className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <h4 className="font-semibold text-green-600 mb-2">{model.model}</h4>
                      <div className="text-sm text-gray-600 mb-2">{model.type}</div>
                      <div className="space-y-1 text-xs text-gray-700">
                        <div>규격: {model.specs.dimensions}</div>
                        <div>무게: {model.specs.weight}</div>
                        <div>재질: {model.specs.material}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <CatalogDownload
                    variant="primary"
                    size="md"
                    label="한글 카탈로그"
                    fileName={catalogs.main.fileName}
                  />
                  <CatalogDownload
                    variant="secondary"
                    size="md"
                    label="English Catalog"
                    fileName={catalogs.mainEn.fileName}
                  />
                  <a href="/contact" className="button button-outline">견적 문의</a>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6 overflow-hidden shadow-md">
                  <Image
                    src="/products/ecosh-models.png"
                    alt="에코쉬 무수소변기 모델 EU-01"
                    width={800}
                    height={400}
                    className="w-full h-auto object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* 2. LS75 절수양변기 */}
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 overflow-hidden shadow-md">
                  <Image
                    src="/products/toilet.png"
                    alt="LS75 절수양변기"
                    width={800}
                    height={400}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold mb-4 text-gradient">{products.waterSavingToilet.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{products.waterSavingToilet.description}</p>

                {/* 제품 사양 */}
                <div className="mb-6 p-6 rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-sm">
                  <div className="text-2xl font-bold text-gradient mb-4">제품 사양</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">모델명:</span>
                      <span className="font-semibold">{products.waterSavingToilet.model}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">규격:</span>
                      <span className="font-semibold">{products.waterSavingToilet.specs.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">물 사용량:</span>
                      <span className="font-semibold text-blue-600">{products.waterSavingToilet.specs.flushVolume}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">플러싱 방식:</span>
                      <span className="font-semibold">{products.waterSavingToilet.specs.flushType}</span>
                    </div>
                  </div>
                </div>

                {/* 주요 특징 */}
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3">주요 특징</h4>
                  <div className="space-y-2">
                    {products.waterSavingToilet.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <CatalogDownload
                    variant="primary"
                    size="md"
                    label="한글 카탈로그"
                    fileName={catalogs.main.fileName}
                  />
                  <CatalogDownload
                    variant="secondary"
                    size="md"
                    label="English Catalog"
                    fileName={catalogs.mainEn.fileName}
                  />
                  <a href="/contact" className="button button-outline">견적 문의</a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 3. NEOAMICO */}
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gradient">{products.neoamico.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{products.neoamico.description}</p>

                {/* 핵심 기능 3 in 1 */}
                <div className="mb-6 p-6 rounded-xl border border-gray-200 bg-gradient-to-br from-purple-50 to-pink-50 shadow-sm">
                  <div className="text-2xl font-bold text-gradient mb-4">3 in 1 통합 솔루션</div>
                  <div className="space-y-3 text-sm">
                    {products.neoamico.coreFunctions.map((func, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Zap size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{func}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 응용 분야 */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                    <h4 className="font-semibold text-purple-600 mb-3">Air Clean Care</h4>
                    <div className="space-y-2 text-xs text-gray-700">
                      {products.neoamico.applications.airCleanCare.map((app, i) => (
                        <div key={i} className="flex items-start gap-1">
                          <span className="text-purple-600 mt-0.5">•</span>
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                    <h4 className="font-semibold text-pink-600 mb-3">Dress Care</h4>
                    <div className="space-y-2 text-xs text-gray-700">
                      {products.neoamico.applications.dressCare.map((app, i) => (
                        <div key={i} className="flex items-start gap-1">
                          <span className="text-pink-600 mt-0.5">•</span>
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <CatalogDownload
                    variant="primary"
                    size="md"
                    label="한글 카탈로그"
                    fileName={catalogs.main.fileName}
                  />
                  <CatalogDownload
                    variant="secondary"
                    size="md"
                    label="English Catalog"
                    fileName={catalogs.mainEn.fileName}
                  />
                  <a href="/contact" className="button button-outline">제품 문의</a>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-purple-50 to-pink-50 p-6 overflow-hidden shadow-md">
                  <Image
                    src="/products/NEOAMICO.png"
                    alt="NEOAMICO Air Clean Care Solution"
                    width={800}
                    height={400}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        </Section>
      </div>

      {/* Installation Cases Section */}
      <div className="bg-green-50 border-y border-gray-200">
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
                  {key === "government" && <Award className="text-blue-600" />}
                  {key === "commercial" && <TrendingUp className="text-green-600" />}
                  {key === "parks" && <Users className="text-purple-600" />}
                  {key === "education" && <Users className="text-orange-600" />}
                  {category.title}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.cases.slice(0, 6).map((case_, j) => (
                    <div key={j} className="p-6 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all group">
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-gradient transition-colors">
                        {case_.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">{case_.description}</p>

                      {(('quantity' in case_ && case_.quantity) || ('savings' in case_ && case_.savings)) ? (
                        <div className="space-y-2 text-xs">
                          {('quantity' in case_ && case_.quantity) ? (
                            <div className="flex justify-between">
                              <span>설치대수:</span>
                              <span className="font-medium">{(case_ as any).quantity}대</span>
                            </div>
                          ) : null}
                          {('savings' in case_ && case_.savings) ? (
                            <div className="flex justify-between">
                              <span>절감효과:</span>
                              <span className="font-medium text-green-600">{(case_ as any).savings}</span>
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
                <div key={i} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
                  <div className="mb-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                  <p className="text-sm text-gray-700 italic">&ldquo;{testimonial.content}&rdquo;</p>
                </div>
              ))}
          </div>
        </Reveal>
        </div>
      </Section>
      </div>

      {/* Innovation Section */}
      <div className="bg-white">
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
                  <div key={i} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-gradient">특허 {patent.number}</h4>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">등록</span>
                    </div>
                    <div className="font-medium mb-2">{patent.title}</div>
                    <div className="text-sm text-gray-600 mb-2">{patent.description}</div>
                    <div className="text-sm font-medium text-green-600">효과: {patent.effect}</div>
                  </div>
                ))}
              </div>
          </div>
        </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold mb-6">R&D 성과</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {innovation.rdCenter.achievements.patents.registered}
                  </div>
                  <div className="text-sm text-gray-600">등록 특허</div>
                </div>
                <div className="text-center p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {innovation.rdCenter.achievements.designs.registered}
                  </div>
                  <div className="text-sm text-gray-600">디자인 등록</div>
                </div>
                <div className="text-center p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {innovation.rdCenter.achievements.trademarks.registered}
                  </div>
                  <div className="text-sm text-gray-600">상표 등록</div>
                </div>
                <div className="text-center p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {innovation.rdCenter.achievements.papers.published}
                  </div>
                  <div className="text-sm text-gray-600">논문 발표</div>
                </div>
              </div>

              <div className="space-y-4">
                {innovation.rdCenter.areas.map((area, i) => (
                  <div key={i} className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                    <h4 className="font-semibold mb-2">{area.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.focus.map((focus, j) => (
                        <span key={j} className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">
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
      <div className="bg-green-50 border-y border-gray-200">
        <Section 
          id="cta" 
          title={cta.title}
          subtitle="전문 상담부터 무료 샘플까지"
        >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cta.actions.map((action, i) => (
            <Reveal key={i} delay={i * 0.1}>
              {(action as any).type === 'download' ? (
                <div className="group p-6 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg hover:border-green-300 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <Download size={20} className="text-green-600" />
                    <h3 className="font-semibold text-lg group-hover:text-gradient transition-colors">
                      {action.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{action.description}</p>
                  <div className="flex flex-col gap-2">
                    <CatalogDownload
                      variant="primary"
                      size="sm"
                      label="한글 카탈로그"
                      fileName={catalogs.main.fileName}
                      className="w-full justify-center"
                    />
                    <CatalogDownload
                      variant="secondary"
                      size="sm"
                      label="English Catalog"
                      fileName={catalogs.mainEn.fileName}
                      className="w-full justify-center"
                    />
                  </div>
                </div>
              ) : (
                <a
                  href={action.href}
                  className="group p-6 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg hover:border-green-300 transition-all duration-300 block"
                >
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-gradient transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                  <div className="mt-4 text-green-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    자세히 보기 →
                  </div>
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </Section>
      </div>
    </main>
  );
}