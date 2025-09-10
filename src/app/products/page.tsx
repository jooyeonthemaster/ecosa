import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { products, productsComparison } from "@/content/site";
import { Droplets, Shield, Zap, DollarSign, CheckCircle, BarChart3, Heart, Wind, XCircle } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="pt-20">
      <Section title={products.title} subtitle="특허 기술로 완성된 친환경 위생 솔루션">
        <Reveal>
          <div className="text-center">
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
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
                  { icon: <Droplets className="text-cyan-400" />, title: "Water Zero", desc: "100% 물 절약" },
                  { icon: <Shield className="text-green-400" />, title: "Odor Zero", desc: "악취 원천 차단" },
                  { icon: <Zap className="text-yellow-400" />, title: "Energy Zero", desc: "전력 소비 제로" },
                  { icon: <DollarSign className="text-purple-400" />, title: "Cost Zero", desc: "유지비 최소화" }
                ].map((feature, i) => (
                  <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/5">
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
              <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-8">
                <Image
                  src="/products/ecosh-models.png"
                  alt="에코쉬 무수소변기 모델 EU-01, EU-04, EU-05"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </Reveal>

          {/* 제품 모델 */}
          <div className="grid lg:grid-cols-2 gap-12">
            {products.ecosh.models.map((model, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
                  <h3 className="text-2xl font-bold text-gradient mb-4">{model.model}</h3>
                  <p className="text-sm text-foreground/70 mb-6">{model.type}</p>
                  
                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex justify-between">
                      <span>규격:</span>
                      <span>{model.specs.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>무게:</span>
                      <span>{model.specs.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>재질:</span>
                      <span>{model.specs.material}</span>
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
                    <button className="button button-secondary flex-1">상세 보기</button>
                    <button className="button button-primary flex-1">견적 문의</button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ROI 분석 */}
          <Reveal>
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
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
                    <div className="text-sm text-foreground/70">연간 절감액</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {products.ecosh.roi.payback}
                    </div>
                    <div className="text-sm text-foreground/70">투자비 회수 기간</div>
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
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold">{productsComparison.left.name}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/15">수세식</span>
              </div>
              {/* VS center - header row */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="size-16 rounded-full bg-gradient-to-br from-ecosa-cyan/20 to-ecosa-green/20 border border-white/20 backdrop-blur-sm flex items-center justify-center font-extrabold text-base">
                  VS
                </div>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-green-500/10 flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold text-gradient">{productsComparison.right.name}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/15">Waterless</span>
              </div>
            </div>

            {/* Row-by-row comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
              {/* 수세식 리스트 */}
              <div className="rounded-2xl border border-white/10 overflow-hidden">
                {productsComparison.left.items.map((item, i) => (
                  <div key={i} className={`flex items-start gap-3 p-4 text-sm border-b border-white/10 ${i % 2 === 0 ? "bg-white/5" : "bg-transparent"}`}>
                    <XCircle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
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
              <div className="rounded-2xl border border-white/10 overflow-hidden">
                {productsComparison.right.items.map((item, i) => (
                  <div key={i} className={`flex items-start gap-3 p-4 text-sm border-b border-white/10 ${i % 2 === 0 ? "bg-white/5" : "bg-transparent"}`}>
                    <CheckCircle size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/products#ecosh" className="button button-primary">카탈로그 보기</a>
              <a href="/contact?type=quote" className="button button-secondary">설치 견적 문의</a>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 다막아 하수구트랩 */}
      <Section id="damaga" title={products.damaga.title} subtitle={products.damaga.description}>
        <div className="grid lg:grid-cols-3 gap-8">
          {products.damaga.coreTechnology.slice(0, 3).map((tech, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <h4 className="font-bold text-lg mb-2 text-emerald-400">{tech.name}</h4>
                <p className="text-sm text-foreground/70 mb-4">{tech.description}</p>
                <div className="space-y-2">
                  {tech.benefits.slice(0, 2).map((benefit, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={14} className="text-emerald-400 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Air Clean Care & Dress Care */}
      <Section id="air-clean" title="Air Clean Care & Dress Care" subtitle="실내 공기 정화와 의류 케어의 토털 솔루션">
        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-purple-500/10">
              <h3 className="text-2xl font-bold mb-6 text-violet-400 flex items-center gap-3">
                <Wind />
                Air Clean Care
              </h3>
              <div className="space-y-2">
                {products.airCleanCare.functions.airPurification.slice(0, 4).map((func, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Wind size={14} className="text-violet-400" />
                    <span>{func}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
              <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center gap-3">
                <Heart />
                Dress Care
              </h3>
              <div className="space-y-2">
                {products.dressCare.functions.sterilization.slice(0, 4).map((func, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Zap size={14} className="text-purple-400" />
                    <span>{func}</span>
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