import { useWishlist } from "../hooks/useWishlist";
import "../styles/pages/Wishlist.scss";
import { useEffect } from "react";
import MovieGridItem from "../components/MovieGridItem";

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
                        <MovieGridItem key={ movie.id } movie={ movie } toggleWishlist={ toggleWishlist }/>
                    )) }
                </div>
            }
        </div>
    );
}

export default WishlistPage;