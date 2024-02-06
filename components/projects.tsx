"use client"

import styled from "styled-components"
import UnderConstruction from "@/icons/underConstruction"

const ProjectsContainer = styled.section`
  width: 100%;
  height: 100vh;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  svg {
    width: 15rem;
    height: 15rem;
  }
`

const ProjectsContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h2 {
    font-size: 3rem;
    font-weight: 600;
  }
`

export default function Projects() {
  return (
    <ProjectsContainer>
      <ProjectsContent>
        <h2>Projects</h2>
      </ProjectsContent>
      <UnderConstruction />
    </ProjectsContainer>
  )
}
