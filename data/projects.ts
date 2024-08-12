type Project = {
	title: string
	description: string
	image?: string
	techStack: string[]
	href?: string
	source: string
	state: "wip" | "done"
}

const projects: Project[] = [
	{
		title: "Ephemr",
		description:
			"A simple social network, a place to share your thoughts with the world.",
		image: "/ephemr.png",
		techStack: [
			"Next.js",
			"TypeScript",
			"Styled Components",
			"Socket.IO",
			"Prisma",
			"PostgreSQL",
			"JWT",
		],
		href: "https://ephemr.net",
		source: "https://github.com/HangerThem/ephemr",
		state: "wip",
	},
	{
		title: "HangerThem Portfolio",
		description: "This very website and my personal portfolio.",
		// image: "/hangerthem.png",
		techStack: ["Next.js", "TypeScript", "Styled Components"],
		href: "https://hangerthem.com",
		source: "https://github.com/HangerThem/hangerthem.com",
		state: "done",
	},
	{
		title: "Linkboard",
		description:
			"A cool alternative to Linktree, a simple link aggregator for your social media profiles.",
		image: "/linkboard.png",
		techStack: ["Next.js", "TypeScript", "Styled Components"],
		href: "https://socials.hangerthem.com",
		source: "https://github.com/HangerThem/linkboard",
		state: "done",
	},
	{
		title: "Evolution algorithm Flappy Bird",
		description:
			"A Flappy Bird clone with an AI that uses an evolution algorithm to play the game.",
		image: "/flappy_bird.png",
		techStack: ["JavaScript"],
		href: "https://hangerthem.github.io/js-flappy-bird-ea/",
		source: "https://github.com/HangerThem/js-flappy-bird-ea",
		state: "done",
	},

	{
		title: "Simple 2D physics engine",
		description: "A simple 2D physics engine written in JavaScript.",
		image: "/physics_engine.png",
		techStack: ["JavaScript"],
		href: "https://hangerthem.github.io/2d-physics-engine/",
		source: "https://hangerthem.github.io/js-2D-physic-engine/",
		state: "wip",
	},
	{
		title: "Peer to Peer Chat",
		description: "A simple peer-to-peer chat application.",
		techStack: ["Python"],
		source: "https://github.com/HangerThem/python-p2p-real-time-chat",
		state: "wip",
	},
]

export default projects
