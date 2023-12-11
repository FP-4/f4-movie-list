import { Container } from "@/components/layout";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchMovie, useMovieGenre } from "@/providers/movie";
import { useEffect, useState, useRef } from "react";
import { MovieCardSkeleton } from "@/components/skeleton";
import { MovieCard } from "@/components/common";
import Pagination from "rc-pagination";
import { paginateProperty } from "@/constants/movie";
import { Skeleton } from "@/components/ui/skeleton.tsx";

const Search = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const searchQuery = new URLSearchParams(location.search).get("q");

	const headingRef = useRef<HTMLDivElement>(null);
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isLoading } = useSearchMovie({
		query: searchQuery as string,
		page: currentPage,
	});
	const { data: genresData } = useMovieGenre();

	const handlePageChange = (page: number) => {
		if (headingRef.current) {
			headingRef.current.scrollIntoView({
				behavior: "smooth",
			});
		}
		setCurrentPage(page);
	};

	useEffect(() => {
		if (!searchQuery) {
			navigate("/");
		}
	}, [location, searchQuery]);

	if (isLoading) {
		return (
			<Container>
				<div className="w-full px md:max-w-7xl mx-auto relative min-h-screen p-5 mt-[70px]">
					<Skeleton className="w-96 h-12 bg-brand-grey/100" />
					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-11">
						{Array.from({ length: 5 }).map((_, index) => (
							<MovieCardSkeleton key={index} />
						))}
					</div>
				</div>
			</Container>
		);
	}

	return (
		<Container>
			<div className="w-full px md:max-w-7xl mx-auto relative min-h-screen p-5 mt-[70px]">
				<h1 className="font-bold text-4xl text-brand-grey/400" ref={headingRef}>
					Search Result For "{searchQuery}"
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-11">
					{data?.results.map((movie) => (
						<MovieCard
							key={movie.id}
							movie={movie}
							genres={genresData?.genres}
						/>
					))}
				</div>
				{data?.results && data.results.length > 0 && (
					<Pagination
						className="float-right mt-12"
						total={data?.total_results}
						current={currentPage}
						pageSize={paginateProperty.pageSize}
						onChange={handlePageChange}
					/>
				)}
			</div>
		</Container>
	);
};

export default Search;
