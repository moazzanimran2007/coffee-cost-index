import { useState } from "react";
import { motion } from "framer-motion";
import SteamingCoffee from "@/components/SteamingCoffee";
import CitySelector from "@/components/CitySelector";
import WorldMap from "@/components/WorldMap";
import CityRanking from "@/components/CityRanking";
import WhySection from "@/components/WhySection";
import ComparisonCalculator from "@/components/ComparisonCalculator";
import { type CityData, formatMinutes } from "@/data/cities";

const Index = () => {
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-espresso min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_40%,hsl(44,52%,54%)_0%,transparent_50%)]" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-4 tracking-tight">
            The <span className="text-gold italic">Latte</span> Index
          </h1>
          <p className="text-cream/60 text-lg md:text-xl max-w-xl mx-auto mb-12 font-body">
            A global inequality visualizer, one cup at a time
          </p>
        </motion.div>

        <SteamingCoffee />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative z-10 mt-12 text-center"
        >
          <p className="font-display text-2xl md:text-3xl text-cream/80 mb-8">
            How long do you have to work<br />to buy <span className="text-gold">this</span>?
          </p>

          <CitySelector selectedCity={selectedCity} onSelect={setSelectedCity} />

          {selectedCity && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 p-6 bg-gold/10 border border-gold/30 rounded-2xl max-w-md mx-auto"
            >
              <p className="text-cream/70 text-sm font-body mb-1">In {selectedCity.city}, you'd work</p>
              <p className="font-display text-5xl font-bold text-gold">
                {formatMinutes(selectedCity.minutesForLatte)}
              </p>
              <p className="text-cream/50 text-sm font-body mt-1">
                at ${selectedCity.hourlyWageUSD.toFixed(2)}/hour median wage
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-cream/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-gold"
            />
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="section-espresso px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-cream text-center mb-3">
            Minutes of Work for a $5 Latte
          </h2>
          <p className="text-center text-cream/50 mb-10 font-body">
            The world, colored by effort
          </p>
          <WorldMap highlightCountry={selectedCity?.countryCode} />
        </div>
      </section>

      {/* City Ranking */}
      <section className="section-cream px-6 py-20">
        <CityRanking selectedCity={selectedCity} />
      </section>

      {/* Why Section */}
      <section className="section-cream px-6 py-20 bg-cream-dark">
        <WhySection />
      </section>

      {/* Comparison Calculator */}
      <section className="section-cream px-6 py-20">
        <ComparisonCalculator selectedCity={selectedCity} />
      </section>

      {/* Footer */}
      <footer className="section-espresso px-6 py-12 text-center">
        <p className="text-cream/40 text-sm font-body max-w-lg mx-auto">
          Data based on median wages from ILO, Numbeo, and World Bank estimates (2024).
          The Latte Index is a visualization tool — actual costs vary by location, establishment, and economic conditions.
        </p>
        <p className="text-gold/60 font-display text-lg mt-4">
          ☕ Every cup tells a story about the world we built.
        </p>
      </footer>
    </div>
  );
};

export default Index;
