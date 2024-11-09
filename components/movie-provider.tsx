import styles from "../styles/movie-provider.module.css";

interface IProviderProps {
  country: string;
  info: {
    rent?: { logo_path: string }[];
    buy?: { logo_path: string }[];
    flatrate?: { logo_path: string }[];
  };
}

export default function MovieProvider({ country, info }: IProviderProps) {
  const { rent, buy, flatrate } = info;

  const IMG_BASE_URL = "https://media.themoviedb.org/t/p/original";

  return (
    <div className={styles.provider}>
      <h3>{country}</h3>
      {flatrate && (
        <div className={styles.container}>
          <span>Streaming</span>
          <ul>
            {flatrate.map((v, i) => (
              <li key={i}>
                <img src={`${IMG_BASE_URL}${v.logo_path}`} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {rent && (
        <div className={styles.container}>
          <span>Rent</span>
          <ul>
            {rent.map((v, i) => (
              <li key={i}>
                <img src={v.logo_path} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {buy && (
        <div className={styles.container}>
          <span>Buy</span>
          <ul>
            {buy.map((v, i) => (
              <li key={i}>
                <img src={v.logo_path} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
