"use client"

import styled, { keyframes } from "styled-components"
import Logo from "@/icons/logo"
import Link from "next/link"

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(var(--background), 0.5);
  backdrop-filter: blur(10px);
  position: absolute;
  width: calc(100% - 4rem);
  margin: 2rem;
  border-radius: 1rem;
  z-index: 100;

  ul {
    display: flex;
    gap: 2rem;
    li {
      list-style: none;
      font-size: 1.5rem;
      font-weight: 600;
      cursor: pointer;

      a {
        text-decoration: none;
        color: rgba(var(--black), 0.7);
        transition: color 0.2s;
        font-weight: 400;
        &:hover {
          color: rgba(var(--black), 1);
        }

        &.active {
          color: rgba(var(--white), 1);
          font-weight: 600;
          text-shadow: 0 4px 5px rgba(var(--black), 0.5);
        }
      }
    }
  }

  svg {
    width: 4rem;
    height: 4rem;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: rgb(var(--white));
    text-shadow: 0 4px 5px rgba(var(--black), 0.5);
  }
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoWrapper>
        <Logo />
        <h1>HangerThem</h1>
      </LogoWrapper>
      <ul>
        <li>
          <Link href="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact me</Link>
        </li>
      </ul>
    </NavbarContainer>
  )
}

export default Navbar
