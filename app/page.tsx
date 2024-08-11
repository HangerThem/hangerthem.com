import HeroBanner from "@/components/heroBanner"
import About from "@/components/about"
import Divider from "@/components/divider"
import Skills from "@/components/skills"
import Projects from "@/components/projects"

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
		</>
	)
}
