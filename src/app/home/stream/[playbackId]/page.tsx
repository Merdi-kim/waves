'use client';
import Chat from '@/components/stream/Chat';
import StreamingFooter from '@/components/stream/StreamingFooter';
import { LuUsers } from 'react-icons/lu';
import { PiUploadSimpleBold } from 'react-icons/pi';
import {
	LivepeerConfig,
	Player,
	ThemeConfig,
	createReactClient,
	studioProvider,
} from '@livepeer/react';
import { useRouter } from 'next/navigation';

const client = createReactClient({
	provider: studioProvider({ apiKey: 'yourStudioApiKey' }),
});

const livepeerTheme: ThemeConfig = {
	colors: {
		accent: 'rgb(0, 145, 255)',
		containerBorderColor: 'rgba(0, 145, 255, 0.9)',
	},
	fonts: {
		display: 'Inter',
	},
};

const page = ({ params }: { params: { playbackId: string } }) => {
	const router = useRouter();

	return (
		<LivepeerConfig client={client} theme={livepeerTheme}>
			<div className="h-screen overflow-hidden">
				<div className="justify-between flex items-center px-10 w-full pt-10">
					<h1 className="text-3xl text-black uppercase font-bold">Wave</h1>
					<div className="flex items-center gap-3">
						<div className="flex items-center gap-2 mr-10">
							<div className="h-2 bg-primary rounded-full w-2" />
							<span className="text-xl">Live</span>
						</div>
						<div className="flex items-center gap-3 text-black border rounded-xl border-black p-2">
							<LuUsers className="w-6 h-6" /> <span className="text-xl">6</span>
						</div>
						<div
							onClick={() => router.replace('/home')}
							className="flex items-center gap-2 bg-primary px-3 py-2.5 rounded-lg cursor-pointer"
						>
							<PiUploadSimpleBold className="w-6 h-6 rotate-90 cursor-pointer" />
							<p>End the stream</p>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-12 grid-rows-5 h-screen pb-56 pt-10 gap-x-10 px-10">
					<div className="col-span-8 row-span-5 h-full w-full flex items-center rounded-2xl overflow-hidden">
						<Player
							title="Waterfalls"
							playbackId={params.playbackId}
							autoPlay
							showTitle={false}
							showPipButton
							//poster={<PosterImage />}
						/>
					</div>
					<div className="row-span-5 col-span-4">
						<Chat />
					</div>
				</div>
				<StreamingFooter />
			</div>
		</LivepeerConfig>
	);
};

export default page;
