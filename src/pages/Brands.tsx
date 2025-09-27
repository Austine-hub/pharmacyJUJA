import React, { useMemo, useState, useRef, useEffect } from "react";
import styles from "./Brands.module.css";

/**
 * Brands component
 * - Mirrors the brands listing page structure (alphabet index, grouped lists, search)
 * - No headers/footers included — just the component
 *
 * Source page used to extract brand names & structure: beyondRx "Brands" page. :contentReference[oaicite:1]{index=1}
 */

type BrandsProps = {
  // optional override data
  brands?: string[];
};

const DEFAULT_BRANDS: string[] = [
  // Extracted sample of brand names from the live page (representative list).
  // You can replace this list or pass `brands` prop to override.
  "4Eyes", "701", "A'pieu", "Abreva", "ACET", "Actavis", "Actimove", "Adasept",
  "Advil", "Aerius", "AESTURA", "Alcon", "Aleve", "Align", "Alka-Seltzer", "Allegra",
  "Allenburys", "Allergan", "Allernix", "Always", "Amosan", "Anbesol", "Anua", "Anurex",
  "Anusol", "Apothecare", "Aspercreme", "Aspirin", "Astrapharm", "Atlas", "Atopalm",
  "ATTITUDE", "Aveeno", "AXIS-Y",
  "Bacitin", "Bactine", "Band-Aid", "Barriere", "Bausch & Lomb", "BD", "Beano",
  "Beauty of Joseon", "Beekeeper's Naturals", "Benadryl", "Benzagel", "Betadine",
  "Bigen", "BioGaia", "BIOS Medical", "Biotene", "Blink", "Blistex", "Brylcreem",
  "Buckley's",
  "Caltrate", "CandorVision", "Canesten", "Caprina", "Card Health Cares", "Carmex",
  "Celimax", "Centrum", "Cepacol", "CeraVe", "Cetaphil", "ChapStick", "Chartwell",
  "Chloraseptic", "Citracal", "Claritin", "Clean & Clear", "Clear Eyes", "Colace",
  "Cold-FX", "Colgate", "Coltalin", "Compound W", "Contour", "Coopercare", "Cortate",
  "COSRX", "Crest", "Cromolyn", "Cryopak", "Curel", "Cystoplus",
  "Ddrops", "Deep Relief", "DenTek", "Dequadin", "Dermaflex", "Dermal Therapy",
  "Dermburo", "Dettol", "Dex4", "DivaCup", "Dormer 211", "Dove", "Dr. Bronner's",
  "Dr. Melaxin", "Dr. Scholl's", "Dr.G", "Dristan", "Drixoral", "Dulcolax", "Durex",
  "Eagle Brand", "Earol", "Edge", "Efferdent", "Elastoplast", "Electrolyte",
  "Elizavecca", "Emtrix", "Ene-med", "ENO", "Entrophen", "Epura", "equal", "Esenvia",
  "Etude House", "Eucerin", "ex-lax", "EZ Health", "FeraMAX", "Ferosom", "Fixodent",
  "FLA Orthopedics", "Fleet", "Flonase", "Florastor", "Foodaholic", "Form-Aid",
  "Formedica", "FreeStyle", "Fungi Cure", "Fungi Nail", "Futuro",
  "Gas-X", "Gaviscon", "Gelusil", "Gillette", "Glaxal Base", "GluteGuard", "Glysomed",
  "Gold Bond", "Gravol", "GUM",
  "Hawaiian Tropic", "health One", "HealthCare Plus", "Heimish", "Helixia", "Hemovel",
  "Hoe Hin",
  // ... (truncated for brevity). The list can be extended or fully replaced by passing brands prop.
];

function groupBrands(brands: string[]) {
  const groups: Record<string, string[]> = {};
  for (const brand of brands) {
    const first = brand.trim().charAt(0).toUpperCase();
    const key = /[A-Z]/.test(first) ? first : "0-9";
    if (!groups[key]) groups[key] = [];
    groups[key].push(brand);
  }
  // sort keys and values
  const orderedKeys = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))];
  const result: [string, string[]][] = [];
  for (const k of orderedKeys) {
    if (groups[k]) {
      result.push([k, groups[k].sort((a, b) => a.localeCompare(b))]);
    }
  }
  return result;
}

const alphabet = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))];

export default function Brands({ brands }: BrandsProps) {
  const data = brands && brands.length ? brands : DEFAULT_BRANDS;
  const [query, setQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  // filtered list based on search
  const filtered = useMemo(() => {
    if (!query.trim()) return data;
    const q = query.trim().toLowerCase();
    return data.filter(b => b.toLowerCase().includes(q));
  }, [data, query]);

  const grouped = useMemo(() => groupBrands(filtered), [filtered]);

  // keyboard: focus first brand of active letter when activeLetter changes
  useEffect(() => {
    if (!activeLetter || !listRef.current) return;
    const el = listRef.current.querySelector<HTMLDivElement>(`[data-letter="${activeLetter}"]`);
    if (el) el.focus();
  }, [activeLetter]);

  const handleLetterClick = (letter: string) => {
    setActiveLetter(letter);
    // try to scroll the letter into view
    const target = listRef.current?.querySelector<HTMLElement>(`[data-letter="${letter}"]`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.wrapper} role="region" aria-labelledby="brands-heading">
      <h1 id="brands-heading" className={styles.heading}>Brands</h1>

      <div className={styles.controls}>
        <label htmlFor="brand-search" className={styles.srOnly}>Search brands</label>
        <input
          id="brand-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search brands..."
          className={styles.search}
          aria-label="Search brands"
        />

        <div className={styles.alphaIndex} role="navigation" aria-label="Jump to letter">
          {alphabet.map(letter => (
            <button
              key={letter}
              className={`${styles.letterBtn} ${activeLetter === letter ? styles.activeLetter : ""}`}
              onClick={() => handleLetterClick(letter)}
              aria-pressed={activeLetter === letter}
              title={letter}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <aside className={styles.sidebar} aria-hidden={false}>
          <div className={styles.sidebarInner}>
            {grouped.map(([letter, items]) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className={styles.sidebarLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleLetterClick(letter);
                }}
              >
                <span className={styles.sidebarLetter}>{letter}</span>
                <span className={styles.sidebarCount}>{items.length}</span>
              </a>
            ))}
          </div>
        </aside>

        <div className={styles.listWrap} ref={listRef}>
          {grouped.length === 0 ? (
            <div className={styles.empty}>No brands match your search.</div>
          ) : (
            grouped.map(([letter, items]) => (
              <section
                key={letter}
                id={`letter-${letter}`}
                data-letter={letter}
                tabIndex={-1}
                className={styles.letterSection}
                aria-labelledby={`heading-${letter}`}
              >
                <h2 id={`heading-${letter}`} className={styles.letterHeading}>{letter}</h2>
                <ul className={styles.brandList}>
                  {items.map((b) => (
                    <li key={b} className={styles.brandItem}>
                      {/* In the original page these are links to brand collections; here we render anchors that could route */}
                      <a href={`#brand-${encodeURIComponent(b)}`} className={styles.brandLink}>
                        {b}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
