import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';

export default function Home() {
	return (
		<main>
			<div className="h-36 w-full">
				<div className="h-20 w-full flex items-center justify-between max-w-[100rem] mx-auto px-5">
					<div></div>
					<div className="font-extrabold text-3xl">
						<i>Waves</i>
					</div>
					<Button title="Try for Free" />
				</div>
				<div className="h-16 max-w-[100rem] mx-auto px-5">
					<div className="flex gap-32">
						<span className="cursor-pointer">Home</span>
						<span className="cursor-pointer">About</span>
						<span className="cursor-pointer">Contact</span>
					</div>
				</div>
			</div>
			<div className="h-[calc(100vh-9rem)]">
				<div className="h-3/5 py-20 max-w-[100rem] mx-auto px-5">
					<h2 className="w-4/5 font-extrabold text-6xl mb-12 text-left">
						Censorship-resistant video streaming platform
					</h2>
					<p className="w-2/4">
						<i>
							Say goodbye to content restrictions and enjoy uninterrupted
							streaming. Our platform utilizes advanced encryption and
							decentralized technology to ensure your privacy and freedom of
							expression. Discover a wide range of diverse and uncensored
							content from creators worldwide. Join us today and experience true
							freedom in streaming.
						</i>
					</p>
				</div>
				<div className="w-full flex h-fit max-w-[100rem] gap-5 mx-auto px-5">
					<Button variant="primary" title="Try" />
					<Button variant="secondary" title="Learn more" />
				</div>
				<div className="h-2/5 bg-[url('/assets/wave.svg')] bg-cover mt-5 gap-4"></div>
			</div>
			<Footer />
		</main>
	);
}
