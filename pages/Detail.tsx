import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/movies";
import { useWishlist } from "../hooks/useWishlist";
import "../styles/pages/Detail.scss";
import type { Movie } from "../types/movie.ts";

const DetailPage = () => {
    const { id } = useParams<{ id: string }>();

    const [ movie, setMovie ] = useState<Movie | null>(null);

    const { isInWishlist, toggleWishlist } = useWishlist();

    useEffect(() => {
        if ( id )
            getMovieDetails(parseInt(id)).then(setMovie);
    }, [ id ]);

    useEffect(() => {
        document.title = movie ?
            movie.title :
            "Detail";
    }, [ movie ]);

    if ( !movie ) return <p>Loading...</p>;

    return (
        <div className="detail_page">
            <div className="detail_page__main_info">
                <div className="poster">
                    <img
                        src={ `https://image.tmdb.org/t/p/w500${ movie.poster_path }` }
                        alt={ movie.title }
                    />
                </div>
                <div className="info">
                    <h1>{ movie.title }</h1>
                    <p className="desc">{ movie.overview }</p>
                    <button
                        className="btn"
                        onClick={ () =>
                            toggleWishlist({
                                id:          movie.id,
                                title:       movie.title,
                                poster_path: movie.poster_path,
                            })
                        }
                    >
                        { isInWishlist(movie.id) ?
                            "In Wishlist" :
                            "Add to Wishlist" }
                    </button>
                </div>
            </div>
            <div className="detail_page__additional_info"></div>
        </div>
    );
}

export default DetailPage;