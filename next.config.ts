import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				hostname: "**.**",
				protocol: "https",
			},
		],
	},
};

export default nextConfig;
