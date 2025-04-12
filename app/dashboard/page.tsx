import BlogPostCard from "@/components/general/BlogPostCard";
import { buttonVariants } from "@/components/ui/button";
import { prisma } from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

async function getData(userId: string) {
	const data = await prisma.blogPost.findMany({
		where: {
			authorId: userId,
		},
		orderBy: {
			createdAt: "desc",
		},
	});
	return data;
}

const Dashboard = async () => {
	const { getUser } = getKindeServerSession();
	const user = await getUser();
	const data = await getData(user?.id!);

	return (
		<div>
			<div className='flex items-center justify-between mb-4'>
				<h2 className='text-xl font-medium'>Your Blog Articles</h2>

				<Link
					className={buttonVariants()}
					href='dashboard/create'>
					Create post
				</Link>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{data.map((item) => (
					<BlogPostCard
						data={item}
						key={item.id}></BlogPostCard>
				))}
			</div>
		</div>
	);
};
export default Dashboard;
