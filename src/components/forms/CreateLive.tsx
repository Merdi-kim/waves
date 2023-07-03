'use client';
import React, { useEffect } from 'react';

const CreateLive = () => {
	useEffect(() => {
		const navigatorDevices = navigator.mediaDevices;
		var video = document.getElementById('videoCam');
		if (navigatorDevices.getUserMedia) {
			navigatorDevices
				.getUserMedia({ audio: true, video: true })
				.then(function (vidStream) {
					if ('srcObject' in video!) {
						video.srcObject = vidStream;
					} else {
						video!.src = window.URL.createObjectURL(vidStream);
					}
					video!.onloadedmetadata = function (e) {
						video!.play();
					};
				})
				.catch(function (e) {
					console.log(e.name + ': ' + e.message);
				});
		} else {
			video!.src = 'somevideo.webm'; // fallback.
		}
	}, []);

	return (
		<div className="w-[500px] flex flex-col items-center rounded-lg p-4 bg-neutral-800">
			<h2 className="text-xl font-bold mt-4 mb-8">
				It is time to broadcast to the world !
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
				<input type="file" id="reel" hidden />
				<video className="my-4 h-56 w-full rounded-lg" id="videoCam"></video>
				<span className="text-gray-400">You look good 🫠</span>
				<button className="h-8 w-[250px] bg-blue-600 text-white my-8">
					Go live
				</button>
			</form>
		</div>
	);
};

export default CreateLive;
