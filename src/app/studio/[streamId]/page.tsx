'use client';
import {
	LivepeerConfig,
	ThemeConfig,
	createReactClient,
	studioProvider,
} from '@livepeer/react';
import CreatorStream from './CreatorStream';

const client = createReactClient({
	provider: studioProvider({ apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY! }),
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

const page = ({ params }: { params: { streamId: string } }) => {
	return (
		<LivepeerConfig client={client} theme={livepeerTheme}>
			<CreatorStream streamName={params.streamId} />
		</LivepeerConfig>
	);
};

export default page;
