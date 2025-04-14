import { handleSubmission } from "@/app/actions";
import SubmitButton from "@/components/general/SubmitButton";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CreateBlog = () => {
	return (
		<div>
			<Card className='max-w-lg mx-auto px-3 py-8'>
				<CardHeader>
					<CardTitle>Create Post</CardTitle>
					<CardDescription>
						create a new post to share it with the world{" "}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						className='flex flex-col gap-4'
						action={handleSubmission}>
						<div className='flex flex-col gap-2'>
							<Label>Title</Label>
							<Input
								required
								type='text'
								placeholder='Title'
								name='title'
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<Label>Content</Label>
							<Textarea
								required
								placeholder='Content'
								name='content'
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<Label>Image Url</Label>
							<Input
								required
								type='url'
								placeholder='Image Url'
								name='imageUrl'
							/>
						</div>
						<SubmitButton />
					</form>
				</CardContent>
			</Card>
		</div>
	);
};
export default CreateBlog;
