"use client"

import styled, { keyframes } from "styled-components"
import {
	Container as PrestyledContainer,
	Content as PrestyledContent,
} from "@/styles/pageStyles"
import Image from "next/image"
import confetti from "canvas-confetti"
import Link from "next/link"

const wave = keyframes`
	0% {
		transform: rotate(-15deg);
	}
	50% {
		transform: rotate(15deg);
	}
	100% {
		transform: rotate(-15deg);
	}
`

const Container = styled(PrestyledContainer)`
	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
	}
`

const Content = styled(PrestyledContent)`
	align-items: flex-start;

	h2 {
		font-size: 1.75rem;
		padding-left: 2rem;

		@media (min-width: 768px) {
			padding-left: 2rem;
			font-size: 2rem;
		}

		&::before {
			content: "👋";
			position: absolute;
			left: 1.75rem;
			transform-origin: 70% 70%;
			animation: ${wave} 1s ease-in-out infinite;

			@media (min-width: 768px) {
				left: 3rem;
			}
		}
	}

	@media (min-width: 768px) {
		width: 50%;
	}
`

const AboutImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		object-fit: cover;
		object-position: center;
		border-radius: 1rem;
		width: 100%;
		height: 100%;
		max-width: 500px;
	}

	@media (min-width: 768px) {
		width: 50%;
	}
`

export default function About() {
	return (
		<Container id="about">
			<Content>
				<h2>Hi! My name is Frank! </h2>
				<p>
					Hey there! I&apos;m Frank Borisjuk, a software developer from Czechia
					who loves working with tech.
				</p>
				<p>
					I&apos;ve built{" "}
					<Link
						href="https://github.com/HangerThem/linkboard"
						referrerPolicy="no-referrer"
						target="_blank"
					>
						Linkboard
					</Link>
					, a cool alternative to Linktree, and I&apos;m currently developing{" "}
					<Link
						href="https://github.com/HangerThem/ephemr"
						referrerPolicy="no-referrer"
						target="_blank"
					>
						Ephemr
					</Link>
					, a simple social network. I specialize in web development with skills
					in JavaScript, TypeScript, React, Next.js, Node.js, and Express.js. I
					also know my way around Java, C#, C, and C++.
				</p>
				<p>
					I believe in being precise and efficient, but I also think work should
					be fun and fulfilling. I keep up with the latest trends by reading
					forums and browsing GitHub.
				</p>
				<p>
					What excites me most about programming is its endless possibilities
					and practical applications. Plus, let&apos;s be honest, the money
					isn&apos;t bad either. While web development is my main focus,
					I&apos;m always ready to dive into new challenges.
				</p>
				<p>
					Thanks for visiting, and feel free to reach out if you want to connect
					or collaborate!
				</p>
			</Content>
			<AboutImage>
				<Image
					src="/borisjuk_01.png"
					alt="About us"
					width={500}
					height={500}
					onClick={(e) => {
						confetti({
							particleCount: 100,
							spread: 360,
							startVelocity: 30,
							origin: {
								x: e.clientX / window.innerWidth,
								y: e.clientY / window.innerHeight,
							},
						})
					}}
				/>
			</AboutImage>
		</Container>
	)
}
