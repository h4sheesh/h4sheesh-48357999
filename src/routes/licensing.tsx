import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/licensing")({
  head: () => ({
    meta: [
      { title: "Licence — h4sheesh" },
      { name: "description", content: "Tři licenční úrovně: Basic, Premium a Exkluzivní. Jasné podmínky, okamžité dodání." },
    ],
  }),
  component: LicensingPage,
});

const TIERS = [
  {
    name: "Basic",
    price: 899,
    desc: "MP3 bez tagu · až 5 000 streamů",
    perks: ["MP3 soubor", "Použití pro nahrávání skladby", "Distribuce do 5 000 streamů", "1 videoklip", "Neziskové živé vystoupení"],
    featured: false,
  },
  {
    name: "Premium",
    price: 1990,
    desc: "WAV + stopy · až 100 000 streamů",
    perks: ["MP3 + WAV + stopy", "Až 100 000 streamů", "Neomezeně videoklipů", "Placená živá vystoupení", "Rádiové vysílání (2 stanice)"],
    featured: true,
  },
  {
    name: "Exkluzivní",
    price: 12500,
    desc: "Plné vlastnictví · beat zmizí z obchodu",
    perks: ["Všechny soubory (MP3, WAV, stopy)", "Neomezené streamy a prodeje", "Beat stažen z katalogu", "Plná vysílací práva", "Kupující se stává jediným vlastníkem"],
    featured: false,
  },
];

function LicensingPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-ember">Licence</p>
        <h1 className="mt-2 font-display text-5xl font-bold md:text-6xl">Vyber si licenci, co ti sedne.</h1>
        <p className="mt-4 text-muted-foreground">Všechny licence jsou nevratné a doručené ihned po zaplacení do e-mailu.</p>
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
                NEJOBLÍBENĚJŠÍ
              </span>
            )}
            <h3 className="font-display text-2xl font-bold">{t.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
            <p className="mt-6 font-display text-5xl font-bold">
              {t.price} Kč
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
              Prohlédnout beaty <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-2xl border border-border bg-surface p-10 text-center">
        <h2 className="font-display text-3xl font-bold">Potřebuješ širší práva?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Clearance pro velký label, sync dealy nebo plný buyout — ozvi se pro individuální podmínky.
        </p>
        <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full gradient-ember px-6 py-3 font-semibold text-primary-foreground shadow-ember">
          Kontakt na míru <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
