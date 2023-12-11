import { Container } from "@/components/layout";
import { useParams } from "react-router-dom";
import { useDetailMovie } from "@/providers/movie";
import { tmdbBaseImageUrl, tmdbImageSize } from "@/constants/movie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { DetailSkeleton } from "@/components/skeleton";

import starIcon from "@/assets/star.svg";

const Detail = () => {
	const { id } = useParams();
	const { data, isLoading } = useDetailMovie({
		movie_id: id as string,
	});

	window.scroll({
		top: 0,
		behavior: "smooth",
	});

	if (isLoading) {
		return <DetailSkeleton />;
	}

	return (
		<Container customClass="relative">
			<div className="w-full px md:max-w-7xl mx-auto relative min-h-screen p-5 mt-10">
				<div className="relative  rounded-[40px] overflow-hidden ">
					<Swiper
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}>
						{data?.movie_backdrops.backdrops.length === 0 ? (
							<div className="relative w-full h-[250px] lg:h-[480px]  rounded-[40px] overflow-hidden">
								<div className="bg-gradient-to-b from-[#362C92] to-[#126297] w-full h-full absolute opacity-80 rounded-[40px] "></div>
							</div>
						) : (
							data?.movie_backdrops.backdrops.map((backdrop, index) => (
								<SwiperSlide
									key={index}
									className="z-10
								">
									<div className="relative w-full h-[250px] lg:h-[480px] ">
										<div className="bg-gradient-to-b from-[#362C92] to-[#126297] w-full h-full absolute opacity-80  "></div>
										<img
											src={
												tmdbBaseImageUrl +
												tmdbImageSize.original +
												backdrop.file_path
											}
											className="w-full h-full object-cover"
											alt={`${data?.movie.title} backdrop image`}
										/>
									</div>
								</SwiperSlide>
							))
						)}
					</Swiper>
				</div>
				<div className="relative ml-10 lg:ml-20 -mt-20 lg:w-[560px] h-[144px] bg-brand-grey/800 rounded-3xl backdrop-blur-md bg-opacity-80 z-20 flex items-center p-10 ">
					<h1 className="font-semibold text-2xl text-brand-grey/200">
						{data?.movie.title}
					</h1>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-[150px]">
					<img
						className="lg:ml-20 w-full   lg:w-[480px] lg:h-[720px] rounded-3xl"
						src={
							tmdbBaseImageUrl +
							tmdbImageSize.original +
							data?.movie.poster_path
						}
						alt={`${data?.movie.title} poster image`}
					/>
					<div className="flex flex-col gap-6">
						<h2 className="text-brand-grey/50 font-bold text-2xl">
							{data?.movie.tagline}
						</h2>
						<p className="font-normal text-xl text-brand-grey/100 ">
							{data?.movie.overview}
						</p>
						<div className=" rounded-lg bg-black bg-opacity-[0.65] py-1 px-2 z-10 backdrop-blur-sm flex gap-1 items-center w-fit">
							<img src={starIcon} className="w-4 h-4" alt="" />
							<p className="text-brand-warning/500 font-normal">
								{data?.movie.vote_average.toFixed(1)}
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<h5 className="text-brand-grey/400 font-normal">Revenue</h5>
							<p className="font-normal text-xl text-brand-grey/100">
								{data?.movie.revenue}
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<h5 className="text-brand-grey/400 font-normal">Release Date</h5>
							<p className="font-normal text-xl text-brand-grey/100">
								{data?.movie.release_date}
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<h5 className="text-brand-grey/400 font-normal">Runtime</h5>
							<p className="font-normal text-xl text-brand-grey/100">
								{data?.movie.runtime}
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<h5 className="text-brand-grey/400 font-normal">Genres</h5>
							<p className="font-normal text-xl text-brand-grey/100">
								{data?.movie.genres.map((item) => item.name).join(", ")}
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<h5 className="text-brand-grey/400 font-normal">Homepage</h5>
							<Link
								to={data?.movie.homepage as string}
								target="_blank"
								className="font-normal text-xl text-brand-grey/100">
								{data?.movie.homepage}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Detail;