import { Home, TrendingUp, Compass, Award, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/agentData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'buying':
        return <Home className="w-6 h-6 text-[#A77B43]" />;
      case 'selling':
        return <TrendingUp className="w-6 h-6 text-[#A77B43]" />;
      case 'first-time':
        return <Compass className="w-6 h-6 text-[#A77B43]" />;
      case 'military-new-build':
        return <Award className="w-6 h-6 text-[#A77B43]" />;
      default:
        return <Home className="w-6 h-6 text-[#A77B43]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-14">
        <span className="text-xs font-bold text-[#A77B43] uppercase tracking-wider">
          Client-Centric Real Estate Representation
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242424] tracking-tight mt-2 text-balance">
          Real Estate Guidance <span className="text-[#A77B43]">for Every Move.</span>
        </h2>
        <p className="text-sm sm:text-base text-[#747474] mt-3 leading-relaxed">
          Whether you are purchasing your first home, maximizing your equity on a sale, or relocating across the country to Northeast Florida, Jonathan provides high-touch personal guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="group bg-white rounded-3xl p-7 border border-[#E7E3DC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F7F6F2] group-hover:bg-[#A77B43]/10 transition-colors flex items-center justify-center mb-6">
                {getIcon(service.id)}
              </div>

              <h3 className="font-display text-xl font-bold text-[#242424] mb-3">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#545454] leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-xs text-[#747474] flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A77B43] shrink-0 mt-1.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectService(service.interestType)}
              className="w-full py-3 px-4 bg-[#F7F6F2] group-hover:bg-[#A77B43] text-[#242424] group-hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>{service.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
