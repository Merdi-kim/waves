import { BsChatSquareDots } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import SidebarTitle from './partials/SibebarTitle';
import { HiOutlineClipboardList } from 'react-icons/hi';

const ChatAndSettings = () => {
	return (
		<div>
			<SidebarTitle
				icon={<BsChatSquareDots className="w-6 h-6" />}
				title="Chat"
			/>
			<SidebarTitle
				icon={<IoSettingsOutline className="w-6 h-6" />}
				title="Setting"
			/>
		</div>
	);
};

export default ChatAndSettings;
