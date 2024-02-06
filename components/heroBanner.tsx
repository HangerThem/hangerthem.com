"use client"

import Image from "next/image"
import styled from "styled-components"

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(var(--black), 0.5);
  }
`

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 2rem;
  height: 4rem;
  border: 2px solid rgb(var(--white));
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  cursor: pointer;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    background-color: rgb(var(--white));
    border-radius: 50%;
    animation: scroll 2s infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateY(1rem);
    }
    100% {
      opacity: 0;
      transform: translateY(3rem);
    }
  }
`

export default function HeroBanner() {
  return (
    <HeroContainer>
      <Image
        src="/hero-banner.jpg"
        alt="Hero banner"
        width={1000}
        height={500}
      />
      <ScrollIndicator
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      />
    </HeroContainer>
  )
}
