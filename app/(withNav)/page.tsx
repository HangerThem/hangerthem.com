import HeroBanner from "@/components/heroBanner"
import About from "@/components/about"
import Divider from "@/components/divider"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
	return (
		<>
			<HeroBanner />
			<About />
			<Divider />
			<Skills />
			<Divider />
			<Projects />
			<Divider />
			<Contact />
		</>
	)
}
