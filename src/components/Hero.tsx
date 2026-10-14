import { ArrowRight, Star, ShieldCheck, MapPin, Award } from 'lucide-react';
import { AGENT_INFO } from '../data/agentData';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export function Hero({ onExploreClick, onContactClick }: HeroProps) {
  return (
    <section className="relative pt-24 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Master Editorial Architectural Container - Inspired by Reference */}
      <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[580px] lg:min-h-[660px] shadow-2xl shadow-neutral-900/10 border border-[#E7E3DC]">
        {/* Background Image: High-res Jacksonville luxury residence */}
        {/* Background Image: Jonathan's real 12629 Julington Oaks Dr executive residence */}
        <div className="absolute inset-0 z-0">
          <img
            src={AGENT_INFO.heroBackgroundImage}
            alt="12629 Julington Oaks Drive, Jacksonville, FL - Active Listing by Jonathan Daugherty"
            className="w-full h-full object-cover object-center filter brightness-[0.88]"
            fetchPriority="high"
          />
          {/* Subtle gradient scrim for legibility without darkening overly */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-10 lg:p-14 min-h-[580px] lg:min-h-[660px]">
          {/* Top Left: Main Headline & Intro */}
          <div className="max-w-2xl pt-2 sm:pt-6">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-semibold tracking-wider uppercase">
              <MapPin className="w-3 h-3 text-[#E2BA84]" />
              <span>Jacksonville, Florida Real Estate</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-4 text-balance">
              Find Your Place in Jacksonville.
            </h1>

            <p className="text-base sm:text-lg text-white/85 font-medium mb-3">
              Local expertise. Personal guidance. A smarter move.
            </p>

            <p className="text-sm sm:text-base text-white/75 max-w-xl leading-relaxed mb-8">
              Guiding buyers, sellers, relocating families, and military households across Northeast Florida with transparent counsel, data-backed valuations, and 19 years of verified neighborhood mastery.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 bg-white text-[#202020] text-xs font-bold tracking-wider uppercase rounded-full hover:bg-neutral-100 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-4 h-4 text-[#A77B43]" />
              </button>

              <button
                onClick={onContactClick}
                className="px-6 py-3.5 bg-[#A77B43] hover:bg-[#825B2E] text-white text-xs font-bold tracking-wider uppercase rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-white"
              >
                Let's Talk
              </button>
            </div>

            {/* Verified Rating Social Proof */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white">
              <div className="flex items-center gap-1 text-[#E2BA84]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <div className="text-xs text-white/90">
                <span className="font-bold tabular-nums">5.0</span> Rating{' '}
                <span className="text-white/60">·</span>{' '}
                <span className="text-white/80 tabular-nums">148 Verified Client Reviews</span>
              </div>
            </div>
          </div>

          {/* Bottom Right Floating Profile Card - With Jonathan's Real Headshot & Distinct Accreditations */}
          <div className="self-end w-full sm:w-auto max-w-md mt-6 sm:mt-0">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/60 text-[#242424]">
              {/* Agent Title, Real Photo & Brokerage Header */}
              <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-[#E7E3DC]">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden shrink-0 border-2 border-[#A77B43] shadow-md bg-neutral-900">
                  <img
                    src={AGENT_INFO.portraitImage}
                    alt="Jonathan Daugherty, Jacksonville Realtor"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#A77B43] text-white text-[8px] font-bold uppercase tracking-wider text-center py-0.5">
                    Verified
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-[#242424] leading-tight">
                      Jonathan Daugherty
                    </h3>
                    <span title="Verified Licensed Florida REALTOR® #3268202">
                      <ShieldCheck className="w-4 h-4 text-[#A77B43]" />
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#A77B43] mt-0.5">
                    Future Home Realty · The Someday Group
                  </p>
                  <p className="text-[11px] text-[#747474] font-medium">
                    Top 100 Realtor Northeast FL · {AGENT_INFO.license}
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#545454] leading-relaxed mb-4">
                19+ years helping buyers and sellers navigate Jacksonville, Mandarin, St. Johns County, and St. Augustine with personal guidance and verified market mastery.
              </p>

              {/* Distinctive Credentials Strip (Non-redundant with statistics section below) */}
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="p-2.5 rounded-xl bg-[#F7F6F2] border border-[#E7E3DC]/60">
                  <div className="font-display font-extrabold text-sm sm:text-base text-[#A77B43]">
                    Top 100
                  </div>
                  <div className="text-[10px] text-[#747474] font-bold uppercase tracking-tight mt-0.5">
                    Northeast FL
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#F7F6F2] border border-[#E7E3DC]/60">
                  <div className="font-display font-extrabold text-sm sm:text-base text-[#242424]">
                    100%
                  </div>
                  <div className="text-[10px] text-[#747474] font-bold uppercase tracking-tight mt-0.5">
                    Recommended
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#F7F6F2] border border-[#E7E3DC]/60">
                  <div className="font-display font-extrabold text-sm sm:text-base text-[#A77B43]">
                    FL Lic
                  </div>
                  <div className="text-[10px] text-[#747474] font-bold uppercase tracking-tight mt-0.5">
                    #3268202
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
