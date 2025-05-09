import {
	ClerkProvider,
} from '@clerk/nextjs';
import Nav from '../../components/nav/page';

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function Pageslayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider publishableKey={publishableKey}>
			<Nav />
			{children}
		</ClerkProvider>
	);
}
