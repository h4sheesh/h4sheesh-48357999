import { Play, Pause, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { player, usePlayer } from "@/lib/player-store";

export function AudioBar() {
  const { current, playing } = usePlayer();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const win = iframeRef.current?.contentWindow;
    if (!win || !current) return;
    const cmd = playing ? "playVideo" : "pauseVideo";
    win.postMessage(
      JSON.stringify({ event: "command", func: cmd, args: "" }),
      "*",
    );
  }, [playing, current]);

  if (!current) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-surface/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-3">
        <img src={current.cover} alt="" className="h-12 w-12 rounded object-cover" />
        <div className="min-w-0 flex-1">
          <p className="truncate font-display font-semibold">{current.title}</p>
          <p className="text-xs text-muted-foreground">{current.producer} · {current.bpm} BPM · {current.key}</p>
        </div>
        <div className="hidden items-end gap-0.5 md:flex">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="wave-bar w-1 rounded-full bg-ember"
              style={{
                height: `${10 + (i % 5) * 6}px`,
                animationDelay: `${i * 0.05}s`,
                animationPlayState: playing ? "running" : "paused",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => player.toggle()}
          className="flex h-11 w-11 items-center justify-center rounded-full gradient-ember text-primary-foreground shadow-ember"
        >
          {playing ? <Pause className="h-5 w-5" fill="currentColor" /> : <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />}
        </button>
        <button onClick={() => player.stop()} className="text-muted-foreground hover:text-foreground" aria-label="Zavřít přehrávač">
          <X className="h-5 w-5" />
        </button>
      </div>
      <iframe
        ref={iframeRef}
        key={current.id}
        title={current.title}
        src={`https://www.youtube.com/embed/${current.youtubeId}?autoplay=1&enablejsapi=1&playsinline=1`}
        allow="autoplay; encrypted-media"
        className="pointer-events-none absolute h-0 w-0 opacity-0"
      />
    </div>
  );
}
