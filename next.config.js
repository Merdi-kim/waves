/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['cdn.stamp.fyi'],
	},
};

module.exports = nextConfig;
