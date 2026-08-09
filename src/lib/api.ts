export type Movie = {
  id: number;
  title: string;
  poster_url: string;
  release_year: number;
  rating: number;
  overview: string;
  mood_tags: string[];
};

export const MOVIE_DB: Movie[] = [
  {
    id: 1,
    title: "Letters from the Lighthouse",
    poster_url: "https://picsum.photos/seed/vibe-lighthouse/400/600",
    release_year: 2019,
    rating: 7.8,
    overview:
      "A retired keeper spends one slow winter answering letters he never sent, rediscovering the warmth of small rituals.",
    mood_tags: ["cozy", "melancholy", "romantic"],
  },
  {
    id: 2,
    title: "Cinnamon & Rain",
    poster_url: "https://picsum.photos/seed/vibe-cinnamon/400/600",
    release_year: 2021,
    rating: 7.4,
    overview:
      "Two strangers share a bakery counter during a week-long storm, trading recipes and quiet confessions.",
    mood_tags: ["cozy", "romantic"],
  },
  {
    id: 3,
    title: "The Long Afternoon",
    poster_url: "https://picsum.photos/seed/vibe-afternoon/400/600",
    release_year: 2017,
    rating: 7.1,
    overview:
      "A family reunion unfolds over a single golden afternoon in the countryside, with tea, gossip and old wounds.",
    mood_tags: ["cozy", "melancholy"],
  },
  {
    id: 4,
    title: "Neon Overdrive",
    poster_url: "https://picsum.photos/seed/vibe-neon/400/600",
    release_year: 2022,
    rating: 8.1,
    overview:
      "A street racer with nothing left to lose takes on a syndicate in a city that never stops pulsing.",
    mood_tags: ["energy", "thrilling"],
  },
  {
    id: 5,
    title: "Kick Loud",
    poster_url: "https://picsum.photos/seed/vibe-kickloud/400/600",
    release_year: 2020,
    rating: 7.6,
    overview:
      "An underdog drumline fights its way to the national stage with sweat, rivalry and impossible rhythm.",
    mood_tags: ["energy"],
  },
  {
    id: 6,
    title: "Velocity Nine",
    poster_url: "https://picsum.photos/seed/vibe-velocity/400/600",
    release_year: 2023,
    rating: 7.9,
    overview:
      "Nine pilots. One suicidal race across the stratosphere. A relentless thrill ride at maximum throttle.",
    mood_tags: ["energy", "mindbending"],
  },
  {
    id: 7,
    title: "Ashes in September",
    poster_url: "https://picsum.photos/seed/vibe-ashes/400/600",
    release_year: 2016,
    rating: 8.3,
    overview:
      "A widow retraces her husband's last summer through the towns he photographed but never described.",
    mood_tags: ["melancholy", "romantic"],
  },
  {
    id: 8,
    title: "Grey Harbour",
    poster_url: "https://picsum.photos/seed/vibe-harbour/400/600",
    release_year: 2018,
    rating: 7.7,
    overview:
      "In a fading fishing town, a teenager learns that leaving and staying can hurt exactly the same.",
    mood_tags: ["melancholy"],
  },
  {
    id: 9,
    title: "Recursion Field",
    poster_url: "https://picsum.photos/seed/vibe-recursion/400/600",
    release_year: 2021,
    rating: 8.5,
    overview:
      "A physicist discovers her memories are being rewritten each night — and she may be the one doing it.",
    mood_tags: ["mindbending", "thrilling"],
  },
  {
    id: 10,
    title: "The Fifth Room",
    poster_url: "https://picsum.photos/seed/vibe-fifthroom/400/600",
    release_year: 2015,
    rating: 8.0,
    overview:
      "Four doors, four lives, one impossible architecture that folds identity in on itself.",
    mood_tags: ["mindbending"],
  },
  {
    id: 11,
    title: "Paper Astronauts",
    poster_url: "https://picsum.photos/seed/vibe-paper/400/600",
    release_year: 2024,
    rating: 7.5,
    overview:
      "A dreamlike odyssey through a boy's invented cosmos, where grief takes the shape of constellations.",
    mood_tags: ["mindbending", "melancholy", "cozy"],
  },
  {
    id: 12,
    title: "Two Trains to Lisbon",
    poster_url: "https://picsum.photos/seed/vibe-lisbon/400/600",
    release_year: 2019,
    rating: 7.9,
    overview:
      "They meet on the wrong platform and spend thirty-six hours pretending it isn't love.",
    mood_tags: ["romantic", "cozy"],
  },
  {
    id: 13,
    title: "Slow Dance, Fast City",
    poster_url: "https://picsum.photos/seed/vibe-slowdance/400/600",
    release_year: 2022,
    rating: 7.3,
    overview:
      "A night-shift nurse and a jazz bassist build a romance in the ten minutes they share each dawn.",
    mood_tags: ["romantic", "melancholy"],
  },
  {
    id: 14,
    title: "The Quiet Client",
    poster_url: "https://picsum.photos/seed/vibe-client/400/600",
    release_year: 2020,
    rating: 8.2,
    overview:
      "A defense attorney takes a case no one wants and finds the truth buried under three confessions.",
    mood_tags: ["thrilling", "mindbending"],
  },
  {
    id: 15,
    title: "Hollow Signal",
    poster_url: "https://picsum.photos/seed/vibe-hollow/400/600",
    release_year: 2023,
    rating: 7.8,
    overview:
      "A radio operator in the arctic starts receiving broadcasts from a station that burned down years ago.",
    mood_tags: ["thrilling", "melancholy"],
  },
  {
    id: 16,
    title: "Midnight Ledger",
    poster_url: "https://picsum.photos/seed/vibe-ledger/400/600",
    release_year: 2018,
    rating: 8.4,
    overview:
      "An accountant for the mob decides to keep one honest book — the most dangerous decision of his life.",
    mood_tags: ["thrilling", "energy"],
  },
];

