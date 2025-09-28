import { useMemo, useState, useRef, useEffect } from "react";
import styles from "./Brands.module.css";
import { brands as defaultBrands } from "../data/brands2"; // could be strings or objects

type BrandItem = string | { name: string; slug: string; url: string };

type BrandsProps = {
  brands?: BrandItem[];
};

/** Groups brands alphabetically */
function groupBrands(brands: string[]) {
  const groups: Record<string, string[]> = {};
  for (const brand of brands) {
    const first = brand.trim().charAt(0).toUpperCase();
    const key = /[A-Z]/.test(first) ? first : "0-9";
    if (!groups[key]) groups[key] = [];
    groups[key].push(brand);
  }

  const orderedKeys = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))];
  const result: [string, string[]][] = [];

  for (const k of orderedKeys) {
    if (groups[k]) {
      result.push([k, groups[k].sort((a, b) => a.localeCompare(b))]);
    }
  }
  return result;
}

export default function Brands({ brands }: BrandsProps) {
  // ✅ Normalize everything to string[]
  const rawData: BrandItem[] = brands && brands.length ? brands : defaultBrands;
  const data: string[] = rawData.map((b) => (typeof b === "string" ? b : b.name));

  const [query, setQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  // ✅ Filter brands safely
  const filtered = useMemo(() => {
    if (!query.trim()) return data;
    const q = query.trim().toLowerCase();
    return data.filter((b) => b.toLowerCase().includes(q));
  }, [data, query]);

  const grouped = useMemo(() => groupBrands(filtered), [filtered]);

  // ✅ Scroll / focus selected section when activeLetter changes
  useEffect(() => {
    if (!activeLetter || !listRef.current) return;
    const el = listRef.current.querySelector<HTMLDivElement>(`[data-letter="${activeLetter}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.focus();
    }
  }, [activeLetter]);

  // 🔤 Navigation letters
  const navLetters = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))];

  return (
    <div className={styles.wrapper} role="region" aria-labelledby="brands-heading">
      <h1 id="brands-heading" className={styles.heading}>
        Brands
      </h1>

      {/* Controls: search + alphabet navigation */}
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
        />

        {/* 🔤 Small Letter Navigation Bar */}
        <nav className={styles.alphaIndex} aria-label="Alphabet navigation">
          {navLetters.map((letter) => (
            <button
              key={letter}
              type="button"
              className={`${styles.letterBtn} ${
                activeLetter === letter ? styles.activeLetter : ""
              }`}
              onClick={() => setActiveLetter(letter)}
              disabled={!grouped.some(([k]) => k === letter)}
            >
              {letter}
            </button>
          ))}
        </nav>
      </div>

      {/* 📚 Brand list */}
      <div className={styles.listWrap} ref={listRef}>
        {grouped.length === 0 ? (
          <p className={styles.empty}>No brands found.</p>
        ) : (
          grouped.map(([letter, items]) => (
            <section
              key={letter}
              id={`letter-${letter}`}
              data-letter={letter}
              tabIndex={-1}
              className={styles.letterSection}
            >
              <h2 className={styles.letterHeading}>{letter}</h2>
              <ul className={styles.brandList}>
                {items.map((brand) => (
                  <li key={brand} className={styles.brandItem}>
                    <a href="#" className={styles.brandLink}>
                      {brand}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}
      </div>
    </div>
  );
}

