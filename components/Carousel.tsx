import "../styles/components/Carousel.scss";
import type { Movie } from "../types/movie";
import MovieGridItem from "./MovieGridItem";
import MovieGridSkeleton from "./MovieGridSkeleton";

interface CarouselProps {
    title: string;
    items: Movie[];
}

const Carousel = ({ title, items }: CarouselProps) => {

    return (
        <div className="carousel">
            <h2>{ title }</h2>
            <div className="carousel__container">
                { items.length <= 0 && <MovieGridSkeleton count={ 10 }/> }
                { items.length > 0 && items.map((movie) => (
                    <MovieGridItem key={ movie.id } movie={ movie }/>
                )) }
            </div>
        </div>
    );
}

export default Carousel;