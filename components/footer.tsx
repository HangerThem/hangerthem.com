"use client"

import Link from "next/link"
import styled from "styled-components"

const FooterContainer = styled.footer`
	width: 100%;
	background-color: rgb(var(--white), 0.1);
	color: rgb(var(--white));
	padding: 1rem 0;
`

const FooterContent = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;

	p {
		flex: 1;
		text-align: center;
		font-size: 1rem;

		&:not(:last-child) {
			@media (min-width: 768px) {
				border-right: 1px solid rgba(var(--white), 0.1);
			}
		}
	}

	@media (min-width: 768px) {
		flex-direction: row;
	}
`

export default function Footer() {
	return (
		<FooterContainer>
			<FooterContent>
				<p>
					Made with ❤️ by{" "}
					<Link
						href="https://github.com/HangerThem"
						aria-label="Frank Borisjuk's GitHub"
					>
						Frank Borisjuk
					</Link>
				</p>
				<p>&copy; 2024 - All rights reserved</p>
				<p>
					Sources available on{" "}
					<Link
						href="https://github.com/HangerThem/hangerthem.com"
						aria-label="This site's repository on GitHub"
					>
						GitHub
					</Link>
				</p>
			</FooterContent>
		</FooterContainer>
	)
}
