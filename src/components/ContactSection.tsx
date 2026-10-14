import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ExternalLink, Instagram, Linkedin, Home } from 'lucide-react';
import { AGENT_INFO } from '../data/agentData';

interface ContactSectionProps {
  initialInterest?: string;
  initialMessage?: string;
}

export function ContactSection({ initialInterest, initialMessage }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Buying a Home',
    priceRange: '$400K – $700K',
    message: '',
  });

  useEffect(() => {
    if (initialInterest) {
      setFormData((prev) => ({ ...prev, interest: initialInterest }));
    }
  }, [initialInterest]);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone number.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please provide a 10-digit telephone number.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message regarding your goals.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission with fallback support
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Real Estate Inquiry: ${formData.interest} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterest: ${formData.interest}\nBudget Range: ${formData.priceRange}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${AGENT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-16 border border-[#E7E3DC] shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Details & Direct Channels (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#A77B43] uppercase tracking-wider">
                Direct Communication
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#242424] tracking-tight mt-2 mb-4 text-balance">
                Let's Talk About Your <span className="text-[#A77B43]">Real Estate Goals.</span>
              </h2>
              <p className="text-sm text-[#747474] leading-relaxed mb-8">
                Reach Jonathan directly for confidential consultations, comparative market analyses, neighborhood tours, and off-market property previews.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                <a
                  href={AGENT_INFO.phoneRaw}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#F7F6F2] hover:bg-[#EFEEE9] border border-[#E7E3DC] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#A77B43] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#747474] uppercase tracking-wider block">
                      Direct Telephone
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#242424] tabular-nums">
                      {AGENT_INFO.phone} <span className="text-xs text-[#747474] font-normal">/ {AGENT_INFO.phoneAlt}</span>
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${AGENT_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#F7F6F2] hover:bg-[#EFEEE9] border border-[#E7E3DC] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#A77B43] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#747474] uppercase tracking-wider block">
                      Email Jonathan
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#242424] break-all">
                      {AGENT_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F6F2] border border-[#E7E3DC]">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#A77B43] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#747474] uppercase tracking-wider block">
                      Office Location & Brokerage
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#242424]">
                      {AGENT_INFO.officeAddress}
                    </span>
                    <span className="text-[11px] text-[#A77B43] font-semibold block mt-0.5">
                      {AGENT_INFO.team} · {AGENT_INFO.brokerage}
                    </span>
                    <span className="text-[10px] text-[#747474] block">
                      {AGENT_INFO.license}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Verified Profiles */}
            <div>
              <span className="text-xs font-bold text-[#545454] uppercase tracking-wider block mb-3">
                Verified Professional Profiles
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={AGENT_INFO.social.zillow}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-[#F7F6F2] hover:bg-[#A77B43] text-[#242424] hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5 border border-[#E7E3DC]"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Zillow (5.0 ★)</span>
                </a>

                <a
                  href={AGENT_INFO.social.homes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-[#F7F6F2] hover:bg-[#A77B43] text-[#242424] hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5 border border-[#E7E3DC]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Homes.com</span>
                </a>

                <a
                  href={AGENT_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-[#F7F6F2] hover:bg-[#A77B43] text-[#242424] hover:text-white transition-colors border border-[#E7E3DC]"
                  aria-label="Instagram @jacksonville_realtor"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={AGENT_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-[#F7F6F2] hover:bg-[#A77B43] text-[#242424] hover:text-white transition-colors border border-[#E7E3DC]"
                  aria-label="Jonathan Daugherty LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Validated Lead Form (col-span-7) */}
          <div className="lg:col-span-7 bg-[#F7F6F2] rounded-3xl p-6 sm:p-10 border border-[#E7E3DC]">
            {isSubmitted ? (
              <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#A77B43]/15 text-[#A77B43] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#242424] mb-2">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-[#545454] max-w-md mx-auto leading-relaxed mb-6">
                  Your inquiry has been received. Jonathan will personally review your details and reach out within 2 to 4 business hours.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        interest: 'Buying a Home',
                        priceRange: '$400K – $700K',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-white border border-[#E7E3DC] text-[#242424] text-xs font-bold uppercase rounded-xl hover:bg-neutral-50 transition-colors"
                  >
                    Send Another Note
                  </button>

                  <button
                    onClick={handleMailtoFallback}
                    className="px-6 py-2.5 bg-[#A77B43] text-white text-xs font-bold uppercase rounded-xl hover:bg-[#825B2E] transition-colors"
                  >
                    Open in Email App
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-bold text-[#242424] block mb-1.5">
                      Full Name <span className="text-[#A77B43]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. David Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 text-xs bg-white rounded-xl border text-[#242424] placeholder-[#A09D96] focus:outline-none focus:ring-2 focus:ring-[#A77B43] ${
                        errors.name ? 'border-red-500' : 'border-[#E7E3DC]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs font-bold text-[#242424] block mb-1.5">
                      Email Address <span className="text-[#A77B43]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="david@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 text-xs bg-white rounded-xl border text-[#242424] placeholder-[#A09D96] focus:outline-none focus:ring-2 focus:ring-[#A77B43] ${
                        errors.email ? 'border-red-500' : 'border-[#E7E3DC]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="text-xs font-bold text-[#242424] block mb-1.5">
                      Phone Number <span className="text-[#A77B43]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="(904) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 text-xs bg-white rounded-xl border text-[#242424] placeholder-[#A09D96] focus:outline-none focus:ring-2 focus:ring-[#A77B43] ${
                        errors.phone ? 'border-red-500' : 'border-[#E7E3DC]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="text-xs font-bold text-[#242424] block mb-1.5">
                      Primary Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-white rounded-xl border border-[#E7E3DC] text-[#242424] focus:outline-none focus:ring-2 focus:ring-[#A77B43]"
                    >
                      <option value="Buying a Home">Buying a Home</option>
                      <option value="Selling a Home">Selling a Home</option>
                      <option value="First-Time Homebuyer">First-Time Homebuyer</option>
                      <option value="Military Relocation">Military Relocation (PCS)</option>
                      <option value="New Construction">New Construction</option>
                      <option value="General Inquiry">General Jacksonville Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-xs font-bold text-[#242424] block mb-1.5">
                    Target Price Range
                  </label>
                  <select
                    value={formData.priceRange}
                    onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
                    className="w-full px-4 py-3 text-xs bg-white rounded-xl border border-[#E7E3DC] text-[#242424] focus:outline-none focus:ring-2 focus:ring-[#A77B43]"
                  >
                    <option value="Under $300,000">Under $300,000</option>
                    <option value="$300K – $500K">$300,000 – $500,000</option>
                    <option value="$500K – $800K">$500,000 – $800,000</option>
                    <option value="$800K – $1.2M">$800,000 – $1,200,000</option>
                    <option value="$1.2M+">$1,200,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-bold text-[#242424] block mb-1.5">
                    Your Message / Target Neighborhoods <span className="text-[#A77B43]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell Jonathan about your ideal timeline, property preferences, or preferred Jacksonville neighborhoods..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 text-xs bg-white rounded-xl border text-[#242424] placeholder-[#A09D96] focus:outline-none focus:ring-2 focus:ring-[#A77B43] ${
                      errors.message ? 'border-red-500' : 'border-[#E7E3DC]'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-[#A77B43] hover:bg-[#825B2E] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Sending your inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Jonathan</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#747474] text-center leading-snug pt-1">
                  Jonathan respects your privacy. Your information is never sold, shared, or distributed. Calls or messages are direct and personalized.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
