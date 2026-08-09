import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Film, Search, Shuffle, Sparkles, TrendingUp } from "lucide-react";

import { MovieCard } from "@/components/MovieCard";
import { MovieDetailDialog } from "@/components/MovieDetailDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  GENRES,
  MOODS,
  SURPRISE_VIBES,
  searchMovies,
  trendingMovies,
  type ScoredMovie,
} from "@/lib/api";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CineVibe AI — Cinematic Movie Discovery by Vibe" },
      {
        name: "description",
        content:
          "CineVibe AI reads your mood and surfaces acclaimed films across sci-fi, noir, anime, horror, romance and more — with vibe match scores and streaming picks.",
      },
      { property: "og:title", content: "CineVibe AI — Cinematic Movie Discovery by Vibe" },
      {
        property: "og:description",
        content:
          "Describe a mood, a keyword, or any genre. CineVibe AI returns a curated, vibe-matched watchlist.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const LOADING_STEPS = [
  "Synthesizing mood parameters...",
  "Scanning cinematic universe...",
  "Ranking vibe matches...",
];

function Index() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [results, setResults] = useState<ScoredMovie[]>(() => trendingMovies());
  const [fallback, setFallback] = useState(true);
  const [heading, setHeading] = useState("Trending in the cinematic universe");
  const [selected, setSelected] = useState<ScoredMovie | null>(null);

  useEffect(() => {
    if (!loading) return;
    setStep(0);
    const timer = setInterval(() => setStep((s) => (s + 1) % LOADING_STEPS.length), 450);
    return () => clearInterval(timer);
  }, [loading]);

  async function runSearch(term: string, filter: string | null) {
    setActiveFilter(filter);
    setLoading(true);
    const result = await searchMovies(term);
    setResults(result.movies);
    setFallback(result.fallback);
    setHeading(
      result.fallback
        ? "No exact match — here's what's trending instead"
        : `${result.movies.length} films tuned to "${result.query}"`,
    );
    setLoading(false);
  }

  function surpriseMe() {
    const vibe = SURPRISE_VIBES[Math.floor(Math.random() * SURPRISE_VIBES.length)]!;
    setQuery(vibe);
    runSearch(vibe, null);
  }

  return (
    <div className="bg-ambient min-h-screen bg-background font-sans">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-3 px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="shadow-glow grid size-9 place-items-center rounded-2xl bg-primary/15 text-primary">
              <Film className="size-4.5" />
            </span>
            <span className="text-glow font-display text-lg font-bold tracking-tight text-foreground">
              CineVibe AI
            </span>
          </div>

          <span className="glass-panel ml-auto inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium text-muted-foreground sm:text-xs">
            <span className="relative grid size-2 place-items-center">
              <span className="animate-pulse-ring absolute size-2 rounded-full bg-neon" />
              <span className="size-1.5 rounded-full bg-neon" />
            </span>
            AI Cinematic Engine Active
          </span>

          <Button
            variant="outline"
            onClick={surpriseMe}
            disabled={loading}
            className="rounded-full border-primary/40 bg-card/40 backdrop-blur transition-transform hover:scale-105 hover:border-primary"
          >
            <Shuffle className="size-4" />
            Surprise Me
          </Button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 pb-24 pt-12 sm:px-6 sm:pt-20">
        <section className="text-center">
          <h1 className="text-glow mx-auto max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Watch what matches
            <span className="block text-primary">your exact vibe.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Describe a feeling, a keyword, or any genre — the engine scores 40+ acclaimed films
            against your mood in real time.
          </p>

          <form
            className="group mx-auto mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              runSearch(query, null);
            }}
          >
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Describe your vibe: rainy neon loneliness, space, laugh..."
                aria-label="Describe your vibe"
                className="glass-panel h-14 rounded-2xl pl-11 text-base transition-shadow duration-300 placeholder:text-muted-foreground/70 focus-visible:shadow-glow focus-visible:ring-primary"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="shadow-glow h-14 rounded-2xl px-8 text-base font-semibold transition-transform hover:scale-[1.03]"
            >
              <Sparkles className="size-4" />
              Find Movies
            </Button>
          </form>

          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">
            {GENRES.map((genre) => {
              const active = activeFilter === genre;
              return (
                <button
                  key={genre}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setQuery(genre);
                    runSearch(genre, genre);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 hover:scale-105 ${
                    active
                      ? "shadow-neon border-neon/60 text-foreground"
                      : "border-border/70 bg-card/40 text-muted-foreground backdrop-blur hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {genre}
                </button>
              );
            })}
          </div>
        </section>

        <section aria-label="Moods" className="mt-14">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {MOODS.map((mood) => {
              const active = activeFilter === mood.id;
              return (
                <button
                  key={mood.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setQuery(mood.label);
                    runSearch(mood.id, mood.id);
                  }}
                  className={`glass-panel group relative overflow-hidden rounded-3xl p-5 text-left transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
                    active ? "shadow-neon border-neon/60" : "hover:border-primary/50"
                  }`}
                >
                  <span className="block text-2xl sm:text-3xl">{mood.emoji}</span>
                  <span className="mt-3 block font-display text-base font-semibold text-foreground sm:text-lg">
                    {mood.label}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground sm:text-sm">
                    {active ? "Tuned in" : "Tap to feel it out"}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section aria-live="polite" className="mt-16">
          {loading ? (
            <div className="flex flex-col items-center justify-center gap-5 py-20">
              <span className="relative grid size-16 place-items-center">
                <span className="absolute size-16 animate-ping rounded-full border border-primary/40" />
                <span className="absolute size-12 animate-spin rounded-full border-2 border-transparent border-t-primary border-r-neon" />
                <Sparkles className="size-5 text-primary" />
              </span>
              <p className="font-display text-base text-muted-foreground sm:text-lg">
                {LOADING_STEPS[step]}
              </p>
            </div>
          ) : (
            <>
              <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
                {fallback && <TrendingUp className="size-5 text-neon" />}
                {heading}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {results.map((movie, index) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    index={index}
                    onSelect={setSelected}
                  />
                ))}
              </div>
            </>
          )}
        </section>
      </main>

      <MovieDetailDialog movie={selected} onOpenChange={(open) => !open && setSelected(null)} />
    </div>
  );
}
