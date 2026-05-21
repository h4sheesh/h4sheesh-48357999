import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { BEATS } from "@/lib/beats-data";
import { BeatCard } from "@/components/beat-card";

export const Route = createFileRoute("/beats")({
  head: () => ({
    meta: [
      { title: "All Beats — h4sheesh" },
      { name: "description", content: "Browse the full beat catalog. Filter by genre, BPM, and key." },
    ],
  }),
  component: BeatsPage,
});

const GENRES = ["All", "Trap", "Hip-Hop", "Drill", "R&B"];

function BeatsPage() {
  const [q, setQ] = useState("");
  const [genre, setGenre] = useState("All");

  const filtered = BEATS.filter((b) => {
    const matchesQ = !q || b.title.toLowerCase().includes(q.toLowerCase()) || b.tags.some((t) => t.includes(q.toLowerCase()));
    const matchesG = genre === "All" || b.genre === genre;
    return matchesQ && matchesG;
  });

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-xs font-medium uppercase tracking-widest text-ember">Catalog</p>
      <h1 className="mt-2 font-display text-5xl font-bold md:text-6xl">All Beats</h1>
      <p className="mt-3 text-muted-foreground">{BEATS.length} releases · updated weekly</p>

      <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search beats, tags..."
            className="w-full rounded-full border border-border bg-surface py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-ember"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {GENRES.map((g) => (
            <button
              key={g}
              onClick={() => setGenre(g)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                genre === g ? "border-ember bg-ember text-primary-foreground" : "border-border bg-surface hover:border-ember"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((b) => <BeatCard key={b.id} beat={b} />)}
      </div>
      {filtered.length === 0 && (
        <p className="mt-20 text-center text-muted-foreground">No beats match your search.</p>
      )}
    </section>
  );
}
