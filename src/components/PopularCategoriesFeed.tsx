import Image from 'next/image';

function PopularCategoriesFeed() {
	const dummyChannels = Array(4).fill('');

	return (
		<div className="w-full my-10 flex md:flex-row flex-col px-5 md:px-0">
			<div className='w-full md:w-4/12 mr-4 bg-[url("/assets/dummy/thumbnail.jpeg")] object-cover rounded-lg'>
				<div className="h-full w-full flex items-end bg-opacity-40 bg-white rounded-lg">
					<div className="md:ml-20 px-2 md:px-0">
						<h3 className="mt-5 font-semibold">Call of Duty</h3>
						<h2 className="font-bold text-3xl mb-5">Warzone 2.0</h2>
						<p className="text-xs my-2">
							<span className="font-bold">42k</span> followers
						</p>
						<button className="my-8 bg-violet-600 font-bold px-6 py-1 rounded-lg hover:bg-violet-800">
							Follow
						</button>
					</div>
				</div>
			</div>
			<div className="w-full md:w-7/12 mt-5 md:mt-0 h-full flex flex-col justify-between">
				{dummyChannels.map((name, index) => (
					<div key={index} className="w-full flex">
						<Image
							height={20}
							width={20}
							src="/assets/dummy/thumbnail.jpeg"
							alt="channel"
							className="md:h-[12vh] md:w-[8vw] h-[70px] w-[70px] object-cover rounded-lg"
						/>
						<div className="ml-4 my-1 md:my-3">
							<h2 className="font-bold text-xl md:text-lg">
								The mystery of Hayden
							</h2>
							<p className="text-xs my-2">
								<span className="font-bold">42k</span> followers
							</p>
							<button className="w-20 h-7 bg-white rounded-lg text-black text-sm font-bold">
								Follow
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default PopularCategoriesFeed;
