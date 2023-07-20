'use client';

import Image from 'next/image';
import { FC } from 'react';
import { FaWifi } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

type LiveProps = {
	playbackId: string;
	title: string;
};

const LiveChannelCard: FC<LiveProps> = (props) => {
	const { playbackId, title } = props;
	const router = useRouter();

	const goToLiveStream = () => {
		router.push(`/home/stream/${playbackId}`);
	};
	return (
		<div
			onClick={goToLiveStream}
			className="bg-slate-200 h-fit min-w-[350px] flex flex-col gap-2 rounded-3xl p-2 cursor-pointer"
		>
			<div className="flex justify-between px-2">
				<Image
					src="/assets/dummy/profile-1.png"
					alt="profile"
					width={50}
					height={50}
					className="rounded-full"
				/>
				<div className="flex items-center bg-primary h-7 px-2 py-3 rounded-3xl">
					<FaWifi className="w-6 h-6 mr-2" />
					<span>Live</span>
				</div>
			</div>
			<h2 className="text-xl w-full text-center font-semibold leading-6">
				{title}
			</h2>
		</div>
	);
};

export default LiveChannelCard;
