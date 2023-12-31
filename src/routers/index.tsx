import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/home";
import Detail from "@/pages/detail";
import Search from "@/pages/search";
import Genre from "@/pages/genre";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/detail/:id",
		element: <Detail />,
	},
	{
		path: "/search",
		element: <Search />,
	},
	{
		path: "*",
		element: <h1>Not Found</h1>,
	},
	{
		path: "/genre/:genreName",
		element: <Genre />,
	},
]);
