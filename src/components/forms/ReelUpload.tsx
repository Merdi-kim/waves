import Image from 'next/image';
import React, { useState } from 'react';

const ReelUpload = () => {
	const [video, setVideo] = useState<File>();

	return (
		<div className="w-[500px] flex flex-col items-center rounded-lg p-4 bg-neutral-800">
			<h2 className="text-xl font-bold mt-4 mb-8">
				Upload your reel now. The world awaits
			</h2>
			<form className="w-10/12 flex flex-col items-center text-black">
				<input
					type="text"
					className="w-full h-8 rounded-lg outline-none border-none px-2 my-4"
					placeholder="Your title goes here..."
				/>
				<input
					type="text"
					className="w-full h-8 rounded-lg outline-none border-none px-2 my-4"
					placeholder="Your description goes here..."
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
						autoPlay
						controls
						src={URL.createObjectURL(video)}
					></video>
				)}
				<button className="h-8 w-[250px] bg-blue-600 text-white my-8">
					Upload it
				</button>
			</form>
		</div>
	);
};

export default ReelUpload;
