import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { tmdbBaseImageUrl, tmdbImageSize } from "@/constants/movie";
import { IMovie } from "@/interfaces/movie";

import imdbLogo from "@/assets/imdb-logo.png";
import playIcon from "@/assets/play-icon.png";
import starIcon from "@/assets/star.svg";

type PosterCardProps = {
	poster: IMovie;
};

export const PosterCard: React.FC<PosterCardProps> = ({ poster }) => {
	return (
		<div className="absolute w-full h-full flex justify-center text-white after:bg-gradient-to-t after:h-3/4 after:absolute after:z-10 after:-bottom-1 after:block after:content-[' '] after:w-full after:from-brand-main after:z-[9]">
			<div className=" w-full h-full flex items-center absolute  z-10 md:max-w-7xl px-5">
				<div className="flex flex-col justify-center w-[400px] gap-4 mt-[120px] md:mt-0">
					<h1 className="text-2xl md:text-5xl font-bold">{poster.title}</h1>
					<div className="flex gap-[34px] ">
						<div className="flex items-center gap-2.5">
							<img
								src={imdbLogo}
								alt="imdb logo"
								className="w-[35px] h-[17px]"
							/>
							<p className="font-normal text-xs ">{poster.popularity}</p>
						</div>
						<div className="flex items-center gap-2.5 bg-brand-grey/900 py-2 px-4 rounded-md bg-opacity-80 backdrop-blur-md">
							<img src={starIcon} alt="star icon" className="w-4 h-[17px]" />
							<p className="font-normal text-xs">
								{poster.vote_average.toFixed(1)}
							</p>
						</div>
						<Badge className="uppercase text-[14px] font-bold py-[6px] w-fit px-4">
							trending movie
						</Badge>
					</div>
					<p className="font-medium text-xs md:text-[14px]">
						{poster.overview}
					</p>
					<Button className="py-[6px] px-4 bg-brand-rose/700 hover:bg-brand-rose/800 w-[170px]">
						<div className="flex items-center gap-2">
							<img src={playIcon} alt="play icon" className="w-4 h-4" />
							<span className="font-bold text-[14px] uppercase">
								Watch Trailer
							</span>
						</div>
					</Button>
				</div>
			</div>
			<img
				src={tmdbBaseImageUrl + tmdbImageSize.original + poster.backdrop_path}
				alt={`${poster.title} poster image`}
				className="w-full h-max absolute object-cover  top-0 z-[9]"
			/>
		</div>
	);
};