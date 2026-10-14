import { ArrowRight, Star, ShieldCheck, MapPin, Phone } from 'lucide-react';
import { AGENT_INFO, Property } from '../data/agentData';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
  onSelectProperty?: (property: Property) => void;
}

export function Hero({ onExploreClick, onContactClick }: HeroProps) {
  const popularAreas = [
    'Mandarin',
    'Julington Creek',
    'St. Johns County',
    'Ponte Vedra',
    'St. Augustine',
    'Riverside',
  ];

  return (
    <section className="relative pt-4 sm:pt-6 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1680px] mx-auto">
      {/* Master Architectural Container */}
      <div className="relative rounded-3xl sm:rounded-[36px] xl:rounded-[44px] overflow-hidden shadow-2xl shadow-neutral-900/10 border border-[#E7E3DC]">
        {/* Background Image: High-res Jacksonville luxury residence */}
        <div className="absolute inset-0 z-0">
          <img
            src={AGENT_INFO.heroBackgroundImage}
            alt="12629 Julington Oaks Drive, Jacksonville, FL - Luxury Residence"
            className="w-full h-full object-cover object-[center_30%]"
            fetchPriority="high"
          />
          {/* Targeted directional gradient: protects left text readability while keeping the house and sky clear, vibrant & prominent */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/15 lg:from-black/85 lg:via-black/40 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content: Balanced 2-Column Responsive Grid */}
        <div className="relative z-10 p-6 sm:p-8 lg:p-10 xl:p-12 2xl:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center lg:items-end">
            {/* Left Column (Headline, Value Prop, Actions, Trust Proof, Neighborhood Shortcuts) */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
              {/* Region Pill */}
              <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white/95 text-xs font-semibold tracking-wider uppercase w-fit">
                <MapPin className="w-3.5 h-3.5 text-[#E2BA84]" />
                <span>Jacksonville & Northeast Florida Real Estate</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-3.5 text-balance">
                Find Your Place in Jacksonville.
              </h1>

              {/* Tagline */}
              <p className="text-base sm:text-lg xl:text-xl text-[#F7F6F2] font-semibold mb-3">
                Local expertise. Personal guidance. A smarter move.
              </p>

              {/* Narrative Context */}
              <p className="text-sm sm:text-base text-white/80 max-w-xl xl:max-w-2xl leading-relaxed mb-6">
                Guiding buyers, sellers, relocating families, and military households across Northeast Florida with transparent counsel, data-backed valuations, and 19 years of verified neighborhood mastery.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-6">
                <button
                  onClick={onExploreClick}
                  className="px-6 py-3.5 bg-white text-[#202020] text-xs font-bold tracking-wider uppercase rounded-full hover:bg-neutral-100 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
                >
                  <span>Explore Properties</span>
                  <ArrowRight className="w-4 h-4 text-[#A77B43]" />
                </button>

                <button
                  onClick={onContactClick}
                  className="px-6 py-3.5 bg-[#A77B43] hover:bg-[#825B2E] text-white text-xs font-bold tracking-wider uppercase rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
                >
                  Let's Talk
                </button>

                <a
                  href={`tel:${AGENT_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-3 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20 transition-all duration-200"
                  title="Call Jonathan directly"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E2BA84]" />
                  <span>{AGENT_INFO.phone}</span>
                </a>
              </div>

              {/* Social Proof & Performance Badges */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-black/50 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center gap-0.5 text-[#E2BA84]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-white/90">
                    <span className="font-bold tabular-nums">5.0</span> Rating{' '}
                    <span className="text-white/40">·</span>{' '}
                    <span className="text-white/80 tabular-nums">148 Client Reviews</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-black/50 backdrop-blur-md border border-white/15 text-white text-xs">
                  <span className="font-bold text-[#E2BA84] tabular-nums">419+</span>
                  <span className="text-white/80">Closed Sales</span>
                  <span className="text-white/40">·</span>
                  <span className="font-bold text-[#E2BA84] tabular-nums">$88.5M+</span>
                  <span className="text-white/80">5-Yr Volume</span>
                </div>
              </div>

              {/* Popular Area Quick Shortcuts */}
              <div className="pt-1 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold text-white/60 uppercase tracking-wider mr-1">
                  Popular Markets:
                </span>
                {popularAreas.map((area) => (
                  <a
                    key={area}
                    href="#communities"
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white/85 hover:text-white border border-white/10 transition-colors"
                  >
                    {area}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Jonathan's Verified Profile Card positioned at the bottom end of the banner */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-end lg:self-end w-full">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/80 text-[#242424]">
                <div className="flex items-center gap-3.5 sm:gap-4 mb-3 pb-3 border-b border-[#E7E3DC]">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-[#A77B43] shadow-md bg-neutral-900">
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

                <p className="text-xs sm:text-sm text-[#545454] leading-relaxed">
                  19+ years helping buyers and sellers navigate Jacksonville, Mandarin, St. Johns County, and St. Augustine with personal guidance and verified market mastery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
