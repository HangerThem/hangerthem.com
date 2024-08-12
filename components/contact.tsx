"use client"

import styled from "styled-components"
import { useReCaptcha } from "next-recaptcha-v3"
import { useCallback, useState } from "react"
import { requestSendEmail } from "@/services/api-services/emailServices"
import { Container, Content } from "@/styles/pageStyles"
import { Instagram, Github, Discord, Linkedin } from "react-bootstrap-icons"
import Link from "next/link"

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	width: 100%;

	input,
	textarea {
		width: 100%;
		padding: 1rem;
		border: 1px solid rgba(var(--white), 0.1);
		background-color: rgba(var(--white), 0.1);
		color: rgb(var(--white));
		font-family: inherit;
		outline: none;
		border-radius: 0.25rem;

		&:active,
		&:focus {
			border-color: rgb(var(--primary));
		}
	}

	textarea {
		height: 200px;
		resize: none;
	}

	button {
		padding: 0.5rem 0.75rem;
		background-color: rgb(var(--primary), 0.8);
		color: rgb(var(--white));
		border: none;
		cursor: pointer;
		font-size: 1.2rem;
		font-weight: 600;
		font-family: inherit;
		transition: background-color 0.2s ease-in-out;
		border-radius: 0.25rem;

		&:hover {
			background-color: rgb(var(--primary));
		}

		&:disabled {
			background-color: rgba(var(--primary), 0.5);
			cursor: not-allowed;
		}
	}
`

const SocialMedia = styled.div`
	display: flex;
	gap: 1rem;
`

export default function Contact() {
	const [data, setData] = useState({
		name: "",
		email: "",
		message: "",
	})
	const [loading, setLoading] = useState(false)
	const { executeRecaptcha } = useReCaptcha()

	const handleSubmit = useCallback(
		async (event: React.FormEvent) => {
			event.preventDefault()
			setLoading(true)
			const recaptchaToken = await executeRecaptcha("form_submit")

			const response = await requestSendEmail({ ...data, recaptchaToken })

			if (response.status === 200) {
				alert("Email sent successfully!")
			} else {
				alert("Failed to send email! Please try again later.")
			}
			setLoading(false)
		},
		[executeRecaptcha, data]
	)

	return (
		<Container id="contact">
			<Content>
				<h2>☎️ Get in touch</h2>
				<p>Feel free to reach out to me for any queries or just to say hi!</p>
				<ContactForm onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Name"
						onChange={(e) => setData({ ...data, name: e.target.value })}
					/>
					<input
						type="email"
						placeholder="Email"
						onChange={(e) => setData({ ...data, email: e.target.value })}
					/>
					<textarea
						placeholder="Message"
						onChange={(e) => setData({ ...data, message: e.target.value })}
					></textarea>
					<button
						type="submit"
						disabled={!data.name || !data.email || !data.message || loading}
						aria-label="Send email"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</ContactForm>
				<p>Or connect with me on social media:</p>
				<SocialMedia>
					<Link
						href="https://www.instagram.com/ferda_borisjuk/"
						arial-label="Contact Frank Borisjuk on Instagram"
						target="_blank"
						rel="noreferrer"
					>
						<Instagram size={32} />
					</Link>
					<Link
						href="https://github.com/HangerThem"
						arial-label="Contact Frank Borisjuk on GitHub"
						target="_blank"
						rel="noreferrer"
					>
						<Github size={32} />
					</Link>
					<Link
						href="https://discord.com/users/495134242825699328"
						arial-label="Contact Frank Borisjuk on Discord"
						target="_blank"
						rel="noreferrer"
					>
						<Discord size={32} />
					</Link>
					<Link
						href="https://www.linkedin.com/in/franti%C5%A1ek-borisjuk-022686225/"
						arial-label="Contact Frank Borisjuk on LinkedIn"
						target="_blank"
						rel="noreferrer"
					>
						<Linkedin size={32} />
					</Link>
				</SocialMedia>
			</Content>
		</Container>
	)
}
