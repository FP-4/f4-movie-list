import { Container } from "@/components/layout";
import { Skeleton } from "@/components/ui/skeleton";

export const DetailSkeleton = () => {
	return (
		<Container customClass="relative">
			<div className="w-full px md:max-w-7xl mx-auto relative min-h-screen p-5mt-10">
				<div className="relative">
					<Skeleton className="relative w-full h-[480px]  rounded-[40px] overflow-hidden bg-gradient-to-b from-[#362C92] to-[#126297]" />

					<Skeleton className="absolute left-20 -bottom-[70px] w-[560px] h-[144px] bg-brand-grey/800  rounded-3xl backdrop-blur-md bg-opacity-80 z-10 flex items-center p-10 " />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-[150px]">
					<Skeleton className="ml-20 w-[480px] h-[720px] rounded-3xl bg-brand-grey/800" />
					<div className="flex flex-col gap-6">
						<Skeleton className="h-12 w-full bg-brand-grey/800" />
						<Skeleton className="h-[224px] w-full bg-brand-grey/800" />
						<Skeleton className="h-8 w-[60px] bg-brand-grey/800" />
						<Skeleton className="h-8 w-[60px] bg-brand-grey/800" />
						<Skeleton className="h-8 w-[60px] bg-brand-grey/800" />
						<Skeleton className="h-8 w-[60px] bg-brand-grey/800" />
						<Skeleton className="h-8 w-[60px] bg-brand-grey/800" />
					</div>
				</div>
			</div>
		</Container>
	);
};