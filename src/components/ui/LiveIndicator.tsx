import Image from 'next/image';

const LiveIndicator = () => {
	return (
		<div className="w-20 py-2 flex justify-center items-center bg-red-500 rounded-xl">
			<Image
				height={20}
				width={20}
				src='/assets/live.svg'
				className="h-5 w-5 mr-2"
				alt="live"
			/>
			<span>Live</span>
		</div>
	);
};

export default LiveIndicator;
