"use client"

import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: 239, 31, 31;
    --white: 255, 255, 255;
    --black: 5, 5, 5;
    --background: 217, 217, 217;
    --accent: 104, 104, 104;
  }

  ::selection {
    background-color: rgba(var(--primary), 0.5);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    scrollbar-width: thin;
    scrollbar-color: rgba(var(--primary), 0.5) rgba(var(--black), 0.5);

    &::-moz-selection {
      background-color: rgba(var(--primary), 0.5);
    }

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(var(--primary), 0.5);
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(var(--black), 0.5);
    }
  }

  body {
    background-color: rgb(var(--black));
    color: rgb(var(--white));
  }

  a {
    color: rgb(var(--primary));
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: rgb(var(--primary), 0.8);
    }
  }

  .grecaptcha-badge { 
    visibility: hidden !important;
}
`
