import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";
import type { Movie } from "../types/movie.ts";

export function useWishlist() {
    const dispatch = useDispatch();
    const movies = useSelector((state: RootState) => state.wishlist.items);

    const isInWishlist = (id: number) => movies.some((m) => m.id === id);

    const toggleWishlist = (movie: Movie) => {
        if (isInWishlist(movie.id)) {
            dispatch(removeFromWishlist(movie.id));
        } else {
            dispatch(addToWishlist(movie));
        }
    };

    return { movies, isInWishlist, toggleWishlist };
}