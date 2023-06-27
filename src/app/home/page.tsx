'use client'
import HeroBanner from '@/components/HeroBanner';
import Navbar from '@/components/Navbar';
import LoginModal from '@/components/modals/LoginModal';
import { useState } from 'react';

const Home = () => {
	const [closeModal, setCloseModal] = useState(true)
	return (
		<div className="min-h-full w-full flex">
			<div className="w-2/12">{/***sidebar */}</div>
			<div className="w-10/12">
				<Navbar  closeModal={setCloseModal} />
				<HeroBanner />
			</div>
			{!closeModal && <LoginModal closeModal={setCloseModal}/>}
		</div>
	);
};

export default Home;
