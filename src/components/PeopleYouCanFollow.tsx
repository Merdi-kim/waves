'use client';

import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import { useEffect, useState } from 'react';
import { recommendedProfiles } from '@/lib/lens/lensClient';
import { formatPicture } from '@/utils/formatPicture';

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 6,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1204 },
		items: 5,
	},
	tablet: {
		breakpoint: { max: 1204, min: 745 },
		items: 3,
	},
	mobile: {
		breakpoint: { max: 745, min: 0 },
		items: 2,
	},
};

function PeopleYouCanFollow() {
	const [recommendedAccounts, setRecommendedAccounts] = useState([]);

	useEffect(() => {
		const getRecommendedProfiles = async () => {
			const { data } = await recommendedProfiles();
			const accounts = data.recommendedProfiles.slice(13, 18);
			setRecommendedAccounts(accounts);
		};
		getRecommendedProfiles();
	}, []);

	if (recommendedAccounts.length === 0) return <></>;
	return (
		<div>
			<h1 className="text-2xl font-extrabold mb-8">Artists You can follow</h1>

			<Carousel responsive={responsive} className=" p-2 rounded-lg">
				{recommendedAccounts.slice(4, 9).map(({ picture, handle }, index) => (
					<div
						key={`follow-${index}`}
						className="inline-flex items-center w-full gap-2"
					>
						<Image
							src={formatPicture(picture)}
							alt="profile"
							width={60}
							height={60}
							className="rounded-full"
						/>
						<div>
							<p className="font-bold text-sm max-[10rem] line-clamp-1">
								{handle}
							</p>
							<div className="flex justify-between items-center">
								<button className="text-sm hover:text-primary transition-all border-r border-gray-500 pr-2">
									Follow
								</button>
								{/*<p className="font-extrabold text-sm pl-2">*/}
								{/*	23k <span className="font-normal">Followers</span>*/}
								{/*</p>*/}
							</div>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default PeopleYouCanFollow;
