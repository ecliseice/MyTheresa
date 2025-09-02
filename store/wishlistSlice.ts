import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Movie } from "../types/movie.ts";

interface WishlistState {
    items: Movie[];
}

const initialState: WishlistState = {
    items: JSON.parse(localStorage.getItem("wishlist") || "[]"),
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist(state, action: PayloadAction<Movie>) {
            if (!state.items.find((m) => m.id === action.payload.id)) {
                state.items.push(action.payload);
                // save info on localStorage for user convenience
                localStorage.setItem("wishlist", JSON.stringify(state.items));
            }
        },
        removeFromWishlist(state, action: PayloadAction<number>) {
            state.items = state.items.filter((m) => m.id !== action.payload);
            localStorage.setItem("wishlist", JSON.stringify(state.items));
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;