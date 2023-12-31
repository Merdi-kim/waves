'use client';

import {
	authenticate,
	generateChallenge,
	getProfiles,
} from '@/lib/lens/lensClient';
import { lensProfiles, selectedHandle } from '@/lib/recoil';
import { formatPicture } from '@/utils/formatPicture';
import { ethers } from 'ethers';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Link from 'next/link';
import ProfileDetails from './modals/ProfileDetails';

function Navbar({
	closeModal,
}: {
	closeModal: Dispatch<SetStateAction<boolean>>;
}) {
	const [showProfileDetails, setShowProfileDetails] = useState(false);
	const [, setLensProfiles] = useRecoilState(lensProfiles);
	const profile: any = useRecoilValue(selectedHandle);
	let profilePicture = '/assets/dummy/fakeProfile.jpeg';
	if (profile != null) {
		profilePicture = formatPicture(profile?.picture);
	}

	const login = async () => {
		try {
			// @ts-ignore
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const [address] = await provider.send('eth_requestAccounts', []);
			const challengeResponse = await generateChallenge(address!);
			const signer = provider.getSigner();
			const signature = await signer.signMessage(
				challengeResponse.data.challenge.text
			);
			const { data } = await authenticate(address, signature!);
			const { localStorage } = window;
			localStorage.setItem('auth_token', data.authenticate.accessToken);
			const { data: profilesData } = await getProfiles(address!);
			setLensProfiles(profilesData.profiles.items);
			closeModal(false);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="sm:h-20 w-full relative flex flex-col-reverse sm:flex-row items-center px-4 lg:px-8 justify-between">
			<div className="sm:hidden text-3xl font-bold absolute top-4 left-4">
				WAVE
			</div>
			<div className="hidden lg:flex items-center justify-center">
				<Image
					height={20}
					width={20}
					src="/assets/browse.svg"
					className="h-4 w-4 mr-2"
					alt="browse"
				/>
				<span className="font-bold">Browse</span>
			</div>
			<div className="w-[350px] lg:w-[400px] my-4 flex items-center bg-white p-3 rounded-lg">
				<Image
					height={15}
					width={15}
					src="/assets/search.svg"
					className="h-6 w-6"
					alt="search"
				/>
				<input
					type="text"
					className="flex-1 h-full border-none outline-none bg-transparent px-2 py-1.5
					 placeholder-slate-400 text-sm mx-2"
					placeholder="Search everything"
				/>
			</div>
			<div className="w-full h-16 sm:w-[150px] sm:h-4 flex items-center justify-end">
				{!profile ? (
					<button
						onClick={login}
						className="pb-1 font-bold border-b-2 border-b-slate-500 hover:font-extrabold transition-all hover:text-blue-600"
					>
						Start your journey
					</button>
				) : (
					<div className="flex items-center">
						<Link href="/new">
							<Image
								height={20}
								width={20}
								src="/assets/cross.svg"
								className="h-10 w-10 mr-3"
								alt="new"
							/>
						</Link>
						<Image
							height={20}
							width={20}
							src="/assets/bell.svg"
							className="h-4 w-4 mr-3"
							alt="notifications"
						/>
						<Image
							height={20}
							width={20}
							src={profilePicture}
							className="h-10 w-10 ml-3 rounded-full bg-gray-600 cursor-pointer"
							alt={profile.handle}
							onClick={() => setShowProfileDetails(true)}
						/>
					</div>
				)}
			</div>
			{showProfileDetails && (
				<ProfileDetails
					handle={profile?.handle}
					stats={profile?.stats}
					profilePicture={profilePicture}
					setShowProfileDetails={setShowProfileDetails}
				/>
			)}
		</div>
	);
}

export default Navbar;
