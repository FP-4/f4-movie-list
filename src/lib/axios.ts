import axios from "axios";

const apiInstance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${import.meta.env.VITE_TMDB_APIKEY as string}`,
	},
});

export default apiInstance;
