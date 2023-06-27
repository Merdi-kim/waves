import Image from 'next/image';
import { ComponentProps, FC } from 'react';
import { FaWifi } from 'react-icons/fa';

type FollowingProps = ComponentProps<'div'> & {
	// TODO: Should later be replaced with the user profile
	profile: {
		username: string;
		profile_url: string;
		isLive: boolean;
		isOnline: boolean;
	};
};

/**
 * This component is used in Following component in the sidebar
 * @date 6/26/2023 - 11:20:43 PM
 *
 * @param {FollowingProps} props
 * @returns {ReactElement}
 */
const Following: FC<FollowingProps> = (props) => {
	const { profile, ...rest } = props;
	return (
		<div className="flex justify-between items-center" {...rest}>
			<div className="flex justify-center items-center gap-3">
				<Image
					src={profile.profile_url}
					width={50}
					height={50}
					alt={profile.username}
					className="rounded-full"
				/>
				<span className="text-white font-bold">{profile.username}</span>
			</div>
			<div>
				<span>
					{profile.isLive && profile.isOnline && (
						<FaWifi className="text-[#E85B5B] w-6 h-6" />
					)}
				</span>
				{!profile.isLive && profile.isOnline && (
					<div className="h-3 w-3 bg-green-500 rounded-full" />
				)}
			</div>
		</div>
	);
};

export default Following;
