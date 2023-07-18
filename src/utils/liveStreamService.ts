import db from '@/lib/weaveDB';

export type Message = {
	fromName: string;
	toName: string;
	message: string;
	liveStreamId: string;
};

class LiveStreamService {
	// constructor() {
	// 	(async () => {
	//
	// 	})();
	// }

	async setMessage({
		messageToSend,
	}: {
		messageToSend: Message;
	}): Promise<{ error?: any } | undefined> {
		try {
			console.log(messageToSend);
			await db.init();
			await db.add(messageToSend, 'live-stream-comment');
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
