import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatisticsStrip } from './components/StatisticsStrip';
import { PropertyDiscovery } from './components/PropertyDiscovery';
import { AboutJonathan } from './components/AboutJonathan';
import { SoldProperties } from './components/SoldProperties';
import { Services } from './components/Services';
import { LocalExpertise } from './components/LocalExpertise';
import { Testimonials } from './components/Testimonials';
import { MortgageCalculator } from './components/MortgageCalculator';
import { ContactBanner } from './components/ContactBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyModal } from './components/PropertyModal';
import { Property } from './data/agentData';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [contactInterest, setContactInterest] = useState<string>('Buying a Home');
  const [contactMessage, setContactMessage] = useState<string>('');

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProperties = () => {
    const propElem = document.getElementById('properties');
    if (propElem) {
      propElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceSelect = (interestType: string) => {
    setContactInterest(interestType);
    setContactMessage(`I am interested in learning more about your ${interestType} services in Northeast Florida.`);
    scrollToContact();
  };

  const handleCommunityInquiry = (communityName: string) => {
    setContactInterest('Buying a Home');
    setContactMessage(`I would like to explore available homes and neighborhood dynamics in ${communityName}, Florida.`);
    scrollToContact();
  };

  const handlePropertyInquiry = (address: string) => {
    setContactInterest('Buying a Home');
    setContactMessage(`I would like more information or to schedule a private tour for the property at ${address}.`);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#242424] flex flex-col font-sans-body antialiased selection:bg-[#A77B43]/20 selection:text-[#242424]">
      {/* Sticky Header */}
      <Header onContactClick={scrollToContact} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={scrollToProperties}
          onContactClick={scrollToContact}
          onSelectProperty={setSelectedProperty}
        />

        {/* 5-Metric Strip */}
        <StatisticsStrip />

        {/* Property Discovery: Asymmetric Bento Grid matching Reference */}
        <PropertyDiscovery onSelectProperty={setSelectedProperty} />

        {/* About Jonathan: Split Dark Panel matching Reference */}
        <AboutJonathan onContactClick={scrollToContact} />

        {/* Dedicated Verified Sold Properties */}
        <SoldProperties onSelectProperty={setSelectedProperty} />

        {/* Real Estate Guidance Services */}
        <Services onSelectService={handleServiceSelect} />

        {/* Local Jacksonville Neighborhood Intelligence */}
        <LocalExpertise onCommunityInquiry={handleCommunityInquiry} />

        {/* Authentic Client Testimonials & 5.0 Rating */}
        <Testimonials />

        {/* Florida Mortgage & Monthly Affordability Estimator */}
        <MortgageCalculator />

        {/* Conversion CTA Banner */}
        <ContactBanner onContactClick={scrollToContact} />

        {/* Contact Details & Validated Form */}
        <ContactSection
          initialInterest={contactInterest}
          initialMessage={contactMessage}
        />
      </main>

      {/* Dark Footer */}
      <Footer />

      {/* Interactive Property Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onInquire={handlePropertyInquiry}
      />
    </div>
  );
}
