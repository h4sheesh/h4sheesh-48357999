export type Beat = {
  id: string;
  title: string;
  producer: string;
  bpm: number;
  key: string;
  genre: string;
  tags: string[];
  duration: string;
  price: number;
  cover: string;
};

const covers = [
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
  "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80",
  "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&q=80",
  "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=600&q=80",
  "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=600&q=80",
];

export const BEATS: Beat[] = [
  { id: "1", title: "Midnight Drift", producer: "h4sheesh", bpm: 140, key: "Am", genre: "Trap", tags: ["dark", "moody", "808"], duration: "2:48", price: 34.99, cover: covers[0] },
  { id: "2", title: "Ember Run", producer: "h4sheesh", bpm: 92, key: "Fm", genre: "Hip-Hop", tags: ["soulful", "boom-bap"], duration: "3:12", price: 29.99, cover: covers[1] },
  { id: "3", title: "Concrete Heart", producer: "h4sheesh", bpm: 75, key: "Dm", genre: "R&B", tags: ["smooth", "guitar"], duration: "3:24", price: 39.99, cover: covers[2] },
  { id: "4", title: "Static Bloom", producer: "h4sheesh", bpm: 160, key: "Gm", genre: "Drill", tags: ["uk", "sliding 808"], duration: "2:36", price: 44.99, cover: covers[3] },
  { id: "5", title: "Velvet Static", producer: "h4sheesh", bpm: 130, key: "Em", genre: "Trap", tags: ["melodic", "atmospheric"], duration: "2:58", price: 34.99, cover: covers[4] },
  { id: "6", title: "Iron & Smoke", producer: "h4sheesh", bpm: 88, key: "Cm", genre: "Hip-Hop", tags: ["aggressive", "horns"], duration: "3:02", price: 29.99, cover: covers[5] },
  { id: "7", title: "Glasshouse", producer: "h4sheesh", bpm: 145, key: "Bm", genre: "Trap", tags: ["pluck", "dreamy"], duration: "2:44", price: 34.99, cover: covers[6] },
  { id: "8", title: "Lowlight", producer: "h4sheesh", bpm: 70, key: "F#m", genre: "R&B", tags: ["soulful", "keys"], duration: "3:36", price: 39.99, cover: covers[7] },
];
