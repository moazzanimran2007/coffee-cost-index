import { motion } from "framer-motion";

const SteamingCoffee = () => {
  return (
    <div className="relative w-64 h-72 mx-auto">
      {/* Steam lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="steam-line w-1 h-8 rounded-full bg-gold/40"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </div>

      {/* Cup */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
      >
        {/* Cup body */}
        <div className="relative">
          <div
            className="w-48 h-36 rounded-b-[40%] bg-cream/90 border-2 border-gold/50 relative overflow-hidden"
          >
            {/* Coffee liquid */}
            <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-espresso via-coffee-medium to-gold-dark/60 rounded-b-[38%]" />
            {/* Shine */}
            <div className="absolute top-4 left-6 w-12 h-2 bg-gold/20 rounded-full rotate-[-15deg]" />
          </div>
          {/* Handle */}
          <div className="absolute right-[-20px] top-4 w-8 h-16 border-4 border-gold/50 rounded-r-full bg-transparent" />
          {/* Saucer */}
          <div className="w-56 h-4 bg-cream/80 rounded-[50%] border border-gold/30 mx-auto -mt-1 -ml-1" />
        </div>
      </motion.div>
    </div>
  );
};

export default SteamingCoffee;
