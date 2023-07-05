'use client';
import HeroBanner from '@/components/HeroBanner';
import LiveSession from '@/components/LiveSession';
import Navbar from '@/components/Navbar';
import LoginModal from '@/components/modals/LoginModal';
import { useEffect, useState } from 'react';
import db from '@/lib/weaveDB'

import PopularCategoriesFeed from '@/components/PopularCategoriesFeed';
import Sidebar from '@/components/SideBar';
import ReelCard from '@/components/ui/ReelCard';

const Home = () => {
	const [closeModal, setCloseModal] = useState(true);
	const [reels, setReels] = useState()

	useEffect(() => {
		const fetchReels = async() => {
			const data = await db.get("reels", ["__id__", "desc"])
			setReels(data)
		}
		fetchReels()
	},[])
	return (
		<div className="min-h-full w-full flex">
			<div className="w-3/12">
				<Sidebar />
			</div>
			<div className="w-9/12">
				<Navbar closeModal={setCloseModal} />
				<HeroBanner />
				<div className="px-10">
					<LiveSession />
					<PopularCategoriesFeed />
				</div>
				<div className='flex flex-wrap'>
					{ reels?map((reel, index) => <ReelCard reel={reel}/>)}
				</div>
			</div>
			{!closeModal && <LoginModal closeModal={setCloseModal} />}
		</div>
	);
};

export default Home;
