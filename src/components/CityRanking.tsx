import { cities, formatMinutes, getMinutesColor, type CityData } from "@/data/cities";
import { motion } from "framer-motion";

interface CityRankingProps {
  selectedCity: CityData | null;
}

const CityRanking = ({ selectedCity }: CityRankingProps) => {
  const sorted = [...cities].sort((a, b) => a.minutesForLatte - b.minutesForLatte);
  const maxMinutes = sorted[sorted.length - 1].minutesForLatte;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl text-espresso text-center mb-2">
        The Global Latte Index
      </h2>
      <p className="text-center text-muted-foreground mb-8">
        60+ cities ranked by how long you work for a $5 coffee
      </p>

      <div className="space-y-2">
        {sorted.map((city, i) => {
          const isSelected = selectedCity?.city === city.city;
          const fillPercent = Math.min((city.minutesForLatte / maxMinutes) * 100, 100);

          return (
            <motion.div
              key={`${city.city}-${city.country}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.02, duration: 0.3 }}
              className={`flex items-center gap-3 md:gap-5 px-4 py-3 rounded-xl transition-all ${
                isSelected
                  ? "bg-gold/20 border-2 border-gold shadow-lg"
                  : "bg-card hover:bg-cream-dark border border-transparent"
              }`}
            >
              {/* Rank */}
              <span className="text-muted-foreground font-body text-sm w-8 text-right shrink-0">
                #{i + 1}
              </span>

              {/* Flag + City */}
              <div className="flex items-center gap-2 min-w-[160px] md:min-w-[200px]">
                <span className="text-xl">{city.flag}</span>
                <div>
                  <span className="font-medium text-foreground text-sm md:text-base">{city.city}</span>
                  <span className="text-muted-foreground text-xs ml-1.5 hidden md:inline">{city.country}</span>
                </div>
              </div>

              {/* Coffee cup fill bar */}
              <div className="flex-1 h-6 bg-espresso/10 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${fillPercent}%` }}
                  transition={{ delay: i * 0.02 + 0.2, duration: 0.6, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: getMinutesColor(city.minutesForLatte) }}
                />
                {/* Tiny coffee icons */}
                <div className="absolute inset-0 flex items-center px-2">
                  {Array.from({ length: Math.min(Math.ceil(city.minutesForLatte / 60), 8) }).map((_, j) => (
                    <span key={j} className="text-xs opacity-60">☕</span>
                  ))}
                </div>
              </div>

              {/* Minutes */}
              <div className="text-right shrink-0 min-w-[80px]">
                <span className="font-display text-lg md:text-xl font-bold" style={{ color: getMinutesColor(city.minutesForLatte) }}>
                  {formatMinutes(city.minutesForLatte)}
                </span>
              </div>

              {/* Wage */}
              <div className="text-right shrink-0 min-w-[70px] hidden md:block">
                <span className="text-muted-foreground text-sm">
                  ${city.hourlyWageUSD.toFixed(2)}/hr
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CityRanking;
