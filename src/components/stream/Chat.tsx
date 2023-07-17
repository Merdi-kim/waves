import { BsEmojiSmile } from 'react-icons/bs';
import { RiSendPlane2Line } from 'react-icons/ri';
import { MdOutlineClose } from 'react-icons/md';

const Chat = ({ isCreator = false }: { isCreator?: boolean }) => {
	return (
		<div
			className={`relative ${
				isCreator ? 'bg-[#222323]/50' : 'bg-[#222323]'
			}  h-full w-full rounded-2xl`}
		>
			<div className="flex justify-between px-5 py-8 border-b border-gray-600">
				<h2 className="text-2xl font-bold flex gap-2 items-center">
					Chat
					<span className="border border-gray-400 text-sm px-2 rounded-lg">
						Everyone
					</span>
				</h2>

				<MdOutlineClose className="w-7 h-7 text-white" />
			</div>
			<div
				className={`absolute bottom-0 md:bottom-8 md:rounded-2xl w-full md:w-[95%] md:ml-5 mx-auto md:px-3 md:px-10 ${
					isCreator ? 'bg-black/60' : 'bg-black '
				} py-3 md:py-5 px-3 md:px-0 flex justify-between items-center`}
			>
				<input
					type="text"
					placeholder="Send a Message to everyone"
					className="bg-transparent w-full md:py-4 pr-4 md:pr-0 outline-none"
				/>
				<div className="flex gap-2">
					<BsEmojiSmile className="w-6 h-6" />
					<RiSendPlane2Line className="w-6 h-6" />
				</div>
			</div>
		</div>
	);
};

export default Chat;
