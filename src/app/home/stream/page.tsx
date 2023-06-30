import Chat from '@/components/stream/Chat';
import StreamingFooter from '@/components/stream/StreamingFooter';
import { LuUsers } from 'react-icons/lu';
import { PiUploadSimpleBold } from 'react-icons/pi';

const page = () => {
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
					<div className="flex items-center gap-2 bg-primary px-3 py-2.5 rounded-lg">
						<PiUploadSimpleBold className="w-6 h-6 rotate-90 cursor-pointer" />
						<p>End the stream</p>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-5 grid-rows-5 h-screen pb-56 pt-10 gap-x-10 px-10">
				<video
					src="/assets/video/coding-video.mkv"
					autoPlay
					className="col-span-3 row-span-5 h-full w-full object-cover rounded-2xl"
				/>
				<div className="row-span-5 col-span-2">
					<Chat />
				</div>
			</div>
			<StreamingFooter />
		</div>
	);
};

export default page;
