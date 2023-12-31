import {
	PiMicrophoneSlash,
	PiVideoCameraLight,
	PiUploadSimpleBold,
} from 'react-icons/pi';

import { LuCopy } from 'react-icons/lu';
import { BsThreeDotsVertical, BsChatLeft } from 'react-icons/bs';
import { HiOutlineHandRaised } from 'react-icons/hi2';
import { useRouter } from 'next/navigation';

function StreamingFooter() {
	const router = useRouter();

	return (
		<div className="text-black fixed bottom-0 w-full flex justify-between items-center px-4 md:px-10 pb-5 md:pb-10">
			<div className="flex md:flex-row flex-col items-center gap-5">
				<PiMicrophoneSlash className="w-6 h-6 cursor-pointer" />
				<PiVideoCameraLight className="w-6 h-6 cursor-pointer" />
			</div>
			<div className="flex items-center gap-5">
				<PiUploadSimpleBold className="w-6 h-6 cursor-pointer hidden md:block" />
				<BsThreeDotsVertical className="w-6 h-6 cursor-pointer hidden md:block" />
				<LuCopy className="w-6 h-6 hidden md:block" />
				<div
					onClick={() => router.replace('/home')}
					className="flex items-center gap-2 bg-primary px-3 py-2 rounded-lg cursor-pointer"
				>
					<PiUploadSimpleBold className="w-6 h-6 rotate-90 cursor-pointer" />
					<p>End the stream</p>
				</div>
			</div>
			<div className="flex items-center gap-5">
				<HiOutlineHandRaised className="w-6 h-6 cursor-pointer hidden md:block" />
				<BsChatLeft className="w-6 h-6 cursor-pointer" />
			</div>
		</div>
	);
}

export default StreamingFooter;
