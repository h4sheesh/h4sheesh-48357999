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
  youtubeId: string;
};

const yt = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

export const BEATS: Beat[] = [
  {
    id: "1",
    title: "all night",
    producer: "h4sheesh",
    bpm: 145,
    key: "Am",
    genre: "Trap",
    tags: ["supertrap", "detroit", "glo"],
    duration: "2:30",
    price: 899,
    cover: yt("8vVRw02pEsY"),
    youtubeId: "8vVRw02pEsY",
  },
  {
    id: "2",
    title: "dead serious",
    producer: "h4sheesh",
    bpm: 150,
    key: "Fm",
    genre: "Trap",
    tags: ["hard", "savage", "party"],
    duration: "2:24",
    price: 899,
    cover: yt("ahMnDqALgRI"),
    youtubeId: "ahMnDqALgRI",
  },
  {
    id: "3",
    title: "we will win",
    producer: "h4sheesh",
    bpm: 140,
    key: "Dm",
    genre: "Trap",
    tags: ["experimental", "melodic"],
    duration: "2:42",
    price: 899,
    cover: yt("T9bNVOulA6E"),
    youtubeId: "T9bNVOulA6E",
  },
  {
    id: "4",
    title: "hell",
    producer: "h4sheesh",
    bpm: 155,
    key: "Gm",
    genre: "Trap",
    tags: ["ian", "swapa", "supertrap"],
    duration: "2:18",
    price: 899,
    cover: yt("HajpALEg9J8"),
    youtubeId: "HajpALEg9J8",
  },
  {
    id: "5",
    title: "forza 220",
    producer: "h4sheesh",
    bpm: 148,
    key: "Em",
    genre: "Trap",
    tags: ["detroit", "trap"],
    duration: "2:36",
    price: 899,
    cover: yt("4xcjNz7P-HQ"),
    youtubeId: "4xcjNz7P-HQ",
  },
];
