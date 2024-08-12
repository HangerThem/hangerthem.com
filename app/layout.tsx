import type { Metadata } from "next"
import { GlobalStyle } from "@/styles/globalStyle"
import StyledComponentsRegistry from "@/lib/registry"
import { ReCaptchaProvider } from "next-recaptcha-v3"
import { K2D } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

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
	metadataBase: new URL("https://hangerthem.com"),
	openGraph: {
		title: "HangerThem",
		siteName: "HangerThem",
		description: "Personal portfolio of HangerThem (Frank Borisjuk)",
		type: "website",
		locale: "en_US",
		alternateLocale: ["cs_CZ"],
		countryName: "Czechia",
		emails: ["f.borisjuk@hangerthem.com"],
		url: "https://hangerthem.com",
		determiner: "auto",
		ttl: 604800,
		audio: [],
		faxNumbers: [],
		images: [],
		phoneNumbers: [],
		videos: [],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={k2d.className}>
			<ReCaptchaProvider>
				<StyledComponentsRegistry>
					<GlobalStyle />
					<body>
						<Analytics />
						{children}
					</body>
				</StyledComponentsRegistry>
			</ReCaptchaProvider>
		</html>
	)
}
