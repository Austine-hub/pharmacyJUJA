import { useMemo, useState, useRef, useEffect } from "react";
import styles from "./Brands.module.css";
import brandDataRaw from "../data/Brands.json"; // ✅ raw JSON import

/**
 * Brands1 component
 * - Alphabet navigation + search
 * - Dynamically groups brands from brands.json
 */

type Brand = {
  name: string;
  url?: string;
};

// ✅ Cast imported JSON safely
const brandData: Brand[] = brandDataRaw as Brand[];

function groupBrands(brands: Brand[]) {
  const groups: Record<string, Brand[]> = {};
  for (const brand of brands) {
    if (!brand?.name) continue; // skip if no name
    const first = brand.name.trim().charAt(0).toUpperCase();
    const key = /[A-Z]/.test(first) ? first : "0-9";
    if (!groups[key]) groups[key] = [];
    groups[key].push(brand);
  }

  const orderedKeys = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))];

  return orderedKeys
    .filter((k) => groups[k])
    .map<[string, Brand[]]>((k) => [k, groups[k].sort((a, b) => a.name.localeCompare(b.name))]);
}

const alphabet = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))];

export default function Brands1() {
  const [query, setQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  // ✅ Filter brands by search
  const filtered = useMemo(() => {
    if (!query.trim()) return brandData;
    const q = query.trim().toLowerCase();
    return brandData.filter((b) => b.name.toLowerCase().includes(q));
  }, [query]);

  const grouped = useMemo(() => groupBrands(filtered), [filtered]);

  // ✅ Auto-focus when navigating by letter
  useEffect(() => {
    if (!activeLetter || !listRef.current) return;
    const el = listRef.current.querySelector<HTMLDivElement>(`[data-letter="${activeLetter}"]`);
    if (el) el.focus();
  }, [activeLetter]);

  const handleLetterClick = (letter: string) => {
    setActiveLetter(letter);
    const target = listRef.current?.querySelector<HTMLElement>(`[data-letter="${letter}"]`);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.wrapper} role="region" aria-labelledby="brands-heading">
      <h1 id="brands-heading" className={styles.heading}>
        Brands
      </h1>

      {/* 🔍 Search + Alphabet navigation */}
      <div className={styles.controls}>
        <label htmlFor="brand-search" className={styles.srOnly}>
          Search brands
        </label>
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
          {alphabet.map((letter) => (
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

      {/* 📚 Sidebar + Brand list */}
      <div className={styles.content}>
        <aside className={styles.sidebar}>
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
                <h2 id={`heading-${letter}`} className={styles.letterHeading}>
                  {letter}
                </h2>
                <ul className={styles.brandList}>
                  {items.map((brand) => (
                    <li key={brand.name} className={styles.brandItem}>
                      <a
                        href={brand.url || `#brand-${encodeURIComponent(brand.name)}`}
                        className={styles.brandLink}
                      >
                        {brand.name}
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

