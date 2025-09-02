import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "../api/movies";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import "../styles/pages/Homepage.scss";
import type { Movie } from "../types/movie";

const HomePage = () => {
    const [ popular, setPopular ]   = useState<Movie[]>([]);
    const [ topRated, setTopRated ] = useState<Movie[]>([]);
    const [ upcoming, setUpcoming ] = useState<Movie[]>([]);

    useEffect(() => {
        getPopularMovies().then(setPopular);
        getTopRatedMovies().then(setTopRated);
        getUpcomingMovies().then(setUpcoming);

        document.title = "Home";
    }, []);

    return (
        <div className="homepage">
            <h1>Home</h1>
            <Carousel title="Popular" items={ popular }/>
            <Carousel title="Top Rated" items={ topRated }/>
            <Carousel title="Upcoming" items={ upcoming }/>
        </div>
    );
};

export default HomePage;