"use client"

import styled from "styled-components"

const DividerContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	padding: 1rem 0;
`

const DividerLine = styled.div`
	width: 40%;
	height: 1px;
	background-color: rgb(var(--white));
	border: none;

	@media (min-width: 768px) {
		width: 20%;
	}
`

const DividerSquare = styled.div`
	width: 1rem;
	height: 1rem;
	transform: rotate(45deg);
	background-color: rgb(var(--white));
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
