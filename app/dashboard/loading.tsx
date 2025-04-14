import { Skeleton } from "@/components/ui/skeleton";

const loadingDashboard = () => {
	const data = new Array(10).fill(null);
	return (
		<div className='py-6 '>
			<h1 className='text-3xl font-bold tracking-tight mb-8'>Latest Posts</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{data.map((_, i) => (
					<div
						key={i}
						className='flex flex-col space-y-3'>
						<Skeleton className='h-[125px] w-[250px] rounded-xl' />
						<div className='space-y-2'>
							<Skeleton className='h-4 w-[250px]' />
							<Skeleton className='h-4 w-[200px]' />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default loadingDashboard;
