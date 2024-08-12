import styled from "styled-components"

export const Container = styled.section`
	width: 100%;
	min-height: 100vh;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	@media (min-width: 768px) {
		padding: 4rem;
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	h2 {
		font-size: 3rem;
		font-weight: 600;

		@media (max-width: 768px) {
			font-size: 2rem;
		}
	}

	p {
		font-size: 1.2rem;
		font-weight: 400;

		@media (max-width: 768px) {
			font-size: 1rem;
		}
	}
`
