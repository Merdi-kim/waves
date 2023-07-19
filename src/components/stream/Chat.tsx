import { BsEmojiSmile } from 'react-icons/bs';
import { RiSendPlane2Line } from 'react-icons/ri';
import { MdOutlineClose } from 'react-icons/md';
import { useCallback, useEffect, useState } from 'react';
import liveStreamService, { Message } from '@/utils/liveStreamService';
import { useRecoilValue } from 'recoil';
import { selectedHandle } from '@/lib/recoil';

function Chat({
	isCreator = false,
	liveStreamId,
}: {
	isCreator?: boolean;
	liveStreamId?: string;
}) {
	const [conversation, setConversation] = useState<Message[]>([]);
	const [inputMessage, setInputMessage] = useState<string>('');
	const user = useRecoilValue(selectedHandle);

	const updateConversation = async () => {
		const messageToSet: Message = {
			fromName: user || 'unknown',
			message: inputMessage,
		};
		setInputMessage('');

		// save the message to waveDB
		const err = await liveStreamService.setMessage({
			messageToSend: messageToSet,
			liveStreamId: liveStreamId!,
		});
		setConversation((prev) => [...prev, messageToSet]);
		console.log({ err });
	};

	const retrieveConversation = useCallback(async () => {
		const result = await liveStreamService.getMessage(liveStreamId || '');
		if (result?.error) return console.log({ error: result.error });
		console.log({ data: result?.data });
	}, [liveStreamId]);

	useEffect(() => {
		void retrieveConversation();
	}, [retrieveConversation]);

	return (
		<div
			className={`relative ${
				isCreator ? 'bg-[#222323]/50' : 'bg-[#222323]'
			}  h-full w-full rounded-2xl flex flex-col`}
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
			<div className="overflow-y-auto h-full pb-40 px-5 pt-10 space-y-2">
				{conversation?.map((message, index) => (
					<div
						key={`live-stream-conversation-${index}`}
						className="bg-black border border-primary/20 w-fit p-2 rounded-2xl flex flex-col gap-1.5"
					>
						<span className="text-sm font-bold">{message.fromName}</span>
						{message.message}
					</div>
				))}
			</div>
			<div
				className={`absolute bottom-0 md:bottom-8 md:rounded-2xl w-full md:w-[95%] md:ml-5 mx-auto md:px-3 md:px-10 ${
					isCreator ? 'bg-black/60' : 'bg-black '
				} py-3 md:py-5 px-3 md:px-0 flex justify-between items-center`}
			>
				<input
					type="text"
					value={inputMessage}
					placeholder="Send a Message to everyone"
					className="bg-transparent w-full md:py-4 pr-4 md:pr-0 outline-none"
					onChange={(e) => setInputMessage(e.target.value)}
				/>
				<div className="flex gap-2">
					<BsEmojiSmile className="w-6 h-6 hidden" />
					<button
						disabled={inputMessage.trim() === ''}
						onClick={updateConversation}
					>
						<RiSendPlane2Line className="w-6 h-6" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Chat;
