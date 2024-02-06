import HeroBanner from "@/components/heroBanner"
import About from "@/components/about"
import Divider from "@/components/divider"
import Techstack from "@/components/techstack"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <>
      <HeroBanner />
      <About />
      <Divider />
      <Techstack />
      <Divider />
      <Projects />
      <Divider />
    </>
  )
}
