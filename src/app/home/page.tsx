'use client';
import HeroBanner from '@/components/HeroBanner';
import LiveSession from '@/components/LiveSession';
import Navbar from '@/components/Navbar';
import LoginModal from '@/components/modals/LoginModal';
import { useEffect, useState } from 'react';
import db from '@/lib/weaveDB';
import PopularCategoriesFeed from '@/components/PopularCategoriesFeed';
import Sidebar from '@/components/SideBar';
import ReelCard from '@/components/ui/ReelCard';
import { RecoilRoot } from 'recoil';
import axios, { AxiosResponse } from 'axios';
import Carousel from 'react-multi-carousel';
import PeopleYouCanFollow from '@/components/PeopleYouCanFollow';

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1204 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1204, min: 745 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 745, min: 0 },
		items: 1,
	},
};

const Home = () => {
	const [closeModal, setCloseModal] = useState(true);
	const [reels, setReels] = useState([]);
	const [streamsData, setStreamsData] = useState<AxiosResponse<any, any>>();

	useEffect(() => {
		const fetchData = async () => {
			await db.init();
			const reelsData = await db.get('reels', ['__id__', 'desc']);
			const { data: streams } = await axios.get(
				'https://livepeer.studio/api/stream?streamsonly=1&filters=[{"id": "isActive", "value": true}]',
				{
					headers: {
						'content-type': 'application/json',
						authorization: `Bearer ${process.env.NEXT_PUBLIC_STUDIO_API_KEY}`,
					},
				}
			);
			setStreamsData(streams);
			setReels(reelsData);
		};
		fetchData();
	}, []);

	return (
		<RecoilRoot>
			<div className="min-h-full w-full flex">
				<div className="hidden sm:block sm:w-[120px] md:w-[250px] overlow-hidden bg-neutral-700">
					<Sidebar />
				</div>
				<div className="w-full sm:w-[calc(100%-120px)] md:w-[calc(100%-250px)] pb-10">
					<Navbar closeModal={setCloseModal} />
					<HeroBanner reel={reels[0]} />
					<div className="md:px-10">
						<LiveSession streams={streamsData} />
						<PeopleYouCanFollow />
					</div>
					<div className="h-[18.75rem] px-2 md:px-10 gap-2">
						<Carousel responsive={responsive}>
							{reels?.map((reel, index) => (
								<ReelCard key={index} reel={reel} />
							))}
						</Carousel>
					</div>
					{!closeModal && <LoginModal closeModal={setCloseModal} />}
				</div>
			</div>
		</RecoilRoot>
	);
};

export default Home;
