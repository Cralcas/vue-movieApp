import type { IOmdbResponse } from "@/models/IOmdbResponse";

export const getMovies = async (searchText: string) => {
  try {
    const response = await fetch(
      `http://omdbapi.com/?apikey=7accc2cd&s=${searchText}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data: IOmdbResponse = await response.json();

    if (!data.Search) {
      throw new Error("No movies found");
    }

    console.log(data.Search);
    return data.Search;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
