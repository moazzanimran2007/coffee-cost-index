import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ScatterChart, Scatter, CartesianGrid, Cell } from "recharts";
import { cities, getMinutesColor } from "@/data/cities";

// Chart data derived from cities
const pppChartData = [
  { city: "Zurich", minutes: 8, wage: 37.5 },
  { city: "NYC", minutes: 10, wage: 30 },
  { city: "Tokyo", minutes: 14, wage: 21 },
  { city: "Istanbul", minutes: 58, wage: 5.2 },
  { city: "Mumbai", minutes: 120, wage: 2.5 },
  { city: "Lagos", minutes: 273, wage: 1.1 },
  { city: "Kinshasa", minutes: 667, wage: 0.45 },
];

const wageGapData = [
  { sector: "Tech (SF)", wage: 85 },
  { sector: "Finance (London)", wage: 55 },
  { sector: "Manufacturing (Shanghai)", wage: 7.2 },
  { sector: "Garment (Dhaka)", wage: 0.9 },
  { sector: "Agriculture (Nairobi)", wage: 1.4 },
  { sector: "Mining (Kinshasa)", wage: 0.45 },
];

const colonialData = [
  { region: "Western Europe", wealthPerCapita: 56000 },
  { region: "North America", wealthPerCapita: 52000 },
  { region: "East Asia", wealthPerCapita: 12000 },
  { region: "Latin America", wealthPerCapita: 5500 },
  { region: "South Asia", wealthPerCapita: 2100 },
  { region: "Sub-Saharan Africa", wealthPerCapita: 1400 },
];

const bigMacData = [
  { country: "Switzerland", bigMac: 7.73, latte: 8 },
  { country: "USA", bigMac: 5.69, latte: 10 },
  { country: "Japan", bigMac: 3.17, latte: 14 },
  { country: "Brazil", bigMac: 4.18, latte: 60 },
  { country: "India", bigMac: 2.34, latte: 120 },
  { country: "Egypt", bigMac: 1.82, latte: 200 },
];

const equalizationData = [
  { city: "Zurich", current: 78000, equalized: 12000 },
  { city: "NYC", current: 62400, equalized: 12000 },
  { city: "São Paulo", current: 10440, equalized: 12000 },
  { city: "Mumbai", current: 5160, equalized: 12000 },
  { city: "Lagos", current: 2280, equalized: 12000 },
  { city: "Kinshasa", current: 936, equalized: 12000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-espresso text-cream px-3 py-2 rounded-lg text-sm border border-gold/30">
        <p className="font-medium">{label}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} className="text-gold">{p.name}: {typeof p.value === 'number' ? p.value.toLocaleString() : p.value}</p>
        ))}
      </div>
    );
  }
  return null;
};

