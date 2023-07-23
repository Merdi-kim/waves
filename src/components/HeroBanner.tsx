import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LiveIndicator from './ui/LiveIndicator';

function HeroBanner({ reel }: { reel: any }) {
	const [playVideo, setPlayVideo] = useState(false);

	const watchVideo = () => {
		const vid = document.getElementById('herobannerVideo');
		// @ts-ignore
		vid?.play();
		setPlayVideo(true);
	};

	return (
		<div className=" sm:ml-8 rounded-lg overflow-hidden w-full sm:w-[calc(100%-2rem)] h-[50vh] relative">
			<video
				src={`https://arweave.net/${reel?.reelTxId}`}
				className="w-full h-full object-cover"
				id="herobannerVideo"
			/>
			{!playVideo && (
				<div className="w-full h-full absolute top-0 left-0 flex flex-row items-end md:p-2 lg:p-10 bg-opacity-90 bg-neutral-700">
					<div className="ml-2 xl:ml-44 md:w-1/2 w-full p-2">
						<h2 className="font-bold text-white text-3xl mb-5">
							{reel?.title}
						</h2>
						<button
							onClick={watchVideo}
							className="my-8 bg-violet-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-violet-800"
						>
							Watch
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default HeroBanner;
