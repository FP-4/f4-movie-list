import React from "react";
import { IMovie, IMovieGenre } from "@/interfaces/movie";
import { tmdbBaseImageUrl, tmdbImageSize } from "@/constants/movie";
import { Link } from "react-router-dom";

import starIcon from "@/assets/star.svg";
import imdbLogo from "@/assets/imdb-logo.png";
import tomatoLogo from "@/assets/tomato-logo.png";

type MovieCardProps = {
	movie: IMovie;
	genres: IMovieGenre[] | undefined;
};

export const MovieCard: React.FC<MovieCardProps> = ({ movie, genres }) => {
	return (
		<Link
			to={`/detail/${movie.id}`}
			className="bg-brand-grey/800 bg-opacity-80 rounded-xl relative px-2 pt-2 pb-4  text-brand-grey/200"
			key={movie.id}>
			<div className="relative h-[200px] md:h-[300px] lg:h-[400px]">
				<div className="absolute top-2.5 left-2 rounded-lg bg-black bg-opacity-[0.65] py-1 px-2 z-10 backdrop-blur-sm flex gap-1 items-center">
					<img src={starIcon} className="w-4 h-4" alt="" />
					<p className="text-brand-warning/500 font-normal">
						{movie.vote_average.toFixed(1)}
					</p>
				</div>
				<img
					src={tmdbBaseImageUrl + tmdbImageSize.w500 + movie.poster_path}
					className="w-full h-full object-cover  absolute"
					alt={movie.title}
				/>
			</div>
			<div className="mt-3 flex flex-col gap-3">
				<p className="text-xs  font-bold">{movie.release_date}</p>
				<p className="font-bold text-sm md:text-lg text-brand-grey/200 ">
					{movie.title}
				</p>
				<div className="flex justify-between">
					<div className="flex items-center gap-2.5">
						<img src={imdbLogo} alt="" className="w-[35px] h-[17px]" />
						<p className="font-normal text-xs">{movie.popularity}</p>
					</div>
					<div className="flex items-center gap-2.5">
						<img src={tomatoLogo} alt="" className="w-4 h-[17px]" />
						<p className="font-normal text-xs">{movie.vote_count}</p>
					</div>
				</div>
				<p className="font-bold text-xs">
					{genres &&
						genres
							.filter((genre) => movie.genre_ids.includes(genre.id))
							.map((item) => item.name)
							.join(", ")}
				</p>
			</div>
		</Link>
	);
};