import Image from 'next/image';
import LiveChannelCard from './partials/LiveChannelCard';
import { FaWifi } from 'react-icons/fa';
import { AxiosResponse } from 'axios';
import { useRecoilState } from 'recoil';
import { playbackID } from '@/lib/recoil';
import { useRouter } from 'next/navigation';

function LiveSession({streams}:{streams:AxiosResponse<any, any> | undefined;}) {

	const [_, setPlaybackId] = useRecoilState(playbackID)
	const router = useRouter()

	return (
		<div className="my-10">
			{ streams?.length > 0 && (
				<h1 className="text-3xl font-bold mb-10">Live Channels</h1>
			)}
			<div className="grid grid-cols-3 gap-3 gap-y-10">
				{streams?.map((live: any, index) => {
					console.log(live)
					return (
						<div key={index} onClick={() => {setPlaybackId(live.playbackId); router.push('/stream') }}>here click</div>
						/*<LiveChannelCard
							key={`live-channel-${index}`}
							playbackId={live.playbackId}
							title={live.name}
					    />*/
					);
				})}
			</div>
			<div className="bg-slate-900 px-10 rounded-3xl mt-10 py-5">
				<h1 className="text-3xl font-bold mb-5">From channels you follow</h1>
				<div className="flex items-center gap-4 w-full overflow-x-auto">
					{Array.from({ length: 12 }).map((_, index) => {
						return (
							<div
								key={`from-followed-channels-${index}`}
								className="relative w-[100px] flex-shrink-0"
							>
								<div className="flex flex-col justify-center items-center">
									<div className="border-[0.1875rem] border-blue-600 p-1 w-fit h-fit rounded-full">
										<Image
											src="/assets/dummy/profile-2.jpeg"
											width={100}
											height={100}
											className="rounded-full"
											alt="profile"
										/>
									</div>
									<p className="mt-2 text-gray-500">14min ago</p>
								</div>
								<div className="bg-primary absolute w-fit h-fit p-1 rounded-full top-5 right-0">
									<FaWifi className="w-3 h-3" />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default LiveSession;
