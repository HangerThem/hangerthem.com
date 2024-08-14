/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "lighthouse-report-svg.vercel.app",
				protocol: "https",
			},
		],
		dangerouslyAllowSVG: true,
	},
}

export default nextConfig
