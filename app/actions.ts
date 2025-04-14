"use server";
import { prisma } from "@/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function handleSubmission(formData: FormData) {
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	if (!user) {
		redirect("/aoi/auth/register");
	}

	const title = formData.get("title");
	const content = formData.get("content");
	const imageUrl = formData.get("imageUrl");

	await prisma.blogPost.create({
		data: {
			title: title as string,
			content: content as string,
			ImageUrl: imageUrl as string,
			authorId: user?.id as string,
			authorImage: user?.picture || "https://placehold.co/600x400?text=User",
			authorName: user?.given_name as string,
		},
	});

	revalidatePath("/");

	return redirect("/dashboard");
}
