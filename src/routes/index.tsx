import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2, Search, Sparkles, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { fetchMovies, GENRES, MOODS, type Movie } from "@/lib/api";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VibeCheck — Find Movies by Mood or Genre" },
      {
        name: "description",
        content:
          "Describe your vibe or pick any genre and VibeCheck recommends acclaimed movies that match — cozy, high energy, melancholy, mind-bending, romantic or dark and thrilling.",
      },
      { property: "og:title", content: "VibeCheck — Find Movies by Mood or Genre" },
      {
        property: "og:description",
        content: "Mood-first movie discovery with custom genre filters. Pick a vibe, get the watchlist.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Movie[] | null>(null);

  async function runSearch(vibe: string) {
    if (!vibe.trim()) return;
    setLoading(true);
    setResults(null);
    const movies = await fetchMovies(vibe);
    setResults(movies);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-background bg-hero-glow font-sans">
      <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-16 sm:pt-24">
        <header className="text-center">
          <h1 className="text-glow font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            🎬 VibeCheck
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Find movies based on your mood or search any custom genre.
          </p>
        </header>

        <form
          className="mx-auto mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            setSelectedMood(null);
            setSelectedGenre(null);
            runSearch(query);
          }}
        >
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Describe your vibe or current mood..."
              aria-label="Describe your vibe or current mood"
              className="h-13 rounded-2xl border-border/70 bg-card/70 pl-11 text-base backdrop-blur placeholder:text-muted-foreground/70 focus-visible:ring-primary"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="shadow-glow h-13 rounded-2xl px-7 text-base font-semibold transition-transform hover:scale-[1.02]"
          >
            <Sparkles className="size-4" />
            Find Movies
          </Button>
        </form>

        <section aria-label="Genres" className="mx-auto mt-8 w-full max-w-3xl">
          <h2 className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Or pick a genre
          </h2>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {GENRES.map((genre) => {
              const active = selectedGenre === genre;
              return (
                <button
                  key={genre}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setSelectedGenre(genre);
                    setSelectedMood(null);
                    setQuery("");
                    runSearch(genre);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                    active
                      ? "shadow-neon border-neon/60 text-foreground"
                      : "border-border/70 bg-card/50 text-muted-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {genre}
                </button>
              );
            })}
          </div>
        </section>

        <section aria-label="Moods" className="mt-14">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MOODS.map((mood) => {
              const active = selectedMood === mood.id;
              return (
                <button
                  key={mood.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setSelectedMood(mood.id);
                    setSelectedGenre(null);
                    setQuery("");
                    runSearch(mood.id);
                  }}
                  className={`bg-card-gradient group relative overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                    active
                      ? "shadow-neon border-neon/60"
                      : "border-border/70 hover:border-primary/50"
                  }`}
                >
                  <span className="block text-3xl">{mood.emoji}</span>
                  <span className="mt-4 block font-display text-lg font-semibold text-foreground">
                    {mood.label}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {active ? "Selected vibe" : "Tap to feel it out"}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section aria-live="polite" className="mt-16">
          {loading && (
            <div className="flex flex-col items-center justify-center gap-4 py-16">
              <Loader2 className="size-10 animate-spin text-primary" />
              <p className="font-display text-lg text-muted-foreground">
                Scanning cinematic vibes...
              </p>
            </div>
          )}

          {!loading && results && results.length === 0 && (
            <p className="py-12 text-center text-muted-foreground">
              No matches for that vibe — try another mood card, a genre or different words.
            </p>
          )}

          {!loading && results && results.length > 0 && (
            <>
              <h2 className="font-display text-2xl font-semibold text-foreground">
                {results.length} movies for your vibe
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((movie) => (
                  <article
                    key={movie.id}
                    className="bg-card-gradient group overflow-hidden rounded-3xl border border-border/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
                  >
                    <div className="relative aspect-2/3 overflow-hidden">
                      <img
                        src={movie.poster_url}
                        alt={`${movie.title} poster`}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <Badge className="absolute right-3 top-3 gap-1 rounded-full bg-background/80 text-foreground backdrop-blur">
                        <Star className="size-3 fill-current text-primary" />
                        {movie.rating.toFixed(1)}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="absolute left-3 top-3 rounded-full backdrop-blur"
                      >
                        {movie.genre}
                      </Badge>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-semibold leading-tight text-foreground">
                        {movie.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{movie.release_year}</p>
                      <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                        {movie.overview}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {movie.mood_tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="rounded-full text-xs capitalize"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
