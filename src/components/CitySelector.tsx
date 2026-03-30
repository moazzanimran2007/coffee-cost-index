import { useState, useMemo } from "react";
import { cities, type CityData } from "@/data/cities";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

interface CitySelectorProps {
  selectedCity: CityData | null;
  onSelect: (city: CityData) => void;
}

const CitySelector = ({ selectedCity, onSelect }: CitySelectorProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!query) return cities.slice(0, 10);
    const q = query.toLowerCase();
    return cities.filter(
      (c) =>
        c.city.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q)
    ).slice(0, 12);
  }, [query]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <Input
        placeholder="Search your city..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        className="bg-espresso/80 border-gold/40 text-cream placeholder:text-cream/40 text-lg py-6 px-5 rounded-xl focus:border-gold focus:ring-gold/30"
      />
      <AnimatePresence>
        {isOpen && filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute z-50 w-full mt-2 bg-espresso border border-gold/30 rounded-xl shadow-2xl max-h-72 overflow-y-auto"
          >
            {filtered.map((city) => (
              <button
                key={`${city.city}-${city.country}`}
                onClick={() => {
                  onSelect(city);
                  setQuery(city.city);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-5 py-3 flex items-center gap-3 transition-colors hover:bg-gold/10 ${
                  selectedCity?.city === city.city ? "bg-gold/20" : ""
                }`}
              >
                <span className="text-2xl">{city.flag}</span>
                <div>
                  <span className="text-cream font-medium">{city.city}</span>
                  <span className="text-cream/50 text-sm ml-2">{city.country}</span>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default CitySelector;
