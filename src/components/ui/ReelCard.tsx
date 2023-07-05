import { useEffect } from 'react';

const ReelCard = ({ reel }: { reel: any }) => {
	return (
		<div className="flex-none w-[250px] m-2 rounded-lg">
			<video
				className="h-[300px] w-[250px] bg-gray-500 rounded-lg"
				id="reel"
			></video>
			<p className="line-clamp-2 pl-1">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
				maiores similique voluptates reprehenderit recusandae nobis corrupti
				accusantium ipsam iste architecto in totam autem excepturi maxime,
				dolorum sapiente quis asperiores quibusdam.
			</p>
		</div>
	);
};

export default ReelCard;
