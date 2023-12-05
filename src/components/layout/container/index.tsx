import React from "react";
import { Navigation } from "@/components/common/";

export const Container = ({
	children,
	customClass,
}: {
	children: React.ReactNode;
	customClass?: string;
}) => {
	return (
		<div>
			<Navigation customClass={customClass} />
			<main>
				{children}
				<div className="w-[400px] h-[250px] bg-brand-primary/900 rounded-[400px] rotate-[-135deg] blur-[175px] absolute right-[10%] top-[30%]"></div>
				<div className="w-[400px] h-[250px] bg-brand-primary/800 rounded-[400px] rotate-[-135deg] blur-[175px] absolute left-0 top-[40%]"></div>
				<div className="w-[400px] h-[250px] bg-brand-primary/800 rounded-[400px] rotate-[-135deg] blur-[175px] absolute right-[15%] top-[70%]"></div>
			</main>
		</div>
	);
};
