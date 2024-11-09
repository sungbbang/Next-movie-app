import styles from "../styles/movie-info.module.css";
import Link from "next/link";
import { getMovieById } from "../app/api";

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovieById(id);
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <span>
          <Link href={movie.homepage} target="_blank">
            <span>&rarr; Homepage</span>
          </Link>
        </span>
      </div>
    </div>
  );
}
