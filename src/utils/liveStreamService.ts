import db from '@/lib/weaveDB';

export type Message = {
	fromName: string;
	message: string;
};

class LiveStreamService {
	async setMessage({
		messageToSend,
		liveStreamId,
	}: {
		messageToSend: Message;
		liveStreamId: string;
	}): Promise<{ error?: any } | undefined> {
		try {
			await db.init();
			await db.update(messageToSend, 'live-stream-comment', liveStreamId);
		} catch (e) {
			return {
				error: e,
			};
		}
	}

	async getMessage(
		liveStreamId: string
	): Promise<{ error?: any; data: any } | undefined> {
		try {
			await db.init();
			const data = await db.get('live-stream-comment', liveStreamId);
			return {
				error: null,
				data,
			};
		} catch (e) {
			return {
				error: e,
				data: null,
			};
		}
	}
}

const liveStreamService = new LiveStreamService();
export default liveStreamService;
