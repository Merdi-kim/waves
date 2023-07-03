'use client';
import HeroBanner from '@/components/HeroBanner';
import LiveSession from '@/components/LiveSession';
import Navbar from '@/components/Navbar';
import LoginModal from '@/components/modals/LoginModal';
import { useState } from 'react';
import PopularCategoriesFeed from '@/components/PopularCategoriesFeed';
import Sidebar from '@/components/SideBar';

const Home = () => {
	const [closeModal, setCloseModal] = useState(true);
	return (
		
				<div className="min-h-full w-full flex">
					<div className="w-3/12">
						<Sidebar />
					</div>
					<div className="w-9/12">
						<Navbar closeModal={setCloseModal} />
						<HeroBanner />
						<div className="px-10">
							{/** live sessions list */}
							<LiveSession />
							<PopularCategoriesFeed />
						</div>
					</div>
					{!closeModal && <LoginModal closeModal={setCloseModal} />}
				</div>
			
	);
};

export default Home;
