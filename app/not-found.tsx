"use client"

import Link from "next/link"
import styled from "styled-components"

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`

const Heading = styled.h2`
	font-size: 3rem;
	font-weight: 600;
`

const Paragraph = styled.p`
	font-size: 1.2rem;
	font-weight: 400;
`

const Button = styled(Link)`
	padding: 0.5rem 0.75rem;
	background-color: rgba(var(--primary), 0.8);
	color: rgb(var(--white));
	font-size: 1.2rem;
	font-weight: 600;
	border-radius: 0.25rem;
	text-decoration: none;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;

	&:hover {
		background-color: rgba(var(--primary), 1);
	}
`

const Layout = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`

export default function NotFound() {
	return (
		<Layout>
			<Container>
				<Heading>404 - Page Not Found</Heading>
				<Paragraph>
					We can&apos;t seem to find the page you&apos;re looking for.
				</Paragraph>
				<Paragraph>
					Please check the URL or click the button below to be redirected to the
					home page.
				</Paragraph>
				<Button href="/">Go Home</Button>
			</Container>
		</Layout>
	)
}
