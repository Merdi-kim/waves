/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: [
			'cdn.stamp.fyi',
			'lens.infura-ipfs.io',
			'statics-mumbai-lens-staging.s3.eu-west-1.amazonaws.com',
			'avatar.tobi.sh',
		],
	},
};

module.exports = nextConfig;
