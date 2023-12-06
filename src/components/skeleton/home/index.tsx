import { Container } from "@/components/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { MovieCardSkeleton } from "../movie-card";

export const HomeSkeleton = () => {
	return (
		<Container customClass="absolute">
			<div className="relative h-[800px]">
				<div className="absolute w-full h-full flex justify-center text-white">
					<div className=" w-full h-full flex items-center absolute  z-10 md:max-w-7xl">
						<div className="flex flex-col justify-center w-[400px] gap-4">
							<Skeleton className="w-full h-12 bg-brand-grey/100" />
							<div className="flex gap-[34px]">
								<Skeleton className="w-full h-8 bg-brand-grey/100" />
								<Skeleton className="w-full h-8 bg-brand-grey/100" />
								<Skeleton className=" h-8 w-full bg-brand-grey/100" />
							</div>
							<Skeleton className="w-full h-16 bg-brand-grey/100" />
							<Skeleton className="h-12 w-[170px] bg-brand-grey/100" />
						</div>
					</div>
					<Skeleton className="w-full bg-brand-grey/200 h-full absolute object-cover  top-0 z-[9]" />
				</div>
			</div>
			<div className="w-full px md:max-w-7xl mx-auto relative min-h-screen px-5 mt-[35px] md:mt-[70px]">
				<Skeleton className="bg-brand-grey/100 w-56 h-8" />
				<div
					className="
      grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-11">
					{Array.from({ length: 20 }).map((_, index) => (
						<MovieCardSkeleton key={index} />
					))}
				</div>
			</div>
		</Container>
	);
};