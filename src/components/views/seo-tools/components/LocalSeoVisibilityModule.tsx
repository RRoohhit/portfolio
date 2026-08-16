"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  Search, 
  Globe, 
  Star, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Building2, 
  Sliders, 
  ExternalLink, 
  Navigation, 
  BarChart3, 
  Layers, 
  Check, 
  Copy,
  ChevronRight
} from "lucide-react";
import { SITE_URL, CONTACT } from "@/config/site";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

export interface LocalCityPreset {
  id: string;
  cityName: string;
  state: string;
  pincode: string;
  lat: number;
  lng: number;
  searchVolume: string;
  competition: "High" | "Medium" | "Low";
}

export const CITY_PRESETS: LocalCityPreset[] = [
  { id: "ayodhya", cityName: "Ayodhya", state: "Uttar Pradesh", pincode: "224123", lat: 26.7922, lng: 82.1998, searchVolume: "14,500/mo", competition: "Medium" },
  { id: "delhi", cityName: "Delhi", state: "Delhi NCR", pincode: "110001", lat: 28.6139, lng: 77.2090, searchVolume: "85,000/mo", competition: "High" },
  { id: "noida", cityName: "Noida", state: "Uttar Pradesh", pincode: "201301", lat: 28.5355, lng: 77.3910, searchVolume: "32,000/mo", competition: "High" },
  { id: "gurgaon", cityName: "Gurgaon", state: "Haryana", pincode: "122001", lat: 28.4595, lng: 77.0266, searchVolume: "48,000/mo", competition: "High" },
  { id: "mumbai", cityName: "Mumbai", state: "Maharashtra", pincode: "400001", lat: 19.0760, lng: 72.8777, searchVolume: "120,000/mo", competition: "High" },
  { id: "bangalore", cityName: "Bangalore", state: "Karnataka", pincode: "560001", lat: 12.9716, lng: 77.5946, searchVolume: "95,000/mo", competition: "High" },
];

