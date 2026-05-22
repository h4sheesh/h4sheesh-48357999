import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { BEATS } from "@/lib/beats-data";
import { BeatCard } from "@/components/beat-card";
import { player } from "@/lib/player-store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "h4sheesh — Beaty, loopy a vlastní produkce" },
      { name: "description", content: "Nakup tvrdé trap, hip-hop a R&B beaty od producenta h4sheesh. Okamžité stažení, exkluzivní licence, zakázková tvorba." },
      { property: "og:title", content: "h4sheesh — Beaty, loopy a vlastní produkce" },
      { property: "og:description", content: "Nakup tvrdé trap, hip-hop a R&B beaty od producenta h4sheesh." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = BEATS.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={hero} alt="" width={1600} height={1024} className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-48">
          <span className="inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ember">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
            New drops weekly
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Beats that <span className="text-gradient-ember">hit different.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Premium trap, hip-hop, and R&B production. Instant download, clear licensing, full mix delivery — straight from the source.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/beats" className="group flex items-center gap-2 rounded-full gradient-ember px-6 py-3 font-semibold text-primary-foreground shadow-ember transition-transform hover:scale-105">
              Browse Beats <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              onClick={() => player.play(BEATS[0])}
              className="flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 font-semibold backdrop-blur transition-colors hover:border-ember hover:text-ember"
            >
              <Play className="h-4 w-4" fill="currentColor" /> Play Featured
            </button>
          </div>
          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-border pt-8">
            {[
              { k: "120+", v: "Beats released" },
              { k: "40+", v: "Artists served" },
              { k: "4.9★", v: "Producer rating" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display text-3xl font-bold text-ember">{s.k}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BEATS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-ember">The Catalog</p>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Featured Beats</h2>
          </div>
          <Link to="/beats" className="hidden items-center gap-2 text-sm font-medium text-muted-foreground hover:text-ember md:flex">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((b) => <BeatCard key={b.id} beat={b} />)}
        </div>
      </section>

      {/* GENRE STRIP */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6 py-10">
          {["Trap", "Hip-Hop", "Drill", "R&B", "Lo-Fi", "Boom-Bap", "Afrobeats"].map((g) => (
            <span key={g} className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium transition-colors hover:border-ember hover:text-ember">
              {g}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl font-bold md:text-6xl">
          Need something <span className="text-gradient-ember">custom?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Tailored production for your project — from a single beat to a full EP. Let's build it together.
        </p>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full gradient-ember px-8 py-4 font-semibold text-primary-foreground shadow-ember transition-transform hover:scale-105">
          Start a project <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
