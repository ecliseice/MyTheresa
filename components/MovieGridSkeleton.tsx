import MovieGridItem from "./MovieGridItem";

const MovieGridSkeleton = ({ count }: { count: number }) => {
    return (
        <>
            { Array.from({ length: count }).map((_, i) => (
                <MovieGridItem key={ i } isSkeleton/>
            )) }
        </>
    );
};

export default MovieGridSkeleton;
