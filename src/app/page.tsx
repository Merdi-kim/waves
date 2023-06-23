
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
				<div className="h-2/5 px-28 bg-[url('/assets/wave.svg')] bg-cover mt-5 w-full">
					<button className="w-32 h-8 mx-4 bg-blue-950 text-white hover:border-2 hover:border-blue-950 hover:bg-white hover:text-black ">
						Try
					</button>
					<button className="w-32 h-8 mx-4 border-2 border-blue-950 hover:bg-blue-950 hover:text-white">
						Learn more
					</button>
				</div>
			</div>
			<div className="flex flex-col items-center w-full mt-20">
				<div className="w-11/12 md:w-9/12 lg:w-6/12 flex items-center my-4">
					<div className="w-5/6">
						<h3 className="text-2xl font-bold mb-4">
							A virtual stage for everything
						</h3>
						<p className="text-sm">
							Step into our virtual world and experience the thrill of live
							performances, exhibitions, workshops, and so much more, all from
							the comfort of your own home. No longer limited by physical
							boundaries, our virtual stage breaks down barriers and brings
							people together from every corner of the globe.
						</p>
					</div>
					<img
						src="/assets/undraw1.svg"
						alt=""
						className="w-[200px] h-[200px] m-2"
					/>
				</div>
				<div className="w-11/12 md:w-9/12 lg:w-6/12 flex items-center my-4">
					<img
						src="/assets/undraw1.svg"
						alt=""
						className="w-[200px] h-[200px] m-2"
					/>
					<div className="w-5/6">
						<h3 className="text-2xl font-bold mb-4">
							Encrypted chat on-demand
						</h3>
						<p className="text-sm">
							SEnd-to-end encryption guarantees that only you and the intended
							recipients can access the messages exchanged. This means that not
							even our platform administrators or any third parties can decipher
							or intercept your communications. Your data remains confidential
							and inaccessible to anyone else.
						</p>
					</div>
				</div>
				<div className="w-11/12 md:w-9/12 lg:w-6/12 flex items-center my-4">
					<div className="w-5/6">
						<h3 className="text-2xl font-bold mb-4">
							Follow the creators you love
						</h3>
						<p className="text-sm">
							Our platform is designed to foster a symbiotic relationship
							between creators and their fans, cultivating a vibrant ecosystem
							where creativity thrives. Together, we celebrate the power of art
							and honor the journeys of those who bring it to life.
						</p>
					</div>
					<img
						src="/assets/undraw1.svg"
						alt=""
						className="w-[200px] h-[200px] m-2"
					/>
				</div>
				<div className="w-11/12 md:w-9/12 lg:w-6/12 flex items-center my-4">
					<img
						src="/assets/undraw1.svg"
						alt=""
						className="w-[200px] h-[200px] m-2"
					/>
					<div className="w-5/6">
						<h3 className="text-2xl font-bold mb-4">In live merch</h3>
						<p className="text-sm">
							Immerse yourself in the live stream and explore the merchandise
							offerings seamlessly, all within the same app. No need to navigate
							to external websites or wait for separate purchasing processes.
							It's a convenient and integrated shopping experience designed to
							enhance your enjoyment while supporting the creators you love.
						</p>
					</div>
				</div>
			</div>
			<div className="h-40 w-full flex items-center justify-center">
				<button className="w-44 h-8 mx-4 bg-blue-950 text-white hover:border-2 hover:border-blue-950 hover:bg-white hover:text-black ">
					Try it today
				</button>
			</div>
			<div className="h-52 w-full bg-blue-100"></div>
				<div className="w-full flex justify-center h-fit max-w-[100rem] gap-5 mx-auto px-5">
					<Button variant="primary" title="Try" />
					<Button variant="secondary" title="Learn more" />
				</div>
				<div className="h-2/5 bg-[url('/assets/wave.svg')] bg-cover mt-5 gap-4"></div>
			<Footer />
		</main>
	);
}
