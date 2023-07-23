'use client';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();

	return (
		<main>
			<div className="bg-[url('/assets/hero-bg.svg')] bg-opacity-30 bg-no-repeat bg-center bg-cover h-fit">
				<div className="h-36 w-full flex items-center justify-between max-w-[1140px] mx-auto">
					<div className="font-extrabold text-4xl">
						<h1 onClick={() => router.push('/')}>WAVE</h1>
					</div>

					<div className="flex gap-5 items-center font-bold">
						<Link href="/home" className="cursor-pointer">
							Home
						</Link>
						<Link href="#" className="cursor-pointer">
							About
						</Link>
						<Link href="#contact" className="cursor-pointer">
							Contact
						</Link>
						<button
							onClick={() => router.push('/home')}
							className="bg-[#BF1A1A] font-bold text-normal text-white rounded-3xl py-2 px-3"
						>
							Try for Free
						</button>
					</div>
				</div>

				<div className="max-w-[1140px] mx-auto">
					<div className="h-3/5 py-20 max-w-[100rem] mx-auto px-5 relative">
						<div>
							<h2 className="w-4/5 font-extrabold text-6xl mb-12 text-left">
								Censorship-resistant video streaming platform
							</h2>
							<div className="grid grid-cols-2 gap-3">
								<div>
									<p>
										Say goodbye to content restrictions and enjoy uninterrupted
										streaming. Our platform utilizes advanced encryption and
										decentralized technology to ensure your privacy and freedom
										of expression. Discover a wide range of diverse and
										uncensored content from creators worldwide. Join us today
										and experience true freedom in streaming.
									</p>
									<button
										onClick={() => router.push('/home')}
										className="bg-[#BF1A1A] font-bold text-normal text-white rounded-3xl py-2 px-3 mt-10"
									>
										Get started now
									</button>
								</div>
								<div className="flex -mt-20">
									<Image
										src="/assets/comment-streaming-1.png"
										alt="streaming demo"
										width={400}
										height={250}
									/>
									<Image
										src="/assets/watching-stream-1.png"
										alt="streaming demo"
										width={400}
										height={250}
										className="-ml-32"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="relative w-full h-fit">
				<Image
					src="/assets/hero-bg.svg"
					alt="hero-bg"
					fill
					className="object-cover"
				/>
				<div className="w-full h-fit backdrop-blur-lg">
					<div className="max-w-[1140px] mx-auto py-32">
						<h1 className="uppercase text-5xl font-bold text-center">
							How does it work?
						</h1>
						<div className="flex justify-between mt-32">
							<div className="flex flex-col justify-center items-center gap-7">
								<Image
									src="/assets/sign-up.svg"
									alt="sign-vector"
									width={100}
									height={100}
								/>
								<div className="max-w-[250px] text-center">
									<p className="font-bold mb-5">Sign up</p>
									<p>It&apos;s simple to sign up with a few simple stampes</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center gap-7">
								<Image
									src="/assets/air-play.svg"
									alt="sign-vector"
									width={100}
									height={100}
								/>
								<div className="max-w-[250px] text-center">
									<p className="font-bold mb-5">Stream</p>
									<p>Stream videos of your liking and enjoy for free</p>
								</div>
							</div>
							<div className="flex flex-col justify-center items-center gap-7">
								<Image
									src="/assets/Upload.svg"
									alt="sign-vector"
									width={100}
									height={100}
								/>
								<div className="max-w-[200px] text-center">
									<p className="font-bold mb-5">Upload videos</p>
									<p>Upload videos for your audience</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="flex justify-between items-center py-32 max-w-[1140px] mx-auto">
					<p className="flex flex-col gap-10">
						<span className="text-5xl font-bold">
							MAKE THE RIGHT
							<br /> MOVE,
						</span>
						<span className="text-2xl">
							With simplified steps this is the right move
						</span>
					</p>
					<button className="bg-[#BF1A1A] font-bold text-normal text-white rounded-3xl py-3 px-10 mt-10">
						Get started now
					</button>
				</div>
			</div>
			<div className="relative w-full h-fit">
				<Image
					src="/assets/hero-bg.svg"
					alt="hero-bg"
					fill
					className="object-cover"
				/>
				<div className="w-full h-fit backdrop-blur-lg">
					<div className="max-w-[1140px] mx-auto py-32">
						<h1 className="text-5xl font-bold text-center">
							Watch All your Best
						</h1>
						<div className="relative h-[514px] max-w-[1088px] w-auto mt-12">
							<Image src="/assets/show-all.png" alt="show all" fill />
						</div>
					</div>
				</div>
			</div>

			{/*<div className="w-full h-fit">
				<div className="max-w-[1140px] mx-auto py-32">
					<h1 className="uppercase text-5xl font-bold text-center">Why wave</h1>
					<div className="bg-gray-100 rounded-3xl p-10 mt-10 grid grid-cols-3 gap-20">
						<div className="text-center">
							<h3 className="font-bold text-3xl mb-5">Live Streaming</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
							</p>
						</div>
						<div className="text-center">
							<h3 className="font-bold text-3xl mb-5">In Live Mesh</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
							</p>
						</div>
						<div className="text-center">
							<h3 className="font-bold text-3xl mb-5">Storage for everthing</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
							</p>
						</div>
						<div className="text-center">
							<h3 className="font-bold text-3xl mb-5">Chat on demand</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
							</p>
						</div>
						<div className="text-center">
							<h3 className="font-bold text-3xl mb-5">Follow Friends</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
							</p>
						</div>
					</div>
				</div>
	        </div>*/}
			<Footer />
		</main>
	);
}
