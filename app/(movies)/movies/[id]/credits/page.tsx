import MovieCredit from "../../../../../components/movie-credit";
import styles from "../../../../../styles/credits.module.css";
import { IParams } from "../../../../../types";
import { getCredits } from "../../../../api";

export default async function MovieCreditsPage({ params }: IParams) {
  const { id } = await params;
  const credits = await getCredits(id);

  return (
    <div className={styles.container}>
      {credits.map((credit) => (
        <MovieCredit
          key={credit.id}
          name={credit.name}
          profile_path={credit.profile_path}
        />
      ))}
    </div>
  );
}
