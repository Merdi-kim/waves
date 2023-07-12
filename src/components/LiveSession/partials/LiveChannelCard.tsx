'use client'
import Image from 'next/image';
import { FC } from 'react';
import { FaWifi } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import formatNumber from '@/utils/formatNumber';
import {useRouter} from 'next/navigation';
import { useRecoilState } from 'recoil';
import { playbackID } from '@/lib/recoil';

type LiveProps = {
	playbackId:string,
	title:string
}

const LiveChannelCard:FC<LiveProps> = (props) => {
	const { playbackId, title } = props;
	const router = useRouter()
	const [_, setPlaybackId] = useRecoilState(playbackID)

	const goToLiveStream = () => {
		setPlaybackId(playbackId)
		router.push('/stream')
	}
	return (
		<div onClick={goToLiveStream} className="bg-slate-900 h-fit w-fit flex flex-col gap-6 rounded-3xl cursor-pointer">
			<div className="relative max-w-96 min-w-fit h-56 rounded-t-3xl">
				<Image
					src='/assets/dummy/profile-1.png'
					fill
					alt={title}
					className="rounded-t-3xl object-cover"
				/>
			</div>
			<div className="flex flex-col gap-5 px-5">
				<h2 className="text-2xl font-extrabold leading-6">{title}</h2>
				<div className="flex gap-3 items-center">
					<Image
						src='/assets/dummy/profile-1.png'
						alt="profile"
						width={50}
						height={50}
						className="rounded-full"
					/>
				</div>
			</div>
			<div className="flex justify-between items-center px-5 pb-5">
				<div className="flex gap-2 bg-primary px-5 py-2 rounded-3xl">
					<FaWifi className="w-6 h-6" />
					<p>Live</p>
				</div>
				{/*<div className="flex items-center gap-1">
					<div className="h-2 w-2 bg-blue-900 rounded-full" />
					{numberOfWatches !== 0 && formatNumber(numberOfWatches)}
					{numberOfWatches !== 0 && <span> watching</span>}
	</div>*/}
			</div>
	</div>
	);
};

export default LiveChannelCard;
