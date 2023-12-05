export interface IMovie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface IMovieResponse {
	dates: {
		maximum: string;
		minimum: string;
	};
	page: number;
	results: IMovie[];
	total_pages: number;
	total_results: number;
}

export interface ISearchMovieResponse {
	page: number;
	results: IMovie[];
	total_pages: number;
	total_results: number;
}

export interface IMovieGenre {
	id: number;
	name: string;
}

export interface IMovieGenreResponse {
	genres: IMovieGenre[];
}

export interface IDetailMovieResponse {
	adult: false;
	backdrop_path: string;
	belongs_to_collection: {
		id: number;
		name: string;
		poster_path: string;
		backdrop_path: string;
	} | null;
	budget: 100000000;
	genres: IMovieGenre[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: {
		id: number;
		logo_path: string;
		name: string;
		origin_country: string;
	}[];
	production_countries: {
		iso_3166_1: string;
		name: string;
	}[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: {
		english_name: string;
		iso_639_1: string;
		name: string;
	}[];
	status: string;
	tagline: string;
	title: string;
	video: BlobEvent;
	vote_average: number;
	vote_count: number;
}

interface IBackdrops {
	aspect_ratio: number;
	height: number;
	iso_639_1: string | null;
	file_path: string;
	vote_average: number;
	vote_count: number;
	width: number;
}

export interface IDetailMovieResponseWithBackdrop {
	movie: IDetailMovieResponse;
	movie_backdrops: {
		backdrops: IBackdrops[];
	};
}
