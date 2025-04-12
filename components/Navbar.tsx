import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
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
				<Button>Login</Button>
				<Button variant='secondary'>Register</Button>
			</div>
		</nav>
	);
};
export default Navbar;
