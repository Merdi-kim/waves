import Image from 'next/image';
import { FC } from 'react';
import { FaWifi } from 'react-icons/fa';

interface LiveChannelCardProps {
	image_url: string;
	title: string;
	liveTitle: string;
	numberOfWatches: number;
	profile: {
		image: string;
		name: string;
	};
}

const LiveChannelCard: FC<LiveChannelCardProps> = (props) => {
	const { image_url, title, liveTitle, numberOfWatches, profile } = props;

	return (
		<div>
			<div className="relative">
				<Image src={image_url} fill alt={title} />
			</div>
			<div>
				<h2>{title}</h2>
				<div>
					<Image src={profile.image} alt="profile" width={30} height={30} />
					<div>
						<p>{profile.name}</p>
						<p>{liveTitle}</p>
					</div>
				</div>
			</div>
			<div>
				<div>
					<FaWifi className="w-6 h-6" />
					<p>Live</p>
				</div>
				<p>
					{numberOfWatches}
					<span>watching</span>
				</p>
			</div>
		</div>
	);
};

export default LiveChannelCard;
