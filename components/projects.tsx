"use client"

import styled from "styled-components"
import { useState } from "react"
import { CaretLeftFill, CaretRightFill, Git } from "react-bootstrap-icons"
import projects from "@/data/projects"
import Link from "next/link"

const ProjectsContainer = styled.section`
	width: 100%;
	min-height: 100vh;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`

const ProjectsContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	h2 {
		font-size: 3rem;
		font-weight: 600;
	}

	p {
		font-size: 1.2rem;
		font-weight: 400;
	}
`

const CarouselContainer = styled.div`
	width: 100%;
	position: relative;
`

const CarouselWrapper = styled.div`
	display: flex;
	transition: transform 0.5s ease-in-out;
	gap: 2rem;
`

const ProjectCard = styled.div`
	padding: 2rem;
	width: 400px;
	height: 600px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border-radius: 1rem;
	border: 1px solid rgba(var(--white), 0.1);
	transition: opacity 0.5s ease-in-out, min-width 0.5s ease-in-out;
	position: relative;

	h3 {
		font-size: 2rem;
		font-weight: 600;
	}

	p {
		font-size: 1.2rem;
		font-weight: 400;
	}

	a {
		font-size: 1.2rem;
		font-weight: 600;
		color: rgb(var(--white));
		background-color: rgb(var(--blue));
		padding: 0.5rem 1rem;
		border-radius: 0.25rem;
		text-decoration: none;
		transition: background-color 0.2s;

		&:hover {
			background-color: rgb(var(--light-blue));
		}
	}

	img {
		width: 200px;
		height: 200px;
		object-fit: cover;
		border-radius: 1rem;
	}

	&:not(.active) {
		opacity: 0.5;
		transform: scale(0.8);
	}
`

const StateIndicator = styled.div`
	position: absolute;
	top: -1rem;
	right: -1rem;
	font-size: 1.5rem;
	text-align: center;
	line-height: 3rem;
	background-color: rgba(var(--white));
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
`

const NavigationButton = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	border: none;
	background-color: transparent;
	padding: 0;
	color: rgba(var(--white), 0.8);
	cursor: pointer;
	transition: color 0.3s;
	z-index: 1;

	&:hover {
		color: rgb(var(--white));
	}
`

const PrevButton = styled(NavigationButton)`
	left: 0;
`

const NextButton = styled(NavigationButton)`
	right: 0;
`

const CarouselIndicator = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.5rem;
	margin-top: 1rem;
`

const IndicatorDot = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	cursor: pointer;
	background-color: rgba(var(--white), 0.5);

	&.active {
		background-color: rgb(var(--white));
	}
`

const TechStack = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;

	span {
		font-size: 1rem;
		font-weight: 400;
		background-color: rgba(var(--white), 0.1);
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
	}
`

const Projects = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const projectCount = projects.length

	const handlePrev = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + projectCount) % projectCount
		)
	}

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % projectCount)
	}

	const getVisibleProjects = () => {
		const prevIndex = (currentIndex - 1 + projectCount) % projectCount
		const nextIndex = (currentIndex + 1) % projectCount
		return [projects[prevIndex], projects[currentIndex], projects[nextIndex]]
	}

	return (
		<ProjectsContainer>
			<ProjectsContent>
				<h2>📂 My Projects</h2>
				<p>Here are some of the projects I&apos;ve worked on recently</p>
				<CarouselContainer>
					<CarouselWrapper>
						{getVisibleProjects().map((project, index) => (
							<ProjectCard
								key={index}
								className={index === 1 ? "active" : ""}
								onClick={() => {
									if (index === 0) {
										handlePrev()
									} else if (index === 2) {
										handleNext()
									}
								}}
							>
								<StateIndicator>
									{project.state === "wip" ? "🔄" : "✅"}
								</StateIndicator>
								<h3>{project.title}</h3>
								{project.image && (
									<img src={project.image} alt={project.title} />
								)}
								<p>{project.description}</p>
								<TechStack>
									{project.techStack.map((tech, index) => (
										<span key={index}>{tech}</span>
									))}
								</TechStack>
								{project.href && <Link href={project.href}>View Project</Link>}
								<Link href={project.source}>
									<Git />
								</Link>
							</ProjectCard>
						))}
					</CarouselWrapper>
					<PrevButton onClick={handlePrev}>
						<CaretLeftFill size={50} />
					</PrevButton>
					<NextButton onClick={handleNext}>
						<CaretRightFill size={50} />
					</NextButton>
					<CarouselIndicator>
						{projects.map((_, index) => (
							<IndicatorDot
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={index === currentIndex ? "active" : ""}
							/>
						))}
					</CarouselIndicator>
				</CarouselContainer>
			</ProjectsContent>
		</ProjectsContainer>
	)
}

export default Projects
