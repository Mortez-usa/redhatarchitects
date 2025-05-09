import React from 'react'
import { Search, Package, Puzzle, PackageOpen, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Image from 'next/image';

export default function page() {
  return (
		<div>
			<div className='min-h-screen bg-white text-gray-900'>
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
						<nav className='flex gap-4 text-sm'>
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
						</nav>
						<div className='text-sm'>
							<Link href='/account' className='hover:underline'>
								Account
							</Link>
						</div>
					</div>
				</header>

				<main className='p-8 max-w-5xl mx-auto'>
					<section className='text-center mb-12'>
						<h1 className='text-4xl font-bold mb-4'>
							Discover Architecture Software
						</h1>
						<p className='text-gray-600 mb-6'>
							Enjoy safe and trusted architectural software,
							plugins, 3D objects, assets, and more
						</p>
						<div className='flex justify-center'>
							<div className='relative w-full max-w-xl'>
								<Input
									placeholder='Search for products...'
									className='pr-10'
								/>
								<Search
									className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400'
									size={20}
								/>
							</div>
						</div>
						<section className='mb-12'>
							<Image
								src='/software-library-redhat.jpg'
								width={7000}
								height={7000}
								alt='Hero Banner'
								className='my-12 w-full h-96 object-cover'
							/>
						</section>
					</section>
					<section></section>

					<section className='mb-12'>
						<h2 className='text-2xl font-semibold mb-4'>
							Categories
						</h2>
						<div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
							{[
								{ label: 'Software', icon: <Package /> },
								{ label: 'Plugins', icon: <Puzzle /> },
								{ label: '3D Objects', icon: <PackageOpen /> },
								{ label: 'Scripts', icon: <Code /> },
							].map((category) => (
								<Card
									key={category.label}
									className='text-center p-4'>
									<CardContent>
										<div className='flex justify-center mb-2'>
											{category.icon}
										</div>
										<div className='font-medium'>
											{category.label}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</section>

					<section className='mb-12'>
						<h2 className='text-2xl font-semibold mb-4'>
							Featured Apps
						</h2>
						<div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
							{[
								{
									name: 'ArchitecturSoft',
									price: '$49.00',
									icon: <Package />,
								},
								{
									name: 'Building Plugin',
									price: '$19.00',
									icon: <Puzzle />,
								},
								{
									name: 'Modern House 3D',
									price: '$79.00',
									icon: <PackageOpen />,
								},
								{
									name: 'AutoDesign Script',
									price: '$29.00',
									icon: <Code />,
								},
							].map((product) => (
								<Card
									key={product.name}
									className='text-center p-4'>
									<CardContent>
										<div className='flex justify-center mb-2'>
											{product.icon}
										</div>
										<div className='font-medium'>
											{product.name}
										</div>
										<div className='text-sm text-gray-500'>
											{product.price}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</section>
					<section className='mb-12'>
						<h2 className='text-2xl font-semibold mb-4'>
							Trending Categories
						</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							{[
								'Interoperability & Integration',
								'AI-Driven Design Tools',
								'Sustainability-Focused Software',
								'Mobile Based Platforms',
							].map((category) => (
								<Card key={category} className='p-4'>
									<CardContent className='text-center font-medium'>
										{category}
									</CardContent>
								</Card>
							))}
						</div>
					</section>
					<section className='mb-12'>
						<h2 className='text-2xl font-semibold mb-4'>
							Top Paid Apps
						</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							{[
								'Free CAD Tools',
								'Open Source Plugins',
								'Community Contributed Scripts',
								'Educational 3D Assets',
							].map((item) => (
								<Card key={item} className='p-4'>
									<CardContent className='text-center font-medium'>
										{item}
									</CardContent>
								</Card>
							))}
						</div>
					</section>
					<section className='mb-12'>
						<h2 className='text-2xl font-semibold mb-4'>
							Top Free Apps
						</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							{[
								'Free CAD Tools',
								'Open Source Plugins',
								'Community Contributed Scripts',
								'Educational 3D Assets',
							].map((item) => (
								<Card key={item} className='p-4'>
									<CardContent className='text-center font-medium'>
										{item}
									</CardContent>
								</Card>
							))}
						</div>
					</section>

					<section className='text-center'>
						<h3 className='text-xl font-semibold mb-2'>
							Can&apos;t find what you need?
						</h3>
						<p className='text-gray-600 mb-4'>
							Submit a request for the software or resources
							you&apos;re looking for.
						</p>
						<Button className='bg-red-600 hover:bg-red-700'>
							Submit Request
						</Button>
					</section>
					<section></section>
				</main>

				<footer className='border-t text-sm text-gray-500 p-4 text-center'>
					<p>RED HAT ARCHITECTS LLC</p>
					<div className='flex justify-center gap-4 mt-1'>
						<Link href='#' className='hover:underline'>
							Terms
						</Link>
						<Link href='#' className='hover:underline'>
							Privacy
						</Link>
					</div>
				</footer>
			</div>
		</div>
  );
}
