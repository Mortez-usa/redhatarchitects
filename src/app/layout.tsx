import type { Metadata } from 'next';
import {
	ClerkProvider,
} from '@clerk/nextjs';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export const metadata: Metadata = {
	title: 'Red Hat Architects',
	description: 'Architects app store',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider publishableKey={publishableKey}><html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased mx-54`}>
					<header>

					</header>
				{children}
			</body>
		</html>
		</ClerkProvider>
);
}
