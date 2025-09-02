import { Link } from "react-router-dom";
import { useWishlist } from "../hooks/useWishlist";
import "../styles/pages/Wishlist.scss";
import { useEffect } from "react";

const WishlistPage = () => {
    const { movies, toggleWishlist } = useWishlist();

    useEffect(() => {
        document.title = "Wishlist"; // simple without any dependencies
    }, []);

    return (
        <div className="wishlist">
            <h1>My Wishlist</h1>
            { movies.length <= 0 && <p>Wishlist is empty</p> }
            { movies.length > 0 &&
                <div className="wishlist__grid">
                    { movies.map((movie) => (
                        <div key={ movie.id } className="wishlist__card">
                            <div className="wishlist__poster">
                                <Link to={ `/movie/${ movie.id }` }>
                                    <img
                                        src={ `https://image.tmdb.org/t/p/w300${ movie.poster_path }` }
                                        alt={ movie.title }
                                    />
                                </Link>
                                <button
                                    className="wishlist__remove"
                                    onClick={ () => toggleWishlist(movie) }
                                    aria-label="Remove from wishlist"
                                >
                                    ✖
                                </button>
                            </div>
                            <h3>{ movie.title }</h3>
                        </div>
                    )) }
                </div>
            }
        </div>
    );
}

export default WishlistPage;