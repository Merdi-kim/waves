import LiveChannelCard from './partials/LiveChannelCard';

const dummyLives = [
	{
		image_url: '/assets/dummy/profile-1.png',
		title: '2022 world champs gaming warzon',
		liveTitle: 'call of duty',
		numberOfWatches: 420000,
		profile: {
			image: '/assets/dummy/profile-1.png',
			name: 'Guy Hawkins',
		},
	},
	{
		image_url: '/assets/dummy/profile-2.jpeg',
		title: '2022 world champs gaming warzon',
		liveTitle: 'call of duty',
		numberOfWatches: 4300,
		profile: {
			image: '/assets/dummy/profile-2.jpeg',
			name: 'Guy Hawkins',
		},
	},
	{
		image_url: '/assets/dummy/profile-1.png',
		title: '2022 world champs gaming warzon',
		liveTitle: 'call of duty',
		numberOfWatches: 2,
		profile: {
			image: '/assets/dummy/profile-1.png',
			name: 'Guy Hawkins',
		},
	},
];

function LiveSession() {
	return (
		<div className="my-10">
			<div className="grid grid-cols-3 gap-3 gap-y-10">
				{dummyLives.map((live, index) => {
					return (
						<LiveChannelCard
							key={`live-channel-${index}`}
							image_url={live.image_url}
							liveTitle={live.liveTitle}
							numberOfWatches={live.numberOfWatches}
							profile={live.profile}
							title={live.title}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default LiveSession;
