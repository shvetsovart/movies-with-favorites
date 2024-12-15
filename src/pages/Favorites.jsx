import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import { MovieCard } from "../components/MovieCard";

export function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return <div>
      <h2 className="favorites">Your favorites</h2>
      <div className="movies-grid">
        {favorites.map((movie) =>
          (<MovieCard movie={movie} key={movie.id} />)
        )}
      </div>
    </div>;
  }

  return <div className="favorites-empty">
    <h2>No favorite movies yet</h2>
    <p>Start adding movies to your favorites and they will appear here</p>
  </div>;
}