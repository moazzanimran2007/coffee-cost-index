import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const layers = [
  {
    title: "What is Purchasing Power Parity?",
    content: `Imagine two people in different countries both wanting to buy the same coffee. In Zurich, it costs 5 Swiss Francs. In Lagos, the "same" coffee might cost 1,500 Naira. But the question isn't about the price — it's about the effort.

**Purchasing Power Parity (PPP)** measures what money can actually buy in different places. A dollar stretches much further in Dhaka than in San Francisco — but people in Dhaka also earn far less.

The Latte Index strips away the abstraction: instead of comparing currencies, we compare **time**. Time is the one currency we all share equally.`,
    stat: { label: "PPP gap between richest and poorest city", value: "83x" },
  },
  {
    title: "Why do wages differ so dramatically?",
    content: `Wage differences aren't random — they're structural. They reflect:

• **Productivity gaps**: Workers with access to better technology, infrastructure, and capital produce more value per hour.

• **Education systems**: Countries that invest in education create higher-skilled workforces that command higher wages.

• **Market access**: Being close to wealthy consumers (or having digital access to them) drives wages up.

• **Labor supply**: In countries with large working-age populations and limited formal employment, competition for jobs pushes wages down.

The result: a software developer in San Francisco earns in one hour what a garment worker in Dhaka earns in a week.`,
    stat: { label: "Ratio of highest to lowest median wage", value: "58:1" },
  },
  {
    title: "The colonial and trade history behind wage gaps",
    content: `Today's wage map isn't a coincidence — it's a legacy.

Colonial economies were designed to **extract** raw materials cheaply and sell finished goods back at high margins. This created a structural dependency: colonized nations became commodity exporters, while colonizing nations industrialized.

After independence, many countries inherited:
• **Debt** from colonial-era infrastructure built to serve extraction
• **Trade agreements** that favored finished goods over raw exports
• **Institutional frameworks** designed for extraction, not development

The World Bank estimates that **$152 trillion** in labor was extracted from colonized nations during the colonial period. Today's wage gaps are echoes of that extraction.`,
    stat: { label: "Colonial wealth extraction (estimated)", value: "$152T" },
  },
  {
    title: "What is the Big Mac Index?",
    content: `The Economist's **Big Mac Index** was invented in 1986 as a lighthearted way to measure PPP. The idea: a Big Mac requires the same ingredients and labor everywhere, so its price reveals currency over- or under-valuation.

The Latte Index goes further. Coffee is more universal than McDonald's — cafes exist in virtually every city on Earth. And by measuring in **minutes of work** rather than currency, we bypass exchange rate distortions entirely.

Both indices reveal the same uncomfortable truth: the global economy values identical labor wildly differently depending on where it happens.`,
    stat: { label: "Countries with a Starbucks", value: "86" },
  },
  {
    title: "What if wages were equalized globally?",
    content: `If the world's total income were distributed equally, every working adult would earn roughly **$12,000 per year** — about $6/hour.

For workers in Zurich (median: $78,000/year), this would be devastating. For workers in Kinshasa (median: $936/year), it would be transformative — a **12x increase**.

Full equalization is neither realistic nor desirable. But even modest convergence — raising the floor while growing the overall pie — would transform billions of lives. The challenge isn't economics; it's political will.

Every latte purchased in a wealthy city at "normal" prices contains within it this invisible subsidy of global inequality.`,
    stat: { label: "Global median income if equalized", value: "$12K/yr" },
  },
];

const WhySection = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl text-espresso text-center mb-2">
        But why?
      </h2>
      <p className="text-center text-muted-foreground mb-8">
        The economics behind the numbers, explained in layers
      </p>

      <Accordion type="single" collapsible className="space-y-3">
        {layers.map((layer, i) => (
          <AccordionItem
            key={i}
            value={`layer-${i}`}
            className="border border-border rounded-xl px-6 bg-card overflow-hidden"
          >
            <AccordionTrigger className="text-left font-display text-lg md:text-xl py-5 hover:no-underline hover:text-gold transition-colors">
              <span className="flex items-center gap-3">
                <span className="text-gold font-body text-sm font-medium bg-gold/10 px-2 py-0.5 rounded-md">
                  Layer {i + 1}
                </span>
                {layer.title}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="prose prose-sm max-w-none text-foreground/80 leading-relaxed whitespace-pre-line font-body">
                {layer.content.split("**").map((part, j) =>
                  j % 2 === 1 ? (
                    <strong key={j} className="text-foreground font-semibold">{part}</strong>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                )}
              </div>
              {/* Key stat */}
              <div className="mt-6 flex items-center gap-4 p-4 bg-espresso/5 rounded-xl border border-gold/20">
                <div className="text-3xl font-display font-bold text-gold">{layer.stat.value}</div>
                <div className="text-sm text-muted-foreground">{layer.stat.label}</div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default WhySection;
