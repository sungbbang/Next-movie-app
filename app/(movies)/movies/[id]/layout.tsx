import MovieInfo from "../../../../components/movie-info";
import MovieInfoNav from "../../../../components/movie-info-nav";
import { IParams } from "../../../../types";
import { getMovieById } from "../../../api";

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await getMovieById(id);

  return {
    title: movie.title,
  };
}

export default async function MovieLayout({
  children,
  params,
}: {
  children: React.ReactNode;
} & IParams) {
  const { id } = await params;

  return (
    <div>
      <MovieInfo id={id} />
      <MovieInfoNav id={id} />
      {children}
    </div>
  );
}
