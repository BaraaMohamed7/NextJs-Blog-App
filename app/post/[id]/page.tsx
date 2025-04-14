import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { prisma } from "@/utils/db";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id: string) {
	const data = await prisma.blogPost.findUnique({
		where: {
			id: id,
		},
	});

	if (!data) {
		notFound();
	}
	return data;
}

type Params = Promise<{ id: string }>;
const Post = async ({ params }: { params: Params }) => {
	const { id } = await params;
	const data = await getData(id);
	return (
		<div className='max-w-4xl mx-auto py-8'>
			<Link
				className={buttonVariants({ variant: "secondary" })}
				href={"/"}>
				Back to Posts
			</Link>

			<div className='mb-8 mt-6'>
				<h1 className='text-3xl font-bold tracking-tight'>{data.title}</h1>
				<div className='flex items-center space-x-4'>
					<div className='flex items-center space-x-2'>
						<div className='relative size-10 overflow-hidden rounded-full my-6'>
							<Image
								fill
								className='object-cover'
								src={data.authorImage}
								alt={data.authorName}></Image>
						</div>
						<p className='font-medium my-4'>{data.authorName}</p>
					</div>
					<p className='text-gray-600 text-xs font-light'>
						{new Intl.DateTimeFormat("en-us", {
							year: "numeric",
							month: "long",
							day: "numeric",
						}).format(data.createdAt)}
					</p>
				</div>
			</div>

			<div className='relative h-[400px] w-full mb-8 overflow-hidden rounded-lg'>
				<Image
					className='object-cover'
					src={data.ImageUrl}
					alt={data.title}
					fill
					priority
				/>
			</div>

			<Card>
				<CardContent>
					<p className='text-gray-700'>{data.content}</p>
				</CardContent>
			</Card>
		</div>
	);
};
export default Post;
