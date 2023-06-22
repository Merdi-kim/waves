import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<div className="h-36 w-full">
				<div className="h-20 w-full flex items-center justify-evenly">
					<div></div>
					<div className="font-extrabold text-3xl">
						<i>Waves</i>
					</div>
					<button className="w-32 h-8 bg-blue-950 text-white">
						Try for Free
					</button>
				</div>
				<div className="h-16 px-28">
					<div className="">
						<span className="px-10">Home</span>
						<span className="px-10">About</span>
						<span className="px-10">Contact</span>
					</div>
				</div>
			</div>
			<div className="h-[calc(100vh-9rem)] ">
				<div className="h-3/5 w-5/6 py-20 px-28">
					<h2 className="font-extrabold text-6xl mb-12">
						Censorship-resistant video streaming platform
					</h2>
					<p className="w-4/6">
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
				<div className="h-2/5 px-28 bg-[url('/assets/wave.svg')] bg-cover mt-5 w-full">
					<button className="w-32 h-8 mx-4 bg-blue-950 text-white hover:border-2 hover:border-blue-950 hover:bg-white hover:text-black ">
						Try
					</button>
					<button className="w-32 h-8 mx-4 border-2 border-blue-950 hover:bg-blue-950 hover:text-white">
						Learn more
					</button>
				</div>
			</div>
		</main>
	);
}
