# Vibe Check Finder

Build a fully functional, modern dark-mode 'Vibe Check Movie Finder' web application.

UI & DESIGN:

- Modern dark-mode aesthetic with smooth gradients and Tailwind / Shadcn UI components.

- Header: Glowing title '🎬 VibeCheck', and subtitle 'Find movies based on your mood, not boring genres.'

- Search Bar: A text input saying 'Describe your vibe or current mood...' with a glowing 'Find Movies' button.

- Mood Cards Grid: A 2x3 grid of interactive, visual Mood Cards:

  1. ☕️ Cozy & Calm

  2. ⚡️ High Energy

  3. 🌧️ Melancholy & Deep

  4. 🚀 Mind-Bending

  5. 💖 Romantic Vibes

  6. 🕵️ Dark & Thrilling

- Card Behavior: Clicking a card selects it with a neon glowing outline and triggers the search process.

BACKEND LOGIC (Simulated Server):

- Do NOT use any external APIs like TMDB or OpenAI.

- Create a 'mock backend' service file (e.g., api.ts). 

- Inside this simulated backend, create a robust Mock Database: an array of at least 15 highly detailed movie objects. Each object should include: id, title, poster_url (use high-quality unsplash or placeholder image URLs), release_year, rating, overview, and assigned 'mood_tags' (e.g., ['cozy', 'romantic']).

- Create an asynchronous function `fetchMoviesByVibe(vibeInput)` that simulates a network request. It should use `setTimeout` to create an artificial delay of 1.5 seconds.

- The `fetchMoviesByVibe` function should contain the 'backend logic' to filter the Mock Database array based on the user's selected mood card or text input, and return the matching movies.

RESULTS DISPLAY:

- While the simulated network request is happening, show a sleek loading spinner that says 'Analyzing cinematic vibes...'.

- Display results in a responsive grid of movie cards.

- Each movie card must display: poster image, movie title, release year, rating badge, and short overview summary.

- Fully responsive on desktop and mobile screens.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/413d9955-00df-4953-9872-6f8971141b55).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
