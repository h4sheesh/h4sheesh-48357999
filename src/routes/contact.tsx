import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Instagram, Youtube } from "lucide-react";
import producer from "@/assets/producer.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — h4sheesh" },
      { name: "description", content: "Book custom production, exclusive beats, or collaborations with h4sheesh." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-ember">Get in touch</p>
        <h1 className="mt-2 font-display text-5xl font-bold md:text-6xl">Let's make something loud.</h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          Custom beats, exclusive buyouts, mix & master, or just a sound check — drop a line and I'll get back within 48h.
        </p>
        <img src={producer} alt="h4sheesh in studio" width={800} height={1000} loading="lazy" className="mt-8 aspect-[4/5] w-full max-w-md rounded-2xl object-cover shadow-card" />
        <div className="mt-8 space-y-3 text-sm">
          <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-ember" /> book@h4sheesh.com</p>
          <p className="flex items-center gap-3"><Instagram className="h-4 w-4 text-ember" /> @h4sheesh</p>
          <p className="flex items-center gap-3"><Youtube className="h-4 w-4 text-ember" /> /h4sheesh</p>
        </div>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        className="space-y-5 rounded-2xl border border-border bg-surface p-8 md:sticky md:top-24 md:self-start"
      >
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
          <input required className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 outline-none focus:border-ember" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
          <input required type="email" className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 outline-none focus:border-ember" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project type</label>
          <select className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 outline-none focus:border-ember">
            <option>Custom beat</option>
            <option>Exclusive buyout</option>
            <option>Mix & master</option>
            <option>Collaboration</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tell me about it</label>
          <textarea required rows={5} className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 outline-none focus:border-ember" />
        </div>
        <button type="submit" className="w-full rounded-full gradient-ember py-3 font-semibold text-primary-foreground shadow-ember transition-transform hover:scale-[1.02]">
          {sent ? "Sent — thanks 🔥" : "Send message"}
        </button>
      </form>
    </section>
  );
}
