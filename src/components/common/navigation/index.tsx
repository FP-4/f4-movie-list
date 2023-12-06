import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import clsx from "clsx";
import { Search } from "@/components/common";
import WebLogo from "@/assets/logo.png";
import { useMovieGenre } from "@/providers/movie";

export const Navigation = ({ customClass }: { customClass?: string }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data: genresData } = useMovieGenre();
  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const [searchQuery, setSearchQuery] = useState(queryParams.get("q") || "");
  const [isGenreOpen, setIsGenreOpen] = useState(false);

  const handleOnChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

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
    <header className={clsx("py-4 text-white w-full z-10", customClass)}>
      <nav className="w-full md:max-w-7xl mx-auto flex justify-between items-center px-5">
        <Link to="/" className="w-10 h-10">
          <img src={WebLogo} alt="Logo" />
        </Link>
        <div className="flex items-center gap-4">
			<div             
				onMouseEnter={() => setIsGenreOpen(true)}
				onMouseLeave={() => setIsGenreOpen(false)}
				className="z-20">
			<button className="font-semibold text-brand-white/200 focus:outline-none">
				Genre
			</button>
			{isGenreOpen && (
				<div className="absolute bg-white w-max rounded-md shadow-lg grid grid-cols-3 p-1">
				{genresData?.genres.map((item,index)=>(
				<Link key={index} to={`/genre/${item.name}`} className="text-center block px-4 py-2 text-brand-grey/200 hover:bg-gray-100 hover:text-brand-grey/500">
					{item.name}
				</Link>
				))}
				</div>
			)}
			</div>
			<Link to="#" className="py-3 px-4 font-semibold text-brand-white/200">
			Movies
			</Link>
			<Link to="#" className="py-3 px-4 font-semibold text-brand-white/200">
			TV Show
			</Link>
        </div>
		<Search
          searchQuery={searchQuery}
          handleNavigate={handleNavigate}
          handleOnChangeSearch={handleOnChangeSearch}
        />
      </nav>
    </header>
  );
};
