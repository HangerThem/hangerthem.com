"use client"

import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: 201, 14, 14;
    --white: 255, 255, 255;
    --black: 0, 0, 0;
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
    font-family: 'K2D', sans-serif;
    background-color: rgb(var(--black));
    color: rgb(var(--white));
  }
`
