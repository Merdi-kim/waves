import SidebarTitle from './partials/SibebarTitle';
import { FaWifi } from 'react-icons/fa';
import { BiChart, BiUser, BiVideo } from 'react-icons/bi';
import { HiOutlineClipboardList } from 'react-icons/hi';

const NewFeed = () => {
	return (
		<div className="border-b border-white pb-8">
			<SidebarTitle icon={<FaWifi className="w-6 h-6" />} title="Start Live" />
			<SidebarTitle icon={<BiChart className="w-6 h-6" />} title="Trending" />
			<SidebarTitle icon={<BiUser className="w-6 h-6" />} title="Following" />
			<SidebarTitle
				icon={<BiVideo className="w-6 h-6" />}
				title="Your videos"
			/>
			<SidebarTitle
				icon={<HiOutlineClipboardList className="w-6 h-6" />}
				title="Playlist"
			/>
		</div>
	);
};

export default NewFeed;
