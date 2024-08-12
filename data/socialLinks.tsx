import { Github, JournalAlbum } from "react-bootstrap-icons"

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
	{
		id: "blog",
		href: "https://blog.hangerthem.com",
		text: "Blog",
		icon: <JournalAlbum />,
	},
]

export default socialLink
