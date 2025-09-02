import "../styles/components/MovieSkeleton.scss";

const MovieSkeleton = () => {
    return (
        <div className="movie-skeleton">
            <div className="poster" />
            <div className="info">
                <div className="title" />
                <div className="overview line" />
                <div className="overview line" />
                <div className="button" />
            </div>
        </div>
    );
};

export default MovieSkeleton;
