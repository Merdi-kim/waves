import Chat from '@/components/stream/Chat';
import StreamingFooter from '@/components/stream/StreamingFooter';
import { useCreateStream } from '@livepeer/react';
import { Client } from '@livepeer/webrtmp-sdk';
//import { useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react';
import { LuUsers } from 'react-icons/lu';
import { PiUploadSimpleBold } from 'react-icons/pi';

const CreatorStream = ({ streamName }: { streamName: string }) => {
	//const router = useRouter()
	const { mutate: createStream, data: streamData } = useCreateStream({
		name: streamName,
	});
	const videoEl = useRef(null);
	const stream = useRef(null);

	useEffect(() => {
		createStream?.();
		(async () => {
			//@ts-ignore
			videoEl.current.volume = 0;

			//@ts-ignore
			stream.current = await navigator.mediaDevices.getUserMedia({
				video: true,
				audio: true,
			});

			//@ts-ignore
			videoEl.current.srcObject = stream.current;
			//@ts-ignore
			videoEl.current.play();
		})();
	}, []);

	const startStream = async () => {
		if (!stream.current) {
			alert('Video stream was not started.');
		}

		if (!streamData?.streamKey) {
			alert('Invalid streamKey.');
			return;
		}

		const client = new Client();

		//@ts-ignore
		const session = client.cast(stream.current, streamData.streamKey);

		session.on('open', () => {
			console.log('Stream started.');
			alert('Stream started; visit Livepeer Dashboard.');
		});

		session.on('close', () => {
			console.log('Stream stopped.');
		});

		session.on('error', (err) => {
			console.log('Stream error.', err.message);
		});
	};

	return (
		<div className="h-screen overflow-hidden">
			<div className="justify-between flex items-center px-10 w-full pt-10">
				<h1 className="text-3xl text-white uppercase font-bold">Wave</h1>
				<div className="flex items-center gap-3">
					<div className="flex items-center gap-2 mr-10">
						<div className="h-2 bg-primary rounded-full w-2" />
						<span className="text-xl">Live</span>
					</div>
					<div className="flex items-center gap-3 text-white border rounded-xl border-white/50 p-2">
						<LuUsers className="w-6 h-6" /> <span className="text-xl">6</span>
					</div>
					<div
						onClick={/*() => router.replace('/home')*/ startStream}
						className="flex items-center gap-2 bg-primary px-3 py-2.5 rounded-lg cursor-pointer"
					>
						<PiUploadSimpleBold className="w-6 h-6 rotate-90 cursor-pointer" />
						<p>Start stream</p>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 grid-rows-5 h-screen pb-56 pt-10 gap-x-10 px-10">
				<div className="col-span-12 row-span-5 h-full w-full flex items-center rounded-2xl overflow-hidden relative">
					<video className="App-video h-full w-full" ref={videoEl} />
					<div className="absolute right-0 top-0 z-50 w-[30%] h-full">
						<Chat isCreator={true} />
					</div>
				</div>
			</div>
			<StreamingFooter />
		</div>
	);
};

export default CreatorStream;
