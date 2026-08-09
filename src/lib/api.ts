export type Movie = {
  id: number;
  title: string;
  genre: string;
  genres: string[];
  poster_url: string;
  release_year: number;
  rating: number;
  runtime: number;
  overview: string;
  mood_tags: string[];
  keywords: string[];
  platforms: string[];
};

const poster = (seed: string) => `https://picsum.photos/seed/${seed}/400/600`;

type Seed = Omit<Movie, "id" | "poster_url" | "genre"> & { slug: string; genres: string[] };

const SEEDS: Seed[] = [
  {
    slug: "spirited-away",
    title: "Spirited Away",
    genres: ["Anime", "Fantasy", "Animation"],
    release_year: 2001,
    rating: 8.6,
    runtime: 125,
    overview:
      "A young girl wanders into a spirit world of bathhouses and gods, and must work to free her parents.",
    mood_tags: ["cozy", "mindbending"],
    keywords: ["magic", "spirits", "coming of age", "ghibli", "wonder"],
    platforms: ["Netflix", "Apple TV"],
  },
  {
    slug: "totoro",
    title: "My Neighbor Totoro",
    genres: ["Anime", "Family", "Animation"],
    release_year: 1988,
    rating: 8.1,
    runtime: 86,
    overview:
      "Two sisters move to the countryside and befriend a gentle forest spirit during a tender summer.",
    mood_tags: ["cozy"],
    keywords: ["childhood", "nature", "gentle", "ghibli", "summer"],
    platforms: ["Netflix", "Prime Video"],
  },
  {
    slug: "amelie",
    title: "Amélie",
    genres: ["Romance", "Comedy", "Indie"],
    release_year: 2001,
    rating: 8.3,
    runtime: 122,
    overview:
      "A whimsical Parisian waitress quietly engineers small miracles in the lives of everyone around her.",
    mood_tags: ["cozy", "romantic"],
    keywords: ["paris", "whimsical", "quirky", "feel good", "laugh"],
    platforms: ["Prime Video", "Apple TV"],
  },
  {
    slug: "chef",
    title: "Chef",
    genres: ["Comedy", "Drama"],
    release_year: 2014,
    rating: 7.3,
    runtime: 114,
    overview:
      "A burned-out chef rebuilds his life, and his relationship with his son, from a food truck kitchen.",
    mood_tags: ["cozy"],
    keywords: ["food", "family", "road trip", "feel good", "laugh"],
    platforms: ["Netflix"],
  },
  {
    slug: "fury-road",
    title: "Mad Max: Fury Road",
    genres: ["Action", "Sci-Fi", "Adventure"],
    release_year: 2015,
    rating: 8.1,
    runtime: 120,
    overview:
      "In a scorched wasteland, a drifter and a rebel commander flee a warlord in one relentless chase.",
    mood_tags: ["energy", "thrilling"],
    keywords: ["chase", "desert", "post-apocalyptic", "loud", "adrenaline"],
    platforms: ["Netflix", "Prime Video"],
  },
  {
    slug: "whiplash",
    title: "Whiplash",
    genres: ["Drama", "Music"],
    release_year: 2014,
    rating: 8.5,
    runtime: 106,
    overview:
      "An ambitious young drummer collides with a conductor whose methods border on cruelty.",
    mood_tags: ["energy", "thrilling"],
    keywords: ["jazz", "obsession", "intense", "ambition", "music"],
    platforms: ["Prime Video", "Apple TV"],
  },
  {
    slug: "baby-driver",
    title: "Baby Driver",
    genres: ["Action", "Crime", "Music"],
    release_year: 2017,
    rating: 7.5,
    runtime: 113,
    overview:
      "A getaway driver who scores every heist to his playlist tries to leave the life behind.",
    mood_tags: ["energy"],
    keywords: ["heist", "cars", "playlist", "fast", "stylish"],
    platforms: ["Netflix", "Apple TV"],
  },
  {
    slug: "spiderverse",
    title: "Spider-Man: Into the Spider-Verse",
    genres: ["Animation", "Action", "Fantasy"],
    release_year: 2018,
    rating: 8.4,
    runtime: 117,
    overview:
      "Miles Morales meets heroes from other dimensions and learns what it takes to wear the mask.",
    mood_tags: ["energy", "mindbending"],
    keywords: ["superhero", "multiverse", "comic", "colorful", "space"],
    platforms: ["Netflix", "Prime Video"],
  },
  {
    slug: "moonlight",
    title: "Moonlight",
    genres: ["Drama", "Indie"],
    release_year: 2016,
    rating: 7.4,
    runtime: 111,
    overview:
      "Three chapters in the life of a young Black man in Miami learning to name his own tenderness.",
    mood_tags: ["melancholy", "romantic"],
    keywords: ["identity", "coming of age", "quiet", "tender", "miami"],
    platforms: ["Netflix", "Apple TV"],
  },
  {
    slug: "manchester",
    title: "Manchester by the Sea",
    genres: ["Drama", "Indie"],
    release_year: 2016,
    rating: 7.8,
    runtime: 137,
    overview:
      "A withdrawn handyman returns to his hometown as guardian of his nephew, and to grief he never left.",
    mood_tags: ["melancholy"],
    keywords: ["grief", "sad", "family", "winter", "cry"],
    platforms: ["Prime Video"],
  },
  {
    slug: "lost-in-translation",
    title: "Lost in Translation",
    genres: ["Romance", "Drama", "Indie"],
    release_year: 2003,
    rating: 7.7,
    runtime: 102,
    overview:
      "Two insomniac Americans drift through Tokyo nights and form an unlikely, fragile connection.",
    mood_tags: ["melancholy", "romantic", "cozy"],
    keywords: ["tokyo", "lonely", "neon", "quiet", "connection"],
    platforms: ["Netflix", "Apple TV"],
  },
  {
    slug: "fireflies",
    title: "Grave of the Fireflies",
    genres: ["Anime", "Drama", "Animation"],
    release_year: 1988,
    rating: 8.5,
    runtime: 89,
    overview: "A brother and sister struggle to survive in the final months of the war in Japan.",
    mood_tags: ["melancholy"],
    keywords: ["war", "sad", "cry", "siblings", "ghibli"],
    platforms: ["Apple TV"],
  },
  {
    slug: "inception",
    title: "Inception",
    genres: ["Sci-Fi", "Action", "Psychological Thriller"],
    release_year: 2010,
    rating: 8.8,
    runtime: 148,
    overview:
      "A thief who steals secrets from dreams accepts one last job: planting an idea inside a mind.",
    mood_tags: ["mindbending", "thrilling"],
    keywords: ["dreams", "mind", "heist", "puzzle", "trippy"],
    platforms: ["Netflix", "Prime Video"],
  },
  {
    slug: "arrival",
    title: "Arrival",
    genres: ["Sci-Fi", "Drama"],
    release_year: 2016,
    rating: 7.9,
    runtime: 116,
    overview:
      "A linguist decodes an alien language and discovers time itself is not what she assumed.",
    mood_tags: ["mindbending", "melancholy"],
    keywords: ["aliens", "space", "language", "time", "mind"],
    platforms: ["Prime Video", "Apple TV"],
  },
  {
    slug: "eeaao",
    title: "Everything Everywhere All at Once",
    genres: ["Sci-Fi", "Comedy", "Action"],
    release_year: 2022,
    rating: 7.8,
    runtime: 139,
    overview:
      "A laundromat owner leaps across parallel lives to save the multiverse and her own family.",
    mood_tags: ["mindbending", "energy"],
    keywords: ["multiverse", "chaotic", "family", "laugh", "mind"],
    platforms: ["Netflix", "Prime Video"],
  },
  {
    slug: "interstellar",
    title: "Interstellar",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    release_year: 2014,
    rating: 8.7,
    runtime: 169,
    overview: "A pilot leaves his children behind to find humanity a new home beyond a dying Earth.",
    mood_tags: ["mindbending", "melancholy"],
    keywords: ["space", "black hole", "time", "epic", "father"],
    platforms: ["Prime Video", "Apple TV"],
  },
  {
    slug: "eternal-sunshine",
    title: "Eternal Sunshine of the Spotless Mind",
    genres: ["Romance", "Sci-Fi", "Indie"],
    release_year: 2004,
    rating: 8.3,
    runtime: 108,
    overview: "Two ex-lovers erase each other from memory, then fight to keep what is left of it.",
    mood_tags: ["romantic", "melancholy", "mindbending"],
    keywords: ["memory", "breakup", "mind", "love", "surreal"],
    platforms: ["Netflix", "Apple TV"],
  },
  {
    slug: "before-sunrise",
    title: "Before Sunrise",
    genres: ["Romance", "Indie", "Drama"],
    release_year: 1995,
    rating: 8.1,
    runtime: 101,
    overview:
      "Two strangers meet on a train and spend one night walking Vienna, talking about everything.",
    mood_tags: ["romantic", "cozy"],
    keywords: ["talky", "vienna", "one night", "love", "walking"],
    platforms: ["Prime Video"],
  },
  {
    slug: "mood-for-love",
    title: "In the Mood for Love",
    genres: ["Romance", "Drama"],
    release_year: 2000,
    rating: 8.1,
    runtime: 98,
    overview:
      "Two neighbours in 1960s Hong Kong grow close as they realise their spouses are having an affair.",
    mood_tags: ["romantic", "melancholy"],
    keywords: ["longing", "hong kong", "slow", "beautiful", "quiet"],
    platforms: ["Apple TV"],
  },
  {
    slug: "se7en",
    title: "Se7en",
    genres: ["Noir", "Crime", "Psychological Thriller"],
    release_year: 1995,
    rating: 8.6,
    runtime: 127,
    overview:
      "Two detectives hunt a killer staging murders around the seven deadly sins in an endless rain.",
    mood_tags: ["thrilling"],
    keywords: ["dark", "serial killer", "rain", "detective", "grim"],
    platforms: ["Netflix", "Prime Video"],
  },
  {
    slug: "parasite",
    title: "Parasite",
    genres: ["Psychological Thriller", "Drama"],
    release_year: 2019,
    rating: 8.5,
    runtime: 132,
    overview:
      "A struggling family infiltrates a wealthy household, until the basement gives up its secret.",
    mood_tags: ["thrilling", "mindbending"],
    keywords: ["class", "twist", "dark", "korea", "tense"],
    platforms: ["Netflix", "Apple TV"],
  },
  {
    slug: "get-out",
    title: "Get Out",
    genres: ["Horror", "Psychological Thriller"],
    release_year: 2017,
    rating: 7.7,
    runtime: 104,
    overview:
      "A weekend with his girlfriend's family turns into a nightmare a young photographer must outrun.",
    mood_tags: ["thrilling", "mindbending"],
    keywords: ["scary", "dark", "satire", "twist", "race"],
    platforms: ["Netflix", "Prime Video"],
  },
  {
    slug: "lambs",
    title: "The Silence of the Lambs",
    genres: ["Horror", "Crime", "Psychological Thriller"],
    release_year: 1991,
    rating: 8.6,
    runtime: 118,
    overview:
      "A young FBI trainee bargains with an imprisoned cannibal to catch a serial killer still at large.",
    mood_tags: ["thrilling"],
    keywords: ["fbi", "dark", "scary", "cat and mouse", "iconic"],
    platforms: ["Prime Video", "Apple TV"],
  },
  {
    slug: "departed",
    title: "The Departed",
    genres: ["Crime", "Noir", "Action"],
    release_year: 2006,
    rating: 8.5,
    runtime: 151,
    overview: "An undercover cop and a mole inside the police race to expose each other first.",
    mood_tags: ["thrilling", "energy"],
    keywords: ["mob", "boston", "undercover", "dark", "tense"],
    platforms: ["Netflix"],
  },
  {
    slug: "free-solo",
    title: "Free Solo",
    genres: ["Documentary", "Adventure"],
    release_year: 2018,
    rating: 8.1,
    runtime: 100,
    overview:
      "Alex Honnold attempts to climb El Capitan with no rope, and no margin for a single mistake.",
    mood_tags: ["energy", "thrilling"],
    keywords: ["climbing", "real life", "adrenaline", "nature", "risk"],
    platforms: ["Prime Video"],
  },
  {
    slug: "jiro",
    title: "Jiro Dreams of Sushi",
    genres: ["Documentary"],
    release_year: 2011,
    rating: 7.9,
    runtime: 81,
    overview:
      "An 85-year-old sushi master pursues perfection in a ten-seat restaurant beneath a Tokyo station.",
    mood_tags: ["cozy", "melancholy"],
    keywords: ["food", "tokyo", "craft", "real life", "quiet"],
    platforms: ["Apple TV"],
  },
  {
    slug: "budapest",
    title: "The Grand Budapest Hotel",
    genres: ["Comedy", "Indie", "Adventure"],
    release_year: 2014,
    rating: 8.1,
    runtime: 99,
    overview:
      "A legendary concierge and his lobby boy chase a stolen painting across a vanishing Europe.",
    mood_tags: ["cozy", "energy"],
    keywords: ["laugh", "symmetry", "europe", "caper", "stylish"],
    platforms: ["Netflix", "Apple TV"],
  },
  {
    slug: "little-miss-sunshine",
    title: "Little Miss Sunshine",
    genres: ["Comedy", "Indie", "Drama"],
    release_year: 2006,
    rating: 7.8,
    runtime: 101,
    overview:
      "A gloriously dysfunctional family drives a failing van cross-country to a children's pageant.",
    mood_tags: ["cozy", "romantic"],
    keywords: ["family", "road trip", "laugh", "feel good", "quirky"],
    platforms: ["Netflix", "Prime Video"],
  },
  {
    slug: "blade-runner-2049",
    title: "Blade Runner 2049",
    genres: ["Cyberpunk", "Sci-Fi", "Noir"],
    release_year: 2017,
    rating: 8.0,
    runtime: 164,
    overview:
      "A replicant blade runner uncovers a buried secret that could unravel what is left of society.",
    mood_tags: ["mindbending", "melancholy"],
    keywords: ["neon", "future", "dark", "rain", "android", "space"],
    platforms: ["Netflix", "Apple TV"],
  },
  {
    slug: "akira",
    title: "Akira",
    genres: ["Cyberpunk", "Anime", "Sci-Fi"],
    release_year: 1988,
    rating: 8.0,
    runtime: 124,
    overview:
      "In Neo-Tokyo, a biker gang member gains catastrophic psychic power the military cannot contain.",
    mood_tags: ["mindbending", "energy"],
    keywords: ["neo-tokyo", "psychic", "neon", "dystopia", "mind"],
    platforms: ["Prime Video"],
  },
  {
    slug: "ghost-in-the-shell",
    title: "Ghost in the Shell",
    genres: ["Cyberpunk", "Anime", "Sci-Fi"],
    release_year: 1995,
    rating: 8.0,
    runtime: 83,
    overview:
      "A cyborg operative hunts a hacker who can rewrite minds, and questions what her own self is.",
    mood_tags: ["mindbending", "thrilling"],
    keywords: ["hacker", "cyborg", "identity", "neon", "mind"],
    platforms: ["Netflix", "Apple TV"],
  },
  {
    slug: "the-matrix",
    title: "The Matrix",
    genres: ["Sci-Fi", "Action", "Cyberpunk"],
    release_year: 1999,
    rating: 8.7,
    runtime: 136,
    overview:
      "A hacker learns his world is a simulation and joins a rebellion against the machines running it.",
    mood_tags: ["mindbending", "energy"],
    keywords: ["simulation", "kung fu", "hacker", "mind", "dystopia"],
    platforms: ["Netflix", "Prime Video"],
  },
  {
    slug: "chinatown",
    title: "Chinatown",
    genres: ["Noir", "Crime", "Psychological Thriller"],
    release_year: 1974,
    rating: 8.1,
    runtime: 130,
    overview:
      "A private eye chasing a routine affair case pulls a thread that unravels a city's corruption.",
    mood_tags: ["thrilling", "melancholy"],
    keywords: ["detective", "dark", "los angeles", "corruption", "classic"],
    platforms: ["Prime Video", "Apple TV"],
  },
  {
    slug: "the-third-man",
    title: "The Third Man",
    genres: ["Noir", "Crime", "Drama"],
    release_year: 1949,
    rating: 8.1,
    runtime: 104,
    overview:
      "A writer arrives in occupied Vienna to find his old friend dead, and the story full of holes.",
    mood_tags: ["thrilling", "melancholy"],
    keywords: ["vienna", "shadows", "dark", "mystery", "classic"],
    platforms: ["Apple TV"],
  },
  {
    slug: "pans-labyrinth",
    title: "Pan's Labyrinth",
    genres: ["Fantasy", "Drama", "Horror"],
    release_year: 2006,
    rating: 8.2,
    runtime: 118,
    overview:
      "A girl in fascist Spain escapes into a labyrinth of fauns and trials that demand a terrible price.",
    mood_tags: ["mindbending", "melancholy"],
    keywords: ["fairy tale", "war", "dark", "magic", "monsters"],
    platforms: ["Netflix", "Prime Video"],
  },
  {
    slug: "lotr-fellowship",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genres: ["Fantasy", "Adventure", "Action"],
    release_year: 2001,
    rating: 8.9,
    runtime: 178,
    overview:
      "A hobbit sets out with eight companions to carry a ring of terrible power across Middle-earth.",
    mood_tags: ["cozy", "energy"],
    keywords: ["epic", "quest", "magic", "friendship", "adventure"],
    platforms: ["Prime Video", "Apple TV"],
  },
  {
    slug: "spider-hero",
    title: "The Dark Knight",
    genres: ["Action", "Crime", "Psychological Thriller"],
    release_year: 2008,
    rating: 9.0,
    runtime: 152,
    overview:
      "Batman's war on crime meets an anarchist who wants nothing but to watch the rules burn.",
    mood_tags: ["thrilling", "energy"],
    keywords: ["superhero", "joker", "dark", "gotham", "chaos"],
    platforms: ["Netflix", "Prime Video"],
  },
  {
    slug: "hereditary",
    title: "Hereditary",
    genres: ["Horror", "Psychological Thriller", "Indie"],
    release_year: 2018,
    rating: 7.3,
    runtime: 127,
    overview:
      "After a family matriarch dies, her daughter's household starts unravelling in unspeakable ways.",
    mood_tags: ["thrilling", "melancholy"],
    keywords: ["scary", "grief", "cult", "dread", "dark"],
    platforms: ["Prime Video", "Apple TV"],
  },
  {
    slug: "the-shining",
    title: "The Shining",
    genres: ["Horror", "Psychological Thriller"],
    release_year: 1980,
    rating: 8.4,
    runtime: 146,
    overview:
      "A caretaker, his wife and son winter alone in a vast hotel that has plans of its own for them.",
    mood_tags: ["thrilling", "mindbending"],
    keywords: ["hotel", "madness", "scary", "winter", "iconic"],
    platforms: ["Netflix", "Apple TV"],
  },
  {
    slug: "the-social-network",
    title: "The Social Network",
    genres: ["Drama", "Biography"],
    release_year: 2010,
    rating: 7.8,
    runtime: 120,
    overview:
      "Facebook is built in dorm rooms and torn apart in deposition rooms, one betrayal at a time.",
    mood_tags: ["energy", "melancholy"],
    keywords: ["tech", "ambition", "startup", "talky", "betrayal"],
    platforms: ["Netflix", "Prime Video"],
  },
  {
    slug: "her",
    title: "Her",
    genres: ["Romance", "Sci-Fi", "Indie"],
    release_year: 2013,
    rating: 8.0,
    runtime: 126,
    overview:
      "A lonely writer falls in love with an AI companion who keeps growing beyond what he can hold.",
    mood_tags: ["romantic", "melancholy", "mindbending"],
    keywords: ["ai", "lonely", "future", "love", "tech"],
    platforms: ["Netflix", "Apple TV"],
  },
  {
    slug: "coco",
    title: "Coco",
    genres: ["Animation", "Family", "Fantasy"],
    release_year: 2017,
    rating: 8.4,
    runtime: 105,
    overview:
      "A boy who dreams of music crosses into the Land of the Dead to find his family's true story.",
    mood_tags: ["cozy", "melancholy"],
    keywords: ["music", "family", "colorful", "mexico", "feel good"],
    platforms: ["Netflix", "Apple TV"],
  },
];

