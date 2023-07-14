const ReelCard = ({ reel }: { reel: any }) => {
	return (
		<div className="flex-none w-[250px] md:w-[200px] m-2 rounded-lg">
			<video
				className="h-[300px] w-[250px] bg-gray-500 rounded-lg object-cover"
				id="reel"
				controls
				src={`https://arweave.net/${reel.reelTxId}`}
			></video>
			<p className="line-clamp-2 pl-1">{reel.title}</p>
		</div>
	);
};

export default ReelCard;
