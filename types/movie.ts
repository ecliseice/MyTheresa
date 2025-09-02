export interface Movie {
    id: number;
    title: string;
    overview?: string;
    poster_path: string | null;
}

// TMDB response type
export interface MovieListResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}