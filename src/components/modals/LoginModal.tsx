import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import LensProfile from '../ui/LensProfile';
import Image from 'next/image';
import { authenticate, generateChallenge, getProfiles,  } from '@/lib/lensClient';
import { useAccount, useSignMessage } from 'wagmi';

const LoginModal = ({
	closeModal,
}: {
	closeModal: Dispatch<SetStateAction<boolean>>;
}) => {
	const [names, setNames] = useState<Array<string>>([])
	const { address } = useAccount();
	const { data:signature, signMessage } = useSignMessage()

	useEffect(() => {
		const fetchProfiles = async() => {
			try {
				const challengeResponse = await generateChallenge(address!);
				signMessage(
				  challengeResponse.data.challenge.text
				);
				const { data } = await authenticate(address!, signature!);
				const localStorage = window.localStorage;
				localStorage.setItem("auth_token", data.authenticate.accessToken);
				const { data:profilesData } = await getProfiles(address!)
			    const names = profilesData.profiles.items.map((profile:any) => profile.handle)
			    setNames(names)
			  } catch (err) {
				console.log(err);
			  }
		}
		fetchProfiles()
	}, [address])

	console.log(names)

	return (
		<div className="absolute flex items-center justify-center top-0 h-screen w-screen bg-black bg-opacity-90 overflow-hidden">
			<div className="w-11/12 sm:w-9/12 lg:w-6/12 pb-8 flex flex-col items-center bg-neutral-800 rounded-lg">
				<div className="h-6 w-full flex items-center justify-end">
					<Image
						height={25}
						width={25}
						alt="close icon"
						onClick={() => closeModal(true)}
						className="bg-white rounded-[50%] cursor-pointer"
						src="/assets/closeIcon.png"
					/>
				</div>
				<h2 className="font-bold text-xl mb-6">Join the Wave</h2>
				<div className=" mb-6 flex flex-wrap justify-evenly">
					{names.length  == 0 ?names.map((name, index) => (
						<LensProfile key={index} name={name} />
					)): Array(3).fill('').map((name, index) => <LensProfile key={index} name={name} />)}
				</div>
				<button className="w-[250px] h-8 bg-blue-600 rounded-lg">Login</button>
			</div>
		</div>
	);
};

export default LoginModal;
