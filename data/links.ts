type Link = {
	id: string
	href: string
	text: string
}

const links: Link[] = [
	{
		id: "home",
		href: "/",
		text: "Home",
	},
	{
		id: "about",
		href: "#about",
		text: "About",
	},
	{
		id: "skills",
		href: "#skills",
		text: "Skills",
	},
	{
		id: "contact",
		href: "#contact",
		text: "Contact me",
	},
]

export default links
