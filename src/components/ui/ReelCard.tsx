function ReelCard({ reel }: { reel: any }) {
	return (
		<div className="flex flex-col gap-2 rounded-lg ml-4">
			<div className="w-full h-[18.75rem] relative p-2 rounded-lg shrink-0">
				<video
					className="absolute z-10 w-auto
				min-w-full min-h-full max-w-full rounded-lg"
					id="reel"
					controls
					src={`https://arweave.net/${reel.reelTxId}`}
				/>
			</div>
			<p className="line-clamp-2 w-full py-8 pl-2 max-w-[31rem]">
				{reel.title}
			</p>
		</div>
	);
}

export default ReelCard;
