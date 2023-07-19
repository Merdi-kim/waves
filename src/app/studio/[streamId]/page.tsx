'use client';

import {
	LivepeerConfig,
	ThemeConfig,
	createReactClient,
	studioProvider,
} from '@livepeer/react';
import CreatorStream from './CreatorStream';
import { RecoilRoot } from 'recoil';

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

const page = ({ params }: { params: { streamId: string } }) => (
	<LivepeerConfig client={client} theme={livepeerTheme}>
		<RecoilRoot>
			<CreatorStream streamName={params.streamId} />
		</RecoilRoot>
	</LivepeerConfig>
);

export default page;
