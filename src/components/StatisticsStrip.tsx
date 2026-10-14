import { AGENT_INFO } from '../data/agentData';

export function StatisticsStrip() {
  const stats = [
    {
      value: AGENT_INFO.stats.rating,
      suffix: '★',
      label: 'Client Rating',
      sublabel: `${AGENT_INFO.stats.reviewCount} verified client reviews`,
    },
    {
      value: AGENT_INFO.stats.totalSales.toString(),
      suffix: '+',
      label: 'Career Closed Sales',
      sublabel: 'Over 600 homes sold since 2009',
    },
    {
      value: AGENT_INFO.stats.salesLastYear.toString(),
      suffix: '',
      label: 'Sales Past 12 Months',
      sublabel: 'Active high-volume production',
    },
    {
      value: AGENT_INFO.stats.totalValueFiveYear,
      suffix: '',
      label: '5-Year Closed Volume',
      sublabel: `${AGENT_INFO.stats.averagePriceFiveYear} avg price (${AGENT_INFO.stats.priceRange})`,
    },
    {
      value: AGENT_INFO.stats.yearsExperience.toString(),
      suffix: ' Yrs',
      label: 'Northeast FL Experience',
      sublabel: 'Duval, St. Johns & Clay counties',
    },
  ];

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E7E3DC] shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E7E3DC]/80">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col ${idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''}`}
            >
              <div className="flex items-baseline gap-0.5">
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#242424] tabular-nums tracking-tight">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="font-display text-lg sm:text-xl font-bold text-[#A77B43]">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#242424] mt-1 tracking-tight">
                {stat.label}
              </span>
              <span className="text-[11px] text-[#747474] font-medium mt-0.5 leading-snug">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
