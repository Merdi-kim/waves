import db from '@/lib/weaveDB';
import Image from 'next/image';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ReelUpload = () => {
	const [video, setVideo] = useState<File>();
	const [metadata, setMetadata] = useState<{
		title: string;
		description: string;
	}>({ title: '', description: '' });
	const router = useRouter();

	const updateMetadata = (e: ChangeEvent<HTMLInputElement>) => {
		setMetadata({ ...metadata, [e.target.name]: e.target.value });
	};

	const upload = async (e: FormEvent) => {
		e.preventDefault();
		if (!metadata.title || !metadata.description || !video) {
			return window.alert('Title or Description or Reel missing');
		}
		const reelPreview: any = document.getElementById('reelPreview');
		if (reelPreview?.duration > 60) {
			return window.alert('Your video should be 60 seconds or less');
		}
		const fileBuffer = video.arrayBuffer();
		const { data: reelTxId } = await axios.post('/api/upload', {
			body: fileBuffer,
		});
		const reelToUpload = {
			...metadata,
			reelTxId,
		};
		await db.init();
		await db.add(reelToUpload, 'reels');
		router.push('/home');
	};
	return (
		<div className="w-[500px] flex flex-col items-center rounded-lg p-4 bg-neutral-800">
			<h2 className="text-xl font-bold mt-4 mb-8">
				Upload your reel now. The world awaits
			</h2>
			<form
				onSubmit={upload}
				className="w-10/12 flex flex-col items-center text-black"
			>
				<input
					type="text"
					className="w-full h-8 rounded-lg outline-none border-none px-2 my-4"
					name="title"
					placeholder="Your title goes here..."
					onChange={updateMetadata}
				/>
				<input
					type="text"
					className="w-full h-8 rounded-lg outline-none border-none px-2 my-4"
					name="description"
					placeholder="Your description goes here..."
					onChange={updateMetadata}
				/>
				<label htmlFor="reel" className="cursor-pointer">
					<Image
						height={40}
						width={40}
						src="/assets/cross.svg"
						alt="add file"
					/>
				</label>
				<input
					type="file"
					onChange={(e) => setVideo(e.target.files![0])}
					accept="video/*"
					id="reel"
					hidden
				/>
				{video && (
					<video
						className="bg-gray-500 my-4 w-full rounded-lg"
						id="reelPreview"
						controls
						src={URL.createObjectURL(video)}
					></video>
				)}
				<button
					type="submit"
					className="h-8 w-[250px] bg-blue-600 text-white my-8"
				>
					Upload it
				</button>
			</form>
		</div>
	);
};

export default ReelUpload;
