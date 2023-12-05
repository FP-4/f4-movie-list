import apiInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import {
	IMovieGenreResponse,
	IMovieResponse,
	IDetailMovieResponseWithBackdrop,
	ISearchMovieResponse,
} from "@/interfaces/movie";
import { AxiosResponse } from "axios";

export const useNowPlayingMovie = () => {
	return useQuery<IMovieResponse>({
		queryKey: ["Fetch now playing movie"],
		queryFn: async () => {
			const response = await apiInstance.get("/movie/now_playing", {
				params: {
					language: "en-US",
					page: 1,
				},
			});
			return response.data;
		},
	});
};

export const useMovieGenre = () =>
	useQuery<IMovieGenreResponse>({
		queryKey: ["fetch movie genres"],
		queryFn: async () => {
			const response = await apiInstance.get("/genre/movie/list", {
				params: {
					language: "en",
				},
			});
			return response.data;
		},
	});

export const useUpcomingMovies = ({ page = 1 }: { page: number }) => {
	return useQuery<IMovieResponse>({
		queryKey: ["upcomingMovies", { page }],
		queryFn: async () => {
			try {
				const response: AxiosResponse<IMovieResponse> = await apiInstance.get(
					"/movie/upcoming",
					{
						params: {
							language: "en-US",
							page,
						},
					}
				);

				return response.data;
			} catch (error) {
				console.error("Error in useUpcomingMovies:", error);
				throw error;
			}
		},
	});
};

export const useTrendingMovies = () =>
	useQuery<IMovieResponse>({
		queryKey: ["trending_movies"],
		queryFn: async () => {
			const response = await apiInstance.get("/trending/movie/week", {
				params: {
					language: "en-US",
				},
			});
			return response.data;
		},
	});

export const useDetailMovie = ({ movie_id }: { movie_id: string }) =>
	useQuery<IDetailMovieResponseWithBackdrop>({
		queryKey: ["detail_movie", { movie_id }],
		queryFn: async () => {
			const requestDetailMovie = await apiInstance.get(`/movie/${movie_id}`);
			const requestBackgdropMovie = await apiInstance.get(
				`/movie/${movie_id}/images`
			);
			return {
				movie: requestDetailMovie.data,
				movie_backdrops: requestBackgdropMovie.data,
			};
		},
	});

export const useSearchMovie = ({
	query,
	page,
}: {
	query: string;
	page: number;
}) =>
	useQuery<ISearchMovieResponse>({
		queryKey: ["search_movie", { query }, { page }],
		queryFn: async () => {
			const response = await apiInstance.get("/search/movie", {
				params: {
					include_adult: false,
					query,
					language: "en-US",
					page,
				},
			});
			return response.data;
		},
	});
