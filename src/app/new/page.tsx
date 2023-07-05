'use client';
import CreateLive from '@/components/forms/CreateLive';
import ReelUpload from '@/components/forms/ReelUpload';
import React, { useState } from 'react';

const CreateMedia = () => {
	const [showReelForm, setShowReelForm] = useState(true);

	return (
		<div>
			<h1 className="text-center my-4 text-3xl font-bold">Waves</h1>
			<div className="flex h-12 w-full mb-8">
				<button
					onClick={() => setShowReelForm(true)}
					className={`h-full w-1/2 ${showReelForm && 'bg-slate-600'}`}
				>
					Upload Reel
				</button>
				<button
					onClick={() => setShowReelForm(false)}
					className={`h-full w-1/2 ${!showReelForm && 'bg-slate-600'}`}
				>
					Go live
				</button>
			</div>
			<div className="w-full min-h-[calc(100vh-8rem)] flex items-center justify-center">
				{showReelForm ? <ReelUpload /> : <CreateLive />}
			</div>
		</div>
	);
};

export default CreateMedia;
