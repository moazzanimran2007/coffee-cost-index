# The Latte Index

A one-page web app that shows global wage inequality through a single question: how many minutes would you have to work to buy a $5 latte?

## What it does

- **Pick a city** from 63 cities worldwide and see how long a typical worker there works for one latte, next to their median hourly wage.
- **See the world map,** colored by how many minutes of work a latte costs.
- **Compare cities** in a ranked list, from the shortest to the longest work time.
- **Translate it into a budget.** For the city you pick, it shows what the median monthly wage covers in everyday terms.
- **Test yourself** with a short quiz on global economics and financial literacy, followed by plain-English financial tips.
- **Share your result** as a downloadable card.

## About the numbers

City wages and minutes-of-work figures are fixed estimates entered in `src/data/cities.ts` (labeled as 2024 median wage estimates in USD, assuming a $5 latte). The app credits ILO, Numbeo and World Bank figures as the basis, but the repo does not include the source tables or the calculation, so treat the values as illustrative rather than exact.

## Run it

You need Node.js 18 or newer.

```bash
git clone https://github.com/moazzanimran2007/coffee-cost-index.git
cd coffee-cost-index
npm install
npm run dev
```

Then open the local address Vite prints. `npm run build` makes a production build.

## Tech stack

React and TypeScript on Vite, Tailwind CSS with shadcn/ui components, Framer Motion for animation and Recharts for charts. Built with Lovable. Everything runs in the browser with no backend.

## Where things live

| Path | What it holds |
| :--- | :--- |
| `src/data/cities.ts` | City list with hourly wage, monthly wage and minutes per latte |
| `src/components/` | City selector, world map, ranking, budget comparison, quiz, tips and share card |
| `src/pages/Index.tsx` | The single page that puts the sections together |
