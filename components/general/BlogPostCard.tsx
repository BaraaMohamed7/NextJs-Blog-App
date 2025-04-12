import Link from "next/link";
import Image from "next/image";

interface IappProps {
	data: {
		id: string;
		title: string;
		content: string;
		ImageUrl: string;
		authorName: string;
		authorImage: string;
		createdAt: Date;
	};
}

const BlogPostCard = ({ data }: IappProps) => {
	return (
		<div
			className='group relative overflow-hidden rounded-lg
		border-gray-200 bg-white shadow-md transition-all hover:shadow-lg'>
			<Link
				className='block w-full h-full'
				href={`/post/${data.id}`}>
				<div className='relative w-full aspect-video overflow-hidden'>
					<Image
						src={data.ImageUrl}
						alt={data.title}
						fill
						className='object-cover transition-transform duration-300 group-hover:scale-150'
					/>
				</div>
				<div className='p-4'>
					<h3 className='mb-4 text-lg font-semibold text-gray-900'>
						{data.title}
					</h3>
					<p className='text-gray-700 text-sm mb-4 line-clamp-2'>
						{data.content}
					</p>

					<div className='flex items-center justify-between'>
						<div className='flex items-center space-x-2'>
							<div className='relative size-8 overflow-hidden rounded-full'>
								<Image
									src={data.authorImage}
									alt={data.authorName}
									fill
									className='object-cover'
								/>
							</div>

							<p className='text-sm font-medium text-gray-700'>
								{data.authorName}
							</p>
						</div>

						<time className='text-xs font-light text-gray-500'>
							{new Intl.DateTimeFormat("en-us", {
								year: "numeric",
								month: "short",
								day: "numeric",
							}).format(data.createdAt)}
						</time>
					</div>
				</div>
			</Link>
		</div>
	);
};
export default BlogPostCard;
