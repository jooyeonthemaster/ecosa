import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CatalogDownload from "@/components/ui/CatalogDownload";
import { products, productsComparison, catalogs } from "@/content/site";
import { Droplets, Shield, Zap, DollarSign, CheckCircle, BarChart3, Heart, Wind, XCircle } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="pt-20">
      <Section title={products.title} subtitle="특허 기술로 완성된 친환경 위생 솔루션" variant="hero">
        <Reveal>
          <div className="text-center">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              에코사의 혁신적인 제품들은 물 절약, 위생 개선, 경제성을 동시에 실현합니다.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 에코쉬 무수소변기 */}
      <Section id="ecosh" title={products.ecosh.title} subtitle={products.ecosh.description}>
        <div className="space-y-12">
          {/* 4 ZERO 특징 */}
          <Reveal>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gradient mb-8">4 ZERO</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: <Droplets className="text-green-600" />, title: "Water Zero", desc: "100% 물 절약" },
                  { icon: <Shield className="text-green-400" />, title: "Odor Zero", desc: "악취 원천 차단" },
                  { icon: <Zap className="text-yellow-400" />, title: "Energy Zero", desc: "전력 소비 제로" },
                  { icon: <DollarSign className="text-purple-400" />, title: "Cost Zero", desc: "유지비 최소화" }
                ].map((feature, i) => (
                  <div key={i} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                    <p className="text-sm font-medium text-gradient">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 제품 이미지 */}
          <Reveal>
            <div className="mb-12">
              <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm p-8">
                <Image
                  src="/products/ecosh-models.png"
                  alt="에코쉬 무수소변기 모델 EU-01"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </Reveal>

          {/* 제품 모델 */}
          <div className="max-w-4xl mx-auto">
            {products.ecosh.models.map((model, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <h3 className="text-2xl font-bold text-gradient mb-4">{model.model}</h3>
                  <p className="text-sm text-gray-600 mb-6">{model.type}</p>

                  <div className="grid md:grid-cols-3 gap-4 text-sm mb-6">
                    <div className="p-4 rounded-lg bg-gray-50">
                      <div className="text-xs text-gray-600 mb-1">규격</div>
                      <div className="font-semibold">{model.specs.dimensions}</div>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50">
                      <div className="text-xs text-gray-600 mb-1">무게</div>
                      <div className="font-semibold">{model.specs.weight}</div>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50">
                      <div className="text-xs text-gray-600 mb-1">재질</div>
                      <div className="font-semibold">{model.specs.material}</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {model.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={16} className="text-green-400 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <CatalogDownload
                      variant="primary"
                      size="md"
                      label="한글 카탈로그"
                      fileName={catalogs.main.fileName}
                      className="flex-1 justify-center"
                    />
                    <CatalogDownload
                      variant="secondary"
                      size="md"
                      label="English"
                      fileName={catalogs.mainEn.fileName}
                      className="flex-1 justify-center"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ROI 분석 */}
          <Reveal>
            <div className="p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
              <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <BarChart3 className="text-green-400" />
                ROI 분석
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5">
                  <h4 className="font-bold text-lg mb-4 text-red-400">일반 소변기 연간 비용</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between font-bold text-lg border-t border-red-500/20 pt-2">
                      <span>총 비용:</span>
                      <span className="text-red-400">{products.ecosh.roi.conventional.total.toLocaleString()}원/년</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-green-500/20 bg-green-500/5">
                  <h4 className="font-bold text-lg mb-4 text-green-400">에코쉬 연간 비용</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between font-bold text-lg border-t border-green-500/20 pt-2">
                      <span>총 비용:</span>
                      <span className="text-green-400">{products.ecosh.roi.ecosh.total.toLocaleString()}원/년</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center p-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {products.ecosh.roi.savings.toLocaleString()}원
                    </div>
                    <div className="text-sm text-gray-600">연간 절감액</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {products.ecosh.roi.payback}
                    </div>
                    <div className="text-sm text-gray-600">투자비 회수 기간</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 수세식 vs 에코사 무수소변기 - 항목별 비교 */}
      <Section id="compare-vs" title={productsComparison.title}>
        <Reveal>
          <div className="relative max-w-5xl mx-auto">
            {/* Headers */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 mb-4 items-center">
              <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">{productsComparison.left.name}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/15">수세식</span>
              </div>
              {/* VS center - header row */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="size-16 rounded-full bg-gradient-to-br from-ecosa-cyan/20 to-ecosa-green/20 border border-white/20 backdrop-blur-sm flex items-center justify-center font-extrabold text-base">
                  VS
                </div>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 bg-gradient-to-r from-cyan-500/10 to-green-500/10 flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold text-gradient">{productsComparison.right.name}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/15">Waterless</span>
              </div>
            </div>

            {/* Row-by-row comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
              {/* 수세식 리스트 */}
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                {productsComparison.left.items.map((item, i) => (
                  <div key={i} className={`flex items-start gap-3 p-4 text-sm border-b border-gray-200 ${i % 2 === 0 ? "bg-white shadow-sm" : "bg-transparent"}`}>
                    <XCircle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* VS center - between lists (non-overlapping) */}
              <div className="hidden lg:flex items-center justify-center px-2">
                <div className="size-16 rounded-full bg-gradient-to-br from-ecosa-cyan/20 to-ecosa-green/20 border border-white/20 backdrop-blur-sm flex items-center justify-center font-extrabold text-base">
                  VS
                </div>
              </div>

              {/* 에코사 무수소변기 리스트 */}
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                {productsComparison.right.items.map((item, i) => (
                  <div key={i} className={`flex items-start gap-3 p-4 text-sm border-b border-gray-200 ${i % 2 === 0 ? "bg-white shadow-sm" : "bg-transparent"}`}>
                    <CheckCircle size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-3">
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
              <a href="/contact?type=quote" className="button button-outline">설치 견적 문의</a>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* LS75 절수양변기 */}
      <Section id="toilet" title={products.waterSavingToilet.title} subtitle={products.waterSavingToilet.description}>
        <div className="space-y-12">
          {/* 제품 이미지 */}
          <Reveal>
            <div className="mb-12">
              <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-sm p-8">
                <Image
                  src="/products/toilet.png"
                  alt="LS75 절수양변기"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 제품 사양 */}
            <Reveal>
              <div className="p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-sm">
                <h3 className="text-2xl font-bold text-gradient mb-6">제품 사양</h3>
                <div className="space-y-4 text-sm mb-6">
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
                  <div className="flex justify-between">
                    <span className="text-gray-600">재질:</span>
                    <span className="font-semibold">{products.waterSavingToilet.specs.material}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CatalogDownload
                    variant="primary"
                    size="md"
                    label="한글 카탈로그"
                    fileName={catalogs.main.fileName}
                    className="flex-1 justify-center"
                  />
                  <CatalogDownload
                    variant="secondary"
                    size="md"
                    label="English"
                    fileName={catalogs.mainEn.fileName}
                    className="flex-1 justify-center"
                  />
                </div>
              </div>
            </Reveal>

            {/* 주요 특징 */}
            <Reveal delay={0.2}>
              <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm">
                <h3 className="text-2xl font-bold text-gradient mb-6">주요 특징</h3>
                <div className="space-y-3 mb-6">
                  {products.waterSavingToilet.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-lg mb-4">주요 장점</h4>
                  <div className="space-y-3">
                    {products.waterSavingToilet.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* NEOAMICO */}
      <Section id="neoamico" title={products.neoamico.title} subtitle={products.neoamico.description}>
        <div className="space-y-12">
          {/* 제품 이미지 */}
          <Reveal>
            <div className="mb-12">
              <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-purple-50 to-pink-50 shadow-sm p-8">
                <Image
                  src="/products/NEOAMICO.png"
                  alt="NEOAMICO Air Clean Care Solution"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </Reveal>

          {/* 3 in 1 통합 솔루션 */}
          <Reveal>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gradient mb-8">3 in 1 통합 솔루션</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {products.neoamico.coreFunctions.map((func, i) => (
                  <div key={i} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="text-4xl mb-4">
                      {i === 0 && <Zap className="text-purple-600 mx-auto" />}
                      {i === 1 && <Wind className="text-pink-600 mx-auto" />}
                      {i === 2 && <Droplets className="text-blue-600 mx-auto" />}
                    </div>
                    <p className="text-sm font-medium text-gray-700">{func}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Air Clean Care & Dress Care 응용 분야 */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal>
              <div className="p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-purple-50 to-violet-50 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-purple-600 flex items-center gap-3">
                  <Wind />
                  Air Clean Care
                </h3>
                <div className="space-y-3">
                  {products.neoamico.applications.airCleanCare.map((app, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-pink-50 to-rose-50 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-pink-600 flex items-center gap-3">
                  <Heart />
                  Dress Care
                </h3>
                <div className="space-y-3">
                  {products.neoamico.applications.dressCare.map((app, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className="text-pink-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* 기술 특징 */}
          <Reveal>
            <div className="p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
              <h3 className="text-2xl font-bold mb-6 text-center text-gradient">핵심 기술</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.neoamico.technology.map((tech, i) => (
                  <div key={i} className="p-4 rounded-xl border border-gray-200 bg-white/50 text-center">
                    <p className="text-sm font-medium text-gray-700">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}