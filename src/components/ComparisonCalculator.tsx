import { type CityData } from "@/data/cities";
import { motion } from "framer-motion";

interface ComparisonCalculatorProps {
  selectedCity: CityData | null;
}

const purchases = [
  { name: "Coffee", icon: "☕", costUSD: 5 },
  { name: "Monthly Rent", icon: "🏠", costUSD: 1200 },
  { name: "Groceries (week)", icon: "🛒", costUSD: 80 },
  { name: "Phone Plan", icon: "📱", costUSD: 50 },
  { name: "Transport (month)", icon: "🚌", costUSD: 100 },
  { name: "Dinner Out", icon: "🍽️", costUSD: 25 },
];

const ComparisonCalculator = ({ selectedCity }: ComparisonCalculatorProps) => {
  if (!selectedCity) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg font-body">
          Select a city above to see your personal cost comparison
        </p>
      </div>
    );
  }

  const { hourlyWageUSD, medianMonthlyUSD, city, flag } = selectedCity;
  const monthlyHours = 160; // 40hr/week * 4

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl text-espresso text-center mb-2">
        Your Budget in {city} {flag}
      </h2>
      <p className="text-center text-muted-foreground mb-2">
        Earning the median wage of <span className="font-semibold text-foreground">${hourlyWageUSD.toFixed(2)}/hr</span> (${medianMonthlyUSD.toLocaleString()}/month)
      </p>
      <p className="text-center text-muted-foreground text-sm mb-8">
        How many coffees is your life worth?
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {purchases.map((item, i) => {
          const hoursNeeded = item.costUSD / hourlyWageUSD;
          const coffeeEquivalent = item.costUSD / 5;
          const percentOfMonthly = (item.costUSD / medianMonthlyUSD) * 100;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-5 text-center hover:border-gold/40 transition-colors"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-medium text-sm text-foreground mb-1">{item.name}</div>
              <div className="text-muted-foreground text-xs mb-3">${item.costUSD}</div>

              <div className="font-display text-2xl font-bold text-gold mb-1">
                {hoursNeeded < 1
                  ? `${Math.round(hoursNeeded * 60)}min`
                  : `${hoursNeeded.toFixed(1)}h`}
              </div>
              <div className="text-xs text-muted-foreground mb-3">of work</div>

              {/* Coffee cup equivalents */}
              <div className="flex flex-wrap justify-center gap-0.5">
                {Array.from({ length: Math.min(Math.round(coffeeEquivalent), 30) }).map((_, j) => (
                  <span key={j} className="text-xs">☕</span>
                ))}
                {coffeeEquivalent > 30 && (
                  <span className="text-xs text-muted-foreground">+{Math.round(coffeeEquivalent - 30)}</span>
                )}
              </div>

              <div className="mt-3 text-xs text-muted-foreground">
                {percentOfMonthly.toFixed(1)}% of monthly income
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonCalculator;
