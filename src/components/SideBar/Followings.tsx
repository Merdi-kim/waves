import { useEffect, useState } from 'react';
import Following from './partials/Following';
import { recommendedProfiles } from '@/lib/lens/lensClient';

const Followings = () => {
	const [recommendedAccounts, setRecommendedAccounts] = useState([]);

	useEffect(() => {
		const getRecommendedProfiles = async () => {
			const { data } = await recommendedProfiles();
			const accounts = data.recommendedProfiles.slice(13, 18);
			setRecommendedAccounts(accounts);
		};
		getRecommendedProfiles();
	}, []);

	return (
		<div className="flex flex-col gap-2 border-b items-center justify-center md:items-start md:justify-start border-white pb-8">
			{recommendedAccounts?.map(({ handle, picture }, index) => (
				<Following
					key={`following-profile-${index}`}
					username={handle}
					profilePicture={picture}
				/>
			))}
		</div>
	);
};

export default Followings;
