interface Skills {
	languages: Skill[]
	programmingLanguages: Skill[]
	technologies: Skill[]
	tools: Skill[]
}

interface Skill {
	name: string
	level: string
	persentage: number
}

const skills: Skills = {
	languages: [
		{
			name: "Czech",
			level: "Native",
			persentage: 100,
		},
		{
			name: "English",
			level: "C1",
			persentage: 90,
		},
		{
			name: "Portuguese",
			level: "A2",
			persentage: 30,
		},
		{
			name: "Greek",
			level: "A1",
			persentage: 15,
		},
	],
	programmingLanguages: [
		{
			name: "JavaScript",
			level: "Advanced",
			persentage: 95,
		},
		{
			name: "TypeScript",
			level: "Advanced",
			persentage: 93,
		},
		{
			name: "CSS",
			level: "Advanced",
			persentage: 92,
		},
		{
			name: "SQL",
			level: "Advanced",
			persentage: 85,
		},
		{
			name: "Python",
			level: "Intermediate",
			persentage: 70,
		},
		{
			name: "C#",
			level: "Intermediate",
			persentage: 52,
		},
		{
			name: "PHP",
			level: "Intermediate",
			persentage: 50,
		},
		{
			name: "Java",
			level: "Beginner",
			persentage: 22,
		},
		{
			name: "C",
			level: "Beginner",
			persentage: 20,
		},
	],
	technologies: [
		{
			name: "React",
			level: "Advanced",
			persentage: 95,
		},
		{
			name: "Next.js",
			level: "Advanced",
			persentage: 93,
		},
		{
			name: "Styled Components",
			level: "Advanced",
			persentage: 92,
		},
		{
			name: "Node.js",
			level: "Advanced",
			persentage: 85,
		},
		{
			name: "Tailwind CSS",
			level: "Intermediate",
			persentage: 70,
		},
		{
			name: "Express",
			level: "Intermediate",
			persentage: 68,
		},
		{
			name: "MongoDB",
			level: "Intermediate",
			persentage: 65,
		},
		{
			name: "PostgreSQL",
			level: "Intermediate",
			persentage: 65,
		},
		{
			name: "Docker",
			level: "Beginner",
			persentage: 30,
		},
	],

	tools: [
		{
			name: "Git",
			level: "Advanced",
			persentage: 95,
		},
		{
			name: "Figma",
			level: "Intermediate",
			persentage: 70,
		},
	],
}

export default skills
