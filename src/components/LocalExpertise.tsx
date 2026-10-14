import { MapPin, ArrowRight, Award } from 'lucide-react';
import { EXPERIENCED_AREAS } from '../data/agentData';

interface LocalExpertiseProps {
  onCommunityInquiry: (communityName: string) => void;
}

export function LocalExpertise({ onCommunityInquiry }: LocalExpertiseProps) {
  return (
    <section id="communities" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E7E3DC]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-[#A77B43] uppercase tracking-wider">
            Verified Homes.com Sales Track Record
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242424] tracking-tight mt-2 text-balance">
            Areas Jonathan is <span className="text-[#A77B43]">Experienced In</span>
          </h2>
          <p className="text-sm sm:text-base text-[#747474] mt-3 leading-relaxed">
            Verified local transaction volume across Northeast Florida communities. With 49 sales in Saint Augustine, 23 in SilverLeaf, and over a decade of Mandarin riverfront expertise.
          </p>
        </div>

        <button
          onClick={() => onCommunityInquiry('Jacksonville Area Guidance')}
          className="px-6 py-3 bg-[#202020] hover:bg-[#343434] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all self-start md:self-auto shrink-0 shadow-sm"
        >
          Ask Jonathan About an Area
        </button>
      </div>

      {/* 6-Grid matching exact Homes.com "Areas Jonathan is Experienced In" */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPERIENCED_AREAS.map((area) => (
          <div
            key={area.id}
            className="group bg-white rounded-3xl overflow-hidden border border-[#E7E3DC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={area.image}
                  alt={area.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                
                {/* Sales badge exactly as shown in Homes.com */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-display text-xl font-bold text-white leading-tight">
                    {area.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#E2BA84] mt-0.5 tabular-nums">
                    <Award className="w-3.5 h-3.5" />
                    <span>{area.salesCount} Closed Sales</span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <p className="text-xs font-semibold text-[#A77B43] mb-2">
                  {area.tagline}
                </p>
                <p className="text-xs text-[#545454] leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7F6F2] text-xs font-medium">
                  <span className="text-[#747474]">Median Price:</span>
                  <span className="font-bold text-[#242424] tabular-nums">{area.avgPrice}</span>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => onCommunityInquiry(area.name)}
                className="w-full py-2.5 text-xs font-bold text-[#242424] hover:text-[#A77B43] border border-[#E7E3DC] hover:border-[#A77B43] rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Inquire About {area.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
