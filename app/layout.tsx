import type { Metadata } from "next"
import { GlobalStyle } from "@/styles/globalStyle"
import StyledComponentsRegistry from "@/lib/registry"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "HangerThem",
  description: "Personal portfolio of HangerThem (Frank Borisjuk)",
  authors: [
    {
      name: "Frank Borisjuk",
      url: "https://hangerthem.com",
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
      <html lang="en">
        <GlobalStyle />
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </StyledComponentsRegistry>
  )
}
