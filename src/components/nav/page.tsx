import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  return (
		<div className='flex justify-between items-center px-8 py-4 shadow-md bg-white'>
			<div className='flex items-center space-x-2'>
				<div className='bg-red-600 w-12 h-12'>
					<Image
						src='/RedHatArchitects-w.jpg'
						alt='Red Hat Architects'
						width={100}
						height={100}
					/>
				</div>
				<span className='text-xl font-bold'>Red Hat Architects</span>
			</div>
			<nav className='space-x-6 text-sm font-medium'>
				<Link href='/'>Home</Link>
				<Link href='about'>About</Link>
				<Link href='projects'>Projects</Link>
				<Link href='contact'>Contact</Link>
			</nav>
		</div>
  );
}
