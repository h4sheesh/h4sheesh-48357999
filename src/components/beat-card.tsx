import { Play, Pause, ShoppingCart } from "lucide-react";
import type { Beat } from "@/lib/beats-data";
import { player, usePlayer } from "@/lib/player-store";

export function BeatCard({ beat }: { beat: Beat }) {
  const { current, playing, cart } = usePlayer();
  const isCurrent = current?.id === beat.id;
  const isPlaying = isCurrent && playing;
  const inCart = !!cart.find((b) => b.id === beat.id);

  return (
    <article className="group relative overflow-hidden rounded-xl border border-border bg-surface transition-all hover:border-ember/50 hover:shadow-ember">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={beat.cover}
          alt={beat.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
        <button
          onClick={() => (isCurrent ? player.toggle() : player.play(beat))}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full gradient-ember text-primary-foreground shadow-ember transition-transform hover:scale-110"
        >
          {isPlaying ? <Pause className="h-5 w-5" fill="currentColor" /> : <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />}
        </button>
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded bg-background/80 px-2 py-1 text-xs font-medium backdrop-blur">{beat.bpm} BPM</span>
          <span className="rounded bg-background/80 px-2 py-1 text-xs font-medium backdrop-blur">{beat.key}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate font-display text-lg font-semibold">{beat.title}</h3>
            <p className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">{beat.genre} · {beat.duration}</p>
          </div>
          <span className="shrink-0 font-display text-lg font-bold text-ember">{beat.price} Kč</span>
        </div>
        <button
          onClick={() => player.addToCart(beat)}
          disabled={inCart}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background py-2 text-sm font-medium transition-colors hover:border-ember hover:text-ember disabled:opacity-50"
        >
          <ShoppingCart className="h-4 w-4" />
          {inCart ? "Přidáno" : "Do košíku"}
        </button>
      </div>
    </article>
  );
}
