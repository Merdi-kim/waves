import Bundlr from '@bundlr-network/client';
import { NextApiRequest, NextApiResponse } from 'next';

const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

export async function POST(req: Request) {
	const bundlr = new Bundlr(
		'https://devnet.bundlr.network',
		'matic',
		privateKey,
		{
			providerUrl: 'https://rpc-mumbai.maticvigil.com',
		}
	);
	console.log('gm gm');
	//const response = await bundlr.fund(bundlr.utils.toAtomic(0.4));
	const dataToUpload = 'GM world.';
	const { id } = await bundlr.upload(dataToUpload);
	return new Response(id);
}
