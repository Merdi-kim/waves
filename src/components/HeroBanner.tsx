import Image from 'next/image';
import Link from 'next/link';
import LiveIndicator from './ui/LiveIndicator';

const HeroBanner = () => {
	const dummyLives = Array(4).fill(4);

	return (
		<div className='w-full h-[60vh] bg-[url("/assets/dummy/thumbnail.jpeg")] bg-cover relative'>
			<div className="w-full h-full flex-col flex md:flex-row items-end md:p-2 lg:p-10 bg-opacity-60 bg-slate-200">
				<div className="ml-2 xl:ml-44 md:w-1/2 w-full p-2">
					<LiveIndicator />
					<h3 className="mt-5 font-semibold">Call of Duty</h3>
					<h2 className="font-bold text-3xl mb-5">Warzone 2.0</h2>
					<div className="flex items-center">
						<Image
							height={20}
							width={20}
							src={'/assets/dummy/fakeProfile.jpeg'}
							className="h-10 w-10 mr-3 border-2 border-white rounded-[50%]"
							alt="new"
						/>
						<span>Warzone, US English</span>
					</div>
					<button className="my-8 bg-violet-600 font-bold px-6 py-2 rounded-lg hover:bg-violet-800">
						Watch
					</button>
				</div>
				<div className="h-44 w-full flex items-center overflow-x-auto">
					{dummyLives.map((live, index) => (
						<Link href={'/nv'} key={index} className="shrink-0">
							<Image
								height={30}
								width={30}
								src={'/assets/dummy/thumbnail.jpeg'}
								className="h-20 w-32 object-cover mx-4 rounded-lg"
								alt="live thumbnail"
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
