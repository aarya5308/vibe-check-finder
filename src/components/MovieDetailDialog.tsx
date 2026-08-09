import { Clock, Heart, Star } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { ScoredMovie } from "@/lib/api";

export function MovieDetailDialog({
  movie,
  onOpenChange,
}: {
  movie: ScoredMovie | null;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={Boolean(movie)} onOpenChange={onOpenChange}>
      <DialogContent className="glass-panel max-h-[90vh] overflow-y-auto rounded-3xl border-primary/25 p-0 sm:max-w-3xl">
        {movie && (
          <div className="grid gap-0 sm:grid-cols-[minmax(0,240px)_1fr]">
            <div className="relative aspect-2/3 overflow-hidden sm:h-full">
              <img
                src={movie.poster_url}
                alt={`${movie.title} poster`}
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent sm:bg-linear-to-r" />
            </div>

            <div className="p-6 sm:p-8">
              <span className="shadow-neon inline-flex rounded-full border border-neon/50 px-2.5 py-1 text-xs font-semibold text-neon">
                {movie.match}% Vibe Match
              </span>
              <DialogTitle className="text-glow mt-4 font-display text-2xl font-bold sm:text-3xl">
                {movie.title}
              </DialogTitle>
              <p className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span>{movie.release_year}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {movie.runtime} min
                </span>
                <span className="inline-flex items-center gap-1">
                  <Star className="size-3.5 fill-current text-primary" />
                  {movie.rating.toFixed(1)}
                </span>
              </p>

              <DialogDescription className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {movie.overview}
              </DialogDescription>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {movie.genres.map((genre) => (
                  <Badge key={genre} variant="secondary" className="rounded-full text-xs">
                    {genre}
                  </Badge>
                ))}
                {movie.mood_tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full border-primary/40 text-xs capitalize text-primary"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Where to stream
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {movie.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="rounded-xl border border-border/70 bg-card/60 px-3 py-1.5 text-sm text-foreground backdrop-blur"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                onClick={() =>
                  toast.success("Added to your watchlist", {
                    description: `${movie.title} (${movie.release_year}) is queued up.`,
                  })
                }
                className="shadow-glow mt-7 h-12 w-full rounded-2xl text-base font-semibold transition-transform hover:scale-[1.02]"
              >
                <Heart className="size-4" />
                Add to Watchlist
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
