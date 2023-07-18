'use client';
import CreateLive from '@/components/forms/CreateLive';
import ReelUpload from '@/components/forms/ReelUpload';
import {
	LivepeerConfig,
	createReactClient,
	studioProvider,
} from '@livepeer/react';
import React, { useMemo, useState } from 'react';

const CreateMedia = () => {
	const [showReelForm, setShowReelForm] = useState(true);
	const livepeerClient = useMemo(
		() =>
			createReactClient({
				provider: studioProvider({
					apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY!,
				}),
			}),
		[]
	);

	return (
		<LivepeerConfig client={livepeerClient}>
			<div>
				<h1 className="text-center my-4 text-3xl font-bold mt-10">Waves</h1>
				<div className="flex h-12 w-full mb-8 mt-10 md:mx-10">
					<button
						onClick={() => setShowReelForm(true)}
						className={`h-full w-1/2 ${
							showReelForm && 'bg-primary rounded-xl'
						}`}
					>
						Upload Reel
					</button>
					<button
						onClick={() => setShowReelForm(false)}
						className={`h-full w-1/2 ${
							!showReelForm && 'bg-primary'
						} rounded-xl`}
					>
						Go live
					</button>
				</div>
				<div className="w-full min-h-[calc(100vh-8rem)] flex items-center justify-center">
					{showReelForm ? <ReelUpload /> : <CreateLive />}
				</div>
			</div>
		</LivepeerConfig>
	);
};

export default CreateMedia;
