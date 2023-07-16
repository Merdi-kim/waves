import { selectedHandle } from '@/lib/recoil';
import { useRecoilState } from 'recoil';

const LensProfile = ({ profile }: { profile: any }) => {
	const [profileData, setProfileData] = useRecoilState(selectedHandle);

	return (
		<div
			onClick={() => setProfileData(profile)}
			className={`flex-none flex items-center justify-center h-8 min-w-[150px] px-2 m-4 rounded-lg ${
				profile.handle == profileData?.handle
					? 'bg-neutral-600 border-[1px] border-white'
					: 'bg-neutral-700'
			} text-white hover:text-slate-400 cursor-pointer`}
		>
			{profile.handle}
		</div>
	);
};

export default LensProfile;