export const MOODS = [
  { id: "cozy", emoji: "☕️", label: "Cozy & Calm", keywords: ["cozy", "calm", "warm", "comfort", "chill", "relax", "quiet", "soft", "tea", "rain"] },
  { id: "energy", emoji: "⚡️", label: "High Energy", keywords: ["energy", "energetic", "hype", "pumped", "action", "fast", "loud", "party", "adrenaline"] },
  { id: "melancholy", emoji: "🌧️", label: "Melancholy & Deep", keywords: ["melancholy", "sad", "deep", "lonely", "grief", "reflective", "blue", "cry", "emotional"] },
  { id: "mindbending", emoji: "🚀", label: "Mind-Bending", keywords: ["mind", "mindbending", "weird", "trippy", "sci-fi", "scifi", "surreal", "confusing", "space", "think"] },
  { id: "romantic", emoji: "💖", label: "Romantic Vibes", keywords: ["romantic", "romance", "love", "date", "crush", "sweet", "heart"] },
  { id: "thrilling", emoji: "🕵️", label: "Dark & Thrilling", keywords: ["dark", "thrilling", "thriller", "tense", "mystery", "crime", "suspense", "noir", "scary"] },
] as const;

export type MoodId = (typeof MOODS)[number]["id"];

function resolveMoods(input: string): MoodId[] {
  const text = input.toLowerCase();
  const direct = MOODS.find((m) => m.id === text);
  if (direct) return [direct.id];
  return MOODS.filter((m) => m.keywords.some((k) => text.includes(k))).map((m) => m.id);
}

export async function fetchMoviesByVibe(vibeInput: string): Promise<Movie[]> {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const query = vibeInput.trim();
  if (!query) return [];

  const moods = resolveMoods(query);

  if (moods.length > 0) {
    return MOVIE_DB.filter((movie) => movie.mood_tags.some((tag) => moods.includes(tag as MoodId)))
      .sort((a, b) => b.rating - a.rating);
  }

  const text = query.toLowerCase();
  return MOVIE_DB.filter(
    (movie) =>
      movie.title.toLowerCase().includes(text) || movie.overview.toLowerCase().includes(text),
  ).sort((a, b) => b.rating - a.rating);
}