const layers = [
  {
    title: "What is Purchasing Power Parity?",
    content: `Imagine two people in different countries both wanting to buy the same coffee. In Zurich, it costs 5 Swiss Francs. In Lagos, the "same" coffee might cost 1,500 Naira. But the question isn't about the price — it's about the effort.

**Purchasing Power Parity (PPP)** measures what money can actually buy in different places. A dollar stretches much further in Dhaka than in San Francisco — but people in Dhaka also earn far less.

The Latte Index strips away the abstraction: instead of comparing currencies, we compare **time**. Time is the one currency we all share equally.`,
    stat: { label: "PPP gap between richest and poorest city", value: "83x" },
    chart: (
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={pppChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <XAxis dataKey="city" tick={{ fill: 'hsl(16,20%,40%)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'hsl(16,20%,40%)', fontSize: 11 }} axisLine={false} tickLine={false} label={{ value: 'Minutes', angle: -90, position: 'insideLeft', fill: 'hsl(16,20%,40%)', fontSize: 11 }} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="minutes" name="Minutes for latte" radius={[6, 6, 0, 0]}>
            {pppChartData.map((entry, i) => (
              <Cell key={i} fill={getMinutesColor(entry.minutes)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    ),
    chartLabel: "Minutes of work for a $5 latte across cities",
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
    chart: (
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={wageGapData} layout="vertical" margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
          <XAxis type="number" tick={{ fill: 'hsl(16,20%,40%)', fontSize: 11 }} axisLine={false} tickLine={false} label={{ value: '$/hr', position: 'insideBottomRight', fill: 'hsl(16,20%,40%)', fontSize: 11 }} />
          <YAxis type="category" dataKey="sector" tick={{ fill: 'hsl(16,20%,40%)', fontSize: 11 }} axisLine={false} tickLine={false} width={130} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="wage" name="Hourly wage (USD)" radius={[0, 6, 6, 0]}>
            {wageGapData.map((entry, i) => (
              <Cell key={i} fill={entry.wage > 20 ? 'hsl(210, 70%, 55%)' : entry.wage > 5 ? 'hsl(45, 80%, 55%)' : 'hsl(0, 65%, 38%)'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    ),
    chartLabel: "Hourly wages by sector and location",
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
    chart: (
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={colonialData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <XAxis dataKey="region" tick={{ fill: 'hsl(16,20%,40%)', fontSize: 10 }} axisLine={false} tickLine={false} angle={-20} textAnchor="end" height={50} />
          <YAxis tick={{ fill: 'hsl(16,20%,40%)', fontSize: 11 }} axisLine={false} tickLine={false} label={{ value: 'GDP/capita ($)', angle: -90, position: 'insideLeft', fill: 'hsl(16,20%,40%)', fontSize: 10 }} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="wealthPerCapita" name="GDP per capita ($)" radius={[6, 6, 0, 0]}>
            {colonialData.map((entry, i) => (
              <Cell key={i} fill={entry.wealthPerCapita > 30000 ? 'hsl(210, 70%, 55%)' : entry.wealthPerCapita > 5000 ? 'hsl(45, 80%, 55%)' : 'hsl(0, 65%, 38%)'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    ),
    chartLabel: "GDP per capita by region — shaped by colonial history",
  },
  {
    title: "What is the Big Mac Index?",
    content: `The Economist's **Big Mac Index** was invented in 1986 as a lighthearted way to measure PPP. The idea: a Big Mac requires the same ingredients and labor everywhere, so its price reveals currency over- or under-valuation.

The Latte Index goes further. Coffee is more universal than McDonald's — cafes exist in virtually every city on Earth. And by measuring in **minutes of work** rather than currency, we bypass exchange rate distortions entirely.

Both indices reveal the same uncomfortable truth: the global economy values identical labor wildly differently depending on where it happens.`,
    stat: { label: "Countries with a Starbucks", value: "86" },
    chart: (
      <ResponsiveContainer width="100%" height={220}>
        <ScatterChart margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(30,20%,80%)" />
          <XAxis dataKey="bigMac" name="Big Mac price ($)" tick={{ fill: 'hsl(16,20%,40%)', fontSize: 11 }} axisLine={false} label={{ value: 'Big Mac Price ($)', position: 'insideBottom', offset: -5, fill: 'hsl(16,20%,40%)', fontSize: 11 }} />
          <YAxis dataKey="latte" name="Latte minutes" tick={{ fill: 'hsl(16,20%,40%)', fontSize: 11 }} axisLine={false} label={{ value: 'Latte (min)', angle: -90, position: 'insideLeft', fill: 'hsl(16,20%,40%)', fontSize: 11 }} />
          <Tooltip content={({ active, payload }: any) => {
            if (active && payload?.length) {
              const d = payload[0].payload;
              return (
                <div className="bg-espresso text-cream px-3 py-2 rounded-lg text-sm border border-gold/30">
                  <p className="font-medium">{d.country}</p>
                  <p className="text-gold">Big Mac: ${d.bigMac}</p>
                  <p className="text-gold">Latte: {d.latte} min</p>
                </div>
              );
            }
            return null;
          }} />
          <Scatter data={bigMacData} fill="hsl(44, 52%, 54%)" />
        </ScatterChart>
      </ResponsiveContainer>
    ),
    chartLabel: "Big Mac price vs. minutes worked for a latte",
  },
  {
    title: "What if wages were equalized globally?",
    content: `If the world's total income were distributed equally, every working adult would earn roughly **$12,000 per year** — about $6/hour.

For workers in Zurich (median: $78,000/year), this would be devastating. For workers in Kinshasa (median: $936/year), it would be transformative — a **12x increase**.

Full equalization is neither realistic nor desirable. But even modest convergence — raising the floor while growing the overall pie — would transform billions of lives. The challenge isn't economics; it's political will.

Every latte purchased in a wealthy city at "normal" prices contains within it this invisible subsidy of global inequality.`,
    stat: { label: "Global median income if equalized", value: "$12K/yr" },
    chart: (
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={equalizationData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
          <XAxis dataKey="city" tick={{ fill: 'hsl(16,20%,40%)', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'hsl(16,20%,40%)', fontSize: 11 }} axisLine={false} tickLine={false} label={{ value: '$/year', angle: -90, position: 'insideLeft', fill: 'hsl(16,20%,40%)', fontSize: 10 }} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="current" name="Current income" fill="hsl(16, 47%, 25%)" radius={[6, 6, 0, 0]} />
          <Bar dataKey="equalized" name="If equalized" fill="hsl(44, 52%, 54%)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    ),
    chartLabel: "Current annual income vs. equalized ($12K/yr for all)",
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

              {/* Data Visualization */}
              <div className="mt-6 p-4 bg-cream rounded-xl border border-border">
                <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wide">{layer.chartLabel}</p>
                {layer.chart}
              </div>

              {/* Key stat */}
              <div className="mt-4 flex items-center gap-4 p-4 bg-espresso/5 rounded-xl border border-gold/20">
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
