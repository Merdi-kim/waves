import {
	PiMicrophoneSlash,
	PiVideoCameraLight,
	PiUploadSimpleBold,
} from 'react-icons/pi';

import { LuCopy } from 'react-icons/lu';
import { BsThreeDotsVertical, BsChatLeft } from 'react-icons/bs';
import { HiOutlineHandRaised } from 'react-icons/hi2';

const StreamingFooter = () => {
	return (
		<div className="text-white fixed bottom-0 w-full flex justify-between items-center">
			<div className="flex items-center gap-5">
				<PiMicrophoneSlash className="w-6 h-6 cursor-pointer" />
				<PiVideoCameraLight className="w-6 h-6 cursor-pointer" />
			</div>
			<div className="flex items-center gap-5">
				<PiUploadSimpleBold className="w-6 h-6 cursor-pointer" />
				<BsThreeDotsVertical className="w-6 h-6 cursor-pointer" />
				<LuCopy className="w-6 h-6" />
				<div className="flex items-center gap-2 bg-primary px-3 py-2 rounded-lg">
					<PiUploadSimpleBold className="w-6 h-6 rotate-90 cursor-pointer" />
					<p>End the stream</p>
				</div>
			</div>
			<div className="flex items-center gap-5">
				<HiOutlineHandRaised className="w-6 h-6 cursor-pointer" />
				<BsChatLeft className="w-6 h-6 cursor-pointer" />
			</div>
		</div>
	);
};

export default StreamingFooter;
