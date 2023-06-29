import StreamingFooter from '@/components/stream/StreamingFooter';
import React from 'react';

const page = () => {
	return (
		<div className="h-screen">
			<video src="/assets/coding-video.mkv" autoPlay />
			<StreamingFooter />
		</div>
	);
};

export default page;
