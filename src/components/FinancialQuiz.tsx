import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, ArrowRight, RotateCcw } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const questions: Question[] = [
  {
    question: "What does 'Purchasing Power Parity' (PPP) measure?",
    options: [
      "The exchange rate between two currencies",
      "What a unit of currency can actually buy in different countries",
      "The stock market performance of a country",
      "The interest rate set by central banks",
    ],
    correctIndex: 1,
    explanation:
      "PPP compares the real purchasing power of currencies — accounting for the fact that $1 buys very different amounts of goods in different places.",
  },
  {
    question: "A worker in Lagos earns $1.10/hr. How many hours must they work to afford a $5 latte?",
    options: ["About 1 hour", "About 2.5 hours", "About 4.5 hours", "About 8 hours"],
    correctIndex: 2,
    explanation:
      "At $1.10/hr, a $5 latte costs $5 ÷ $1.10 ≈ 4.5 hours of work — nearly half a working day for a single coffee.",
  },
  {
    question: "The 'Big Mac Index' was created by which publication?",
    options: ["The Wall Street Journal", "The Economist", "Bloomberg", "Financial Times"],
    correctIndex: 1,
    explanation:
      "The Economist invented the Big Mac Index in 1986 as a lighthearted guide to whether currencies are at their 'correct' level.",
  },
  {
    question: "If global income were distributed equally, what would every adult earn per year?",
    options: ["$5,000", "$12,000", "$25,000", "$40,000"],
    correctIndex: 1,
    explanation:
      "Total global income divided equally would give every working adult about $12,000/year — life-changing for billions, but a steep cut for wealthy-nation workers.",
  },
  {
    question: "What is 'inflation' in simple terms?",
    options: [
      "When the stock market goes up",
      "When the general price level of goods rises over time",
      "When a country prints more money to pay off debt",
      "When wages increase faster than productivity",
    ],
    correctIndex: 1,
    explanation:
      "Inflation is the rate at which the general level of prices for goods and services rises, eroding purchasing power over time.",
  },
  {
    question: "Which factor does NOT typically cause wage differences between countries?",
    options: [
      "Access to education and technology",
      "Proximity to wealthy consumer markets",
      "The country's time zone",
      "Historical trade and colonial relationships",
    ],
    correctIndex: 2,
    explanation:
      "Time zones don't directly drive wage gaps. Structural factors like education, market access, and colonial history are the real drivers.",
  },
  {
    question: "What is a 'living wage'?",
    options: [
      "The minimum wage set by law",
      "The wage needed to cover basic needs like food, housing, and healthcare",
      "The average salary in a country",
      "The wage that matches inflation",
    ],
    correctIndex: 1,
    explanation:
      "A living wage covers basic necessities. It's often higher than the legal minimum wage, which many economists argue is insufficient in most countries.",
  },
  {
    question: "Why does a coffee cost different amounts of 'work time' in different cities?",
    options: [
      "Coffee beans are more expensive in some countries",
      "Wages vary dramatically but the coffee itself costs roughly the same",
      "Some countries tax coffee more heavily",
      "Coffee quality differs by region",
    ],
    correctIndex: 1,
    explanation:
      "The key insight: it's not that coffee prices vary wildly — it's that wages do. A $5 coffee is 8 minutes of work in Zurich but 4+ hours in Lagos.",
  },
];

const FinancialQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const q = questions[currentQ];

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    if (index === q.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setAnswered(false);
    setFinished(false);
  };

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    let message = "";
    if (percentage >= 80) message = "Excellent! You have strong financial literacy. 🎓";
    else if (percentage >= 50) message = "Good foundation! Keep learning about global economics. 📚";
    else message = "Great start! Explore the sections above to learn more. ☕";

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10"
      >
        <div className="text-6xl mb-4">
          {percentage >= 80 ? "🏆" : percentage >= 50 ? "📊" : "☕"}
        </div>
        <h3 className="font-display text-3xl text-espresso mb-2">
          {score}/{questions.length} Correct
        </h3>
        <p className="text-muted-foreground text-lg mb-6">{message}</p>
        <div className="w-full max-w-xs mx-auto h-3 bg-espresso/10 rounded-full overflow-hidden mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-gold rounded-full"
          />
        </div>
        <Button onClick={handleRestart} variant="outline" className="gap-2 border-gold text-espresso hover:bg-gold/10">
          <RotateCcw className="w-4 h-4" /> Try Again
        </Button>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-sm text-muted-foreground font-body">
          {currentQ + 1}/{questions.length}
        </span>
        <div className="flex-1 h-2 bg-espresso/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gold rounded-full"
            initial={false}
            animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="text-sm text-gold font-medium">{score} pts</span>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-display text-xl md:text-2xl text-espresso mb-6">
            {q.question}
          </h3>

          <div className="space-y-3">
            {q.options.map((option, i) => {
              let optionStyle = "bg-card border-border hover:border-gold/40 hover:bg-gold/5";
              if (answered) {
                if (i === q.correctIndex) {
                  optionStyle = "bg-green-50 border-green-400";
                } else if (i === selected && i !== q.correctIndex) {
                  optionStyle = "bg-red-50 border-red-300";
                } else {
                  optionStyle = "bg-card border-border opacity-50";
                }
              } else if (i === selected) {
                optionStyle = "bg-gold/10 border-gold";
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={answered}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${optionStyle}`}
                >
                  <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-sm font-medium shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="font-body text-foreground">{option}</span>
                  {answered && i === q.correctIndex && (
                    <CheckCircle className="w-5 h-5 text-green-600 ml-auto shrink-0" />
                  )}
                  {answered && i === selected && i !== q.correctIndex && (
                    <XCircle className="w-5 h-5 text-red-500 ml-auto shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {answered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 p-4 bg-espresso/5 rounded-xl border border-gold/20"
            >
              <p className="text-sm text-foreground/80 font-body">
                <span className="font-semibold text-gold">💡 </span>
                {q.explanation}
              </p>
            </motion.div>
          )}

          {/* Next button */}
          {answered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 flex justify-end"
            >
              <Button onClick={handleNext} className="gap-2 bg-gold text-espresso hover:bg-gold-dark">
                {currentQ + 1 >= questions.length ? "See Results" : "Next Question"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FinancialQuiz;
