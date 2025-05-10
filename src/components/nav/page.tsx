'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	ClerkProvider,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs';

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function Page() {

	return (
		<div className='flex justify-between items-center px-8 py-4 bg-white'>
			<header className='w-full p-4 border-b flex items-center justify-between'>
				<Link href={'/home'}>
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
				</Link>
				<div className='flex items-center gap-6'>
					<nav className='flex gap-4 text-sm content-center justify-items-center items-center'>
						<Link href='/home' className='hover:underline' >
							Home
						</Link>
						<Link href='/browse' className='hover:underline'>
							Browse
						</Link>
						<Link href='/requests' className='hover:underline'>
							Requests
						</Link>
						<Link href='/pricing' className='hover:underline'>
							Pricing
						</Link>
						<Link href='/about' className='hover:underline'>
							About
						</Link>
						<div className='hover:underline'>
							<ClerkProvider publishableKey={publishableKey}>
								<div className='hover:underline cursor-pointer'>
									<SignedOut>
										<Link href='/sign-in'>
											Sign in
										</Link>
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
