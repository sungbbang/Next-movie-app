import Movie from "../../../../../components/movie";
import styles from "../../../../../styles/similar.module.css";
import { IParams } from "../../../../../types";
import { getSimilarMovies } from "../../../../api";

export default async function SimilarMoviePage({ params }: IParams) {
  const { id } = await params;
  const similarMovies = await getSimilarMovies(id);

  return (
    <div className={styles.container}>
      {similarMovies.map((movie) => {
        if (movie.backdrop_path !== null)
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              title=""
              poster_path={movie.backdrop_path}
            />
          );
      })}
    </div>
  );
}
