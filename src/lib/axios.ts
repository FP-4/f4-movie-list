import axios from "axios";

const apiInstance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	headers: {
		Accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmRhMzgwMjdjOGM4NWYwNzA4MGJjNGI2Y2YwOWM3MyIsInN1YiI6IjYwZTEzMmQxYjY4NmI5MDA0NmVhMzdkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ghgtmpsT2cjO0Ri4M49RQAIvfBj3JU4TY4PCHFi6yp0",
	},
});

export default apiInstance;
