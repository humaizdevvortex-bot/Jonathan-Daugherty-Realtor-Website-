import { useState } from 'react';
import { Bed, Bath, Square, ArrowUpRight, Check, ExternalLink } from 'lucide-react';
import { Property, PROPERTIES, AGENT_INFO } from '../data/agentData';

interface SoldPropertiesProps {
  onSelectProperty: (property: Property) => void;
}

export function SoldProperties({ onSelectProperty }: SoldPropertiesProps) {
  const [repFilter, setRepFilter] = useState<'all' | 'buyer' | 'seller'>('all');
  const [showAll, setShowAll] = useState(false);

  const soldProperties = PROPERTIES.filter((p) => p.status === 'Sold').filter((p) => {
    if (repFilter === 'buyer') return p.representation?.toLowerCase().includes('buyer');
    if (repFilter === 'seller') return p.representation?.toLowerCase().includes('seller');
    return true;
  });

  const displayedProperties = showAll ? soldProperties : soldProperties.slice(0, 4);

  return (
    <section id="sold-homes" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E7E3DC]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-[#A77B43] uppercase tracking-wider">
            Verified Historical Sales Record
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242424] tracking-tight mt-2 text-balance">
            Proven Experience. <span className="text-[#A77B43]">Real Transactions.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#747474] mt-3 leading-relaxed">
            A verified track record across Jacksonville, Mandarin, Julington Creek, and Riverside. Each property below represents a successfully executed transaction representing buyers or sellers.
          </p>
        </div>

        {/* Representation filter */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#EFEEE9] rounded-2xl border border-[#E7E3DC] self-start md:self-auto shrink-0">
          <button
            onClick={() => setRepFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${
              repFilter === 'all'
                ? 'bg-white text-[#242424] shadow-sm'
                : 'text-[#747474] hover:text-[#242424]'
            }`}
          >
            All Sales
          </button>
          <button
            onClick={() => setRepFilter('buyer')}
            className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${
              repFilter === 'buyer'
                ? 'bg-white text-[#242424] shadow-sm'
                : 'text-[#747474] hover:text-[#242424]'
            }`}
          >
            Buyer Rep
          </button>
          <button
            onClick={() => setRepFilter('seller')}
            className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${
              repFilter === 'seller'
                ? 'bg-white text-[#242424] shadow-sm'
                : 'text-[#747474] hover:text-[#242424]'
            }`}
          >
            Seller Rep
          </button>
        </div>
      </div>

      {/* Grid of Sold Properties */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProperties.map((property) => (
          <div
            key={property.id}
            onClick={() => onSelectProperty(property)}
            className="group bg-white rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E7E3DC] flex flex-col justify-between"
          >
            {/* Image Container with explicit SOLD label */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
              <img
                src={property.image}
                alt={property.address}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Bold Explicit SOLD Label */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <span className="px-3 py-1 rounded-full bg-[#202020] text-white text-[11px] font-extrabold tracking-widest uppercase shadow-md border border-white/20">
                  Sold
                </span>
              </div>

              {/* Representation tag on image bottom */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] font-semibold text-[#E2BA84] drop-shadow">
                  {property.representation}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="text-[11px] font-bold text-[#747474] uppercase tracking-wider">
                    {property.neighborhood}
                  </div>
                  {property.soldDate && (
                    <span className="text-[10px] font-bold text-[#A77B43] bg-[#F7F6F2] px-2 py-0.5 rounded-md border border-[#E7E3DC]">
                      {property.soldDate}
                    </span>
                  )}
                </div>
                <div className="font-display text-xl font-bold text-[#242424] mt-1 tabular-nums">
                  {property.priceFormatted}
                </div>
                <div className="text-xs text-[#545454] mt-0.5 line-clamp-1">
                  {property.address}
                </div>
                {property.daysOnMarket && (
                  <div className="text-[10px] text-[#747474] font-medium mt-1">
                    {property.daysOnMarket} {property.pricePerSqFt ? `· ${property.pricePerSqFt}` : ''}
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-[#E7E3DC] flex items-center justify-between text-xs text-[#747474]">
                <div className="flex items-center gap-3 font-medium text-[#343434] tabular-nums">
                  <span className="flex items-center gap-1">
                    <Bed className="w-3.5 h-3.5 text-[#A77B43]" /> {property.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="w-3.5 h-3.5 text-[#A77B43]" /> {property.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <Square className="w-3.5 h-3.5 text-[#A77B43]" /> {property.sqft.toLocaleString()}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-full bg-[#EFEEE9] group-hover:bg-[#A77B43] group-hover:text-white transition-colors flex items-center justify-center text-[#242424]">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination or View More */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        {soldProperties.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 border border-[#202020] hover:bg-[#202020] text-[#202020] hover:text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200"
          >
            {showAll ? 'Show Fewer Sold Homes' : `View All (${soldProperties.length}) Sold Records`}
          </button>
        )}

        <a
          href={AGENT_INFO.social.zillow}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#A77B43] hover:text-[#825B2E] transition-colors py-2"
        >
          <span>View All 419+ Sales on Zillow Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
