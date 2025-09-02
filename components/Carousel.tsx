import "../styles/components/Carousel.scss";
import { Link } from "react-router-dom";
import type { Movie } from "../types/movie.ts";

interface CarouselProps {
    title: string;
    items: Movie[];
}

const Carousel = ({ title, items }: CarouselProps) => {
    return (
        <div className="carousel">
            <h2>{ title }</h2>
            <div className="carousel__container">
                { items.map(({ id, poster_path, title }) => (
                    <Link to={ `/movie/${ id }` } key={ id } className="carousel__item">
                        <img
                            src={ `https://image.tmdb.org/t/p/w200${ poster_path }` }
                            alt={ title }
                        />
                        <p>{ title }</p>
                    </Link>
                )) }
            </div>
        </div>
    );
}

export default Carousel;