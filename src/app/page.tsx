import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Red Hat Architects</title>
			</Head>

			<header className='flex justify-between items-center px-8 py-4 shadow-md bg-white'>
				<div className='flex items-center space-x-2'>
					<div className='bg-red-600 w-4 h-4'></div>
					<span className='text-xl font-bold'>
						Red Hat Architects
					</span>
				</div>
				<nav className='space-x-6 text-sm font-medium'>
					<Link href='/'>Home</Link>
					<Link href='about'>About</Link>
					<Link href='projects'>Projects</Link>
					<Link href='contact'>Contact</Link>
				</nav>
			</header>

			<section className='relative h-[80vh] bg-gray-100 flex items-center justify-center text-white text-center'>
				<Image
					src='/modern-house.jpg'
					alt='Modern House'
					layout='fill'
					objectFit='cover'
					className='z-0'
				/>
				<div className='z-10 bg-black bg-opacity-50 p-6 rounded'>
					<h1 className='text-4xl font-bold mb-4'>
						AI-Powered Architectural Solutions
					</h1>
					<p className='mb-6'>
						Harnessing Artificial Intelligence for Innovative Design
					</p>
					<Link
						href='#projects'
						className='bg-red-600 text-white px-4 py-2 rounded'>
						View Our Work
					</Link>
				</div>
			</section>

			<section
				id='projects'
				className='px-8 py-12 bg-white grid md:grid-cols-2 gap-8'>
				<div className='flex flex-col items-center text-center'>
					<Image
						src='/project-icon.png'
						alt='Projects'
						width={100}
						height={100}
					/>
					<h2 className='text-2xl font-bold mt-4 mb-2'>Projects</h2>
					<p>
						Discover our portfolio of cutting-edge architectural
						designs created with the power of AI
					</p>
				</div>
				<div className='flex flex-col items-center text-center'>
					<Image
						src='/brain-icon.png'
						alt='About AI'
						width={100}
						height={100}
					/>
					<h2 className='text-2xl font-bold mt-4 mb-2'>About</h2>
					<p>
						Learn more about our approach to integrating artificial
						intelligence in the field of architecture
					</p>
				</div>
			</section>

			<section
				id='contact'
				className='bg-gray-100 px-8 py-12 text-center'>
				<h2 className='text-2xl font-bold mb-2'>Get in Touch</h2>
				<p className='mb-4'>
					Interested in our AI-driven architectural services? Reach
					out to us to discuss your project.
				</p>
				<Link
					href='#'
					className='bg-red-600 text-white px-6 py-2 rounded'>
					Contact Us
				</Link>
			</section>

			<footer className='bg-red-600 h-2'></footer>
		</div>
	);
}
