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
									<button onClick={() => {openConnectModal();closeModal(false)}} className="pb-1 font-bold border-b-2 border-b-slate-500 hover:font-extrabold transition-all hover:text-blue-600">
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
							/*return (
								<div style={{ display: 'flex', gap: 12 }}>
									<button
										onClick={openChainModal}
										style={{ display: 'flex', alignItems: 'center' }}
										type="button"
									>
										{chain.hasIcon && (
											<div
												style={{
													background: chain.iconBackground,
													width: 12,
													height: 12,
													borderRadius: 999,
													overflow: 'hidden',
													marginRight: 4,
												}}
											>
												{chain.iconUrl && (
													<img
														alt={chain.name ?? 'Chain icon'}
														src={chain.iconUrl}
														style={{ width: 12, height: 12 }}
													/>
												)}
											</div>
										)}
										{chain.name}
									</button>
									<button onClick={openAccountModal} type="button">
										{account.displayName}
										{account.displayBalance
											? ` (${account.displayBalance})`
											: ''}
									</button>
								</div>
							);*/
						})()}
					</div>
				);
			}}
		</ConnectButton.Custom>
	);
};
