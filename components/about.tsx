"use client"

import styled, { keyframes } from "styled-components"
import Image from "next/image"

const AboutContainer = styled.section`
  width: 100%;
  height: 100vh;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

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

const AboutContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 3rem;
    font-weight: 600;
    position: relative;

    &::before {
      content: "👋";
      position: absolute;
      left: -4rem;
      transform-origin: 70% 70%;
      animation: ${wave} 1s ease-in-out infinite;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    max-width: 600px;
  }
`

const AboutImage = styled.div`
  img {
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;
  }
`

export default function About() {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <h2>Hi! My name is Frank! </h2>
        <p>
          I am a passionate and innovative web developer based in Czech
          Republic. Ever since I laid hands on my first line of code, I&apos;ve
          been captivated by the boundless possibilities of the web. With a
          curious mind and a desire to stay on the cutting edge of technology, I
          constantly seek new challenges that push my skills to the next level.
        </p>
      </AboutContent>
      <AboutImage>
        <Image src="/borisjuk_01.png" alt="About us" width={500} height={500} />
      </AboutImage>
    </AboutContainer>
  )
}
