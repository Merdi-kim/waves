'useClient';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Dispatch, SetStateAction } from 'react';
export const LoginButton = ({
	closeModal,
}: {
	closeModal: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<ConnectButton.Custom>
			{({
				account,
				chain,
				openAccountModal,
				openChainModal,
				openConnectModal,
				authenticationStatus,
				mounted,
			}) => {
				const ready = mounted && authenticationStatus !== 'loading';
				const connected =
					ready &&
					account &&
					chain &&
					(!authenticationStatus || authenticationStatus === 'authenticated');
				return (
					<div
						{...(!ready && {
							'aria-hidden': true,
							style: {
								opacity: 0,
								pointerEvents: 'none',
								userSelect: 'none',
							},
						})}
					>
						{(() => {
							if (!connected) {
								return (
									<button
										onClick={() => {
											openConnectModal();
										}}
										className="pb-1 font-bold border-b-2 border-b-slate-500 hover:font-extrabold transition-all hover:text-blue-600"
									>
										Start your journey
									</button>
								);
							}
							if (chain.unsupported) {
								return (
									<button onClick={openChainModal} type="button">
										Wrong network
									</button>
								);
							}
							closeModal(false);
						})()}
					</div>
				);
			}}
		</ConnectButton.Custom>
	);
};
