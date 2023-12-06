import { Input } from "@/components/ui/input.tsx";
import { FaMagnifyingGlass } from "react-icons/fa6";
import React from "react";

type SearchProps = {
	searchQuery: string;
	handleOnChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleNavigate: (event: React.MouseEvent<HTMLDivElement>) => void;
};
export const Search: React.FC<SearchProps> = ({
	searchQuery,
	handleOnChangeSearch,
	handleNavigate,
}) => {
	return (
		<div className="relative flex items-center">
			<Input
				placeholder="What do you want to watch?"
				type="text"
				value={searchQuery}
				className=" py-[6px] px-2.5 bg-transparent w-72 md:w-[525px] placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0 border-brand-grey/200"
				onChange={handleOnChangeSearch}
			/>
			<div
				className="h-[44px] w-[44px] flex items-center justify-center cursor-pointer absolute  right-2.5 z-10 "
				onClick={handleNavigate}>
				<FaMagnifyingGlass />
			</div>
		</div>
	);
};