export const MOVIE_DB: Movie[] = SEEDS.map((seed, index) => ({
  id: index + 1,
  title: seed.title,
  genre: seed.genres[0]!,
  genres: seed.genres,
  poster_url: poster(`cinevibe-${seed.slug}`),
  release_year: seed.release_year,
  rating: seed.rating,
  runtime: seed.runtime,
  overview: seed.overview,
  mood_tags: seed.mood_tags,
  keywords: seed.keywords,
  platforms: seed.platforms,
}));

export const MOODS = [
  { id: "cozy", emoji: "☕️", label: "Cozy & Calm", keywords: ["cozy", "calm", "warm", "comfort", "chill", "relax", "quiet", "soft", "tea", "rain", "feel good"] },
  { id: "energy", emoji: "⚡️", label: "High Energy", keywords: ["energy", "energetic", "hype", "pumped", "action", "fast", "loud", "party", "adrenaline"] },
  { id: "melancholy", emoji: "🌧️", label: "Melancholy & Deep", keywords: ["melancholy", "sad", "deep", "lonely", "grief", "reflective", "blue", "cry", "emotional"] },
  { id: "mindbending", emoji: "🚀", label: "Mind-Bending", keywords: ["mind", "mindbending", "weird", "trippy", "sci-fi", "scifi", "surreal", "confusing", "space", "think"] },
  { id: "romantic", emoji: "💖", label: "Romantic Vibes", keywords: ["romantic", "romance", "love", "date", "crush", "sweet", "heart"] },
  { id: "thrilling", emoji: "🕵️", label: "Dark & Thrilling", keywords: ["dark", "thrilling", "thriller", "tense", "mystery", "crime", "suspense", "noir", "scary", "horror"] },
] as const;

