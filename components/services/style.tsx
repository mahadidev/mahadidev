import styled from 'styled-components';
import { Button, Card } from '../subComponents';

export const Section = styled('section')`
	width: 100%;

	.services__container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem 0;
	}
`;

export const Wrapper = styled('div')`
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	display: grid;
	gap: 3rem;
	grid-template-columns: auto auto auto auto;

	@media (max-width: 1280px) {
		grid-template-columns: auto auto auto;
	}

	@media (max-width: 992px) {
		grid-template-columns: auto auto;
		gap: 1rem;
	}

	@media (max-width: 600px) {
		grid-template-columns: auto;
		gap: 2rem;
		padding: 0 1rem;
	}
`;

export const IconWrapper = styled('div')`
	width: 80px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	font-size: ${(props) => props.theme.fontSize.xl};
	background: ${(props) => `rgb(${props.theme.color.primary})`};
	color: ${(props) => `rgb(${props.theme.color.white})`};
	margin: 0 auto 1rem auto;
`;

export const Title = styled('h1')`
	text-align: center;
	font-size: ${(props) => props.theme.fontSize.base};
	text-transform: uppercase;
`;

export const Paragraph = styled('p')`
	text-align: center;
	font-size: ${(props) => props.theme.fontSize.base};
	color: ${(props) => `rgb(${props.theme.color.black} / 50%)`};
	font-weight: bold;
`;

export const ItemButton = styled(Button)``;

export const CardEffect = styled('div')`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: space-between;
	transition: all 0.2s ease-out;
	z-index: 1;
	opacity: 0;

	svg {
		margin: 0.5rem 0.5rem 1rem 0.5rem;
	}

	svg:last-child {
		margin-left: auto;
	}
`;

export const Item = styled(Card)`
	width: 100%;
	transition: all 0.2s ease-in-out;
	box-shadow: none;
	position: relative;
	overflow: hidden;
	padding: 2rem 1rem;
	box-shadow: 0 0 #0000, 0 0 #0000, 0px 34px 68px rgba(0, 0, 0, 0.06);

	${ItemButton}, ${Paragraph}, ${Title} {
		position: relative;
		z-index: 10;
	}

	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 5px;
		background: ${(props) => `rgb(${props.theme.color.primary} / 80%)`};
		opacity: 0;
		transition: all 0.2s ease-out;
	}

	&:hover:after,
	&:hover ${CardEffect} {
		opacity: 1;
	}
`;

export const TopContent = styled('div')`
	text-align: center;
	max-width: 500px;
	margin-bottom: 2rem;
`;
export const SectionTitle = styled('h1')`
	font-size: ${(props) => props.theme.fontSize.xl};
`;
export const SemiTitle = styled('p')`
	color: ${(props) => `rgb(${props.theme.color.primary})`};
	font-weight: bold;
`;
export const Desc = styled('p')`
	font-weight: bold;
	color: ${(props) => `rgb(${props.theme.color.black} / 50%)`};
`;
