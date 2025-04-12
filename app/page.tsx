import { prisma } from "../utils/db";

async function getData() {
	const data = await prisma.blogPost.findMany({
		select: {
			title: true,
			content: true,
			ImageUrl: true,
			authorImage: true,
			authorName: true,
			id: true,
			createdAt: true,
		},
	});

	return data;
}
const Home = async () => {
	const data = await getData();
	return (
		<div className='py-6 '>
			<h1 className='text-3xl font-bold tracking-tight mb-8'>Latest Posts</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{data.map((item) => (
					<div key={item.title}>
						<h2>{item.title}</h2>
						<p>{item.content}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default Home;
