import { CheckCircle2, ArrowRight, ShieldCheck, Award, MapPin } from 'lucide-react';
import { AGENT_INFO } from '../data/agentData';

interface AboutJonathanProps {
  onContactClick: () => void;
}

export function AboutJonathan({ onContactClick }: AboutJonathanProps) {
  const credentials = [
    'Licensed Florida REALTOR® (#3268202) with 19 years of continuous practice',
    'Consistently ranked among the Top 100 Realtors in Northeast Florida',
    'Over 419 career transactions & $67M+ in verified buyer client volume',
    'Specialist in military PCS moves for NAS Jacksonville & Naval Station Mayport',
    'New construction negotiation across St. Johns, SilverLeaf & Nocatee',
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1680px] mx-auto">
      {/* Two-tone split card matching reference "About Us" section */}
      <div className="rounded-3xl sm:rounded-[36px] xl:rounded-[44px] overflow-hidden bg-[#202020] border border-neutral-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Column: Dark Charcoal Editorial Content (col-span-7) */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-between text-white">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 text-[#A77B43] text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Northeast Florida Real Estate Advisor</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Meet <span className="text-[#A77B43]">Jonathan Daugherty.</span>
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed mb-4">
              With over 19 years of dedicated practice in Jacksonville and more than 419 closed transactions, Jonathan Daugherty combines hyper-local market intelligence with transparent, high-touch advocacy. Partnered with <strong>Future Home Realty</strong>, Jonathan provides clients with institutional data tools and boutique personal service.
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed mb-8">
              Whether negotiating historic preservation requirements in Riverside, coordinating complex VA relocations for military families stationed at NAS Jacksonville, or evaluating new construction warranties in St. Johns County, Jonathan protects his clients' financial interests at every stage.
            </p>

            {/* Credentials Checklist */}
            <div className="space-y-3 mb-10">
              {credentials.map((cred, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#A77B43] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-300 leading-snug">
                    {cred}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-neutral-800">
            <button
              onClick={onContactClick}
              className="px-6 py-3.5 bg-[#A77B43] hover:bg-[#825B2E] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={AGENT_INFO.social.zillow}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors underline-offset-4 hover:underline py-2"
            >
              Verify on Zillow Profile →
            </a>
          </div>
        </div>

        {/* Right Column: Enhanced with Jonathan's Real Portrait & Live Market Presence (col-span-5) */}
        <div className="lg:col-span-5 relative min-h-[460px] sm:min-h-[520px] lg:min-h-full overflow-hidden bg-neutral-900 flex flex-col justify-end p-6 sm:p-8">
          {/* Main Background Image: Jonathan Daugherty Portrait */}
          <div className="absolute inset-0 z-0">
            <img
              src={AGENT_INFO.portraitImage}
              alt="Jonathan Daugherty, Florida Realtor"
              className="w-full h-full object-cover object-top filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
          </div>

          {/* Floating Top Badge */}
          <div className="relative z-10 self-start mb-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#E2BA84]" />
              <span>Northeast FL Active Market Leader</span>
            </div>
          </div>

          {/* Floating Regional Accreditation Badge on Bottom */}
          <div className="relative z-10 p-5 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 text-white shadow-2xl">
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/15">
              <div className="flex items-center gap-2 text-xs font-bold text-[#E2BA84] uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Jacksonville & St. Johns</span>
              </div>
              <div className="text-[11px] font-bold text-white tabular-nums">
                FL #3268202
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed mb-3">
              Office at 6274 Battlegate Rd. Over 190 closed sales and $88.5M in transaction volume over the past 5 years alone.
            </p>

            <div className="grid grid-cols-2 gap-2 text-center pt-1">
              <div className="p-2 rounded-xl bg-white/10 text-xs">
                <span className="text-[#E2BA84] font-bold block tabular-nums text-sm">49 Sales</span>
                <span className="text-neutral-400 text-[10px]">Saint Augustine</span>
              </div>
              <div className="p-2 rounded-xl bg-white/10 text-xs">
                <span className="text-[#E2BA84] font-bold block tabular-nums text-sm">23 Sales</span>
                <span className="text-neutral-400 text-[10px]">SilverLeaf</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
