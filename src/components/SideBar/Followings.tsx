import React from 'react';
import Following from './partials/Following';
import { FaCircleChevronDown } from 'react-icons/fa6';

const mockProfiles = [
	{
		username: 'Jonatha Z.',
		profile_url: '/assets/dummy/profile-1.png',
		isLive: true,
		isOnline: true,
	},
	{
		username: 'Merkim dev',
		profile_url: '/assets/dummy/profile-2.jpeg',
		isLive: false,
		isOnline: true,
	},
	{
		username: 'Ax23.',
		profile_url: '/assets/dummy/profile-1.png',
		isLive: true,
		isOnline: true,
	},
	{
		username: 'Wakanda',
		profile_url: '/assets/dummy/profile-2.jpeg',
		isLive: false,
		isOnline: true,
	},
];

const Followings = () => {
	return (
		<div className="flex flex-col gap-2 border-b border-white pb-8">
			{mockProfiles.map((profile, index) => (
				<Following key={`following-profile-${index}`} profile={profile} />
			))}
			<button className="flex items-center gap-3 ml-3 mt-3 cursor-pointer">
				<FaCircleChevronDown className="text-gray-400 h-6 w-6" />
				<span className="text-white font-bold">Load more</span>
			</button>
		</div>
	);
};

export default Followings;
