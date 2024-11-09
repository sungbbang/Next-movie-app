const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export async function getMovieById(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

export async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}

export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  const json = await response.json();
  return json;
}

export async function getProviders(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  const json = await response.json();
  return json;
}

export async function getSimilarMovies(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  const json = await response.json();
  return json;
}
