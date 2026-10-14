import { useState } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { REVIEWS, AGENT_INFO } from '../data/agentData';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1680px] mx-auto border-t border-[#E7E3DC]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl xl:max-w-3xl">
          <span className="text-xs font-bold text-[#A77B43] uppercase tracking-wider">
            Verified Client Feedback
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#242424] tracking-tight mt-2 text-balance">
            What Clients Say About <span className="text-[#A77B43]">Working With Jonathan.</span>
          </h2>
          <p className="text-sm sm:text-base xl:text-lg text-[#747474] mt-3 leading-relaxed">
            Rated 5.0 out of 5.0 across 148 verified client reviews on Zillow & Experience.com. Authentic testimonials from real Northeast Florida home sales and purchases.
          </p>
        </div>

        {/* Aggregate trust badge */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E7E3DC] shadow-sm self-start md:self-auto shrink-0">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-[#A77B43]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-display font-extrabold text-base text-[#242424] tabular-nums mt-0.5">
              5.0 / 5.0 Rating
            </span>
          </div>
          <div className="w-px h-10 bg-[#E7E3DC]" />
          <div className="text-xs text-[#747474] font-medium leading-tight">
            <span className="font-bold text-[#242424] block tabular-nums">148 Reviews</span>
            100% Recommended
          </div>
        </div>
      </div>

      {/* Grid of Client Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 mb-10">
        {REVIEWS.slice(0, 3).map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-3xl xl:rounded-[32px] p-7 xl:p-8 border border-[#E7E3DC] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-[#A77B43]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-[#747474] tabular-nums">
                  {review.date}
                </span>
              </div>

              <Quote className="w-6 h-6 text-[#A77B43]/20 mb-2" />

              <p className="text-xs sm:text-sm text-[#343434] leading-relaxed italic mb-6">
                "{review.text}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#E7E3DC]">
              <div className="font-display font-bold text-sm text-[#242424]">
                {review.author}
              </div>
              <div className="text-[11px] text-[#747474] flex items-center justify-between mt-0.5">
                <span>{review.transactionType}</span>
                <span className="text-[#A77B43] font-medium">{review.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Actions & Additional Testimonials Drawer/Link */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-[#EFEEE9] border border-[#E7E3DC]">
        <div className="text-xs text-[#545454]">
          <span className="font-bold text-[#242424]">Source Verified: </span>
          All reviews sourced from verified Zillow and Experience.com client transaction surveys.
        </div>

        <a
          href={AGENT_INFO.social.zillow}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-neutral-50 text-[#242424] text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm border border-[#E7E3DC]"
        >
          <span>Read All 148 Reviews on Zillow</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#A77B43]" />
        </a>
      </div>
    </section>
  );
}
