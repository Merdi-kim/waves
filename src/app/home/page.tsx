import HeroBanner from '@/components/HeroBanner';
import Navbar from '@/components/Navbar';

const Home = () => {
	return (
		<div className="min-h-full w-full flex">
			<div className="w-2/12">{/***sidebar */}</div>
			<div className="w-10/12">
				<Navbar />
				<HeroBanner />
			</div>
		</div>
	);
};

export default Home;
