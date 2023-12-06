import WebLogo from "@/assets/logo.png";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState, useMemo } from "react";
import { Search } from "@/components/common";

export const Navigation = ({ customClass }: { customClass?: string }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const queryParams = useMemo(
		() => new URLSearchParams(location.search),
		[location.search]
	);
	const [searchQuery, setSearchQuery] = useState(queryParams.get("q") || "");

	const handleOnChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
		setSearchQuery(event.target.value);

	const handleNavigate = (event: React.MouseEvent<HTMLDivElement>) => {
		event.preventDefault();

		queryParams.delete("q");
		if (searchQuery.trim() !== "") {
			queryParams.set("q", searchQuery);
		}
		navigate(`/search?${queryParams.toString()}`);
	};

	useEffect(() => {
		const queryParam = queryParams.get("q") || "";
		setSearchQuery(queryParam);
	}, [queryParams]);

	return (
		<header className={clsx("py-4 text-white  w-full z-10", customClass)}>
			<nav className="w-full md:max-w-7xl mx-auto flex justify-between items-center px-5">
				<Link to="/" className="w-10 h-10">
					<img src={WebLogo} alt="Logo" />
				</Link>
				<Search
					searchQuery={searchQuery}
					handleNavigate={handleNavigate}
					handleOnChangeSearch={handleOnChangeSearch}
				/>
				<div className="hidden gap-4">
					<Link to="#" className="py-3 px-4 font-semibold text-brand-grey/200">
						Movies
					</Link>
					<Link to="#" className="py-3 px-4 font-semibold text-brand-grey/200">
						TV Show
					</Link>
				</div>
			</nav>
		</header>
	);
};