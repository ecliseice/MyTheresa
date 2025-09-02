import axios from "axios";
import type { Movie, MovieListResponse } from "../types/movie.ts";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function getMovies(category: string): Promise<Movie[]> {
    const response = await axios.get<MovieListResponse>(`${ API_URL }/movie/${ category }`, {
        params: { api_key: API_KEY, language: "en-US", page: 1 },
    });

    return response.data.results;
}

export async function getPopularMovies() {
    return getMovies("popular");
}

export async function getTopRatedMovies() {
    return getMovies("top_rated");
}

export async function getUpcomingMovies() {
    return getMovies("upcoming");
}

export async function getMovieDetails(id: number) {
    const response = await axios.get(`${ API_URL }/movie/${ id }`, {
        params: { api_key: API_KEY, language: "en-US", page: 1 },
    });

    return response.data;
}