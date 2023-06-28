'use client';
import HeroBanner from '@/components/HeroBanner';
import LiveSession from '@/components/LiveSession';
import Navbar from '@/components/Navbar';
import LoginModal from '@/components/modals/LoginModal';
import { useState } from 'react';

import PopularCategoriesFeed from '@/components/PopularCategoriesFeed';
import Sidebar from '@/components/SideBar';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';

import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
const { chains, publicClient } = configureChains(
	[polygonMumbai],
	[alchemyProvider({ apiKey: process.env.ALCHEMY_ID! }), publicProvider()]
);
const { connectors } = getDefaultWallets({
	appName: 'Waves',
	projectId: 'waves_101',
	chains,
});
const wagmiConfig = createConfig({
	//autoConnect: true,
	connectors,
	publicClient,
});

const Home = () => {
	const [closeModal, setCloseModal] = useState(true);
	return (
		<WagmiConfig config={wagmiConfig}>
			<RainbowKitProvider chains={chains}>
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
			</RainbowKitProvider>
		</WagmiConfig>
	);
};

export default Home;
