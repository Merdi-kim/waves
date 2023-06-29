'use client';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { LoginButton } from './ui/ConnectButton';
import { useAccount } from 'wagmi';

const Navbar = ({
	closeModal,
}: {
	closeModal: Dispatch<SetStateAction<boolean>>;
}) => {
	const { isConnected } = useAccount();

	return (
		<div className="h-20 w-full flex flex-col sm:flex-row items-center px-4 lg:px-10 justify-between">
			<div className="hidden md:flex items-center justify-center">
				<Image
					height={20}
					width={20}
					src={'/assets/browse.svg'}
					className="h-4 w-4 mr-2"
					alt="browse"
				/>
				<span className="font-bold">Browse</span>
			</div>
			<div className="w-[350px] lg:w-[400px] h-7 px-2 flex">
				<Image
					height={20}
					width={20}
					src={'/assets/search.svg'}
					className="h-6 w-6"
					alt="search"
				/>
				<input
					type="text"
					className="flex-1 h-full border-none outline-none placeholder-slate-300 text-sm mx-2 bg-gray-900 rounded-lg"
					placeholder="Search everything"
				/>
			</div>
			<div className="w-[150px] lg:w-[200px] h-4 flex items-center">
				{!isConnected ? (
					<LoginButton closeModal={closeModal} />
				) : (
					<div className="flex items-center">
						<Image
							height={20}
							width={20}
							src={'/assets/cross.svg'}
							className="h-10 w-10 mr-3"
							alt="new"
						/>
						<Image
							height={20}
							width={20}
							src={'/assets/bell.svg'}
							className="h-4 w-4 mr-3"
							alt="notifications"
						/>
						<Image
							height={20}
							width={20}
							src="/assets/dummy/fakeProfile.jpeg"
							className="h-10 w-10 ml-3 rounded-full bg-gray-600"
							alt="profile"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