export type MoodId = (typeof MOODS)[number]["id"];

export const GENRES = Array.from(new Set(MOVIE_DB.flatMap((m) => m.genres))).sort();

export const SURPRISE_VIBES = [
  "space",
  "neon cyberpunk",
  "mind",
  "laugh",
  "dark",
  "romance",
  "anime",
  "noir",
  "adrenaline",
  "cry",
];

export type ScoredMovie = Movie & { match: number };

function scoreMovie(movie: Movie, terms: string[]): number {
  let score = 0;
  for (const term of terms) {
    if (movie.title.toLowerCase().includes(term)) score += 6;
    if (movie.genres.some((g) => g.toLowerCase().includes(term))) score += 5;
    if (movie.mood_tags.some((t) => t.includes(term))) score += 4;
    if (movie.keywords.some((k) => k.includes(term) || term.includes(k))) score += 3;
    if (movie.overview.toLowerCase().includes(term)) score += 2;
    if (String(movie.release_year).includes(term)) score += 2;
    for (const mood of MOODS) {
      if (mood.keywords.some((k) => k.includes(term) || term.includes(k))) {
        if (movie.mood_tags.includes(mood.id)) score += 3;
      }
    }
  }
  return score;
}

function withMatch(movies: Movie[], base: number): ScoredMovie[] {
  const top = Math.max(...movies.map((m) => m.rating), 1);
  return movies.map((movie) => ({
    ...movie,
    match: Math.min(99, Math.round(base + (movie.rating / top) * 12)),
  }));
}

export function trendingMovies(limit = 12): ScoredMovie[] {
  const picks = [...MOVIE_DB].sort((a, b) => b.rating - a.rating).slice(0, limit);
  return withMatch(picks, 80);
}

export type SearchResult = {
  movies: ScoredMovie[];
  fallback: boolean;
  query: string;
};

export async function searchMovies(rawQuery: string): Promise<SearchResult> {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const query = rawQuery.trim();
  if (!query) return { movies: trendingMovies(), fallback: true, query };

  const terms = query
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 1);

  const scored = MOVIE_DB.map((movie) => ({ movie, score: scoreMovie(movie, terms) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.movie.rating - a.movie.rating);

  if (scored.length === 0) {
    return { movies: trendingMovies(), fallback: true, query };
  }

  const maxScore = scored[0]!.score;
  const movies = scored.map(({ movie, score }) => ({
    ...movie,
    match: Math.min(99, Math.max(62, Math.round(70 + (score / maxScore) * 29))),
  }));

  return { movies, fallback: false, query };
}

/** @deprecated use searchMovies */
export async function fetchMovies(query: string): Promise<Movie[]> {
  return (await searchMovies(query)).movies;
}
