import "../Css/favorites.css";
import { useMovieContext } from "../Context/MovieContext";
import MovieCard from "../Components/MovieCard";

const Favorites = () => {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding Movies To Your favorites and they will appear here</p>
    </div>
  );
};

export default Favorites;
