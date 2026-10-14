import { Phone, ArrowRight } from 'lucide-react';
import { AGENT_INFO } from '../data/agentData';

interface ContactBannerProps {
  onContactClick: () => void;
}

export function ContactBanner({ onContactClick }: ContactBannerProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[380px] sm:min-h-[420px] shadow-2xl border border-[#E7E3DC] flex items-center">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <img
            src={AGENT_INFO.riverWaterfrontImage}
            alt="Jacksonville waterfront luxury community at sunset"
            className="w-full h-full object-cover filter brightness-[0.85]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 sm:p-14 lg:p-16 max-w-3xl text-white">
          <span className="text-xs font-bold text-[#E2BA84] uppercase tracking-wider block mb-3">
            Start Your Northeast Florida Search
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Your Next Move Starts With a Conversation.
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8 max-w-xl">
            Whether you are buying your first home, selling a property, evaluating new construction warranties, or exploring Jacksonville neighborhoods, Jonathan can help you understand your next steps.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onContactClick}
              className="px-7 py-3.5 bg-[#A77B43] hover:bg-[#825B2E] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Contact Jonathan</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={AGENT_INFO.phoneRaw}
              className="px-7 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E2BA84]" />
              <span className="tabular-nums">Call {AGENT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
