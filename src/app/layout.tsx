import './globals.css';
import 'react-multi-carousel/lib/styles.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Waves',
	description: 'Decentralize the creator economy',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body suppressHydrationWarning className={inter.className}>
				{children}
			</body>
		</html>
	);
}
