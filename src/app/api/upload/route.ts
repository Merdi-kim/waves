import Bundlr from '@bundlr-network/client';
import { NextRequest } from 'next/server';

const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

export async function POST(req: NextRequest) {
	const bundlr = new Bundlr(
		'https://devnet.bundlr.network',
		'matic',
		privateKey,
		{
			providerUrl: 'https://rpc-mumbai.maticvigil.com',
		}
	);
	//const response = await bundlr.fund(bundlr.utils.toAtomic(0.4));
	const body = await req.arrayBuffer();
	const buffer = Buffer.from(body);
	const tags = [{ name: 'Content-Type', value: 'video/mp4' }];
	const { id } = await bundlr.upload(buffer, { tags });
	return new Response(id);
}
