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

const Home = () => {
	const [closeModal, setCloseModal] = useState(true);
	const [reels, setReels] = useState([]);
	const [streamsData, setStreamsData] = useState<AxiosResponse<any, any>>();

	useEffect(() => {
		const fetchData = async () => {
			await db.init();
			const reelsData = await db.get('reels', ['__id__', 'desc']);
			const streams = await axios.get('https://livepeer.studio/api/stream?streamsonly=1&filters=[{"id": "isActive", "value": true}]')
			setStreamsData(streams)
			setReels(reelsData);
		};
		fetchData();
	}, []);

	return (
		<RecoilRoot>
			<div className="min-h-full w-full flex">
				<div className="w-3/12">
					<Sidebar />
				</div>
				<div className="w-9/12">
					<Navbar closeModal={setCloseModal} />
					<HeroBanner />
					<div className="px-10">
						<LiveSession streams = {streamsData}/>
						<PopularCategoriesFeed />
					</div>
					<div className="flex flex-wrap">
						{reels?.map((reel, index) => (
							<ReelCard key={index} reel={reel} />
						))}
					</div>
					{!closeModal && <LoginModal closeModal={setCloseModal} />}
				</div>
			</div>
		</RecoilRoot>
	);
};

export default Home;
