import { useRef } from "react";
import { type CityData, formatMinutes } from "@/data/cities";
import { Button } from "@/components/ui/button";
import { Share2, Download } from "lucide-react";

interface ShareableCardProps {
  selectedCity: CityData | null;
}

const ShareableCard = ({ selectedCity }: ShareableCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  if (!selectedCity) return null;

  const handleShare = async () => {
    const text = `☕ The Latte Index: In ${selectedCity.city}, you'd work ${formatMinutes(selectedCity.minutesForLatte)} to buy a $5 latte (median wage: $${selectedCity.hourlyWageUSD.toFixed(2)}/hr). How long in YOUR city?`;

    if (navigator.share) {
      try {
        await navigator.share({ title: "The Latte Index", text, url: window.location.href });
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(text + "\n" + window.location.href);
      alert("Copied to clipboard!");
    }
  };

  const handleDownload = async () => {
    // Use html2canvas-like approach via canvas API
    const card = cardRef.current;
    if (!card) return;

    try {
      const canvas = document.createElement("canvas");
      canvas.width = 800;
      canvas.height = 420;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Background
      ctx.fillStyle = "#1c0f0a";
      ctx.beginPath();
      ctx.roundRect(0, 0, 800, 420, 20);
      ctx.fill();

      // Gold accent line
      ctx.fillStyle = "#c9a84c";
      ctx.fillRect(40, 40, 4, 340);

      // Title
      ctx.fillStyle = "#f5efe6";
      ctx.font = "bold 28px Georgia, serif";
      ctx.fillText("The Latte Index", 64, 80);

      // Coffee emoji
      ctx.font = "60px serif";
      ctx.fillText("☕", 640, 100);

      // City + flag
      ctx.fillStyle = "#c9a84c";
      ctx.font = "bold 36px Georgia, serif";
      ctx.fillText(`${selectedCity.flag} ${selectedCity.city}`, 64, 150);

      // Country
      ctx.fillStyle = "#f5efe6aa";
      ctx.font = "18px sans-serif";
      ctx.fillText(selectedCity.country, 64, 180);

      // Minutes
      ctx.fillStyle = "#c9a84c";
      ctx.font = "bold 72px Georgia, serif";
      ctx.fillText(formatMinutes(selectedCity.minutesForLatte), 64, 270);

      // Label
      ctx.fillStyle = "#f5efe6aa";
      ctx.font = "20px sans-serif";
      ctx.fillText("of work for a $5 latte", 64, 305);

      // Wage info
      ctx.fillStyle = "#f5efe688";
      ctx.font = "16px sans-serif";
      ctx.fillText(`Median wage: $${selectedCity.hourlyWageUSD.toFixed(2)}/hour · $${selectedCity.medianMonthlyUSD.toLocaleString()}/month`, 64, 350);

      // URL
      ctx.fillStyle = "#c9a84c88";
      ctx.font = "14px sans-serif";
      ctx.fillText("thelatteindex.app", 64, 390);

      // Download
      const link = document.createElement("a");
      link.download = `latte-index-${selectedCity.city.toLowerCase().replace(/\s+/g, "-")}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch {
      alert("Could not generate image. Try taking a screenshot instead!");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Visual card */}
      <div
        ref={cardRef}
        className="bg-espresso rounded-2xl p-8 relative overflow-hidden border border-gold/20"
      >
        {/* Gold accent */}
        <div className="absolute left-6 top-6 bottom-6 w-1 bg-gold rounded-full" />

        <div className="pl-6">
          <p className="font-display text-cream/80 text-lg mb-1">The Latte Index</p>

          <div className="flex items-center gap-2 mb-1">
            <span className="text-3xl">{selectedCity.flag}</span>
            <h3 className="font-display text-2xl text-gold">{selectedCity.city}</h3>
          </div>
          <p className="text-cream/50 text-sm mb-6">{selectedCity.country}</p>

          <div className="mb-4">
            <span className="font-display text-5xl font-bold text-gold">
              {formatMinutes(selectedCity.minutesForLatte)}
            </span>
            <p className="text-cream/60 text-sm mt-1">of work for a $5 latte</p>
          </div>

          <p className="text-cream/40 text-xs">
            Median wage: ${selectedCity.hourlyWageUSD.toFixed(2)}/hr · ${selectedCity.medianMonthlyUSD.toLocaleString()}/mo
          </p>
        </div>

        {/* Coffee icon */}
        <div className="absolute top-6 right-8 text-5xl opacity-30">☕</div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-4 justify-center">
        <Button
          onClick={handleShare}
          variant="outline"
          className="gap-2 border-gold/40 text-espresso hover:bg-gold/10"
        >
          <Share2 className="w-4 h-4" /> Share
        </Button>
        <Button
          onClick={handleDownload}
          className="gap-2 bg-gold text-espresso hover:bg-gold-dark"
        >
          <Download className="w-4 h-4" /> Download Card
        </Button>
      </div>
    </div>
  );
};

export default ShareableCard;
