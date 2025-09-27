import React, { useMemo, useState, useRef, useEffect } from "react";
import styles from "./Brands.module.css";
import { BRANDS } from "../data/brands2"; // <-- new import

type BrandsProps = {
  // optional override data
  brands?: string[];
};

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

const alphabet = ["0-9", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))];

export default function Brands({ brands }: BrandsProps) {
  // fallback to BRANDS from data file
  const data = brands && brands.length ? brands : BRANDS;
  const [query, setQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return data;
    const q = query.trim().toLowerCase();
    return data.filter(b => b.toLowerCase().includes(q));
  }, [data, query]);

  const grouped = useMemo(() => groupBrands(filtered), [filtered]);

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
      {/* ... your JSX remains exactly the same ... */}
    </div>
  );
}
