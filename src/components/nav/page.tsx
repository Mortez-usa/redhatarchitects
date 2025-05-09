import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs';

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function page() {
	return (
		<div className='flex justify-between items-center px-8 py-4 bg-white'>
			<header className='w-full p-4 border-b flex items-center justify-between'>
				<div className='text-2xl font-bold flex items-center gap-2'>
					<span className='text-red-600'>
						<Image
							src={'/RedHatArchitects-w.jpg'}
							alt='Red Hat Architects'
							width={50}
							height={50}
						/>
					</span>{' '}
					RED HAT ARCHITECTS
				</div>
				<div className='flex items-center gap-6'>
					<nav className='flex gap-4 text-sm content-center justify-items-center items-center'>
						<Link href='#' className='hover:underline'>
							Home
						</Link>
						<Link href='#' className='hover:underline'>
							Browse
						</Link>
						<Link href='#' className='hover:underline'>
							Requests
						</Link>
						<Link href='#' className='hover:underline'>
							Pricing
						</Link>
						<Link href='#' className='hover:underline'>
							About
						</Link>
						<div className=' hover:underline'>
							<ClerkProvider publishableKey={publishableKey}>
								<div className='hover:underline'>
									<SignedOut>
										<SignInButton />
									</SignedOut>
									<SignedIn>
										<UserButton showName />
									</SignedIn>
								</div>
							</ClerkProvider>
						</div>
					</nav>
				</div>
			</header>
		</div>
	);
}
