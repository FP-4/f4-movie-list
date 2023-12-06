import { MovieCard } from '@/components/common';
import { Container } from '@/components/layout';
import { paginateProperty } from '@/constants/movie';
import { useMovieGenre, useUpcomingMovies } from '@/providers/movie';
import Pagination from 'rc-pagination/lib/Pagination';
import  { useEffect,useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Genre = () => {
  const { genreName } = useParams();
  const [page, setPage] = useState(1);
	const upcomingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    console.log(genreName);
  }, [genreName]);
  const { data: genresData } = useMovieGenre();
  const { data: upComingMovies} =
  useUpcomingMovies({
    page,
  });

  const isGenreAvailable = upComingMovies?.results.some((movie) => {
    const movieGenres = genresData?.genres.filter((genre) =>
      movie.genre_ids.includes(genre.id)
    );
    return movieGenres?.some((item) => item.name === genreName);
  });

  const handlePageChange = (page: number) => {
		if (upcomingRef.current) {
			upcomingRef.current.scrollIntoView({
				behavior: "smooth",
			});
		}
		setPage(page);
	};
  return (
      <Container>
      <div className="w-full md:max-w-7xl mx-auto min-h-screen ">
       {isGenreAvailable ? (
        <>
        <div className='text-center'>
          <h1
            className="font-bold text-4xl text-brand-grey/400"
            ref={upcomingRef}>
            Genre {genreName}
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-11">
          {upComingMovies?.results.map((movie) => {
            const movieGenres = genresData?.genres.filter((genre) =>
              movie.genre_ids.includes(genre.id)
            );
            const hasGenreName = movieGenres?.some((item) => item.name === genreName);
            if (hasGenreName) {
              return (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  genres={genresData?.genres}
                />
              );
            }
            return null;
          })}
        </div>
        </>
        ) : (
          <div className='text-center'>
          <h1
            className="font-bold text-4xl text-brand-grey/400"
            ref={upcomingRef}>
            Film untuk Genre {genreName} <br/>Tidak Ada
          </h1>
        </div>
        )}
        <div className="float-right">
          <Pagination
            className="mt-12"
            total={upComingMovies?.total_results}
            pageSize={paginateProperty.pageSize}
            current={page}
            onChange={handlePageChange}
          />
        </div>
			</div>
      </Container>
  );
};

export default Genre;
