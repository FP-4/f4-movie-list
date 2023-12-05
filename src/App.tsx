import { router } from "./routers";
import { queryClient } from "./configs/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<div className="bg-brand-main min-h-screen  relative pb-24">
				<RouterProvider router={router} />
			</div>
		</QueryClientProvider>
	);
};

export default App;
