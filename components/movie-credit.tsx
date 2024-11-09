import styles from "../styles/movie-credit.module.css";
import defaultImage from "../images/notfound.jpg";

interface ICreditProps {
  name: string;
  profile_path: string;
}

export default function MovieCredit({ name, profile_path }: ICreditProps) {
  const imagePath = profile_path || defaultImage.src;

  return (
    <div className={styles.credit}>
      <img src={imagePath} alt={imagePath} />
      <span>{name}</span>
    </div>
  );
}
