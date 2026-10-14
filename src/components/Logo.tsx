interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ variant = 'dark', size = 'md', className = '' }: LogoProps) {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  };

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Bespoke Architectural Emblem */}
      <div
        className={`${iconSizes[size]} rounded-xl relative flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105 ${
          isLight ? 'bg-white text-[#202020]' : 'bg-[#202020] text-[#A77B43]'
        }`}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          {/* Architectural roofline structure */}
          <path
            d="M18 5L5 15V29C5 29.5523 5.44772 30 6 30H30C30.5523 30 31 29.5523 31 29V15L18 5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isLight ? 'stroke-[#A77B43]' : 'stroke-[#A77B43]'}
          />
          {/* Inner Keystone Arch & JD Monogram geometry */}
          <path
            d="M13 18C13 15.2386 15.2386 13 18 13C20.7614 13 23 15.2386 23 18V30H13V18Z"
            fill={isLight ? '#F7F6F2' : '#2C2B29'}
            stroke="currentColor"
            strokeWidth="1.5"
            className={isLight ? 'stroke-[#202020]' : 'stroke-[#E2BA84]'}
          />
          {/* Monogram Pillar */}
          <circle cx="18" cy="18" r="1.75" fill="#A77B43" />
          <path
            d="M18 21V26"
            stroke="#A77B43"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col text-left">
        <span
          className={`font-display font-extrabold tracking-tight leading-none ${titleSizes[size]} ${
            isLight ? 'text-white' : 'text-[#202020]'
          }`}
        >
          Jonathan Daugherty
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`font-semibold tracking-wider uppercase ${subSizes[size]} ${
              isLight ? 'text-[#E2BA84]' : 'text-[#A77B43]'
            }`}
          >
            Realtor®
          </span>
          <span
            className={`text-[9px] ${
              isLight ? 'text-neutral-500' : 'text-neutral-300'
            }`}
          >
            ·
          </span>
          <span
            className={`font-medium tracking-wide ${subSizes[size]} ${
              isLight ? 'text-neutral-400' : 'text-[#747474]'
            }`}
          >
            Future Home Realty
          </span>
        </div>
      </div>
    </div>
  );
}
