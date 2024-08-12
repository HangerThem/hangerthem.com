"use client"

import styled from "styled-components"
import { useCallback, useState } from "react"
import { CaretLeftFill, CaretRightFill, Git } from "react-bootstrap-icons"
import projects from "@/data/projects"
import Link from "next/link"
import Image from "next/image"
import { Container, Content } from "@/styles/pageStyles"

const CarouselWrapper = styled.div`
	display: flex;
	transition: transform 0.5s ease-in-out;
	gap: 2rem;

	@media (max-width: 1200px) {
		flex-direction: column;
		align-items: center;
	}
`

const CarouselContainer = styled.div`
	width: 100%;
	position: relative;
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

		@media (max-width: 1200px) {
			font-size: 1.5rem;
		}
	}

	p {
		font-size: 1.2rem;
		font-weight: 400;

		@media (max-width: 1200px) {
			font-size: 1rem;
		}
	}

	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-radius: 1rem;

		@media (max-width: 1200px) {
			height: 150px;
		}
	}

	&:not(.active) {
		opacity: 0.5;
		transform: scale(0.8);
	}

	@media (max-width: 1200px) {
		width: 100%;
		height: auto;
		padding: 1rem;
	}
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

	@media (max-width: 1200px) {
		display: none;
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

	@media (max-width: 1200px) {
		margin-top: 0.5rem;
	}
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

	@media (max-width: 1200px) {
		width: 8px;
		height: 8px;
	}
`

const TechStack = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;

	span {
		font-size: 0.8rem;
		font-weight: 400;
		background-color: rgba(var(--white), 0.1);
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;

		@media (max-width: 1200px) {
			font-size: 0.7rem;
			padding: 0.2rem 0.4rem;
		}
	}
`

const Links = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 1rem;
	margin-top: auto;
`

const ViewLink = styled(Link)`
	font-size: 1.2rem;
	font-weight: 600;
	color: rgb(var(--white));
	background-color: rgba(var(--primary), 0.8);
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
	text-decoration: none;
	transition: background-color 0.2s;

	&:hover {
		background-color: rgb(var(--primary));
	}

	@media (max-width: 1200px) {
		font-size: 1rem;
		padding: 0.4rem 0.8rem;
	}
`

const SourceLink = styled(Link)`
	svg {
		transition: color 0.3s;
		color: rgba(var(--white), 0.8);
	}

	&:hover svg {
		color: rgb(var(--white));
	}

	@media (max-width: 1200px) {
		svg {
			width: 25px;
			height: 25px;
		}
	}
`

const StateIndicator = styled.div`
	position: absolute;
	top: 1rem;
	right: 1rem;
	font-size: 1.5rem;
`

const Projects = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const projectCount = projects.length

	const handlePrev = useCallback(() => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + projectCount) % projectCount
		)
	}, [projectCount])

	const handleNext = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % projectCount)
	}, [projectCount])

	const getVisibleProjects = useCallback(() => {
		const prevIndex = (currentIndex - 1 + projectCount) % projectCount
		const nextIndex = (currentIndex + 1) % projectCount
		return [projects[prevIndex], projects[currentIndex], projects[nextIndex]]
	}, [currentIndex, projectCount])

	return (
		<Container id="projects">
			<Content>
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
								<StateIndicator title="Project State">
									{project.state === "wip" ? "🔄" : "✅"}
								</StateIndicator>
								<h3>{project.title}</h3>
								{project.image && (
									<Image
										src={project.image}
										alt={project.title}
										width={400}
										height={200}
									/>
								)}
								<p>{project.description}</p>
								<TechStack>
									{project.techStack.map((tech, index) => (
										<span key={index}>{tech}</span>
									))}
								</TechStack>
								<Links>
									{project.href && (
										<ViewLink
											href={project.href}
											target="_blank"
											title="View Project"
											arial-label="View Project"
										>
											View Project
										</ViewLink>
									)}
									<SourceLink
										href={project.source}
										target="_blank"
										title="View Source"
										arial-label="View Source"
									>
										<Git size={30} />
									</SourceLink>
								</Links>
							</ProjectCard>
						))}
					</CarouselWrapper>
					<PrevButton onClick={handlePrev} aria-label="Previous Project">
						<CaretLeftFill size={50} />
					</PrevButton>
					<NextButton onClick={handleNext} aria-label="Next Project">
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
			</Content>
		</Container>
	)
}

export default Projects