export const LocalSeoVisibilityModule: React.FC = () => {
  const [selectedCityId, setSelectedCityId] = useState<string>("ayodhya");
  const [customCity, setCustomCity] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("Rohit Gupta Digital");
  const [targetKeyword, setTargetKeyword] = useState<string>("Technical SEO Specialist");
  const [radiusKm, setRadiusKm] = useState<number>(5);
  const [hasGeoSchema, setHasGeoSchema] = useState<boolean>(true);
  const [hasGoogleReviews, setHasGoogleReviews] = useState<boolean>(true);
  const { copied, copy } = useCopyToClipboard();

  const activeCity = CITY_PRESETS.find((c) => c.id === selectedCityId) || {
    id: "custom",
    cityName: customCity.trim() || "Custom City",
    state: "India",
    pincode: "100001",
    lat: 28.6,
    lng: 77.2,
    searchVolume: "20,000/mo",
    competition: "Medium" as const,
  };

  const displayCityName = customCity.trim() ? customCity.trim() : activeCity.cityName;

  // Local Search Visibility Score Calculation (0 - 100)
  let visibilityScore = 55;
  if (selectedCityId === "ayodhya") visibilityScore += 25; // Less saturated market
  if (selectedCityId === "delhi") visibilityScore += 10;
  if (hasGeoSchema) visibilityScore += 12;
  if (hasGoogleReviews) visibilityScore += 13;
  if (radiusKm <= 5) visibilityScore += 5;
  visibilityScore = Math.min(98, Math.max(25, visibilityScore));

  // Simulated Geo Heatmap Pins (5x5 Grid simulating local search rank at surrounding coordinates)
  const heatmapGrid = [
    { gridId: 1, dist: "1.0 km North", rank: 1, color: "bg-emerald-500 text-black font-extrabold" },
    { gridId: 2, dist: "1.5 km NE", rank: 1, color: "bg-emerald-500 text-black font-extrabold" },
    { gridId: 3, dist: "2.5 km East", rank: 2, color: "bg-emerald-400 text-black font-extrabold" },
    { gridId: 4, dist: "4.0 km SE", rank: 3, color: "bg-emerald-400 text-black font-extrabold" },
    { gridId: 5, dist: "5.0 km South", rank: 5, color: "bg-amber-400 text-black font-extrabold" },

    { gridId: 6, dist: "1.2 km NW", rank: 1, color: "bg-emerald-500 text-black font-extrabold" },
    { gridId: 7, dist: "0.5 km Center", rank: 1, color: "bg-emerald-500 text-black font-extrabold" },
    { gridId: 8, dist: "1.8 km East", rank: 2, color: "bg-emerald-400 text-black font-extrabold" },
    { gridId: 9, dist: "3.2 km SE", rank: 4, color: "bg-amber-400 text-black font-extrabold" },
    { gridId: 10, dist: "4.5 km South", rank: 7, color: "bg-amber-500 text-black font-extrabold" },

    { gridId: 11, dist: "2.0 km West", rank: 2, color: "bg-emerald-400 text-black font-extrabold" },
    { gridId: 12, dist: "1.0 km SW", rank: 1, color: "bg-emerald-500 text-black font-extrabold" },
    { gridId: 13, dist: "2.2 km South", rank: 3, color: "bg-emerald-400 text-black font-extrabold" },
    { gridId: 14, dist: "3.8 km SE", rank: 6, color: "bg-amber-400 text-black font-extrabold" },
    { gridId: 15, dist: "5.5 km Outskirts", rank: 11, color: "bg-rose-500 text-white font-extrabold" },
  ];

  const handleCopySchema = () => {
    const geoSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": businessName,
      "description": `Leading ${targetKeyword} services in ${displayCityName}, ${activeCity.state}.`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": displayCityName,
        "addressRegion": activeCity.state,
        "postalCode": activeCity.pincode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": activeCity.lat,
        "longitude": activeCity.lng
      },
      "url": SITE_URL,
      "telephone": CONTACT.phone.replace(/\s+/g, ""),
      "areaServed": [displayCityName, "Delhi NCR", "Uttar Pradesh"]
    };

    copy(JSON.stringify(geoSchema, null, 2));
  };

  return (
    <div className="bg-black/90 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-widest mb-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Local Search Ranking & Geo-Grid Simulator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Local SEO Visibility Simulator
          </h2>
          <p className="text-xs text-white/60 mt-1 max-w-xl font-light leading-relaxed">
            Simulate how targeting city-specific search terms like <strong className="text-emerald-400">'Ayodhya'</strong>, <strong className="text-emerald-400">'Delhi'</strong>, or <strong className="text-emerald-400">'Noida'</strong> influences your Google Map Pack position and local pack visibility.
          </p>
        </div>

        <button
          onClick={handleCopySchema}
          className="px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 shadow-lg shrink-0"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? "Copied JSON-LD Schema!" : `Copy ${displayCityName} Geo-Schema`}</span>
        </button>
      </div>

      {/* Interactive Controls Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 bg-black rounded-2xl border border-white/15 shadow-xl">
        
        {/* City Selector Buttons */}
        <div className="md:col-span-6 space-y-2">
          <label className="text-[10px] font-mono uppercase text-white/60 font-bold block">
            Select Target City / Region Preset
          </label>
          <div className="flex flex-wrap gap-1.5">
            {CITY_PRESETS.map((preset) => {
              const isSelected = selectedCityId === preset.id && !customCity;
              return (
                <button
                  key={preset.id}
                  onClick={() => {
                    setSelectedCityId(preset.id);
                    setCustomCity("");
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1 ${
                    isSelected
                      ? "bg-white text-black font-bold shadow-lg"
                      : "bg-white/5 text-white/70 hover:text-white border border-white/10"
                  }`}
                >
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{preset.cityName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom City or Keyword Inputs */}
        <div className="md:col-span-6 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-mono uppercase text-white/60 font-bold block mb-1">
                Or Custom City Name
              </label>
              <input
                type="text"
                value={customCity}
                onChange={(e) => setCustomCity(e.target.value)}
                placeholder="e.g. Lucknow, Varanasi"
                className="w-full bg-zinc-950 border border-white/20 rounded-xl px-3 py-1.5 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-white/60 font-bold block mb-1">
                Target Service / Keyword
              </label>
              <input
                type="text"
                value={targetKeyword}
                onChange={(e) => setTargetKeyword(e.target.value)}
                placeholder="e.g. Technical SEO Specialist"
                className="w-full bg-zinc-950 border border-white/20 rounded-xl px-3 py-1.5 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-white"
              />
            </div>
          </div>
        </div>

      </div>

      {/* LOCAL VISIBILITY HUD SCORE & GEOLOCATION HEATMAP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Local Pack Score & Metrics */}
        <div className="lg:col-span-5 p-6 bg-black/80 border border-white/10 rounded-2xl space-y-6 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-400" />
                Local Map Pack Visibility Score
              </span>
              <span className="text-[10px] font-mono text-white/40">{displayCityName} Search Index</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border-2 border-emerald-500/40 flex flex-col items-center justify-center shrink-0">
                <span className="text-3xl font-black font-mono text-emerald-400">{visibilityScore}%</span>
                <span className="text-[9px] font-mono text-white/50 uppercase">Local Score</span>
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Map Pack Top 3 Position</span>
                </div>
                <h3 className="text-sm font-bold text-white font-mono">
                  "{targetKeyword} {displayCityName}"
                </h3>
                <p className="text-[11px] text-white/60 font-light">
                  Est. Local Search Demand: <strong className="text-white">{activeCity.searchVolume}</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Geo Toggles */}
          <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-mono">
            <div className="text-[10px] text-white/50 uppercase font-bold">Local SEO Ranking Factors:</div>
            
            <label className="flex items-center justify-between p-2.5 bg-white/5 border border-white/10 rounded-xl cursor-pointer">
              <span className="text-white/80">LocalBusiness JSON-LD Geo Schema</span>
              <input
                type="checkbox"
                checked={hasGeoSchema}
                onChange={(e) => setHasGeoSchema(e.target.checked)}
                className="rounded border-white/20 bg-black text-emerald-400 focus:ring-0"
              />
            </label>

            <label className="flex items-center justify-between p-2.5 bg-white/5 border border-white/10 rounded-xl cursor-pointer">
              <span className="text-white/80">Google Business Verified 5-Star Reviews</span>
              <input
                type="checkbox"
                checked={hasGoogleReviews}
                onChange={(e) => setHasGoogleReviews(e.target.checked)}
                className="rounded border-white/20 bg-black text-emerald-400 focus:ring-0"
              />
            </label>
          </div>
        </div>

        {/* Right Side: Simulated Google Map Pack SERP Preview */}
        <div className="lg:col-span-7 p-6 bg-black border border-white/15 rounded-2xl space-y-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Simulated Google Map Pack SERP • {displayCityName}
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Position #1 Ranking</span>
          </div>

          {/* Simulated Google Search Results Card */}
          <div className="p-4 bg-zinc-950 border border-emerald-500/30 rounded-xl space-y-3 shadow-xl">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Google Map Pack Listing #1</span>
                <h4 className="text-base font-bold text-white font-mono flex items-center gap-1.5">
                  <span>{businessName}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </h4>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mt-0.5">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-white font-bold">5.0</span>
                  <span className="text-white/50">(48 Google Reviews)</span>
                </div>
              </div>

              <div className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold uppercase shrink-0">
                0.8 km from center
              </div>
            </div>

            <p className="text-xs text-white/80 font-light leading-relaxed">
              Top-rated <strong className="text-white">{targetKeyword}</strong> serving clients across {displayCityName}, {activeCity.state} ({activeCity.pincode}). Core Web Vitals optimization, JSON-LD Schema, and technical search rankings.
            </p>

            <div className="flex items-center gap-2 pt-2 text-[10px] font-mono text-white/60">
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold">{displayCityName} Branch</span>
              <span>•</span>
              <span>Open 24/7</span>
              <span>•</span>
              <span className="text-emerald-400 font-bold">Verified Location</span>
            </div>
          </div>

          {/* Simulated Geo Heatmap Coordinates Matrix */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-white/50 uppercase font-bold">
              <span>Geo-Coordinate Ranking Heatmap Across {displayCityName}:</span>
              <span className="text-emerald-400">Green = Top 3 Map Pack</span>
            </div>

            <div className="grid grid-cols-5 gap-2 text-center">
              {heatmapGrid.map((pin) => (
                <div 
                  key={pin.gridId} 
                  className={`p-2 rounded-xl text-xs font-mono border border-white/10 transition-all ${pin.color}`}
                >
                  <div className="text-[9px] opacity-80 uppercase">Rank</div>
                  <div className="text-base font-black">#{pin.rank}</div>
                  <div className="text-[8px] opacity-75 truncate">{pin.dist}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
