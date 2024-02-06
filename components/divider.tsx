"use client"

import styled from "styled-components"

const DividerLine = styled.div`
  width: 45%;
  height: 1px;
  background-color: rgba(var(--white), 0.5);
  border: none;
`

const DividerSquare = styled.div`
  width: 1rem;
  height: 1rem;
  transform: rotate(45deg);
  background-color: rgba(var(--white), 0.5);
`

const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const Divider = () => {
  return (
    <DividerContainer>
      <DividerLine />
      <DividerSquare />
      <DividerLine />
    </DividerContainer>
  )
}

export default Divider
