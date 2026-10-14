import { useState } from 'react';
import { ArrowUpRight, Bed, Bath, Square, MapPin } from 'lucide-react';
import { Property, PROPERTIES } from '../data/agentData';

interface PropertyDiscoveryProps {
  onSelectProperty: (property: Property) => void;
}

export function PropertyDiscovery({ onSelectProperty }: PropertyDiscoveryProps) {
  const [filter, setFilter] = useState<'all' | 'sale' | 'sold' | 'rent'>('all');

  const filteredProperties = PROPERTIES.filter((p) => {
    if (filter === 'sale') return p.status === 'For Sale';
    if (filter === 'sold') return p.status === 'Sold';
    if (filter === 'rent') return p.status === 'For Rent';
    return true;
  });

  const featured = filteredProperties[0] || PROPERTIES[0];
  const secondary = filteredProperties.slice(1, 4);

  return (
    <section id="properties" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header and Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-[#A77B43] uppercase tracking-wider">
            Zillow & Homes.com Verified Real Estate
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242424] tracking-tight mt-2 text-balance">
            Find a Home That <span className="text-[#A77B43]">Fits Your Life.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#747474] mt-3 leading-relaxed">
            Real active candidate listings, recently closed transactions, and rentals directly from Jonathan Daugherty's official Zillow profile.
          </p>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#EFEEE9] rounded-2xl border border-[#E7E3DC] self-start md:self-auto shrink-0 flex-wrap sm:flex-nowrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${
              filter === 'all'
                ? 'bg-white text-[#242424] shadow-sm'
                : 'text-[#747474] hover:text-[#242424]'
            }`}
          >
            All Homes
          </button>
          <button
            onClick={() => setFilter('sale')}
            className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${
              filter === 'sale'
                ? 'bg-white text-[#242424] shadow-sm'
                : 'text-[#747474] hover:text-[#242424]'
            }`}
          >
            For Sale (4)
          </button>
          <button
            onClick={() => setFilter('sold')}
            className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${
              filter === 'sold'
                ? 'bg-white text-[#242424] shadow-sm'
                : 'text-[#747474] hover:text-[#242424]'
            }`}
          >
            Past Sales (6)
          </button>
          <button
            onClick={() => setFilter('rent')}
            className={`px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${
              filter === 'rent'
                ? 'bg-white text-[#242424] shadow-sm'
                : 'text-[#747474] hover:text-[#242424]'
            }`}
          >
            For Rent (1)
          </button>
        </div>
      </div>

      {/* Asymmetric Bento Grid - Inspired directly by reference screenshot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Column: Featured Marquee Property Card (col-span-7) */}
        {featured && (
          <div
            onClick={() => onSelectProperty(featured)}
            className="lg:col-span-7 group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] border border-[#E7E3DC]"
          >
            <img
              src={featured.image}
              alt={featured.address}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Top Status Tag */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md ${
                  featured.status === 'Sold'
                    ? 'bg-[#202020] text-white border border-white/20'
                    : featured.status === 'For Rent'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-[#A77B43] text-white'
                }`}
              >
                {featured.status === 'Sold'
                  ? 'Verified Sale'
                  : featured.status === 'For Rent'
                  ? 'Rental Listing'
                  : 'Active Listing'}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-medium">
                {featured.neighborhood}
              </span>
            </div>

            {/* Bottom Floating Info Card - Exact Match to Reference design */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-xl border border-white/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-transform duration-300 group-hover:-translate-y-1">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#242424] tabular-nums">
                      {featured.priceFormatted}
                    </span>
                    {featured.representation && (
                      <span className="text-[11px] text-[#A77B43] font-semibold">
                        · {featured.representation}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#545454] mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#A77B43] shrink-0" />
                    <span>{featured.address}, {featured.city}</span>
                  </div>
                </div>

                {/* Specs Pill & Details Action */}
                <div className="flex items-center gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#E7E3DC]">
                  <div className="flex items-center gap-4 text-xs text-[#343434] font-semibold tabular-nums">
                    <div>
                      <span className="text-[#747474] font-normal block text-[10px]">Sq. Ft</span>
                      {featured.sqft.toLocaleString()}
                    </div>
                    <div className="w-px h-6 bg-[#E7E3DC]" />
                    <div>
                      <span className="text-[#747474] font-normal block text-[10px]">Beds</span>
                      {featured.beds}
                    </div>
                    <div className="w-px h-6 bg-[#E7E3DC]" />
                    <div>
                      <span className="text-[#747474] font-normal block text-[10px]">Baths</span>
                      {featured.baths}
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#A77B43] text-white flex items-center justify-center shrink-0 group-hover:bg-[#825B2E] transition-colors shadow-sm">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Right Column: 3 Secondary Cards (col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          {secondary.map((property) => (
            <div
              key={property.id}
              onClick={() => onSelectProperty(property)}
              className="group relative bg-white rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 border border-[#E7E3DC] flex flex-col sm:flex-row lg:flex-row h-full min-h-[170px]"
            >
              {/* Thumbnail Container */}
              <div className="relative sm:w-2/5 lg:w-2/5 min-h-[160px] sm:min-h-full overflow-hidden bg-neutral-100">
                <img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                      property.status === 'Sold'
                        ? 'bg-[#202020] text-white'
                        : property.status === 'For Rent'
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#A77B43] text-white'
                    }`}
                  >
                    {property.status === 'Sold'
                      ? 'Sold'
                      : property.status === 'For Rent'
                      ? 'Rent'
                      : 'For Sale'}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-medium text-[#747474] uppercase tracking-wide">
                    {property.neighborhood}
                  </div>
                  <div className="font-display text-lg sm:text-xl font-bold text-[#242424] mt-0.5 tabular-nums">
                    {property.priceFormatted}
                  </div>
                  <div className="text-xs text-[#545454] line-clamp-1 mt-0.5">
                    {property.address}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#E7E3DC] text-xs text-[#747474]">
                  <div className="flex items-center gap-3 tabular-nums font-medium text-[#343434]">
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
      </div>
    </section>
  );
}
