import styled from 'styled-components';

export const Section = styled('section')<{
	navHeight: string | number | undefined;
}>`
	width: 100%;
	position: relative;
	overflow-x: hidden;

	.intro_container {
		min-height: calc(100vh - ${(props) => props.navHeight}px);
		margin-top: ${(props) => props.navHeight}px;
		padding-top: 2rem;
		padding-bottom: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (max-width: 1280px) {
			flex-direction: column;
			gap: 1.5rem;
		}
	}
`;

export const TextContent = styled('div')`
	max-width: 600px;
	width: 100%;

	h1 {
		font-size: ${(props) => props.theme.fontSize.xl};

		@media (max-width: 768px) {
			font-size: ${(props) => props.theme.fontSize.lg};
		}
	}
`;

export const CardWrapper = styled('div')`
	width: 100%;
	display: grid;
	grid-template-columns: auto auto;
	gap: 1rem;
	margin-top: 1.5rem;

	@media (max-width: 390px) {
		gap: 0.5rem;
	}
`;

export const CardTitle = styled('h2')`
	font-size: ${(props) => props.theme.fontSize.sm};
	text-align: center;

	@media (max-width: 390px) {
		font-size: ${(props) => props.theme.fontSize.xm};
	}
`;

export const CardCounter = styled('div')`
	font-size: ${(props) => props.theme.fontSize.lg};
	text-align: center;
	font-weight: bold;
`;

export const CardIcon = styled('div')`
	width: max-content;
	margin: 0 auto 0.5rem auto;
	padding: 1rem;
	background: red;
	font-size: ${(props) => props.theme.fontSize.xl};
	display: flex;
	align-items: center;
	border-radius: 100%;
	color: ${(props) => `rgb(${props.theme.color.white})`};
	background: ${(props) => `rgb(${props.theme.color.primary})`};
`;

export const CardEffect = styled('div')`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const CardItem = styled('div')`
	overflow: hidden;

	&:hover ${CardIcon} {
		background: ${(props) => `rgb(${props.theme.color.white})`};
		color: ${(props) => `rgb(${props.theme.color.primary})`};
	}

	&:hover ${CardTitle} {
		color: ${(props) => `rgb(${props.theme.color.white})`};
	}

	&:hover ${CardCounter} {
		color: ${(props) => `rgb(${props.theme.color.white})`};
	}
`;

export const ProjectBox = styled('div')`
	width: 100%;
	max-width: 400px;
	margin: 0 0 0 auto;

	@media (max-width: 1280px) {
		margin: auto;
	}
`;
