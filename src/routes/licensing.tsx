import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/licensing")({
  head: () => ({
    meta: [
      { title: "Licensing — h4sheesh" },
      { name: "description", content: "Basic, Premium, and Exclusive license tiers. Clear terms, instant delivery." },
    ],
  }),
  component: LicensingPage,
});

const TIERS = [
  {
    name: "Basic",
    price: 34.99,
    desc: "Untagged MP3 · Up to 5,000 streams",
    perks: ["MP3 file", "Used for music recording", "Distribute up to 5,000 streams", "1 music video", "Non-profit live performance"],
    featured: false,
  },
  {
    name: "Premium",
    price: 79.99,
    desc: "WAV + Stems · Up to 100,000 streams",
    perks: ["MP3 + WAV + Track Stems", "Up to 100,000 streams", "Unlimited music videos", "Paid live performances", "Radio broadcasting (2 stations)"],
    featured: true,
  },
  {
    name: "Exclusive",
    price: 499,
    desc: "Full ownership · Beat removed from store",
    perks: ["All files (MP3, WAV, Stems)", "Unlimited streams & sales", "Beat pulled from the catalog", "Full broadcasting rights", "Buyer becomes the sole owner"],
    featured: false,
  },
];

function LicensingPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-ember">Licensing</p>
        <h1 className="mt-2 font-display text-5xl font-bold md:text-6xl">Pick a license that fits.</h1>
        <p className="mt-4 text-muted-foreground">All licenses are non-refundable and delivered instantly to your inbox after checkout.</p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {TIERS.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-2xl border p-8 transition-transform hover:-translate-y-1 ${
              t.featured ? "border-ember bg-surface shadow-ember" : "border-border bg-surface"
            }`}
          >
            {t.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-ember px-3 py-1 text-xs font-bold text-primary-foreground">
                MOST POPULAR
              </span>
            )}
            <h3 className="font-display text-2xl font-bold">{t.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
            <p className="mt-6 font-display text-5xl font-bold">
              ${t.price}
            </p>
            <ul className="mt-8 space-y-3">
              {t.perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/beats"
              className={`mt-8 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                t.featured ? "gradient-ember text-primary-foreground shadow-ember" : "border border-border bg-background hover:border-ember"
              }`}
            >
              Browse Beats <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-2xl border border-border bg-surface p-10 text-center">
        <h2 className="font-display text-3xl font-bold">Need bigger rights?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Major-label clearance, sync deals, or full buyouts — reach out for custom terms.
        </p>
        <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full gradient-ember px-6 py-3 font-semibold text-primary-foreground shadow-ember">
          Contact for custom <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
