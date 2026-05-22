import { Link } from "@tanstack/react-router";
import { ShoppingCart, Flame } from "lucide-react";
import { usePlayer } from "@/lib/player-store";

export function SiteHeader() {
  const { cart } = usePlayer();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <Flame className="h-6 w-6 text-ember transition-transform group-hover:scale-110" />
          <span className="font-display text-xl font-bold tracking-tight">h4sheesh</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }}>Domů</Link>
          <Link to="/beats" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>Beaty</Link>
          <Link to="/licensing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>Licence</Link>
          <Link to="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>Kontakt</Link>
        </nav>
        <button className="relative flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-ember hover:text-ember">
          <ShoppingCart className="h-4 w-4" />
          <span>Košík</span>
          {cart.length > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-ember text-xs font-bold text-primary-foreground">{cart.length}</span>
          )}
        </button>
      </div>
    </header>
  );
}
