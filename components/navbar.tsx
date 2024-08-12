"use client"

import styled, { keyframes } from "styled-components"
import { useRef, useState, useEffect, useCallback } from "react"
import links from "@/data/links"
import socialLinks from "@/data/socialLinks"
import Link from "next/link"

const ripple = keyframes`
	0% {
		transform: scale(0);
	}

	100% {
		transform: scale(1);
	}
`

const reverseRipple = keyframes`
	0% {
		transform: scale(1);
	}

	100% {
		transform: scale(0);
	}
`

const NavbarContainer = styled.nav`
	width: 100%;
	padding: 1rem 2rem;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: flex-end;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	background-color: rgb(var(--black));
	border-bottom: 1px solid rgba(var(--white), 0.1);

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: center;
	}
`

const LinksWrapper = styled.div`
	display: none;
	width: 100%;
	height: calc(100vh - 80px);
	z-index: 101;

	&.visible {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}

	@media (min-width: 768px) {
		flex: 1;
		display: flex;
		gap: 2rem;
		justify-content: space-evenly;
		height: auto;
	}
`

const LinksContainer = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	li {
		list-style: none;
		display: flex;

		a {
			font-size: 1.5rem;
			font-weight: 500;
			color: rgba(var(--white), 0.8);
			text-decoration: none;
			text-align: center;
			transition: all 0.3s ease;
			position: relative;

			&:hover {
				color: rgb(var(--white));
			}

			&.active {
				color: rgb(var(--white));

				&::before {
					position: absolute;
					content: "<";
					left: -1.25rem;
				}

				&::after {
					position: absolute;
					content: ">";
					right: -1.25rem;
				}
			}
		}
	}

	@media (min-width: 768px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 2rem;

		li {
			a {
				word-break: keep-all;
				white-space: nowrap;
				font-size: 1.2rem;
				width: 100%;
				font-weight: 400;
				color: rgb(var(--white));
				transition: all 0.3s ease;

				&:hover {
					color: rgb(var(--primary));
				}

				&.active {
					color: rgb(var(--primary));

					&::before {
						left: -1rem;
					}

					&::after {
						right: -1rem;
					}
				}
			}
		}
	}
`

const SocialLinksContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	a {
		font-size: 1.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		color: rgba(var(--white), 0.8);
		text-decoration: none;

		&:hover {
			color: rgb(var(--white));
		}
	}

	@media (min-width: 768px) {
		display: none;
	}

	@media (min-width: 980px) {
		display: flex;
	}
`

const Topbar = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 768px) {
		flex: 1;
		width: auto;
	}
`

const Title = styled.h1`
	font-size: 1.5rem;
	font-weight: 700;
	z-index: 102;

	a {
		text-decoration: none;
		color: var(--white);
	}

	@media (min-width: 768px) {
		font-size: 2rem;
	}
`

const HamburgerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	height: 40px;
	width: 40px;
	position: relative;
	z-index: 101;

	&.open::before,
	&.closing::before {
		content: "";
		width: 3000px;
		height: 3000px;
		position: absolute;
		z-index: -1;
		cursor: default;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		background-color: rgb(var(--primary));
	}

	&.open::before {
		animation: ${ripple} 0.5s ease-in forwards;
	}

	&.closing::before {
		animation: ${reverseRipple} 0.5s ease-out forwards;
	}
`

const Hamburger = styled.div`
	width: 100%;
	height: 2px;
	background-color: var(--white);
	position: relative;
	z-index: 102;

	&::before,
	&::after {
		content: "";
		width: 100%;
		height: 2px;
		background-color: rgb(var(--white));
		position: absolute;
		transition: all 0.3s ease;
	}

	&::before {
		transform: translateY(-0.5rem);
	}

	&::after {
		transform: translateY(0.5rem);
	}

	&.open {
		&::before {
			transform: rotate(45deg) translateY(0);
		}

		&::after {
			transform: rotate(-45deg) translateY(0);
		}
	}

	@media (min-width: 768px) {
		display: none;
	}
`

const Navbar = () => {
	const hanburgerRef = useRef<HTMLDivElement>(null)
	const [navState, setNavState] = useState({
		open: false,
		closing: false,
		visible: false,
		activeTag: "home",
	})

	const handleClick = useCallback(() => {
		if (navState.open) {
			setNavState((prev) => ({ ...prev, open: false, closing: true }))
			setTimeout(() => {
				setNavState((prev) => ({ ...prev, visible: false }))
			}, 200)
			setTimeout(() => {
				setNavState((prev) => ({ ...prev, closing: false }))
			}, 500)
			document.body.style.overflow = "auto"
		} else {
			setNavState((prev) => ({ ...prev, open: true }))
			setTimeout(() => {
				setNavState((prev) => ({ ...prev, visible: true }))
			}, 300)
			document.body.style.overflow = "hidden"
		}
	}, [navState.open])

	const handleResize = useCallback(() => {
		setNavState((prev) => ({
			...prev,
			open: false,
			visible: false,
			closing: false,
		}))
		document.body.style.overflow = "auto"
	}, [])

	const handleClickOutside = useCallback(
		(e: MouseEvent) => {
			if (!navState.open) return
			if (
				hanburgerRef.current &&
				!hanburgerRef.current.contains(e.target as Node)
			) {
				setNavState((prev) => ({ ...prev, open: false, closing: true }))
				setTimeout(() => {
					setNavState((prev) => ({ ...prev, visible: false }))
				}, 200)
				setTimeout(() => {
					setNavState((prev) => ({ ...prev, closing: false }))
				}, 500)
				document.body.style.overflow = "auto"
			}
		},
		[navState.open]
	)

	useEffect(() => {
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [handleResize])

	useEffect(() => {
		window.addEventListener("click", handleClickOutside)
		return () => window.removeEventListener("click", handleClickOutside)
	}, [navState.open, handleClickOutside])

	return (
		<NavbarContainer>
			<Topbar>
				<Title>
					<Link href="/" aria-label="HangerThem's Home Page">
						HangerThem
					</Link>
				</Title>
				<HamburgerWrapper
					ref={hanburgerRef}
					onClick={handleClick}
					className={navState.open ? "open" : navState.closing ? "closing" : ""}
				>
					<Hamburger className={navState.open ? "open" : ""} />
				</HamburgerWrapper>
			</Topbar>
			<LinksWrapper className={navState.visible ? "visible" : ""}>
				<LinksContainer>
					{links.map((link) => (
						<li key={link.id}>
							<Link
								href={link.href}
								arial-label={link.text}
								className={navState.activeTag === link.id ? "active" : ""}
								onClick={() =>
									setNavState((prev) => ({ ...prev, activeTag: link.id }))
								}
							>
								{link.text}
							</Link>
						</li>
					))}
				</LinksContainer>
				<SocialLinksContainer>
					{socialLinks.map((socialLink) => (
						<Link
							key={socialLink.id}
							href={socialLink.href}
							aria-label={socialLink.text}
						>
							{socialLink.icon}
							{socialLink.text}
						</Link>
					))}
				</SocialLinksContainer>
			</LinksWrapper>
		</NavbarContainer>
	)
}

export default Navbar
