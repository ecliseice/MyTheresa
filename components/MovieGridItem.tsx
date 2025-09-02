import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";
import "../styles/components/MovieGridItem.scss";

const MovieGridItem = ({ movie, toggleWishlist, isSkeleton }: {
    movie?: Movie,
    isSkeleton?: boolean,
    toggleWishlist?: (movie: Movie) => void
}) => {
    if ( isSkeleton ) {
        return (
            <div className="movie_item skeleton">
                <div className="poster"/>
                <div className="title"/>
            </div>
        );
    }

    if ( !movie ) return null;

    return (
        <Link to={ `/movie/${ movie.id }` } className="movie_item">
            <img
                src={ `https://image.tmdb.org/t/p/w200${ movie.poster_path }` }
                alt={ movie.title }
            />
            <p>{ movie.title }</p>
            { toggleWishlist &&
                <button
                    className="movie_item__remove"
                    onClick={ (e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        toggleWishlist(movie)
                    } }
                    aria-label="Remove from wishlist"
                >
                    ✖
                </button>
            }
        </Link>
    );
};

export default MovieGridItem;
