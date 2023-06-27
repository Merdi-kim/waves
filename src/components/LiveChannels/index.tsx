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
];

function index() {
	return (
		<div>
			<div>
				{dummyLives.map((live, index) => {
					return (
						<LiveChannelCard
							key={`live-channel-${index}`}
							image_url={live.image_url}
							liveTitle={live.title}
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

export default index;
