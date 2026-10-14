import { X, Bed, Bath, Square, MapPin, ExternalLink, MessageSquare, Check } from 'lucide-react';
import { Property, AGENT_INFO } from '../data/agentData';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onInquire: (propertyAddress: string) => void;
}

export function PropertyModal({ property, onClose, onInquire }: PropertyModalProps) {
  if (!property) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl lg:max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E7E3DC] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors"
          aria-label="Close property details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Container */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-100">
          <img
            src={property.image}
            alt={property.address}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md ${
                property.status === 'Sold'
                  ? 'bg-neutral-900 text-white border border-white/20'
                  : property.status === 'For Rent'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#A77B43] text-white'
              }`}
            >
              {property.status === 'Sold'
                ? 'Sold'
                : property.status === 'For Rent'
                ? 'Active Rental · 3D Tour'
                : 'For Sale · Active Listing'}
            </span>
          </div>

          {/* Price & Address Overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums">
              {property.priceFormatted}
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-white/90 font-medium mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-[#E2BA84] shrink-0" />
              <span>{property.address}, {property.city}, {property.state} {property.zip}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* Specs Row */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F7F6F2] text-center mb-6 border border-[#E7E3DC]">
            <div className="flex flex-col items-center">
              <span className="flex items-center gap-1.5 text-xs text-[#747474] font-medium">
                <Bed className="w-4 h-4 text-[#A77B43]" /> Beds
              </span>
              <span className="font-display text-lg font-bold text-[#242424] tabular-nums mt-0.5">
                {property.beds}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="flex items-center gap-1.5 text-xs text-[#747474] font-medium">
                <Bath className="w-4 h-4 text-[#A77B43]" /> Baths
              </span>
              <span className="font-display text-lg font-bold text-[#242424] tabular-nums mt-0.5">
                {property.baths}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="flex items-center gap-1.5 text-xs text-[#747474] font-medium">
                <Square className="w-4 h-4 text-[#A77B43]" /> Living Area
              </span>
              <span className="font-display text-lg font-bold text-[#242424] tabular-nums mt-0.5">
                {property.sqft.toLocaleString()} <span className="text-xs font-normal text-[#747474]">sq ft</span>
              </span>
            </div>
          </div>

          {/* Representation & Neighborhood Info */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-[#E7E3DC] text-xs">
            <div>
              <span className="text-[#747474]">Neighborhood: </span>
              <span className="font-semibold text-[#242424]">{property.neighborhood}</span>
            </div>
            {property.representation && (
              <div className="px-2.5 py-1 rounded-md bg-[#EFEEE9] text-[#545454] font-medium">
                {property.representation}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="font-display text-sm font-bold text-[#242424] uppercase tracking-wider mb-2">
              Property Overview
            </h4>
            <p className="text-sm text-[#545454] leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Key Features */}
          {property.features && property.features.length > 0 && (
            <div className="mb-8">
              <h4 className="font-display text-sm font-bold text-[#242424] uppercase tracking-wider mb-3">
                Key Features & Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#343434]">
                    <div className="w-4 h-4 rounded-full bg-[#A77B43]/15 text-[#A77B43] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#E7E3DC]">
            <button
              onClick={() => {
                onInquire(property.address);
                onClose();
              }}
              className="w-full sm:flex-1 py-3 px-5 bg-[#A77B43] hover:bg-[#825B2E] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire About This Home</span>
            </button>

            <a
              href={AGENT_INFO.social.zillow}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-5 border border-[#E7E3DC] hover:border-[#242424] text-[#242424] text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>View Agent Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#747474]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
