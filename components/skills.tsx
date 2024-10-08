"use client"

import styled from "styled-components"
import skills from "@/data/skills"
import { Container, Content } from "@/styles/pageStyles"

const Categories = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
	}
`

const SkillCategory = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	flex: 1;

	h4 {
		font-size: 1rem;
		font-weight: 600;

		@media (min-width: 768px) {
			font-size: 1.5rem;
		}
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;

		li {
			width: 100%;
			font-size: 1rem;
			font-weight: 400;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
`

const SkillOMeter = styled.div<{ $level: number }>`
	width: 250px;
	height: 1rem;
	background-color: rgba(var(--white), 0.1);
	border-radius: 1rem;
	margin-top: 0.5rem;
	position: relative;

	&::before {
		content: "";
		display: block;
		width: ${({ $level }) => $level}%;
		height: 100%;
		background-color: rgb(var(--primary));
		border-radius: 1rem;
	}

	&::after {
		content: ${({ $level }) => `'${$level}%'`};
		font-size: 0.75rem;
		color: rgb(var(--white));
		text-align: center;
		width: 100%;
		top: 0;
		position: absolute;
	}
`

export default function Skills() {
	skills.languages.sort((a, b) => b.persentage - a.persentage)
	skills.programmingLanguages.sort((a, b) => b.persentage - a.persentage)
	skills.technologies.sort((a, b) => b.persentage - a.persentage)
	skills.tools.sort((a, b) => b.persentage - a.persentage)

	return (
		<Container id="skills">
			<Content>
				<h2>🎖️ Skills</h2>
				<p>
					Here are some of the languages, technologies, and tools that I have
					experience with. I am always learning new things and I am excited to
					learn more!
				</p>
				<Categories>
					{skills.languages && (
						<SkillCategory>
							<h3>Languages</h3>
							<ul>
								{skills.languages.map((language, index) => (
									<li key={index}>
										<span>
											{language.name} - {language.level}
										</span>
										<SkillOMeter $level={language.persentage} />
									</li>
								))}
							</ul>
						</SkillCategory>
					)}
					{skills.programmingLanguages && (
						<SkillCategory>
							<h3>Programming Languages</h3>
							<ul>
								{skills.programmingLanguages.map(
									(programmingLanguage, index) => (
										<li key={index}>
											<span>
												{programmingLanguage.name} - {programmingLanguage.level}
											</span>
											<SkillOMeter $level={programmingLanguage.persentage} />
										</li>
									)
								)}
							</ul>
						</SkillCategory>
					)}
					{skills.technologies && (
						<SkillCategory>
							<h3>Technologies</h3>
							<ul>
								{skills.technologies.map((technology, index) => (
									<li key={index}>
										<span>
											{technology.name} - {technology.level}
										</span>
										<SkillOMeter $level={technology.persentage} />
									</li>
								))}
							</ul>
						</SkillCategory>
					)}
					{skills.tools && (
						<SkillCategory>
							<h3>Tools</h3>
							<ul>
								{skills.tools.map((tool, index) => (
									<li key={index}>
										<span>
											{tool.name} - {tool.level}
										</span>
										<SkillOMeter $level={tool.persentage} />
									</li>
								))}
							</ul>
						</SkillCategory>
					)}
				</Categories>
			</Content>
		</Container>
	)
}
