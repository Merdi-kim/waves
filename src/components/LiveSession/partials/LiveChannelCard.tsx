import Image from 'next/image';
import { FC } from 'react';
import { FaWifi } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import formatNumber from '@/utils/formatNumber';

type LiveChannelCardProps = {
	image_url: string;
	title: string;
	numberOfWatches: number;
	profile: {
		image: string;
		name: string;
	};
};

const LiveChannelCard: FC<LiveChannelCardProps> = (props) => {
	const { image_url, title, numberOfWatches, profile } = props;

	return (
		<div className="bg-slate-900 h-fit w-fit flex flex-col gap-6 rounded-3xl cursor-pointer">
			<div className="relative max-w-96 min-w-fit h-56 rounded-t-3xl">
				<Image
					src={image_url}
					fill
					alt={title}
					className="rounded-t-3xl object-cover"
				/>
			</div>
			<div className="flex flex-col gap-5 px-5">
				<h2 className="text-2xl font-extrabold leading-6">{title}</h2>
				<div className="flex gap-3 items-center">
					<Image
						src={profile.image}
						alt="profile"
						width={50}
						height={50}
						className="rounded-full"
					/>
					<div>
						<p className="flex items-center gap-3">
							{profile.name}
							<span>
								<BsCheckCircleFill className="text-green-500 w-6 h-6" />
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center px-5 pb-5">
				<div className="flex gap-2 bg-primary px-5 py-2 rounded-3xl">
					<FaWifi className="w-6 h-6" />
					<p>Live</p>
				</div>
				<div className="flex items-center gap-1">
					<div className="h-2 w-2 bg-blue-900 rounded-full" />
					{numberOfWatches !== 0 && formatNumber(numberOfWatches)}
					{numberOfWatches !== 0 && <span> watching</span>}
				</div>
			</div>
		</div>
	);
};

export default LiveChannelCard;
