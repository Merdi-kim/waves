import { formatPicture } from '@/utils/formatPicture';
import Image from 'next/image';
import { ComponentProps, FC } from 'react';

type FollowingProps = ComponentProps<'div'> & {
	username: string;
	profilePicture: string;
};

const Following: FC<FollowingProps> = (props) => {
	const { username, profilePicture, ...rest } = props;
	let profile_url;
	if (profilePicture != null) {
		profile_url = formatPicture(profilePicture);
	}

	return (
		<div className="flex justify-between items-center" {...rest}>
			<div className="flex justify-center items-center gap-3">
				<Image
					src={profile_url}
					width={40}
					height={40}
					alt={username}
					className="rounded-full"
				/>
				<span className=" font-bold hidden md:block ">
					{username}
				</span>
			</div>
		</div>
	);
};

export default Following;
