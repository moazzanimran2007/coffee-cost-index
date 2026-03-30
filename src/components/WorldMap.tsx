import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import { countryMinutesMap, getMinutesColor } from "@/data/cities";
import type { Topology, GeometryCollection } from "topojson-specification";

interface WorldMapProps {
  highlightCountry?: string;
}

const WORLD_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ISO 3166-1 numeric to alpha-2 mapping (common ones)
const numericToAlpha2: Record<string, string> = {
  "840": "US", "826": "GB", "756": "CH", "392": "JP", "036": "AU", "124": "CA",
  "276": "DE", "250": "FR", "380": "IT", "724": "ES", "528": "NL", "056": "BE",
  "040": "AT", "620": "PT", "300": "GR", "203": "CZ", "616": "PL", "348": "HU",
  "100": "BG", "191": "HR", "703": "SK", "440": "LT", "428": "LV", "233": "EE",
  "705": "SI", "642": "RO", "246": "FI", "752": "SE", "208": "DK", "578": "NO",
  "352": "IS", "372": "IE", "442": "LU", "470": "MT",
  "076": "BR", "032": "AR", "152": "CL", "170": "CO", "604": "PE", "484": "MX",
  "862": "VE", "218": "EC", "858": "UY", "188": "CR", "591": "PA",
  "156": "CN", "356": "IN", "360": "ID", "608": "PH", "764": "TH", "704": "VN",
  "458": "MY", "702": "SG", "410": "KR", "158": "TW", "496": "MN",
  "643": "RU", "804": "UA", "112": "BY", "398": "KZ", "268": "GE", "051": "AM",
  "031": "AZ", "860": "UZ", "417": "KG", "762": "TJ", "795": "TM",
  "818": "EG", "504": "MA", "788": "TN", "012": "DZ", "434": "LY", "736": "SD",
  "710": "ZA", "404": "KE", "566": "NG", "288": "GH", "384": "CI",
  "120": "CM", "231": "ET", "834": "TZ", "800": "UG", "508": "MZ",
  "894": "ZM", "716": "ZW", "454": "MW", "450": "MG", "686": "SN",
  "180": "CD",
  "792": "TR", "376": "IL", "682": "SA", "784": "AE", "634": "QA",
  "400": "JO", "422": "LB", "368": "IQ", "364": "IR", "004": "AF",
  "050": "BD", "586": "PK", "144": "LK", "524": "NP", "104": "MM", "116": "KH",
  "418": "LA", "554": "NZ", "598": "PG", "242": "FJ",
};

const WorldMap = ({ highlightCountry }: WorldMapProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 900;
    const height = 500;

    const projection = d3.geoNaturalEarth1()
      .scale(155)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    fetch(WORLD_URL)
      .then((res) => res.json())
      .then((topology: Topology) => {
        const countries = feature(
          topology,
          topology.objects.countries as GeometryCollection
        );

        svg.selectAll("*").remove();

        // Ocean background
        svg.append("rect")
          .attr("width", width)
          .attr("height", height)
          .attr("fill", "hsl(16, 47%, 8%)")
          .attr("rx", 12);

        // Graticule
        const graticule = d3.geoGraticule();
        svg.append("path")
          .datum(graticule())
          .attr("d", path as any)
          .attr("fill", "none")
          .attr("stroke", "hsl(44, 52%, 54%, 0.08)")
          .attr("stroke-width", 0.5);

        const countryPaths = svg.selectAll("path.country")
          .data(countries.features)
          .enter()
          .append("path")
          .attr("class", "country")
          .attr("d", path as any)
          .attr("stroke", "hsl(44, 52%, 54%, 0.2)")
          .attr("stroke-width", 0.5)
          .attr("fill", (d: any) => {
            const id = d.id?.toString().padStart(3, "0");
            const alpha2 = numericToAlpha2[id];
            if (alpha2 && countryMinutesMap[alpha2]) {
              return getMinutesColor(countryMinutesMap[alpha2]);
            }
            return "hsl(16, 20%, 18%)";
          })
          .attr("opacity", 0);

        // Animate countries appearing
        countryPaths
          .transition()
          .delay((_, i) => i * 30)
          .duration(500)
          .attr("opacity", 0.85);

        // Highlight selected country
        if (highlightCountry) {
          countryPaths
            .attr("stroke-width", (d: any) => {
              const id = d.id?.toString().padStart(3, "0");
              const alpha2 = numericToAlpha2[id];
              return alpha2 === highlightCountry ? 2 : 0.5;
            })
            .attr("stroke", (d: any) => {
              const id = d.id?.toString().padStart(3, "0");
              const alpha2 = numericToAlpha2[id];
              return alpha2 === highlightCountry
                ? "hsl(44, 90%, 65%)"
                : "hsl(44, 52%, 54%, 0.2)";
            });
        }

        setLoaded(true);
      });
  }, [highlightCountry]);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gold/20">
      <svg
        ref={svgRef}
        viewBox="0 0 900 500"
        className="w-full h-auto"
        style={{ background: "hsl(16, 47%, 8%)" }}
      />
      {/* Legend */}
      {loaded && (
        <div className="flex flex-wrap justify-center gap-4 py-4 px-6 bg-espresso/90">
          {[
            { label: "5-15 min", color: "hsl(210, 70%, 55%)" },
            { label: "15-30 min", color: "hsl(200, 50%, 50%)" },
            { label: "30-60 min", color: "hsl(45, 80%, 55%)" },
            { label: "1-2 hours", color: "hsl(30, 85%, 50%)" },
            { label: "2-4 hours", color: "hsl(15, 75%, 45%)" },
            { label: "4+ hours", color: "hsl(0, 65%, 38%)" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm text-cream/70">
              <div
                className="w-4 h-4 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorldMap;
