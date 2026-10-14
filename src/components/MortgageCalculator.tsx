import { useState } from 'react';
import { Calculator, DollarSign, Percent, Calendar, Shield } from 'lucide-react';

export function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState<number>(475000);
  const [downPaymentPct, setDownPaymentPct] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTermYears, setLoanTermYears] = useState<number>(30);

  const downPaymentAmount = Math.round((homePrice * downPaymentPct) / 100);
  const loanAmount = Math.max(0, homePrice - downPaymentAmount);

  // Monthly Principal & Interest calculation
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  const monthlyPI =
    monthlyRate > 0 && loanAmount > 0
      ? (loanAmount *
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      : 0;

  // Florida typical property tax (~1.05% annually)
  const monthlyTax = Math.round((homePrice * 0.0105) / 12);
  // Florida typical homeowners insurance (~$180/mo average on single family)
  const monthlyInsurance = Math.round((homePrice * 0.005) / 12);

  const totalMonthly = Math.round(monthlyPI + monthlyTax + monthlyInsurance);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1680px] mx-auto">
      <div className="bg-white rounded-3xl xl:rounded-[36px] p-6 sm:p-10 lg:p-12 xl:p-16 border border-[#E7E3DC] shadow-sm">
        <div className="max-w-3xl xl:max-w-4xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#A77B43] uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4" />
            <span>Buyer Planning Tool</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#242424] tracking-tight">
            Northeast Florida Mortgage & Affordability Estimator
          </h2>
          <p className="text-xs sm:text-sm xl:text-base text-[#747474] mt-2 leading-relaxed">
            Estimate your monthly investment including Principal, Interest, Florida Property Tax (avg 1.05%), and Homeowners Hazard Insurance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            {/* Home Price */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-[#242424] mb-2">
                <span>Estimated Home Purchase Price</span>
                <span className="font-display text-base font-extrabold text-[#A77B43] tabular-nums">
                  ${homePrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="1600000"
                step="5000"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full accent-[#A77B43] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#747474] mt-1 tabular-nums">
                <span>$100K</span>
                <span>Average: $473K</span>
                <span>$1.6M+</span>
              </div>
            </div>

            {/* Down Payment & Term */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#F7F6F2] border border-[#E7E3DC]">
                <label className="text-xs font-bold text-[#242424] block mb-1.5">
                  Down Payment ({downPaymentPct}%)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={downPaymentPct}
                    onChange={(e) => setDownPaymentPct(Math.min(100, Math.max(0, Number(e.target.value))))}
                    className="w-16 p-2 text-xs font-bold bg-white rounded-lg border border-[#E7E3DC] text-center"
                  />
                  <span className="text-xs font-bold text-[#747474] tabular-nums">
                    = ${downPaymentAmount.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F6F2] border border-[#E7E3DC]">
                <label className="text-xs font-bold text-[#242424] block mb-1.5">
                  Interest Rate (%)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    step="0.1"
                    min="3.0"
                    max="12.0"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-20 p-2 text-xs font-bold bg-white rounded-lg border border-[#E7E3DC] text-center"
                  />
                  <span className="text-xs text-[#747474]">30-Yr Fixed</span>
                </div>
              </div>
            </div>

            {/* Loan Term Selection */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#545454]">Loan Term:</span>
              <button
                type="button"
                onClick={() => setLoanTermYears(30)}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  loanTermYears === 30
                    ? 'bg-[#202020] text-white'
                    : 'bg-[#EFEEE9] text-[#747474] hover:text-[#242424]'
                }`}
              >
                30 Years
              </button>
              <button
                type="button"
                onClick={() => setLoanTermYears(15)}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  loanTermYears === 15
                    ? 'bg-[#202020] text-white'
                    : 'bg-[#EFEEE9] text-[#747474] hover:text-[#242424]'
                }`}
              >
                15 Years
              </button>
            </div>
          </div>

          {/* Breakdown Result Card */}
          <div className="lg:col-span-5 bg-[#202020] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
            <span className="text-xs font-bold text-[#A77B43] uppercase tracking-wider">
              Estimated Monthly Investment
            </span>
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-white mt-1 mb-4 tabular-nums">
              ${totalMonthly.toLocaleString()}{' '}
              <span className="text-xs font-normal text-neutral-400">/ mo</span>
            </div>

            {/* Visual Bar Breakdown */}
            <div className="h-3 w-full bg-neutral-800 rounded-full overflow-hidden flex mb-6">
              <div
                style={{ width: `${(monthlyPI / totalMonthly) * 100}%` }}
                className="bg-[#A77B43]"
                title="Principal & Interest"
              />
              <div
                style={{ width: `${(monthlyTax / totalMonthly) * 100}%` }}
                className="bg-[#CDB289]"
                title="Property Tax"
              />
              <div
                style={{ width: `${(monthlyInsurance / totalMonthly) * 100}%` }}
                className="bg-neutral-400"
                title="Homeowners Insurance"
              />
            </div>

            {/* Breakdown Legend */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center text-neutral-300">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A77B43]" />
                  Principal & Interest
                </span>
                <span className="font-bold tabular-nums">${Math.round(monthlyPI).toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center text-neutral-300">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#CDB289]" />
                  FL Property Tax (est. 1.05%)
                </span>
                <span className="font-bold tabular-nums">${monthlyTax.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center text-neutral-300">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-400" />
                  Homeowners Insurance (est.)
                </span>
                <span className="font-bold tabular-nums">${monthlyInsurance.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] text-neutral-400 leading-snug">
              Estimated for informational planning only. Jonathan partners with top Jacksonville lenders to get pre-approved loan terms.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
