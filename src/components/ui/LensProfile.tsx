const LensProfile = ({ name }: { name: string }) => {
	return (
		<div className="flex-none flex items-center h-8 min-w-[150px] px-2 m-4 rounded-lg bg-slate-700 text-white hover:text-slate-400 cursor-pointer">
			{name}
		</div>
	);
};

export default LensProfile;
