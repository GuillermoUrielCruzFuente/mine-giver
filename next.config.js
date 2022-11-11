/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "crafthead.net",
				pathname: "/avatar/**",
			},
			{
				protocol: "https",
				hostname: "crafthead.net",
				pathname: "/cube/**",
			},
			{
				protocol: "https",
				hostname: "crafthead.net",
				pathname: "/body/**",
			},
			{
				protocol: "https",
				hostname: "crafthead.net",
				pathname: "/skin/**",
			},
		],
	},
};

module.exports = nextConfig;
