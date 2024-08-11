import { Github } from "react-bootstrap-icons"

type SocialLink = {
	id: string
	href: string
	text: string
	icon: React.ReactNode
}

const socialLink: SocialLink[] = [
	{
		id: "github",
		href: "https://github.com/HangerThem",
		text: "GitHub",
		icon: <Github />,
	},
]

export default socialLink
