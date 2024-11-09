import styles from "../../../../../styles/providers.module.css";
import MovieProvider from "../../../../../components/movie-provider";
import { getProviders } from "../../../../api";
import { IParams } from "../../../../../types";

export default async function MovieProvidersPage({ params }: IParams) {
  const { id } = await params;
  const providers = await getProviders(id);
  const countryList = Object.keys(providers);

  return (
    <div className={styles.container}>
      {countryList.length > 0 ? (
        countryList.map((country, idx) => (
          <MovieProvider
            key={idx}
            country={country}
            info={providers[country]}
          />
        ))
      ) : (
        <span>Movie provider does not exist.</span>
      )}
    </div>
  );
}
