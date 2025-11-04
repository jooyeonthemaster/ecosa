"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { heroSlides } from "@/content/site";
import Image from "next/image";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000); // 8초마다 슬라이드 변경

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative overflow-hidden pt-20 pb-20 min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {slide.id === "vision" && (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-green-100/50 to-transparent" />
                <div className="absolute -top-1/4 right-[-20%] h-[140vmin] w-[140vmin] rounded-full bg-[radial-gradient(closest-side,theme(colors.green.200/.3),transparent_60%)] blur-3xl" />
                <div className="absolute -left-1/4 bottom-[-20%] h-[120vmin] w-[120vmin] rounded-full bg-[radial-gradient(closest-side,theme(colors.emerald.200/.3),transparent_60%)] blur-3xl" />
              </>
            )}
            {slide.id === "ecosh" && (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-100/50 to-transparent" />
                <div className="absolute -top-1/4 right-[-20%] h-[140vmin] w-[140vmin] rounded-full bg-[radial-gradient(closest-side,theme(colors.green.300/.3),transparent_60%)] blur-3xl" />
                <div className="absolute -left-1/4 bottom-[-20%] h-[120vmin] w-[120vmin] rounded-full bg-[radial-gradient(closest-side,theme(colors.emerald.300/.3),transparent_60%)] blur-3xl" />
              </>
            )}
            {slide.id === "waterless-toilet" && (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-sky-100/50 to-transparent" />
                <div className="absolute -top-1/4 right-[-20%] h-[140vmin] w-[140vmin] rounded-full bg-[radial-gradient(closest-side,theme(colors.cyan.200/.3),transparent_60%)] blur-3xl" />
                <div className="absolute -left-1/4 bottom-[-20%] h-[120vmin] w-[120vmin] rounded-full bg-[radial-gradient(closest-side,theme(colors.sky.200/.3),transparent_60%)] blur-3xl" />
              </>
            )}
            {slide.id === "neoamico" && (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-100/50 to-transparent" />
                <div className="absolute -top-1/4 right-[-20%] h-[140vmin] w-[140vmin] rounded-full bg-[radial-gradient(closest-side,theme(colors.blue.200/.3),transparent_60%)] blur-3xl" />
                <div className="absolute -left-1/4 bottom-[-20%] h-[120vmin] w-[120vmin] rounded-full bg-[radial-gradient(closest-side,theme(colors.cyan.200/.3),transparent_60%)] blur-3xl" />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          {/* Left Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-bold tracking-tight text-balance mb-4">
                {slide.title.split('\n').map((part, i) => (
                  <span key={i}>
                    {i === 0 ? (
                      <span className="block text-lg sm:text-xl md:text-2xl">{part}</span>
                    ) : (
                      <span className={`block mt-2 text-gradient ${
                        slide.id === 'vision' ? 'text-4xl sm:text-5xl md:text-6xl' :
                        slide.id === 'ecosh' ? 'text-2xl sm:text-3xl md:text-4xl' :
                        'text-3xl sm:text-4xl md:text-5xl'
                      }`}>
                        {part}
                      </span>
                    )}
                  </span>
                ))}
              </h1>
              
              <p className="text-base text-foreground/80 max-w-prose mb-6">
                {slide.subtitle}
              </p>

              {/* Slide-specific Content */}
              {slide.id === "vision" && slide.stats && (
                <div className="mb-8 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <h3 className="font-semibold mb-4 text-lg">물 절약 통계</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {slide.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.id === "ecosh" && slide.features && (
                <div className="mb-8">
                  <h3 className="font-semibold mb-4 text-lg">{slide.features.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {slide.features.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-white shadow-sm">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <div className="font-semibold text-sm">{item.title}</div>
                          <div className="text-xs text-gray-600">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2">
                    {slide.highlights?.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-600 to-green-500"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.id === "waterless-toilet" && slide.features && (
                <div className="mb-8">
                  <h3 className="font-semibold mb-4 text-lg">{slide.features.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {slide.features.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-white shadow-sm">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <div className="font-semibold text-sm">{item.title}</div>
                          <div className="text-xs text-gray-600">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2">
                    {slide.highlights?.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {slide.id === "neoamico" && slide.features && (
                <div className="mb-8">
                  <h3 className="font-semibold mb-4 text-lg">{slide.features.title}</h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {slide.features.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-white shadow-sm">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <div className="font-semibold text-sm">{item.title}</div>
                          <div className="text-xs text-gray-600">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {slide.technologies && (
                    <div className="grid grid-cols-2 gap-3">
                      {slide.technologies.map((tech, i) => (
                        <div key={i} className="p-3 rounded-xl border border-gray-200 bg-white shadow-sm">
                          <div className="text-xs font-semibold mb-1 text-blue-700">{tech.name}</div>
                          <div className="text-xs text-gray-600">{tech.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  {slide.advantages && (
                    <div className="mt-4 space-y-2">
                      {slide.advantages.map((advantage, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500"></div>
                          {advantage}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                {slide.cta.map((cta, i) => (
                  <a
                    key={i}
                    href={cta.href}
                    className={i === 0 ? "button button-primary" : "button button-secondary"}
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Visual */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent mix-blend-overlay" />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-gray-100" />
                
                {/* Slide-specific visuals */}
                {slide.id === "vision" && (
                  <div className="absolute inset-0">
                    <Image
                      src="/products/hero-water.jpg"
                      alt="물방울 - 에코사 비전"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-gradient mb-4">ECOSA</div>
                        <div className="text-sm text-white font-medium drop-shadow-lg">A company that protects the most precious values</div>
                      </div>
                    </div>
                  </div>
                )}

                {slide.id === "ecosh" && (
                  <div className="absolute inset-0">
                    <Image
                      src="/products/ecosh-models.png"
                      alt="에코쉬 무수소변기"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                )}

                {slide.id === "waterless-toilet" && (
                  <div className="absolute inset-0">
                    <Image
                      src="/products/toilet.png"
                      alt="에코사 절수형 양변기"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                )}

                {slide.id === "neoamico" && (
                  <div className="absolute inset-0">
                    <Image
                      src="/products/NEOAMICO.png"
                      alt="NEOAMICO Air Clean Care Solution"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full border border-gray-300 bg-white shadow-md hover:bg-green-50 transition-colors"
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>
        
        <div className="flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentSlide 
                  ? "bg-green-600 w-8" 
                  : "bg-gray-300 hover:bg-green-400"
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="p-2 rounded-full border border-gray-300 bg-white shadow-md hover:bg-green-50 transition-colors"
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-8 right-8">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="p-2 rounded-full border border-gray-300 bg-white shadow-md hover:bg-green-50 transition-colors"
        >
          <Play 
            size={16} 
            className={isAutoPlaying ? "text-green-600" : "text-gray-400"}
          />
        </button>
      </div>
    </section>
  );
}