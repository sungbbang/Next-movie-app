import MovieVideos from "../../../../components/movie-videos";
import { IParams } from "../../../../types";

export default async function MovieDetail({ params }: IParams) {
  const { id } = await params;
  return (
    <div>
      <MovieVideos id={id} />
    </div>
  );
}
