import Link from "next/link";
import {
	LoginLink,
	LogoutLink,
	RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { buttonVariants } from "../ui/button";

const Navbar = async () => {
	const { getUser } = getKindeServerSession();
	const user = await getUser();
	return (
		<nav className='py-5 flex items-center justify-between'>
			<div className='flex items-center gap-5'>
				<Link href='/'>
					<h1 className='text-3xl font-semibold'>
						Blog <span className='text-blue-500'>Baraa</span>
					</h1>
				</Link>

				<div className='hidden sm:flex items-center gap-6'>
					<Link
						className='text-sm font-medium hover:text-blue-500'
						href='/'>
						Home
					</Link>
					<Link
						className='text-sm font-medium hover:text-blue-500'
						href='/dashboard'>
						Dashboard
					</Link>
				</div>
			</div>

			<div className='flex items-center gap-4'>
				{user ? (
					<>
						<p>Hello, {user.given_name}</p>
						<LogoutLink className={buttonVariants({ variant: "secondary" })}>
							Logout
						</LogoutLink>
					</>
				) : (
					<>
						<LoginLink className={buttonVariants()}>Login</LoginLink>
						<RegisterLink className={buttonVariants({ variant: "secondary" })}>
							Register
						</RegisterLink>
					</>
				)}
			</div>
		</nav>
	);
};
export default Navbar;
