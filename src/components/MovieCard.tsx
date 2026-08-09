import { Clock, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { ScoredMovie } from "@/lib/api";

export function MovieCard({
  movie,
  index,
  onSelect,
}: {
  movie: ScoredMovie;
  index: number;
  onSelect: (movie: ScoredMovie) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(movie)}
      style={{ animationDelay: `${Math.min(index, 12) * 60}ms` }}
      className="glass-panel group animate-card-rise overflow-hidden rounded-3xl text-left transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative aspect-2/3 overflow-hidden">
        <img
          src={movie.poster_url}
          alt={`${movie.title} poster`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/25 to-transparent" />
        <span className="shadow-neon absolute left-3 top-3 rounded-full border border-neon/50 bg-background/70 px-2.5 py-1 text-xs font-semibold text-neon backdrop-blur-md">
          {movie.match}% Vibe Match
        </span>
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/70 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur-md">
          <Star className="size-3 fill-current text-primary" />
          {movie.rating.toFixed(1)}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-semibold leading-tight text-foreground">
          {movie.title}
        </h3>
        <p className="mt-1.5 flex items-center gap-2 text-xs text-muted-foreground">
          <span>{movie.release_year}</span>
          <span aria-hidden>•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3" />
            {movie.runtime}m
          </span>
        </p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {movie.overview}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {movie.genres.slice(0, 3).map((genre) => (
            <Badge key={genre} variant="secondary" className="rounded-full text-[11px]">
              {genre}
            </Badge>
          ))}
        </div>
      </div>
    </button>
  );
}
