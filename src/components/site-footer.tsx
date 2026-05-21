import { Flame, Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-ember" />
            <span className="font-display text-xl font-bold">h4sheesh</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Producer-owned beat marketplace. Custom production, exclusive rights, and full mix delivery.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-ember hover:text-ember">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/beats" className="hover:text-ember">All Beats</Link></li>
            <li><Link to="/licensing" className="hover:text-ember">Licensing</Link></li>
            <li><Link to="/contact" className="hover:text-ember">Custom Work</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>book@h4sheesh.com</li>
            <li>Mon–Fri, 10am–7pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} h4sheesh. All rights reserved.
      </div>
    </footer>
  );
}
