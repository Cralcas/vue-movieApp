import type { IOmdbResponse } from "@/models/IOmdbResponse";

export const getMovies = async (searchText: string) => {
  try {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
    const response = await fetch(
      `https://omdbapi.com/?apikey=${apiKey}&s=${searchText}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data: IOmdbResponse = await response.json();

    if (!data.Search) {
      throw new Error("No movies found");
    }

    return data.Search;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
