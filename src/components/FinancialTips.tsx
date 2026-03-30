import { type CityData } from "@/data/cities";
import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, PiggyBank, AlertTriangle, BookOpen } from "lucide-react";

interface FinancialTipsProps {
  selectedCity: CityData | null;
}

const FinancialTips = ({ selectedCity }: FinancialTipsProps) => {
  if (!selectedCity) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground font-body">
          Select a city above to get personalized financial literacy tips
        </p>
      </div>
    );
  }

  const { hourlyWageUSD, medianMonthlyUSD, city, minutesForLatte } = selectedCity;
  const isLowIncome = hourlyWageUSD < 3;
  const isMidIncome = hourlyWageUSD >= 3 && hourlyWageUSD < 15;
  const isHighIncome = hourlyWageUSD >= 15;

  // Calculate practical figures
  const dailyCoffeeMonthly = (5 * 30);
  const coffeePctIncome = ((dailyCoffeeMonthly / medianMonthlyUSD) * 100).toFixed(1);
  const savingsRate20 = (medianMonthlyUSD * 0.2).toFixed(0);
  const emergencyFundMonths = 3;
  const emergencyFund = (medianMonthlyUSD * emergencyFundMonths).toLocaleString();

  const tips = [
    {
      icon: <PiggyBank className="w-6 h-6" />,
      title: "The Latte Factor",
      description: isHighIncome
        ? `A daily $5 coffee costs $${dailyCoffeeMonthly}/month — just ${coffeePctIncome}% of your income in ${city}. Small, but over 10 years at 7% returns, that's $${Math.round(dailyCoffeeMonthly * 12 * 14.78).toLocaleString()} invested.`
        : `A daily $5 coffee would cost $${dailyCoffeeMonthly}/month — ${coffeePctIncome}% of the median income in ${city}. This shows why "just skip the latte" advice misses the point for most of the world.`,
      color: "text-gold",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "The 50/30/20 Rule",
      description: `On ${city}'s median wage ($${medianMonthlyUSD.toLocaleString()}/mo), the 50/30/20 rule suggests: $${Math.round(medianMonthlyUSD * 0.5).toLocaleString()} for needs, $${Math.round(medianMonthlyUSD * 0.3).toLocaleString()} for wants, and $${savingsRate20} for savings/debt. ${isLowIncome ? "At this income level, even 50% for needs is a challenge — structural change matters more than budgeting tips." : ""}`,
      color: "text-map-blue",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Emergency Fund Reality",
      description: `Financial advisors recommend 3-6 months of expenses saved. In ${city}, that's $${emergencyFund}. ${isLowIncome ? "For many workers here, saving even one month's expenses is a multi-year goal — highlighting why social safety nets matter." : isHighIncome ? "This is achievable in 6-12 months of disciplined saving." : "This requires consistent saving but is within reach over 1-2 years."}`,
      color: "text-map-amber",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: isLowIncome ? "Why Individual Tips Aren't Enough" : "Compound Growth Power",
      description: isLowIncome
        ? `When a single coffee costs ${minutesForLatte} minutes of work, the issue isn't financial literacy — it's structural inequality. Policy changes (minimum wages, trade fairness, education access) matter more than budgeting advice at these income levels.`
        : `$100/month invested at 7% annual return becomes $${Math.round(100 * ((Math.pow(1 + 0.07/12, 120) - 1) / (0.07/12))).toLocaleString()} in 10 years. Starting early is the biggest advantage — even small amounts compound dramatically over time.`,
      color: "text-gold",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Understanding Your Real Wage",
      description: `Your hourly wage in ${city} ($${hourlyWageUSD.toFixed(2)}) is the nominal rate. After accounting for local cost of living, your real purchasing power may differ significantly. A $20/hr wage in NYC buys less than $10/hr in Bangkok — always think in terms of what your money actually buys, not the number on your paycheck.`,
      color: "text-map-blue",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="grid gap-4">
        {tips.map((tip, i) => (
          <motion.div
            key={tip.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-gold/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className={`${tip.color} mt-0.5 shrink-0`}>{tip.icon}</div>
              <div>
                <h4 className="font-display text-lg text-foreground mb-2">{tip.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  {tip.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FinancialTips;
