import LiveChannelCard from './partials/LiveChannelCard';

function LiveSession({ streams }: { streams: any }) {
  return (
    <div className="my-10">
      {streams?.length > 0 && (
      <h1 className="text-3xl font-bold mb-10">Live Channels</h1>
      )}
      <div className="grid grid-cols-3 gap-3 gap-y-10">
        {streams?.map((live: any, index: number) => (
          <LiveChannelCard
            key={`live-channel-${index}`}
            playbackId={live.playbackId}
            title={live.name}
          />
        ))}
      </div>
    </div>
  );
}

export default LiveSession;
