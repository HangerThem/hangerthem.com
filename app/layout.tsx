import type { Metadata } from "next"
import { GlobalStyle } from "@/styles/globalStyle"
import Navbar from "@/components/navbar"
import StyledComponentsRegistry from "@/lib/registry"
import { K2D } from "next/font/google"

const k2d = K2D({
	weight: ["400", "500", "600"],
	adjustFontFallback: true,
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "HangerThem",
	description: "Personal portfolio of HangerThem (Frank Borisjuk)",
	authors: [
		{
			name: "Frank Borisjuk",
			url: "https://github.com/HangerThem",
		},
	],
	creator: "Frank Borisjuk",
	publisher: "Frank Borisjuk",
	keywords: ["Portfolio", "Personal", "Frank Borisjuk", "HangerThem"],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<StyledComponentsRegistry>
			<html lang="en" className={k2d.className}>
				<GlobalStyle />
				<body>
					<Navbar />

					{children}
				</body>
			</html>
		</StyledComponentsRegistry>
	)
}
