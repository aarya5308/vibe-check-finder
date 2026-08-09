export type Movie = {
  id: number;
  title: string;
  genre: string;
  poster_url: string;
  release_year: number;
  rating: number;
  overview: string;
  mood_tags: string[];
};

const poster = (seed: string) => `https://picsum.photos/seed/${seed}/400/600`;

export const MOVIE_DB: Movie[] = [
  {
    id: 1,
    title: "Spirited Away",
    genre: "Animation",
    poster_url: poster("vibe-spirited"),
    release_year: 2001,
    rating: 8.6,
    overview:
      "A young girl wanders into a spirit world of bathhouses and gods, and must work to free her parents.",
    mood_tags: ["cozy", "mindbending"],
  },
  {
    id: 2,
    title: "My Neighbor Totoro",
    genre: "Animation",
    poster_url: poster("vibe-totoro"),
    release_year: 1988,
    rating: 8.1,
    overview:
      "Two sisters move to the countryside and befriend a gentle forest spirit during a tender summer.",
    mood_tags: ["cozy"],
  },
  {
    id: 3,
    title: "Amélie",
    genre: "Romance",
    poster_url: poster("vibe-amelie"),
    release_year: 2001,
    rating: 8.3,
    overview:
      "A whimsical Parisian waitress quietly engineers small miracles in the lives of everyone around her.",
    mood_tags: ["cozy", "romantic"],
  },
  {
    id: 4,
    title: "Chef",
    genre: "Comedy",
    poster_url: poster("vibe-chef"),
    release_year: 2014,
    rating: 7.3,
    overview:
      "A burned-out chef rebuilds his life, and his relationship with his son, from a food truck kitchen.",
    mood_tags: ["cozy"],
  },
  {
    id: 5,
    title: "Mad Max: Fury Road",
    genre: "Action",
    poster_url: poster("vibe-madmax"),
    release_year: 2015,
    rating: 8.1,
    overview:
      "In a scorched wasteland, a drifter and a rebel commander flee a warlord in one relentless chase.",
    mood_tags: ["energy", "thrilling"],
  },
  {
    id: 6,
    title: "Whiplash",
    genre: "Drama",
    poster_url: poster("vibe-whiplash"),
    release_year: 2014,
    rating: 8.5,
    overview:
      "An ambitious young drummer collides with a conductor whose methods border on cruelty.",
    mood_tags: ["energy", "thrilling"],
  },
  {
    id: 7,
    title: "Baby Driver",
    genre: "Action",
    poster_url: poster("vibe-babydriver"),
    release_year: 2017,
    rating: 7.5,
    overview:
      "A getaway driver who scores every heist to his playlist tries to leave the life behind.",
    mood_tags: ["energy"],
  },
  {
    id: 8,
    title: "Spider-Man: Into the Spider-Verse",
    genre: "Animation",
    poster_url: poster("vibe-spiderverse"),
    release_year: 2018,
    rating: 8.4,
    overview:
      "Miles Morales meets heroes from other dimensions and learns what it takes to wear the mask.",
    mood_tags: ["energy", "mindbending"],
  },
  {
    id: 9,
    title: "Moonlight",
    genre: "Drama",
    poster_url: poster("vibe-moonlight"),
    release_year: 2016,
    rating: 7.4,
    overview:
      "Three chapters in the life of a young Black man in Miami learning to name his own tenderness.",
    mood_tags: ["melancholy", "romantic"],
  },
  {
    id: 10,
    title: "Manchester by the Sea",
    genre: "Drama",
    poster_url: poster("vibe-manchester"),
    release_year: 2016,
    rating: 7.8,
    overview:
      "A withdrawn handyman returns to his hometown as guardian of his nephew, and to grief he never left.",
    mood_tags: ["melancholy"],
  },
  {
    id: 11,
    title: "Lost in Translation",
    genre: "Romance",
    poster_url: poster("vibe-lostintranslation"),
    release_year: 2003,
    rating: 7.7,
    overview:
      "Two insomniac Americans drift through Tokyo nights and form an unlikely, fragile connection.",
    mood_tags: ["melancholy", "romantic", "cozy"],
  },
  {
    id: 12,
    title: "Grave of the Fireflies",
    genre: "Animation",
    poster_url: poster("vibe-fireflies"),
    release_year: 1988,
    rating: 8.5,
    overview:
      "A brother and sister struggle to survive in the final months of the war in Japan.",
    mood_tags: ["melancholy"],
  },
  {
    id: 13,
    title: "Inception",
    genre: "Sci-Fi",
    poster_url: poster("vibe-inception"),
    release_year: 2010,
    rating: 8.8,
    overview:
      "A thief who steals secrets from dreams accepts one last job: planting an idea inside a mind.",
    mood_tags: ["mindbending", "thrilling"],
  },
  {
    id: 14,
    title: "Arrival",
    genre: "Sci-Fi",
    poster_url: poster("vibe-arrival"),
    release_year: 2016,
    rating: 7.9,
    overview:
      "A linguist decodes an alien language and discovers time itself is not what she assumed.",
    mood_tags: ["mindbending", "melancholy"],
  },
  {
    id: 15,
    title: "Everything Everywhere All at Once",
    genre: "Sci-Fi",
    poster_url: poster("vibe-eeaao"),
    release_year: 2022,
    rating: 7.8,
    overview:
      "A laundromat owner leaps across parallel lives to save the multiverse and her own family.",
    mood_tags: ["mindbending", "energy"],
  },
  {
    id: 16,
    title: "Interstellar",
    genre: "Sci-Fi",
    poster_url: poster("vibe-interstellar"),
    release_year: 2014,
    rating: 8.7,
    overview:
      "A pilot leaves his children behind to find humanity a new home beyond a dying Earth.",
    mood_tags: ["mindbending", "melancholy"],
  },
  {
    id: 17,
    title: "Eternal Sunshine of the Spotless Mind",
    genre: "Romance",
    poster_url: poster("vibe-eternalsunshine"),
    release_year: 2004,
    rating: 8.3,
    overview:
      "Two ex-lovers erase each other from memory, then fight to keep what is left of it.",
    mood_tags: ["romantic", "melancholy", "mindbending"],
  },
  {
    id: 18,
    title: "Before Sunrise",
    genre: "Romance",
    poster_url: poster("vibe-beforesunrise"),
    release_year: 1995,
    rating: 8.1,
    overview:
      "Two strangers meet on a train and spend one night walking Vienna, talking about everything.",
    mood_tags: ["romantic", "cozy"],
  },
  {
    id: 19,
    title: "In the Mood for Love",
    genre: "Romance",
    poster_url: poster("vibe-moodforlove"),
    release_year: 2000,
    rating: 8.1,
    overview:
      "Two neighbours in 1960s Hong Kong grow close as they realise their spouses are having an affair.",
    mood_tags: ["romantic", "melancholy"],
  },
  {
    id: 20,
    title: "Se7en",
    genre: "Crime",
    poster_url: poster("vibe-seven"),
    release_year: 1995,
    rating: 8.6,
    overview:
      "Two detectives hunt a killer staging murders around the seven deadly sins in an endless rain.",
    mood_tags: ["thrilling"],
  },
  {
    id: 21,
    title: "Parasite",
    genre: "Thriller",
    poster_url: poster("vibe-parasite"),
    release_year: 2019,
    rating: 8.5,
    overview:
      "A struggling family infiltrates a wealthy household, until the basement gives up its secret.",
    mood_tags: ["thrilling", "mindbending"],
  },
  {
    id: 22,
    title: "Get Out",
    genre: "Horror",
    poster_url: poster("vibe-getout"),
    release_year: 2017,
    rating: 7.7,
    overview:
      "A weekend with his girlfriend's family turns into a nightmare a young photographer must outrun.",
    mood_tags: ["thrilling", "mindbending"],
  },
  {
    id: 23,
    title: "The Silence of the Lambs",
    genre: "Horror",
    poster_url: poster("vibe-lambs"),
    release_year: 1991,
    rating: 8.6,
    overview:
      "A young FBI trainee bargains with an imprisoned cannibal to catch a serial killer still at large.",
    mood_tags: ["thrilling"],
  },
  {
    id: 24,
    title: "The Departed",
    genre: "Crime",
    poster_url: poster("vibe-departed"),
    release_year: 2006,
    rating: 8.5,
    overview:
      "An undercover cop and a mole inside the police race to expose each other first.",
    mood_tags: ["thrilling", "energy"],
  },
  {
    id: 25,
    title: "Free Solo",
    genre: "Documentary",
    poster_url: poster("vibe-freesolo"),
    release_year: 2018,
    rating: 8.1,
    overview:
      "Alex Honnold attempts to climb El Capitan with no rope, and no margin for a single mistake.",
    mood_tags: ["energy", "thrilling"],
  },
  {
    id: 26,
    title: "Jiro Dreams of Sushi",
    genre: "Documentary",
    poster_url: poster("vibe-jiro"),
    release_year: 2011,
    rating: 7.9,
    overview:
      "An 85-year-old sushi master pursues perfection in a ten-seat restaurant beneath a Tokyo station.",
    mood_tags: ["cozy", "melancholy"],
  },
  {
    id: 27,
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    poster_url: poster("vibe-budapest"),
    release_year: 2014,
    rating: 8.1,
    overview:
      "A legendary concierge and his lobby boy chase a stolen painting across a vanishing Europe.",
    mood_tags: ["cozy", "energy"],
  },
  {
    id: 28,
    title: "Little Miss Sunshine",
    genre: "Comedy",
    poster_url: poster("vibe-sunshine"),
    release_year: 2006,
    rating: 7.8,
    overview:
      "A gloriously dysfunctional family drives a failing van cross-country to a children's pageant.",
    mood_tags: ["cozy", "romantic"],
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

export const GENRES = Array.from(new Set(MOVIE_DB.map((m) => m.genre))).sort();

function resolveMoods(input: string): MoodId[] {
  const text = input.toLowerCase();
  const direct = MOODS.find((m) => m.id === text);
  if (direct) return [direct.id];
  return MOODS.filter((m) => m.keywords.some((k) => text.includes(k))).map((m) => m.id);
}

const byRating = (a: Movie, b: Movie) => b.rating - a.rating;

export async function fetchMovies(queryOrMoodOrGenre: string): Promise<Movie[]> {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const query = queryOrMoodOrGenre.trim();
  if (!query) return [];
  const text = query.toLowerCase();

  // 1. Exact genre match (custom genre pill or typed genre)
  const genreMatches = MOVIE_DB.filter((m) => m.genre.toLowerCase() === text);
  if (genreMatches.length > 0) return genreMatches.sort(byRating);

  // 2. Mood match (mood card id or natural language keywords)
  const moods = resolveMoods(text);
  if (moods.length > 0) {
    return MOVIE_DB.filter((movie) =>
      movie.mood_tags.some((tag) => moods.includes(tag as MoodId)),
    ).sort(byRating);
  }

  // 3. Free-text fallback across title, genre and overview
  return MOVIE_DB.filter(
    (movie) =>
      movie.title.toLowerCase().includes(text) ||
      movie.genre.toLowerCase().includes(text) ||
      movie.overview.toLowerCase().includes(text),
  ).sort(byRating);
}

/** @deprecated use fetchMovies */
export const fetchMoviesByVibe = fetchMovies;
