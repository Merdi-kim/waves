import { selectedHandle } from '@/lib/recoil';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { useRecoilState } from 'recoil';

const ProfileDetails = ({
	setShowProfileDetails,
	handle,
	stats,
	profilePicture,
}: {
	setShowProfileDetails: Dispatch<SetStateAction<boolean>>;
	handle: string;
	stats: any;
	profilePicture: string;
}) => {
	const router = useRouter();
	const [_, setSelectedProfile] = useRecoilState(selectedHandle);

	const logout = () => {
		setSelectedProfile(null);
		setShowProfileDetails(false);
	};

	return (
		<div className="absolute top-0 right-0 m-2 flex flex-col p-2 bg-neutral-600 shadow-xl rounded-lg z-10">
			<div className="flex items-center justify-end">
				<Image
					height={20}
					width={20}
					src="/assets/cross.svg"
					alt="close modal"
					onClick={() => setShowProfileDetails(false)}
					className="h-6 w-6 rotate-45 cursor-pointer"
				/>
			</div>
			<div className="mt-4 flex flex-col items-center">
				<Image
					height={50}
					width={50}
					src={profilePicture}
					alt="profile"
					className="rounded-[50%]"
				/>
				<h3 className="font-bold my-4">{handle}</h3>
				<div className="px-4 w-full flex justify-between">
					<div className="text-sm">
						<span>
							<b>{stats.totalFollowers}</b>
						</span>{' '}
						<i>followers</i>{' '}
					</div>
					<div className="text-sm">
						<span>
							<b>{stats.totalFollowing}</b>
						</span>{' '}
						<i>following</i>{' '}
					</div>
				</div>
			</div>
			<div className="flex justify-center mt-8">
				<button
					onClick={logout}
					className="w-[250px] h-6 rounded-lg mb-3 text-red-500 font-bold bg-slate-400 hover:bg-slate-500 "
				>
					Log out
				</button>
			</div>
		</div>
	);
};

export default ProfileDetails;
