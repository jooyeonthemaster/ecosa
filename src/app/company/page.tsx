import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { company } from "@/content/site";
import { 
  Building, 
  Users, 
  Award, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail,
  Target,
  Heart,
  Leaf,
  TrendingUp,
  Globe
} from "lucide-react";

export default function CompanyPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Section 
        title="회사소개" 
        subtitle="지구의 가장 소중한 가치를 지키는 기업, 에코사"
      >
        <Reveal>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-4">{company.vision}</div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              세계에서 가장 소중한 가치를 지키는 기업으로서, 물과 환경을 보호하며 
              지속가능한 미래를 만들어가는 에코사입니다.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* CEO Message */}
      <Section id="ceo-message" title={company.ceoMessage.title}>
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <Reveal>
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-white/20 mx-auto mb-4 flex items-center justify-center">
                    <Users size={32} className="text-cyan-400" />
                  </div>
                  <div className="font-bold text-xl mb-2">대표이사</div>
                  <div className="text-foreground/70">{company.overview.ceo}</div>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="lg:col-span-2">
              <div className="prose prose-invert max-w-none">
                {company.ceoMessage.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-foreground/80 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Company Overview */}
      <Section id="overview" title="기업 개요">
        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="space-y-8">
              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Building className="text-cyan-400" />
                  기업 정보
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">회사명:</span>
                    <span className="font-medium">{company.overview.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">설립일:</span>
                    <span className="font-medium">{company.overview.established}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">대표이사:</span>
                    <span className="font-medium">{company.overview.ceo}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Target className="text-green-400" />
                  사업 분야
                </h3>
                <div className="space-y-2">
                  {company.overview.business.map((business, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <span>{business}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-8">
              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <MapPin className="text-purple-400" />
                  위치 정보
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-medium mb-1">본사</div>
                    <div className="text-foreground/70">{company.overview.headquarters}</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">공장</div>
                    <div className="text-foreground/70">{company.overview.factory}</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Phone className="text-orange-400" />
                  연락처
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-orange-400" />
                    <span>{company.overview.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-orange-400 text-sm">FAX</span>
                    <span>{company.overview.contact.fax}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-orange-400" />
                    <span>{company.overview.contact.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section id="vision-mission" title="비전 & 미션">
        <div className="space-y-12">
          <Reveal>
            <div className="text-center p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                <Globe className="text-cyan-400" />
                Vision
              </h3>
              <p className="text-3xl font-bold text-gradient mb-4">{company.vision}</p>
              <p className="text-lg text-foreground/80">세계에서 가장 소중한 가치를 지키는 기업</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <Heart className="text-red-400" />
                Mission
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {company.mission.map((mission, i) => {
                  const icons = [Leaf, Heart, TrendingUp, Building, Globe];
                  const colors = ["text-green-400", "text-red-400", "text-yellow-400", "text-blue-400", "text-purple-400"];
                  const Icon = icons[i % icons.length];
                  
                  return (
                    <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/5">
                      <Icon className={`${colors[i % colors.length]} mb-3`} size={24} />
                      <p className="text-sm leading-relaxed">{mission}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* History */}
      <Section id="history" title="연혁" subtitle="지속적인 성장과 혁신의 발자취">
        <div className="space-y-12">
          {Object.entries(company.history).map(([decade, events], i) => (
            <Reveal key={decade} delay={i * 0.1}>
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Calendar className="text-cyan-400" />
                  {decade}
                </h3>
                <div className="space-y-4">
                  {events.map((event, j) => (
                    <div key={j} className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5">
                      <div className="flex-shrink-0 w-16 text-center">
                        <div className="text-lg font-bold text-gradient">{event.year}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-foreground/80">{event.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Organization */}
      <Section id="organization" title="조직도" subtitle="체계적인 조직 운영으로 최고의 서비스 제공">
        <Reveal>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block p-4 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                <div className="text-xl font-bold">{company.organization.ceo}</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {company.organization.divisions.map((division, i) => (
                <div key={i} className="text-center">
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5 mb-4">
                    <div className="font-bold text-lg mb-3">{division.name}</div>
                    <div className="space-y-2">
                      {division.teams.map((team, j) => (
                        <div key={j} className="text-sm text-foreground/70 p-2 rounded bg-white/5">
                          {team}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Certifications & Awards */}
      <Section id="certifications" title="인증 및 수상" subtitle="신뢰할 수 있는 기술력과 품질 인증">
        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="text-yellow-400" />
                인증 현황
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {company.certifications.map((cert, i) => (
                  <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/5 text-center">
                    <div className="w-12 h-12 rounded-full bg-yellow-400/20 border border-yellow-400/30 mx-auto mb-3 flex items-center justify-center">
                      <Award size={20} className="text-yellow-400" />
                    </div>
                    <div className="text-sm font-medium">{cert}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="text-green-400" />
                수상 내역
              </h3>
              <div className="space-y-4">
                {company.awards.map((award, i) => (
                  <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/5 flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 text-center">
                      <div className="text-lg font-bold text-gradient">{award.year}</div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{award.award}</div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-green-400/20 border border-green-400/30 flex items-center justify-center">
                        <Award size={16} className="text-green-400" />
                      </div>
                    </div>
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