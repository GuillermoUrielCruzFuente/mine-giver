/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "crafthead.net",
				port: "",
				pathname: "/avatar/**",
			},
		],
	},
};

module.exports = nextConfig;
